var React = require('react');
var UserActivity = require('./UserActivity');


export class UserStream extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sourceUrl: this.props.sourceUrl,
            activities: [{icon_name: 'icon-attachment', time_ago: 'Yesterday', description: 'some words'}
            ]
        };

        console.log(this.state);
    }

    loadActivities() {
        console.log('Fetching from ' + this.state.sourceUrl);
        $.ajax({
            url: this.state.sourceUrl,
            dataType: 'json',
            success: function (data) {
                this.setState({activities: data.activities});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.state.sourceUrl, status, err.toString());
            }.bind(this)
        });
    }

    componentDidMount() {
        this.loadActivities();
    }

    render() {

        var streamItems = this.state.activities.map(function (activity) {
            <li>
                <UserActivity activity={activity}/>
            </li>
        });
        return (
            <ul className="activity-feed">
            {streamItems}
            </ul>
        );
    }
}
var JobReady = window.JobReady || {};

JobReady.UserStream = {
    add: function (containerId, sourceUrl) {
        React.render(<UserStream sourceUrl={sourceUrl}/>, document.getElementById(containerId));
    }
};

