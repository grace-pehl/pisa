function draw(data) {

	/* Use dimple.js to make the chart */
	var svg = dimple.newSvg("#chart", '100%', '100%')
	var myChart = new dimple.chart(svg, data);
	myChart.setMargins("200px", "110px", "40px", "40px");
	/* Chart is long, so duplicate x-axis top and bottom */
	var xAxisBottom = myChart.addMeasureAxis("x", "Math");
	var xAxisTop = myChart.addMeasureAxis("x", "Math");
	xAxisBottom.title = 'Average Math Score'
	xAxisTop.title = xAxisBottom.title
	var yAxis = myChart.addCategoryAxis('y', ['Country', 'Father']);
	yAxis.title = null;
	yAxis.addOrderRule('Math', false); /* put top scoring countries first */
	yAxis.addGroupOrderRule('Father', false) /*order bars to match legend */
	var mySeries = myChart.addSeries('Father', dimple.plot.bar);
	
	var myLegend = myChart.addLegend(200, 0, 120, 100, 'left', mySeries);
	myLegend.fontSize = '20px';
	myChart.draw()

	// Add a method to draw the chart on resize of the window
	window.onresize = function () {
    	myChart.draw(0, true);
	};
};

d3.csv('data/pisaFatherData.csv', draw);
	
