function checkAB(num) {
  // you can only write your code here!
  var indexA = num.indexOf('a');
  var indexB = num.indexOf('b');
  for (var i = 0; i < num.length; i++) {
    if (num[i] === 'a' || num[i] === 'b') {
      console.log(i);
    }
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
// console.log(checkAB('i am sick')); // false
// console.log(checkAB('you are boring')); // true
// console.log(checkAB('barbarian')); // true
// console.log(checkAB('bacon and meat')); // false
