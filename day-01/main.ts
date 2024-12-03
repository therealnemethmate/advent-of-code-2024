function solve(input: string) {
    const [leftList, rightList] = input
        .split('\n')
        .reduce((acc, row) => {
            if (!row) return acc;
            const [firstElem, secondElem] = row.split('   ');
            acc[0].push(Number(firstElem));
            acc[1].push(Number(secondElem));
            return acc;
        }, [[] as number[], [] as number[]])
        .map((col) => col.toSorted((a, b) => a - b));

    return leftList.reduce((acc, curr, i) => {
        return acc + Math.abs(curr - rightList[i]);
    }, 0);
}

console.time('Execution time');
console.log(`The solution is: ${
    solve(
        await Deno.readTextFile('./day-01/input.txt'),
    )
}`);
console.timeEnd('Execution time');
