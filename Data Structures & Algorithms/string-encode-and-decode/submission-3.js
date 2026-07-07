class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
    return strs.map(s => `${s.length}#${s}`).join('');
}
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
    const result = [];
    let i = 0;

    while (i < s.length) {
        // Find the '#' delimiter
        let j = i;
        while (s[j] !== '#') j++;

        // Parse the length
        const len = parseInt(s.slice(i, j));

        // Extract the string
        result.push(s.slice(j + 1, j + 1 + len));

        // Move pointer past this chunk
        i = j + 1 + len;
    }

    return result;
}
}
