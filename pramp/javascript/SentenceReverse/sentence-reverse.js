function reverseWords(arr) {
    // your code goes here
    return Array.from(arr.join('').split(' ').reverse().join().replace(/,/g,' '));
}