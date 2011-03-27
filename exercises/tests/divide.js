describe("divide", function() {
  it("should return the value of a / b", function() {
    expect(divide(3,3)).toEqual(1);
    expect(divide(6,2)).toEqual(3);
  });

  it("should throw an error if you try to divide by 0", function() {
    expect(function() { divide(1,0); }).toThrow();
  });
});
