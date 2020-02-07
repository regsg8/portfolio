import React from 'react'
import { StyledSmallProject, StyledTileRibbon, StyledTileRibbonBackground } from '../../elements/index'

const SmallProject = props => {

    const styles = {
        div: {
            backgroundImage: `url(${props.img})`,
            backgroundSize: 'cover'
        }
    }

    return (
        <StyledSmallProject onClick={props.toggle} style={styles.div}>
            <StyledTileRibbon>
                {props.name}
            </StyledTileRibbon>
            <StyledTileRibbonBackground></StyledTileRibbonBackground>
        </StyledSmallProject>
    )
}

export default SmallProject