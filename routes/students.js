const express = require('express');
const router = express.Router();
const DataHandler = require('../utils/dataHandler');

const studentsHandler = new DataHandler('students.json');
const classesHandler = new DataHandler('classes.json');

/**
 * @route GET /api/students
 * @desc Get all students with optional filtering
 */
router.get('/', (req, res) => {
  try {
    // Extract classId from query if present to handle filtering by class
    const { classId, ...otherParams } = req.query;
    let students = studentsHandler.getAll(otherParams);
    
    // If classId is provided, filter students by class
    if (classId) {
      students = students.filter(student => 
        student.classIds && student.classIds.includes(classId)
      );
    }
    
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route GET /api/students/:id
 * @desc Get a specific student by ID
 */
router.get('/:id', (req, res) => {
  try {
    const student = studentsHandler.getById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route GET /api/students/:id/classes
 * @desc Get all classes for a specific student
 */
router.get('/:id/classes', (req, res) => {
  try {
    const student = studentsHandler.getById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    // Get all classes
    const allClasses = classesHandler.getAll();
    
    // Filter classes by student's classIds
    const studentClasses = allClasses.filter(classItem => 
      student.classIds && student.classIds.includes(classItem.id)
    );
    
    res.json(studentClasses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route POST /api/students
 * @desc Create a new student
 */
router.post('/', (req, res) => {
  try {
    // Validate class IDs if provided
    if (req.body.classIds && Array.isArray(req.body.classIds)) {
      const allClasses = classesHandler.getAll();
      const validClassIds = allClasses.map(c => c.id);
      
      // Check if all provided classIds exist
      const invalidClassIds = req.body.classIds.filter(
        id => !validClassIds.includes(id)
      );
      
      if (invalidClassIds.length > 0) {
        return res.status(400).json({ 
          error: `Classes with IDs ${invalidClassIds.join(', ')} do not exist` 
        });
      }
    }
    
    const newStudent = studentsHandler.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route PUT /api/students/:id
 * @desc Update a student
 */
router.put('/:id', (req, res) => {
  try {
    // Validate class IDs if provided
    if (req.body.classIds && Array.isArray(req.body.classIds)) {
      const allClasses = classesHandler.getAll();
      const validClassIds = allClasses.map(c => c.id);
      
      // Check if all provided classIds exist
      const invalidClassIds = req.body.classIds.filter(
        id => !validClassIds.includes(id)
      );
      
      if (invalidClassIds.length > 0) {
        return res.status(400).json({ 
          error: `Classes with IDs ${invalidClassIds.join(', ')} do not exist` 
        });
      }
    }
    
    const updatedStudent = studentsHandler.update(req.params.id, req.body);
    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route DELETE /api/students/:id
 * @desc Delete a student
 */
router.delete('/:id', (req, res) => {
  try {
    const success = studentsHandler.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route POST /api/students/:id/enroll/:classId
 * @desc Enroll a student in a class
 */
router.post('/:id/enroll/:classId', (req, res) => {
  try {
    const studentId = req.params.id;
    const classId = req.params.classId;
    
    // Check if student exists
    const student = studentsHandler.getById(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    // Check if class exists
    const classItem = classesHandler.getById(classId);
    if (!classItem) {
      return res.status(404).json({ error: 'Class not found' });
    }
    
    // Check if student is already enrolled
    if (student.classIds && student.classIds.includes(classId)) {
      return res.status(400).json({ error: 'Student already enrolled in this class' });
    }
    
    // Add class to student's classes
    const classIds = student.classIds || [];
    const updatedStudent = studentsHandler.update(studentId, {
      classIds: [...classIds, classId]
    });
    
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route DELETE /api/students/:id/drop/:classId
 * @desc Drop a student from a class
 */
router.delete('/:id/drop/:classId', (req, res) => {
  try {
    const studentId = req.params.id;
    const classId = req.params.classId;
    
    // Check if student exists
    const student = studentsHandler.getById(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    // Check if class exists
    const classItem = classesHandler.getById(classId);
    if (!classItem) {
      return res.status(404).json({ error: 'Class not found' });
    }
    
    // Check if student is enrolled in the class
    if (!student.classIds || !student.classIds.includes(classId)) {
      return res.status(400).json({ error: 'Student not enrolled in this class' });
    }
    
    // Remove class from student's classes
    const updatedStudent = studentsHandler.update(studentId, {
      classIds: student.classIds.filter(id => id !== classId)
    });
    
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 