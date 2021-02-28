// Listen to mousemove event
function track(event) {
  const x = event.clientX;
  const y = event.clientY;

  const pointer = new Pointer();

  const distance = pointer.getDistance(x, y);

  pointer.setScaleFromDistance(distance);
  pointer.setRotationFromPosition({ x, y });

  pointer.render();
}

// Initialize script
function init(track) {
  window.addEventListener('mousemove', track);
}

init(track);
