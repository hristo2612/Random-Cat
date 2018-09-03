const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname, '../');

module.exports = {
  projectRoot: PROJECT_ROOT,
  entryPath: path.join(PROJECT_ROOT, 'src'),
  outputPath: path.join(PROJECT_ROOT, 'build'),
}