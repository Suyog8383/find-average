let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
function findAverage(arr) {
  let total = arr.reduce((prev, curr) => prev + curr);
  let average = total / arr.length;
  return average;
}
console.log(findAverage(arr));
