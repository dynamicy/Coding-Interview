function plusOne(digits: number[]): number[] {    
    let inputNumber = parseInt(digits.join(''));
    inputNumber += 1;
    return String(inputNumber).split('').map(Number);
};