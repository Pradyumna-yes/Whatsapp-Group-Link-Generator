const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/submit', (req, res) => {
    // Handle form submission here, save the student data, and generate the unique link
    // based on semester and course. Then redirect the user to that link.
    // For simplicity, in this example, we assume the link is already generated and
    // provided in the request body.
    const { semester, course } = req.body;
    const uniqueLink = `https://example.com/${semester}/${course}`;
    res.redirect(uniqueLink);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
