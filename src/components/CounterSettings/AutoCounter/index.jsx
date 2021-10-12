import React from "react"
import "./autoClick.css"

class AutoClick extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            interval: 1,
            timeoutCount: 0,

        }
    }

    increaseAuto = () => {
        this.intervalID = setInterval(
            () => {
                this.props.action()
                this.setState({
                    timeoutCount: this.state.timeoutCount + 1
                })
            }, this.state.interval * 1000)
    }

    stopAuto = () => {
        clearInterval(this.intervalID);
    }

    reload = () => {
        window.location.reload();
    }


    componentDidMount() {
        this.increaseAuto();
        this.timeoutID = setTimeout(
            () => { this.stopAuto(); alert('Timer Stop') }, 20000);
    }

    componentWillUnmount() {
        this.stopAuto()
        clearTimeout(this.timeoutID);
    }


    render() {

        let timer = "timer-start"
        if (this.state.timeoutCount > 10) {
            timer = "timer-end"
        }

        return (

            <div className="autoClick" >
                <button className="btnAuto" onClick={this.increaseAuto}>Auto+Start</button>
                <div className={timer}>
                    <button className="buttonClear"
                        onClick={this.stopAuto}
                    >Stop</button>
                    <button className="buttonClear"
                        onClick={this.reload}
                    >Reload</button>
                    <div>Timer ({this.state.timeoutCount})</div>
                </div>
            </div>
        )
    }
}









export default AutoClick
