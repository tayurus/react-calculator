import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
var math = require("mathjs");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { expression: "", result: 0, lastOperationLength: 0 };
    }

    calc() {
        let res;
        try {
            res = math.eval(this.state["expression"]);
            console.log("RES =" + res);
        } catch (e) {
            res = math.eval(this.state["expression"] + ")");
        }
        this.setState({ result: res });
    }

    componentDidUpdate(){
        console.log(this.state['expression']);
    }

    updateExpression(symbol) {
        let newExpression = this.state["expression"];
        switch (symbol) {
            case "DEL":
                let symbolsLeftCount = newExpression.length - this.state["lastOperationLength"];
                newExpression = newExpression.substring(0, symbolsLeftCount);
                break;
            case "=": {
                newExpression = this.state["result"];
                this.setState({result:""})
            }
            default:{
                newExpression = newExpression + symbol;
            }
        }
        this.setState({ expression: newExpression, lastOperationLength:symbol.length  } );

    }

    render() {
        return (
            <div className="App">
                <div className="App__expression">{this.state["expression"]}</div>
                <div className="App__result">{this.state["result"]}</div>
                <div className="App__controls">
                    <div className="App__digits">
                        <div onClick={()=>this.updateExpression("7")}>7</div>
                        <div onClick={()=>this.updateExpression("8")}>8</div>
                        <div onClick={()=>this.updateExpression("9")}>9</div>
                        <div onClick={()=>this.updateExpression("4")}>4</div>
                        <div onClick={()=>this.updateExpression("5")}>5</div>
                        <div onClick={()=>this.updateExpression("6")}>6</div>
                        <div onClick={()=>this.updateExpression("1")}>1</div>
                        <div onClick={()=>this.updateExpression("2")}>2</div>
                        <div onClick={()=>this.updateExpression("3")}>3</div>
                        <div onClick={()=>this.updateExpression(".")}>.</div>
                        <div onClick={()=>this.updateExpression("0")}>0</div>
                    </div>
                    <div className="App__operations">
                        <div onClick={()=>this.updateExpression("/")}>/</div>
                        <div onClick={()=>this.updateExpression("DEL")}>DEL</div>
                        <div onClick={()=>this.updateExpression("*")}>*</div>
                        <div></div>
                        <div onClick={()=>this.updateExpression("-")}>-</div>
                        <div></div>
                        <div onClick={()=>this.updateExpression("+")}>+</div>
                        <div onClick={()=>this.updateExpression("=")}>=</div>
                    </div>

                    {/*<div className="App__operations-extend">
                        <div onClick={()=>this.updateExpression("sin(")}>sin</div>
                        <div onClick={()=>this.updateExpression("cos(")}>cos</div>
                        <div onClick={()=>this.updateExpression("tan(")}>tan</div>
                        <div onClick={()=>this.updateExpression("ln(")}>ln</div>
                        <div onClick={()=>this.updateExpression("log(")}>log</div>
                        <div onClick={()=>this.updateExpression("!")}>!</div>
                        <div onClick={()=>this.updateExpression("π")}>π</div>
                        <div onClick={()=>this.updateExpression("e")}>e</div>
                        <div onClick={()=>this.updateExpression("^")}>^</div>
                        <div onClick={()=>this.updateExpression("(")}>(</div>
                        <div onClick={()=>this.updateExpression(")")}>)</div>
                        <div onClick={()=>this.updateExpression("sqrt(")}>√</div>
                    </div>
                */}
                </div>
            </div>
        );
    }
}

export default App;
