function angkaPrima(angka) {
    // you can only write your code here!
    var zeros = [];
    for (var i = angka - 1; i > 1; i--) {
        if (angka % i === 0) {
            zeros.push(i);
        }
    }
    console.log(zeros);
    // if (zeros.length > 0) {
    //     return false;
    // }
    // else {
    //     return true;
    // }
  }

  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
