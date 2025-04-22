# JavaScript REST API

A simple vanilla JavaScript REST API for managing classes and students. This API can be deployed on GitHub Pages for static GET endpoints or run locally for full functionality.

## Features

- RESTful API design
- JSON data storage
- CRUD operations for classes and students
- Query-based filtering
- Relationship management between classes and students

## API Endpoints

### Classes

- `GET /api/classes` - Get all classes (with optional filtering)
- `GET /api/classes/:id` - Get a specific class by ID
- `GET /api/classes/:classId/students` - Get all students in a specific class
- `POST /api/classes` - Create a new class (local mode only)
- `PUT /api/classes/:id` - Update a class (local mode only)
- `DELETE /api/classes/:id` - Delete a class (local mode only)

### Students

- `GET /api/students` - Get all students (with optional filtering)
- `GET /api/students/:id` - Get a specific student by ID
- `GET /api/students/:id/classes` - Get all classes for a specific student
- `POST /api/students` - Create a new student (local mode only)
- `PUT /api/students/:id` - Update a student (local mode only)
- `DELETE /api/students/:id` - Delete a student (local mode only)
- `POST /api/students/:id/enroll/:classId` - Enroll a student in a class (local mode only)
- `DELETE /api/students/:id/drop/:classId` - Drop a student from a class (local mode only)

## Query Parameters (Local Mode Only)

All GET endpoints support filtering via query parameters. For example:

- `GET /api/classes?name=Math` - Find classes with "Math" in the name
- `GET /api/students?classId=1` - Find students enrolled in class with ID 1

## Setup & Running Locally

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the server:
   ```
   npm start
   ```
   
   For development with auto-reload:
   ```
   npm run dev
   ```

## Deploying to GitHub Pages

1. Push your code to a GitHub repository
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. Create a build for GitHub Pages
   ```bash
   # This will run automatically when you start the server
   # or you can run it manually
   node index.js
   ```

3. In your GitHub repository settings, enable GitHub Pages
   - Go to Settings > Pages
   - Select the branch you want to deploy (main or master)
   - Set the folder to `/docs` or `/`
   - Click Save

4. Your API will be available at `https://yourusername.github.io/your-repo-name/`

### Limitations with GitHub Pages

GitHub Pages only supports static content, so only GET endpoints work in the deployed version. For full API functionality including POST, PUT, and DELETE operations, you need to run the server locally.

## Static API Structure

For GitHub Pages deployment, the API uses a static file structure:

```
/public
  /api
    /classes
      /index.html
      /1
        /index.html
        /students
          /index.html
      /2
        /index.html
        /students
          /index.html
      /...
    /students
      /index.html
      /1
        /index.html
      /2
        /index.html
      /...
```

## Extending the API

To add new endpoints or features:

1. Create new route files in the `routes` directory
2. Import and use them in `index.js`
3. Add new data files in the `data` directory if needed
4. Update the `DataHandler` class if you need additional functionality
5. Update the static file generation in `index.js` for GitHub Pages support

# To deploy on github page (nelvin)


## License

MIT 