Completed
1. add card Directive
2. add ability to play with 4 cards
3. implement flip logic.
  a. if user flips over two wrong cards
    i. after a delay, flip those cards back.
  b. if user flips over two wrong cards
    i. flip those cards back.
  c. prevent completed cards from being flipped back down.
  d. prevent user from flipping cards over too fast
4. improve styling of cards
5. add ability to play with 24 cards

In Progress
6. shuffle the cards
  a. [The Fisher-Yates Shuffle](https://stackoverflow.com/a/2450976/298240)
7. improve transition on cards
  a. https://daneden.github.io/animate.css/
  b. https://ianlunn.github.io/Hover/
8. restore <!-- TODO <li class="active"></li> -->
9. swap out phantomJs for headless chrome
  a. stops us from using es6
10. install html preprocessor so templateUrls are loaded beforehand
  a. https://github.com/karma-runner/karma-ng-html2js-preprocessor
  b. unit testing difficult with http requests being fired for html documents
11. Refactor Cards Service.
  a. CardFactory and CardList
