Completed
01. add card Directive
02. add ability to play with 4 cards
03. implement flip logic.
  a. if user flips over two wrong cards
    i. after a delay, flip those cards back.
  b. if user flips over two wrong cards
    i. flip those cards back.
  c. prevent completed cards from being flipped back down.
  d. prevent user from flipping cards over too fast
04. improve styling of cards
05. add ability to play with 24 cards
06. shuffle the cards
  a. [The Fisher-Yates Shuffle](https://stackoverflow.com/a/2450976/298240)
07. Provide a search box to quickly filter the list
08. Clicking on a row will select an alert and display a detail view
 a. add ui-grid.
09. Show some stats by analyzing the data
10. Clicking on a stat/filter item will filter the list view
11. Provide visualizations based on the data

In Progress
12. Pagination for the list view
13. Unit Tests
14. improve transition on cards
  a. https://daneden.github.io/animate.css/
  b. https://ianlunn.github.io/Hover/
15. restore <!-- TODO <li class="active"></li> -->
16. swap out phantomJs for headless chrome
  a. stops us from using es6
17. install html preprocessor so templateUrls are loaded beforehand
  a. https://github.com/karma-runner/karma-ng-html2js-preprocessor
  b. unit testing difficult with http requests being fired for html documents
18. Refactor Cards Service.
  a. CardFactory and CardList
