/***********
 * Controller.js 
 *
 * Controls frame animation and drawing on the canvas
 */

var fps = 5; // Standard frames per second
window.setInterval(animate, 1000/fps);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x, y, size;
x = 0;
y = 0;
size = 10;

function draw() {

	ctx.fillStyle = 'green';

	if (x < canvas.width) {
		ctx.fillRect(x, y, size, size);
		x += 15;
	}
	
}

function animate() {

	// clear canvas and draw new frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
}
