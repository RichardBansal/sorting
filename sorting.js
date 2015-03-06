function bubbleSort (array) {
	if(array.length === 0){return [];}

	var swap = true;
	while(swap === true){
		swap = false;
		for(var i = 0;i<array.length;i++){
			if(array[i+1]===undefined){break}
			else if(array[i]>array[i+1]){
				var temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
				swap = true;
			}
            else{
              continue;
            }
		}
	}

	return array;
}

// console.log(bubbleSort([3,45,21,35,98,52,33,15]));
function merge(arr1,arr2){

	var sortedArr = [];
	for(;;){
		if((arr1.length===0)||(arr2.length===0)){
			break;
		}
		else{
			if(arr1[0]<arr2[0]){
				sortedArr.push(arr1.shift());
			}
			else{
				sortedArr.push(arr2.shift());
			}
		}
	}

	sortedArr = sortedArr.concat(arr1,arr2);

	return sortedArr;
}

function split(wholeArray){
	var firstHalfLength = Math.ceil(wholeArray.length/2);
	return [wholeArray.slice(0,firstHalfLength),wholeArray.slice(firstHalfLength)]
}


function mergeSort (m) {
	// body...
	var result;
	if(m.length === 1){
		return m;
	}

	var splitArr = split(m);
	var left = splitArr[0];
	var right = splitArr[1];

	left = mergeSort(left);
	right = mergeSort(right);

	result = merge(left,right);

	return result;
}

function performance(){
	for(var i=12; i < 16; i++) {
	    var num_items = Math.pow(2,i);
	    var native_test_array = [];
	    var b_test_array = [];
	    var m_test_array = []
	    for(var j=0; j < num_items; j++) {
	        var rand = Math.floor(Math.random() * num_items);
	        native_test_array.push(rand);
	        b_test_array.push(rand);
	        m_test_array.push(rand);
	    }

	    console.time(num_items + "native");
	    native_test_array.sort(function(a,b){ return a-b; });
	    console.timeEnd(num_items + "native");

	    console.time(num_items + "bubble");
	    bubbleSort(b_test_array);
	    console.timeEnd(num_items + "bubble");

	    console.time(num_items + "merge");
	    mergeSort(m_test_array);
	    console.timeEnd(num_items + "merge");  
	}
};












