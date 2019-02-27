import { LightningElement, api } from 'lwc';

export default class AccountsTile extends LightningElement {
    @api account;

    /* eslint-disable no-console */
    handleSelect(event){
        event.preventDefault();
        console.log('Clicked Id : ' + this.account.Id);
        const selectEvent = new CustomEvent(
            'selectedaccount',
            {
                detail : this.account.Id
            });
        this.dispatchEvent(selectEvent);
    }
}