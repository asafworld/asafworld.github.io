import React from "react";
import Header from "./Header";
import githubIcon from "./github-icon.png"
import linkedinLogo from "./linkedin-logo.png"

class AboutMe extends React.Component {
  render() {
    return (
      <article className="about-me">
        <Header />
        <p>Tenho 23 anos e moro em Belo Horizonte/MG, cidade onde nasci e fui criado. Recentemente me graduei em Direito pela Faculdade de Direito Milton Campos e fui aprovado no Exame Nacional da OAB. Sempre fui muito criativo, proativo e participativo, características que me empurraram a participar de competições acadêmicas nacionais e internacionais. Desde pequeno me engajo no hobby da escrita, e sempre fui muito apaixonado pela literatura fantástica e de mistérios.</p>
        <section className="ab-sections">
          <h2>Escolaridade</h2>
          <br />
          <div>
            <p><strong class="bold">Bacharel em Direito – OAB-MG 54.927-E</strong> <br />
                        Instituição: Faculdade de Direito Milton Campos <br />
                        Ano: 2021
            </p>
            <hr />
            <p>
                <strong class="bold">Ensino Médio concluído</strong> <br />
                Instituição: Colégio Tiradentes da Polícia Militar de Minas Gerais <br />
                Ano: 2015 <br />
            </p>
          </div>
        </section>
        <section className="ab-sections">
        <h2>Cursos de Aperfeiçoamento</h2>
                <section>
                    <br />
                    <p><strong class="bold">Inglês fluente</strong><br />
                    <strong class="bold">Instituição</strong>: Number One – Barreiro<br />
                    <strong class="bold">Período</strong>: 1° Semestre/2013 até 2° Semestre/2017<br />
                    <strong class="bold">Atributos</strong>: Habilidades de entendimento e comunicação, 
                    além de leitura e produção de documentos.
                    </p>
                    <hr />
                    <p><strong class="bold">Integrante do Núcleo de Estudos em Solução de Conflitos e equipe de competição de Arbitragem<br /> 
                    e Mediação</strong> <br />
                    <strong class="bold">Instituição</strong>: F. de Direito Milton Campos<br />
                    <strong class="bold">Período</strong>: 2° semestre/2017 até 2° semestre/2019<br />
                    <strong class="bold">Atributos</strong>:<br />
                    - Estudo sobre os meios extrajudiciais de solução de conflito, principalmente a Arbitragem, e do caso <br /> da
                    competição internacional Vis Moot 2017/2018.
                    <br />
                    <br />- Vice-campeão geral de equipes de mediandos da IX Competição Brasileira de Arbitragem e
                    Mediação <br /> Empresarial CAMARB, atuando como negociador e Plano de Mediação da Requerida
                    integrante do <br /> TOP3 de melhores Planos de Mediação.
                    <br />
                    <br />- Integrante da equipe da Milton Campos na CPR International Mediation Competition de 2019.
                </p>
                <hr />
                <p><strong class="bold"> Integrante do Grupo de Estudos de OEA Direito e Inovação</strong> <br />
                    <strong class="bold">Instituição</strong>: Faculdade de Direito Milton Campos <br />
                    <strong class="bold">Período</strong>: Ingresso no ano de 2020, grupo ainda andamento. <br />
                    <strong class="bold">Atributos</strong>: O estudo abarca os alcances do movimento digital nas diferentes áreas do Direito.
                </p>
                <hr />
                <p><strong class="bold">Conhecimento básico de informática</strong> <br />
                    <strong class="bold">Instituição</strong>: Divina Providência <br />
                    <strong class="bold">Período</strong>: 1° semestre/2012 <br />
                    <strong class="bold">Atributos</strong>: Introdução, Windows, Word, Excel, Internet
                </p>
                <hr />
                <p><strong class="bold">Curso Profissionalizante Administrativo</strong>  <br />
                    <strong class="bold">Instituição</strong>: Rede Cidadã <br />
                    <strong class="bold">Período</strong>: Out/2014 até Dez/2015 <br />
                    <strong class="bold">Atributos</strong>: Desenvolvimento de habilidades comunicativas, além da prática de atividades que
                    desenvolveram <br /> um aprendizado no atendimento ao cliente, produção e organização de documentos,
                    desenvolvimento de <br /> projetos e estudo da informática, quanto as ferramentas da Microsoft Office (Word,
                    Power Point, Excel) e quanto à internet também.
    
                </p>
                </section>
        </section>
        <section className="contato">
          <h2>Contato:</h2>
          <a target="_blank" rel="noreferrer" href="https://github.com/asafworld"><img alt="github icon" src={githubIcon}/></a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriel-a-75887a101/"><img alt="linkedin icon" src={linkedinLogo}/></a>
          <h3>gabrielasaf10@gmail.com</h3>
        </section>
      </article>
    )
  }
}

export default AboutMe;