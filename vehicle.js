// Created By: Patrick Gemmell
// Created On: May 2021
// This class creates a vehicle.
/**
 * This function is for throw.
 * @param {String} message
 */
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}
/**
* checking if userInput is int.
*/
class Vehicle {
  // Constructor that defines fields
  /**
  * checking if userInput is int.
  * @param {string} colourInput
  */
  constructor(colourInput) {
    this.colour = colourInput;
    this.speed = 0;
    this.maximumSpeed = 112;
  }

  // Setter for the colour
  /**
  * checking if userInput is int.
  * @param {string} userColour
  */
  setColour(userColour) {
    this.colour = userColour;
  }

  // Getter for the colour
  /**
  * checking if userInput is int.
  * @return {string}
  */
  getColour() {
    return this.colour;
  }

  // Getter for the vehicle speed
  /**
  * checking if userInput is int.
  * @return {string}
  */
  getSpeed() {
    return this.speed;
  }

  // Method that accelerates vehicle
  /**
  * checking if userInput is int.
  * @param {string} userIncrease
  * @return {string}
  */
  accelerate(userIncrease) {
    // Ensuring all fields are integers
    this.maximumSpeed = parseInt(this.maximumSpeed, 10);
    this.speed = parseInt(this.speed, 10);
    userIncrease = parseInt(userIncrease, 10);
    // Checking to see if speed exceeds maximum then increasing the speed
    if (this.speed + userIncrease > this.maximumSpeed) {
      throw new UserException('ERROR: Attempt to change vehicle ' +
                               'property beyond allowed bounds');
    } else {
      this.speed = this.speed + userIncrease;
    }

    // Returning the new speed to the user
    return this.speed;
  }

  // Method that deccelerates the vehicle
  /**
  * checking if userInput is int.
  * @param {int} userDecrease
  * @return {int}
  */
  decelerate(userDecrease) {
    // Ensuring all fields are integers
    this.speed = parseInt(this.speed, 10);
    userDecrease = parseInt(userDecrease, 10);

    // Checking to see if speed exceeds maximum then increasing the speed
    if (this.speed - userDecrease < 0) {
      throw new UserException('ERROR: Attempt to change vehicle ' +
                              'property beyond allowed bounds');
    } else {
      this.speed = this.speed - userDecrease;
    }

    // Returning the new speed to the user
    return this.speed;
  }
}

// Exporting the class
module.exports = Vehicle;
