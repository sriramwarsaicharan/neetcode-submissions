class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        nums =  nums.sort();
        let n = nums.length;

        let i=0;

        while(i<n){
            let lIndex = nums.lastIndexOf(nums[i]);
            if((lIndex - i + 1) > (n/2)){
                return nums[i];
            }
            i = lIndex+1
        }

        return nums[i];
        

    }
}
