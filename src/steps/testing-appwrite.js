import * as exec from '@actions/exec';
import * as core from '@actions/core';
import ExecOutput from '../helpers/ExecOutput.js';
import RunCommand from '../helpers/RunCommand.js';


export async function testingAppwrite() {
  core.info('Testing Appwrite');
  const res = await RunCommand.run('appwrite', ['-v']);
  if(res.exitCode === 0) {
    core.info(`Using Appwrite version ${res.stdout}`);
  }

  return res.exitCode;
}
