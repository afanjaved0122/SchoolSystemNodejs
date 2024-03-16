const express = require('express')

const { CreateUser, DeleteStudent, FindStudent, UpdateStudentData } = require('../controller/StudentInformationController')
const { CreateAcadmicRecord ,deteteAcademicRecord, getAcademicRecord} = require('../controller/AcademicRecordController')
const router = express.Router()

//Student Related Api
router.post('/SignUp', CreateUser)
router.delete('/deleteStudent/:CNIC', DeleteStudent)
router.get('/findStudent/:CNIC',FindStudent)
router.put('/updateStudent/:CNIC',UpdateStudentData)

//Student Academic Record Api
router.post('/createAcademicRecord', CreateAcadmicRecord)
router.delete('/deleteAcademicRecord/:CNIC',deteteAcademicRecord)
router.get('/findAcademicRecord/:CNIC',getAcademicRecord)


module.exports = router