import React from 'react'
import WorkHistory from './WorkHistory'
import Download from './Download'
import Education from './Education'
import { withData } from '../../context/DataProvider'

const Resume = (props) => {
    const styles = {
        title: {
            textAlign: 'center',
            color: '#76323f'
        },
        center: {
            marginTop: '20px',
            textAlign: 'center',
            fontSize: '20px'
        },
        buttonDiv: {
            display: 'flex',
            justifyContent: 'center',
        },
        button: {
            marginRight: '10px',
            marginLeft: '10px',
            fontSize: '18px',
            borderRadius: '3px',
            border: 'solid 1px #999999'
        },
        selectedButton: {
            marginRight: '10px',
            marginLeft: '10px',
            fontSize: '20px',
            border: 'solid black 1px',
            borderRadius: '3px',
            backgroundColor: '#76323f',
            color: 'rgb(243, 244, 246)',
            padding: '6px'
        },
        displayDiv: {
            display: 'flex',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            alignContent: 'center',
            width: '100vw'
        }
    }
    return (
        <div >
            <div style={styles.center}>Here is an overview of my education and work history.</div>
            <div style={styles.center}>Or, you can get the juicy details on my resume.</div>
             <br></br>
            <div style={styles.buttonDiv}>
                <button onClick={props.toggler} name='resumeView' value='download' style={props.resumeView === 'download' ? styles.selectedButton : styles.button} className='resume-button'>
                    Resume
                </button>
                <button onClick={props.toggler} name='resumeView' value='education' style={props.resumeView === 'education' ? styles.selectedButton : styles.button} className='resume-button'>
                    Education
                </button>
                <button onClick={props.toggler} name='resumeView' value='history' style={props.resumeView === 'history' ? styles.selectedButton : styles.button} className='resume-button'>
                    Work History
                </button>
            </div>
            <div style={styles.displayDiv}>
                <WorkHistory />
                <Download />
                <Education />
            </div>
        </div>
    )
}

export default withData(Resume) 
