class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        nums = nums.sort();
        let firstIndex = nums.indexOf(val),lastIndex = nums.lastIndexOf(val);
        if(firstIndex === -1) return nums.length;
        let deletednums = nums.splice(firstIndex, lastIndex - firstIndex + 1);
        let k = nums.length;
        nums = [...nums, ...deletednums];
        return k;
    }
}