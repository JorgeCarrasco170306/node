

const getAgePlugin = require('get-age');

const getAge = (birthdate) =>  birthdate ?  getAgePlugin(birthdate) : new Error('birthdate is required');  


module.exports = {
    getAge
}