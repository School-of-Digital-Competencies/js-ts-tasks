/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
   // Convert input values to numbers in case they are passed as strings
   let startNum = Number(start); // Convert the start of the range to a number
   let endNum = Number(end); // Convert the end of the range to a number
 
   // Ensure the start of the range is less than or equal to the end
   // Swap the values if they are in the wrong order
   if (startNum > endNum) {
     [startNum, endNum] = [endNum, startNum]; // Swap startNum and endNum
   }
 
   // Initialize a variable to store the sum
   let sum = 0;
 
   // Loop through all numbers from startNum to endNum (inclusive)
   for (let i = startNum; i <= endNum; i++) {
     sum += i; // Add the current number to the total sum
   }
 
   // Return the total sum
   return sum;
 };
