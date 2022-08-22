import { cdk, javascript } from 'projen';

const project = new cdk.JsiiProject({
  author: 'Amin Fazl',
  authorAddress: 'amin.fazl@mondo.com.au',
  defaultReleaseBranch: 'main',
  name: 'TestPublicProjenRepo',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  repositoryUrl: 'git@github.com:AminFazlMondo/TestPublicProjenRepo.git',
  peerDeps: [
    'projen',
    'deployable-awscdk-app-ts',
  ],
  deps: [
    'deployable-awscdk-app-ts',
  ],
  devDeps: [
    '@types/fs-extra',
  ],
  bundledDeps: [
    '@mondo/projen-common',
    '@pact-foundation/pact-node',
    'fs-extra',
    'aws-sdk',
    'change-case',
    'commander',
  ],
});
project.synth();