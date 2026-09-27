// const {getAge} = require('./plugins/get-age.plugin');
// const {getUUID} = require('./plugins/get-uuid.plugin');
// const {buildMakePerson} =  require('./js-foundation/05-factory')

// const makePerson = buildMakePerson({getUUID, getAge});

// const obj = {name : 'kiara', birthdate : '2006-12-07'}

// const kiara = makePerson(obj);

// console.log({kiara})

const { getPokemonById } = require('./js-foundation/06-promises');

console.log(getPokemonById(1))