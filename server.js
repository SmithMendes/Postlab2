const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

// Serve static CSS files
app.use(express.static(path.join(__dirname, 'public')));

// Mock database of students demonstrating advanced EJS features
const students = [
    { name: "Smith Mendes", branch: "Computer Engineering", year: "SE", gpa: 3.8, status: "Active" },
    { name: "Alice Johnson", branch: "Data Science", year: "TE", gpa: 3.9, status: "Honors" },
    { name: "Bob Williams", branch: "Mechanical", year: "FE", gpa: 3.2, status: "Active" },
    { name: "Diana Prince", branch: "Computer Engineering", year: "BE", gpa: 4.0, status: "Honors" },
    { name: "Ethan Hunt", branch: "IT", year: "SE", gpa: 3.6, status: "Active" },
    { name: "Fiona Gallagher", branch: "Civil", year: "TE", gpa: 3.1, status: "Active" }
];

app.get('/', (req, res) => {
    // Pass the entire list to EJS instead of a single object
    res.render("profile", {
        cohort: "Class of 2026",
        students: students
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
