class Circle {

	constructor(x_, y_){
		this.x = x_;
		this.y = y_;
		this.r = 1;
		this.growing = true;
	}
	
	grow() {
		if (this.growing)
			this.r += 1;
	}

	edges() {
		var canvas = document.getElementById('canvas');
		return (this.x + this.r > canvas.width ||
			this.x - this.r < 0 ||
			this.y + this.r > canvas.height ||
			this.y - this.r < 0);
	}

	show() {
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		ctx.strokeStyle = 'white';
		ctx.beginPath();
		ctx.ellipse(this.x, 
			this.y, 
			this.r, 
			this.r, 
			0, 
			0, 
			2 * Math.PI);
		ctx.stroke();
	}
}