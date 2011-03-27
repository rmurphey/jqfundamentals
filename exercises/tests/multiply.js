describe("multiply", function() {
  it("should return the product of two numbers", function() {
    expect(multiply(2,3)).toEqual(6);
    expect(multiply(-1,1)).toEqual(-1);
    expect(multiply(1,0)).toEqual(0);
    expect(multiply(-1,-1)).toEqual(1);
  });
});
