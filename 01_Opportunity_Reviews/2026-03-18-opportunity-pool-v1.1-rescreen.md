# Opportunity Pool V1.1 Rescreen

## Purpose

Reassess the current opportunity pool against the updated strategy:

- small and focused wedge
- close to money
- easy to validate with a two-person team
- suitable for a 3-month A / B / C outcome cycle

This is not the final primary-project decision.
This is the formal rescreen that decides which opportunities should enter the next round of deeper analysis.

## Strategy gates

- narrow enough to validate without building a platform
- value close to revenue, cost, quality loss, or customer-response speed
- minimum validation path is realistic with available samples and domain review
- capable of producing A, B, or C evidence within 3 months

## Rescreen result

### Enter formal top-6 analysis

- OPP-011 standard-part selection recommendation for procurement optimization
- OPP-001 RFQ and quotation copilot for custom parts
- OPP-002 NCR and CAPA draft assistant from defect evidence
- OPP-004 PPAP and FAI package assembly assistant
- OPP-007 customer complaint evidence pack and response draft
- OPP-009 supplier drawing and spec change checker

### Keep as reserve / observe

- OPP-003 engineering change to work-instruction update copilot
- OPP-006 ECO, BOM, and routing impact summarizer
- OPP-010 shift handover and production anomaly summarizer

### Exclude from current cycle

- OPP-005 machine downtime troubleshooting copilot
- OPP-008 production scheduling exception copilot

## Weighted rescreen table

Scoring dimensions:

- strategic fit 25%
- closeness to money 25%
- validation difficulty 20%
- replicability 15%
- asset accumulation value 15%

Scores use a 1-5 scale and are converted to a weighted score out of 100.

| id | title | strategic fit | closeness to money | validation difficulty | replicability | asset value | weighted score | rescreen decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OPP-011 | standard-part selection recommendation for procurement optimization | 5 | 5 | 4 | 4 | 5 | 93 | enter top-6 |
| OPP-001 | RFQ and quotation copilot for custom parts | 4 | 5 | 4 | 4 | 4 | 85 | enter top-6 |
| OPP-002 | NCR and CAPA draft assistant from defect evidence | 4 | 4 | 4 | 4 | 4 | 80 | enter top-6 |
| OPP-004 | PPAP and FAI package assembly assistant | 4 | 4 | 4 | 3 | 4 | 77 | enter top-6 |
| OPP-007 | customer complaint evidence pack and response draft | 4 | 4 | 3 | 3 | 4 | 73 | enter top-6 |
| OPP-009 | supplier drawing and spec change checker | 4 | 4 | 3 | 3 | 4 | 73 | enter top-6 |
| OPP-003 | engineering change to work-instruction update copilot | 4 | 3 | 3 | 4 | 4 | 71 | reserve |
| OPP-005 | machine downtime troubleshooting copilot | 4 | 4 | 2 | 3 | 4 | 69 | exclude current cycle |
| OPP-006 | ECO, BOM, and routing impact summarizer | 4 | 3 | 3 | 3 | 4 | 68 | reserve |
| OPP-008 | production scheduling exception copilot | 3 | 4 | 2 | 4 | 3 | 64 | exclude current cycle |
| OPP-010 | shift handover and production anomaly summarizer | 3 | 2 | 5 | 3 | 3 | 63 | reserve |

## Value-difficulty view

### High value, lower validation difficulty

- OPP-011
- OPP-001
- OPP-002
- OPP-004

### High value, medium validation difficulty

- OPP-007
- OPP-009

### Medium value, medium validation difficulty

- OPP-003
- OPP-006

### Lower money proximity, easy validation

- OPP-010

### High value, high validation difficulty

- OPP-005
- OPP-008

## Per-opportunity judgment

### OPP-011

- best fit with current strategy because it is already aligned with the named strategic anchor
- value is close to procurement cost, standardization, and sourcing efficiency
- narrow enough to test with catalogs, prior BOMs, and recommendation logic

### OPP-001

- close to revenue and response speed
- validation path can start with RFQ parsing, scope extraction, and quote-draft support
- strong candidate if sample RFQ packages are available quickly

### OPP-002

- quality-document workflows are repetitive and well-bounded
- easier to produce A-class evidence quickly
- buyer distance to budget is acceptable, though less direct than procurement or quoting

### OPP-004

- documentation burden is clear and measurable
- input/output boundaries are structured enough for early validation
- slightly lower replicability than broader quality workflows

### OPP-007

- close to customer-risk and response urgency
- good fit if complaint records and traceability material are available
- value is meaningful, but workflow repeatability may vary by customer base

### OPP-009

- narrow and explainable wedge around supplier-change risk
- close enough to procurement and quality cost to justify validation
- enters top-6 because it is smaller and more strategy-aligned than broader engineering-change analysis

### OPP-003

- still attractive, but less directly tied to money than the top-6 set
- good first reserve if internal engineering-document access is much easier than supplier-side data access

### OPP-006

- value exists, but the workflow can expand into a broad cross-system analysis product too quickly
- keep as reserve until we know data access and buyer urgency

### OPP-010

- easiest to validate, but weak on money proximity
- better suited as a lightweight A-class learning case than as a main-line candidate

### OPP-005

- downtime value is high, but real validation is too dependent on integration, tribal knowledge, and safety constraints
- does not fit the current "easy to validate" requirement

### OPP-008

- scheduling is close to money but tends to require deeper system entanglement and organizational buy-in
- too heavy for the current two-person validation cycle

## Key implication

The top-6 set should now be treated as the formal candidate set for the next step:

- detailed scenario deep dives
- value-difficulty matrix refinement
- primary project vs lightweight validation vs reserve decision

The reserve set should remain visible, but not consume primary analysis bandwidth unless new evidence changes their position.
