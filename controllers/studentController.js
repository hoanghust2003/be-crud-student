const Student = require('../models/student');

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error'   
 });
  }
};

exports.createStudent = async (req, res) => {
  try{
    const { name, age, major } = req.body;
    const student = new Student({ name, age, major });
    await student.save();
    res.json(student);
    } catch (err){
      console.error(err);
      if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map(error => error.message);
        return res.status(400).json({ message: 'Validation error', errors   
   });
      }
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
  const { name, age, major } = req.body;
  const student = await Student.findByIdAndUpdate(id, { name, age, major }, { new: true });
  res.json(student);
  }catch (err){
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error'});
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.json({ message: 'Student deleted' });
  }catch (err){
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error'});
  }
  
};