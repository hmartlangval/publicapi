const express = require('express');
const router = express.Router();
const DataHandler = require('../utils/dataHandler');

const classesHandler = new DataHandler('classes.json');
const studentsHandler = new DataHandler('students.json');

/**
 * @route GET /api/classes
 * @desc Get all classes with optional filtering
 */
router.get('/', (req, res) => {
  try {
    const classes = classesHandler.getAll(req.query);
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route GET /api/classes/:id
 * @desc Get a specific class by ID
 */
router.get('/:id', (req, res) => {
  try {
    const classItem = classesHandler.getById(req.params.id);
    if (!classItem) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.json(classItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route GET /api/classes/:classId/students
 * @desc Get all students for a specific class
 */
router.get('/:classId/students', (req, res) => {
  try {
    const classId = Number(req.params.classId);
    
    // Check if class exists
    const classItem = classesHandler.getById(classId);
    if (!classItem) {
      return res.status(404).json({ error: 'Class not found' });
    }
    
    // Get all students
    const allStudents = studentsHandler.getAll();
    
    // Filter students by classId
    const classStudents = allStudents.filter(student => 
      student.classIds && student.classIds.includes(classId)
    );
    
    res.json(classStudents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route POST /api/classes
 * @desc Create a new class
 */
router.post('/', (req, res) => {
  try {
    const newClass = classesHandler.create(req.body);
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route PUT /api/classes/:id
 * @desc Update a class
 */
router.put('/:id', (req, res) => {
  try {
    const updatedClass = classesHandler.update(req.params.id, req.body);
    if (!updatedClass) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route DELETE /api/classes/:id
 * @desc Delete a class
 */
router.delete('/:id', (req, res) => {
  try {
    const success = classesHandler.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 