import React from 'react';

const ResultCard = ({ result, onReset }) => {
  const { student, summary, subjects } = result;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 my-6">
      
      {/* Student Banner */}
      <div className="bg-indigo-600 p-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">{student.name}</h1>
          <p className="text-indigo-200 text-sm mt-0.5">Enrollment No: {student.enrollmentNumber}</p>
          <p className="text-indigo-100 text-sm mt-1">{student.college} • {student.program} (Sem {student.semester})</p>
        </div>
        <button 
          onClick={onReset}
          className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/20"
        >
          Search Another
        </button>
      </div>

      {/* Summary Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 border-b border-gray-100">
        <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Total Marks</p>
          <p className="text-xl font-bold text-gray-800 mt-1">{summary.totalMarksObtained} / {summary.totalMaxMarks}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Percentage</p>
          <p className="text-xl font-bold text-indigo-600 mt-1">{summary.percentage}%</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">SGPA</p>
          <p className="text-xl font-bold text-emerald-600 mt-1">{summary.sgpa}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Status</p>
          <span className={`inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-bold ${
            summary.resultStatus === 'PASS' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
          }`}>
            {summary.resultStatus}
          </span>
        </div>
      </div>

      {/* Subjects Table */}
      <div className="p-6 overflow-x-auto">
        <h2 className="text-base font-bold text-gray-800 mb-4">Subject-wise Performance</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase bg-gray-50">
              <th className="py-3 px-4 font-semibold">Code</th>
              <th className="py-3 px-4 font-semibold">Subject Title</th>
              <th className="py-3 px-4 font-semibold text-center">Credits</th>
              <th className="py-3 px-4 font-semibold text-center">Internal</th>
              <th className="py-3 px-4 font-semibold text-center">External</th>
              <th className="py-3 px-4 font-semibold text-center">Total</th>
              <th className="py-3 px-4 font-semibold text-center">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {subjects.map((sub, index) => (
              <tr key={index} className="hover:bg-gray-50/80 transition">
                <td className="py-3 px-4 font-mono text-xs text-gray-600">{sub.subjectCode}</td>
                <td className="py-3 px-4 font-medium text-gray-800">{sub.subjectName}</td>
                <td className="py-3 px-4 text-center text-gray-600">{sub.credits}</td>
                <td className="py-3 px-4 text-center text-gray-600">{sub.internalMarks}</td>
                <td className="py-3 px-4 text-center text-gray-600">{sub.externalMarks}</td>
                <td className="py-3 px-4 text-center font-bold text-gray-800">{sub.totalMarks}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold text-xs">
                    {sub.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ResultCard;