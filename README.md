# Ferrous - Linktree

A modern, customizable Linktree-style website built with Next.js, featuring social links, profile section, and automated CI/CD pipeline.

## Features

- ⚡ **Next.js 15** with App Router
- 🐳 **Docker** multi-stage builds with standalone output
- 🔄 **Semantic Versioning** with conventional commits
- 🚀 **GitHub Actions** CI/CD pipeline
- 🎨 **Tailwind CSS v3** for styling
- 📝 **TypeScript** for type safety
- 🔒 **Trusted tools only** (no Google/Microsoft/Intuit dependencies)
- 🌟 **Modern Linktree Design** with gradient backgrounds
- 📱 **Responsive Design** works on all devices
- ⚙️ **Easy Customization** via configuration files

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Docker

```bash
# Build Docker image
docker build -t test-site .

# Run container
docker run -p 3000:3000 test-site
```

## CI/CD Setup

### Docker Hub OIDC Configuration

This project uses Docker Hub for container registry. Follow these steps to set up OIDC authentication:

#### 1. Create Docker Hub Account
- Go to [Docker Hub](https://hub.docker.com/)
- Create an account if you don't have one

#### 2. Create Personal Access Token
1. Navigate to **Account Settings** → **Security**
2. Click **New Access Token**
3. Give it a name (e.g., "GitHub Actions CI/CD")
4. Set appropriate permissions (read/write for repositories)
5. Copy the token (you'll need this for GitHub secrets)

#### 3. Create Docker Hub Repository
1. Go to [Docker Hub](https://hub.docker.com/)
2. Click **"Create Repository"**
3. Set **Repository name** to `test-site`
4. Set **Visibility** to **Public** or **Private** (your choice)
5. Click **"Create"**

#### 4. Configure GitHub Secrets
In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions** and add:

- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Your Docker Hub Personal Access Token

#### 4. Repository Permissions
Ensure your repository has the following permissions enabled:
- **Settings** → **Actions** → **General** → **Workflow permissions**
  - ✅ "Read and write permissions"
  - ✅ "Allow GitHub Actions to create and approve pull requests"

### CI/CD Pipeline

The project includes a comprehensive CI/CD pipeline that:

1. **Tests & Builds** on every push/PR
2. **Releases** automatically on main branch (semantic versioning)
3. **Builds & Pushes** Docker images to Docker Hub

#### Pipeline Triggers
- **Push to `main`**: Full release + Docker build
- **Push to `develop`**: Docker build only
- **Pull Request**: Tests and build validation
- **Tag push**: Docker build with version tags

#### Semantic Versioning
Use conventional commits for automatic versioning:

```bash
git commit -m "feat(auth): add login functionality"     # Minor release
git commit -m "fix(ui): resolve button issue"          # Patch release
git commit -m "feat(api)!: change data format"         # Major release
```

## Project Structure

```
├── .github/workflows/    # CI/CD pipeline
├── docs/                 # Documentation
├── src/app/             # Next.js app router
├── src/config/          # Configuration files
│   └── links.ts         # Linktree content configuration
├── public/              # Static assets
├── Dockerfile           # Multi-stage Docker build
├── .releaserc.json      # Semantic release config
└── package.json         # Dependencies and scripts
```

## Customization

### Updating Links and Profile
Edit `src/config/links.ts` to customize your Linktree:

```typescript
// Profile Configuration
export const profile: Profile = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio description",
  avatar: "YN" // Your initials or image URL
};

// Main Links Configuration
export const links: Link[] = [
  {
    title: "Your Website",
    url: "https://yoursite.com",
    color: "bg-gradient-to-r from-blue-500 to-purple-600"
  },
  // Add more links...
];

// Social Links Configuration
export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "🐙"
  },
  // Add more social links...
];
```

### Available Color Gradients
- `bg-gradient-to-r from-blue-500 to-purple-600`
- `bg-gradient-to-r from-green-500 to-emerald-600`
- `bg-gradient-to-r from-red-500 to-pink-600`
- `bg-gradient-to-r from-yellow-500 to-orange-600`
- `bg-gradient-to-r from-indigo-500 to-purple-600`

## Development

### Committing Changes
Use conventional commits for automatic versioning:

```bash
# Features (minor version bump)
git commit -m "feat(component): add new user interface"

# Bug fixes (patch version bump)
git commit -m "fix(api): resolve data loading issue"

# Breaking changes (major version bump)
git commit -m "feat(api)!: change response format"

# Documentation
git commit -m "docs(readme): update setup instructions"
```

### Docker Development
```bash
# Build with development dependencies
docker build --target builder -t test-site:dev .

# Run with volume mounting for development
docker run -p 3000:3000 -v $(pwd):/app test-site:dev
```

## Deployment

### Docker Hub
Images are automatically pushed to Docker Hub with tags:
- `latest` - Latest main branch build
- `v1.0.0` - Semantic version tags
- `main-sha-abc123` - Commit-specific builds

### Manual Deployment
```bash
# Pull latest image
docker pull kyle-bolin/test-site:latest

# Run in production
docker run -p 3000:3000 -e NODE_ENV=production kyle-bolin/test-site:latest
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Semantic Release](https://semantic-release.gitbook.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Docker Hub Documentation](https://docs.docker.com/docker-hub/)
