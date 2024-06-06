class MinStack {
    private stack: number[];     // Main stack to store all the elements
    private minStack: number[];  // Auxiliary stack to store the minimum elements

    constructor() {
        this.stack = [];         // Initialize the main stack
        this.minStack = [];      // Initialize the auxiliary stack
    }

    /**
     * Pushes an element onto the main stack.
     * If the element is smaller than or equal to the current minimum, it is also pushed onto the minStack.
     *
     * @param val - The value to be pushed onto the stack
     */
    push(val: number): void {
        this.stack.push(val);    // Push the value onto the main stack
        // If the minStack is empty or the new value is less than or equal to the current minimum, push it onto the minStack
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * Removes the element on top of the main stack.
     * If the removed element is the current minimum, it is also removed from the minStack.
     */
    pop(): void {
        // Pop the top element from the main stack and check if it is the current minimum
        if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop(); // Remove the top element from the minStack if it was the current minimum
        }
    }

    /**
     * Retrieves the top element of the main stack.
     *
     * @returns The top element of the main stack
     */
    top(): number {
        return this.stack[this.stack.length - 1]; // Return the top element of the main stack
    }

    /**
     * Retrieves the minimum element in the stack.
     *
     * @returns The minimum element in the stack
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1]; // Return the top element of the minStack, which is the current minimum
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
