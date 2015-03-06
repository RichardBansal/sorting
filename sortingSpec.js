// describe('Bubble Sort', function() {
// 	it('handles an empty array', function() {
// 		expect(bubbleSort([])).toEqual([]);
// 	});
// 	it('Sorts a Single Array', function() {
// 		expect(bubbleSort([1])).toEqual([1]);
// 	});
// 	// it('Sorts a Single Array', function() {
// 	// 	expect(bubbleSort([1])).toEqual([1]);
// 	// });
// 	it('Sorts a Medium Size Array', function() {
// 		expect(bubbleSort([25,15,30])).toEqual([15,25,30]); //
// 	});
// 	it('Sorts a Large Size Array', function() {
// 		expect(bubbleSort([3,45,21,35,98,52,33,15]).toEqual([3, 15, 21, 33, 35, 45, 52, 98]))
// 	});
// });

// // add tests to count number of calls

describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('Sorts a Single Array', function() {
		expect(bubbleSort([1])).toEqual([1]);
	});
		it('Sorts a Medium Size Array', function() {
		expect(bubbleSort([25,15,30])).toEqual([15,25,30]); //
	});
		it('Sorts a Large Size Array', function() {
		expect(bubbleSort([3,45,21,35,98,52,33,15])).toEqual([3, 15, 21, 33, 35, 45, 52, 98]);
	});
});

describe('Merge Sort', function() {
	it('is able to merge two sorted arrays', function() {
		expect(merge([3,4],[1,2])).toEqual([1,2,3,4]);
	});
	it('is able to merge two sorted arrays', function() {
		expect(merge([],[1,2])).toEqual([1,2]);
	});
	it('is able to merge two sorted arrays', function() {
		expect(merge([5,7,8,9],[1,2])).toEqual([1,2,5,7,8,9]);
	});
});

describe('Split Array function', function() {
	it('it able to split an array into two halves', function() {
		expect(split([1,2])).toEqual([[1],[2]]);
	});
	it('it able to split an array into two halves', function() {
		expect(split([1,2,5,6,9,10])).toEqual([[1,2,5],[6,9,10]]);
	});
	it('it able to split an array into two halves', function() {
		expect(split([1,2,5,6,9,10,15])).toEqual([[1,2,5,6],[9,10,15]]);
	});
});

describe('Merge Sort function', function() {
    it('Sorts a Single Array', function() {
		expect(mergeSort([1])).toEqual([1]);
	});
		it('Sorts a Medium Size Array', function() {
		expect(mergeSort([25,15,30])).toEqual([15,25,30]); //
	});
		it('Sorts a Large Size Array', function() {
		expect(mergeSort([3,45,21,35,98,52,33,15])).toEqual([3, 15, 21, 33, 35, 45, 52, 98]);
	});
});

performance();