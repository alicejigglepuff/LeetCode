/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	var newNums1 = [];
	var newNums2 = [];
	var result = [];
	nums1.forEach(function(item){
		if (newNums1.indexOf(item)<0) {
			newNums1.push(item);
		}
	});
	nums2.forEach(function(item){
		if (newNums2.indexOf(item)<0) {
			newNums2.push(item);
		}
	});

	for (var i = 0; i < newNums2.length; i++) {
		if (newNums1.indexOf(newNums2[i])>=0){
			result.push(newNums2[i]);
		}
	}

	if (result.length == 0) {
		return null
	}else{
		return result;
	}

};

intersection([1,2,2,1], [2,2])


// a.forEach(function(item) {
//      if(result.indexOf(item) < 0) {
//          result.push(item);
//      }
// });