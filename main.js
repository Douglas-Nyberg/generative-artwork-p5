function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 255);
    noLoop();
  }
  
  function draw() {
    drawDynamicBackground();
    drawFluidSky();
  
   
    fill(255); 
    noStroke();
    textSize(24); 
    textStyle(BOLD); 
    textAlign(CENTER, CENTER);
    text("Press and hold the left mouse button", width / 2, height - 50);
  }
  
  function drawDynamicBackground() {
    let hueShift = sin(frameCount * 0.01) * 25 + 25; // Slow hue shift over time
    background(hueShift, 80, 95);
  }
  
  function drawFluidSky() {
    let xoff = 0;
    for (let x = 0; x < width; x += 7) {
      let yoff = 0;
      for (let y = 0; y < height; y += 7) {
        let c = map(noise(xoff, yoff, millis() / 1000), 0, 1, 0, 255);
        fill(c, 200, 255, 150);
        noStroke();
        ellipse(x, y, 10, 10);
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    drawFluidSky();
  }
  
  function mousePressed() {
    loop();
  }
  
  function mouseReleased() {
    noLoop();
  }
  