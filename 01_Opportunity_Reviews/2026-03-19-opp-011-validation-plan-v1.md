# OPP-011 Validation Plan V1

## Purpose

Turn the current cylinder-selection exploration into a decision-grade validation loop for `OPP-011 standard-part selection recommendation for procurement optimization`.

This version is based on:

- Anthony formal interview 01
- existing internal cylinder-selection work
- the PMF-lab rule of preferring a small, near-money, easy-to-validate wedge

This is a working validation plan, not a PMF conclusion.

## Validation focus

| Item | V1 choice |
| --- | --- |
| opportunity | `OPP-011` standard-part selection recommendation for procurement optimization |
| first wedge | cylinder selection |
| target company type | non-standard equipment manufacturer with internal engineering and procurement collaboration |
| primary workflow slice | from requirement definition to candidate shortlisting to final part selection |
| current maturity | internal exploration already started, early positive signal exists |
| validation goal | prove that a recommendation workflow can improve selection efficiency and decision quality in a real internal scenario |

## Problem statement

Today, cylinder selection depends heavily on personal experience and historical habits.
Selection mistakes or inconsistency can create:

- design changes and delayed delivery
- extra engineering and coordination effort
- dead inventory caused by non-standard choices
- weaker standardization across projects
- higher procurement complexity and cost

## Validation table

| Dimension | V1 design |
| --- | --- |
| validation objective | confirm whether the cylinder-selection workflow is painful, repeatable, and valuable enough to justify a broader standard-part recommendation product |
| target users | mechanical engineers, electrical engineers, sourcing engineers, purchasers |
| likely buyer | engineering manager, procurement manager, or business owner |
| likely approver | shared engineering + procurement approval chain until ownership is proven |
| user job to be done | given functional requirements and project constraints, choose a short list of acceptable cylinders and justify the final recommendation |
| value hypothesis H1 | the system can reduce selection time while keeping or improving recommendation quality |
| value hypothesis H2 | the system can improve standardization by steering users toward preferred brands, preferred specs, and reusable choices |
| value hypothesis H3 | the system can reduce downstream procurement friction by making cost, lead time, and substitution tradeoffs explicit earlier |
| falsification condition | if reviewers still rely mainly on senior experience and do not trust or use the recommendation output, the wedge is weaker than expected |
| smallest useful output | a requirement-to-candidate recommendation sheet with short-list ranking, explanation, tradeoffs, and rule-based warnings |
| review mode | human-in-the-loop, recommendation only, no automatic final selection |

## Scope boundaries

| In scope for V1 | Out of scope for V1 |
| --- | --- |
| one category: cylinders | multiple categories at once |
| recommendation and explanation | full PLM or ERP integration |
| preferred-brand and preferred-spec logic | automatic purchase order generation |
| cost, lead-time, and standardization tradeoffs | full catalog coverage across all vendors |
| internal pilot with historical and live-like cases | direct customer-facing productization |

## Workflow to validate

| Step | Current manual mode | V1 validation output |
| --- | --- | --- |
| 1. capture需求 | engineer describes load, stroke, installation, speed, environment, brand preference | structured requirement form |
| 2.筛选候选 | engineer or buyer manually searches catalogs and old BOMs | filtered candidate set |
| 3.比较取舍 | people compare specs, price, stock, lead time, and familiarity | ranked short list with tradeoff explanation |
| 4.确认风险 | senior engineer checks hidden mismatch or non-standard choice | warnings and missing-information checklist |
| 5.形成决策 | final decision depends on经验 and coordination | review-ready recommendation summary |

## Success metrics

| Metric type | Proposed metric | Pass threshold for V1 |
| --- | --- | --- |
| efficiency | time to produce a usable candidate shortlist | at least `30%` faster than current manual baseline on comparable cases |
| quality | reviewer acceptance of top `3` recommendations | at least `70%` of cases judged as usable without major rework |
| standardization | share of outputs aligned to preferred brands or standard choices | better than current baseline or clearly explainable improvement in review |
| procurement relevance | presence of cost or lead-time tradeoff information in output | visible in `100%` of tested cases |
| trust | reviewer willingness to keep using the workflow | at least `3` internal stakeholders agree to continue to next stage |

## Evidence needed

| Evidence | Minimum needed for V1 | Why it matters |
| --- | --- | --- |
| cylinder catalogs | `20-50` representative SKUs with structured attributes | build the first comparable candidate universe |
| historical selections | `10-20` past cases or BOM fragments | compare recommendations against real decisions |
| selection rules | preferred brands, banned brands, price bands, lead-time expectations, standardization rules | make the output reflect real business logic |
| requirement inputs | real input fields from engineering requests | ensure the workflow starts from reality rather than lab assumptions |
| reviewer feedback | engineering + procurement review comments | test usefulness and trust, not only technical matching |

## Test design

| Test | Design | Expected learning |
| --- | --- | --- |
| T1 historical replay | run the workflow on past cylinder-selection cases and compare output with actual chosen parts | whether the model can reproduce or improve historical decisions |
| T2 reviewer blind review | show recommendation sheets to engineers and buyers without telling them the chosen historical answer first | whether the output is independently persuasive |
| T3 exception case test | include edge cases with conflicting constraints, unusual sizes, or supplier limitations | whether the workflow fails gracefully and asks for missing inputs |
| T4 procurement tradeoff test | force comparison where cheapest, fastest, and most standardized options differ | whether money-path logic is visible and useful |

## Two-week execution plan

| Time | Action | Owner | Deliverable |
| --- | --- | --- | --- |
| Day 1-2 | lock the exact cylinder family and V1 requirement fields | Anthony + 小智 | V1 input schema |
| Day 2-4 | collect sample catalogs, historical cases, and current selection rules | Anthony | V1 sample pack |
| Day 4-6 | normalize catalog fields and define recommendation logic | 小智 + Anthony | comparable SKU table and rule set |
| Day 6-8 | run historical replay on the first batch of cases | 小智 | case-by-case recommendation outputs |
| Day 8-10 | conduct internal review with engineering and procurement stakeholders | Anthony | reviewer notes and decision gaps |
| Day 10-12 | revise workflow based on objections and weak cases | 小智 + Anthony | V1.1 recommendation workflow |
| Day 12-14 | summarize evidence, metrics, and next-step recommendation | 小智 | validation summary |

## Key open questions to resolve during V1

| Question | Why it matters |
| --- | --- |
| who is the true final decision owner | decides where budget and adoption path sit |
| what is the sharpest first value anchor: cost, speed, or standardization | decides how the pilot should be sold internally |
| how consistent are historical cylinder choices | determines whether rule learning is possible or whether tribal knowledge is too fragmented |
| what is the next category after cylinders | determines whether this is a narrow tool or a scalable product wedge |

## Decision rule after V1

| Result class | Meaning | Next move |
| --- | --- | --- |
| A-class | cylinder workflow is real, reviewers find value, but commercialization path is not yet proven | continue to second category or deeper internal pilot |
| B-class candidate | workflow is used in a real project loop, reviewers trust it, and measurable ROI is visible | prepare incubation case and broader deployment design |
| C-class | recommendation quality or trust is too weak, or selection logic is too inconsistent | stop or narrow to a different category or sub-workflow |

## Current recommendation

`OPP-011` should remain the primary line.

The right near-term objective is not to prove a full standard-part platform.
It is to prove one narrow decision loop:

- requirements can be structured
- candidates can be filtered and ranked
- tradeoffs can be explained
- engineers and procurement both find the result useful enough to continue

If this loop holds for cylinders, the next PMF question becomes whether the method transfers to the second category with acceptable additional effort.
