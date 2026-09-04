import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './components/LoginForm';
import ResultCard from './components/ResultCard';
import StudyResources from './components/StudyResources';

const API_BASE_URL = 'http://localhost:5000/api';

function App() {
  // Navigation State: 'results' or 'resources'
  const [activeTab, setActiveTab] = useState('results');

  // Result Fetcher States
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle Login / Result Form Submission
  const handleLoginSubmit = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/result`, formData);

      if (response.data.success) {
        setResultData(response.data);
      } else {
        setError(response.data.message || 'Failed to retrieve result.');
      }
    } catch (err) {
      console.error('API Error:', err);
      setError(
        err.response?.data?.message ||
          'Could not connect to backend server. Make sure Express is running on port 5000.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Reset Result View
  const handleReset = () => {
    setResultData(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      
      {/* Top Navbar */}
      <header className="bg-indigo-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-black tracking-wider">IPU</span>
            <span className="text-xs bg-indigo-500 px-2.5 py-1 rounded uppercase font-semibold text-indigo-100">
              Student Portal
            </span>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center space-x-1 bg-indigo-700/60 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('results')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === 'results'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-indigo-100 hover:text-white hover:bg-indigo-600/50'
              }`}
            >
              📊 Result Fetcher
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === 'resources'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-indigo-100 hover:text-white hover:bg-indigo-600/50'
              }`}
            >
              📚 Study Resources
            </button>
          </nav>

        </div>
      </header>

      {/* Main View Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6">
        
        {/* Tab 1: Result Fetcher */}
        {activeTab === 'results' && (
          <div>
            {/* Error Notification Banner */}
            {error && (
              <div className="max-w-md mx-auto mb-6 p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-lg shadow-sm flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-rose-800">Fetch Error</h3>
                  <p className="text-xs text-rose-700 mt-0.5">{error}</p>
                </div>
                <button
                  onClick={() => setError(null)}
                  className="text-rose-400 hover:text-rose-600 font-bold text-sm ml-4"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Toggle between Login Form and Result Card */}
            {!resultData ? (
              <LoginForm onLoginSubmit={handleLoginSubmit} loading={loading} />
            ) : (
              <ResultCard result={resultData} onReset={handleReset} />
            )}
          </div>
        )}

        {/* Tab 2: Study Resources */}
        {activeTab === 'resources' && <StudyResources />}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        IPU Student Hub • Results & Study Material Portal
      </footer>

    </div>
  );
}

export default App;