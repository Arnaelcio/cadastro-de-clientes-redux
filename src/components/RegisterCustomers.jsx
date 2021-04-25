import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getNameRegister,
  getAgeRegister,
  getEmailRegister,
} from "../actions/Register_Customers";
import { getCusmtomerRegistered } from "../actions/Registered_Customers";

import "./RegisterCustomers.css";
import { store } from "../store";

class RegisterCustomers extends Component {
  // componentDidMount() {
  //   this.getData();
  //   this.setData();
  // }
  // setData() {

  //   const setdata = JSON.parse(localStorage.getItem("card"));
  //   localStorage.setItem("card", JSON.stringify(setdata));
  //   // this.props.get_customer_registered(setdata);
  // }
  // getData() {
  //   return JSON.parse(localStorage.getItem("card"));
  // }

  toPass() {
    const st = store.getState();
    const ret = Object.entries(st);
    const res = Object.entries(ret[1][1]);
    const resultRegister = st.RegisterCustomersReducer;

    // console.log(resultRegistered)
    let name = res[0][1];
    let age = res[1][1];
    let mail = res[2][1];
    if ([""].includes(name && age && mail)) {
      alert("Todos os campos devem ser preenchidos");
    } else {
      alert(`
            Usuário cadastrado com sucesso!!
            Clique em Ok para fazer seu login
             `);
      // this.setData();
      this.props.get_customer_registered(resultRegister);
      // const resultRegistered = Object.entries(store.getState())[2];
      // localStorage.setItem("card", JSON.stringify(resultRegistered));
      // JSON.parse(localStorage.getItem("card"));
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div className="background-register">
        <div className="login">
          <fieldset>
            <legend>Preencha os dados para Login</legend>
            <legend className="datas-to-login">Nome</legend>
            <input
              onChange={({ target }) =>
                this.props.get_name_register(target.value)
              }
              placeholder="Digite aqui seu nome"
              type="text"
            />
            <legend className="datas-to-login">Idade</legend>
            <input
              onChange={({ target }) =>
                this.props.get_age_register(target.value)
              }
              placeholder="Digite aqui sua Idade"
              type="text"
            />
            <legend className="datas-to-login">Email</legend>
            <input
              onChange={({ target }) =>
                this.props.get_email_register(target.value)
              }
              placeholder="Digite aqui seu email"
              type="text"
            />
            <a onClick={() => this.toPass()}>Cadastrar Usuário</a>
          </fieldset>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Nome_Registro: state.get_Name_Register,
  Idade_Registro: state.get_Age_Register,
  Email_Registro: state.get_Email_Register,
});

const mapDispatchToProps = (dispatch) => ({
  get_name_register: (get_Name_Register) =>
    dispatch(getNameRegister(get_Name_Register)),
  get_age_register: (get_Age_Register) =>
    dispatch(getAgeRegister(get_Age_Register)),
  get_email_register: (get_Email_Register) =>
    dispatch(getEmailRegister(get_Email_Register)),
  get_customer_registered: (res) => dispatch(getCusmtomerRegistered(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCustomers);
