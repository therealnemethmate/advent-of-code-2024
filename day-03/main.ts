import { solve } from './core.ts';

console.time('Execution time');
console.log(`The solution is: ${
    solve(
        await Deno.readTextFile('./day-03/input.txt'),
    )
}`);
console.timeEnd('Execution time');
