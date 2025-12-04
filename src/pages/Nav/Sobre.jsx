import React from 'react';

function Sobre (){
    return(
        <>
        <div className="page-content">
            <h2>Sobre esta Aplicação</h2>

            <div className="about-content">
                <p>O <strong>Gestão Escolar Digital</strong> é uma plataforma desenvolvida para mitigar 
                    a problemática da centralização e controle ineficiente de informações 
                    no cenário educacional.</p>

                <p>
                    O sistema é voltado para <strong>professores e gestores</strong> e tem como objetivo principal 
                    digitalizar e unificar processos cruciais, desde o registro de dados dos alunos (cadastros, notas, frequências) 
                    até o acompanhamento do progresso de turmas e indivíduos.
                </p>

                <p>
                    A solução proposta oferece um controle completo, facilitando a rotina administrativa e pedagógica:
                </p>

                <ul>
                    <li><strong>Para Professores: </strong>Simplifica a gestão de turmas, lançamento de notas e controle de frequência.</li>
                    <li><strong>Para a Gestão Pedagógica: </strong>Permite o acompanhamento eficiente do desempenho dos alunos, 
                    acesso a fichas personalizadas, históricos e anotações dos docentes, fornecendo uma base informacional sólida para tomadas de decisão.</li>
                </ul>
            </div>

        </div>
        </>
    )
}

export default Sobre;