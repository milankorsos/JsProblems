/*
  You decide to test if your oddly-mathematical heating company is fulfilling its
   All-Time Max, Min, Mean and Mode Temperature Guarantee™.

  Write a class TempTracker with these methods:

  Optimize for space and time. Favor speeding up the getter functions
  (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.

  Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit,
  so we can assume they'll all be in the range 0..1100..110.

  If there is more than one mode, return any of the modes.

  https://www.interviewcake.com/question/javascript/temperature-tracker
*/

const TempTracker = function() {
  this.max;
  this.min;

  this.count = 0;
  this.sum = 0;

  this.mode;
  this.modeCount = 0;
  this.values = {};
};

// records a new temperature
TempTracker.prototype.insert = function(temp) {
  // Update max value
  if (!this.max) {
    this.max = temp;
  } else {
    this.max = Math.max(this.max, temp);
  }

  // Update min value
  if (!this.min) {
    this.min = temp;
  } else {
    this.min = Math.min(this.min, temp);
  }

  // Set mean
  this.count++;
  this.sum = this.sum + temp;

  // Set mode
  // Idea: to calculate the current mode based on this.values and store it
  if (!this.mode) {
    this.mode = temp;
    this.modeCount = 1;
  }
  if (!this.values[temp]) {
    this.values[temp] = 1;
  } else {
    this.values[temp]++;
  }
  for (let key in this.values) {
    const count = this.values[key];
    if (count > this.modeCount) {
      this.mode = key;
      this.modeCount = count;
    }
  }

};

// returns the highest temp we've seen so far
TempTracker.prototype.getMax = function() {
  // O(1) return if we keep track of Max
  return this.max;
};

// returns the lowest temp we've seen so far
TempTracker.prototype.getMin = function() {
  // O(1 return if we keep track of Min)
  return this.min;
};

// returns the mean of all temps we've seen so far
// (The mean of a list of values is the average.)
TempTracker.prototype.getMean = function() {
  // Keep track of the current average & number of recorded temps to be able to update current ave
  return this.sum / this.count;
};

// returns the mode of all temps we've seen so far
// (The mode of a set of values is the number which appears the most times.)
TempTracker.prototype.getMode = function() {
  // Keep a hash table for the different values & their counts
  return parseInt(this.mode, 10);
};

export default TempTracker;
