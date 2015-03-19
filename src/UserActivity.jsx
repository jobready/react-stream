var React = require('react');

export class  UserActivity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var activity = this.props.activity;
        var iconClass = 'icon-' + activity.icon_name;
        return (
            <ul className='user-activity'>
                <li className="icon">
                    <i className={iconClass}/>
                </li>
                <li>
                    <div className="date-added">
                    {activity.time_ago}
                    </div>
                    <div>
                       {activity.item_title}
                        <a href={activity.item_link}>{activity.item_link_text}</a>
                        <div className="description"> {activity.description} </div>
                    </div>
                </li>
            </ul>
        );
    }
}
module.exports = {UserActivity};
