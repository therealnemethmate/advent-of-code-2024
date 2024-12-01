import * as fs from 'fs/promises';

const countInListCache = {}

/**
 * @param {Number} value
 * @param {Number[]} list
 * @returns {Number}
 */
function countInList(value, list) {
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
        curr.split('   ').forEach((v, i) => acc[i].push(Number(v)))
        return acc;
    }, [[], []]);

    return firstList.reduce((acc, curr) => {
        const count = countInListCache[curr] !== undefined
            ? countInListCache[curr]
            : countInList(curr, secondList);
        return acc + count * curr;
    }, 0)
}

const input = await fs.readFile('input.txt');

console.time('Execution time');
console.log(`The solution is: ${solve(input)}`);
console.timeEnd('Execution time');
