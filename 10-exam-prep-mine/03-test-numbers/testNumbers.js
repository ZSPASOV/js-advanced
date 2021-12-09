const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};


const { expect } = require('chai');

describe("Tests …", function () {
    describe("sumNumbers", function () {
        it("arguments not numbers", function () {
            expect(testNumbers.sumNumbers(1, 'asd')).to.be.equal(undefined);
        });

        it('arguments are numbers', function () {
            expect(testNumbers.sumNumbers(2, 5)).to.be.equal('7.00');
        })
    });

    describe('numberChecker', function () {
        it('argument is not a number', function () {
            expect(() => testNumbers.numberChecker('asd')).to.throw('The input is not a number!');
        })

        it('even number', function () {
            expect(testNumbers.numberChecker(24)).to.be.equal('The number is even!');
        })
        it('odd number', function () {
            expect(testNumbers.numberChecker(25)).to.be.equal('The number is odd!');
        })
    });

    describe('averageSumArray', function () {
        it('calculate average sum', function () {
            expect(testNumbers.averageSumArray([2, 4, 6])).to.be.equal(4);
        })
    })

});


