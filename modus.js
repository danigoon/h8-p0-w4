function cariModus(arr) {
  // you can only write your code here!
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result.push(arr[i]);
        // console.log(result, '<=== j = ' + j + ' i = ' + i);
      }
    }
  }
  // console.log(result);
  if (result.length === 0) {
    return -1;
  }
  else {
    // console.log(result.length);
    var sums = 0;
    var mean = 0;
    for (var k = 0; i < result.length; i++) {
      sums += result[k];
    }

    mean = sums / arr.length;
    if (mean === result[0]) {
      return -1;
    }
    else {
      return result[0];
    }
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
