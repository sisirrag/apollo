const {Model} = require('objection');

class DeptDetails extends Model{
    static get tableName(){
        return 'dept_details'
    }
}

module.exports = DeptDetails;