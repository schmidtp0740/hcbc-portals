import React, { Component } from 'react';
import { Avatar } from 'antd';
import Provider from "./Misc/Providers";


const doctor = {
    type: 'doctor',
    cover: <img alt='example' src='https://i.pinimg.com/originals/17/9c/8d/179c8db70dda14e89103738b06b9d683.jpg' />,
    avatar: <Avatar shape='square' size='large' src='https://myblue.bluecrossma.com/sites/g/files/csphws1086/files/inline-images/Doctor%20Image%20Desktop.png' />,
    title: 'Dr. Steven Rider',
    description: 'Board Certified Oncologist'
};


export default class Doctor extends Component {
    render() {
        return (
            <Provider provider={doctor}/>
        );
    }
}