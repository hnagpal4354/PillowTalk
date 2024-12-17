let pillows = []; // Array to store flying pillow objects
let pillowEmoji = '🛏️'; // Emoji for the flying pillow

function setup() {
  createCanvas(windowWidth, windowHeight); // Make canvas fill the window
  noSmooth(); // Avoid anti-aliasing
  noStroke(); // Remove any outline

  // Fix white borders by directly styling the canvas
  let canvas = document.querySelector('canvas');
  canvas.style.position = 'absolute'; // Position canvas at the very top
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.margin = '0';
  canvas.style.padding = '0';
  canvas.style.border = 'none'; // Explicitly remove border

  // Remove scrollbars
  document.body.style.overflow = 'hidden'; 
  document.body.style.margin = '0'; // Remove body margin
  document.body.style.padding = '0'; // Remove body padding

  // Create multiple pillows with random positions and velocities
  for (let i = 0; i < 20; i++) {
    pillows.push({
      x: random(width), // Random x position
      y: random(height), // Random y position
      vx: random(-2, 2), // Random horizontal velocity
      vy: random(-2, 2), // Random vertical velocity
    });
  }

  textSize(32); // Set font size for the emoji
  textAlign(CENTER, CENTER); // Center the emoji on position
}

function draw() {
  background(30, 30, 50); // Dark background for contrast

  // Draw and update each pillow
  for (let pillow of pillows) {
    // Draw the pillow emoji at its position
    text(pillowEmoji, pillow.x, pillow.y);

    // Update the position
    pillow.x += pillow.vx;
    pillow.y += pillow.vy;

    // Wrap around the edges
    if (pillow.x < 0) pillow.x = width;
    if (pillow.x > width) pillow.x = 0;
    if (pillow.y < 0) pillow.y = height;
    if (pillow.y > height) pillow.y = 0;
  }
}

// Handle browser window resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize canvas when the window size changes
}
