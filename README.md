
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/89ff8f03-3244-4764-8e2e-415969d83267

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/89ff8f03-3244-4764-8e2e-415969d83267) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How to deploy this project on Netlify

### Option 1: Deploy directly from Git

1. Push your code to GitHub, GitLab, or Bitbucket
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Deploy manually

1. Build your project locally:
   ```sh
   npm run build
   ```
2. Log in to [Netlify](https://app.netlify.com/)
3. Go to "Sites" and drag-and-drop the `dist` folder from your project
4. Your site is now deployed!

### Custom domain setup

1. After deploying, go to "Domain settings" for your site
2. Click "Add custom domain"
3. Follow the instructions to set up your domain

## I want to use a custom domain - is that possible?

Yes! Netlify makes it easy to set up custom domains. After deploying your site, go to the "Domain settings" section in your Netlify dashboard, click "Add custom domain", and follow the instructions.
