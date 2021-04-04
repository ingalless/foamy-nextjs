# Foamy NextJS Starter (Private Pages)

combines [Foaextends @yenly's fantastic template to protect your foam pages behind your GitHub user.

## Getting Started

1. Click on **Use this template** button
2. Clone the repository locally

```bash
cd your-local-repo-name
npm install
# or
yarn install

npm run dev
# or
yarn dev
```

Foam requires specific VS Code extensions for it to work properly. Open the repository as a folder using the File > Open... menu item. When prompted to install recommended extensions, click **Install all** (or **Show Recommendations** if you want to review and install them one by one).

Open `index.md` in `/pages` directory and edit to your heart's content. All other markdown files and notes folder are examples. Before doing so, I recommend clicking around to see how things work.

### How to upgrade Foam

[Fork the latest Foam template](https://github.com/foambubble/foam-template). Copy `.vscode` directory to your root level of your repo. Open your workspace and things should magically work. It's Foam's magic sauce. If not, try:

- update VS Code extensions defined in `.vscode/extensions.json`
- disable and enable extensions needed and restart VS Code

### How to deploy

I recommend deploying to [Vercel](https://vercel.com) - the rightful home for NextJS! I hope to add a deploy button shortly to make this process easier. There are a few requirements however:

1. Create a [GitHub OAuth Application](https://github.com/settings/applications/new). You'll need to copy out a client id and generate a secret for deployment.
2. Configure the environment based on the `.env.example`
   1. `GITHUB_ID`: The OAuth Client ID
   2. `GITHUB_SECRET`: The secret generated
   3. `GITHUB_USER`: Your username (case-sensitive!!!)
