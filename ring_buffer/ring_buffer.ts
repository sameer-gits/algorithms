export default class ring_buffer<T> {
    private buffer: (T | undefined)[];
    private tail?: number;
    private head: number;

    constructor() {
        this.buffer = new Array<T>(3);
        this.head = 0;
    }

    push(item: T): (T | undefined)[] {
        //if(this.tail === this.head) {
        // TODO: add a while loop for making a new bigger array;
        //}
        if (!this.tail) {
            this.tail = 0;
        }
        const tail = this.tail % this.buffer.length;
        this.buffer[tail] = item;
        this.tail++;
        return this.buffer;
    }

    pop(): T | undefined {
        if(!this.tail) {
            return undefined;
        }

        const head = this.head % this.buffer.length;
        const deleted_value = this.buffer[head];

        if(this.buffer[head] === undefined) {
            return undefined;
        }

        this.buffer[head] = undefined;
        this.head++;
        return deleted_value; 
    }

    get(index: number): T | undefined {
        return this.buffer[index];
    }
    
    get_buffer(): (T | undefined)[] {
        return this.buffer;
    }
}
