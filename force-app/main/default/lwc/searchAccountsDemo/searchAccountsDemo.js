import { LightningElement, track, wire } from 'lwc';
import findAccounts from '@salesforce/apex/DemoApexController.findAccounts';

export default class SearchAccountsDemo extends LightningElement {
    @track searchKey ;
    @track accountsFetched;

    @wire(findAccounts, { searchKey: '$searchKey' }) accountsFetched;

    //Make the below code efficient by adding setTimeOut and cleartimeout
    /* eslint-disable no-console */
    handleKeyChange(event) {
        this.searchKey = event.target.value;
        console.log('Search Key  = ' + this.searchKey);
    }  
   
 } 