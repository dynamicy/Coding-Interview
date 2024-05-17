function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const wordset = new Set(wordList);
  const queue: [string, number][] = [[beginWord, 1]];
  let seen = new Set([beginWord]);

  if (!wordset.has(endWord)) return 0;

  while (queue.length > 0) {
    const [word, depth]: [string, number] = queue.shift();
    if (word === endWord) return depth;

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
  return 0;
};