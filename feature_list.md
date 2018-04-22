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
12. Standup on public server.
13. Add doc header to Alerts
14. Move Alerts Model logic into Alerts.js
15. improve transition on cards
  - https://daneden.github.io/animate.css/
  - https://ianlunn.github.io/Hover/
- swap out phantomJs for headless chrome
  - stops us from using es6
- Unit Tests
  - Find out why unit tests are broken.
- Break main.scss into modules & pages
- Rename app module to DemoApp
- fix failing jscs
- add jquery to testing framework because click is not included
- Move Highcharts and Shuffle into a dependency path.
- node_modules update broke build

To Be Completed
- switch to es6 modules
    - remove bower
    - fix grunt build process to automatically concat and wire dependencies
- Google analytics
- add jscs to run on the normal build process
- install html preprocessor so templateUrls are loaded beforehand
  - https://github.com/karma-runner/karma-ng-html2js-preprocessor
  - unit testing difficult with http requests being fired for html documents
- cleanup cards logic
- Use semantic nav tags for header, footer, section, and navigation
- Move view logic in AlertsCtrl into a list/details directive
- Refactor out the Counter logic to make a general purpose counter.
- Pagination for the list view
- restore <!-- TODO <li class="active"></li> -->
- Refactor Cards Service.
  - CardFactory and CardList
