const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  output: 'export',
  
  // Set basePath for GitHub Pages deployment.
  // This automatically prefixes asset paths with the repository name.
  // It only runs in GitHub Actions to avoid affecting local development,
  // and checks that the repository name is not a primary user page (e.g. username.github.io).
  basePath: isGithubActions && process.env.GITHUB_REPOSITORY && !process.env.GITHUB_REPOSITORY.endsWith('.github.io')
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
    : undefined,
};

module.exports = nextConfig;

