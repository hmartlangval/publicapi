const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const sampleData = require('./data/sampleData');

// Import routes
const classesRoutes = require('./routes/classes');
const studentsRoutes = require('./routes/students');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from docs directory if it exists (for GitHub Pages)
const docsDir = path.join(__dirname, 'docs');
if (fs.existsSync(docsDir)) {
  app.use(express.static(docsDir));
}

// Routes
app.use('/api/classes', classesRoutes);
app.use('/api/students', studentsRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the School REST API',
    endpoints: [
      '/api/classes',
      '/api/students',
      '/api/classes/:classId/students'
    ]
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Ensure data files exist with sample data
if (!fs.existsSync(path.join(dataDir, 'classes.json'))) {
  fs.writeFileSync(
    path.join(dataDir, 'classes.json'), 
    JSON.stringify(sampleData.classes, null, 2)
  );
}

if (!fs.existsSync(path.join(dataDir, 'students.json'))) {
  fs.writeFileSync(
    path.join(dataDir, 'students.json'), 
    JSON.stringify(sampleData.students, null, 2)
  );
}

// Also auto-run the build script for GitHub Pages if we're in production
if (process.env.NODE_ENV === 'production') {
  try {
    require('./build-github-pages');
  } catch (error) {
    console.error('Error building GitHub Pages files:', error);
  }
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}`);
  console.log(`To build for GitHub Pages, run: npm run build`);
}); 