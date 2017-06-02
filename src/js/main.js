'use strict'
require("babel-polyfill");

// module
import Background from './background';

// lib
// import * as $ from 'jquery';
import * as THREE from 'three';

class Curve{

  constructor(){
    this.twistness = Math.random() * Math.PI * 2;
    this.coefficient = (Math.random() * 10) - 5;
    return this;
  }

}

class Three {
  constructor(){
    this.createRenderer();
    this.init();
    this.background = new Background();
  }

  createRenderer(){
    this.renderer = new THREE.WebGLRenderer({
      preserveDrawingBuffer: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.autoClearColor = false;
    document.getElementById('sketch').appendChild(this.renderer.domElement);
  }

  init(){
    this.frame = 0;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.x = 0;
    this.camera.position.z = -5;
    this.camera.position.y = 3;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    var mesh = new THREE.Mesh(
      new THREE.BoxGeometry(5, 5, 5),
      new THREE.MeshNormalMaterial({
        // wireframe: true
      })
    )
    this.scene.add(mesh);
  }

  render(){
    requestAnimationFrame(this.render.bind(this));
    this.camera.position.x = Math.sin(this.frame * 0.025) * 10;
    this.camera.position.z = Math.cos(this.frame * 0.025) * 10;
    this.camera.position.y = Math.cos(this.frame * 0.0125) * 10;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.renderer.render(this.scene, this.camera);
    this.background.render(this.renderer);
    this.frame++;
  }
}

$(() => {
  var three = new Three();
  three.render();

});
