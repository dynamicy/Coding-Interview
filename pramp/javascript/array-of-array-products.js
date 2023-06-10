function arrayOfArrayProducts(arr) {
    // your code goes here
    if (arr.length <= 1) {
      return [];
    }
    
    let product = 1;
    let isZeroIncluded = false;
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != 0) {
        product *= arr[i];      
      } else {
        isZeroIncluded = true;
      }
    }
    
    for (let i = 0; i< arr.length; i++) {
      if (isZeroIncluded === true) {
        result[i] = arr[i] != 0 ? 0 : product;
      } else {
        result[i] = product / arr[i];
      }
    }
    return result;
  }