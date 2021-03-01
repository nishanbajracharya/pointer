// Listen to mousemove event
function track(event, pointer) {
  const x = event.clientX;
  const y = event.clientY;

  const distance = pointer.getDistance(x, y);

  pointer.setScaleFromDistance(distance);
  pointer.setRotationFromPosition({ x, y });

  pointer.render();
}

// Initialize script
function init(track) {
  const pointer = new Pointer();

  window.addEventListener('mousemove', event => track(event, pointer));
}

init(track);
