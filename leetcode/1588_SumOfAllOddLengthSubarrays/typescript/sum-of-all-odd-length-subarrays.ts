function sumOddLengthSubarrays(arr: number[]): number {
  const n = arr.length;
  let sum = 0;

  for (let i=1; i<=n; i+=2) {
    for (let j=0; j+i<=n; j++) {
      sum += arr.slice(j, j+i).reduce((acc, cur) => acc+cur);
    }
  }
  return sum;
};
