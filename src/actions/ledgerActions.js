import axios from 'axios';
import {rxLedgerURL, hackStatusURL} from './fetchUrls'

export async function getAllData(){
    
    console.log("updated table: " + rxLedgerURL);  

    return axios.get(rxLedgerURL)
        .then(function(response) {
            var data = response.data

            return data;
        })
        .catch(function(error) {
            console.log(error);
            return error;
        }
    );
}

export async function getStatus() {
    console.log("get status of bc: " + hackStatusURL)
    return axios
      .get(hackStatusURL)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return "Something went wrong.";
      });
  }