'use strict';

angular.module('memoryGameApp')
  .service('Cards', function ($timeout) {
        var self = this;
        var things = [... new Array(24).keys()];
        const cardDown = false;
        const cardUp = true;
        self.cardModels = [];
        for(let k in things) {
          for(let p in [0, 1]) {
            self.cardModels.push({
              key: k,
              pair: p,
              privateState: false,
              get state() {
                return this.privateState;
              },
              set state(s) {
                if(userFlipingToSeeCard(s)) {
                  if(userIsOnTurn(0)) {
                    incrementTurnCounter();
                  } else if (userIsOnTurn(1)) {
                    resetTurnCounter();
                    delay(flipWrongOnesBack);
                  } else if (userIsOnTurn(2)){
                    //keep the card flipped down.
                    s = cardDown;
                  }

                } else {
                  if(thingsTheUserGotRight.includes(this.key)) {
                    //keep the card flipped up.
                    s = cardUp;
                  }
                }
                this.privateState = s;
              },
            });
          }
        }

        function userFlipingToSeeCard(bool) {
          return !!bool;
        }
        function userIsOnTurn(turnCount) {
          return turnCount === getTheOnesTheUserJustTurnedUp().length;
        }

        function delay (fn) {
          $timeout(fn, 500);
        }

        var accessCount;
        function resetTurnCounter () {
          accessCount = 1;
        }
        resetTurnCounter();
        function incrementTurnCounter () {
          accessCount = accessCount + 1;
        }

        function flipWrongOnesBack() {
          if(userSelectedTheRightOnes()) {
            thingsTheUserGotRight.push(
              getTheOnesTheUserJustTurnedUp()[0].key
            );
          } else {
            getTheOnesTheUserJustTurnedUp()
              .forEach(cardModel => cardModel.state = false);
          }

          if(things.length === thingsTheUserGotRight.length) {
            window.alert('You Won!');
          }
        }
        function userSelectedTheRightOnes () {
          return getTheOnesTheUserJustTurnedUp()
            .reduce((a,b) => { return a.key === b.key; });
        }
        var thingsTheUserGotRight = [];
        function getTheOnesTheUserJustTurnedUp () {
          return getTheOnesTurnedUp()
            .filter(card    => { return ! thingsTheUserGotRight.includes(card.key);});
        }
        function getTheOnesTurnedUp () {
          return self.cardModels
            .filter(card    => { return card.state === true;});
        }
  });
