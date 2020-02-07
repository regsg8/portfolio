import React from 'react'
import { StyledHistoryTile } from '../../elements/index'

const EducationDetail = props => {
    const styles = {
        img: {
            height: '60px',
            marginRight: '8px',
            marginBottom: '0px'
        },
        imgDiv: {
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            alignText: 'center',
            verticalAlignText: 'center',
            marginBottom: '0px'
        },
        descriptionDiv: {
            fontSize: '22px',
            margin: '6px'
        },
        educationDetailDiv: {
            margin: '5px',
            padding: '2px'
        },
        nameDiv: {
            fontSize: '24px',
            margin: 'auto',
        }
    }
    
    
    return (
        <StyledHistoryTile style={styles.educationDetailDiv}>
            <div style={styles.imgDiv}>
                <img style={styles.img} src={props.img} alt='logo'></img>
                <div style={styles.nameDiv}>{props.name}</div>
            </div>
            <div style={styles.descriptionDiv}>
                
                {props.description}
            </div>
        </StyledHistoryTile>
    )
}

export default EducationDetail
