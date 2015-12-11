function draw(data) {
	var margin = 10,
		width = 600 - margin,
		height = 400 - margin,
		barHeight = 20;
	var viewBox_dims = '0 0 '.concat((width + margin).toString(), ' ', (height + margin).toString());

	/* 0 http://stackoverflow.com/questions/16265123/resize-svg-when-window-is-resized-in-d3-js */
	var svg = d3.select("#chart")
	  .append('svg')
	  .attr("preserveAspectRatio", "xMinYMin meet")
	  .attr('height', height + margin)
	  .attr('width', width + margin)
	  .append("g");

	/* Use dimple.js to make the chart */
	var myChart = new dimple.chart(svg, data);
	myChart.addMeasureAxis("x", "Reading");
	myChart.addCategoryAxis('y', ['Country', 'Father']);
	myChart.addSeries(null, dimple.plot.bar);
	myChart.draw()

	// Add a method to draw the chart on resize of the window
	window.onresize = function () {
    	myChart.draw(0, true);
	};
};

d3.csv('data/dummydata.csv', draw);
	
