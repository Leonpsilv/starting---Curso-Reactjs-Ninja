'use strict'

import React, { Component } from 'react';

class Timer extends Component {
    constructor () {
        console.log('constructor Timer');
        super();

        this.state = {
            time: 0
        };

        this.timer;
    }

    componentDidMount () {
        console.log('componentDidMount Timer');
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
    }

    componentWillUnmount () {
        console.log('componentWillUnmount Timer');
        clearInterval(this.timer)
    }

    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps Timer', this.props, nextProps)
        
    }

    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log('shouldComponentUpdate Timer', this.props, nextProps, '------', this.state, nextState);
    //     //return this.state !== nextState  // boolean
    //     return this.props.time !== nextProps.time 
    // }

    componentWillUpdate (nextProps, nextState) {
        console.log('componentWillUpdate Timer', this.props, nextProps, '-----', this.state, nextState);
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('componentDidUpdate Timer', prevProps, this.props, '----', prevState, this.state);
    }

    render () {
        console.log('render Timer');
        return <div> Timer: {this.state.time} </div>
    }
}

export default Timer;