module.exports = {
  cars: 3,
  car1spd: 50,
  car2spd: 80,
  car3spd: 90,
  dispData: function () {
    console.log("The average speed of the " + this.cars + " is " + aveSpeed() + " km/hr.");
  }
}

 function aveSpeed(){
    return Math.floor((module.exports.car1spd + module.exports.car2spd + module.exports.car3spd)/module.exports.cars);
  }
