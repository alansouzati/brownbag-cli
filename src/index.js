#!/usr/bin/env node

/**
* NPM dependencies
**/
import vorpal from 'vorpal';

/**
* Local dependencies
**/
import versionCommand from './commands/version';

const cli = vorpal();
cli.use(versionCommand);

if (process.argv.length === 2) {
  // this means that only "brownbag" has been typed
  // we should launch the CLI in this case
  cli
    .delimiter(cli.chalk.magenta('brownbag~$'))
    .show();
} else {
  // this means that more than "brownbag" has been typed
  // we should execute the command instead
  cli.parse(process.argv);
}
