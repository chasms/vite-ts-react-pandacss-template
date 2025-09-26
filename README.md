# Vite + React + TypeScript + PandaCSS

This template provides a minimal setup to get React working in Vite with:

- Typescript
- React
- PandaCSS
- HMR
- [ESLint rules](./eslint.config.ts)
- [VSCode settings](./.vscode/settings.json)

Additional Configurations for Copilot and other Agentic Codegen:

- [Copilot Instructions](./.github/copilot-instructions.md)
- Playwright, [Playwright MCP](https://github.com/microsoft/playwright-mcp), and the [Playwright MCP Chrome Extension](https://github.com/microsoft/playwright-mcp/blob/main/extension/README.md) - to enable Copilot to interact with and debug the frontend via the browser and development server
- [ESlint MCP](https://eslint.org/docs/latest/use/mcp)
- [Chrome Dev Tools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)

### Getting Started

```bash
npm install
npm run dev
```

##### Linting

```bash
npm run lint
```

or to run autofix (this will happen automatically on save but sometimes it's still useful):

```bash
npm run lintfix
```

##### Types

```bash
npm run typecheck
```

or to run a continuous typecheck in an open shell:

```bash
npm run typewatch
```
