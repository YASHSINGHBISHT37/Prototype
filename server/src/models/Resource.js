const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  programCode: { type: String, required: true },
  semester: { type: Number, required: true },
  subjectCode: { type: String, required: true },
  subjectName: { type: String, required: true },
  title: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Notes', 'PYQs', 'Practical / Lab', 'Syllabus'], 
    required: true 
  },
  fileUrl: { type: String, required: true },
  fileSize: { type: String, default: '2.5 MB' }
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);