const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('project.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`✅ Done! Total: ${archive.pointer()} bytes`);
});

archive.on('error', (err) => {
  console.error('❌ Error:', err);
});

archive.pipe(output);

// ❗ EXCLUDE node_modules (important sa Bolt)
archive.glob('**/*', {
  ignore: ['node_modules/**', 'project.zip']
});

archive.finalize();