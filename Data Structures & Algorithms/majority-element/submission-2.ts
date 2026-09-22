class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        nums.sort();

        let i=0;

        while(i< nums.length){
            let lIndex = nums.lastIndexOf(nums[i]);
            if((lIndex - i + 1) > ( nums.length/2)){
                return nums[i];
            }
            i = lIndex+1
        }

        return nums[i];
        

    }
}
