webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __webpack_require__(0);
var Background = (function () {
    function Background(opacity) {
        this.opacity = opacity || 0.1;
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(0, window.innerWidth, window.innerHeight, 0, 0, 1000);
        this.createScene();
    }
    Background.prototype.createScene = function () {
        var geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 10, 10);
        var material = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: this.opacity,
        });
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = window.innerWidth / 2;
        mesh.position.y = window.innerHeight / 2;
        this.scene.add(mesh);
    };
    Background.prototype.render = function (renderer) {
        renderer.render(this.scene, this.camera);
    };
    return Background;
}());
exports.Background = Background;
exports.default = Background;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var background_1 = __webpack_require__(3);
var $ = __webpack_require__(1);
var THREE = __webpack_require__(0);
var Curve = (function () {
    function Curve() {
        var twistness = Math.random() * Math.PI * 2;
        var coefficient = (Math.random() * 10) - 5;
        return this;
    }
    return Curve;
}());
var Three = (function () {
    function Three() {
        this.createRenderer();
        this.init();
        this.background = new background_1.default();
    }
    Three.prototype.createRenderer = function () {
        this.renderer = new THREE.WebGLRenderer({
            preserveDrawingBuffer: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.autoClearColor = false;
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
    Three.prototype.createBackground = function () {
    };
    Three.prototype.render = function () {
        requestAnimationFrame(this.render.bind(this));
        this.camera.position.x = Math.sin(this.frame * 0.025) * 10;
        this.camera.position.z = Math.cos(this.frame * 0.025) * 10;
        this.camera.position.y = Math.cos(this.frame * 0.0125) * 10;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.renderer.render(this.scene, this.camera);
        this.background.render(this.renderer);
        this.frame++;
    };
    return Three;
}());
$(function () {
    var three = new Three();
    three.render();
});


/***/ })
],[4]);
//# sourceMappingURL=app.bundle.js.map