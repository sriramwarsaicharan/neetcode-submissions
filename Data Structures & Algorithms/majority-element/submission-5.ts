class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        if(nums.length ===1 ) return nums[0];
        nums.sort();
        let currNum:number ;
        let countOfCurrNum:number = 0;
       for (const num of nums){
           if(currNum === num){
            countOfCurrNum++;
            if(countOfCurrNum > nums.length/2){
                return currNum;
            }
           }else{
            currNum = num;
            countOfCurrNum = 1;
           }
       }
        
        return -1;
    }
}
