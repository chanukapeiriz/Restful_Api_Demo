const {test, expect} = require('playwright/test');

var userId;

//crate object payload 
const newObject = {  
        "name": "Apple MacBook Pro 16",
        "data": {
           "year": 2019,
           "price": 1849.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"
        }   
};

//update object payload
const updateObject = {
    "name": "Apple MacBook Pro 16",
    "data": {
       "year": 2019,
       "price": 2049.99,
       "CPU model": "Intel Core i9",
       "Hard disk size": "1 TB",
       "color": "silver"
    }
 };

//This test is to retrieve all the objects from the server 
test('Get all objects', async ({request}) => {
    const response = await request.get('https://api.restful-api.dev/objects')
    console.log(await response.json())
    expect(response.status()).toBe(200)
});

//This test is to add a new object to the list of other objects 
test('Add an object', async ({request}) => {
    const response = await request.post('https://api.restful-api.dev/objects',
        {
            data: newObject
         }
    );
    console.log(await response.json())
    expect(response.status()).toBe(200)

    var JsonResponse = await response.json()
    userId = JsonResponse.id
    console.log(userId)
});

//This test is to retrieve the created object by the previous test 
test('Get aded object', async ({request}) => {
    const response = await request.get('https://api.restful-api.dev/objects/'+userId);
    console.log(await response.json())
    expect(response.status()).toBe(200)
});

//This test is to update the previously created object 
test('Update the object', async ({request}) => {
    const response = await request.put('https://api.restful-api.dev/objects/'+userId,
        {
            data: updateObject
         }
    );
    console.log(await response.json())
    expect(response.status()).toBe(200)
});

//This test is to delete the previously created object from the server
test('Delete the object', async ({request}) => {
    const response = await request.delete('https://api.restful-api.dev/objects/'+userId)
    expect (response.status()).toBe(200)
});


