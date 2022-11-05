const process = require('process');

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;

// automatically create a file report
process.report.filename = './12-Report/report.json';

function sampleError() {
  throw new Error('Error ngab!');
}

sampleError();
