export default function recursion<T>(item: T): number | string {
    if (typeof item === 'number') {
        let n: number = Math.floor(item);

        if (n < 1) {
            return "Number can't be less than 1"
        }

        if (n === 1) {
            return 1;
        }

        return n + Number(recursion(n - 1));

    } else {
        return "Input must be typeof number"
    }
}
