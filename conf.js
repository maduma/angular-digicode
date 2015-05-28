exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome',
    executablePath: '/opt/google/chrome/chrome',
    commandLineFlags: '--no-sandbox'
  }

};
