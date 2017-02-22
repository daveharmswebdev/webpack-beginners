'use strict'

const $ = require('./jquery.min.js')
const add = require('./add')
const subtract = require('./subtract')
const math = require('./math')
// const multiply = require('./math').multiply
const multiply = math.multiply
const { square, findSquareRoot } = require('./squares')
const world = require('./world')

console.log('Hello', world)
console.log('addition sum', add(1,2))
console.log('subtraction result', subtract(5,3))
console.log('division', math.divide(27,9))
console.log('multiplication', multiply(5,10))
console.log('15 squared:', square(15))
console.log('root of 121', findSquareRoot(121))

$('button').on('click', evt => {
	const input = $('#numberInput')
		.val()
		.split(' ')
		.map( string => parseInt(string))
	const operator = evt.target.id
	console.log('answer', calculate(operator, input))
	$('#content').text(calculate(operator, input))
})

function calculate(operator, input) {
	const [a,b] = input
	switch (operator) {
		case "add":
			return add(a,b)
			break
		case "subtract":
			return subtract(a,b)
			break
		case "divide":
			return math.divide(a,b)
			break
		case "multiply":
			return multiply(a,b)
			break
		case "square":
			return square(a,b)
			break
		case "root":
			return findSquareRoot(a,b)
			break
	}
}










