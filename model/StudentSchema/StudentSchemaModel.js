// const mongoose = require('mongoose')
const mongoose = require('mongoose')

const StudentInformation = new mongoose.Schema({
    studentId: { type: String, required: true },
    CNIC: {type: String, ref: 'AcademicInformationofStudent' },
    phoneNo: { type: String, required: true },
    address: { type: String, required: true },
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    bloodGroup: { type: String, required: true }
},{
    timestamps : true
})

const StudentInformationModel = mongoose.model('StudentInformations',StudentInformation)
module.exports = StudentInformationModel

