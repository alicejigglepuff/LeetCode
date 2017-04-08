function sumAll(arr) {
  var minNum = Math.min.apply(null, arr);
  var maxNum = Math.max.apply(null, arr);
  var newArr = [];
  var len = maxNum - minNum +1;
  
  for (var i = 0; i < len; i++) {
  	var a = minNum + i;
  	newArr.push(a);
  }
  console.log(newArr);
  
  	function getSum(total, num) {
    	return total + num;
	}
  console.log(newArr.reduce(getSum, 0))
	
}

sumAll([1, 4]);