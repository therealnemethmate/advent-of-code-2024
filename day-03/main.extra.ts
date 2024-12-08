import { solve as solveCore } from './core.ts';

export function solve(input: string) {
    input = input.replaceAll('\n', '');
    const regex =
        /(?<first>^.*?don't\(\))|(?<second>do\(\).*?don't\(\))|(?<third>do\(\).*)/g;
    return input.matchAll(regex).toArray().reduce(
        (aggr, { groups }) => {
            return aggr +
                solveCore(
                    groups?.first ?? groups?.second ?? groups?.third ?? '',
                );
        },
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
