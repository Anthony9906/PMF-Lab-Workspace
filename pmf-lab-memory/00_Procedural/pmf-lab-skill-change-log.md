# PMF Lab Skill Change Log

## Purpose

Track important changes to the `PMF Lab` skill so the workspace can explain:

- what changed
- why it changed
- which project needs drove the change
- what should remain stable in future iterations

This file is the workspace-side explanation page for the shared skill.

## 2026-03-19 Upgrade

### Why this upgrade was needed

The original `PMF Lab` skill was good enough for generic opportunity discovery, but it was too thin for the current PMF lab operating model.

It lacked explicit guidance for:

- new-session bootstrap from repo memory
- progressive context loading
- working-set control to avoid information explosion
- first-pass screening with the current weighted logic
- A / B / C outcome classification
- deliverables aligned to the current PMF validation mechanism

### Design decision

Keep `SKILL.md` concise and reusable for any mid-term PMF exploration project.

Move detailed mechanisms into `references/` so the skill stays:

- easy to trigger
- stable across projects
- cheap to load into context
- extensible without bloating the main skill file

### What changed

#### 1. SKILL.md was rewritten

The skill body now focuses on:

- core rules
- session bootstrap
- operating loop
- reference-loading guidance
- deliverable expectations

It no longer tries to carry all detailed mechanisms inline.

#### 2. Session bootstrap became an explicit mechanism

A new reference was added for session startup.

It defines:

- bootstrap order
- default startup pack
- task-specific loading
- stop rule
- end-of-session update rule

This is the core mechanism for rebuilding context in new daily conversations.

#### 3. Working-set control was strengthened

The memory architecture reference now explicitly states:

- `10_Working` should stay short
- detailed reasoning should move to review files
- raw materials should move to source files
- outcomes and corrections should move to feedback files

This is the core anti-information-explosion mechanism.

#### 4. Workflow was updated

The skill workflow now reflects the actual PMF lab funnel more accurately:

- capture
- normalize
- first-pass screen
- candidate-set decision
- deep dive
- hypothesize
- validate
- evaluate
- promote / retire

This is more aligned with the current lab than the earlier generic discovery loop.

#### 5. Scoring logic was updated

The scoring reference now uses the weighted first-pass model:

- strategic fit 25%
- closeness to money 25%
- validation difficulty 20%
- replicability 15%
- asset accumulation value 15%

This replaced the earlier generic multi-factor score as the default rescreening logic.

#### 6. A / B / C outcome framework was added

A new reference now defines:

- A-class cognitive validation
- B-class closed-loop validation
- C-class high-quality falsification

This matters because the PMF lab should reward learning quality, not only apparent wins.

#### 7. Agent metadata was updated

The skill's UI metadata and default prompt were updated so the skill now emphasizes:

- repo-based memory bootstrap
- first-pass screening
- A / B / C outcomes
- five-layer memory maintenance

## Files changed in the shared skill

- `/Users/anthony/.codex/skills/pmf-lab/SKILL.md`
- `/Users/anthony/.codex/skills/pmf-lab/agents/openai.yaml`
- `/Users/anthony/.codex/skills/pmf-lab/references/memory-architecture.md`
- `/Users/anthony/.codex/skills/pmf-lab/references/opportunity-workflow.md`
- `/Users/anthony/.codex/skills/pmf-lab/references/scoring-model.md`
- `/Users/anthony/.codex/skills/pmf-lab/references/session-bootstrap.md`
- `/Users/anthony/.codex/skills/pmf-lab/references/outcome-framework.md`

## What should stay stable in future iterations

- `SKILL.md` should remain concise and general.
- Detailed mechanisms should keep moving into focused reference files.
- Project-specific facts should stay in the workspace memory, not in the shared skill.
- The skill should define a reusable PMF operating method, not a frozen project state.

## Likely future optimization areas

- add a reference for interview planning and evidence capture
- add a reference for weekly review and quarterly PMF review
- refine promotion rules from working memory into canonical knowledge
- refine deliverable templates for candidate review, experiment plans, and A / B / C summaries

## Relationship to workspace memory

The skill defines the reusable operating method.

The workspace memory defines the current project state.

The skill should explain how to work.
The workspace should explain what is currently true.

## Related procedural file

- See [`skill-optimization-rules.md`](/Users/anthony/Documents/PMF-Lab-Workspace/pmf-lab-memory/00_Procedural/skill-optimization-rules.md) for the decision rules that determine when to update the shared skill versus only updating workspace memory.
