import {GLTFLoader} from "../three/GLTFLoader.js";
import {DRACOLoader} from "../three/DRACOLoader.js";

async function loadModel(fileName) {
    const dracoloader = new DRACOLoader();
    dracoloader.setDecoderPath('./three/');
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
