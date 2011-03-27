describe("createList", function() {
  var items = [ 'apple', 'orange', 'pear' ];

  it("should return a jquery object containing an unordered list", function() {
    var list = createList(items);
    expect(list).toBeDefined();
    expect(list.jquery).toBeDefined();
    expect(list.length).toBe(1);
    expect(list[0].nodeName.toLowerCase()).toBe('ul');
  });

  it("should contain the correct number of list items", function() {
    var list = createList(items);
    expect(list.children().length).toBe(3);
    expect(list.children('li').length).toBe(list.children().length);
  });

  it("should properly populate the list items", function() {
    var list = createList(items);
    expect(list.children().eq(1).html()).toEqual('orange');
  });

  it("should only use an item if it is a string", function() {
    var list = createList([ 'apple', 1, false, {}, [], 'pear' ]);
    expect(list.children().length).toBe(2);
  });

  it("should add a click handler to its list items that adds a class of 'clicked'", function() {
    var list = createList(items),
        li = list.find('li').click();

    expect(li.hasClass('clicked')).toBeTruthy();
  });

  it("should only use items that are at least three characters long", function() {
    var list = createList([ 'a', 'long enough' ]);
    expect(list.children().length).toBe(1);
  });
});
