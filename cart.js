///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const sum = cart.reduce((a, c) => a + c.price, 0); 
console.log(sum); 
// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => cartTotal * (1 + tax) - couponValue; 
console.log(calcFinalPrice(20, 5, .06)); 


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
My cust object will have properties of age, location, shopHistory, allergies. I chose these properties because people of different ages tend to buy
different products (for a restaurants a small child might eat off the kids menu). If the restaurant is a chain it would want to show the customer
the closest location to them. The restaurant may want to store the customer's shop history so that they can recommend other items they might like. 
The restaurant would also want to know of any allergies or dietary restrictions of a customer for obvious reasons. Age will be a number because 
ages are numbers. Location will be a string because it will be a single place that is not a number. shopHistory and allergies will be array because
they may store multiple strings. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let bobTheCustomer = {
    age: 35, 
    location: 'Minneapolis', 
    shopHistory: ['pepperoni pizza', 'spaghetti and meatballs'], 
    allergies: ['peanuts', 'walnuts']
}
console.log(bobTheCustomer); 