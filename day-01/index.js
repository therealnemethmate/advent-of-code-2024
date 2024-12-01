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
    const cols = rows.reduce((acc, curr) => {
        const [first, second] = curr.split('   ');
        acc[0].push(Number(first));
        acc[1].push(Number(second));
        return acc;
    }, [[], []]);
    
    const [firstCol, secondCol] = cols.map((col) => col.toSorted(sortCallback));
    return firstCol.reduce((acc, curr, i) => {
        return acc + Math.abs(curr - secondCol[i]);
    }, 0)
}

const input = await fs.readFile('input.txt');

console.log(`The solution is: ${solve(input)}`);
