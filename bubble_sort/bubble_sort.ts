export default function bubble_sort(array: number[]): void {

    for (let index = 0; index < array.length; ++index) {
        for (let indextwo = 0; indextwo < array.length - 1 - index; ++indextwo) {
            if (array[indextwo] > array[indextwo + 1]) {
                const temp = array[indextwo];
                array[indextwo] = array[indextwo + 1];
                array[indextwo + 1] = temp;
            }
        }
    }

}
