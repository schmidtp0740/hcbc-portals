import {Button} from 'antd';
import React, {Component} from 'react';
import {RxForm} from './Form';
import {connect} from 'react-redux';
import * as rxActions from "../actions/rxActions";
import moment from "moment";

class NewRx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provider: ''
        }
    }
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({visible: true});
    };

    handleCancel = () => {
        this.setState({visible: false});
    };


    handleSubmit = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            form.getFieldsValue();

            const patient = this.props.onePatient.data;
            const rxID = this.props.rxHistory.rx.rxList ? `rx${this.props.rxHistory.rx.rxList.length + 1}` : `rx${1}`;

            const newRx = {
                "patientID": patient.patientID,
                "rxid": rxID,
                "timestamp": moment().valueOf(),
                "doctor": this.props.provider.title,
                "docLicense": "doc01",
                "prescription": values.prescription,
                "refills": parseInt(values.refills),
                "quantity": parseInt(values.quantity),
                "status": "prescribed",
                "expDate": moment(values.expDate).valueOf()
            };
            console.log(newRx.prescription + " new Rx");
            this.props.submitRx(newRx);
            this.props.fetchRxHistory(this.props.onePatient.data.patientID);

            form.resetFields();
            this.setState({visible: false});
        });
    };

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    };

    renderButton = () => {
        if (this.props.onePatient.data) {
            return (
                <div>
                    <Button type="primary" onClick={this.showModal}>New Rx</Button>
                    <RxForm
                        wrappedComponentRef={this.saveFormRef}
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        onSubmit={this.handleSubmit}
                    />
                </div>
            )
        }
        return (
            <Button type="primary" disabled={true} onClick={this.showModal}>New Rx</Button>
        )
    };

    render() {
        return (
            this.renderButton()
        );
    }
}


const mapStateToProps = ({submitRx, onePatient, rxHistory}) => {
    return {submitRx, onePatient, rxHistory}
};

export default connect(mapStateToProps, rxActions)(NewRx);