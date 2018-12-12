import React, { Component } from 'react';
import { connect } from "react-redux";
import * as insuranceAction from '../actions/insuranceActions';
import * as fetchRxHistory from "../actions/rxActions";
import '../css/PatientInfo.css';
import InsuranceFile from "./insuranceFile";

 class PatientInfo extends Component {

     componentDidUpdate(prevProps) {
         if (this.props.onePatient.data !== prevProps.onePatient.data) {
             let patient = this.props.onePatient.data;
             this.props.fetchInsurance(patient.patientID);
             this.props.fetchRxHistory(patient.patientID);
         }

     }

     renderPatient = () => {
         if (this.props.onePatient.data) {
             let patient = this.props.onePatient.data;
             return (
                 <div className='patient-info'>
                    <div className="patient-name">{patient.firstName} {patient.lastName}</div>
                    <div className="patient-dob">Date of birth: {patient.dob}</div>
                    <div className="patient-address">Address: {patient.address}</div>
                    <div className="patient-phone">Phone: {patient.phone}</div>
                     <InsuranceFile insurance={patient.patientID}/>
                 </div>

             )
         }
         return (
             <div className='patient-info'>No Patient Selected</div>
         )
     };


   render() {
       return (
           this.renderPatient()
       );
   };
 }

const mapStateToProps = ({ onePatient }) => {
    return { onePatient };
};


export default connect(mapStateToProps, {...fetchRxHistory, ...insuranceAction})(PatientInfo);