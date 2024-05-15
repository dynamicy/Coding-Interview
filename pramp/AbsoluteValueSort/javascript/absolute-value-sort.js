function compare(a, b) {
    if (Math.abs(a) < Math.abs(b)) return false;
    if (Math.abs(b) < Math.abs(a)) return true;
    return a > b;
  }
  
  function absSort(arr) {
      /**
      @param arr: integer[]
      @return: integer[]
      */
    for (let i=0; i<arr.length; i++) {
      for (let j=i; j<arr.length; j++) {
        const current = arr[i];
        const next = arr[j];
        let temp;
  
        if (compare(current, next)) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;                    
        }    
      }
    }
    return arr;
  }