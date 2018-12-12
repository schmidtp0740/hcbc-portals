import React, { Component } from 'react';
import { Avatar } from 'antd';
import Provider from "./Misc/Providers";

const insurance = {
    type: 'insurance',
    cover: <img alt='example' src='https://i.pinimg.com/originals/17/9c/8d/179c8db70dda14e89103738b06b9d683.jpg' />,
    avatar: <Avatar shape='square' size='large' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Flo_from_Progressive_Insurance.jpg/200px-Flo_from_Progressive_Insurance.jpg' />,
    title: 'Janice Dalton',
    description: 'Insurance Agent'
};

export default class Insurance extends Component {
    render() {
        return (
            <Provider provider={insurance}/>
        );
    }
}

