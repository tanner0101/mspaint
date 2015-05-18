# MS Paint for Javascript

HTML + JS to make simple MS Paint app

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

Check out a demo (my portfolio) running at http://tanner.xyz