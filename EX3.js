const average = (...num) => num.reduce((a,b) => a+b)/ num.length;
console.log(average(3,2,1));



// var total = [0, 1, 2, 3].reduce(function(a, b) {
//   return a + b;
// });
// total == 6