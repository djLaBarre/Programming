function CircleUp() {
  this.x = random(0, width);
  this.y = random(height, 2 * height);
  this.r = random(2, 5);

  this.display = function() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.move = function() {
    this.y = this.y - random(4, 6);
    if ( this.y < 0) {
      this.y = height;
    }
  }
}
