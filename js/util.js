function lerp(x, x0, x1, y0, y1) {
  const amount = (x - x0) / (x1 - x0);

  return y0 * (1 - amount) + y1 * amount;
}

function getAngle(x0, y0, x1, y1) {
  return Math.atan2(y1 - y0, x1 - x0);
}

function getDistance(x0, y0, x1, y1) {
  return Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2);
}
