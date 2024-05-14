function solution(a: number[]): boolean {
    const map = new Map();
    
    for (let i=0; i<a.length; i++) {
        if (map.get(a[i]) == null) {
            map.set(a[i], i);
        } else {
            return true;
        }
    }
    return false;
}
