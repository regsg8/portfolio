import React, { Component } from 'react'
import LargeProject from './LargeProject'
import SmallProject from './SmallProject'

export default class Project extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle: true
        }
    }

    toggle = () => {
        this.setState(prevState => (
            { toggle: !prevState.toggle }
        ))
    }

    render() {
        return (
            <div>
                {this.state.toggle ? <SmallProject toggle={this.toggle} {...this.props}/> : <LargeProject toggle={this.toggle} {...this.props} />}
            </div>
        )
    }
}

