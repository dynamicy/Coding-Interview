function findArrayQuadruplet(arr, s) {
  const n = arr.length;

  if (n < 4) {
    return [];
  }

  arr.sort((a,b) => a-b);

  for (let i = 0; i < n-3; i++) {
    for (let j = i+1; j < n-2; j++) {
      const r = s-arr[i]-arr[j];
      let low = j+1;
      let high = n-1;

      while (low < high) {
        if (arr[low] + arr[high] < r) {
          low++;
        } else if (arr[low] + arr[high] > r) {
          high--;
        } else {
          return [arr[i], arr[j], arr[low], arr[high]].sort((a,b) => a-b);
        }
      }
    }
  }
  return [];
}