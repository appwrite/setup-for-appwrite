import * as core from '@actions/core';
import RunCommand from '../helpers/RunCommand.js';

export async function loginApi(key, project, endpoint, selfSigned) {
  core.info('Login using API key and project ID');
  const res = await RunCommand.run('appwrite', ['client', '--endpoint', endpoint, '--project-id', project, '--key', key, '--self-signed', selfSigned.toString()]);

  core.info(res.stdout);

  return res.exitCode;
}
