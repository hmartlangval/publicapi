const fs = require('fs');
const path = require('path');
const sampleData = require('./data/sampleData');

console.log('Building static files for GitHub Pages...');

// Create docs folder for GitHub Pages
const docsDir = path.join(__dirname, 'docs');
if (fs.existsSync(docsDir)) {
  // Remove existing docs directory
  fs.rmSync(docsDir, { recursive: true, force: true });
}
fs.mkdirSync(docsDir);

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
  
  // Write sample data files
  fs.writeFileSync(
    path.join(dataDir, 'classes.json'), 
    JSON.stringify(sampleData.classes, null, 2)
  );
  
  fs.writeFileSync(
    path.join(dataDir, 'students.json'), 
    JSON.stringify(sampleData.students, null, 2)
  );
} else {
  // Ensure data files exist or create them with sample data
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
}

// Create API directory structure in docs
const apiDir = path.join(docsDir, 'api');
fs.mkdirSync(apiDir);

const classesDir = path.join(apiDir, 'classes');
fs.mkdirSync(classesDir);

const studentsDir = path.join(apiDir, 'students');
fs.mkdirSync(studentsDir);

// Load data
let classes = [];
let students = [];

try {
  classes = JSON.parse(fs.readFileSync(path.join(dataDir, 'classes.json'), 'utf8'));
} catch (error) {
  console.error('Error reading classes.json:', error.message);
  classes = sampleData.classes; // Fallback to sample data
}

try {
  students = JSON.parse(fs.readFileSync(path.join(dataDir, 'students.json'), 'utf8'));
} catch (error) {
  console.error('Error reading students.json:', error.message);
  students = sampleData.students; // Fallback to sample data
}

// Create classes endpoints
fs.writeFileSync(
  path.join(classesDir, 'index.html'), 
  JSON.stringify(classes)
);

classes.forEach(classItem => {
  const classDir = path.join(classesDir, String(classItem.id));
  fs.mkdirSync(classDir);
  
  fs.writeFileSync(
    path.join(classDir, 'index.html'),
    JSON.stringify(classItem)
  );
  
  // Create class-student relationship endpoints
  const classStudentsDir = path.join(classDir, 'students');
  fs.mkdirSync(classStudentsDir);
  
  const classStudents = students.filter(student => 
    student.classIds && student.classIds.includes(classItem.id)
  );
  
  fs.writeFileSync(
    path.join(classStudentsDir, 'index.html'),
    JSON.stringify(classStudents)
  );
});

// Create students endpoints
fs.writeFileSync(
  path.join(studentsDir, 'index.html'),
  JSON.stringify(students)
);

students.forEach(student => {
  const studentDir = path.join(studentsDir, String(student.id));
  fs.mkdirSync(studentDir);
  
  fs.writeFileSync(
    path.join(studentDir, 'index.html'),
    JSON.stringify(student)
  );
  
  // Create student-classes endpoint
  const studentClassesDir = path.join(studentDir, 'classes');
  fs.mkdirSync(studentClassesDir);
  
  const studentClasses = classes.filter(classItem => 
    student.classIds && student.classIds.includes(classItem.id)
  );
  
  fs.writeFileSync(
    path.join(studentClassesDir, 'index.html'),
    JSON.stringify(studentClasses)
  );
});

// Create index.html in docs folder
const publicIndexPath = path.join(__dirname, 'public', 'index.html');
if (fs.existsSync(publicIndexPath)) {
  // Copy from public/index.html
  fs.copyFileSync(
    publicIndexPath,
    path.join(docsDir, 'index.html')
  );
  console.log('Using custom index.html from public directory');
} else {
  // Fallback to generating a basic page
  fs.writeFileSync(
    path.join(docsDir, 'index.html'),
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>School REST API</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1, h2, h3 {
      color: #333;
    }
    code {
      background: #f4f4f4;
      padding: 2px 5px;
      border-radius: 3px;
    }
    pre {
      background: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    .endpoint {
      margin-bottom: 10px;
    }
    .endpoint a {
      text-decoration: none;
      color: #0066cc;
    }
    .endpoint a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>School REST API</h1>
  <p>Welcome to the School REST API. Here are the available endpoints:</p>
  
  <h2>Classes</h2>
  <div class="endpoint"><a href="/api/classes">/api/classes</a> - Get all classes</div>
  <div class="endpoint">/api/classes/:id - Get a specific class by ID (example: <a href="/api/classes/CLS001">/api/classes/CLS001</a>)</div>
  <div class="endpoint">/api/classes/:classId/students - Get all students in a specific class (example: <a href="/api/classes/CLS001/students">/api/classes/CLS001/students</a>)</div>
  
  <h2>Students</h2>
  <div class="endpoint"><a href="/api/students">/api/students</a> - Get all students</div>
  <div class="endpoint">/api/students/:id - Get a specific student by ID (example: <a href="/api/students/STU00101">/api/students/STU00101</a>)</div>
  <div class="endpoint">/api/students/:id/classes - Get all classes for a specific student (example: <a href="/api/students/STU00101/classes">/api/students/STU00101/classes</a>)</div>
  
  <h2>API Usage</h2>
  <p>This is a static version of the API for GitHub Pages. It supports GET requests only through direct URL access.</p>
  <p>For full API functionality including POST, PUT, and DELETE operations, run the API server locally.</p>
  
  <h3>Running locally</h3>
  <pre>git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
npm start</pre>

  <p>For more information, see the <a href="https://github.com/yourusername/your-repo-name">GitHub repository</a>.</p>
</body>
</html>`
  );
  console.log('Created default index.html');
}

console.log('Static files created successfully in the docs folder');
console.log('To deploy to GitHub Pages, push the docs folder to your repository');
console.log('Then go to your repository settings and enable GitHub Pages with the docs folder as the source'); 