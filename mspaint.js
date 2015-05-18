var mspaint = {
	sketchSelector: '',
	paintSelector: '',
	paintContext: null,
	currentIcon: null,
	start: function(selector1, selector2) {
		this.sketchSelector = selector1;
		this.paintSelector = selector2;

		var canvas = document.querySelector(this.paintSelector);
		this.paintContext = canvas.getContext('2d');
		 
		var sketch = document.querySelector(this.sketchSelector);
		var sketch_style = getComputedStyle(sketch);
		canvas.width = parseInt(sketch_style.getPropertyValue('width'));
		canvas.height = parseInt(sketch_style.getPropertyValue('height'));

		var mouse = {
			x: 0, y: 0,
			getX: function() {
				return this.x - 65
			},
			getY: function() {
				return this.y - 55
			}
		};

		/* Drawing on Paint App */
		this.setLineWidth(5);
		this.setLineCap('round');
		this.setLineJoin('round');
		this.setColor('black');
		 
		/* Mouse Capturing Work */
		var machine = this;
		canvas.addEventListener('mousemove', function(e) {
			mouse.x = e.pageX - this.offsetLeft;
			mouse.y = e.pageY - this.offsetTop;
		}, false);

		canvas.addEventListener('mousedown', function(e) {
			machine.paintContext.beginPath();
			machine.paintContext.moveTo(mouse.getX(), mouse.getY());

			//initial dot
			mouse.x += 0.1;
			mouse.y += -0.1;
			onPaint();

			canvas.addEventListener('mousemove', onPaint, false);
		}, false);

		canvas.addEventListener('mouseup', function() {
			canvas.removeEventListener('mousemove', onPaint, false);
		}, false);

		var onPaint = function() {
			machine.paintContext.lineTo(mouse.getX(), mouse.getY());
			machine.paintContext.stroke();
		};

	},
	setLineWidth: function(lineWidth) {
		this.paintContext.lineWidth = lineWidth;
	},
	setLineCap: function(lineCap) {
		this.paintContext.lineCap = lineCap;
	},
	setLineJoin: function(lineJoin) {
		this.paintContext.lineJoin= lineJoin;
	},
	setColor: function(color) {
		this.currentIcon.style.background = '#' + color;
		this.paintContext.strokeStyle = '#' + color;
	},
}
