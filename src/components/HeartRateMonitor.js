import React, {Component} from 'react';
import axios from "axios";

import heartbeat from '../images/heartbeat.svg';
import logo from '../images/heart.svg';
import '../css/HeartRateMonitor.css';
const apiUrl = 'http://localhost:8080/t/hrm/hrm';


class HeartRateMonitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heartRateLoading: false,
            stopPressed: false,
            hrCount: 0,
            hR: null
        };
    };

    getHeartRate = async () => {
        await axios.get(apiUrl)
            .then(res => {
                const hR = res.data.heartrate;
                this.setState({hR})

            })
            .catch(error => {
                return error;
            })
    };

    handleClick = () => {
        this.setState({heartRateLoading: true});
        if (!this.state.stopPressed) {
            this.interval = setInterval(this.getHeartRate, 2000);
        }
    };

    handleStopClick = () => {
        this.setState({stopPressed: true});
        this.setState({heartRateLoading: false});
        clearInterval(this.interval);
    };

    handleClearClick = () => {
        this.setState({hR: null})
    };

    heartRateLoading = () => {
        if (this.state.heartRateLoading) {
            if (this.state.hR == null) {
                return(
                    <div className='hrLoader'>
                        <div className="heart-beat">
                            <img src={heartbeat} alt='heart-beat'/>
                            <div className='fade-in'/>
                            <div className='fade-out'/>
                        </div>
                    </div>
                )
            }
        }

        return(
            <div className="heart-beat">
                <img src={logo} className='logo' alt='ecg-logo'/>
                <h3 className='img-subtext'>{this.state.hR}</h3>
            </div>
        )
    };




    render() {
        return(
            <div className="hrm">
                <h1 className='img-subtext'>
                    Heart Rate Monitor
                </h1>
                {this.heartRateLoading()}
                <div className='btn-grp'>
                    <button className='btn start-btn' onClick={this.handleClick}>Start</button>
                    <button className='btn stop-btn' onClick={this.handleStopClick}>Stop</button>
                    <button className='btn clear-btn' onClick={this.handleClearClick}>Clear</button>
                </div>
            </div>
        );
    }
}

export default HeartRateMonitor;