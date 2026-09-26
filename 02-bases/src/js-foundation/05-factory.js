
const obj = {
    name : 'Jorge', 
    age: '2006-03-17'
}

const buildPerson = ({name, birthdate}) => {

    return  {
        id: new Date().getTime(),
        name, 
        birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    }
}