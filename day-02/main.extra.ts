enum Direction {
    Increasing = 1,
    Decreasing = -1,
}

type Stage = {
    safe: boolean;
    value?: number;
    direction?: 1 | -1;
};

function accumulate(prev: Stage, n: number) {
    if (prev.safe === false) return prev;
    if (prev.value === undefined) return { ...prev, value: n };
    if (
        n < prev.value && prev.value - n < 4 &&
        (prev.direction === undefined ||
            prev.direction === Direction.Decreasing)
    ) {
        return { ...prev, value: n, direction: Direction.Decreasing };
    }

    if (
        n > prev.value && n - prev.value < 4 &&
        (prev.direction === undefined ||
            prev.direction === Direction.Increasing)
    ) {
        return { ...prev, value: n, direction: Direction.Increasing };
    }

    return { ...prev, safe: false };
}

export function solve(input: string) {
    const rows = input
        .split('\n').map((row) => row.split(' ').map(Number))
        .filter((row) => row.some(Boolean));

    const maxRowLength = rows.reduce(
        (max, curr) => curr.length > max ? curr.length : max,
        0,
    );
    let unsafeRows = rows.filter((row) => {
        if (!row.some(Boolean)) return false;
        const stage: Stage = { safe: true };
        return !row.reduce(accumulate, stage).safe;
    });

    for (let i = 0; i <= maxRowLength; i++) {
        unsafeRows = unsafeRows.filter((row) => {
            if (!row.some(Boolean)) return false;
            const stage: Stage = { safe: true };
            return !row.filter((_, k) => k !== i).reduce(accumulate, stage)
                .safe;
        });
    }

    return rows.length - unsafeRows.length;
}

console.time('Execution time');
console.log(`The solution is: ${
    solve(
        await Deno.readTextFile('./day-02/input.txt'),
    )
}`);
console.timeEnd('Execution time');
