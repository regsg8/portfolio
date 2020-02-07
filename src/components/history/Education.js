import React from 'react'
import { withData } from '../../context/DataProvider'
import EducationDetail from'./EducationDetail'

const Education = (props) => {
    const mappedSchools = props.education.map((item, i) => {
        return (
            <EducationDetail {...item} key={i}/>
        )
    })
    return (
        <div className={`resume${props.resumeView === 'education' ? 'Display' : 'NoDisplay'}`}>
            {mappedSchools}
        </div>
    )
}

export default withData(Education)