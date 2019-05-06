const fs = require('fs');
const { exec } = require('child_process');
const portfinder = require('portfinder');
const open = require('open');
const build = require('./build'); // this will build once initially
const { rootDir, buildDir, srcPath } = require('./paths');

fs.watch(srcPath, (eventType, filename) => {
  console.log(`${filename} ${eventType}d, rebuilding...`);
  build();
});

function serveBuildFolder(port) {
  const serverProcess = exec(
    `node ${rootDir}/node_modules/serve/bin/serve.js --listen ${port} .`,
    { cwd: buildDir },
    (error, stdout, stderr) => {
      if (error) throw new Error(err);
      if (stdout) console.log(stdout);
      if (stderr) console.error(stderr);
    }
  );

  const url = `http://localhost:${port}`;
  open(url);

  console.log(`Serving ${buildDir} at ${url}...`);
  console.log(`Listening for changes in ${srcPath}...`);
  ['SIGTERM', 'SIGINT'].forEach(sig => {
    process.on(sig, () => {
      serverProcess.kill(sig);
      process.exit(0);
    });
  });
}

portfinder.getPort(
  {
    port: 3000, // minimum port
    stopPort: 3333, // maximum port
  },
  (err, port) => {
    if (err) {
      throw new Error(err);
    }
    serveBuildFolder(port);
  }
);
