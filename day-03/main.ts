export function solve(input: string) {
    const numberRegex = /[0-9]{1,3}/g;
    const mulRegex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
    return input.matchAll(mulRegex).toArray().reduce(
        (aggr, [match]) =>
            aggr +
            match.matchAll(numberRegex).toArray().reduce(
                (acc, [num]) => acc * Number(num),
                1,
            ),
        0,
    );
}

console.time('Execution time');
console.log(`The solution is: ${
    solve(
        await Deno.readTextFile('./day-03/input.txt'),
    )
}`);
console.timeEnd('Execution time');