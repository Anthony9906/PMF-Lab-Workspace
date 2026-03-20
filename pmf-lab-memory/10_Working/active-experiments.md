# Active Experiments

List only experiments that are in flight or waiting for review.

## Minimum fields

- experiment id
- linked opportunity
- hypothesis
- method
- required evidence
- success criteria
- owner
- status

## Active list

- experiment id: EXP-2026-03-19-001
- linked opportunity: OPP-011
- hypothesis: A constraint-based recommendation workflow for cylinder selection can already improve engineering selection speed and decision quality, and may create a downstream path toward standardization and procurement optimization.
- method: use the current in-house cylinder-selection work to compare requirement inputs, candidate filtering, recommendation explanations, engineering review results, and downstream standardization or procurement feedback
- required evidence: cylinder catalog structure, historical selections, selection constraints, reviewer feedback, engineering time-saving evidence, and at least one measurable standardization or cost-related metric
- success criteria: internal reviewers confirm the recommendation output is useful in the engineering workflow and can define one concrete next validation step for standardization or cost value
- current observations:
  - preferred-model hit rate is improving inside the current standard-part library workflow
  - new SKU introduction rate is decreasing as selection depends less on individual engineer habit
  - reuse rate across similar requirements is increasing as selection depends less on individual engineer habit
  - downstream engineering-change and communication reduction cannot yet be verified
- staged validation path:
  - stage 1 engineering speed: verify that the agent reduces selection time and preserves acceptable recommendation quality
  - stage 2 standardization: formalize KPI tracking around preferred-model hit rate and new SKU introduction rate, with reuse rate as a supporting indicator
  - stage 3 procurement value: test whether standardized recommendations also improve price, supplier choice, or lead-time outcomes
- next minimum procurement-side test:
  - compare agent-recommended cylinder choices with engineer-selected or historically used choices on price and supplier-option count for the same functional requirement
  - treat lead time as a follow-on metric unless it is already easy to retrieve from internal records
- owner: Anthony + 小智
- status: in progress

- experiment id: EXP-2026-03-20-002
- linked opportunity: OPP-011
- hypothesis: Agent-recommended cylinder models can preserve engineering usability while improving standardization and creating a first procurement-side advantage on price or supplier optionality.
- method: run a 10 to 20 case shadow test comparing engineer-selected baseline models with agent-recommended models for the same functional requirement
- required evidence: comparable case inputs, baseline model choices, preferred-model flags, price records, supplier-option counts, and engineering reviewer judgments
- success criteria: at least 80% engineering usability pass rate, improvement in preferred-model hit rate and new SKU control, and positive price or supplier-option signal in at least 30% of complete cases
- owner: Anthony + 小智
- status: in progress
- detail card: /Users/anthony/Documents/PMF-Lab-Workspace/pmf-lab-memory/10_Working/EXP-2026-03-20-002-opp-011-cylinder-standardization-procurement-shadow-test.md

- experiment id: EXP-2026-03-20-003
- linked opportunity: OPP-012
- hypothesis: Under the fixed Cowain initial single-machine DFM template, an agent can produce a reviewable first draft that preserves template compliance and materially reduces engineer drafting time.
- method: run a 3 to 5 project shadow test comparing historical initial DFM drafts with agent-assisted drafts built from the same project input packs
- required evidence: DFM rule source, one fixed template family, historical DFM packs, project input fields, page-ready images, reviewer judgments, and rough manual baseline effort
- success criteria: correct mandatory-page structure in all complete cases, at least 80% of mandatory pages usable with minor edits, and median drafting-time reduction of at least 40%
- owner: Anthony + 小智
- status: ready to launch
- detail card: /Users/anthony/Documents/PMF-Lab-Workspace/pmf-lab-memory/10_Working/EXP-2026-03-20-003-opp-012-dfm-initial-draft-shadow-test.md
