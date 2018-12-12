import React, {Component} from 'react';
import moment from 'moment';
import {Table} from 'antd';
import {connect} from "react-redux";
import * as rxActions from '../actions/rxActions';

const columns = [
    {
        title: 'Prescriber', dataIndex: 'doctor', rowKey: 'doctor'
    },
    {
        title: 'Submitted', dataIndex: 'timestamp', rowKey: 'timestamp'
    },
    {
        title: 'Prescription', dataIndex: 'prescription', rowKey: 'prescription'
    },
    {
        title: 'Refills', dataIndex: 'refills', rowKey: 'refills'
    },
    {
        title: 'Qty', dataIndex: 'quantity', rowKey: 'quantity'
    },
    {
        title: 'Exp', dataIndex: 'expDate', rowKey: 'exp'
    },
    {
        title: 'Status', dataIndex: 'status', rowKey: 'status'
    }
];

class RxHistory extends Component {
    handleFill(data) {
        this.props.fillRx(
            {
                "patientID": this.props.onePatient.data.patientID,
                "rxid": data.rxid,
                "timestamp": moment(data.timestamp).valueOf(),
                "pharmacist": "pha",
                "phLicense": "pha01",
                "prescription": data.prescription,
                "refills": data.refills,
                "status": 'filled',
                "expDate": moment(data.expDate).valueOf()
            }
        );
    };

    handleApprove(data) {
        this.props.approveRx(
            {
                "patientID": this.props.onePatient.data.patientID,
                "rxid": data.rxid,
                "timestamp": moment(data.timestamp).valueOf(),
                "approved": "true"
            }
        );
    };

    checkStatus(data) {
        if (this.props.provider.type === 'pharmacist') {
            if (data.status !== 'filled') {
                return (
                    data.status = <button
                        type='button'
                        onClick={() => {
                            this.handleFill(data)
                        }}>
                        Fill Rx
                    </button>
                )
            }
            return (data.status = 'filled')
        }
        if (this.props.provider.type === 'insurance') {
            if (data.status === 'filled') {
                if (data.approved === 'false') {
                    return (
                        data.status = <button
                            type='button'
                            onClick={() => {this.handleApprove(data)}}>
                            Approve Rx
                        </button>
                    )
                }
            }
        }
        return data.status
    };

    renderTable() {
        switch (this.props.rxHistory) {

        }
        if (this.props.rxHistory.isFetching) {
            return (
                <div className='ant-table-placeholder'>Loading...</div>
            )
        }
        if (this.props.rxHistory.rx.rxList) {
            const rxHistory = this.props.rxHistory.rx.rxList
                .map(data => {
                    data.timestamp = moment(data.timestamp).format('MM/DD/YYYY');
                    data.expDate = moment(data.expDate).format('MM/DD/YYYY');
                    data.status = this.checkStatus(data);
                    return data
                });
            if (this.props.provider.type !== 'doctor') {
                const reducedHistory = rxHistory.reduce((acc, data) => {
                    if (data.status !== 'filled' && data.approved !== 'true') {
                        acc.push(data);
                    }
                    console.log(acc);
                    return acc;
                }, []);

                return (
                    <Table columns={columns} dataSource={reducedHistory} rowKey={reducedHistory => reducedHistory.rxid}/>
                );
            }

            return (
                <Table columns={columns} dataSource={rxHistory} rowKey={rxHistory => rxHistory.rxid}/>
            );
        }

        return(
            <Table columns={columns} rowKey={null} />
        )
    }


    render() {
        return (
            this.renderTable()
        )
    }

}

const mapStateToProps = ({ onePatient, rxHistory, submitRx, fillRx, approveRx }) => {
    return {onePatient, rxHistory, submitRx, fillRx, approveRx}
};

export default connect(mapStateToProps, rxActions)(RxHistory);
