# Experiment Card

## Metadata

- id: EXP-2026-03-20-002
- linked opportunity id: OPP-011
- title: Cylinder standardization and procurement shadow test
- owner: Anthony + 小智
- due date: 2026-03-27
- result: pending
- next action: collect comparable sample cases and run the first price-plus-supplier-option comparison

## Hypothesis

If the agent recommends cylinder models from the internal standard-part library for the same functional requirement, then the output will preserve engineering usability, improve standardization metrics, and create a measurable procurement advantage on price or supplier optionality.

## Core Validation Goal

1. Compare the usability of agent-selected models in the engineering workflow.
2. Compare the difference between baseline and agent-selected models on supplier optionality and price.
3. Judge whether agent-based selection improves standard-part procurement strategy and cost outcome.

## Test Design

### Test type

- shadow test on historical or current cylinder-selection cases

### Sample scope

- use 10 to 20 cylinder requirement cases
- each case must include a clear functional requirement and the engineer-selected baseline model
- prioritize cases where price or supplier records can be retrieved quickly

### Comparison arms

- baseline arm: engineer-selected or historically used cylinder model
- agent arm: agent-recommended cylinder model under the same functional requirement and constraint boundary

### Fixed comparison rules

- compare only cases with the same functional intent
- do not allow the agent arm to win by relaxing performance, mounting, size, pressure, stroke, or environment constraints
- if multiple agent candidates exist, record the top recommendation and one backup recommendation
- when procurement data is missing, mark the case as incomplete rather than estimating

### Execution steps

1. Select 10 to 20 cylinder cases with usable requirement and baseline selection records.
2. Normalize each case into a structured requirement sheet.
3. Run the agent to generate the recommended model, backup option, and recommendation rationale.
4. Record whether engineering review considers the recommendation usable.
5. Compare baseline and agent choices on standardization and procurement metrics.
6. Summarize pass, partial pass, or fail at both case level and experiment level.

## Success Criteria

### Primary gate

- at least 80% of sampled cases are judged engineering-usable by internal reviewers

### Standardization success

- preferred-model hit rate is higher than baseline
- new SKU introduction rate is lower than baseline

### Procurement success

- at least 30% of complete cases show a better outcome on either price or supplier-option count without failing engineering usability

### Decision rule

- pass: primary gate is met and both standardization metrics improve, with at least one procurement metric showing positive signal
- partial pass: primary gate is met and standardization improves, but procurement signal is weak or incomplete
- fail: engineering usability drops below threshold or standardization does not improve

## Data Needed

- cylinder requirement inputs for each case
- baseline engineer-selected or historical model
- internal standard-part library and preferred-model flags
- agent recommendation output and rationale
- price records from ERP, supplier quotations, or reference tables
- supplier-option count for each comparable model
- reviewer judgment on engineering usability

## Sample Sheet Fields

- case id
- requirement summary
- key constraints
- baseline model
- baseline preferred-model status
- baseline price
- baseline supplier-option count
- agent recommended model
- agent backup model
- agent preferred-model status
- agent price
- agent supplier-option count
- engineering usability review
- standardization outcome
- procurement outcome
- notes

## Scoring Logic

### Engineering usability

- pass: reviewer accepts direct use or minor parameter confirmation only
- partial: reviewer accepts the direction but needs manual adjustment
- fail: reviewer rejects the recommendation as not usable

### Standardization outcome

- positive: agent recommendation increases preferred-model usage, reduces new SKU introduction, or increases reuse under similar requirements
- neutral: no material difference from baseline
- negative: agent recommendation creates more fragmentation or non-preferred usage

### Procurement outcome

- positive: lower price or more supplier options under the same requirement
- neutral: no material difference
- negative: higher price and fewer supplier options without offsetting engineering reason

## Risks And Controls

- risk: baseline cases are not normalized enough for fair comparison
- control: create one structured requirement sheet before running the agent

- risk: price records are outdated or inconsistent
- control: tag each record with source and date, and exclude stale records from procurement scoring

- risk: reviewers over-credit agent outputs because they know the expected result
- control: ask reviewers to judge usability first, before seeing procurement comparison

## Output Format

- one comparison table covering all complete cases
- one short summary of aggregate metrics
- one conclusion: pass, partial pass, or fail
- one recommendation for the next expansion step after cylinders

## Working Assets

- sample sheet template: /Users/anthony/Documents/PMF-Lab-Workspace/pmf-lab-memory/10_Working/OPP-011-cylinder-shadow-test-sample-sheet-template.csv
- sample collection guide: /Users/anthony/Documents/PMF-Lab-Workspace/pmf-lab-memory/10_Working/OPP-011-cylinder-shadow-test-sample-collection-guide.md
