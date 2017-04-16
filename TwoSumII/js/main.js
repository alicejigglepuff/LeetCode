/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var TwoSum = function(numbers, target){
	var l = 0;
	var r = numbers.length-1;
	var arr = [];
	while (l<r){
		var sum = numbers[l]+numbers[r];
		if (sum === target) {
			arr.push(l+1);
			arr.push(r+1);
			console.log(arr);
			break;
		} else if (sum < target){
			l += 1;
		} else{
			r -=1;
		}
		
	}
	
}

TwoSum([-1,0], -1);


// var index1 = 0;
// var index2 = 0;
// var arr = [];

// var twoSum = function(numbers, target) {
//     for (var i = 0; i < numbers.length; i++) {
//     	var a = target - numbers[i];
//     	var index = numbers.indexOf(a);
//     	if (index>=0) {
//     		index1 = i+1;
//     		index2 = index+1;
//     		arr.push(index1);
//     		arr.push(index2);
//     		break;
//     	}
//     }
//     console.log(arr);
   
// };


// twoSum([-1, 0], -1)