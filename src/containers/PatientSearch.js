import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../actions/fetchPatientActions';

const Option = Select.Option;

class PatientSearch extends Component {
    componentDidMount() {
        this.props.fetchPatients();
    }

    handleChange = (value) => {
        this.props.fetchOnePatient(value);
    }; 


    render() {
        if (this.props.allPatients.data.people) {
            return (
                <div>
                    <Select defaultValue="Select users" onChange={this.handleChange} style={{width: '200px'}}>
                        {this.props.allPatients.data.people.map(d => <Option value={d.patientID} key={d.patientID}>{d.firstName}</Option>)}
                    </Select>
                </div>
            )
        }
        return (
            <div>Select a patient</div>
        )
    }
}

const mapStateToProps = ({allPatients, onePatient}) => {
    return {allPatients, onePatient};
};


export default connect(mapStateToProps, actions)(PatientSearch);