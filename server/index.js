const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'IPU Result Backend is running' });
});

// Login & Fetch Result API Endpoint
app.post('/api/result', async (req, res) => {
  const { enrollmentNo, password, captcha } = req.body;

  if (!enrollmentNo || !password || !captcha) {
    return res.status(400).json({
      success: false,
      message: 'Enrollment Number, Password, and Captcha are required.'
    });
  }

  // Temporary mock data for UI testing
  return res.json({
    success: true,
    student: {
      name: "Yash Sharma",
      enrollmentNumber: enrollmentNo,
      program: "BCA",
      college: "IITM Janakpuri",
      semester: 4
    },
    summary: {
      totalMarksObtained: 542,
      totalMaxMarks: 700,
      percentage: 77.43,
      sgpa: 8.2,
      resultStatus: "PASS"
    },
    subjects: [
      {
        subjectCode: "BCA202",
        subjectName: "Database Management Systems",
        credits: 4,
        internalMarks: 22,
        externalMarks: 60,
        totalMarks: 82,
        grade: "A+"
      },
      {
        subjectCode: "BCA204",
        subjectName: "Software Engineering",
        credits: 4,
        internalMarks: 18,
        externalMarks: 55,
        totalMarks: 73,
        grade: "A"
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});