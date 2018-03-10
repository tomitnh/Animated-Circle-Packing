/***********
 * Controller.js 
 *
 * Controls frame animation and drawing on the canvas
 */

var fps = 30; // Standard frames per second
window.setInterval(animate, 1000/fps);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var circles = [];
var counter = 0;

function draw() {

	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	spawnCircle()

	for(var i in circles){
		var c = circles[i];

		if (c.growing) {
			if (c.edges()) {
				c.growing = false;
			} else {
				//Checking if the circle reached other circles edge
				for (var j in circles) {
					var other = circles[j];
					if (c != other) {
						
						var d = dist(c.x,c.y,other.x,other.y);
						var R = c.r + other.r;
						if (d - 2 < R) {
							// the two circles overlapped
							c.growing = false;
							break;
						}
					}
				}
			}
		}
		
		c.show();
		c.grow();
		
	}
	
}

function spawnCircle() {
	var x = Math.random()*canvas.width;
	var y = Math.random()*canvas.height;

	var valid = true;
	for (var i in circles){
		var c = circles[i];
		var d = dist(x,y,c.x,c.y);
		if (d < c.r){
			valid = false;
			break;
		}
	}

	if (valid && counter < 500) {
		circles.push(new Circle(x,y));
		counter++;
	}
}

function animate() {
	// clear canvas and draw new frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
}

function dist(x1, y1, x2, y2) {
	// calculating distance with Pythagorean theorem
	var a = x2 - x1;
	var b = y2 - y1;
	return Math.sqrt(a*a + b*b);
}