# Vault Ops - Note Lint

Vault Ops - Note Lint handles markdown writing hygiene with command palette run and delivers lint issues summary as notice panel.

## Features

- Adds command: `Vault Ops - Note Lint: Run sample command`
- Includes settings tab scaffold
- Ready for Obsidian Community Plugin packaging

## Development

```bash
pnpm install
pnpm build
```

## Packaging

Build artifacts:
- `main.js`
- `manifest.json`
- `styles.css`


## UI Settings Module

- Settings tab is enabled and wired to plugin persistence.
- Extend settings fields in `main.ts` for your product controls.

## Storage Module

- Includes `storage.ts` helper for reading and writing local counters.
- Example usage is wired in `onload()` to show end-to-end usage.

## Analytics Events Module

- Includes `analytics.ts` stub with opt-in analytics gate (`FOF_ANALYTICS_OPT_IN`).
- Keep analytics disabled until explicit user consent is implemented.