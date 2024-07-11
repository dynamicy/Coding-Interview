function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    /**
     * Helper function to perform backtracking.
     * @param startIndex - The current index in candidates to start from.
     * @param currentCombination - The current combination of numbers being considered.
     * @param remainingTarget - The remaining target value to be achieved.
     */
    function backtrack(startIndex: number, currentCombination: number[], remainingTarget: number) {
        // If the remaining target is negative, the current combination is not valid
        if (remainingTarget < 0) {
            return;
        }

        // If the remaining target is zero, a valid combination has been found
        if (remainingTarget === 0) {
            result.push([...currentCombination]);
            return;
        }

        // Iterate over the candidates starting from the current index
        for (let i = startIndex; i < candidates.length; i++) {
            // Include the current candidate in the combination
            currentCombination.push(candidates[i]);

            // Recur with the updated combination and remaining target
            backtrack(i, currentCombination, remainingTarget - candidates[i]);

            // Remove the last candidate to backtrack and try the next candidate
            currentCombination.pop();
        }
    }

    // Edge case handling: Ensure target is positive and candidates are not empty
    if (target > 0 && candidates.length > 0) {
        backtrack(0, [], target);
    }

    return result;
}
