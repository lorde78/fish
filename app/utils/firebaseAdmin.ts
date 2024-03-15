// app/utils/firebaseAdmin.ts
import * as admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

if (!admin.apps.length) {
  const serviceAccountPath = path.join(__dirname, '../../secret/firebaseAdminKey.json');
  const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export default admin;
