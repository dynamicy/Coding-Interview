function findBusiestPeriod(data) {
  let max = 0;
  let maxTimeStamp = 0;
  let current = 0;
  let n = data.length;

  for (let i=0; i<n; i++) {
    const visitors = data[i][1];
    const timeStamp = data[i][0];
    const isEnable = data[i][2];

    if (isEnable === 1) {
      current += parseInt(visitors);
    } else if (data[i][2] === 0) {
      current -= parseInt(visitors);
    }

    if (i<n-1 && timeStamp === data[i+1][0]) {
      continue;
    }

    if (current > max) {
      max = current;
      maxTimeStamp = timeStamp;
    }
  }

  return maxTimeStamp;
}
