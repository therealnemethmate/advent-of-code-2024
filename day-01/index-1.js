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
    const [leftList, rightList] = input
        .split('\n')
        .reduce((acc, row) => {
            if (!row) return acc;
            const [firstElem, secondElem] = row.split('   ');
            acc[0].push(Number(firstElem));
            acc[1].push(Number(secondElem));
            return acc;
        }, [[], []]);

    return leftList.reduce((acc, curr) => {
        const count = countInListCache[curr] !== undefined
            ? countInListCache[curr]
            : countInList(curr, rightList);
        return acc + count * curr;
    }, 0)
}

const input = (await fs.readFile('input.txt')).toString();

console.time('Execution time');
console.log(`The solution is: ${solve(input)}`);
console.timeEnd('Execution time');
