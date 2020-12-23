import { SceneUtils } from './sceneUtils';
import { sendRequest } from '../utils/form'
import { Color } from 'three';

const innerWidth = window.innerWidth / 2;
const innerHeight = window.innerHeight / 2;

export class Three {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.geometry = new THREE.Geometry();
        this.mesh = null;
        this.material = [
            new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors }),
            new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true }),
        ];

        this.setData = this.setData.bind(this);
        this.renewal = this.renewal.bind(this);

        this.init();
    }

    async init() {
        this.renderer.setSize(innerWidth, innerHeight);

        this.camera.position.set(0, 0, 150);

        const { triangularFacesTemplate, vertices } = await sendRequest({ url: '/square' });

        this.geometry.vertices = vertices.map(([x, y, z]) => new THREE.Vector3(x, y, z));
        this.geometry.faces = triangularFacesTemplate.map(([a, b, c]) => {
            const face = new THREE.Face3(a, b, c);
            face.color = new Color('blue');
            return face;
        });

        this.mesh = SceneUtils.createMultiMaterialObject(this.geometry, this.material);
        this.mesh.rotation.x = 0.5;
        this.mesh.rotation.y = -0.6;

        this.scene.add(this.mesh);

        this.renewal();
    }

    setData(data) {
        const { vertices } = data;

        this.mesh.children.forEach(e => {
            e.geometry.vertices = vertices.map(([x, y, z]) => new THREE.Vector3(x, y, z));
            e.geometry.verticesNeedUpdate = true;
            e.geometry.elementsNeedUpdate = true;
            e.geometry.computeFaceNormals();
        });

        this.renewal();
    }

    renewal() {
        this.renderer.render(this.scene, this.camera);
    }

    getElement() {
        return this.renderer.domElement;
    }
}
