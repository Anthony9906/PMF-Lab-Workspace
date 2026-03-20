# Skill Optimization Rules

## Purpose

Define when the team should update the shared `PMF Lab` skill and when it should update only the workspace memory.

This prevents two common mistakes:

- putting project-specific facts into the shared skill
- leaving reusable working methods trapped inside one workspace

## Core boundary

- Update the shared skill when the learning changes how the agent should work across many PMF projects.
- Update the workspace memory when the learning changes what is true in this PMF project.

## Update the skill when

- a reusable session-bootstrap pattern has become clear
- a stable context-loading rule should apply across future PMF projects
- a scoring, rescreening, or prioritization method has become a general working rule
- a repeatable deliverable pattern should be the default
- a recurring failure mode shows the skill needs a stronger guardrail
- a reusable A / B / C judgment rule becomes clearer
- a new reference file would help future PMF loops run faster or more consistently

## Do not update the skill when

- the change is only about the current project's opportunity pool
- the change is only about the current project's top candidate or main line
- the change depends on one customer's workflow, one company's org structure, or one temporary constraint
- the change is a raw note, early hypothesis, or one-off tactic
- the change is useful only inside this repository

## Update workspace memory when

- current opportunities are added, removed, rescored, or reframed
- current blockers, assumptions, or open questions change
- source evidence is collected
- experiment results or feedback are produced
- current roadmap, OKR interpretation, or project priorities shift
- a project-specific operating constraint becomes relevant

## Default decision test

Ask:

1. Is this a reusable operating method?
2. Would I want a future PMF project to inherit this by default?
3. Is it stable enough that automatic reuse is more helpful than risky?

If the answer is mostly yes, update the skill.
If the answer is mostly no, update workspace memory.

## Writing rules for skill changes

- Keep `SKILL.md` concise and general.
- Put detailed mechanisms into focused files under `references/`.
- Do not store current project facts inside the shared skill.
- Prefer adding one clear reference file over expanding one file into a long mixed document.
- Update agent metadata only when the trigger description or default prompt should truly change.

## Review cadence for skill improvement

- notice repeated friction during real PMF work
- record the issue in workspace memory or the skill change log
- decide whether the issue is project-specific or reusable
- promote reusable improvements into the shared skill
- log the reason for the change in the workspace-side skill change log

## Current stance

- project truth lives in workspace memory
- reusable PMF operating method lives in the shared skill
- workspace memory may explain why a skill change was made
- the shared skill should not become a hidden copy of the current project state
