function plusOne(digits: number[]): number[] {    
    // 123 => 124
    // 129 => 120 => 130
    // 199 => 190 => 100 => 200
    // 999 => 990 => 900 => 000 => 1000
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};