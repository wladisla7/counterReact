import React from 'react';
import CounterStep from '../CounterSettings/CounterStep'
import Counter from '../CounterSettings/CounterNumber'


class CounterSettings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            step: 3,
            mode: true,

        }
    }

    handleChange = (e) => {
        this.setState(() => ({
            step: Number(e.target.value),
        }))
    }


    toogleMode = () => {
        this.setState((prvState) => {
            return { mode: !prvState.mode }
        }
        )
    }

    render() {
        return (
            <div>
                <Counter stepCounter={this.state.step} toogle={this.toogleMode} modeChange={this.state.mode} />
                <CounterStep stepCounter={this.state.step} onChangeStep={this.handleChange} />
            </div>
        )

    }
}


export default CounterSettings