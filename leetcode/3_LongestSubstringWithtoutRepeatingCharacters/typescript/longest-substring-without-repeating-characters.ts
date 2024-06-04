function lengthOfLongestSubstring(s: string): number {
    // Initialize the maximum length of substring found
    let maxLength = 0;
    // Initialize the starting index of the current window
    let left = 0;
    // Map to store the last seen index of each character
    const map = new Map<string, number>();

    // Iterate over each character in the string
    for (let right = 0; right < s.length; right++) {
        const character = s[right];
        // If the character is already in the map and its index is within the current window
        if (map.has(character) && map.get(character)! >= left) {
            // Move the start of the window to the right of the previous index of the current character
            left = map.get(character) + 1;
        }
        // Update the maximum length of the substring found so far
        maxLength = Math.max(maxLength, right - left + 1);
        // Update the last seen index of the current character
        map.set(character, right);
    }

    // Return the length of the longest substring without repeating characters
    return maxLength;
}
