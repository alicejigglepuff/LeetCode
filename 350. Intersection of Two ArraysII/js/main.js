/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	var result = [];
	if (nums1.length < nums2.length) {
		var nums3 = nums2;
		nums2 = nums1;
		nums1 = nums3; 
	}

	for (var i = 0; i < nums2.length; i++) {
		if (nums1.indexOf(nums2[i])>=0){
			nums1.shift();
			result.push(nums2[i]);
		}
	}

	console.log(result)

};

intersection([1,2,2,1], [2,2])


// a.forEach(function(item) {
//      if(result.indexOf(item) < 0) {
//          result.push(item);
//      }
// });