import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { StyledMenuButton, FlexMenu } from '../elements/index'

class Nav extends Component {

    render() {
        return (
            <FlexMenu>
                <StyledMenuButton onClick={() => {this.props.history.push('/')}}>Projects</StyledMenuButton>
                <StyledMenuButton onClick={() => {this.props.history.push('/history')}}>History</StyledMenuButton>
                <StyledMenuButton onClick={() => {this.props.history.push('/about')}}>About Me</StyledMenuButton>
                <StyledMenuButton><a href='https://github.com/regsg8' target="_blank" rel="noopener noreferrer">GitHub</a></StyledMenuButton>
                <StyledMenuButton><a href='http://linkedin.com/in/reggarrett' target="_blank" rel="noopener noreferrer">LinkedIn</a></StyledMenuButton>
            </FlexMenu>
        )
    }
}

export default withRouter(Nav) 
