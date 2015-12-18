function draw(data) {

	/* Use dimple.js to make the chart */
	var svg = dimple.newSvg("#chart", '100%', '100%')
	var myChart = new dimple.chart(svg, data);
	myChart.setMargins("200px", "10px", "10px", "40px");
	var xAxis = myChart.addMeasureAxis("x", "Math");
	xAxis.title = 'Median Math Score'
	var yAxis = myChart.addCategoryAxis('y', ['Country', 'Father']);
	yAxis.title = null;
	myChart.addSeries('Father', dimple.plot.bar);
	var myLegend = myChart.addLegend(500, 10, 100, 100);
	myLegend.fontSize = '14px';
	myChart.draw()

	// Add a method to draw the chart on resize of the window
	window.onresize = function () {
    	myChart.draw(0, true);
	};
};

d3.csv('data/pisaFatherData.csv', draw);
	
