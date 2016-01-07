# Summary

The Programme for International Student Assessment (PISA) is an international survey to measure the knowlege and skills of 15-year-olds applied to real-life situations.  In 2012, 510,000 students in 65 economies took part in the assessment, which had a special focus on math skills.  In nearly every economy, students who lived with their father out-performed students whose father was absent.

View the visualization at http://grace-pehl.github.io/pisa/

# Design

I initially intended to do an interactive visualization that would compare different family structures and the results of all 3 subjects.  This was too ambitious of a project since this is my first introduction to javascript, css, and html layout.  After 3 days struggling with flex boxes and css (commits Dec 10-12), I settled on a single chart focusing on fathers.

I selected a bar chart so that the different colors of bars could be easily compared for each country.  Since the country names are long, I ran the bars horizontally, so that the country labels would be easy to read.  I included a legend, but couldn't figure out how to give the legend a title.  I had been trying to put a caption box next to the chart, but took it out due to layout problems.  I think that with the headline and the legend that the chart will speak for itself.

# Feedback 1 (on initial design, [commit 609bc67](http://htmlpreview.github.io/?https://github.com/grace-pehl/pisa/blob/609bc676812770de1afc0409cf57483415ce17e2/index.html)) 
**Note**: *Links to old commits seem to be slower to load*

> ## Notice
> * Are there really no fathers in the home in Israel?
> * How are the items ordered?
> * What's the mean/median score or how should I interpret this data?
> ## Questions
> * What's a good score?
> * What kind of math and at what level are we talking about?  Algebra?  Calculus?
> ## Relationships
> * I notice that the blue is always higher for any given country.
> * I notice that there does seem to be a regional difference between places, is there a way to highlight those?  (e.g.--Oceania countries are blue, Asia black, etc.)
> ## Takeawys
> * Blue seems better than red.
> * Don't understand what I'm looking at or what I'm supposed to notice.  Nor do I really understand what I should interpret about the data.
> Best of luck,
> C******

# Design changes following feedback 1

* Israel - Yeah, that did look kinda weird.  All values were NA (which I had grouped with 'No' values), so I removed Israel from the data.
* Items seem to be ordered by increasing math score.  It looks pretty that way.  I experimented with listing the countries alphabetically, but the message was lost.  It was no longer clear that the blue bars were longer than the orange. Putting the top scoring countries first seems to make more sense.
* Added a second x-axis to run along the top of the chart.  Increased the legend font from 14px to 20px and moved legend above the chart.  Changed category names of the 'Father' variable to include the word father to improve the legend.
* I don't want to highlight regional differences, because that's not what this chart is about.
* I added a text box with the summary information next to the chart.

# Feedback 2 (on [commit f56d378](http://htmlpreview.github.io/?https://github.com/grace-pehl/pisa/blob/f56d378e45c3a5d673e7c684fa4ab4b520800b3d/index.html))

> * What do you notice in the visualization?
> I find it hard to read.  The bars on the graph are to close together and the bars need to be wider.  You need to have a space between each country.  You say where the data comes from but you don’t tell the viewer that if you hold your mouse over the bar you will find out the exact number. 
> * What questions do you have about the data?
> The countries are not in alphabetical order making it hard to find a country.  The date should show countries by alphabetical order and by the highest to the lowest.  If you can’t make a button to make that change, then I would show it both ways.    
> * What relationships do you notice?
> That fathers in the family are important. 
> * What do you think is the main takeaway from this visualization?
> Math in the USA is not as high as it needs be.
> * Is there something you don’t understand in the graphic?
> The math score is based on what?  Where did the number 650 come from?  (Assume I know nothing.)
> As an additional comment the graph does not show the difference between families with or without fathers for each country.  You can calculated this but that is to much work for the viewer.
> I also think you should have a bar showing the average score for families with fathers and families without fathers.  That would show the viewer if a country is above or below the average.  Currently it is not known without a lot a work.

# Design Changes Following Feedback 2

* Dimple.js doesn't seem to have an option to increase the bar width.  Increasing the barGap just makes the bars skinnier.  Increasing the y axis's floatingBarWidth had no effect (since it's not a time axis.) I thought it might be automatically sizing the bars to fit within the chart, but increasing the height of the chart div had no effect (the chart svg's height is 100%).  I was able to increase the font size to 14px.
* I already tried alphabetizing the countries, but it made the message far more obscure.  Since the countries are now ordered by decreasing score, it's part of the reader's narrative to see how far down their country is in comparison.
* I think it's interesting that after noticing the main message, J*** made his own takeaway from the chart.
* I added a sentance about how the scores were normalized.  I worried that it might be too technical, but I asked J*** (who works in sales) and didn't think so.
* I created a custom tooltip that displays the difference in scores.
* Would it mean more to state the average national difference or to lump all the countries together?  A country could have a larger gap, but a much smaller percentage of absent fathers, or vice versa.  Ideally, I'd like to show a histogram of the score gaps with a tooltip listing the countries in that bin.  However, dimple does not currently support histograms. (It's [issue #107](https://github.com/PMSI-AlignAlytics/dimple/issues/107))  If I knew more programming, that could be a cool open source project to work on...but I need to finish the DAND first. 

# Feedback #3 (on [commit 4a6815e](http://htmlpreview.github.io/?https://github.com/grace-pehl/pisa/blob/4a6815e8977a536a72f205d3debc6186791e5538/index.html)

> I am unsure what your target audience is for this webpage. If it is more for the general populace, I would divide the table into 3 or more tables that clearly state what information you are trying to display. For example, labeling them something along the lines of "Good, Average, and Poor" would convey a clear message about what knowledge a person should be able to extract from the data.

> If the targeted audience is supposed to be more for just the presentation of knowledge, where the individual is can interpret the data as they choose, you might still want to divide the table into smaller charts. The whole chart will not fit on most screens. The way my resolution is set, I lose the data headings while scrolling through. The lines show up well, but it is hard to follow where a specific number in the middle of the chart falls.

> You might also consider grouping the countries in the same manner throughout the chart. The first Country is labeled "China-Shaghai" yet two down you label "Hong Kong-China." Later on, you change to parentheses and leave out the dash. Example "Massachusetts (USA)." Grouping alphabetically would also make it easier to flow through and find the information you're looking for. Then again, if you're trying to convey better math scores vs poorer, you should probably label the chart as such.

> I like the justification of the text. I would, however, fix the sentence "In 2012, 510,000 students in 65 economies took part in the assessment, which had a special focus on math skills." It reads like a run-on sentence. "510,000 students in sixty-five economies took part in this 2012 assessment which had a special focus on math skills." reads and looks better when formatted.

> In order to convey a profession appearance, I would also choose a less pink font for the top banner. The use of the bright color is usually a sign that the page was created by an adolescent. 

> I hope this helps.

> M******

# Design changes as a result of feedback 3

* Changed the title of the chart to make the takeaway message more clear.
* It's true that not all the countries fit on the screen at once.  More bars would fit if the bars were vertical, but then the country names would be vertical which would be hard to read.  I could use a subset of countries, but it feels rather arbitrary.  I'm not sure which to pick.  This data could also be displayed as a scatterplot with y = Math Score for Father in the Home and x = Math Score for Father Absent.  Then, every country (except Albania) would fall below a diagonal line with slope=1.  I think that would be much less intuitive than noticing that blue bars are longer than orange bars.
* M didn't notice my tooltip animation.  Added a line in the explanation (as J had suggested.  I didn't think it was essential, but two of three people needed to have it)
* The economies were labeled this way in the PISA dataset.  I'm hesitant to rename any of them given the footnotes about what is and is not a recognized separate entity.  There may be significance to the formatting of the names that I'm just not aware of.
* I don't like beginning a sentance with a number, but I see that the two numbers in a row could be confusing.  Revised the sentance.
* I like the purple. I haven't been an adolescent for decades, but don't want to be accused of being one.  I changed the title back to the Udacious Orange used in the Javascript Basics resume project, but then it clashed with the orange in the chart.  I did see how to create a custom chart palette in dimple.js, but I learned from another Data Vis class, that trying to pair colors is very difficult.  I looked at the other colors used in the Javascript resume css file and went with white.

# Resources

PISA FAQ - http://www.oecd.org/pisa/pisafaq/
dimple.js documentation - https://github.com/PMSI-AlignAlytics/dimple/wiki
Code to add a custom tooltip - http://dimplejs.org/adhoc_viewer.html?id=adhoc_bar_custom_tooltips
