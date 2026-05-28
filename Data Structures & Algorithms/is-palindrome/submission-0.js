class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // using two pointer on(n)
        const s1=s.replace(/[^a-z0-9]/gi,"").toLowerCase()
        let left =0,right=s1.length-1
        while(left<right){
            if(s1[left] === s1[right]){
                left++
                right--
            }else return false
        }
        return true

        // using stack

        // const isAlphaNumeric = (s) => /^[a-z0-9]+$/i.test(s)

        // let stac = []
        // let half = Math.ceil(s.length/2)
        // for(let i=0;i<half;i++){
        //     if(isAlphaNumeric(s[i])){
        //         stac.push(s[i])
        //     }
        // }
        // if(s.length%2 !==0) half++
        // for(let i=half;i<s.length;i++){
        //     if(!isAlphaNumeric(s[i])) continue
        //     if(s[i].toLowerCase() !== stac.pop().toLowerCase()){
        //         return false
        //     }
        // }
        // return true
    }
}
