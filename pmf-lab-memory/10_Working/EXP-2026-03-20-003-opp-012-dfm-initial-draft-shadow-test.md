# Experiment Card

## Metadata

- id: EXP-2026-03-20-003
- linked opportunity id: OPP-012
- title: DFM initial single-machine draft shadow test
- owner: Anthony + 小智
- due date: 2026-03-28
- result: pending
- next action: collect 3 to 5 historical initial single-machine DFM packs and lock the first output scope around mandatory pages only

## Hypothesis

If the agent receives the Cowain DFM rules plus a usable project input pack for an initial single-machine DFM, then it can produce a reviewable first draft with the correct page structure, enough usable page content, and a meaningful reduction in engineer drafting time.

## Core Validation Goal

1. Judge whether initial DFM drafting is a narrow, repeatable, and valuable enough wedge inside engineering design.
2. Measure whether the agent can reduce first-draft preparation time without breaking template compliance.
3. Identify which mandatory DFM pages can be generated from existing project inputs and which still depend too heavily on tacit engineer knowledge.

## Test Design

### Test type

- shadow test on historical or live-like initial single-machine DFM cases

### Scope boundary

- in scope: initial single-machine DFM only
- in scope: mandatory page structure, page content drafting, missing-information checklist, and reviewer-ready deck skeleton
- out of scope: full lifecycle maintenance automation, customer-feedback revision loop, and direct CAD screenshot generation from native design software
- out of scope: line-level DFM, full-version DFM, and automatic engineering calculations beyond clearly provided formulas or inputs

### Sample scope

- use 3 to 5 projects that already have an issued or near-issued initial single-machine DFM
- each project should include the DFM output plus enough inputs to reconstruct the draft
- prioritize projects with cleaner input packs over the most complex projects

### Comparison arms

- baseline arm: the historical engineer-authored initial DFM draft or the nearest first issuable version
- agent arm: an agent-assisted initial DFM draft created from the same input boundary

### Fixed comparison rules

- lock one template family before execution: Cowain initial single-machine DFM
- require the same mandatory-page set across all sampled projects
- use pre-exported 2D or 3D screenshots or images supplied by engineering; do not treat missing CAD rendering automation as a failure of the first wedge
- if a project lacks critical input fields, record the gap and let the agent output a missing-information checklist instead of inventing content
- evaluate template compliance and draft usability separately

### Execution steps

1. Select 3 to 5 historical projects with usable initial single-machine DFM packs.
2. Normalize each project into a structured input pack.
3. Lock the V1 mandatory-page list from the Cowain DFM rules.
4. Run the agent to produce the first draft deck content, required page order, and missing-information checklist.
5. Ask an engineer reviewer to mark each mandatory page as usable, usable with edits, or rewrite needed.
6. Compare agent-assisted drafting time and baseline manual effort as closely as possible.
7. Summarize pass, partial pass, or fail at both page level and experiment level.

## Success Criteria

### Primary gate

- 100% of sampled projects receive the correct initial single-machine DFM page structure and version metadata scaffold

### Draft usability

- at least 80% of mandatory pages are judged usable with minor edits only
- no more than 20% of mandatory pages require a full rewrite

### Efficiency

- median engineer time to reach a reviewable first draft is reduced by at least 40%
- at least 2 complete projects show a time reduction of at least 50%

### Decision rule

- pass: structure is correct in all complete cases, usability thresholds are met, and time-saving thresholds are met
- partial pass: structure is correct and reviewers find clear value, but time saving or page usability is below threshold
- fail: engineers still need to rebuild most mandatory pages manually, or missing-input dependence is too high to support a repeatable wedge

## Data Needed

- Cowain DFM rule source: /Users/anthony/Documents/Cowain/Agents/Conus-v2/A1工程部DFM制作规范（设备类）part1.pdf
- one editable Cowain initial single-machine DFM template if available
- 3 to 5 historical initial single-machine DFM documents
- project identifiers, version metadata, and customer or station naming fields
- BOM or product overview inputs
- Story version and CAD version references
- pre-exported 2D or 3D screenshots or page-ready images
- key process parameters, layout dimensions, action flow summaries, and module descriptions
- any available key standard-part list or selection results
- reviewer judgments from the responsible project engineer
- rough baseline drafting time or a reasonable reconstruction estimate for the initial manual draft

## Sample Input Pack Fields

- project id
- project name
- customer name
- station name
- DFM version target
- DFM template family
- CAD version
- Story version
- product overview and BOM summary
- key process parameters
- layout dimensions
- action flow summary
- module list
- key standard-part list
- image asset list
- known open questions

## Page-Level Review Labels

- pass: page is directly usable or needs only wording or layout touch-up
- partial: page structure is right but engineering must fill several missing fields or correct technical details
- fail: page needs full rewrite, major restructuring, or contains fabricated logic that cannot be trusted

## Risks And Controls

- risk: historical DFM packs are incomplete and make the agent look weaker than the real workflow
- control: choose the first 3 to 5 samples based on input completeness, not on project prestige

- risk: reviewers judge the draft by final-version standards instead of initial-draft standards
- control: lock the review rubric to the initial single-machine DFM template and score only mandatory pages

- risk: missing CAD screenshot automation turns into a false blocker
- control: treat page-ready screenshots as user-supplied inputs for V1 and judge only the drafting wedge

- risk: the experiment scope expands into full lifecycle maintenance too early
- control: exclude version-diff automation and customer-feedback revision handling from this first experiment

## Output Format

- one project-by-project comparison sheet
- one page-level usability summary
- one time-saving summary
- one conclusion: pass, partial pass, or fail
- one recommendation on whether to expand into DFM maintenance after the initial-draft wedge

## Working Assets

- DFM rules reference: /Users/anthony/Documents/Cowain/Agents/Conus-v2/A1工程部DFM制作规范（设备类）part1.pdf
