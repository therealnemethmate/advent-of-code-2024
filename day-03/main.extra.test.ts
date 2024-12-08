import { assertEquals } from 'jsr:@std/assert';

import { solve } from './main.extra.ts';

Deno.test('Succeeds solving the example', async () => {
    const input = await Deno.readTextFile('./day-03/input.extra.test.txt');
    assertEquals(solve(input), 48);
});
