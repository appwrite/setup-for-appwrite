import * as exec from '@actions/exec';
import * as core from '@actions/core';
import ExecOutput from '../helpers/ExecOutput.js';
import RunCommand from '../helpers/RunCommand.js';

export async function loginEmail(email, password, endpoint) {
  core.info('Login using email and password');
  const res = await RunCommand.run('appwrite', ['login', '--email', email, '--password', password, '--endpoint', endpoint]);
  core.info(res.stdout);

  return res.exitCode;
}