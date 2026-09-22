class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

        s = s.split('').sort().join(",");
        t = t.split('').sort().join(",");

        if(s === t) return true;

        return false;
    }
}
