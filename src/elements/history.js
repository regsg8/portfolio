import styled from 'styled-components'

export const StyledHistoryTile = styled.div`
    border: solid 3px #363636;
    border-radius: 5px;
    height: 200px;
    width: 300px;
    padding: 5px;
`;

export const StyledHistoryButton = styled.button`
    height: 80px;
    width: 160px;
    border: solid 3px #363636;
    margin: 8px;
    font-size: 18px;
    transition: all .4s ease;
    &:hover {
        
        box-shadow: inset 0 0 0 6px #363636,
                    0px 0px 20px #363636;
    }
`;