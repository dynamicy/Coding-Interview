function solution(inputString: string): boolean {
    const arr = Array.from(inputString);
    let count = 0;
    
    while(arr.length > 0) {
        const element = arr.pop();
        if (element == null) {
            count++;
        } else {
            const index = arr.indexOf(element);
            if (index < 0) {
                count++;
            } else {
                arr.splice(index, 1);
            }
        }
    }
    return count < 2;
}
