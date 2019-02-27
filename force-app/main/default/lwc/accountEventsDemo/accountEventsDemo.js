import { LightningElement, track, wire } from 'lwc';
import findAccounts from '@salesforce/apex/DemoApexController.findAccounts';

export default class AccoutnEventsDemo extends LightningElement {
    @track searchKey ;
    @track accountsFetched;
    @track selectedAccId;
    @track accountDetails;

    @wire(findAccounts, { searchKey: '$searchKey' }) accountsFetched;

    //Make the below code efficient by adding setTimeOut and cleartimeout
    /* eslint-disable no-console */
    handleKeyChange(event) {
        this.searchKey = event.target.value;
        console.log('Search Key  = ' + this.searchKey);
    }

    handleSelectedAcc(event){
        const recordId = event.detail;
        this.selectedAccId = recordId;
        console.log('Received Id : ' + this.selectedAccId);
        this.accountDetails = this.accountsFetched.data.find(account => account.Id === this.selectedAccId);
    }   
 } 