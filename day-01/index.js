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
    const [leftList, rightList] = input
        .split('\n')
        .reduce((acc, row) => {
            if (!row) return acc;
            const [firstElem, secondElem] = row.split('   ');
            acc[0].push(Number(firstElem));
            acc[1].push(Number(secondElem));
            return acc;
        }, [[], []])
        .map((col) => col.toSorted(sortCallback));
    
    return leftList.reduce((acc, curr, i) => {
        return acc + Math.abs(curr - rightList[i]);
    }, 0)
}

const input = (await fs.readFile('input.txt')).toString();

console.time('Execution time');
console.log(`The solution is: ${solve(input)}`);
console.timeEnd('Execution time');
