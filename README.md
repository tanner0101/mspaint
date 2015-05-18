# MS Paint for Javascript

HTML + JS to make simple MSPaint app

```html
<div id="sketch">
	<canvas id="paint"></canvas>
</div>
<script src="mspaint.js"></script>
```

```javascript
window.onload = function() {
	mspaint.start('#sketch', '#paint');
};
```