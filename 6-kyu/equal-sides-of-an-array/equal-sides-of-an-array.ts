export function findEvenIndex(arr: number[]) {
    const sum = (prev: number, curr: number) => prev + curr;
​
    for (let i = 0; i < arr.length; i++) {
        const sum_left = arr.slice(0, i).reduce(sum, 0);
        const sum_right = arr.slice(i + 1, arr.length).reduce(sum, 0);
​
        if (sum_left == sum_right) return i;
    }
​
    return -1;
}