function shortestWordEditPath(source, target, words) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const wordset = new Set(words);
  let queue = [[source, 0]];
  let seen = new Set([source]);

  while (queue.length > 0) {
    const [word, depth] = queue.shift();
    if (word === target) return depth;

    for (let i=0; i<word.length; i++) {
      for (let c of alphabet) {
        const word2 = word.slice(0,i) + c + word.slice(i+1);
        if (wordset.has(word2) && !seen.has(word2)) {
          queue.push([word2, depth+1]);
          seen.add(word2);
        }
      }
    }
  }
  return -1;
}

const source = "bit", target = "dog";
const words = ["but", "put", "big", "pot", "pog", "dog", "lot"]
console.log(shortestWordEditPath(source, target, words));