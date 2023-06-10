function solution(a: number[], b: number[]): boolean {
    if (a.length != b.length) {
        return false;
    }
    
    let swapCount = 0;
    for (let i=0; i<a.length; i++) {
        if (a[i] != b[i]) {
            swapCount++;
        }    
    }
    
    if (swapCount > 2){
        return false;
    }
    
    a.forEach((e) => {        
        if (b.includes(e)) {
            b.splice(b.indexOf(e), 1);
        }
    });
    return b.length === 0;
}
