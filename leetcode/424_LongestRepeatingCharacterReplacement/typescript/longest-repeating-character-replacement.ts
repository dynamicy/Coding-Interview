function characterReplacement(s: string, k: number): number {
    // Map to store the frequency of each character in the current window
    const freqMap = new Map<string, number>();
    let maxFreq = 0;  // The highest frequency of any single character in the current window
    let maxLength = 0;  // The maximum length of the valid substring found so far
    let left = 0;  // Left boundary of the sliding window

    // Iterate over each character in the string using the right boundary of the window
    for (let right = 0; right < s.length; right++)  {
        const character = s[right];
        // Update the frequency of the current character
        freqMap.set(character, (freqMap.get(character) ?? 0) + 1);
        // Update maxFreq to the highest frequency of any character in the current window
        maxFreq = Math.max(maxFreq, freqMap.get(character) ?? 0);

        // Check if the number of characters to be replaced exceeds k
        if ((right - left + 1) - maxFreq > k) {
            // Decrease the frequency of the character at the left boundary
            freqMap.set(s[left], (freqMap.get(s[left]) ?? 0) - 1);
            // Move the left boundary to the right
            left++;
        }

        // Update maxLength to the maximum length of the valid substring found
        maxLength = Math.max(maxLength, right - left + 1);
    }
    // Return the maximum length of the valid substring
    return maxLength;
};
