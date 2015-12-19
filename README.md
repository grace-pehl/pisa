# Summary

The Programme for International Student Assessment (PISA) is an international survey to measure the knowlege and skills of 15-year-olds applied to real-life situations.  In 2012, 510,000 students in 65 economies took part in the assessment, which had a special focus on math skills.  In nearly every economy, students who lived with their father out-performed students whose father was absent.

# Design

I initially intended to do an interactive visualization that would compare different family structures and the results of all 3 subjects.  This was too ambitious of a project since this is my first introduction to javascript, css, and html layout.  After 3 days struggling with flex boxes and css (commits Dec 10-12), I settled on a single chart focusing on fathers.

I selected a bar chart so that the different colors of bars could be easily compared for each country.  Since the country names are long, I ran the bars horizontally, so that the country labels would be easy to read.  I included a legend, but couldn't figure out how to give the legend a title.  I had been trying to put a caption box next to the chart, but took it out due to layout problems.  I think that with the headline and the legend that the chart will speak for itself.

# Feedback 1

Notice

* Are there really no fathers in the home in Israel?
* How are the items ordered?
* What's the mean/median score or how should I interpret this data?

Questions

* What's a good score?
* What kind of math and at what level are we talking about?  Algebra?  Calculus?

Relationships

* I notice that the blue is always higher for any given country.
* I notice that there does seem to be a regional difference between places, is there a way to highlight those?  (e.g.--Oceania countries are blue, Asia black, etc.)

Takeawys

* Blue seems better than red.

* Don't understand what I'm looking at or what I'm supposed to notice.  Nor do I really understand what I should interpret about the data.

Best of luck,
C******

# Design following feedback 1

* Israel - Yeah, that did look kinda weird.  All values were NA (which I had grouped with 'No' values), so I removed Israel from the data.
* Items seem to be ordered by increasing math score.  It looks pretty that way.  I experimented with listing the countries alphabetically, but the message was lost.  It was no longer clear that the blue bars were longer than the orange. Putting the top scoring countries first seems to make more sense.
* Added a second x-axis to run along the top of the chart.  Increased the legend font from 14px to 20px and moved legend above the chart.  Changed category names of the 'Father' variable to include the word father to improve the legend.
* I don't want to highlight regional differences, because that's not what this chart is about.

# Resources

PISA FAQ - http://www.oecd.org/pisa/pisafaq/
dimple.js documentation - https://github.com/PMSI-AlignAlytics/dimple/wiki