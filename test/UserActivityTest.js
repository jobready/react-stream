jest.dontMock('../src/UserActivity');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var UserActivity = require('../src/UserActivity');


describe('UserActivity', function () {
    var instance;
    var activity;

    beforeEach(function () {
        activity = {
            icon_name: 'football',
            time_ago: '15 minutes',
            link_text: 'Chunky monkey',
            item_link: 'http://monkey.example.com',
            item_text: 'Wilma is one cool chick',
            description: 'The flintstones is truly a classic cartoon'

        }
        instance = TestUtils.renderIntoDocument(<UserActivity activity={activity} />);
    });

    xit('sets the title', function () {
        var widget = TestUtils.findRenderedDOMComponentWithClass(instance, 'user-activity');
        //console.log(widget.getDOMNode().textContent);
        expect(widget.getDOMNode().textContent).toEqual('Walk like an');
    });

    it('sets the title', function () {
        var widget = TestUtils.findRenderedDOMComponentWithClass(instance, 'user-activity');
        //console.log(widget.getDOMNode().textContent);
        expect(widget.getDOMNode().textContent).toEqual('Walk like an');
    });
    //
    //it('adds a link to the item', function () {
    //    var widget = TestUtils.findRenderedDOMComponentWithClass(instance, 'list-group-item');
    //    expect(widget.getDOMNode().getAttribute("href")).toEqual('http://example.com');
    //});
    //
    //it('adds a tooltip', function () {
    //    var widget = TestUtils.findRenderedDOMComponentWithClass(instance, 'list-group-item');
    //    expect(widget.getDOMNode().getAttribute("title")).toEqual('Awesome Sauce');
    //});
});

