import Visibility from 'visibilityjs';

Meteor.startup(() => {
  console.log('This run first');
  let seconde = 1000;
  let minute = 60 * seconde;



  /**
   * This run forever
   */
  Visibility.every(seconde, function () {
    addValueToProfile();
  });

});


/**
 * Function called each secondes
 */
function addValueToProfile() {
  let ressources = Ressources.findOne();

  Ressources.update({}, {
    $set: {
      gold: ressources.calcRatioForGold(),
      wood: ressources.calcRatioForWood(),
      rock: ressources.calcRatioForRock(),
      food: ressources.calcRatioForFood()
    }
  });
}

/**
 * Main helper the run after each update
 */
Template.main.helpers({
  userRessources() {
    return Ressources.findOne();
  }
});