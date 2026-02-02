# Vault Ops - Note Lint

Vault Ops - Note Lint handles markdown writing hygiene with command palette run and delivers lint issues summary as notice panel.

## Who it's for
- obsidian_plugin teams shipping plugin workflows
- Developers who want config-driven scaffolding and release-ready bundles

## What it does
Vault Ops - Note Lint provides a generated plugin scaffold for obsidian_plugin, including packaging, listing, and submission assets.

## Key features
- Config-driven plugin scaffold for obsidian_plugin
- Release-ready metadata, packaging checklist, and listing content
- Typed project baseline with lint, tests, and build scripts
- Optional analytics events hooks with opt-in guidance
- Storage helper scaffold for stateful workflows
- UI settings scaffold for user-configurable behavior

## Setup
- Install project dependencies and run the build.
- Review generated README and packaging checklist.
- Replace assets placeholders (icon and screenshots).
- Configure storage adapter keys/namespaces for your environment.
- Confirm analytics events are opt-in and privacy compliant.
- Run final lint/test/build and submit the release bundle.

## Privacy & Security
- Data collected: None by default (analytics events are local-only placeholders and disabled)
- Data storage: Local vault/plugin data only (no remote service by default)
- Deletion/uninstall: Uninstall/removal removes generated package files from your environment; Removing the plugin disables features; local plugin data remains in your vault until manually deleted

## Support
- Maintainer: YourCompany
- Website: https://example.com
- Email: support@example.com

## Platform-specific notes
- Keep `manifest.json` fields (`id`, `name`, `version`, `minAppVersion`) aligned with release artifacts.
- Release archive should contain `manifest.json`, `main.js`, and `styles.css` (if used by plugin UI).
- State clearly that data stays local in the vault by default and analytics hooks are opt-in placeholders.
- Include command palette usage and settings screenshots for community review.
