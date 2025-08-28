import React from 'react'
import LogoBobina from '../../img/bobina.png'
import LogoProjeto from '../../img/logo2.png'
import { Section } from './styles'
import { Header } from '../../Components/Header/Header'
export default function AboutUs() {
    return (
        <div>
            <Header />
            {/* Ana Paula Brasil


Ana Paula Brasil é artista visual, autora e designer, profissional internacional formada em artes plásticas e fotografia. Expertise, criatividade e conhecimento, combinados com as suas técnicas avançadas, são uma mistura explosiva única apresentada em seu Universo Artístico. Trabalha com artes têxteis para expressar a felicidade de viver.
Ana nasceu em uma família de poetas, artistas e costureiras. Seu caso de amor com o Quilt começou aos 8 anos de idade com a sua avó. Desde os anos 90 ministra workshops e participa de programas de TV e seu trabalho tem aparecido em centenas de revistas pelo mundo, além de participar de exposições e feiras internacionais desde 2009. Seu trabalho de arte pode ser visto em exposições internacionais, museus e galerias de arte. Morando no Canadá, exibe sua arte compartilhando seu conhecimento artístico em sua linda e feliz jornada através do Art Quilt. Após sua estreia em Houston, destacou-se no cenário internacional com sua criatividade e estilo único.
Ana Paula é proprietária de uma loja, atelier e escola de arte têxtil e quilt em Thunder Bay, Canadá. 
Ana é sempre cheia de humor, com alto astral, histórias e dicas, garantindo que as aulas sejam técnicas e divertidas. Preocupada com o planeta, compartilha sua filosofia de lixo zero com todos e está sempre engajada em projetos sociais com o objetivo de levar amor e conhecimento. Acredita que não existem erros, mas sim oportunidades.
Prepare-se para pensar fora da caixa e como ela diz: #vemnaminhaquetubrilha


c


✂️email contato
brasilanapaula@me.com

✂️Página da Artista 
Ana Paula Brasil - https://www.facebook.com/AnaPaulaBrasill/
cANAda pAULA brasil - https://www.facebook.com/cANadaPaulaBrasil/ 

✂️Instagram da Artista 
https://www.instagram.com/canadapaulabrasil/

✂️Website da Artista
www.canadapaulabrasil.ca 

✂️YouTube da Artista 
https://www.youtube.com/user/AnaPaulaBrasil

✂️Link Tree
https://linktr.ee/canadapaulabrasil */}
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
