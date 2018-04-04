import React from "react"
const css = require("./RoundButton.scss")

export const RoundButton = props => (
    <div className={"RoundButton__wrapper"}>
      <button
        className ={"RoundButton__button"}
        onClick={props.callback}
        style={props.active ? {background: '#f4f4f4'} : null}
      >
        {props.text}
      </button>
    </div>
)

export default RoundButton