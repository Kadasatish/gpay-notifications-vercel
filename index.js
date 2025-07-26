// Node.js సర్వర్ యాప్
const express = require('express');
const app = express();

app.use(express.json()); // JSON డేటాను స్వీకరించడానికి

// Tasker నుండి వచ్చే /log-notification ఎండ్‌పాయింట్
app.post('/log-notification', (req, res) => {
  const data = req.body; // Tasker నుండి వచ్చే డేటా
  console.log('Received notification:', data); // Vercel లాగ్‌లలో చూపించేందుకు
  res.status(200).send('Notification logged'); // సక్సెస్ రెస్పాన్స్
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
