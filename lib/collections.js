Ressources = new Mongo.Collection(null, {
    transform: function (doc) {
        doc.calcRatioForGold = function () {
            console.log('gold')
            return this.gold + (this.goldPerHours / 60) / 60;
        };
        doc.calcRatioForWood = function () {
            console.log('wood')
            return this.wood + (this.woodPerHours / 60) / 60;
        };
        doc.calcRatioForRock = function () {
            console.log('rock')
            return this.rock + (this.rockPerHours / 60) / 60;
        };
        doc.calcRatioForFood = function () {
            console.log('food')
            return this.food + (this.foodPerHours / 60) / 60;
        };
        return doc;
    }
});

if (Ressources.find().count() === 0) {
    Ressources.insert({
        gold: 500,
        wood: 300,
        rock: 200,
        food: 100,
        goldPerHours: 500,
        woodPerHours: 300,
        rockPerHours: 200,
        foodPerHours: 100
    })
}