# Security

Prism Theme Studio is a browser-side DSH bundle. It registers one theme override layer with
the Harness theme service and adds one Settings page. It reads no files, starts no processes,
makes no network requests, and stores preferences only in the current browser's
`localStorage` under `dsh-prism-themes:preferences:v1`.

## Reporting a vulnerability

Please do not open a public issue for a security problem. Use GitHub's private vulnerability
reporting on this repository, or contact the maintainer through the profile linked in
`package.json`. Include the DSH version, the affected plugin version, and a minimal
reproduction.

## Supported versions

Only the latest published `1.x` release is supported with security fixes.
