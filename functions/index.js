const { onRequest } = require('firebase-functions/v2/https');

exports.hello = onRequest({ invoker: 'public' }, (req, res) => {
  res.json({ message: 'Hello from Firebase Functions!' });
});
