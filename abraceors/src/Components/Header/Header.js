import React from 'react'
import LogoProjeto from '../../img/logo1.png'
import { goToAbout, goToHome } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'
import { StyledHeader } from './styles'
export function Header() {
    const navigate = useNavigate()
    return (
        <StyledHeader>
            <img
                src={LogoProjeto}
                onClick={() => goToHome(navigate)}
                alt="Logo da campanha mostrando um ícone similar a um Quilt com as cores da bandeira do Rio Grande do Sul e abaixo está escrito 'Abrace o RS' com clique para direcionar à 'home'" />
            <p><a onClick={() => goToHome(navigate)}>Home</a></p>
            <p><a onClick={() => goToAbout(navigate)}>Quem Somos </a></p>
            <p><a onClick={() => goToHome(navigate)}>Formulários</a></p>
        </StyledHeader>
    )
}
