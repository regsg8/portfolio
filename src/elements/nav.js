import styled from 'styled-components'

export const StyledMenuButton = styled.div`
    font-size: 22px;
    margin-right: 10px;
    padding: 4px;
    border-radius: 2px;
    &:hover {
        box-shadow: 6px 6px;
        background-color: rgb(243, 244, 246);
        color: #303030;
        cursor: default;
    }
`;

export const FlexMenu = styled.div`
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    text-align: center;
    margin-right: 10px;
    margin-top: auto;
    margin-bottom: auto;
`;