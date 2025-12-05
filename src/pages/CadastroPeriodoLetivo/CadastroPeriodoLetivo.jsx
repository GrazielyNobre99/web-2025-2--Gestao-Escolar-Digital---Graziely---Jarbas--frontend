import React, { useState } from 'react'

export default function CadastroPeriodoLetivo (){

     const [form, setForm] = useState({
                AnoLetivo: '',
                TipoPeriodo: '',
                DataInicio: '',
                DataTermino: '',
                Situacao: ''
              })
            
              function handleChange(e){
                const { id, value } = e.target
                let val = value
                
                setForm(prev => ({ ...prev, [id]: val }))
              }
            
              function handleSubmit(e){
                e.preventDefault()
                console.log('Dados enviados:', form)
                alert('Período Letivo adicionada')
              }
            
              function handleReset(){
                setForm({
                    AnoLetivo: '',
                    TipoPeriodo: '',
                    DataInicio: '',
                    DataTermino: '',
                    Situacao: ''
                })
              }

    return(
        <>
        <div>
            <h2 id="CadPeriodoLetivo">Cadastro de Período Letivo</h2>
            <article>
                <form className="formPeriodoLetivo" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="card">
                    <h3>Dados do Período Letivo</h3>
                    <div className="grid-3">
                    <div className="campo">
                        <label htmlFor="AnoLetivo">Ano Letivo:</label>
                        <input id="AnoLetivo" type="text" value={form.AnoLetivo} onChange={handleChange} placeholder="Ano Letivo" required />
                    </div>
                    <div className="campo">
                        <label htmlFor="TipoPeriodo">Tipo do Período:</label>
                        <select class="Opcoes" id="TipoPeriodo" value={form.TipoPeriodo} onChange={handleChange}>
                        <option value="Semestral">Semestral</option>
                        <option value="Trimestral">Trimestral</option>
                        <option value="Bimestral">Bimestral</option>
                        </select>
                    </div>

                    <div className="campo">
                        <label htmlFor="DataInicio">Data de Início:</label>
                        <input id="DataInicio" type="date" value={form.DataInicio} onChange={handleChange} required />
                    </div>

                    <div className="campo">
                        <label htmlFor="DataTermino">Data de Termino:</label>
                        <input id="DataTermino" type="date" value={form.DataTermino} onChange={handleChange} required />
                    </div>

                    <div className="campo">
                        <label htmlFor="Situacao">Situação:</label>
                        <select class="Opcoes" id="Situacao" value={form.Situacao} onChange={handleChange}>
                        <option value="Ativo">Ativo</option>
                        <option value="EmPausa">Em Pausa</option>
                        <option value="Encerrado">Encerrado</option>
                        </select>
                    </div>

                    </div>
                </div>

                <div className="linha-flex botoes">
                    <button className="buttonAddProfessor" type="submit">Adicionar Período Letivo</button>
                    <button className="buttonLimpar" type="reset">Limpar Preenchimento</button>
                </div>
                </form>
            </article>
            </div>
        </>
    )
}