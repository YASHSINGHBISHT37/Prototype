import React, { useState } from 'react';

const LoginForm = ({ onLoginSubmit, loading }) => {
  const [formData, setFormData] = useState({
    enrollmentNo: '',
    password: '',
    captcha: ''
  });

  // Generates a random 5-character captcha string
  const generateCaptcha = () => {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
  };

  const [captchaText, setCaptchaText] = useState(generateCaptcha());

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRefreshCaptcha = () => {
    setCaptchaText(generateCaptcha());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto my-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">IPU Result Portal</h2>
        <p className="text-xs text-gray-500 mt-1">Enter your credentials to fetch your scorecard</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Enrollment Number */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
            Enrollment Number
          </label>
          <input
            type="text"
            name="enrollmentNo"
            required
            placeholder="e.g. 01215002022"
            value={formData.enrollmentNo}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
          />
        </div>

        {/* Captcha Section */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
            Captcha
          </label>
          
          <div className="flex items-center space-x-3 mb-2">
            <div className="flex-1 bg-gray-100 rounded-lg py-2.5 text-center text-xl font-mono font-bold tracking-widest text-indigo-700 select-none border border-gray-200">
              {captchaText}
            </div>
            <button
              type="button"
              onClick={handleRefreshCaptcha}
              className="p-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-gray-600 transition"
              title="Refresh Captcha"
            >
              🔄
            </button>
          </div>

          <input
            type="text"
            name="captcha"
            required
            placeholder="Enter code shown above"
            value={formData.captcha}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200 disabled:opacity-50 text-sm"
        >
          {loading ? 'Fetching Result...' : 'View Marksheet'}
        </button>

      </form>
    </div>
  );
};

export default LoginForm;