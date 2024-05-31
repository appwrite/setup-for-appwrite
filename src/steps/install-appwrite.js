import * as exec from '@actions/exec';
import * as core from '@actions/core';
import ExecOutput from '../helpers/ExecOutput.js';
import RunCommand from '../helpers/RunCommand.js';

export async function installAppwrite() {
  core.info('Installing Appwrite');
  const res = await RunCommand.run('npm', ['install', '-g', 'appwrite-cli-beta@0.16.0b35b4bb46a448d7115c16b43031a1ddd2fa28982']);

  return res.exitCode;
}
