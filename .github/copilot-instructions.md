# E-Friction project instructions

## Understand the project first

- Inspect the relevant Django model, view, template, static asset, URL, and deployment configuration before proposing or editing behavior.
- Preserve the existing Django architecture. The site currently uses server-rendered templates, Django ORM models, PostgreSQL on Railway, and static/media files; do not introduce React, DRF, Docker, or new services without a concrete requirement.
- Treat the production database and Railway deployment as protected. Never run production writes, migrations, deploys, or destructive operations without explicit approval for that specific action.
- Never display, copy into source, or report secrets. Use environment-variable names and ask the user to authenticate through the supported UI when needed.

## Design and implementation

- Make small, focused changes that solve the root cause and preserve existing behavior.
- Follow the nearby Python, Django, HTML, CSS, and JavaScript conventions. Keep Django ORM access in the existing application layer and use templates for server-rendered pages.
- Add or update tests for behavior changes when a test framework or suitable test pattern exists. Do not claim tests ran unless they actually ran.
- Update directly related documentation when setup, operation, or deployment behavior changes.
- Keep product and certificate content consistent with the database-backed Django models. Do not silently add static-file fallbacks that override admin-managed records.
- Validate inputs, permissions, file handling, and error paths. Do not hide failures with broad exception handling or success-shaped defaults.

## Workflow

1. Establish the requested outcome, inspect the worktree, and trace the relevant implementation before editing.
2. For complex work, have the Project Architect produce a bounded plan, then delegate only independent specialist tasks that need separate context.
3. Implement the smallest complete change. Ask before adding dependencies, changing production data, deploying, committing, or pushing.
4. Run the narrowest relevant existing checks, inspect their actual results, and report any gaps or failures.
5. Review the final diff for unrelated changes, secrets, and regressions. Preserve pre-existing work and do not revert changes you did not make.

## Validation and deployment

- The project has no established dedicated test suite; start with `python manage.py check` and add/run focused Django tests when appropriate.
- Use `python manage.py makemigrations --check --dry-run` when a model change could require a migration.
- Review `README-DEPLOY.md`, `Procfile`, and `railway.json` before changing deployment behavior.
- Never deploy to Railway production, run production migrations, alter production data, or invoke destructive production commands without explicit approval.
- Never commit or push unless explicitly requested.
