import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Exercise from "./components/Exercise/index"
import store from "./store"

require("./index.scss")

const App = () =>
  <div className="Main">
    <Exercise/>
  </div>

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root")
)
