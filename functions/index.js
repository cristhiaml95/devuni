const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Function to handle Contact Us form submissions
exports.submitContactForm = functions.https.onRequest(async (req, res) => {
  // Set CORS headers for preflight requests
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }

  // Set CORS headers for actual requests
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('Missing required fields');
  }

  try {
    await admin.firestore().collection('contactSubmissions').add({
      name,
      email,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    return res.status(200).send('Form submitted successfully!');
  } catch (error) {
    console.error('Error writing to Firestore:', error);
    return res.status(500).send('Error submitting form');
  }
});

// Function to handle Subscribe form submissions
exports.submitSubscribeForm = functions.https.onRequest(async (req, res) => {
  // Set CORS headers for preflight requests
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }

  // Set CORS headers for actual requests
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Missing required fields');
  }

  try {
    await admin.firestore().collection('newsletterSubscriptions').add({
      email,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    return res.status(200).send('Subscription successful!');
  } catch (error) {
    console.error('Error writing to Firestore:', error);
    return res.status(500).send('Error subscribing');
  }
});
