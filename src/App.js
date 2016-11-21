import React, {Component} from 'react';
import './App.css';

import Counter from "./Counter";
import ProgressBar from "./ProgressBar";
import Config from "./Config";

import { connect } from 'react-redux'

import * as actions from "./actions";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isRunning: false,
            time: 0,
            isTickingForWork: true
        };

        this.timeout = null;

        this.toggleTimer = this.toggleTimer.bind(this);
    }

    componentDidMount() {
        this.props.fetchDefaults();
    }

    toggleTimer() {
        window.clearTimeout(this.timeout);

        this.setState({
            time: 0,
            isTickingForWork: true,
            isRunning: !this.state.isRunning
        });
    }

    componentDidUpdate() {
        if(this.state.isRunning) {
            this.tickIfNeeded();
        }
    }

    tickIfNeeded() {
        const shouldTickForWork = this.state.isTickingForWork && this.state.time < this.props.workDuration * 60;
        const shouldTickForBreak = !this.state.isTickingForWork && this.state.time < this.props.breakDuration * 60;

        if(shouldTickForWork || shouldTickForBreak) {
            this.tick();
        } else {
            this.changeCurrentPeriod();
        }
    }

    changeCurrentPeriod() {
        this.setState({
            time: 0,
            isTickingForWork: !this.state.isTickingForWork
        });
    }

    tick() {
        this.timeout = window.setTimeout(() =>{
            this.setState({
                time: this.state.time + 1
            });
        }, 100);
    }

    renderProgressBar() {
        return this.state.isRunning ? (
            <ProgressBar
                time={this.state.time}
                max={this.state.isTickingForWork ? this.props.workDuration : this.props.breakDuration}
                isTickingForWork={this.state.isTickingForWork}
            />
        ) : null;
    }

    renderConfig() {
        return !this.state.isRunning ? (
            <Config
                workDuration={this.props.workDuration}
                breakDuration={this.props.breakDuration}
                changeWorkDuration={this.props.changeWorkDuration}
                changeBreakDuration={this.props.changeBreakDuration}
            />
        ) : null;
    }

    render() {
        return (
            <main>
                <Counter
                    time={this.state.time}
                    toggleTimer={this.toggleTimer}
                    isRunning={this.state.isRunning}
                />
                {this.renderProgressBar()}
                {this.renderConfig()}
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        workDuration: parseInt(state.workDuration, 10),
        breakDuration: parseInt(state.breakDuration, 10),
        defaults: state.defaults
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeWorkDuration(duration) {
            dispatch(actions.setWorkDuration(parseInt(duration, 10)))
        },
        changeBreakDuration(duration) {
            dispatch(actions.setBreakDuration(parseInt(duration, 10)))
        },
        fetchDefaults() {
            dispatch(actions.fetchDefaults());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
