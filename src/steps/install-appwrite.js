import * as core from '@actions/core';
import RunCommand from '../helpers/RunCommand.js';

export async function installAppwrite() {
  core.info('Installing Appwrite');
  const res = await RunCommand.run('npm', ['install', '-g', 'appwrite-cli']);

  return res.exitCode;
}
