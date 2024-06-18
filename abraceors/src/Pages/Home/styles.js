import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    justify-content: space-evenly;
    box-sizing: border-box;
`

export const StyledLogo = styled.img`
    width: 50vw;
    max-width: 30vh;
`
export const DonationContainer = styled.section`
    display: flex;
    width: fit-content;
    max-width: 90vw;
    flex-direction: column;
    align-items: center;
    font-family: "Rowdies", Arial, Helvetica, sans-serif;
    height: fit-content;
    gap: 8px;
    padding: 16px;
    color: #10163a;
    text-shadow: 0.1em 0.1em 0.05em #3166b1;
  /* bg */
  --s: 20px; /* control the size*/
  /* cores originais bandeira */
  /* --c1: #EE302F; */
  /* --c2: #00AB4E; */
  /* --c3: #FFCB04; */
  /* cores campanha */
  /* Azul #0049ac */
  --c1: #ee3a20;
  --c2: #0ca121;
  --c3: #fbcb29;
  
   --g: var(--s); /* gap between lines */
   background:
     conic-gradient(at var(--s) calc(100% - var(--s)),#0000 270deg,var(--c1) 0) calc(var(--s) + var(--g)) 0,
     linear-gradient(var(--c2) var(--s),#0000 0) 0 var(--g),
     conic-gradient(at var(--s) calc(100% - var(--s)),#0000 90deg,var(--c2) 0 180deg, var(--c1) 0),
     var(--c3);
   background-size: calc(2*(var(--s) + var(--g))) calc(2*(var(--s) + var(--g)));
`

export const DonationText = styled.p`
    font-family: "Just Me Again Down Here", cursive;
    font-size: 3em;
`

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 8px;
    p:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`