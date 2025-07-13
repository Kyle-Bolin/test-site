# Semantic Versioning Setup

This project uses semantic versioning with [Semantic Release](https://semantic-release.gitbook.io/) for automatic version management.

## How It Works

### Conventional Commits
We use [Conventional Commits](https://www.conventionalcommits.org/) format for commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Commit Types
- `feat`: New features (triggers minor version bump)
- `fix`: Bug fixes (triggers patch version bump)
- `docs`: Documentation changes (no version bump)
- `style`: Code style changes (no version bump)
- `refactor`: Code refactoring (no version bump)
- `perf`: Performance improvements (triggers patch version bump)
- `test`: Adding or updating tests (no version bump)
- `chore`: Build process or tooling changes (no version bump)

### Breaking Changes
To indicate a breaking change, add `!` after the type and scope:
```
feat(api)!: change user endpoint response format
```

## Workflows

### 1. Manual Release (`release.yml`)
- Triggered manually via GitHub Actions
- Allows manual version specification
- Good for major releases or hotfixes

### 2. Semantic Release (`semantic-release.yml`)
- Triggered on every push to `main`
- Uses Semantic Release (MIT licensed, community-driven)
- Automatically determines version based on commits
- Creates GitHub releases with changelog
- Updates package.json version

## Usage Examples

### Making a Feature
```bash
git commit -m "feat(auth): add user login functionality"
```

### Fixing a Bug
```bash
git commit -m "fix(ui): resolve button not responding to clicks"
```

### Breaking Change
```bash
git commit -m "feat(api)!: change user data structure"
```

### Documentation Update
```bash
git commit -m "docs(readme): update installation instructions"
```

## Version Bumping Rules

- **Patch** (`1.0.0` → `1.0.1`): Bug fixes, performance improvements
- **Minor** (`1.0.0` → `1.1.0`): New features (backward compatible)
- **Major** (`1.0.0` → `2.0.0`): Breaking changes

## GitHub Actions Free Tier Optimization

- Uses minimal caching (npm cache only)
- Runs tests, builds, and linting before release
- Creates releases only when needed
- Efficient use of GitHub Actions minutes
- Uses trusted open-source tools only (no Google/Microsoft/Intuit)

## Docker Integration

When a release is created:
1. Docker image is built with the new version tag
2. Image is pushed to Docker Hub
3. Tags include: `latest`, `v1.0.0`, `1.0.0`

## NX Integration Notes

When migrating to NX:
- Update `.releaserc.json` for monorepo structure
- Configure workspace-specific versioning
- Update Docker image naming conventions
- Semantic Release works well with monorepos 