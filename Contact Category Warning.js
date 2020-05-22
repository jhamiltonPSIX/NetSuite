/**
@NApiVersion 2.0
@NScriptType ClientScript
@NModuleScope Public
*/
define([], function () {
    function showMessage(context) {
        var CAmessage = "This contact is not set up as a role for a company";
        var contactRole = context.currentRecord.getValue({
            "fieldId": "contactrole"
        });

        if (!contactRole){
            alert(CAmessage);
        }
    }

    return {
        pageInit: showMessage
    };
});

