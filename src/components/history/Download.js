import React from 'react'
import { withData } from '../../context/DataProvider'
import { StyledHistoryButton } from '../../elements/index'

const Download = (props) => {
    const styles = {
        img: {
            height: '40px',
            marginRight: '8px'
        },
        imgDiv: {
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            alignText: 'center',
            verticalAlignText: 'center',
            justifyContent: 'center',
            width: '100%'
        },
    }
    return (
        <div className={`resume${props.resumeView === 'download' ? 'Display' : 'NoDisplay'}`}>
            <StyledHistoryButton>
                <a href={require('../../resume.pdf')} download>
            Download Resume</a>
            </StyledHistoryButton>
            <StyledHistoryButton>
                <a href={require('../../resume.pdf')} target="_blank" rel="noopener noreferrer">Open in New Tab</a>
            </StyledHistoryButton>
        </div>
    )
}

export default withData(Download)