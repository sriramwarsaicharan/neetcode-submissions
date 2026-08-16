class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {}
        for(let i=0; i< nums.length; i++){
            console.log(map[nums[i]]);
            if(map[nums[i]] && map[nums[i]] === 1) return true;
            else map[nums[i]]= 1;
        }
        return false;
    }
}