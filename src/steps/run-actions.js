import * as exec from '@actions/exec';
import * as core from '@actions/core';
import ExecOutput from '../helpers/ExecOutput.js';
import RunCommand from '../helpers/RunCommand.js';

export async function runActions(actions) {
  let numberOfSuccessActions = 0;

  for (const action of actions) {
    const res = await RunCommand.run('appwrite', action.split(' '));
    core.info(res.stdout);
    if (res.exitCode === 0) {
      numberOfSuccessActions++;
    }
  }

  return numberOfSuccessActions;

}
