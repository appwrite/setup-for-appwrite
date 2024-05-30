import * as exec from '@actions/exec';
import * as core from '@actions/core';
import ExecOutput from '../helpers/ExecOutput.js';
import RunCommand from '../helpers/RunCommand.js';

export async function loginApi(key, project, endpoint, selfSigned) {
  core.info('Login using API key and project ID');
  const res = await RunCommand.run('appwrite', ['client', '--endpoint', endpoint, '--projectId', project, '--key', key, '--selfSigned', selfSigned.toString()]);

  core.info(res.stdout);

  return res.exitCode;
}
