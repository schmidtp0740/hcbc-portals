import React, { Component } from 'react';
import { Avatar } from 'antd';
import Provider from "./Misc/Providers";

const pharmacist = {
    type: 'pharmacist',
    cover: <img alt='example' src='https://i.pinimg.com/originals/17/9c/8d/179c8db70dda14e89103738b06b9d683.jpg' />,
    avatar: <Avatar shape='square' size='large' src='https://thedrugofthenation.files.wordpress.com/2013/10/walterwhite1.jpg' />,
    title: 'Walter Wilcox PharmD',
    description: 'Board Certified Pharmacist'
};

export default class Pharmacist extends Component {
    render() {
        return (
            <Provider provider={pharmacist}/>
        );
    }
}