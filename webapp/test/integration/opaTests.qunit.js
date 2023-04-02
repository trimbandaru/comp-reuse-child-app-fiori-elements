sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/test/childappfelist/test/integration/FirstJourney',
		'com/test/childappfelist/test/integration/pages/CustomersList',
		'com/test/childappfelist/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/test/childappfelist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);