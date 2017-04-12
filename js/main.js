/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var result = [];

var twoSum = function(nums, target) {
    for (i=0; i<nums.length; i++){
        for (var j = i+1; j < nums.length; j++) {
          if ((nums[i] + nums[j])==target) {
            result.push(i);
            result.push(j);
            break;
          }
        }
    }
    console.log(result);
};


twoSum([3,1,3,7], 6);