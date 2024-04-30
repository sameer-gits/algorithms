export default class ring_buffer<T> {
    private buffer: (T | undefined)[];
    private tail: number;
    private head: number;

    constructor() {
        this.head = 0;
        this.tail = 0;
        this.buffer = new Array<T>(5);
    }

    push(item: T): (T | undefined)[] {
        //if(this.tail === this.head) {
        // TODO: add a while loop for making a new bigger array;
        //}
        const tail = this.tail % this.buffer.length;
        this.buffer[tail] = item;
        this.tail++;
        return this.buffer;
    }

    pop(): T | undefined {
        const head = this.head % this.buffer.length;
        const deleted_value = this.buffer[head];
        this.buffer[head] = undefined;
        this.head++;
        return deleted_value; 
    }


    get(index: number): T | undefined {
        return this.buffer[index];
    }
}
