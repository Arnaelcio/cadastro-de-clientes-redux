import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Customers from "./components/Customers";
import RegisterCustomers from "./components/RegisterCustomers";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/customers" component={Customers} />
              <Route path="/register-customers" component={RegisterCustomers} />
            </Switch>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
