# OPP-011 Sample Collection Guide

This guide supports the shadow test in:
[EXP-2026-03-20-002-opp-011-cylinder-standardization-procurement-shadow-test.md](/Users/anthony/Documents/PMF-Lab-Workspace/pmf-lab-memory/10_Working/EXP-2026-03-20-002-opp-011-cylinder-standardization-procurement-shadow-test.md)

Template file:
[OPP-011-cylinder-shadow-test-sample-sheet-template.csv](/Users/anthony/Documents/PMF-Lab-Workspace/pmf-lab-memory/10_Working/OPP-011-cylinder-shadow-test-sample-sheet-template.csv)

## Collection Goal

Build a comparable case set for cylinder selection so the team can compare:

- engineer-selected baseline models
- agent-recommended models
- standardization outcomes
- first procurement-side signals

## Core Logic And Goal

1. Compare whether the agent-selected model is engineering-usable.
2. Compare whether the agent-selected model changes supplier optionality and price relative to the baseline choice.
3. Use those comparisons to judge whether the agent is improving standard-part procurement strategy and cost.

## Recommended Sample Size

- minimum: 10 cases
- preferred: 15 to 20 cases

## Case Selection Rules

- choose cases with clear functional requirements
- choose cases where the baseline engineer-selected model is known
- prioritize cases where price or supplier data can be retrieved quickly
- avoid highly special cases that depend on one-off customer constraints unless they are common enough to recur
- keep one requirement family together when possible so reuse effects are visible

## Recommended Collection Sequence

1. Pull candidate cases from recent or historical cylinder-selection work.
2. Exclude cases with ambiguous requirements or missing baseline selections.
3. Normalize the remaining cases into a short requirement summary and key constraint set.
4. Mark whether each baseline model is already a preferred model.
5. Fill procurement fields only from traceable internal sources.
6. Run the agent after the baseline row is prepared.
7. Ask engineering reviewers to judge usability before showing procurement comparison.

## Field Notes

- `case_id`: stable identifier for each sample
- `requirement_summary`: one-sentence functional summary
- `key_constraints`: critical constraints such as bore, stroke, mounting, pressure, environment, speed, or brand restrictions
- `baseline_model`: engineer-selected or historically used model
- `baseline_model_source`: where the baseline came from, such as BOM, drawing note, engineer record, or historical order
- `baseline_is_preferred_model`: `yes` or `no`
- `baseline_is_new_sku`: `yes` or `no`
- `baseline_price`: use a traceable number only
- `baseline_price_currency`: usually `CNY`
- `baseline_price_source`: ERP, quotation, vendor table, or other traceable source
- `baseline_supplier_option_count`: count only realistic suppliers, not theoretical catalog availability
- `agent_recommended_model`: top recommendation
- `agent_backup_model`: second recommendation when available
- `agent_reason_summary`: short explanation of why the recommendation fits
- `agent_is_preferred_model`: `yes` or `no`
- `agent_introduces_new_sku`: `yes` or `no`
- `agent_price`: traceable internal price only
- `agent_price_currency`: usually `CNY`
- `agent_price_source`: same rule as baseline
- `agent_supplier_option_count`: realistic supplier count
- `engineering_usability_review`: `pass`, `partial`, or `fail`
- `engineering_review_notes`: concise reviewer comment
- `standardization_outcome`: `positive`, `neutral`, or `negative`
- `procurement_outcome`: `positive`, `neutral`, `negative`, or `incomplete`
- `data_completeness`: `complete`, `partial`, or `missing`
- `next_action`: what is needed if the row is incomplete
- `notes`: anything worth preserving

## Minimal Judgment Rules

### Engineering usability

- `pass`: can be used directly or with very minor confirmation
- `partial`: usable direction, but manual adjustment is still needed
- `fail`: not usable for the stated requirement

### Standardization outcome

- `positive`: preferred-model usage improves, new SKU introduction is avoided, or reuse is improved
- `neutral`: no clear difference
- `negative`: more fragmentation or less preferred usage

### Procurement outcome

- `positive`: lower price or more supplier options
- `neutral`: no material difference
- `negative`: higher price and fewer supplier options
- `incomplete`: missing data prevents comparison

## Practical Collection Plan

### Batch 1

- collect 5 easiest cases with complete engineering and procurement traces
- use this batch to test whether the template fields are too heavy
- use the minimum-plan file and minimum sheet first:
  - /Users/anthony/Documents/PMF-Lab-Workspace/pmf-lab-memory/10_Working/OPP-011-batch-1-minimum-sample-plan.md
  - /Users/anthony/Documents/PMF-Lab-Workspace/pmf-lab-memory/10_Working/OPP-011-batch-1-minimum-sample-sheet.csv

### Batch 2

- expand to 10 to 20 total cases after the first batch exposes missing fields or unclear judgment rules

## Likely Data Sources

- historical BOMs
- cylinder selection notes
- engineer chat or handoff records
- internal preferred-part library
- ERP purchase records
- supplier quotation records

## What To Avoid

- mixing different functional requirements into one comparison
- comparing agent output against an unverified or low-quality baseline
- using old price data without source tagging
- judging procurement value before engineering usability is checked
