// Listen to mousemove event
function track(event) {
  console.log(event.clientX, event.clientY);
}

// Initialize script
function init(track) {
  window.addEventListener('mousemove', track);
}

init(track);
