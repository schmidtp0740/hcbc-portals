import {DatePicker, Form, Input, Modal} from "antd";
import React, {Component} from "react";
import InputNumber from "antd/es/input-number";

const FormItem = Form.Item;
export const RxForm = Form.create()(
    class extends Component {
        render() {
            const {visible, onCancel, onSubmit, form} = this.props;
            const {getFieldDecorator} = form;
            return (
                <Modal
                    visible={visible}
                    title="Submit a new Rx"
                    okText={'Submit'}
                    onCancel={onCancel}
                    onOk={onSubmit}
                >
                    <Form layout="inline">
                        <FormItem label="Medication">
                            {getFieldDecorator('prescription',
                                {
                                    rules: [{
                                        required: true,
                                        message: 'Please input the title of collection!'
                                    }]
                                })(<Input/>)}
                        </FormItem>

                        <FormItem label="Refills">
                            {getFieldDecorator('refills',
                                {
                                    rules: [{
                                        required: true,
                                        message: 'Max of 10 refills.'
                                    }]
                                })(<InputNumber min={0} max={10}/>)}
                        </FormItem>

                        <FormItem label="Quantity">
                            {getFieldDecorator('quantity',
                                {
                                    rules: [{
                                        required: true,
                                        message: 'Quantity cannot exceed 160.'
                                    }]
                                })(<InputNumber min={0} max={160}/>)}
                        </FormItem>

                        <FormItem label="Exp Date">
                            {getFieldDecorator('expDate',
                                {
                                    rules: [{
                                        required: true,
                                        message: 'Expiration date must be a minimum of 1 month.'
                                    }]
                                })(<DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    placeholder="Select Exp Date"
                                />)}
                        </FormItem>
                    </Form>
                </Modal>
            )
        }
    }
);


