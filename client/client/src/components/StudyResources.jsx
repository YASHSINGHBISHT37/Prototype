import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Complete List of IPU Academic Programs
const programsList = [
  { code: "ADCGC", name: "Advanced Diploma in Child Guidance and Counselling" },
  { code: "BA", name: "Bachelor of Arts" },
  { code: "BA-JMC", name: "Bachelor of Arts (Journalism & Mass Communication)" },
  { code: "BA-LLB", name: "Integrated Bachelor of Arts - Bachelor of Laws (Honours)" },
  { code: "BARCH", name: "Bachelor of Architecture" },
  { code: "BASLP", name: "Bachelor of Audiology & Speech Language Pathology" },
  { code: "BBA", name: "Bachelor of Business Administration" },
  { code: "BBA-LLB", name: "Integrated BBA LLB (Hons)" },
  { code: "BBA-TTM", name: "Bachelor of Business Administration (Tour & Travel Management)" },
  { code: "BCA", name: "Bachelor of Computer Applications" },
  { code: "BCOM", name: "Bachelor of Commerce" },
  { code: "BDS", name: "Bachelor of Dental Surgery" },
  { code: "BED", name: "Bachelor of Education" },
  { code: "BOT", name: "Bachelor of Occupational Therapy" },
  { code: "BPHARM", name: "Bachelor of Pharmacy" },
  { code: "BPO", name: "Bachelor in Prosthetics and Orthotics" },
  { code: "BSC", name: "Bachelor of Science" },
  { code: "BSC-MSC", name: "Bachelor of Science / Master of Science" },
  { code: "BSC-NUR", name: "Bachelor of Science (Hons) Nursing" },
  { code: "BTECH", name: "Bachelor of Technology" },
];

const StudyResources = () => {
  // Navigation States
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Filter States
  const [selectedSem, setSelectedSem] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamic Data States
  const [subjects, setSubjects] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 1. Fetch Subjects dynamically when Program or Semester changes
  useEffect(() => {
    if (selectedProgram) {
      setLoading(true);
      setError(null);
      axios
        .get(`${API_BASE_URL}/subjects`, {
          params: {
            program: selectedProgram.code,
            sem: selectedSem,
          },
        })
        .then((res) => {
          if (res.data.success) {
            setSubjects(res.data.subjects || []);
          }
        })
        .catch((err) => {
          console.error('Failed to load subjects:', err);
          setError('Could not connect to database for subjects.');
        })
        .finally(() => setLoading(false));
    }
  }, [selectedProgram, selectedSem]);

  // 2. Fetch Files dynamically when Subject or Category changes
  useEffect(() => {
    if (selectedSubject) {
      setLoading(true);
      setError(null);
      axios
        .get(`${API_BASE_URL}/files`, {
          params: {
            subjectCode: selectedSubject.code,
            category: activeCategory,
          },
        })
        .then((res) => {
          if (res.data.success) {
            setFiles(res.data.files || []);
          }
        })
        .catch((err) => {
          console.error('Failed to load files:', err);
          setError('Could not connect to database for PDF files.');
        })
        .finally(() => setLoading(false));
    }
  }, [selectedSubject, activeCategory]);

  // Filter Programs locally via search
  const filteredPrograms = programsList.filter(
    (p) =>
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter Subjects locally via search bar
  const filteredSubjects = subjects.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-12 font-sans text-slate-800">
      
      {/* LEVEL 1: Program Cards Grid */}
      {!selectedProgram && (
        <div className="max-w-7xl mx-auto">
          {/* Main Title Header */}
          <div className="mb-10">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-2">
              Study Resource
            </h1>
            <p className="text-rose-500 font-medium text-sm">
              from Guru Gobind Singh Indraprastha University
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-end mb-8">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search Programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-200/60 text-slate-700 placeholder-slate-400 px-4 py-2.5 pl-10 rounded-full text-xs font-medium focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
              <span className="absolute left-3.5 top-2.5 text-slate-400 text-xs">🔍</span>
              <span className="absolute right-3 top-2.5 bg-slate-300/60 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                PROGRAM {programsList.length}
              </span>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredPrograms.map((prog, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedProgram(prog);
                  setSearchQuery('');
                }}
                className="bg-slate-200/50 hover:bg-slate-200/80 transition cursor-pointer p-6 rounded-2xl flex flex-col justify-between h-36 border border-slate-200/40 shadow-sm hover:shadow"
              >
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{prog.code}</h3>
                <p className="text-[11px] text-slate-500 font-medium line-clamp-2 leading-tight">
                  {prog.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LEVEL 2: Subjects Grid inside Selected Program */}
      {selectedProgram && !selectedSubject && (
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-slate-400 font-medium mb-6">
            <button
              onClick={() => {
                setSelectedProgram(null);
                setSearchQuery('');
                setSelectedSem('All');
              }}
              className="hover:text-slate-800 transition"
            >
              ← Study Resource
            </button>
            <span>/</span>
            <span>{selectedProgram.name}</span>
            <span>/</span>
            <span>All Semesters</span>
          </div>

          {/* Program Header */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl leading-tight">
            {selectedProgram.name}
          </h1>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            {/* Semester Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', '1', '2', '3', '4', '5', '6'].map((sem) => (
                <button
                  key={sem}
                  onClick={() => setSelectedSem(sem)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                    selectedSem === sem
                      ? 'bg-rose-500 text-white shadow-sm'
                      : 'bg-slate-200/60 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {sem === 'All' ? 'All' : `SEM ${sem}`}
                </button>
              ))}
            </div>

            {/* Subject Search Bar */}
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search Subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-200/60 text-slate-700 placeholder-slate-400 px-4 py-2.5 pl-9 rounded-full text-xs font-medium focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
              <span className="absolute left-3.5 top-2.5 text-slate-400 text-xs">🔍</span>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-xs text-rose-500 mb-4">{error}</p>}

          {/* Loading Indicator */}
          {loading ? (
            <div className="text-center py-12 text-slate-400 text-sm">Loading Subjects...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {filteredSubjects.length > 0 ? (
                filteredSubjects.map((sub, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedSubject(sub);
                      setSearchQuery('');
                    }}
                    className="bg-slate-200/50 hover:bg-slate-200/80 transition cursor-pointer p-5 rounded-2xl flex flex-col justify-between h-36 border border-slate-200/40"
                  >
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase block mb-1">
                        Sem {sub.sem} • {sub.code}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 leading-snug">
                        {sub.name}
                      </h4>
                    </div>
                  </div>
                ))
              ) : (
                <p className="col-span-full text-xs text-slate-400 py-8">
                  No subjects found for this selection.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* LEVEL 3: Resource PDFs & Materials inside Selected Subject */}
      {selectedProgram && selectedSubject && (
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-slate-400 font-medium mb-6">
            <button onClick={() => setSelectedSubject(null)} className="hover:text-slate-800 transition">
              ← {selectedProgram.code} Subjects
            </button>
            <span>/</span>
            <span>Sem {selectedSubject.sem}</span>
            <span>/</span>
            <span className="text-slate-800">{selectedSubject.code}</span>
          </div>

          {/* Subject Header */}
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              {selectedSubject.code}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-3">
              {selectedSubject.name}
            </h1>
          </div>

          {/* Category Tabs: Notes, PYQs, Practical / Lab, Syllabus */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['All', 'Notes', 'PYQs', 'Practical / Lab', 'Syllabus'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-200/60 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Loading Indicator */}
          {loading ? (
            <div className="text-center py-12 text-slate-400 text-sm">Loading PDF Files...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {files.length > 0 ? (
                files.map((file) => (
                  <div
                    key={file._id || file.id}
                    className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-50 text-rose-600">
                          {file.category}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">{file.fileSize || 'PDF'}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-800 leading-snug">{file.title}</h3>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">PDF File</span>
                      <a
                        href={file.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-slate-900 hover:bg-rose-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition"
                      >
                        View / Download
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="col-span-full text-xs text-slate-400 py-8">
                  No materials or PDF files uploaded yet for this category.
                </p>
              )}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default StudyResources;