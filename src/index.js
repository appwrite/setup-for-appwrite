import * as core from '@actions/core';
import { installAppwrite } from './steps/install-appwrite.js';
import { testingAppwrite } from './steps/testing-appwrite.js';
import { getInputs } from './steps/getInputs.js';
import { runActions } from './steps/run-actions.js';
import { loginEmail } from './steps/login-email.js';
import { loginApi } from './steps/login-api.js';

async function run() {
  if (await installAppwrite() !== 0) {
    core.error(`Can't install Appwrite CLI`);
    return;
  }

  if (await testingAppwrite() !== 0) {
    core.error(`Appwrite CLI is not available`);
    return;
  }

  const inputs = getInputs();
  if (inputs === null || !inputs.method) {
    return;
  }

  if (inputs.method === 'key') {
    if (await loginApi(inputs.key, inputs.project, inputs.endpoint, inputs.selfSigned) !== 0) {
      core.error(`Appwrite CLI was unable to log in using the provided credentials`);
      return;
    }
  } else {
    if (await loginEmail(inputs.email, inputs.password, inputs.endpoint) !== 0) {
      core.error(`Appwrite CLI was unable to log in using the provided credentials`);
      return;

    }
  }

  if (inputs.actions.length !== 0) {
    const num = await runActions(inputs.actions);
    core.info(`Successfully executed ${num} actions`);
  }
}

await run();
