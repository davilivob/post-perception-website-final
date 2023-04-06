<script>
    import * as THREE from "three";
    import * as TWEEN from "tween";
    import {loadModel} from "../lib/LoadModel";
    import {onMount} from "svelte";


    let clickStartX = 0;
    let clickEndX = 0;

    let touchstartX = 0;
    let touchendX = 0;

    let boolChange = false;
    let boolChange2 = false;
    let boolAnimate = true;


    const raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();

    let index = 0;  //作品名稱index
    let mode = 0;  //切換有無點擊模型的模式

    let boolDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);  //判斷裝置類型
    //Set Scene
    const scene = new THREE.Scene();

    //Set Camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 0);

    camera.lookAt(0, 0, 0);
    scene.add(camera);


    const items = [];
    const itemPath = [
        '/home/static/gltf/Item1.gltf',
        '/home/static/gltf/Item2.gltf',
        '/home/static/gltf/Item3.gltf',
        '/home/static/gltf/Item4.gltf',
        '/home/static/gltf/Item5.gltf',
        // './static/gltf/Item6.gltf',
        '/home/static/gltf/Item7.gltf',
        '/home/static/gltf/Item8.gltf',
        '/home/static/gltf/Item9.gltf',
        '/home/static/gltf/Item10.gltf',
        '/home/static/gltf/Item11.gltf',
        '/home/static/gltf/Item12.gltf',
        '/home/static/gltf/Item13.gltf',
    ];

    let loadedCount = 0;
    const totalCount = itemPath.length;


    let grate, grate2, grate3, text;

    //Set Material
    const glassesMaterial = new THREE.MeshStandardMaterial({
        roughness: 0.1,
        metalness: 0.6,
        color: 0xffffff,
        opacity: 0.75,
        transparent: true,
        side: THREE.BackSide,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
    });

    const grateMaterial = new THREE.MeshStandardMaterial({
        roughness: 0.1,
        metalness: 0.6,
        color: 0x4642f4,
        opacity: 0.75,
        transparent: true,
        side: THREE.BackSide,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
    });

    //Set Light
    setLight();

    //Set Renderer
    const renderer = new THREE.WebGLRenderer({antialias: false});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x002266);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //Set WorksName
    const worksName = [
        'Frontier02',
        '野 視',
        '在高塔上做著白日夢',
        '!Virtual',
        'BizarreParadoxcallyMargin',
        // '夢尼瑪Monema',
        '空 _ 集合',
        '燈火闌珊處',
        '無題',
        '◯',
        '死 循 環',
        'Finding',
        'non-stop'
    ];


    const worksInformation = [
        'Frontier02, abc',
        '野 視, abc',
        '在高塔上做著白日夢, abc',
        '!Virtual, abc',
        'BizarreParadoxcallyMargin, abc',
        // '夢尼瑪Monema, abc',
        '空 _ 集合, abc',
        '燈火闌珊處, abc',
        '無題, abc',
        '◯, abc',
        '死 循 環, abc',
        'Finding, abc',
        'non-stop, abc'
    ];


    //-----Device-----

    function onPCControl() {
        text.position.set(-0.2, 0.5, -4);
        text.scale.set(3.1, 3.1, 3.1);
        name.style.top = "80%";
        name.style.fontSize = "57px";
        exit.style.width = "100px";
        exit.style.height = "100px";

        document.addEventListener("mousedown", (e) => {
            clickStartX = e.screenX;
            name.classList.remove("animation");
        });
        document.addEventListener("mouseup", (e) => {
            clickEndX = e.screenX;
            if (boolAnimate && mode === 0) {
                checkDirectionOfMouseSwipe();
                if (boolChange) {
                    var firstElement = items.shift();
                    items.push(firstElement);
                }
                if (boolChange2) {
                    var lastElement = items.pop();
                    items.unshift(lastElement);
                }
            }
        });

    }

    function onMobileControl() {
        text.position.set(-0.4, 1.1, -3.8);
        text.scale.set(1.4, 1.4, 1.4);
        name.style.top = "75%";
        name.style.fontSize = "23px";
        exit.style.width = "40px";
        exit.style.height = "25px";
        exit.style.top = "90%";
        exit.style.left = "10%";

        document.addEventListener("touchstart", (e) => {
            touchstartX = e.changedTouches[0].screenX;
            name.classList.remove("animation");
        });

        document.addEventListener("touchend", (e) => {
            touchendX = e.changedTouches[0].screenX;

            if (boolAnimate && mode === 0) {
                checkDirection();
                if (boolChange) {
                    var firstElement = items.shift();
                    items.push(firstElement);
                }
                if (boolChange2) {
                    var lastElement = items.pop();
                    items.unshift(lastElement);
                }
            }

        });

    }

    //-----Function-----

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }

    function setLight() {
        const lights = {
            PL1: new THREE.PointLight(0x919eff, 9, 7, 7),
            PL2: new THREE.PointLight(0x919eff, 5, 5, 4),
            PL3: new THREE.PointLight(0x919eff, 4, 4, 2),
            PL4: new THREE.PointLight(0x919eff, 4, 4, 2),
            SPL1: new THREE.SpotLight(0xffffff, 5, 3, 50, Math.PI / 2, 1),
            SPL2: new THREE.SpotLight(0xffffff, 16, 3, 50, Math.PI / 2, 1),
        };

        lights.PL1.position.set(0.35, -0.9, -3);
        lights.PL2.position.set(-0.25, 1, -3.4);
        lights.PL3.position.set(-1.5, -0.9, -3.6);
        lights.PL4.position.set(2, 1, -3.6);

        lights.SPL1.position.set(0, 0.5, -1.2);
        lights.SPL1.target.position.set(0, 0, -2.5);
        lights.SPL1.castShadow = false;
        lights.SPL2.position.set(1.5, 1, -1.2);
        lights.SPL2.target.position.set(1, 0, -2.5);
        lights.SPL2.castShadow = false;

        scene.add(lights.PL1);
        scene.add(lights.PL2);
        scene.add(lights.PL3);
        scene.add(lights.PL4);
        scene.add(lights.SPL1);
        scene.add(lights.SPL2);
    }

    function render() {
        renderer.render(scene, camera);
        if (grate) {
            grate.rotation.y += 0.00015;
            grate3.rotation.y += 0.00003;
            grate2.rotation.y += 0.00014;
            if (mode === 0) {
                if (items[0].rotation.y > 2 * Math.PI) {
                    items[0].rotation.y = 0
                }
                items[0].rotation.y += 0.013;
                if (boolDevice) {
                    new TWEEN.Tween(items[0].scale)
                        .to({x: 2, y: 2, z: 2}, 1000)
                        .start();

                    new TWEEN.Tween(items[0].position)
                        .to({x: 0, z: -2.5}, 1000)
                        .start();
                } else {
                    new TWEEN.Tween(items[0].scale)
                        .to({x: 2.5, y: 2.5, z: 2.5}, 1000)
                        .start();

                    new TWEEN.Tween(items[0].position)
                        .to({x: 0, z: -2.5}, 1000)
                        .start();
                }
                exit.style.opacity = "0";
                exit.style.transform = "translateY(10000px)";
                information.style.opacity = "0";

            } else if (mode === 1) {
                if (boolDevice) {
                    new TWEEN.Tween(items[0].scale)
                        .to({x: 4.5, y: 4.5, z: 4.5}, 1000)
                        .start();

                    new TWEEN.Tween(items[0].position)
                        .to({x: 0.55, z: -2.5}, 1000)
                        .start();

                    information.style.width = "75%"
                    information.style.height = "60%"
                    information.style.borderRadius = "10px";
                    informationText.style.fontSize = "11px";
                    informationText.style.padding = "8px";
                    informationText.style.margin = "8px";
                } else {
                    new TWEEN.Tween(items[0].scale)
                        .to({x: 4, y: 4, z: 4}, 1000)
                        .start();

                    new TWEEN.Tween(items[0].position)
                        .to({x: 0.6, z: -2.5}, 1000)
                        .start();

                    information.style.width = "25%"
                    information.style.height = "50%"
                    information.style.borderRadius = "25px";
                    information.style.transform = "translate(-95%, -50%)";
                    informationText.style.fontSize = "31px";
                    informationText.style.padding = "20px";
                    informationText.style.margin = "20px";
                }
                new TWEEN.Tween(items[0].rotation)
                    .to({y: 0}, 1000)
                    .start();
                name.classList.add("animation");
                exit.style.opacity = "0.7";
                exit.style.transform = "translateY(0px)";
                name.style.opacity = "0";
                information.style.opacity = "0.7";
            }
        }
    }

    function setItemPosition(_boolDevice) {
        items[0].position.set(0, 0, -2.5);

        for (let i = 1, j = 0.5, k = -8; i < items.length; i++, j += 2.5, k++) {
            items[i].position.set(j, -0.4, k);
        }
        for (const model of items) {
            if (_boolDevice) {
                model.scale.set(2, 2, 2);
            } else {
                model.scale.set(2.5, 2.5, 2.5);
            }
            model.material = glassesMaterial;
            scene.add(model);
        }

    }

    function checkDirectionOfMouseSwipe() {
        boolAnimate = false;

        if (clickStartX < clickEndX) {
            boolChange = true;
            boolChange2 = false;

            index++;
            if (index > worksName.length - 1) {
                index = 0;
            }

            name.style.opacity = "0";
            name.style.transform = "translateY(-150px)";
            setTimeout(() => {
                name.classList.add("animation");
                name.style.opacity = "1";
                name.style.transform = "translateY(0px)";
            }, 2000);

            let positionList = []
            for (const item of items) {
                const positions = item.position;
                positionList.push(positions);
            }

            for (let i = 0; i < items.length; i++) {
                if (i - 1 === -1) {
                    var tween = new TWEEN.Tween(items[i].position)
                        .to({
                            x: positionList[items.length - 1].x,
                            y: positionList[items.length - 1].y,
                            z: positionList[items.length - 1].z
                        }, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                } else {
                    var tween = new TWEEN.Tween(items[i].position)
                        .to({x: positionList[i - 1].x, y: positionList[i - 1].y, z: positionList[i - 1].z}, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                }
            }
        } else if (clickStartX > clickEndX) {
            boolChange = false;
            boolChange2 = true;

            index--;

            if (index < 0) {
                index = worksName.length - 1;
            }

            name.style.opacity = "0";
            name.style.transform = "translateY(-150px)";
            setTimeout(() => {
                name.classList.add("animation");
                name.style.opacity = "1";
                name.style.transform = "translateY(0px)";
            }, 2000);

            let positionList = []
            for (const item of items) {
                const positions = item.position;
                positionList.push(positions);
            }

            for (let i = 0; i < items.length; i++) {
                if (i + 1 === items.length) {
                    var tween = new TWEEN.Tween(items[i].position)
                        .to({x: positionList[0].x, y: positionList[0].y, z: positionList[0].z}, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                } else {
                    var tween = new TWEEN.Tween(items[i].position)
                        .to({x: positionList[i + 1].x, y: positionList[i + 1].y, z: positionList[i + 1].z}, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                }
            }
        } else {
            boolChange = false;
            boolChange2 = false;
            boolAnimate = true;
        }
        name.innerHTML = worksName[index];
        informationText.innerHTML = worksInformation[index];
    }

    function checkDirection() {

        boolAnimate = false;

        if (touchendX - touchstartX > 30) {
            boolChange = true;
            boolChange2 = false;

            index++;
            if (index > worksName.length - 1) {
                index = 0;
            }

            name.style.opacity = "0";
            name.style.transform = "translateY(-150px)";
            setTimeout(() => {
                name.classList.add("animation");
                name.style.opacity = "1";
                name.style.transform = "translateY(0px)";
            }, 2000);

            let positionList = []
            for (const item of items) {
                const positions = item.position;
                positionList.push(positions);
            }

            for (let i = 0; i < items.length; i++) {
                if (i - 1 === -1) {
                    var tween = new TWEEN.Tween(items[i].position)
                        .to({
                            x: positionList[items.length - 1].x,
                            y: positionList[items.length - 1].y,
                            z: positionList[items.length - 1].z
                        }, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                } else {
                    var tween = new TWEEN.Tween(items[i].position)
                        .to({x: positionList[i - 1].x, y: positionList[i - 1].y, z: positionList[i - 1].z}, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                }
            }
        } else if (touchendX - touchstartX < -30) {
            boolChange = false;
            boolChange2 = true;

            index--;

            if (index < 0) {
                index = worksName.length - 1;
            }

            name.style.opacity = "0";
            name.style.transform = "translateY(-150px)";
            setTimeout(() => {
                name.classList.add("animation");
                name.style.opacity = "1";
                name.style.transform = "translateY(0px)";
            }, 2000);

            let positionList = []
            for (const item of items) {
                const positions = item.position;
                positionList.push(positions);
            }

            for (let i = 0; i < items.length; i++) {
                if (i + 1 === items.length) {
                    var tween = new TWEEN.Tween(items[i].position)
                        .to({x: positionList[0].x, y: positionList[0].y, z: positionList[0].z}, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                } else {
                    var tween = new TWEEN.Tween(items[i].position)
                        .to({x: positionList[i + 1].x, y: positionList[i + 1].y, z: positionList[i + 1].z}, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                }
            }
        } else {
            boolChange = false;
            boolChange2 = false;
            boolAnimate = true;
        }
        name.innerHTML = worksName[index];
        informationText.innerHTML = worksInformation[index];
    }

    function onMouseDown(event) {
        event.preventDefault();

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersections = raycaster.intersectObjects(scene.children, false);

        if (intersections.length > 0) {
            const hitPoint = intersections[0].point; // 擊中物體的位置
            const origin = camera.position.clone(); // 攝像機的位置 // 射線的方向向量
            const distance = origin.distanceTo(hitPoint); // 射線的長度或距離

            if (distance < 2.7) {
                mode = 1;
            }
        }
        console.log(mode);
    }

    function onTouchDown(event) {
        event.preventDefault();

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersections = raycaster.intersectObjects(scene.children, false);

        if (intersections.length > 0) {
            const hitPoint = intersections[0].point; // 擊中物體的位置
            const origin = camera.position.clone(); // 攝像機的位置 // 射線的方向向量
            const distance = origin.distanceTo(hitPoint); // 射線的長度或距離

            if (distance < 2.7) {
                mode = 1;
            }
        }
        console.log(mode);
    }

    function animate() {
        requestAnimationFrame(animate);
        TWEEN.update();
        render();
    }

    let progressBar, name, exit, information, informationText;
    //Set Model

    onMount(async () => {
        progressBar = document.getElementById('loading-progress');
        name = document.querySelector("#work-name");  //作品名稱
        exit = document.querySelector("#exit");  //點模型後需要跳出去的ui
        information = document.querySelector("#work-information");  //資訊欄
        informationText = document.querySelector("#text");  //資訊欄裡面的字

        await loadModel('/home/static/gltf/grate.gltf').then(model => grate = model);
        await loadModel('/home/static/gltf/grate2.gltf').then(model => grate2 = model);
        await loadModel('/home/static/gltf/grate3.gltf').then(model => grate3 = model);
        await loadModel('/home/static/gltf/postperception.gltf').then(model => text = model);

        for (const path of itemPath) {
            await loadModel(path).then(item => {
                loadedCount++;
                const progress = Math.floor((loadedCount / totalCount) * 100);
                progressBar.style.width = progress / 2 + '%';
                progressBar.innerHTML = progress * 1 + '%';
                items.push(item);
                if (loadedCount === totalCount) {
                    progressBar.style.left = '15000px';
                }
            });
        }

        console.log('loaded')
        grate.position.set(0.1, 0, 0);
        grate3.position.set(0.1, 0, 0);
        grate2.position.set(0.1, 0, 0.1);
        grate.material = grateMaterial;
        text.position.set(-0, 0.50, -3.6);
        text.scale.set(2.2, 2.2, 2.2)

        items[3].position.set(0, 0, -2);

        for (const model of items) {
            model.scale.set(4, 4, 4);
        }

        scene.add(items[3]);
        scene.add(grate);
        scene.add(grate2);
        scene.add(grate3);
        scene.add(text);

        // Scroll to bottom when startup
        // window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "smooth"});


        name.innerHTML = worksName[index];
        informationText.innerHTML = worksInformation[index];

        //SetItem
        setItemPosition(boolDevice);


        //Bool Device
        if (boolDevice) {
            onMobileControl();
        } else {
            onPCControl();
        }

        //ChangeMode
        exit.addEventListener("click", () => {
            name.style.opacity = "1";
            mode = 0;
        });

        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("touchstart", onTouchDown);
        //WindowResize
        window.addEventListener("resize", onWindowResize);

        document.getElementById('main').appendChild(renderer.domElement);


        //Update
        animate();
    })

</script>

<!--<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">-->
<link rel="stylesheet" type="text/css" href="/home/css/home.css"/>

<div id="main" class="w-screen h-screen fixed">
    <div id="loading-progress"
         class="flex items-center justify-center text-black text-center rounded-2xl bg-gradient-to-tr from-violet-500 to-orange-500 transition-all duration-300">
        0 %
    </div>
    <!-- <canvas class="three"></canvas> -->
    <div class="container">
        <div id="work-name"></div>
        <div id="exit"></div>
        <div id="work-information">
            <p id="text">abc</p>
        </div>
    </div>
</div>
