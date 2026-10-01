# Aman Shrivastav Portfolio

A React portfolio for Aman Shrivastav, a backend-focused full-stack developer.

## Highlights

- Responsive sections for profile, skills, experience, projects, and contact.
- GitHub repositories fetched through a dedicated service and exposed by a reusable React hook.
- Accessible project-details modal with Escape-key and overlay closing.
- Contact form powered by EmailJS.

## Project structure

```text
src/
  components/   # Page and shared presentation components
  data/         # Static project configuration
  hooks/        # Reusable React hooks
  services/     # External API clients
```

## Run locally

```bash
npm install
npm start
```

## Verify production build

```bash
npm run build
```

## Run tests

```bash
npm test -- --watchAll=false
```
