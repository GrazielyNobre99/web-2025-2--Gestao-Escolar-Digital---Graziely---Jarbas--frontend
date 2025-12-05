import React, { useState } from 'react'
import './CadastroDiscplina.css'

export default function CadastroDisciplina(){

    const [form, setForm] = useState({
            nomeDisciplina: '',
            AreaConhecimento: '',
            CargaHoraria: '',
            Ementa: '',
            ProfessorResponsavel: '',
            PeriodoLetivo: '',
            Tipo: '',
            Modalidade: '',
            AulasSemanais: ''
          })
        
          function handleChange(e){
            const { id, value } = e.target
            let val = value
            
            setForm(prev => ({ ...prev, [id]: val }))
          }
        
          function handleSubmit(e){
            e.preventDefault()
            console.log('Dados enviados:', form)
            alert('Discplina adicionada')
          }
        
          function handleReset(){
            setForm({
                nomeDisciplina: '',
                AreaConhecimento: '',
                CargaHoraria: '',
                Ementa: '',
                ProfessorResponsavel: '',
                PeriodoLetivo: '',
                Tipo: '',
                Modalidade: '',
                AulasSemanais: ''
            })
          }

    return(
        <>
        <div>
            <h2 id="CadDisciplina">Cadastro de Disciplina</h2>
            <article>
                <form className="formDisciplina" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="card">
                    <h3>Dados da Disciplina</h3>
                    <div className="grid-3">
                    <div className="campo">
                        <label htmlFor="nomeDiscplina">Nome da Disciplina:</label>
                        <input id="nomeDiscplina" type="text" value={form.nomeDiscplina} onChange={handleChange} placeholder="Nome da Disciplina" required />
                    </div>
                    <div className="campo">
                        <label htmlFor="AreaConhecimento">Área do Conhecimento:</label>
                        <input id="AreaConhecimento" type="text" value={form.AreaConhecimento} onChange={handleChange} placeholder="Área do Conhecimento" required />
                    </div>
                    <div className="campo">
                        <label htmlFor="CargaHoraria">Carga Horaria:</label>
                        <input id="CargaHoraria" type="text" value={form.CargaHoraria} onChange={handleChange} placeholder="CargaHoraria" required />
                    </div>

                    <div className="campo">
                        <label htmlFor="Ementa">Descrição ou Ementa Resumida:</label>
                        <input id="Ementa" type="text" value={form.Ementa} onChange={handleChange} placeholder='Descreva a Disciplina' required />
                    </div>

                    <div className="campo">
                        <label htmlFor="ProfessorResponsavel">Professor Responsável:</label>
                        <input id="ProfessorResponsavel" value={form.ProfessorResponsavel} onChange={handleChange} />
                    </div>
                    
                    <div className="campo">
                        <label htmlFor="PeriodoLetivo">Periodo Letivo:</label>
                        <input id="PeriodoLetivo" value={form.PeriodoLetivo} onChange={handleChange} />
                    </div>

                    <div className="campo">
                        <label htmlFor="Tipo">Tipo:</label>
                        <select class="Opcoes" id="Tipo" value={form.Tipo} onChange={handleChange}>
                        <option value="Obrigatoria">Obrigatoria</option>
                        <option value="Opcional">Opcional</option>
                        </select>
                    </div>

                     <div className="campo">
                        <label htmlFor="Modalidade">Modalidade:</label>
                        <select class="Opcoes" id="Modalidade" value={form.Modalidade} onChange={handleChange}>
                        <option value="Presencial">Presencial</option>
                        <option value="Remota">Remota</option>
                        <option value="Hibrida">Hibrida</option>
                        </select>
                    </div>

                    <div className="campo">
                        <label htmlFor="AulasSemanais">Quantidade de Aulas Semanais:</label>
                        <input id="AulasSemanais" value={form.AulasSemanais} onChange={handleChange} />
                    </div>

                    </div>
                </div>

                <div className="linha-flex botoes">
                    <button className="buttonAddProfessor" type="submit">Adicionar Discplina</button>
                    <button className="buttonLimpar" type="reset">Limpar Preenchimento</button>
                </div>
                </form>
            </article>
            </div>
        </>
    )
}