function findPairsWithGivenDifference(arr, k) {
  const map = new Map();
  let result = [];

  // x - y = k => y, x
  for (let i=0; i<arr.length ;i++) {
    map.set((arr[i]-k), arr[i]);
  }

  // x - k = y
  for (let i=0; i<arr.length; i++) {
    if (map.has(arr[i])) {
      result.push([map.get(arr[i]), arr[i]]);
    }
  }
  return result;
}