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
	yAxis.fontSize = '14px';

	yAxis.addOrderRule('Math', false); /* put top scoring countries first */
	yAxis.addGroupOrderRule('Father', false) /*order bars to match legend */
	var mySeries = myChart.addSeries(['Country', 'Math', 'Difference', 'Father'], dimple.plot.bar);
	mySeries.getTooltipText = function (e) {
		return [
		e.aggField[0], 
		' (' + e.aggField[3] + ") Math Score: " + e.aggField[1],
		"Father makes a difference of " + e.aggField[2] + " points."
		];
	};
	
	var myLegend = myChart.addLegend(200, 0, 120, 100, 'left', mySeries);
	myLegend.fontSize = '20px';
	
	myChart.draw()

	// Add a method to draw the chart on resize of the window
	window.onresize = function () {
    	myChart.draw(0, true);
	};
};

var explanation_text = ["The Programme for International Student Assessment (PISA) is an international survey to measure the knowlege and skills of 15-year-olds applied to real-life situations.  In 2012, 510,000 students in 65 economies took part in the assessment, which had a special focus on math skills.  Scores are normalized such that the average score is 500 (st dev 100) for countries belonging to the OECD (Organization for Economic Co-operation and Development).", 
						"In nearly every economy, students who lived with their father out-performed students whose father was absent.  A difference of 34 points is equivalent to almost a full year of education."];
d3.select("#explanation")
	.append("p")
	.text(explanation_text[0]);
d3.select("#explanation")
	.append("p")
	.text(explanation_text[1]);
d3.csv('data/pisaFatherData.csv', draw);
	
