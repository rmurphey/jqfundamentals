describe("Portlet plugin", function() {
  var div, target;

  beforeEach(function() {
    target = $('#target').empty();
    div = $('<div class="portlet-target">portlet content</div>').appendTo(target);
  });

  it("should define a portlet method", function() {
    expect(function() { div.portlet(); }).not.toThrow();
  });

  it("should return the elements on which it is called", function() {
    var ret = div.portlet(),
        i = 3;

    expect(ret.hasClass('portlet-target')).toBeTruthy();

    target.empty();

    while (i--) {
      $('<div class="portlet-target">portlet</div>').appendTo(target);
    }

    expect($('.portlet-target', target).portlet().length).toBe(3);
  });

  it("should wrap the element it was called on", function() {
    div.portlet();
    expect(div.parents('.portlet').length).toBeTruthy();
  });

  it("should initially show the original content", function() {
    div.portlet();
    expect(div.is(':visible')).toBeTruthy();
  });

  it("should open and close the portlet when the open/close button is clicked", function() {
    div.portlet();
    $('.portlet .open-close').click();
    expect(div.is(':visible')).toBeFalsy();
    $('.portlet .open-close').click();
    expect(div.is(':visible')).toBeTruthy();
  });

  it("should keep the buttons visible regardless of whether it is open or closed", function() {
    div.portlet();
    $('.portlet .open-close').click();
    expect($('.portlet .buttons:visible').length).toBeTruthy();
  });

  it("should keep the title visible regardless of whether it is open or closed", function() {
    div.portlet();
    $('.portlet .open-close').click();
    expect($('.portlet .title:visible').length).toBeTruthy();
  });

  it("should change the close button to an open button when it is clicked", function() {
    div.portlet();
    $('.portlet .open-close').click();
    expect($('.portlet .open-close').text()).toBe('Open');
  });

  it("should close all portlets on the page when the close all button is clicked", function() {
    var div2 = $('<div>another portlet</div>').appendTo(target).portlet();
    div.portlet();

    $('.portlet').eq(0).find('.open-close-all').click();
    expect(div.is(':visible')).toBeFalsy();
    expect(div2.is(':visible')).toBeFalsy();
  });

  it("should use the title setting as the portlet title if provided", function() {
    div.portlet({ title : 'hello world' });
    expect($('.portlet .title').text()).toBe('hello world');
  });

  it("should use the default title setting if no title is provided", function() {
    div.portlet();
    expect($('.portlet .title').text()).toBe('Portlet');
  });

  it("should not affect the original content of the element on which it was called", function() {
    expect(div.html()).toBe('portlet content');
  });

});

