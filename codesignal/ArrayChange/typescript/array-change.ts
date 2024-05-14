function arrayChange(inputArray: number[]): number {
    let move = 0;    
    for (let i = 1; i<inputArray.length; i++) {
        if (inputArray[i] <= inputArray[i-1]) {            
            const temp = inputArray[i];
            inputArray[i] = inputArray[i-1] + 1;
            move += inputArray[i] - temp;
        }
    }
    return move;
}
