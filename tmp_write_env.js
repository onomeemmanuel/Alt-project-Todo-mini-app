const fs = require('fs');
const content = 'MONGO_URI="mongodb+srv://onomee945_db_user:Ayomide45@cluster0.szza98h.mongodb.net/todoapp?appName=Cluster0"\nPORT=5000\n';
fs.writeFileSync('config/.env', content, 'utf8');
console.log('wrote config/.env');
