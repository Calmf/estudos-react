import React, { Component } from "react"
import "./style.css"
class FormularioCadastro extends Component
{
	constructor(props)
	{
		super(props);
		this.titulo = "";
		this.texto = "";
	}

	_handleMudancaTitulo(event)
	{
		event.stopPropagation();
		this.titulo = event.target.value;
	}

	_handleMudancaTexto(event)
	{
		event.stopPropagation();
		this.texto = event.target.value;
	}

	_criarNota(event)
	{
		event.preventDefault();
		event.stopPropagation();
		if(this.titulo!="")
		{
			this.props.criarNota(this.titulo, this.texto);
			document.getElementById("form-test").reset();
			this.titulo = "";
			this.texto = "";
		}
		else alert("Vazio");
		
	}

	render()
	{
		return(
		<form id="form-test" className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
			<input type="text" placeholder="Título" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
			<textarea rows={15} placeholder="Escreva Nota" className="form-cadastro_input" onChange={this._handleMudancaTexto.bind(this)}/>
			<button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
		</form>
		);
	}
}

export default FormularioCadastro;