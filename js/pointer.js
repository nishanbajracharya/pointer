const MAX_SCALE = 1;
const MIN_SCALE = 0.3;

function Pointer(id = 'pointer') {
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.scale = MIN_SCALE;
  this.pointer = document.getElementById(id);

  if (!this.pointer) return;

  this.init = function () {
    this.getDOMPosition();

    window.addEventListener('resize', this.getDOMPosition.bind(this));
  };

  this.getDOMPosition = function () {
    this.x = this.pointer.offsetLeft;
    this.y = this.pointer.offsetTop;
  };

  this.getPosition = function () {
    return { x: this.x, y: this.y };
  };

  this.getDistance = function (x, y) {
    return getDistance(this.x, this.y, x, y);
  };

  this.setScale = function (scale) {
    this.scale = scale;
  };

  this.setScaleFromDistance = function (distance = MIN_SCALE) {
    const scale = lerp(distance, 0, this.x, MIN_SCALE, MAX_SCALE);

    this.setScale(scale);
  };

  this.setRotation = function (rotation = 0) {
    this.rotation = rotation;
  };

  this.setRotationFromPosition = function (position = { x: 0, y: 0 }) {
    const angle = getAngle(position.x, position.y, this.x, this.y);

    this.setRotation(angle);
  };

  this.render = function () {
    this.pointer.style.transform = `translate(-50%, -50%) rotate(${this.rotation}rad) scale(${this.scale})`;
  };

  this.init();
}
