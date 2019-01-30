function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var arr = [];
  for (var i = angka; i > 1; i--) {
    if (angka % i === 0) {
      arr.push(i);
    }
  }
  return arr[arr.length - 1]
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
