import * as fs from 'fs/promises';

const countInListCache = {}

/**
 * @param {Number} value
 * @param {Number[]} list
 * @returns {Number}
 */
function countInList(value, list) {
    if(countInListCache[value] !== undefined) return countInListCache[value];
    const count = list.filter((elem) => elem === value).length;
    countInListCache[value] = count;
    return count;
}

/**
 * @param {String} input
 */
function solve(input) {
    const rows = input.toString().split('\n').filter(Boolean);
    const [firstList, secondList] = rows.reduce((acc, curr) => {
        const [first, second] = curr.split('   ');
        acc[0].push(Number(first));
        acc[1].push(Number(second));
        return acc;
    }, [[], []]);

    return firstList.reduce((acc, curr) => {
        return acc + countInList(curr, secondList) * curr;
    }, 0)
}

const input = await fs.readFile('input.txt');

console.log(`The solution is: ${solve(input)}`);
