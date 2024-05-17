function arrayOfArrayProducts(arr) {
    // your code goes here
    let isZeroIncluded = false;
    let product = 1;
    let result = [];

    if (arr.length <= 1) {
      return [];
    }

    arr.forEach((item) => {
      if (item === 0) {
        isZeroIncluded = true;
      } else {
        product *= item;
      }
    });

    arr.forEach((item) => {
      if (isZeroIncluded) {
        result.push(item === 0 ? product : 0)
      } else {
        result.push(product / item);
      }
    });

    return result;
  }