const express = require('express');
const studentController = require('../controllers/studentController');  
const router = express.Router();

// Lấy danh sách sinh viên
router.get('/students', studentController.getStudents);

// Thêm sinh viên mới
router.post('/students', studentController.createStudent);

// Cập nhật sinh viên
router.put('/students/:id', studentController.updateStudent);

// Xóa sinh viên
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;
