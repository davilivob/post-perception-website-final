import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";

async function loadModel(fileName) {
    const dracoloader = new DRACOLoader();
    dracoloader.setDecoderPath('/home/three/')
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoloader);
    try {
        const gltf = await loader.loadAsync(fileName);
        const model = gltf.scene.children[0];
        return model;
    } catch (err) {
        console.error(`Failed to load model: ${err}`);
        return null;
    }
}

export {loadModel};
