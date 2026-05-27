class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const obj={}
        const obj1={}
        for(let i=0;i<s.length;i++){
            if(obj[s[i]]) obj[s[i]]+=1
            else obj[s[i]]=1
            if(obj1[t[i]]) obj1[t[i]]+=1
            else obj1[t[i]]=1
        }
      for(let key in obj){
        if(obj[key] !=obj1[key]){
            return false
        }
      }
      return true
    }
}
