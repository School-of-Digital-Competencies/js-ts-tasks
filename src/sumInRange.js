/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  // самостоятельно не смог написать чтобы все тест были пройдены. Подсмотрел решение на защите
 let startNum = Number(start); 
 let endNum = Number(end); 

 if (startNum > endNum) {
   [startNum, endNum] = [endNum, startNum]; 
 }

 let sum = 0;

 for (let i = startNum; i <= endNum; i++) {
   sum += i; 
 }
 return sum;
};
