import React from 'react'
import { withData } from '../../context/DataProvider'
import WorkDetail from './WorkDetail'

const WorkHistory = (props) => {
    const mappedWork = props.work.map((item) => {
        return (
            <WorkDetail {...item} key={item.name} />
        )
    })
    return (
        <div className={`resume${props.resumeView === 'history' ? 'Display' : 'NoDisplay'}`}>
            {mappedWork}
        </div>
    )
}

export default withData(WorkHistory)
