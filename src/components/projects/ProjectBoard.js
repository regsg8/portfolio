import React from 'react'
import Project from './Project'
import { withData } from '../../context/DataProvider'
import { FlexMenu } from '../../elements';

const ProjectBoard = props => {
    const styles = {
        boardDiv: {
            margin: '16px',
            marginTop: '0px',
            marginBottom: '0px',
            paddingTop: '0px',
            padding: '10px',
            paddingBottom: '30px',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center'
        },
        title: {
            textAlign: 'center',
            color: '#76323f'
        }
    }
    const mappedProjects = props.projects.map((item, i) => {
        return <Project key={item.name} {...item} />
    })
    return (
        <div style={styles.boardDiv}>
            {mappedProjects}
        </div>
    )
}

export default withData(ProjectBoard)
