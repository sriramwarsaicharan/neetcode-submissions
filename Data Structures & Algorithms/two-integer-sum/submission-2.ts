class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let targetMap = new Map();
        let i =0;
        while(i<nums.length){
            let difference = target - nums[i];
            if(targetMap.has(difference)){
                return [i, targetMap.get(difference)]
            }else{
                targetMap.set(nums[i],i);
            }
            i++;
        }
        return [];
    }
}
