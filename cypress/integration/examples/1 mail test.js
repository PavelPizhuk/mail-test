describe('test the roundcube mail',function() {

        it('visit and login in on roundcube', function(){

            cy.visit('http://104.236.232.96/roundcube/')             //open web site
            cy.get('#rcmloginuser').type('qa-test@arixess.com')      //type login 
            cy.get('#rcmloginpwd').type('catch123')                  //type password
            cy.get('#rcmloginsubmit').click()                        //click login button
            cy.wait(1000)
            cy.get('#rcmbtn107').click()                             //click on create message
            cy.get('#_to').type('gameplaytactica@gmail.com')         //write who will recive 
            cy.get('#compose-subject').type("test")                  //write subject   
            cy.get('#cc-link').click()                               //add CC       
            cy.get('#_cc').type('pizhukpavlo@gmail.com')             //CC
            cy.get('#composebody').type('I wannna test this mail ')  //main text
            cy.get('#rcmbtn107').click()                             //send
            
            
        })

        it('test send', function(){

            cy.visit('http://104.236.232.96/roundcube/')             //open web site
            cy.get('#rcmloginuser').type('qa-test@arixess.com')      //type login 
            cy.get('#rcmloginpwd').type('catch123')                  //type password
            cy.get('#rcmloginsubmit').click()                        //click login button
            cy.wait(1000)
            cy.get('#rcmliU2VudA > a').click()
            cy.get('#rcmrowNA > .threads').click()
        })

        it('first msg', function(){
            cy.visit('http://104.236.232.96/roundcube/')             //open web site
            cy.get('#rcmloginuser').type('qa-test@arixess.com')      //type login 
            cy.get('#rcmloginpwd').type('catch123')                  //type password
            cy.get('#rcmloginsubmit').click()                        //click login button
            cy.wait(1000)
            cy.get('#msgicnrcmrowNTc').click().click()
            cy.wait(1000)
            cy.get('#rcmbtn106').click()
            
        })
    
         it('unread', function(){
        cy.visit('http://104.236.232.96/roundcube/')             //open web site
        cy.get('#rcmloginuser').type('qa-test@arixess.com')      //type login 
        cy.get('#rcmloginpwd').type('catch123')                  //type password
        cy.get('#rcmloginsubmit').click()                        //click login button
        cy.wait(1000)
        cy.get('#rcmrowMQ > .threads').click()      //unread
        cy.get('#markmessagemenulink').click()
        cy.get('#rcmbtn124 > .icon').click()
        cy.wait(1000)
        cy.get('#rcmrowMQ > .threads').click()      //read
        cy.get('#markmessagemenulink').click()
        cy.get('#rcmbtn123 > .icon').click()
    })

    it('contacts', function(){

        cy.visit('http://104.236.232.96/roundcube/')             //open web site
        cy.get('#rcmloginuser').type('qa-test@arixess.com')      //type login 
        cy.get('#rcmloginpwd').type('catch123')                  //type password
        cy.get('#rcmloginsubmit').click()                        //click login button
        cy.wait(500)
        cy.get('#rcmbtn103 > .button-inner').click()
        cy.wait(500)
        cy.get('#rcmbtn113 > .inner').click()
        cy.get('#ui-id-1 > label > input').type('test group')
        cy.get('.mainaction > .ui-button-text').click()
        cy.wait(500)
        cy.get('#rcmbtn122 > .inner').click()
        
        
    })

    
})