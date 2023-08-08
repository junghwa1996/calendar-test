// src/utils/octokit.js
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: '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',
  baseUrl: 'https://api.github.com'
});

export default octokit;
