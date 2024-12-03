const countInListCache: Record<string, number> = {};

function countInList(value: number, list: number[]) {
    const count = list.filter((elem) => elem === value).length;
    countInListCache[value] = count;
    return count;
}

function solve(input: string) {
    const [leftList, rightList] = input
        .split('\n')
        .reduce((acc, row) => {
            if (!row) return acc;
            const [firstElem, secondElem] = row.split('   ');
            acc[0].push(Number(firstElem));
            acc[1].push(Number(secondElem));
            return acc;
        }, [[] as number[], [] as number[]]);

    return leftList.reduce((acc, curr) => {
        const count = countInListCache[curr] !== undefined
            ? countInListCache[curr]
            : countInList(curr, rightList);
        return acc + count * curr;
    }, 0);
}

console.time('Execution time');
console.log(`The solution is: ${
    solve(
        await Deno.readTextFile('./day-01/input.txt'),
    )
}`);
console.timeEnd('Execution time');
