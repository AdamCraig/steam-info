import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['playtime_forever:desc'],
  sortedGames: Ember.computed.sort('allGames.games', 'sortBy'),
  topTenGames: Ember.computed(function() {
    var topTenArray = [];
    for(var index = 0; index < 10; index++) {
      topTenArray.push(this.get('sortedGames')[index]);
    }
    console.log("topTenArray:");
    console.log(topTenArray);
    return topTenArray;
  }),

  gameOneHours: Ember.computed('topTenGames', function() {
    var gameOne = this.get('topTenGames')[0];
    var gameOneHours = (gameOne.playtime_forever / 60).toFixed(2);
    return gameOneHours;
  }),

  gameTwoHours: Ember.computed('topTenGames', function() {
    var gameTwo = this.get('topTenGames')[1];
    var gameTwoHours = (gameTwo.playtime_forever / 60).toFixed(2);
    return gameTwoHours;
  }),

  gameThreeHours: Ember.computed('topTenGames', function() {
    var gameThree = this.get('topTenGames')[2];
    var gameThreeHours = (gameThree.playtime_forever / 60).toFixed(2);
    return gameThreeHours;
  }),

  gameFourHours: Ember.computed('topTenGames', function() {
    var gameFour = this.get('topTenGames')[3];
    var gameFourHours = (gameFour.playtime_forever / 60).toFixed(2);
    return gameFourHours;
  }),

  gameFiveHours: Ember.computed('topTenGames', function() {
    var gameFive = this.get('topTenGames')[4];
    var gameFiveHours = (gameFive.playtime_forever / 60).toFixed(2);
    return gameFiveHours;
  }),

  gameSixHours: Ember.computed('topTenGames', function() {
    var gameSix = this.get('topTenGames')[5];
    var gameSixHours = (gameSix.playtime_forever / 60).toFixed(2);
    return gameSixHours;
  }),

  gameSevenHours: Ember.computed('topTenGames', function() {
    var gameSeven = this.get('topTenGames')[6];
    var gameSevenHours = (gameSeven.playtime_forever / 60).toFixed(2);
    return gameSevenHours;
  }),

  gameEightHours: Ember.computed('topTenGames', function() {
    var gameEight = this.get('topTenGames')[7];
    var gameEightHours = (gameEight.playtime_forever / 60).toFixed(2);
    return gameEightHours;
  }),

  gameNineHours: Ember.computed('topTenGames', function() {
    var gameNine = this.get('topTenGames')[8];
    var gameNineHours = (gameNine.playtime_forever / 60).toFixed(2);
    return gameNineHours;
  }),

  gameTenHours: Ember.computed('topTenGames', function() {
    var gameTen = this.get('topTenGames')[9];
    var gameTenHours = (gameTen.playtime_forever / 60).toFixed(2);
    return gameTenHours;
  }),

  topGamesData: Ember.computed('this.gameOneHours', 'this.gameTwoHours', 'this.gameThreeHours', 'topTenGames', function() {
    return [
      {
          label: this.get('topTenGames')[0].appid + " hours",
          value: this.get('gameOneHours'),
          color:"#878BB6"
      },
      {
          label: this.get('topTenGames')[1].appid + " hours",
          value : this.get('gameTwoHours'),
          color : "#4ACAB4"
      },
      {
          label: this.get('topTenGames')[2].appid + " hours",
          value : this.get('gameThreeHours'),
          color : "#FF8153"
      },
      {
          label: this.get('topTenGames')[3].appid + " hours",
          value : this.get('gameFourHours'),
          color : "#FF5252"
      },
      {
          label: this.get('topTenGames')[4].appid + " hours",
          value : this.get('gameFiveHours'),
          color : "#FF9800"
      },
      {
          label: this.get('topTenGames')[5].appid + " hours",
          value : this.get('gameSixHours'),
          color : "#00BCD4"
      },
      {
          label: this.get('topTenGames')[6].appid + " hours",
          value : this.get('gameSevenHours'),
          color : "#CDDC39"
      },
      {
          label: this.get('topTenGames')[7].appid + " hours",
          value : this.get('gameEightHours'),
          color : "#C2185B"
      },
      {
          label: this.get('topTenGames')[8].appid + " hours",
          value : this.get('gameNineHours'),
          color : "#FFC107"
      },
      {
          label: this.get('topTenGames')[9].appid + " hours",
          value : this.get('gameTenHours'),
          color : "#536DFE"
      }
    ];
  })
});
