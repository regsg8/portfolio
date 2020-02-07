import React from 'react'
import { StyledLargeProject, StyledLinkButton } from '../../elements/index'

const LargeProject = props => {
    const styles = {
        title: {
            textAlign: 'center',
            
        },
        description: {
            color: ''
        },
        projectDiv: {
            display: 'grid',
            gridTemplateColumns: 'minmax(180px, 20%) minmax(180px, 50%) minmax(180px, 30%)',
            gridTemplateRows: 'auto auto',
            gridColumnGap: '20px',
            padding: '20px',
            margin: '5px',
            border: 'solid 2px #565656',
            borderRadius: '5px'
        },
        img: {
            height: '200px'
        },
        emphasis: {
            color: '#76323f'
        },
        
        titleDiv: {
            gridColumnStart: '1',
            gridColumnEnd: '4'
        },
        h3: {
            margin: '10px',
            marginTop: '6px'
        },
        opaque: {
            backgroundColor: '#303030',
            opacity: '.4',
            position: 'absolute',
            top: '0',
            left: '0',
            height: '100%',
            width: '100%',
            zIndex: '-1'
          },
          button: {
            fontSize: '18px',
            borderRadius: '3px',
            border: 'solid 1px #999999',
            textAlign: 'center',
            height: '26px', 
            marginBottom: '6px',
          }
    }
    const resourcesSpan = props => {
        if (props.resources !== '') {
            return (
                <span>
                     {props.resources}<br></br><br></br>
                </span>
            )
        }
    } 
    const deployedElement = () => {
        return (
            <button style={styles.button} className='resume-button'>
                 <a href={props.deployed} target="_blank" rel="noopener noreferrer">Check it out</a> <br/> <br/>
            </button>
        )
    }
    const externalLinkElement = () => {
        return (
            <button style={styles.button} className='resume-button'>
                 <a href={props.externalLink} target="_blank" rel="noopener noreferrer">{props.externalLinkText}</a>
            </button>
        )
    }

    return (
        <StyledLargeProject onClick={props.toggle} >
            <div style={styles.opaque}></div>
            <div style={styles.titleDiv}>
                <span style={styles.title}><h3 style={styles.h3}>{props.name}</h3></span>
            </div>
            <div>
            <a href={props.deployed} target="_blank" rel="noopener noreferrer">
                <img src={props.img} alt='Project' style={styles.img} className='project-image'></img>
            </a>
            </div>
            <div>
                <span style={styles.description}>{props.description}</span><br></br>
            </div>
            <div>
                 Built with {props.used} <br></br><br></br>
                {props.group ? ` Team members: ${props.teamMembers}` : ' This was a solo project.' } <br></br><br></br>
                {resourcesSpan(props)}
                {props.deployed !== '' && deployedElement()}
                {props.externalLink !== '' && externalLinkElement()}
            </div>
        </StyledLargeProject>
    )
}

export default LargeProject
