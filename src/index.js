import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import { Provider } from "react-redux";
/*import thunk from "redux-thunk";

//import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Components/Reducers/rootReducer";
import blue from "@material-ui/core/colors/blue";*/

import { yellow, blueGrey } from "@material-ui/core/colors";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(
//  rootReducer,
//  composeEnhancers(applyMiddleware(thunk))
//);

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: blueGrey,
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
