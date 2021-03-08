module.exports = function toReadable(number) {
    const numberFirst = [
            "",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ],
        numberSecond = [
            "",
            "",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ],
        doubleNumber = Math.floor(number / 10),
        threeNumber = Math.floor(number / 100),
        remainDoubleNum = number % 10,
        remainThreeNum = number % 100;

    if (number === 0) {
        return "zero";
    } else if (number < 20) {
        return numberFirst[number];
    } else if (number < 100) {
        if (remainDoubleNum !== 0) {
            return `${numberSecond[doubleNumber]} ${toReadable(
                remainDoubleNum
            )}`;
        } else {
            return numberSecond[doubleNumber];
        }
    } else if (number < 1000) {
        if (number % 100 !== 0) {
            return `${numberFirst[threeNumber]} hundred ${toReadable(
                remainThreeNum
            )}`;
        } else {
            return `${numberFirst[threeNumber]} hundred`;
        }
    }
};
