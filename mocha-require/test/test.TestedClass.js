const mocha = require('mocha')
const assert = require('assert')
const {
	TestedClass,
	functionGetTestedClassName
} = require('../src/index')

console.log('TestedClass', TestedClass);
console.log('functionGetTestedClassName', functionGetTestedClassName);

describe("Simple test suite", () => {
	it("should pass", () => {
		//mocha.expect(1 + 1).toBe(2);
		const expected = 1;
		const actual = parseInt("1.00");
		assert.equal(actual, expected);
	});
	it("should fail", () => {
		const expected = 1;
		const actual = parseInt("2.00");
		assert.equal(actual, expected);
	});
});

describe("Test suite for the TestedClass", () => {
	it("Test name property", () => {
		const expected = 'TestedClass';
		const actual = TestedClass.name;
		assert.equal(actual, expected);
	});
	it("Test getName method", () => {
		const expected = 'TestedClass';
		const actual = TestedClass.getName();
		assert.equal(actual, expected);
	});
});

it("Test functionGetTestedClassName", () => {
	const expected = 'TestedClass';
	const actual = functionGetTestedClassName();
	assert.equal(actual, expected);
});