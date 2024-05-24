function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const sMap: Map<string, number> = new Map<string, number>();
    const tMap: Map<string, number> = new Map<string, number>();

    for (let i=0; i<s.length; i++) {
        let sValue = sMap.get(s[i]);
        let tValue = tMap.get(t[i]);
        sMap.set(s[i], sValue == null ? 0: sValue += 1);
        tMap.set(t[i], tValue == null ? 0: tValue += 1);
    }

    for (let [key, value] of sMap) {
        if (value !== tMap.get(key)) {
            return false;
        }
    }
    return true;
};
