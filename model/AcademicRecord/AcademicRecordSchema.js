
// const mongoose = require('mongoose')


// const AcademicInformationofStudent = new mongoose.Schema({
//     CNIC: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentInformations' },
//     English: { type: String, required: true },
//     Urdu: { type: String, required: true },
//     PakStudies: { type: String, required: true },
//     Islamiyat: { type: String, required: true },
//     Physics: { type: String, required: true },
//     Chemistry: { type: String, required: true },
//     Biology: { type: String, required: true },
//     Math: { type: String, required: true },
// })

// const AcadmemicActivity = mongoose.model('AcademicInformationofStudent',AcademicInformationofStudent)
// module.exports = AcadmemicActivity

const mongoose = require('mongoose')

const AcademicInformationofStudent = new mongoose.Schema({
    CNIC: { type: String, ref: 'StudentInformations' },
    English: { type: String, required: true },
    Urdu: { type: String, required: true },
    PakStudies: { type: String, required: true },
    Islamiyat: { type: String, required: true },
    Physics: { type: String, required: true },
    Chemistry: { type: String, required: true },
    Biology: { type: String, required: true },
    Math: { type: String, required: true },
}, {
    timestamps: true
})

const AcadmemicActivity = mongoose.model('AcademicInformationofStudent', AcademicInformationofStudent)
module.exports = AcadmemicActivity