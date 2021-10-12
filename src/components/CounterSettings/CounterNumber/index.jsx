import React from 'react'
import "./counter.css"
import AutoClick from '../../CounterSettings/AutoCounter'


class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counterNumber: 0,

        }
    }


    increaseMode = () => {
        this.setState((prevState) => ({
            counterNumber: prevState.counterNumber + this.props.stepCounter,

        }));
    }



    decreaseMode = () => {
        this.setState((prevState) => ({
            counterNumber: prevState.counterNumber - this.props.stepCounter,
        }));
    }



    render() {

        let CounterMode = this.increaseMode
        if (this.props.modeChange === false) {
            CounterMode = this.decreaseMode
        }


        return (
            <div>
                <div className="Mode">CounterMode</div>

                <button className="icremode" onClick={() => this.props.toogle(true)}>increase</button>
                <button className="decrmode" onClick={() => this.props.toogle(false)}>decrease</button>

                <div>
                    <div className="displayCounter">
                        Count {this.state.counterNumber}
                        <div className="counterStyle">
                            <button className="buttonIncrease"
                                onClick={CounterMode}
                            >Click</button>
                            <div className="autoClick">
                                <AutoClick action={CounterMode} />
                            </div>
                            <div className="DisplayStyle">
                                <div className="icreaseStep">
                                    FixedStep = {this.props.stepCounter}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Counter




//Отдельно дисплэй отдлельно найстройки 


