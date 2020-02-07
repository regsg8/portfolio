import styled from 'styled-components'

export const StyledTile = styled.div`
    border-radius: 5px;
    margin: 8px;
    position: relative;
    border: 3px solid #363636;
    transition: all .4s ease;
    &:hover {
        box-shadow: 0px 0px 20px #363636;
    }
`;

export const StyledSmallProject = styled(StyledTile)`
    height: 200px;
    width: 300px;
`;

export const StyledTileRibbon = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    z-index: 1;
    padding: 8px;
`;

export const StyledTileRibbonBackground = styled(StyledTileRibbon)`
    background-color: #303030;
    opacity: .8;
    z-index: 0;
`;

export const StyledLargeProject = styled(StyledTile)`
    display: grid;
    grid-template-columns: minmax(180px, 20%) minmax(180px, 50%) minmax(180px, 30%);
    grid-template-rows: auto auto;
    grid-column-gap: 20px;
    padding: 20px;
    margin: 5px;
    border: solid 2px #565656;
    border-radius: 5px;
    position: relative;
`;

export const StyledLinkButton = styled.button`
    &:hover {
        box-shadow: 0px 0px 20px #363636;
    }
`;
