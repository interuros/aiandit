'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = require('express');
const issue_1 = require('./issue');
const config_1 = require('./config');
const database_1 = require('./database');
const app = (0, express_1.default)();
const port = config_1.default.get('APP_PORT');
app.get('/', (req, res) => {
  res.send('Hello, World!2222342');
});
app.use(express_1.default.json());
database_1.default.sync().then(() => {
  console.log('Database and tables synchronized.');
});
app.use(issue_1.issueRouter);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map
