import fs from 'fs';
import { exec } from 'child_process';
import portfinder from 'portfinder';
import open from 'open';
import build from './build.js'; // this will build once initially
import { rootDir, buildDir, srcPath } from './paths.js';

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
