

const { getObjectId } = require("/seeds/seedDB.js");

const names = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", 
"Anna", "Jack", "Peter", "Paul"];


module.exports = names.map(name => ({
    name: name,
    _id: getObjectId(name),
}))