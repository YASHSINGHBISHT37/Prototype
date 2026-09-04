const { scrapeIPUResult } = require('../services/ipuScraper');

const fetchResult = async (req, res) => {
  const { enrollmentNo, password, captcha } = req.body;

  // 1. Request Validation
  if (!enrollmentNo || !password || !captcha) {
    return res.status(400).json({
      success: false,
      message: 'Enrollment Number, Password, and Captcha are all required.',
    });
  }

  try {
    // 2. Call IPU Scraper Service
    const resultData = await scrapeIPUResult(enrollmentNo, password, captcha);

    // 3. Return Success JSON Payload
    return res.status(200).json({
      success: true,
      ...resultData,
    });
  } catch (error) {
    console.error('Result Fetch Controller Error:', error.message);
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch result from IPU portal.',
    });
  }
};

module.exports = { fetchResult };