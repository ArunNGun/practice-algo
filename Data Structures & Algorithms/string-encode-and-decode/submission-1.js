class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ""
        for(let i=0;i<strs.length;i++){
            str+=`${strs[i]}~`
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = []
        let st = ""
        for(let i =0;i<str.length;i++){
            if(str[i]==='~'){
                arr.push(st)
                st=""
                continue
            }
            st+=str[i]
        }
        return arr
    }
}
