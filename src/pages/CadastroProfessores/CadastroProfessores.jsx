import React, { useState } from 'react'
import './CadastroProfessores.css'
import useInputMasks from '../../hooks/useInputMasks'

export default function CadastroProfessores(){

    const [form, setForm] = useState({
        nomeProfessor: '',
        email: '',
        telefone: '',
        nascimento: '',
        cpf: '',
        Formação: '',
        AreaConhecimento: '',
        rua: '',
        bairro: '',
        numResidencia: '',
        complemento: ''
      })
    
      const { formatPhone, formatCPF } = useInputMasks()
    
      function handleChange(e){
        const { id, value } = e.target
        let val = value
        if(id === 'telefone' || id === 'telefoneMae' || id === 'telefonePai'){
          val = formatPhone(value)
        }
        if(id === 'cpf'){
          val = formatCPF(value)
        }
        setForm(prev => ({ ...prev, [id]: val }))
      }
    
      function handleSubmit(e){
        e.preventDefault()
        console.log('Dados enviados:', form)
        alert('Aluno adicionado')
      }
    
      function handleReset(){
        setForm({
            nomeProfessor: '',
            email: '',
            telefone: '',
            nascimento: '',
            cpf: '',
            Formação: '',
            AreaConhecimento: '',
            rua: '',
            bairro: '',
            numResidencia: '',
            complemento: ''
        })
      }
    
    return(
        <>
         <div>
            <h2 id="CadProfessor">Cadastro de Professores</h2>
            <article>
                <form className="formProfessores" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="card">
                    <h3>Dados Pessoais</h3>
                    <div className="grid-3">
                    <div className="campo">
                        <label htmlFor="nomeProfessor">Nome:</label>
                        <input id="nomeProfessor" value={form.nomeProfessor} onChange={handleChange} placeholder="Nome Completo" required />
                    </div>
                    <div className="campo">
                        <label htmlFor="email">Email:</label>
                        <input id="email" value={form.email} onChange={handleChange} placeholder="Email do Professor" required />
                    </div>
                    <div className="campo">
                        <label htmlFor="telefone">Telefone:</label>
                        <input id="telefone" value={form.telefone} onChange={handleChange} placeholder="(XX) 9XXXX-XXXX" required />
                    </div>

                    <div className="campo">
                        <label htmlFor="nascimento">Data de Nascimento:</label>
                        <input id="nascimento" type="date" value={form.nascimento} onChange={handleChange} required />
                    </div>

                    <div className="campo">
                        <label htmlFor="cpf">CPF do Professor(a):</label>
                        <input id="cpf" value={form.cpf} onChange={handleChange} placeholder="999.999.999-99" required maxLength={14} />
                    </div>

                    </div>
                </div>

                <div className="card">
                    <h3>Formação</h3>
                    <div className="grid-3">
                    <div className="campo">
                        <label htmlFor="AreaConhecimento">Área de Conhecimento:</label>
                        <input id="AreaConhecimento" value={form.AreaConhecimento} onChange={handleChange} placeholder="Especialidade"/>
                    </div>

                    <div className="campo">
                        <label htmlFor="formacao">Formação:</label>
                        <select id="formacao" value={form.formacao} onChange={handleChange}>
                        <option value="Graduação">Graduação</option>
                        <option value="Mestrado">Mestrado</option>
                        <option value="Doutorado">Doutorado</option>
                        </select>
                    </div>

                    <div class="campo">
                        <label htmlFor="Instituicao">Instituição de Graduação:</label>
                        <input type="text" id="Instituicao" value={form.Instituicao} onChange={handleChange} placeholder="Instituição que se graduou"/>
                    </div>

                    <div className="campo">
                        <label htmlFor="anoFormacao">Ano de Conclusão:</label>
                        <input id="anoFormacao" type="date" value={form.anoFormacao} onChange={handleChange} required />
                    </div>

                    </div>
                </div>

                <div className="card">
                    <h3>Endereço</h3>
                    <div className="grid-3">
                    <div className="campo">
                        <label htmlFor="rua">Rua:</label>
                        <input id="rua" value={form.rua} onChange={handleChange} placeholder="Nome da Rua" required />
                    </div>
                    <div className="campo">
                        <label htmlFor="bairro">Bairro:</label>
                        <input id="bairro" value={form.bairro} onChange={handleChange} placeholder="Nome do Bairro" required />
                    </div>
                    <div className="campo">
                        <label htmlFor="numResidencia">Número:</label>
                        <input id="numResidencia" type="number" value={form.numResidencia} onChange={handleChange} placeholder="Número da Residência" required />
                    </div>
                    <div className="campo">
                        <label htmlFor="complemento">Complemento:</label>
                        <input id="complemento" value={form.complemento} onChange={handleChange} placeholder="Casa, Apartamento..." required />
                    </div>
                    </div>
                </div>

                <div className="linha-flex botoes">
                    <button className="buttonAddProfessor" type="submit">Adicionar Professor(a)</button>
                    <button className="buttonLimpar" type="reset">Limpar Preenchimento</button>
                </div>
                </form>
            </article>
            </div>
            </>
    )
}