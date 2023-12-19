const db = require('../../config/database')

const Transaction = {
    formResponses : async (post)=>{
        try{
            let firstName = post.firstName;
            let middleName = post.middleName;
            let lastName = post.lastName;
            let course = post.course;
            let gender = post.gender;
            let countryCode = post.countryCode;
            let phoneNumber = post.phoneNumber;
            let address = post.address;
            let email = post.email;
            let password = post.password;
    
            let sql = `INSERT INTO formresponses VALUES("${firstName}", "${middleName}", "${lastName}", "${course}", "${gender}", "${countryCode}",
                       "${phoneNumber}", "${address}", "${email}", "${password}" )`;
            let result = await db.query(sql);
            return result[0]
        }catch(err){
            console.log(err)
        }
    }
}
module.exports = Transaction;