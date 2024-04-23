export default function two_crysta_balls(breaks: boolean[]): number {

    const jump_amount = Math.floor(Math.sqrt(breaks.length));

    let array_index = jump_amount;

    for (; array_index < breaks.length; array_index += jump_amount) {
        if (breaks[array_index]) {
            break;
        }
    }

    array_index -= jump_amount;

    for (let linear_jump = 0; linear_jump <= jump_amount && array_index < breaks.length; ++linear_jump, ++array_index) {
        if (breaks[array_index]) {
            return array_index;
        }
    }

    return -1;
}
