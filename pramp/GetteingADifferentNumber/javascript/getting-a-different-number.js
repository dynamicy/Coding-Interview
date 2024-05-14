function getDifferentNumber(arr) {
    const set = new Set(arr);
    let i = 0;
  
    while (set.has(i)) {
      i++;
    }
    return i;
  }
  