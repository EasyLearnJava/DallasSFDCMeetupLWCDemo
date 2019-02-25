public with sharing class DemoApexController {
    public DemoApexController() {

    }

    @AuraEnabled(cacheable=true)
    public static string getMessageFromController(){
        return 'Hello LWC from Controller';
    }
}
