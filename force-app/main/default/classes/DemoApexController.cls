public with sharing class DemoApexController {
    public DemoApexController() {

    }

    @AuraEnabled(cacheable=true)
    public static string getMessageFromController(){
        return 'Hello LWC from Controller';
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey) {
        if (String.isBlank(searchKey)) {
            return new List<Account>();
        }
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Phone FROM Account WHERE Name LIKE :key LIMIT 10];
    }
}
