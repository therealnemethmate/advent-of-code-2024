import { assertEquals } from 'jsr:@std/assert';

import { solve } from './main.ts';

Deno.test('Succeeds solving the example', async () => {
    const result = solve(await Deno.readTextFile('./day-02/input.test.txt'));
    assertEquals(result, 2);
});
