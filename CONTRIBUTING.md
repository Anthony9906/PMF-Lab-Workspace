# Collaboration Rules

This repository is used to track the AI + manufacturing PMF discovery workflow over a multi-month cycle.

## Working rule

- `main` should always reflect the latest accepted working state.
- Commit completed thinking, validated structure changes, and decision-relevant artifacts promptly.
- Do not commit raw local noise, editor settings, or disposable cache files.

## Branch rule

- Use `main` for small, low-risk updates such as memory updates, review notes, and roadmap edits.
- Use a `codex/<topic>` branch for larger restructures, experiment implementations, automation changes, or risky edits that may need comparison before merge.
- Merge back to `main` only after the branch reflects a coherent working result.

## Commit message convention

Use:

`type(scope): summary`

Recommended types:

- `memory`: updates to long-term memory or working memory
- `review`: opportunity reviews, scoring passes, or weekly reviews
- `experiment`: experiment plans, assets, or outcomes
- `strategy`: changes to scoring rules, operating model, or strategy definitions
- `docs`: repository documentation and guidance
- `chore`: repository maintenance and housekeeping

Examples:

- `memory(working): update opportunity pool v1.1`
- `review(pool): rescreen top opportunities against new strategy`
- `experiment(rfq): add first validation plan`
- `strategy(scoring): refine weighted rubric`
- `docs(repo): add collaboration rules`

## Pulling and syncing

- Pull before starting a new round of edits if the remote may have changed.
- Keep commits focused so later review can reconstruct why a decision changed.
- If a session produces both strategy changes and opportunity conclusions, split them into separate commits when practical.

## What belongs in git

- memory updates
- opportunity reviews
- experiment plans and outcomes
- reusable templates, rubrics, and decision rules
- source notes that are safe and appropriate to keep in the repo

## What should usually stay out of git

- disposable local files
- editor settings specific to one machine
- large temporary exports or duplicated snapshots unless they are deliberate artifacts
- sensitive customer data unless explicitly approved for storage in this repository
