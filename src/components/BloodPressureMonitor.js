import React, {Component} from 'react';

import bpLogo from '../images/bp.svg';
import '../css/BloodPressureMonitor.css';

class BloodPressureMonitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bpLoading: false
        };
    };

    componentDidMount() {
        this.Interval = setInterval(() => this.setState({ time: Date.now()}), 5000);
    };

    componentWillUnmount() {
        clearInterval(this.Interval);
    };

    // handleClick = async () => {
    //     this.setState({bpLoading: true})
    //     await getBloodPressure();
    // }

    heartRate = () => {
        if (this.state.bpLoading) {
            return(
                <div className='bpLoader'>
                    <div className='bloodPressure'>
                        <img src={bpLogo} alt='bloodPressureImage'/>
                        <div className='fade-in'/>
                        <div className='fade-out'/>
                    </div>
                    <p className='img-subtext'>Loading</p>
                </div>
            )
        }

        return(
            <div className="bloodPressure">
                <img src={bpLogo} className='bpLogo' alt='bp-logo'/>
            </div>
        )
    };


    render() {
        return(
            <div className="bpm">
                <h1 className='img-subtext'>
                    Blood Pressure Monitor
                </h1>
                {this.heartRate()}
                <div className='btn-grp'>
                    <button className='btn start-btn' onClick={this.handleClick}>Start</button>
                    <button className='btn stop-btn' onClick={this.stopClick}>Stop</button>
                    <button className='btn clear-btn'>Clear</button>
                </div>
            </div>
        );
    }
}

export default BloodPressureMonitor;