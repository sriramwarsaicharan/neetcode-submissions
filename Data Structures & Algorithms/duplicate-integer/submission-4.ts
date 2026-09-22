class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let duplicateIntegerCount = new Map();

        for(const num of nums){

            if(duplicateIntegerCount.has(num)){
                return true
            }else{
                duplicateIntegerCount.set(num, 1);
            }

        }

        return false;

    }
}
