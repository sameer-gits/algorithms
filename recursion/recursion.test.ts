import recursion from "./recursion";

test("recursion", function () {
    expect(recursion(5)).toEqual(15);
    expect(recursion(5.6)).toEqual(15);
    expect(recursion(1)).toEqual(1);
    expect(recursion(0)).toEqual("Number can't be less than 1");
    expect(recursion(-10)).toEqual("Number can't be less than 1");
    expect(recursion("-1")).toEqual("Input must be typeof number");
});
