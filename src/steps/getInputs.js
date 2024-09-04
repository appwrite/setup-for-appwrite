import * as core from '@actions/core';
import Inputs from '../models/Inputs.js';


export function getInputs() {
  core.info('Getting inputs');
  const inputs = new Inputs();

  inputs.endpoint = core.getInput('endpoint');
  inputs.method = core.getInput('method');

  if (inputs.method === 'key') {
    inputs.project = core.getInput('project');
    inputs.key = core.getInput('key');
    inputs.selfSigned = core.getInput('self_signed').toString() === 'true';

    if (!inputs.key || !inputs.project) {
      core.error('project and key are require when using the key login method');
      return null;
    }
  } else {
    inputs.email = core.getInput('email');
    inputs.password = core.getInput('password');

    if (!inputs.email || !inputs.password) {
      core.setFailed('email and password are require when using the email login method');
      return null;
    }
  }

  inputs.force = core.getInput('force').toString() === 'true';
  inputs.all = core.getInput('all').toString() === 'true';

  const actions = core.getInput('actions');

  if (actions.length > 0) {
    inputs.actions = actions.split(/\r\n|\r|\n/g).map((action) => {
      if (action.search(/appwrite/) === 0) {
        action = action.replace('appwrite', '');
      }

      if (action.search(/pull|push/) === 0) {
        if (!action.includes('--all') && !action.includes('-a') && inputs.all) {
          action += ' --all';
        }

        if (!action.includes('--force') && !action.includes('-f') && inputs.all) {
          action += ' --force';
        }
      }


      return action;
    });
  }

  return inputs;
}
