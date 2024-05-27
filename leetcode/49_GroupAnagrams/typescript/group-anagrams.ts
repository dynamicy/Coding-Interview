function groupAnagrams(strs: string[]): string[][] {
    const getKey = (s: string) => s.split('').sort().join('');
    const map = new Map();

    strs.forEach((str) => {
        const k = getKey(str);
        const array = map.get(k) || [];
        array.push(str);
        map.set(k, array);
    });
    return Array.from(map.values());
};
