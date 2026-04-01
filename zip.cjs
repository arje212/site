const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('project.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`Done! Total: ${archive.pointer()} bytes`);
});

archive.on('error', (err) => {
  console.error('Error:', err);
});

archive.pipe(output);

// Exclude dependencies and generated archives from the export bundle.
archive.glob('**/*', {
  ignore: ['node_modules/**', 'project.zip']
});

archive.finalize();
