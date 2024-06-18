import React from 'react'
import LogoBobina from '../../img/bobina.png'
import LogoProjeto from '../../img/logo2.png'
import { Section } from './styles'
import { Header } from '../../Components/Header/Header'
export default function AboutUs() {
    return (
        <div>
            <Header />
            <Section>
                <img src={LogoBobina} alt="Bobina de máquina de costura desenhada a mão com escrito em efeito bordado o nome 'Bobina cheia de amor'" />
                <h1>O que é o projeto "Bobina cheia de amor?"</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Section>
            <Section>
                <img src={LogoProjeto} alt="Logo da campanha mostrando um ícone similar a um recorte de patchwork com as cores da bandeira do Rio Grande do Sul e abaixo está escrito 'Abrace o RS'" />
                <h1>Sobre a campanha “Abrace o RS”:</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Section>
            <footer>
                <p><strong>Redes Sociais:</strong></p>
            </footer>
        </div>
    )
}
