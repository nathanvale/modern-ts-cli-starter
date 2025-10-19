# modern-ts-cli-starter

Modern TypeScript CLI: Node 22.20 ESM, tsc-only build, ESLint v9 flat, Prettier 3, Changesets, env via `--env-file`.

## Quick start

```bash
pnpm install
pnpm build
node --env-file=.env ./dist/cli.js --help
```

## Commands

- `pnpm build` — Compile TypeScript to `dist/`
- `pnpm dev -- <cmd>` — Build and run CLI with args
- `pnpm lint` — Run ESLint
- `pnpm format` — Format with Prettier
- `pnpm version:gen` — Create a changeset for versioning
- `pnpm release` — Publish to npm (triggered by CI after changeset PR merge)

## CLI Usage

```bash
# Help
modern-cli --help

# Greet someone
modern-cli greet --name Nathan

# Show environment
MY_STARTER_TOKEN=secret modern-cli env
```

## License

MIT
