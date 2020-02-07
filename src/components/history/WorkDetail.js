import React from 'react'
import { StyledHistoryTile } from '../../elements/index'

const WorkDetail = (props) => {
    const styles = {
        img: {
            height: '60px',
            marginRight: '8px'
        },
        imgDiv: {
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            
            alignText: 'center',
            verticalAlignText: 'center'
        },
        detailsDiv: {
            fontSize: '22px',
            marginTop: '0px'
        },
        workDetailDiv: {
            margin: '5px',
            padding: '2px'
        },
        nameDiv: {
            fontSize: '24px',
            margin: 'auto',
        }
    }
    const mappedDetails = props.details.map((item, i) => {
        return (
            <li key={i}>
                {item}
            </li>
        )
    })
    return (
        <StyledHistoryTile style={styles.workDetailDiv}>
            <div style={styles.imgDiv}>
                <img style={styles.img} src={props.img} alt='logo'></img>
                <div style={styles.nameDiv}>{props.name}</div>
            </div>
            <div style={styles.detailsDiv}>
                <ul style={styles.detailsDiv}>
                    {mappedDetails}
                </ul>
            </div>
        </StyledHistoryTile>
    )
}

export default WorkDetail
