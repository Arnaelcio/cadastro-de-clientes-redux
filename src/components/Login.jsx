import React, { Component } from "react";
import "./Login.css";
import { getEmail, getPwd } from "../actions/Login";
// import { getCusmtomerRegistered } from '../actions/Registered_Customers'
import { connect } from "react-redux";
import { store } from "../store";

class Login extends Component {
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
    const res = Object.entries(ret[0][1]);
    let mail = res[0][1];
    let pwd = res[1][1];
    if ([""].includes(pwd && mail)) {
      alert("Login não efetuado");
    } else {
      // this.setData()
      this.props.history.push("/customers");
    }
  }
  render() {
    return (
      <div className="background-login">
        <div className="login">
          <fieldset>
            <legend>Preencha os dados para Login</legend>
            <legend className="datas-to-login">Email</legend>
            <input
              onChange={({ target }) => this.props.get_email(target.value)}
              placeholder="Digite aqui seu email"
              type="text"
            />
            <legend className="datas-to-login">Senha</legend>
            <input
              onChange={({ target }) => this.props.get_pwd(target.value)}
              placeholder="Digite aqui sua senha"
              type="password"
            />
            <a onClick={() => this.toPass()}>Fazer Login</a>
          </fieldset>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Email: state.get_Email,
  Senha: state.get_Pwd,
});

const mapDispatchToProps = (dispatch) => ({
  get_email: (get_Email) => dispatch(getEmail(get_Email)),
  get_pwd: (get_Pwd) => dispatch(getPwd(get_Pwd)),
  // get_customer_registered: (res) => dispatch(getCusmtomerRegistered(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
