import * as core from '@actions/core';
import RunCommand from '../helpers/RunCommand.js';


export async function testingAppwrite() {
  core.info('Testing Appwrite');
  const res = await RunCommand.run('appwrite', ['-v']);
  if(res.exitCode === 0) {
    core.info(`Using Appwrite version ${res.stdout}`);
  }

  return res.exitCode;
}
