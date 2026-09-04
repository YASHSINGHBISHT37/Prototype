const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

// GET /api/subjects?program=BCA&sem=3
router.get('/subjects', async (req, res) => {
  const { program, sem } = req.query;

  try {
    const filter = {};
    if (program) filter.programCode = program.toUpperCase();
    if (sem && sem !== 'All') filter.semester = parseInt(sem, 10);

    // Grouping by unique subject codes
    const subjects = await Resource.aggregate([
      { $match: filter },
      { 
        $group: { 
          _id: "$subjectCode", 
          code: { $first: "$subjectCode" },
          name: { $first: "$subjectName" },
          sem: { $first: "$semester" }
        }
      }
    ]);

    // Fallback static subjects if database is empty during early development
    if (subjects.length === 0 && program === 'BCA') {
      return res.json({
        success: true,
        subjects: [
          { code: "BCA102T", name: "Programming Fundamentals using C", sem: 1 },
          { code: "BCA104T", name: "Principles of Accounting", sem: 1 },
          { code: "BCA202T", name: "Database Management Systems", sem: 3 },
          { code: "BCA204T", name: "Software Engineering", sem: 4 },
          { code: "BCA206T", name: "Java Programming Lab", sem: 3 }
        ]
      });
    }

    return res.json({ success: true, subjects });
  } catch (error) {
    console.error('Subjects fetch error:', error);
    return res.status(500).json({ success: false, message: 'Server error fetching subjects.' });
  }
});

// GET /api/files?subjectCode=BCA202T&category=Notes
router.get('/files', async (req, res) => {
  const { subjectCode, category } = req.query;

  try {
    const filter = { subjectCode };
    if (category && category !== 'All') filter.category = category;

    const files = await Resource.find(filter);

    // Fallback static files if database is empty
    if (files.length === 0) {
      return res.json({
        success: true,
        files: [
          {
            _id: "demo-1",
            title: `${subjectCode} Unit 1-4 Complete Notes`,
            category: category === 'All' ? 'Notes' : category,
            fileSize: "4.2 MB",
            fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          }
        ]
      });
    }

    return res.json({ success: true, files });
  } catch (error) {
    console.error('Files fetch error:', error);
    return res.status(500).json({ success: false, message: 'Server error fetching files.' });
  }
});

module.exports = router;