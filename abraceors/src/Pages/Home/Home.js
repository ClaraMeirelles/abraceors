import React from 'react'
import Logo from "../../img/logo2.png"
import { DonationContainer, DonationText, MainContainer, StyledLogo, Menu } from './styles'
import { goToAbout } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    return (
        <MainContainer>
            <StyledLogo src={Logo} alt="Logo da campanha mostrando um ícone similar a um recorte de patchwork com as cores da bandeira do Rio Grande do Sul e abaixo está escrito 'Abrace o RS'" />
            <DonationContainer>
                <h1>Colchômetro</h1>
                <DonationText>XXX colchas doadas</DonationText>
            </DonationContainer>
            <Menu>
                <p onClick={() => goToAbout(navigate)}>Quem Somos</p>
                <p>Cadastro de voluntárias</p>
                <p>Quero abraçar uma artesã</p>
                <p>Sou artesã e quero ser abraçada</p>
            </Menu>
        </MainContainer>
    )
}

