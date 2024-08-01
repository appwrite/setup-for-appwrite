import * as exec from '@actions/exec';
import * as core from '@actions/core';
import ExecOutput from '../helpers/ExecOutput.js';
import RunCommand from '../helpers/RunCommand.js';

export async function installAppwrite() {
  core.info('Installing Appwrite');
  const res = await RunCommand.run('npm', ['install', '-g', 'appwrite']);

  return res.exitCode;
}
