import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
var math = require("mathjs");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { expression: "", result: 0, lastOperationsLength: [] };
    }

    calc() {
        let res;
        try {
            res = math.eval(this.state["expression"]);
        } catch (e) {
            res = "ERROR";
            // console.log("ERROR!");
            // let digitReg = /\d/;
            // let lastExpressionSymbol = this.state["expression"].slice(-1);
            // if (digitReg.test(lastExpressionSymbol)){
            //     console.log("JUST SKOBO4kA");
            //     res = math.eval(this.state["expression"] + ")");
            // }
            // else {
            //     let expressionWithoutLastOperation = this.state["expression"].substring(0, this.state["expression"].length - 1);
            //     console.log("last operation idet nahoooy --->. expression = ", expressionWithoutLastOperation);
            //     res = math.eval(expressionWithoutLastOperation);
            // }
        }
        this.setState({ result: res });
    }

    updateExpression(symbol, needCalc) {
        let newState = this.state;
        switch (symbol) {
            case "DEL":
                let symbolsLeftCount = newState["expression"].length - newState["lastOperationsLength"].splice(-1);
                newState["expression"] = newState["expression"].substring(0, symbolsLeftCount);
                break;
            case "=": {
                newState["expression"] = newState["result"];
                newState["result"] = "";
                break;
            }
            default: {
                newState["expression"] += symbol;
                newState["lastOperationsLength"].push(symbol.length);
                break;
            }
        }

        this.setState(newState, function() {
            if (needCalc) {
                this.calc();
            }
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App__expression">{this.state["expression"]}</div>
                <div className="App__result">{this.state["result"]}</div>
                <div className="App__controls">
                    <div className="App__digits">
                        <div onClick={() => this.updateExpression("7", true)}>7</div>
                        <div onClick={() => this.updateExpression("8", true)}>8</div>
                        <div onClick={() => this.updateExpression("9", true)}>9</div>
                        <div onClick={() => this.updateExpression("4", true)}>4</div>
                        <div onClick={() => this.updateExpression("5", true)}>5</div>
                        <div onClick={() => this.updateExpression("6", true)}>6</div>
                        <div onClick={() => this.updateExpression("1", true)}>1</div>
                        <div onClick={() => this.updateExpression("2", true)}>2</div>
                        <div onClick={() => this.updateExpression("3", true)}>3</div>
                        <div onClick={() => this.updateExpression(".", true)}>.</div>
                        <div onClick={() => this.updateExpression("0", true)}>0</div>
                    </div>
                    <div className="App__operations">
                        <div onClick={() => this.updateExpression("/", false)}>/</div>
                        <div onClick={() => this.updateExpression("DEL", true)}>DEL</div>
                        <div onClick={() => this.updateExpression("*", false)}>*</div>
                        <div />
                        <div onClick={() => this.updateExpression("-", false)}>-</div>
                        <div />
                        <div onClick={() => this.updateExpression("+", false)}>+</div>
                        <div onClick={() => this.updateExpression("=", false)}>=</div>
                    </div>

                    <div className="App__operations-extend">
                        <div onClick={() => this.updateExpression("sin(")}>sin</div>
                        <div onClick={() => this.updateExpression("cos(")}>cos</div>
                        <div onClick={() => this.updateExpression("tan(")}>tan</div>
                        <div onClick={() => this.updateExpression("log10(")}>log</div>
                        <div onClick={() => this.updateExpression("!", true)}>!</div>
                        <div onClick={() => this.updateExpression("pi", true)}>π</div>
                        <div onClick={() => this.updateExpression("e", true)}>e</div>
                        <div onClick={() => this.updateExpression("^", false)}>^</div>
                        <div onClick={() => this.updateExpression("(", false)}>(</div>
                        <div onClick={() => this.updateExpression(")", true)}>)</div>
                        <div onClick={() => this.updateExpression("sqrt(")}>√</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
