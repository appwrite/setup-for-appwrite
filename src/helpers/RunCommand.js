import ExecOutput from './ExecOutput.js';
import * as exec from '@actions/exec';

export default class RunCommand {
  static async run(command, args = []) {
    const result = new ExecOutput();
    const stdout = [];

    const listeners = {
      stdout: (data) => {
        stdout.push(data.toString());
      },
      stderr: (data) => {
        stdout.push(data.toString());
      }
    };

    result.exitCode = await exec.exec(command, args, { listeners, silent: true, ignoreReturnCode: true });
    result.stdout = stdout.join('');

    return result;
  }
}
