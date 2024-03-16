const AcadmemicActivity = require('../model/AcademicRecord/AcademicRecordSchema')
const StudentInformationModel = require('../model/StudentSchema/StudentSchemaModel')


const CreateAcadmicRecord = async (req, res) => {
    try {
        const {
            CNIC, English, Urdu, PakStudies, Islamiyat, Physics, Chemistry, Biology, Math,
        } = req.body

        const cnicCheck = await StudentInformationModel.findOne({ CNIC: CNIC })
        const cnicChecked = await AcadmemicActivity.findOne({ CNIC: CNIC })
        console.log(cnicCheck.CNIC, 'cnic Check')

        if (!CNIC || !English || !Urdu || !Islamiyat || !PakStudies || !Physics || !Chemistry || !Biology || !Math) return res.status(200).json({ message: "All fields required" })

        else if (!cnicCheck) return res.status(400).json({ status: '400', message: 'No Record Exist Against This CNIC.' })
        else if (cnicChecked) return res.status(400).json({ status: '400', message: 'Record Exist Against This CNIC.' })
        else if (cnicCheck || !cnicChecked) {
            userData = new AcadmemicActivity({
                CNIC: cnicCheck.CNIC, English, Urdu, PakStudies, Islamiyat, Physics, Chemistry, Biology, Math
            })
            userData.save()
            res.status(200).json({ status: '200', message: 'Data Inserted Succesfully' })
        }
        else return res.status(400).json({ status: '400', message: 'Invalid user' })

    } catch (error) {
        console.log(error.message, '- - - - - -> Error')
        return res.status(500).json({ message: 'Server not respond' })
    }
}

const deteteAcademicRecord = async (req, res) => {

    const cnic = req.params.CNIC
    try {
        const checkCNIC = await AcadmemicActivity.findOneAndDelete({ CNIC: cnic })
        if (checkCNIC)
            return res.status(200).json({ status: '200', messgae: 'Account Delete Successfully' })
        else
            return res.status(400).json({ status: '400', messgae: 'No User Found' })
    } catch (error) {
return res.status(500).json({status : '500',message : error.message})
    }
}

const getAcademicRecord = async (req, res) => {
    const cnic = req.params.CNIC

    try {
        const checkCNIC = await AcadmemicActivity.findOne({ CNIC: cnic })
        if (checkCNIC)
            return res.status(200).json({ status: '200', messgae: checkCNIC })
        else
            return res.status(400).json({ status: '400', messgae: 'No User Found' })
    } catch (error) {
        return res.status(500).json({status : '500',message : error.message})

    }
}

module.exports = { CreateAcadmicRecord, deteteAcademicRecord ,getAcademicRecord}