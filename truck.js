// Created By: Patrick Gemmell
// Created On: May 2021
// This class is a subclass of Vehicle called truck.

// Importing the airplane class from another file
const Vehicle = require('./vehicle.js');

// This vehicle subclass is a truck
/**
* checking if userInput is int.
*/
class Truck extends Vehicle {
  // Constructor that defines fields
  /**
  * checking if userInput is int.
  * @param {string} truckColour
  */
  constructor(truckColour) {
    super(truckColour);
    this.colour = truckColour;
    this.licensePlateNumber = 'DEFAULT';
    this.tireNumber = 4;
  }

  // This setter sets the license plate of the truck
  /**
  * checking if userInput is int.
  * @param {string} licensePlateInput
  */
  setLicensePlate(licensePlateInput) {
    this.licensePlateNumber = licensePlateInput;
  }

  // This getter shows the user the license plate of the truck
  /**
  * checking if userInput is int.
  * @return {string}
  */
  getLicensePlate() {
    return this.licensePlateNumber;
  }

  // This method shows the user the tire number
  /**
  * checking if userInput is int.
  * @return {string}
  */
  getTires() {
    return this.tireNumber;
  }

  // This method blows the truck's horn
  /**
  * checking if userInput is int.
  * @return {string}
  */
  provideAir() {
    return 'HONK';
  }
}

// Exporting the subclass
module.exports = Truck;
