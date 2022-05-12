import React from 'react';
import './App.css';
import CpfInput from './components/CpfInput';
import EmailInput from './components/EmailInput';
import EnderecoInput from './components/EnderecoInput';
import NameInput from './components/NameInput';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  handleChange = (event) => {
    this.setState({
      [ event.target.name ]: event.target.value
    })
  }
  handleMouseEnter = () => {
    const alerted = localStorage.getItem('alerted') || '';
    if (alerted !== 'yes') {
      alert("Preencha com cuidado esta informação.");
      localStorage.setItem('alerted', 'yes');
    }
  }

  handleBlur = (event) => {
    const regex = /^[0-9]/
    if (regex.test(this.state.city)) {
      console.log('test')
      this.setState({
        city: ""
      })
      event.target.value = ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const form = document.getElementById("form")
    const app = document.getElementById("app")
    console.log("none")
    form.style.display = "none"
    app.innerHTML = `${this.state.name} 
    ${this.state.email}`
  }
  cleanInput = () => {
    const inputs = document.getElementsByTagName('input')

    const arrayInputs = Array.from(inputs)
    console.log(arrayInputs)
    arrayInputs.map((item) => item.value = "")
  }

  render() {
    const { name, email, cpf, endereco } = this.state
    return (
      <div className="App" id='app'>
        <form onSubmit={ this.handleSubmit } id="form"> <fieldset>
          <NameInput name={ name } onInputChange={ this.handleChange } />
          <EmailInput email={ email } onInputChange={ this.handleChange } />
          <CpfInput cpf={ cpf } onInputChange={ this.handleChange } />
          <EnderecoInput endereco={ endereco } onInputChange={ this.handleChange } />
          <label>Cidade</label>
          <input maxLength="28" required name="city" onChange={ this.handleChange } onBlur={ this.handleBlur } />

        </fieldset>
          <fieldset>
            <label>Resumo do currículo</label>
            <textarea maxLength="1000" name="resume" onChange={ this.handleChange } />
            <label>Cargo</label>
            <textarea maxLength="40" onMouseEnter={ this.handleMouseEnter } name="cargo" onChange={ this.handleChange } />
            <label>Descrissão do Cargo</label>
            <input maxLength="500" required name="descriptionCargo" onChange={ this.handleChange } />
          </fieldset>
          <button >Enviar</button>
        </form>
        <button onClick={ this.cleanInput }>limpar</button>

      </div>
    );
  }

}

export default App;
