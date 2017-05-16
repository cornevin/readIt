import React, { Component } from 'react';

class CountdownTimer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsRemaining: 0
        };
    }

    tick() {
        this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
        }
    }

    componentDidMount() {
        this.setState({ secondsRemaining: this.props.secondsRemaining });
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>Seconds Remaining: {this.state.secondsRemaining}</div>
        );
    }
}

export default CountdownTimer;