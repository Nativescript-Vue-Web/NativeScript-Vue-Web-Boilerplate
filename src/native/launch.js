const { exec } = require('child_process');
const winston = require('winston-color'); // eslint-disable-line

const action = process.argv[2];
const platform = process.argv[3];

// Validate action
if (['build', 'debug', 'run'].indexOf(action) === -1) {
    winston.error('Invalid action');
    process.exit(1);
}

// Validation platform
if ([undefined, 'android', 'ios'].indexOf(platform) === -1) {
    winston.error('Invalid platform');
    process.exit(1);
}

switch (action) {
case 'build':
    winston.info('Building NativeScript application...');
    break;

case 'debug':
    winston.info('Debugging NativeScript application...');
    break;

case 'run':
    winston.info('Running NativeScript application...');
    break;
default:
    break;
}

exec('npm i', { cwd: 'dist' });

if (action !== 'run' && !platform) {
    const tnsAndroidProcess = exec(`tns --path dist ${action} android`);
    const tnsiOSProcess = exec(`tns --path dist ${action} ios`);
    tnsAndroidProcess.stdout.pipe(process.stdout);
    tnsiOSProcess.stdout.pipe(process.stdout);
} else {
    const tnsProcess = exec(`tns --path dist ${action} ${platform || ''}`);
    // const tnsProcess = exec(`tns --path ./dist ${action} ${platform || ''} --log trace`);
    tnsProcess.stdout.pipe(process.stdout);
}
