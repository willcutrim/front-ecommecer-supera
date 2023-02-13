import styled from "styled-components";

export const Column = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    
    
`

export const Row = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 30%;
    height: 280px;
    background: #E1E1E6;
    border-radius: 15px;
    margin-bottom: 20px;
    margin-right: 10px;
`
export const RowGames = styled.div`
    flex-direction: row;
    justify-content: space-around;
    display: flex;
    
    height: 90%;
    width: 100%;
`


export const ColumnGames = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    
`
export const SelectContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right:50px;
`