# Docker Hub OIDC Setup for GitHub Actions

This guide explains how to set up OpenID Connect (OIDC) authentication between GitHub Actions and Docker Hub.

## Prerequisites

- Docker Hub account
- GitHub repository with Actions enabled
- Docker Hub Personal Access Token (for initial setup)

## Setup Steps

### 1. Create Docker Hub Personal Access Token

1. Go to [Docker Hub](https://hub.docker.com/)
2. Navigate to **Account Settings** → **Security**
3. Click **New Access Token**
4. Give it a name (e.g., "GitHub Actions OIDC")
5. Copy the token (you'll need this for the next step)

### 2. Configure GitHub Secrets

In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions** and add:

- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Your Docker Hub Personal Access Token

### 3. Alternative: True OIDC Setup (Advanced)

For true OIDC without stored tokens, you can configure Docker Hub as an OIDC provider:

1. **In Docker Hub:**
   - Go to Account Settings → Security
   - Enable OIDC provider (if available)

2. **In GitHub:**
   - Configure OIDC trust relationship
   - Update the workflow to use OIDC tokens

## Workflow Features

The provided workflow includes:

- **Multi-platform builds**: `linux/amd64,linux/arm64`
- **Smart tagging**: Branch names, PR numbers, semantic versions
- **Build caching**: Uses GitHub Actions cache for faster builds
- **Security**: Runs as non-root user in container
- **NX-ready**: Dockerfile at root for monorepo integration

## Usage

The workflow automatically triggers on:
- Push to `main` or `develop` branches
- Tag pushes (e.g., `v1.0.0`)
- Pull requests to `main`

## Image Tags

Images are tagged with:
- `latest` for main branch
- `develop` for develop branch
- `v1.0.0` for version tags
- `main-sha-abc123` for commit SHAs

## NX Integration Notes

When migrating to NX monorepo:
- Dockerfile remains at root level
- Update `IMAGE_NAME` to include project name
- Consider using NX's Docker executor
- Update build context paths as needed 