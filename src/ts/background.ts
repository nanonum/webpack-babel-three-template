'use strict';
import * as THREE from 'three';
export class Background{
  private scene: THREE.Scene;
  private camera: THREE.Camera;
  private opacity: number;

  constructor(opacity?: number){
    this.opacity = opacity || 0.1;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(0, window.innerWidth, window.innerHeight, 0, 0, 1000);
    this.createScene();
  }
  private createScene(){
    const geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 10, 10);
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: this.opacity,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = window.innerWidth/2;
    mesh.position.y = window.innerHeight/2;
    this.scene.add(mesh);
  }

  public render(renderer: THREE.WebGLRenderer){
    renderer.render(this.scene, this.camera);
  }
}
export default Background;
