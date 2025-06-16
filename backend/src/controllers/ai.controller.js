const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }
    const responseText = await aiService(code);
    res.json({ response: responseText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};