<script>
    import { information } from "../lib/info";
    import { loadModel } from "../lib/LoadModel";
    import { onMount } from "svelte";
    import * as THREE from "three";
    import * as TWEEN from "tween";
    const BASE_URL = import.meta.env.BASE_URL;

    export let params = {};

    let grate_1, grate_2, grate_3, title_model;
    let progress_bar, work_name_dom, exit_btn, info_dom, info_text;

    let all_info = $information[params.language];
    const artworks_info = all_info.art_teams;

    let clickStartX = 0;
    let clickEndX = 0;

    let touchstartX = 0;
    let touchendX = 0;

    let boolChange = false;
    let boolChange2 = false;
    let boolAnimate = true;

    const raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();

    let index = 0; //作品名稱index
    let mode = 0; //切換有無點擊模型的模式

    let is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); //判斷裝置類型
    //Set Scene
    const scene = new THREE.Scene();

    //Set Camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 0);

    camera.lookAt(0, 0, 0);
    scene.add(camera);

    const items = [];

    const itemPath = [
        `${BASE_URL}/home/static/gltf/Item1.gltf`,
        `${BASE_URL}/home/static/gltf/Item2.gltf`,
        `${BASE_URL}/home/static/gltf/Item3.gltf`,
        `${BASE_URL}/home/static/gltf/Item4.gltf`,
        `${BASE_URL}/home/static/gltf/Item5.gltf`,
        // `./static/gltf/Item6.gltf`,
        `${BASE_URL}/home/static/gltf/Item7.gltf`,
        `${BASE_URL}/home/static/gltf/Item8.gltf`,
        `${BASE_URL}/home/static/gltf/Item9.gltf`,
        `${BASE_URL}/home/static/gltf/Item10.gltf`,
        `${BASE_URL}/home/static/gltf/Item11.gltf`,
        `${BASE_URL}/home/static/gltf/Item12.gltf`,
        `${BASE_URL}/home/static/gltf/Item13.gltf`,
    ];

    let loadedCount = 0;
    const totalCount = itemPath.length;

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
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x002266);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //Set WorksName
    const worksName = [];
    const worksInformation = [];

    for (const team of artworks_info) {
        worksName.push(team.title);
        worksInformation.push(team.description);
    }

    //-----Device-----
    function onPCControl() {
        title_model.position.set(-0.2, 0.5, -4);
        title_model.scale.set(3.1, 3.1, 3.1);
        work_name_dom.style.top = "80%";
        work_name_dom.style.fontSize = "57px";
        exit_btn.style.width = "100px";
        exit_btn.style.height = "100px";

        document.addEventListener("mousedown", (e) => {
            clickStartX = e.screenX;
            work_name_dom.classList.remove("animation");
        });

        document.addEventListener("mouseup", (e) => {
            clickEndX = e.screenX;
            if (boolAnimate && mode === 0) {
                checkDirectionOfMouseSwipe();
                if (boolChange) {
                    let firstElement = items.shift();
                    items.push(firstElement);
                }
                if (boolChange2) {
                    let lastElement = items.pop();
                    items.unshift(lastElement);
                }
            }
        });
    }

    function onMobileControl() {
        title_model.position.set(-0.4, 1.1, -3.8);
        title_model.scale.set(1.4, 1.4, 1.4);
        work_name_dom.style.top = "75%";
        work_name_dom.style.fontSize = "23px";
        exit_btn.style.width = "40px";
        exit_btn.style.height = "25px";
        exit_btn.style.top = "90%";
        exit_btn.style.left = "10%";

        document.addEventListener("touchstart", (e) => {
            touchstartX = e.changedTouches[0].screenX;
            work_name_dom.classList.remove("animation");
        });

        document.addEventListener("touchend", (e) => {
            touchendX = e.changedTouches[0].screenX;

            if (boolAnimate && mode === 0) {
                checkDirection();
                if (boolChange) {
                    let firstElement = items.shift();
                    items.push(firstElement);
                }
                if (boolChange2) {
                    let lastElement = items.pop();
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
        if (grate_1) {
            grate_1.rotation.y += 0.00015;
            grate_3.rotation.y += 0.00003;
            grate_2.rotation.y += 0.00014;
            if (mode === 0) {
                if (items[0].rotation.y > 2 * Math.PI) {
                    items[0].rotation.y = 0;
                }
                items[0].rotation.y += 0.013;
                if (is_mobile) {
                    new TWEEN.Tween(items[0].scale).to({ x: 2, y: 2, z: 2 }, 1000).start();
                    new TWEEN.Tween(items[0].position).to({ x: 0, z: -2.5 }, 1000).start();
                } else {
                    new TWEEN.Tween(items[0].scale).to({ x: 2.5, y: 2.5, z: 2.5 }, 1000).start();
                    new TWEEN.Tween(items[0].position).to({ x: 0, z: -2.5 }, 1000).start();
                }
                exit_btn.style.opacity = "0";
                exit_btn.style.transform = "translateY(10000px)";
                info_dom.style.opacity = "0";
            } else if (mode === 1) {
                if (is_mobile) {
                    new TWEEN.Tween(items[0].scale).to({ x: 4.5, y: 4.5, z: 4.5 }, 1000).start();
                    new TWEEN.Tween(items[0].position).to({ x: 0.55, z: -2.5 }, 1000).start();

                    info_dom.style.width = "75%";
                    info_dom.style.height = "60%";
                    info_dom.style.borderRadius = "10px";

                    info_text.style.fontSize = "11px";
                    info_text.style.padding = "8px";
                    info_text.style.margin = "8px";
                } else {
                    new TWEEN.Tween(items[0].scale).to({ x: 4, y: 4, z: 4 }, 1000).start();

                    new TWEEN.Tween(items[0].position).to({ x: 0.6, z: -2.5 }, 1000).start();

                    info_dom.style.width = "25%";
                    info_dom.style.height = "50%";
                    info_dom.style.borderRadius = "25px";
                    info_dom.style.transform = "translate(-95%, -50%)";

                    info_text.style.fontSize = "21px";
                    info_text.style.padding = "20px";
                    info_text.style.margin = "20px";
                }
                new TWEEN.Tween(items[0].rotation).to({ y: 0 }, 1000).start();
                work_name_dom.classList.add("animation");
                exit_btn.style.opacity = "0.7";
                exit_btn.style.transform = "translateY(0px)";
                work_name_dom.style.opacity = "0";
                info_dom.style.opacity = "0.7";
            }
        }
    }

    function setItemPosition(_is_mobile) {
        items[0].position.set(0, 0, -2.5);

        for (let i = 1, j = 0.5, k = -8; i < items.length; i++, j += 2.5, k++) {
            items[i].position.set(j, -0.4, k);
        }
        for (const model of items) {
            const scale = _is_mobile ? 2 : 2.5;
            model.scale.set(scale, scale, scale);

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

            work_name_dom.style.opacity = "0";
            work_name_dom.style.transform = "translateY(-150px)";
            setTimeout(() => {
                work_name_dom.classList.add("animation");
                work_name_dom.style.opacity = "1";
                work_name_dom.style.transform = "translateY(0px)";
            }, 2000);

            let positionList = [];
            for (const item of items) {
                const positions = item.position;
                positionList.push(positions);
            }

            for (let i = 0; i < items.length; i++) {
                if (i - 1 === -1) {
                    let tween = new TWEEN.Tween(items[i].position)
                        .to(
                            {
                                x: positionList[items.length - 1].x,
                                y: positionList[items.length - 1].y,
                                z: positionList[items.length - 1].z,
                            },
                            3000
                        )
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                } else {
                    let tween = new TWEEN.Tween(items[i].position)
                        .to({ x: positionList[i - 1].x, y: positionList[i - 1].y, z: positionList[i - 1].z }, 3000)
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

            work_name_dom.style.opacity = "0";
            work_name_dom.style.transform = "translateY(-150px)";
            setTimeout(() => {
                work_name_dom.classList.add("animation");
                work_name_dom.style.opacity = "1";
                work_name_dom.style.transform = "translateY(0px)";
            }, 2000);

            let positionList = [];
            for (const item of items) {
                const positions = item.position;
                positionList.push(positions);
            }

            for (let i = 0; i < items.length; i++) {
                if (i + 1 === items.length) {
                    let tween = new TWEEN.Tween(items[i].position)
                        .to({ x: positionList[0].x, y: positionList[0].y, z: positionList[0].z }, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                } else {
                    let tween = new TWEEN.Tween(items[i].position)
                        .to({ x: positionList[i + 1].x, y: positionList[i + 1].y, z: positionList[i + 1].z }, 3000)
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
        work_name_dom.innerHTML = worksName[index];
        info_text.innerHTML = worksInformation[index];
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

            work_name_dom.style.opacity = "0";
            work_name_dom.style.transform = "translateY(-150px)";
            setTimeout(() => {
                work_name_dom.classList.add("animation");
                work_name_dom.style.opacity = "1";
                work_name_dom.style.transform = "translateY(0px)";
            }, 2000);

            let positionList = [];
            for (const item of items) {
                const positions = item.position;
                positionList.push(positions);
            }

            for (let i = 0; i < items.length; i++) {
                if (i - 1 === -1) {
                    let tween = new TWEEN.Tween(items[i].position)
                        .to(
                            {
                                x: positionList[items.length - 1].x,
                                y: positionList[items.length - 1].y,
                                z: positionList[items.length - 1].z,
                            },
                            3000
                        )
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                } else {
                    let tween = new TWEEN.Tween(items[i].position)
                        .to({ x: positionList[i - 1].x, y: positionList[i - 1].y, z: positionList[i - 1].z }, 3000)
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

            work_name_dom.style.opacity = "0";
            work_name_dom.style.transform = "translateY(-150px)";
            setTimeout(() => {
                work_name_dom.classList.add("animation");
                work_name_dom.style.opacity = "1";
                work_name_dom.style.transform = "translateY(0px)";
            }, 2000);

            let positionList = [];
            for (const item of items) {
                const positions = item.position;
                positionList.push(positions);
            }

            for (let i = 0; i < items.length; i++) {
                if (i + 1 === items.length) {
                    let tween = new TWEEN.Tween(items[i].position)
                        .to({ x: positionList[0].x, y: positionList[0].y, z: positionList[0].z }, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            boolAnimate = true;
                        });
                    tween.start();
                } else {
                    let tween = new TWEEN.Tween(items[i].position)
                        .to({ x: positionList[i + 1].x, y: positionList[i + 1].y, z: positionList[i + 1].z }, 3000)
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
        work_name_dom.innerHTML = worksName[index];
        info_text.innerHTML = worksInformation[index];
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

    //Set Model

    onMount(async () => {
        progress_bar = document.getElementById("loading-progress");
        work_name_dom = document.querySelector("#work-name"); //作品名稱
        exit_btn = document.querySelector("#exit"); //點模型後需要跳出去的ui
        info_dom = document.querySelector("#work-information"); //資訊欄
        info_text = document.querySelector("#text"); //資訊欄裡面的字

        await loadModel(`${BASE_URL}/home/static/gltf/grate_1.gltf`).then((model) => (grate_1 = model));
        await loadModel(`${BASE_URL}/home/static/gltf/grate_2.gltf`).then((model) => (grate_2 = model));
        await loadModel(`${BASE_URL}/home/static/gltf/grate_3.gltf`).then((model) => (grate_3 = model));
        await loadModel(`${BASE_URL}/home/static/gltf/postperception.gltf`).then((model) => (title_model = model));

        for (const path of itemPath) {
            await loadModel(path).then((item) => {
                loadedCount++;
                const progress = Math.floor((loadedCount / totalCount) * 100);
                progress_bar.style.width = progress / 2 + "%";
                progress_bar.innerHTML = progress * 1 + "%";
                items.push(item);
                if (loadedCount === totalCount) {
                    progress_bar.style.left = "15000px";
                }
            });
        }

        console.log("loaded");
        grate_1.position.set(0.1, 0, 0);
        grate_3.position.set(0.1, 0, 0);
        grate_2.position.set(0.1, 0, 0.1);
        grate_1.material = grateMaterial;
        title_model.position.set(-0, 0.5, -3.6);
        title_model.scale.set(2.2, 2.2, 2.2);

        items[3].position.set(0, 0, -2);

        for (const model of items) {
            model.scale.set(4, 4, 4);
        }

        scene.add(items[3]);
        scene.add(grate_1);
        scene.add(grate_2);
        scene.add(grate_3);
        scene.add(title_model);

        work_name_dom.innerHTML = worksName[index];
        info_text.innerHTML = worksInformation[index];

        //SetItem
        setItemPosition(is_mobile);

        //Bool Device
        if (is_mobile) {
            onMobileControl();
        } else {
            onPCControl();
        }

        //ChangeMode
        exit_btn.addEventListener("click", () => {
            work_name_dom.style.opacity = "1";
            mode = 0;
        });

        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("touchstart", onTouchDown);
        //WindowResize
        window.addEventListener("resize", onWindowResize);

        document.getElementById("main").appendChild(renderer.domElement);

        //Update
        animate();
    });
</script>

<!--<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">-->
<link rel="stylesheet" type="text/css" href="{BASE_URL}/home/css/home.css" />

<div id="main" class="w-screen h-screen fixed">
    <div id="loading-progress" class="h-8 flex items-center justify-center text-black text-center rounded-2xl bg-gradient-to-tr from-sky-500 to-amber-500 duration-300">0 %</div>
    <!-- <canvas class="three"></canvas> -->
</div>
<div class="flex justify-center items-center w-1/2 h-1/2 bg-white">
    <div id="work-name" />
    <div id="exit" class="fa-solid fa-close" />
    <div id="work-information">
        <p id="text" class="overflow-auto max-h-[30vh]" />
    </div>
</div>
