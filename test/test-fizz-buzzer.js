const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('should return fizz-buzz if dividable by 5 & 3, buzz if dividable by 5, fizz if dividable by 3, or the number itself if not divisible by 3 or 5', function(){
		const normalCases = [
			{num: 30, expected: 'fizz-buzz'},
			{num: 10, expected: 'buzz'},
			{num: 9, expected: 'fizz'},
			{num: 11, expected: 11}
		];

		normalCases.forEach(function(input){
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});

	});

	it('should raise an error if type is not a number', function(){
		const badInputs = ['a',null,true];

		badInputs.forEach(function(input){
			expect(function(){
				fizzBuzzer(input[0]);
			}).to.throw(Error);
		});
	});
})