import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Sobre.css';
import sobreImage from '../assets/carrofrente.png';
import dev3 from '../assets/amaral.png'; 
import dev1 from '../assets/luiz.png'; 
import dev2 from '../assets/bocc.png'; 

const Sobre = () => {
    return (
        <>
            <section className="sobre-container">
                <div className="sobre-content">
                    <h1 className='hsob'>Sobre Nós</h1>                 

                    <p>
                        Na <span className="highlight1">BoccYD</span>, acreditamos que o futuro da mobilidade é sustentável, eficiente e inovador. Somos uma loja especializada em veículos elétricos, comprometidos em oferecer soluções de transporte que respeitem o meio ambiente sem abrir mão de desempenho e estilo.
                    </p>
                    <p>
                    Nossa missão é transformar a maneira como as pessoas se movem, proporcionando uma experiência de condução limpa, silenciosa e economicamente viável. Com uma seleção de veículos elétricos de alta qualidade, a <span className="highlight1">BoccYD</span> está na vanguarda da revolução verde, ajudando nossos clientes a fazerem escolhas mais conscientes para o planeta.                        
                    </p>
                    <p>
                        Além de vender carros elétricos, oferecemos um atendimento personalizado para guiar você na transição para um futuro mais sustentável. Seja você um entusiasta de tecnologia ou alguém em busca de uma alternativa prática para o transporte diário, na <span className="highlight1">BoccYD</span> você encontra o veículo ideal para suas necessidades.                       
                    </p>
                    <p>
                    Junte-se a nós nessa jornada rumo a um amanhã mais limpo e movido a energia elétrica!
                    </p>

                </div>
                <div className="sobre-image-container">
                    <img src={sobreImage} alt="Sobre nós" className="sobre-image" />
                </div>
            </section>


            <section className="devs-container">
                <h2>Grupo</h2>
                <div className="devs">
                    <div className="dev-card">
                        <img src={dev1} alt="Desenvolvedor 1" className="dev-image" />
                        <p className="dev-name">Luiz</p>
                        <a href='https://www.linkedin.com/' target='blanc' className='devs-link'>LinkedIn</a>
                    </div>
                    <div className="dev-card">
                        <img src={dev2} alt="Desenvolvedor 2" className="dev-image" />
                        <p className="dev-name">Bocchi</p>
                        <a href='https://www.linkedin.com/' target='blanc' className='devs-link'>LinkedIn</a>
                    </div>
                    <div className="dev-card">
                        <img src={dev3} alt="Desenvolvedor 3" className="dev-image" />
                        <p className="dev-name">Amaral</p>
                        <a href='https://www.linkedin.com/' target='blanc' className='devs-link'>LinkedIn</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sobre;