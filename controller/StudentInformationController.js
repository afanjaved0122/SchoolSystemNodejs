

const StudentInformationModel = require('../model/StudentSchema/StudentSchemaModel')
const AcadmemicActivity = require('../model/AcademicRecord/AcademicRecordSchema')

const CreateUser = async (req, res) => {
    try {
        const { studentId,
            CNIC,
            phoneNo,
            address,
            name,
            fatherName,
            bloodGroup } = req.body

        const cnicCheck = await StudentInformationModel.findOne({ CNIC })
        const phoneNoCheck = await StudentInformationModel.findOne({ phoneNo })
        const studentIdCheck = await StudentInformationModel.findOne({ studentId })

        if (studentIdCheck) return res.status(400).json({ message: "Student Id already exists" })
        else if (cnicCheck) return res.status(400).json({ message: "CNIC already exists" }) 
        else if (phoneNoCheck) return res.status(400).json({ message: 'Phone No. already exists' })
        else if (!studentId || !CNIC || !phoneNo || !address || !name || !fatherName || !bloodGroup) return res.status(400).json({ message: 'Fields not null' })
        else userData = new StudentInformationModel({
            studentId,
            CNIC,
            phoneNo,
            address,
            name,
            fatherName,
            bloodGroup
        })
        await userData.save()
        res.status(200).json({ status: '200', message: "SignUp Successfully" })
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ status: '500', message: "server error" })
    }
}

const DeleteStudent = async (req, res) => {
    const user = req.params.CNIC
    console.log(user)
    try {
        const deleteUserData = await StudentInformationModel.findOneAndDelete({ CNIC: user });
        await AcadmemicActivity.findOneAndDelete({CNIC : user})

        if (deleteUserData)
            return res.status(200).json({ status: '200', message: 'Delete successful' });
        else
            return res.status(400).json({status: '400', message: 'No user found with the provided CNIC' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const FindStudent = async (req, res) => {
    const studentCnic = req.params.CNIC

    try {
        const findStudentData = await StudentInformationModel.findOne({ CNIC: studentCnic })
        if (findStudentData)
            return res.status(200).json({ status: '200', data: findStudentData })
        else
            return res.status(400).json({ message: 'No user Found' })
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

const UpdateStudentData = async (req, res) => {
    const studentCnic = req.params.CNIC
    try {
        const updateStudentUser = await StudentInformationModel.findOneAndUpdate({ CNIC: studentCnic },req.body)
        if (updateStudentUser){
        await updateStudentUser.save()
        return res.status(200).json({ status: '200', data: updateStudentUser })
        }
    else
        return res.status(400).json({ message: 'No user Found' })
    } catch (error) {

    }
}

module.exports = { CreateUser, DeleteStudent, FindStudent, UpdateStudentData }