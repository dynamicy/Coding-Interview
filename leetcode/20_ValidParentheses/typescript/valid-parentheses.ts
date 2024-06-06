function isValid(s: string): boolean {
    // Stack to keep track of closing brackets
    const stack: string[] = [];

    // Mapping of opening to closing brackets
    const map: { [key: string]: string } = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    // Iterate through each character in the string
    for (let char of s) {
        // If the character is an opening bracket, push the corresponding closing bracket onto the stack
        if (map[char]) {
            stack.push(map[char]);
        } else {
            // If the character is a closing bracket, check if it matches the last opening bracket
            if (stack.pop() !== char) {
                return false; // Mismatched bracket found
            }
        }
    }

    // If the stack is empty, all brackets were properly closed and nested
    return stack.length === 0;
};
