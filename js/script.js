var circles = document.getElementsByClassName('round');
var circlesLength = circles.length;

var i = circlesLength;
while (i) {
    circles[i-1].addEventListener('mouseover', function() {
      this.className += ' active';
    });
    circles[i-1].addEventListener('mouseout', function() {
      var that = this;
      setTimeout(function () {
        that.className = that.className.replace(' active', '');
      }, 50);
    });
    --i;
}
