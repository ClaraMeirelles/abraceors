import styled from "styled-components";

export const StyledHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 10vh;
    font-size: 1em;
    img{
        height: 10vh;
    }
    p{
        border: 1px dotted black;
        padding: 0.5% 1%;
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }

`