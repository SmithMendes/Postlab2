const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

// Serve static CSS files
app.use(express.static(path.join(__dirname, 'public')));

// Single student for basic rendering
const student = { name: "Smith Mendes", branch: "Computer Engineering", year: "SE", gpa: 3.8, status: "Active" };

app.get('/', (req, res) => {
    res.render("profile", {
        cohort: "Class of 2026",
        student: student
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
