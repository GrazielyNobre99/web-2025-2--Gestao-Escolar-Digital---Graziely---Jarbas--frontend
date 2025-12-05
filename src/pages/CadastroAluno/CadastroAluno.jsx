import React, { useState } from 'react'
import './CadastroAluno.css'
import useInputMasks from '../../hooks/useInputMasks'

export default function CadastroAluno(){
  const [form, setForm] = useState({
    nomeAluno: '',
    email: '',
    telefone: '',
    nascimento: '',
    cpf: '',
    curso: '',
    mae: '',
    pai: '',
    telefoneMae: '',
    telefonePai: '',
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
      nomeAluno: '',
      email: '',
      telefone: '',
      nascimento: '',
      cpf: '',
      curso: '',
      mae: '',
      pai: '',
      telefoneMae: '',
      telefonePai: '',
      rua: '',
      bairro: '',
      numResidencia: '',
      complemento: ''
    })
  }

  return (
    <div>
      <h2 id="CadAluno">Cadastro de Alunos</h2>
      <article>
        <form className="formAluno" onSubmit={handleSubmit} onReset={handleReset}>
          <div className="card">
            <h3>Dados Pessoais</h3>
            <div className="grid-3">
              <div className="campo">
                <label htmlFor="nomeAluno">Nome:</label>
                <input id="nomeAluno" value={form.nomeAluno} onChange={handleChange} placeholder="Nome Completo" required />
              </div>
              <div className="campo">
                <label htmlFor="email">Email:</label>
                <input id="email" value={form.email} onChange={handleChange} placeholder="Email do Aluno" required />
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
                <label htmlFor="cpf">CPF do Estudante:</label>
                <input id="cpf" value={form.cpf} onChange={handleChange} placeholder="999.999.999-99" required maxLength={14} />
              </div>

              <div className="campo">
                <label htmlFor="curso">Curso:</label>
                <select class="Opcoes" id="curso" value={form.curso} onChange={handleChange}>
                  <option value="RedesDeComputadores">Redes de Computadores</option>
                  <option value="CienciadaComputacao">Ciência da Computação</option>
                  <option value="EngenhariaDaComputacao">Engenharia da Computação</option>
                  <option value="EngenhariaDeSoftware">Engenharia de Software</option>
                  <option value="SistemasDeInformacao">Sistemas de Informação</option>
                </select>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Informações dos Pais</h3>
            <div className="grid-2">
              <div className="campo">
                <label htmlFor="mae">Mãe do Estudante:</label>
                <input id="mae" value={form.mae} onChange={handleChange} placeholder="Nome Completo" required />
              </div>
              <div className="campo">
                <label htmlFor="pai">Pai do Estudante:</label>
                <input id="pai" value={form.pai} onChange={handleChange} placeholder="Nome Completo" required />
              </div>
              <div className="campo">
                <label htmlFor="telefoneMae">Telefone da Mãe:</label>
                <input id="telefoneMae" value={form.telefoneMae} onChange={handleChange} placeholder="(XX) 9XXXX-XXXX" required />
              </div>
              <div className="campo">
                <label htmlFor="telefonePai">Telefone do Pai:</label>
                <input id="telefonePai" value={form.telefonePai} onChange={handleChange} placeholder="(XX) 9XXXX-XXXX" required />
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
            <button className="buttonAddAluno" type="submit">Adicionar Aluno</button>
            <button className="buttonLimpar" type="reset">Limpar Preenchimento</button>
          </div>
        </form>
      </article>
    </div>
  )
}
