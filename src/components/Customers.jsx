import React, { Component } from "react";
import { connect } from "react-redux";
import "./Customers.css";
import { store } from "../store";
import { upDateCusmtomerRegistered } from "../actions/Registered_Customers";


class Customers extends Component {
  renderCards() {
    const data = store.getState().RegisteredCustomersReducer;
    return (
      <fieldset className="container-customers">
        {store.getState().RegisteredCustomersReducer.Customer_Registered ==
        "" ? (
          <div className="customers no-data">
            <fieldset>
              <legend>Dados Cadastrados</legend>
              <legend className="datas-to-login">
                Sem Clientes Cadastrados
              </legend>
              <p type="text"> Não há nada aqui</p>
            </fieldset>
          </div>
        ) : (
          data.Customer_Registered.map((element, index) => {
            return (
              <>
                <div className="customers">
                  <fieldset key={index}>
                    <legend>Dados Cadastrados</legend>
                    <legend className="datas-to-login">Nome</legend>
                    <p placeholder="seu Nome" type="text">
                      {element.Nome_Registro}
                    </p>
                    <legend className="datas-to-login">Idade</legend>
                    <p placeholder="seu Nome" type="text">
                      {element.Idade_Registro}
                    </p>
                    <legend className="datas-to-login">Email</legend>
                    <p placeholder="seu Nome" type="text">
                      {element.Email_Registro}
                    </p>
                    <button
                    className='toRemove_button'
                      onClick={() => this.RemoveCard(index)}
                      placeholder="seu Nome"
                      type="text"
                    >
                      excluir
                    </button>
                  </fieldset>
                </div>
              </>
            );
          })
        )}
      </fieldset>
    );
  }
  RemoveCard(index) {

    const toVerify = store.getState().RegisteredCustomersReducer.Customer_Registered
    const toRemove = index
    if(window.confirm("Do you want to delete this product?")){

      toVerify.forEach((item, index) => {
        if(index === toRemove){
          toVerify.splice(index, 1);
          
          const toDispatch = store.getState().RegisteredCustomersReducer
          this.props.up_date_customer_registered(toDispatch);
        }
      })
      this.forceUpdate();
      
    }
  }

  toPass() {
    const st = store.getState();
    const ret = Object.entries(st);
    const res = Object.entries(ret[1][1]);
    this.props.history.push("/register-customers");
  }
  toSort() {
      const dat = store.getState().RegisteredCustomersReducer
      const date = dat.Customer_Registered
      const d = date.map(element =>{
       const types = {
          Nome: element.Nome_Registro,
          Idade: element.Idade_Registro,
          Email: element.Email_Registro,
        };
        const sortProperty = types[types];
        const sorted = [...date].sort((a, b) => b[sortProperty] - a[sortProperty]);
        console.log(sorted)
        // setData(sorted);
      })
      
    }
  render() {
    return (
      <div className="background-customers">
        <a onClick={() => this.toSort()} className="to-register-customers">
          Ordenar por Nome
        </a>
        <a onClick={() => this.toPass()} className="to-register-customers">
          Fazer Novo Cadastro
        </a>
        {this.renderCards()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  up_date_customer_registered: (res) => dispatch(upDateCusmtomerRegistered(res)),
});

export default connect(null, mapDispatchToProps )(Customers);