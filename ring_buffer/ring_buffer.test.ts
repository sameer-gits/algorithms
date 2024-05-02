import RingBuffer from "./ring_buffer"

test("RingBuffer", function() {
    const buffer = new RingBuffer<number>();

    buffer.push(1);
    buffer.push(1);
    buffer.push(1);
    buffer.pop();
    buffer.pop();
    buffer.pop();
    buffer.push(1);
    buffer.push(1);
    buffer.push(1);
    buffer.pop();
    buffer.pop();
    buffer.pop();
    expect(buffer.pop()).toEqual(undefined);
    expect(buffer.pop()).toEqual(undefined);
    expect(buffer.pop()).toEqual(undefined);
    expect(buffer.pop()).toEqual(undefined);
    expect(buffer.pop()).toEqual(undefined);
    buffer.push(5);
    expect(buffer.pop()).toEqual(5);
    expect(buffer.pop()).toEqual(undefined);

    buffer.push(42);
    buffer.push(9);
    expect(buffer.pop()).toEqual(42);
    expect(buffer.pop()).toEqual(9);
    expect(buffer.pop()).toEqual(undefined);
    buffer.push(5);
    buffer.push(5);
    buffer.push(5);
    expect(buffer.pop()).toEqual(5);
    expect(buffer.pop()).toEqual(5);
    expect(buffer.pop()).toEqual(5);
    expect(buffer.pop()).toEqual(undefined);
    expect(buffer.pop()).toEqual(undefined);
    expect(buffer.pop()).toEqual(undefined);
    expect(buffer.pop()).toEqual(undefined);

    buffer.push(42);
    buffer.push(9);
    buffer.push(12);
    expect(buffer.get(2)).toEqual(12);
    expect(buffer.get(1)).toEqual(9);
    expect(buffer.get(0)).toEqual(42);
    buffer.push(10);
    expect(buffer.get(3)).toEqual(10);
    buffer.push(0);
    expect(buffer.get(1)).toEqual(9);
    expect(buffer.pop()).toEqual(42);
    expect(buffer.pop()).toEqual(9);
    buffer.push(9);
    buffer.push(9);
    buffer.push(12);
    buffer.push(12);
    // dummy line for displaying array in faild result expect(buffer.get_buffer()).toEqual(5);
});

