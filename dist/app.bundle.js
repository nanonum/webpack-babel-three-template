webpackJsonp([0],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
var THREE = __webpack_require__(1);
var Three = (function () {
    function Three() {
        this.createRenderer();
        this.init();
    }
    Three.prototype.createRenderer = function () {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('sketch').appendChild(this.renderer.domElement);
    };
    Three.prototype.init = function () {
        this.frame = 0;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.x = 0;
        this.camera.position.z = -5;
        this.camera.position.y = 3;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        var mesh = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshNormalMaterial({}));
        this.scene.add(mesh);
    };
    Three.prototype.render = function () {
        requestAnimationFrame(this.render.bind(this));
        this.camera.position.x = Math.sin(this.frame * 0.025) * 10;
        this.camera.position.z = Math.cos(this.frame * 0.025) * 10;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.renderer.render(this.scene, this.camera);
        this.frame += 1;
    };
    return Three;
}());
$(function () {
    var three = new Three();
    three.render();
});


/***/ })

},[4]);
//# sourceMappingURL=app.bundle.js.map