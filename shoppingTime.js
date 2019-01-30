function shoppingTime(memberId, money) {
  // you can only write your code here!
  var listItems = {
    item : ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'],
    price : [1500000, 500000, 250000, 175000, 50000]
  };

  if (memberId === '' || memberId === undefined) {
    return 'Mohon maaf toko x hanya berlaku untuk member saja.';
  }
  else if (money < Math.min(...listItems.price)) {
    return 'Mohon maaf, uang tidak cukup';
  }
  else {
    var listPurchased = [];
    var resultObj = {};
    var moneyLeft = money;
    for (var i = 0; i < listItems.price.length; i++) {
      if (moneyLeft >= listItems.price[i]) {
        moneyLeft -= listItems.price[i];
        listPurchased.push(listItems.item[i]);
      }
    }

    resultObj.memberId = memberId;
    resultObj.money = money;
    resultObj.listPurchased = listPurchased;
    resultObj.changeMoney = moneyLeft;
    return resultObj;
  }

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
