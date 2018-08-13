const fs = require('fs-extra'); // eslint-disable-line
const path = require('path');
const { execSync } = require('child_process');
const winston = require('winston-color'); // eslint-disable-line

const distPath = path.resolve(__dirname, '../../dist');
const packagePath = path.resolve(__dirname, '../../dist/package');
const appPath = path.resolve(__dirname, '../../dist/app');
const tplPath = path.resolve(__dirname, '../../template');

const appPackage = require('../../package.json');
const tplPackage = require('../../template/package.json');

function copyNativeScriptPlugins() {
    winston.info('Copying NativeScript plugins to template dependencies...');
    const plugins = Object.keys(appPackage.dependencies)
        .filter(key => key.indexOf('nativescript-') !== -1)
        .reduce((obj, key) => {
      obj[key] = appPackage.dependencies[key]; // eslint-disable-line
            return obj;
        }, {});
    Object.assign(tplPackage.dependencies, plugins);
    fs.writeFileSync(`${tplPath}/package.json`, JSON.stringify(tplPackage, null, 2));
}

function updateDistFromTemplate() {
    winston.info('Preparing NativeScript application from template...');
    fs.ensureDirSync(distPath);
    fs.copySync(tplPath, distPath, { overwrite: false });
    execSync('npm i', { cwd: 'dist' });
}

function copyPackageIntoApp() {
    winston.info('Copying packaged files into app...');
    fs.ensureDirSync(packagePath);
    fs.copySync(packagePath, appPath, { overwrite: false });
    fs.removeSync(packagePath);
}

module.exports = {
    copyNativeScriptPlugins,
    updateDistFromTemplate,
    copyPackageIntoApp,
};
