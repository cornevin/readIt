import React, {Component} from 'react';
import CountdownTimer from './timer/Timer.js';

class Room extends Component {

    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        return (
            <div className="App">
                <h1>Users in the pomoroom</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>{user.username}</div>
                )}
                <CountdownTimer secondsRemaining="1500" />
            </div>
        );
    }
}

export default Room;
