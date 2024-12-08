import { assertEquals } from 'jsr:@std/assert';

import { solve } from './core.ts';

Deno.test('Succeeds solving the example', async () => {
    const result = solve(await Deno.readTextFile('./day-03/input.test.txt'));
    assertEquals(result, 161);
});
