export default class ring_buffer<T> {
    private buffer: (T | undefined)[];
    private tail?: number;
    private head: number;
    private size: number;

    constructor() {
        this.buffer = new Array<T>(3);
        this.head = 0;
        this.size = 0;
    }

    private resize(): void {
        const newsize = this.buffer.length * 2;
        const newbuffer = new Array<T | undefined>(newsize);
        let newIndex = 0;

        for (let i = 0; i < this.buffer.length; i++) {
            const currentItem = this.buffer[(this.head + i) % this.buffer.length];
            if (currentItem !== undefined) {
                newbuffer[newIndex] = currentItem;
                newIndex++;
            }
        }

        this.buffer = newbuffer;
        this.head = 0;
        this.tail = newIndex;
    }

    push(item: T): (T | undefined)[] {
        if (!this.tail) {
            this.tail = 0;
        }

        if (this.buffer.length === this.size) {
            this.resize();
        }

        const tail = this.tail % this.buffer.length;

        this.buffer[tail] = item;
        this.tail++;
        this.size++;
        return this.buffer;
    }

    pop(): T | undefined {
        if (!this.tail) {
            return undefined;
        }

        const head = this.head % this.buffer.length;
        const deleted_value = this.buffer[head];

        if (this.buffer[head] === undefined) {
            return undefined;
        }

        this.buffer[head] = undefined;
        this.head++;
        this.size--;
        return deleted_value;
    }

    get(index: number): T | undefined {
        return this.buffer[index];
    }

    get_buffer(): (T | undefined)[] {
        return this.buffer;
    }
}
