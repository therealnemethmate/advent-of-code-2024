import * as fs from 'fs/promises';

/**
 * @param {Number} a 
 * @param {Number} b 
 */
function sortCallback(a, b) {
    if (a === b) return 0;
    return a < b ? -1 : 1;
}

/**
 * @param {String} input
 */
function solve(input) {
    const rows = input.toString().split('\n').filter(Boolean);
    const [leftList, rightList] = rows
        .reduce((acc, curr) => {
            curr.split('   ').forEach((v, i) => acc[i].push(v))
            return acc;
        }, [[], []])
        .map((col) => col.toSorted(sortCallback));
    
    return leftList.reduce((acc, curr, i) => {
        return acc + Math.abs(curr - rightList[i]);
    }, 0)
}

const input = await fs.readFile('input.txt');

console.time('Execution time');
console.log(`The solution is: ${solve(input)}`);
console.timeEnd('Execution time');
