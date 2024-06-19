import * as exec from '@actions/exec';
import * as core from '@actions/core';
import ExecOutput from '../helpers/ExecOutput.js';
import RunCommand from '../helpers/RunCommand.js';

export async function installAppwrite() {
  core.info('Installing Appwrite');
  const res = await RunCommand.run('npm', ['install', '-g', 'appwrite-cli-beta@0.16.0-a5d86a7aac8694c89da5fc4656c40a78e6716bc8']);

  return res.exitCode;
}
