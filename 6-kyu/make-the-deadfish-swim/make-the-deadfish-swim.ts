export function parse(data: string): number[] {
    const commands = new Map<String, () => void>();
    const output_array:number[] = [];
    let value = 0;
​
    commands
        .set('i', () => value++)
        .set('d', () => value--)
        .set('s', () => value **= 2)
        .set('o', () => output_array.push(value));
​
    for (const char of data) {
        const action = commands.get(char);
        if (!action) continue;
​
        action();
        console.log(char, value);
    }
​
    return output_array;
}