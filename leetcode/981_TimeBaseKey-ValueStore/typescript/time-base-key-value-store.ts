class TimeMap {
    // Store to maintain the key-value pairs with timestamps
    private store: Map<string, [string, number][]>;

    constructor() {
        // Initialize the store as a Map
        this.store = new Map();
    }

    // Method to set a value for a key at a specific timestamp
    set(key: string, value: string, timestamp: number): void {
        // If the key doesn't exist in the store, initialize an empty array for it
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }
        // Push the value and timestamp as a tuple into the array for the key
        this.store.get(key).push([value, timestamp]);
    }

    // Method to get a value for a key at the maximum timestamp less than or equal to the given timestamp
    get(key: string, timestamp: number): string {
        // If the key doesn't exist in the store, return an empty string
        if (!this.store.has(key)) {
            return '';
        }

        const values = this.store.get(key);
        let left = 0;
        let right = values.length - 1;
        let mid;

        // Binary search to find the appropriate value for the given timestamp
        while (left <= right) {
            mid = Math.floor((left + right) / 2);

            // Adjust search bounds based on comparison with the current midpoint's timestamp
            if (timestamp >= values[mid][1]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // Return the value at the found position, or an empty string if no valid timestamp is found
        return right >= 0 ? values[right][0] : '';
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
