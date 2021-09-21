import styled, {css} from 'styled-components'


export const ButtonWrapper = styled.button`
    display: flex;
    justify-content: space-between;
    color: black;
    box-sizing:border-box;
    background-color: white;
    padding: 12px 30px;
    border-radius: 100px;
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border: 1px solid #ccc;
    margin:10.5px;
    font-size:20px;
    cursor: pointer;
    width: 300px;
    size: 20px;
    @media (max-width:768px) {
    padding:15px 30px;
  }
`

