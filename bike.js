// Created By: Patrick Gemmell
// Created On: May 2021
// This class is a subclass of Vehicle called bike.

// Importing the airplane class from another file
const Vehicle = require('./vehicle.js');
/**
* checking if userInput is int.
*/
class Bike extends Vehicle {
  // Constructor that defines fields
  /**
  * checking if userInput is int.
  * @param {string} bikeColour
  */
  constructor(bikeColour) {
    super(bikeColour);
    this.colour = bikeColour;
    this.cadence = 0;
    this.tireNumber = 2;
  }

  // This method shows the user's cadence
  /**
  * checking if userInput is int.
  * @return {string}
  */
  getCadence() {
    // Calculating and returning cadence
    //   Equation of speed over 8.3 was derived by using average
    //   specifications of a bicycle to determine average multiplier
    this.cadence = super.getSpeed() * 8.3;
    return this.cadence;
  }
  // This method shows the user the tire number
  /**
  * checking if userInput is int.
  * @return {string}
  */
  getTires() {
    return this.tireNumber;
  }
  // This method rings the bike's bell.
  /**
  * checking if userInput is int.
  * @return {string}
  */
  ringBell() {
    return 'RING';
  }
}

// Exporting the subclass
module.exports = Bike;
