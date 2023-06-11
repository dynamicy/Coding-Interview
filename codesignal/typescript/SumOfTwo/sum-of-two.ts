function solution(a: number[], b: number[], v: number): boolean {    
    const map = new Map();
    
    for (let i=0; i<b.length; i++) {
        map.set(v-b[i], i);
    }
    
    for (let i=0; i<a.length; i++) {
        if (map.get(a[i]) != null) return true;   
    }
    return false;
}
