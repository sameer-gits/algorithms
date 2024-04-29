import RingBuffer from "./ring_buffer" 

test("RingBuffer", function() {
    const buffer = new RingBuffer<number>();

    buffer.push(0);
    buffer.push(1);
    expect(buffer.pop()).toEqual(0);
    expect(buffer.pop()).toEqual(0);
    buffer.push(2);
    buffer.push(3);
    buffer.push(4);
    expect(buffer.get(2)).toEqual(2);


//    buffer.push(5);
//    expect(buffer.pop()).toEqual(5);
//    expect(buffer.pop()).toEqual(undefined);
//
//    buffer.push(42);
//    buffer.push(9);
//    expect(buffer.pop()).toEqual(42);
//    expect(buffer.pop()).toEqual(9);
//    expect(buffer.pop()).toEqual(undefined);
//
//    buffer.push(42);
//    buffer.push(9);
//    buffer.push(12);
//    expect(buffer.get(2)).toEqual(12);
//    expect(buffer.get(1)).toEqual(9);
//    expect(buffer.get(0)).toEqual(42);
});

