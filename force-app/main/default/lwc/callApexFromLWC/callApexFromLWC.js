import { LightningElement, wire } from 'lwc';
import helloMessage from '@salesforce/apex/DemoApexController.getMessageFromController'

export default class CallApexFromLWC extends LightningElement {

    @wire(helloMessage) tempValue;
}