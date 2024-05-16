function decodeVariations(s) {
  let n = s.length;
  const dp = new Array(n).fill(0);

  dp[n] = 1;

  for (let i=n-1; i>=0; i--) {
    if (s.charAt(i) === '0') {
      dp[i] = 0;
    } else if (s.charAt(i) === '1') {
      dp[i] = (dp[i+1] || 0) + (dp[i+2] || 0);
    } else if (s.charAt(i) === '2') {
      dp[i] = dp[i+1];
      if (i+1<n && s.charAt(i+1) <= '6') {
        dp[i] += dp[i+2];
      }
    } else {
      dp[i] = dp[i+1];
    }
  }
  return dp[0];
}