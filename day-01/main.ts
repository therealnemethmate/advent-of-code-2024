export function solve(input: string) {
    const stage: number[][] = [[], []];
    const [leftList, rightList] = input
        .split('\n')
        .filter(Boolean)
        .reduce(
            (acc, row) =>
                row.split('   ').map((n, i) => acc[i].concat(Number(n))),
            stage,
        )
        .map((col) => col.toSorted((a, b) => a - b));

    return leftList.reduce(
        (acc, curr, i) => acc + Math.abs(curr - rightList[i]),
        0,
    );
}

console.time('Execution time');
console.log(`The solution is: ${
    solve(
        await Deno.readTextFile('./day-01/input.txt'),
    )
}`);
console.timeEnd('Execution time');
