describe("testAPI",()=>{
    let userInfos = require('../fixtures/APIdata.json');
   

    
it("check health",()=>{
    cy.request('GET','https://practice.expandtesting.com/notes/api/health-check').then(
        (response) => {
            expect(response.status).eq(200);
            cy.log(JSON.stringify(response.body));
        }

    );
});    

it("Login",()=>{
    cy.login(userInfos.email,userInfos.password)
    .then((response=>{
        expect(response.body.status).eq(200);
        expect(response.body.message).eq("Login successful");
        
    }));
});

it("note1",()=>{
    cy.request({
        method:'POST',
        url:'https://practice.expandtesting.com/notes/api/notes',
        headers:{
            'x-auth-token':userInfos.token
        },
        body:{
            "title":userInfos.title1,
            "description":userInfos.description1,
            "category":userInfos.category1
        }
    })
    .its('status').should('equal',200)
})

it("note2",()=>{
    cy.request({
        method:'POST',
        url:'https://practice.expandtesting.com/notes/api/notes',
        headers:{
            'x-auth-token':userInfos.token
        },
        body:{
            "title":userInfos.title2,
            "description":userInfos.description2,
            "category":userInfos.category2
        }
    })
    .its('status').should('equal',200)
})

it("note3",()=>{
    cy.request({
        method:'POST',
        url:'https://practice.expandtesting.com/notes/api/notes',
        headers:{
            'x-auth-token':userInfos.token
        },
        body:{
            "title":userInfos.title3,
            "description":userInfos.description3,
            "category":userInfos.category3
        }
    })
    .its('status').should('equal',200);
})
//recupretaion des notes

it("Get all notes",()=>{
        cy.request({
            method:'GET',
            url:'https://practice.expandtesting.com/notes/api/notes',
            headers:{
                'x-auth-token':userInfos.token
            }
        })
        .its('status').should('equal',200);
    })


    it("Update",()=>{
      
        cy.request({
            method:'PUT',
            url:'https://practice.expandtesting.com/notes/api/notes/665c75fb93b1610141f989c1',
            headers:{
                "x-auth-token":userInfos.token
            },
            body:{
                "id":userInfos.id1,
                "title":"activity",
                "description":"i've changed my mind",
                "completed":true,
                "category":"Personal"
            }
        })
        .its('status').should('equal',200);
    })
})

