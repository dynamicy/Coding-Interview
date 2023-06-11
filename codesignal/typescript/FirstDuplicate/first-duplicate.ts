function solution(a: number[]): number {
    const map = new Map();
    
    for (let i=0; i<= a.length; i++) {
      if (map.get(a[i]) == null) {
        map.set(a[i], i);
      } else {
        return a[i];
      }
    }
    return -1;
}
