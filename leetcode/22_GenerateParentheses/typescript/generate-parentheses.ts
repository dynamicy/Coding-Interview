function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    // Helper function to generate parentheses
    const generate = (open: number, close: number, current: string) => {
        // Base case: If no more open or close parentheses left to add
        if (open === 0 && close === 0) {
            result.push(current); // Add the current combination to the result
            return;
        }

        // If there are more close parentheses left to add than open ones
        // This ensures that we don't add a closing parenthesis before a matching opening parenthesis
        if (open < close) {
            generate(open, close - 1, current + ')'); // Add a closing parenthesis and recurse
        }

        // If there are still open parentheses left to add
        // This means we can add an opening parenthesis
        if (open > 0) {
            generate(open - 1, close, current + '('); // Add an opening parenthesis and recurse
        }
    }

    generate(n, n, ''); // Initial call to start the recursion with n open and n close parentheses
    return result; // Return the final list of valid combinations
};
