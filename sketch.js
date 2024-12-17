let pillows = []; // Array to store flying pillow objects
let pillowEmoji = '🛏️'; // Emoji for the flying pillow

function setup() {
  // Create a canvas that exactly matches the window size
  createCanvas(windowWidth, windowHeight);

  // Fix canvas and body styling
  let canvas = document.querySelector('canvas');
  canvas.style.position = 'fixed'; // Ensure the canvas stays fixed to the viewport
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.margin = '0';
  canvas.style.padding = '0';
  canvas.style.border = 'none';

  // Remove default margin, padding, and overflow from body and html
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.overflow = 'hidden'; // Prevent scrollbars
  document.documentElement.style.margin = '0';
  document.documentElement.style.padding = '0';

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
    text(pillowEmoji, pillow.x, pillow.y); // Draw the pillow emoji
    pillow.x += pillow.vx; // Update horizontal position
    pillow.y += pillow.vy; // Update vertical position

    // Wrap around the edges
    if (pillow.x < 0) pillow.x = width;
    if (pillow.x > width) pillow.x = 0;
    if (pillow.y < 0) pillow.y = height;
    if (pillow.y > height) pillow.y = 0;
  }

  // Add "PillowTalk" text at the center of the page
  fill(255); // White color for the text
  textSize(64); // Larger text size for "PillowTalk"
  text("PillowTalk", width / 2, height / 2); // Draw the text at the center
}

// Ensure the canvas resizes properly when the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust the canvas to match the new window size
}
