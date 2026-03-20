# OPP-011 V1 Input And Sample Checklist

## Purpose

Define the minimum structured inputs and sample-collection checklist for the first `OPP-011` validation cycle.

This document is designed for the cylinder-selection wedge only.
It supports four immediate tasks:

- collecting real input fields from engineering and procurement
- structuring the first comparable cylinder catalog dataset
- assembling historical cases for replay testing
- preparing reviewer feedback collection

## Use rule

For V1, do not chase full coverage.
Only collect the minimum fields needed to:

- reconstruct a real selection request
- generate a short list
- explain the recommendation
- compare against historical decisions

## A. Requirement Input Schema

These are the fields the recommendation workflow should accept from the requester.

### A1. Mandatory fields

| Field | Description | Example | Why required |
| --- | --- | --- | --- |
| request_id | unique case id | CY-REQ-001 | traceability |
| project_id | linked project or equipment id | PJ-2026-032 | tie back to real project |
| application_function | the cylinder's job in the mechanism | clamp / push / lift / eject | defines selection context |
| motion_type | linear push, pull, clamp, stop, positioning | push | narrows the selection logic |
| required_stroke_mm | target stroke | 100 | core sizing input |
| load_direction | pushing / pulling / both | pushing | affects force logic |
| effective_load_n | estimated load | 350 N | core sizing input |
| supply_pressure_mpa | available air pressure range | 0.5-0.7 MPa | determines achievable force |
| target_speed | required speed or cycle time | 200 mm/s | impacts flow and cushioning |
| mounting_style | install method | front flange / foot / trunnion | mechanical compatibility |
| installation_space_limit | envelope constraints | max length 320 mm | filters viable models |
| environment_condition | dust, oil mist, washdown, temperature | light dust | affects series choice |
| sensor_need | whether cylinder sensors are needed | yes | affects accessories and compatible series |

### A2. Strongly recommended fields

| Field | Description | Example | Why useful |
| --- | --- | --- | --- |
| duty_cycle | continuous, intermittent, frequency | 20 cycles/min | affects durability and heat |
| shock_or_end_impact | whether impact is significant | medium | affects cushioning need |
| side_load_or_moment | presence of偏载 or moment load | low | avoids hidden mismatch |
| orientation | horizontal / vertical / angled | vertical | affects gravity considerations |
| accuracy_need | rough actuation or controlled stop | rough actuation | determines whether cylinder is even suitable |
| preferred_brand | preferred vendor or approved list | SMC / Airtac | standardization and procurement logic |
| banned_brand | disallowed vendor | none | compliance and past issue avoidance |
| target_cost_limit | expected unit-price ceiling | <= 480 RMB | procurement decision support |
| lead_time_limit | latest acceptable delivery window | <= 2 weeks | money-path relevance |
| quantity | quantity per machine or project | 4 | useful for procurement impact |
| replacement_or_new_design | whether it is reuse or new design | new design | affects standardization logic |

### A3. Optional but high-value fields

| Field | Description | Example | Why useful |
| --- | --- | --- | --- |
| existing_reference_model | current known similar model | CDQ2B32-100DZ | helps compare with legacy choice |
| control_constraints | valve, voltage, control restrictions | standard pneumatic only | integration check |
| customer_or_project_standard | customer-approved brand or standard | Apple preferred list | external constraint |
| lifecycle_priority | cost / speed / standardization / availability | standardization first | clarifies decision anchor |
| notes | free-text engineering context | avoid side sensor interference | catches hidden constraints |

## B. Derived Parameter Fields

These should not always be manually entered.
They can be calculated or inferred during validation and must be recorded explicitly.

| Field | Description | Why it matters |
| --- | --- | --- |
| safety_factor | margin used in sizing | makes logic auditable |
| target_force_n | computed required force after margin | links raw load to bore sizing |
| candidate_bore_range | acceptable bore range | makes screening explainable |
| cushioning_requirement | none / rubber / air cushion | prevents impact issues |
| environment_risk_flag | contamination or temperature warning | exposes hidden failure risks |
| standardization_score | degree of fit to preferred series | connects to business value |
| procurement_tradeoff_note | cost, stock, and lead-time tradeoff summary | ties recommendation to money |

## C. Cylinder Catalog SKU Schema

This is the minimum structured field set for the first comparable catalog table.

### C1. Mandatory SKU fields

| Field | Description |
| --- | --- |
| sku_id |
| brand |
| series |
| model |
| bore_mm |
| stroke_mm_range_or_options |
| action_type |
| mounting_options |
| cushioning_type |
| sensor_support |
| operating_pressure_range |
| overall_length_or_envelope |
| unit_price |
| normal_lead_time |
| approved_or_preferred_flag |

### C2. Recommended SKU fields

| Field | Description |
| --- | --- |
| body_material |
| temperature_range |
| environment_rating |
| port_size |
| available_accessories |
| stock_status |
| substitution_series |
| vendor_rank |
| historical_usage_count |
| notes_on_known_issues |

## D. Historical Case Schema

Each replay case should be structured so the team can compare recommendation output with the real past decision.

### D1. Mandatory case fields

| Field | Description |
| --- | --- |
| case_id |
| project_id |
| request_date |
| requesting_team |
| application_function |
| known_input_requirements |
| actual_selected_model |
| actual_selected_brand |
| selection_owner |
| selection_reason_if_known |
| downstream_result_if_known |

### D2. Strongly recommended case fields

| Field | Description |
| --- | --- |
| actual_unit_price |
| actual_lead_time |
| whether_design_change_occurred |
| whether_procurement_issue_occurred |
| whether_inventory_issue_occurred |
| whether_customer_or_project_standard_applied |
| whether_alternative_models_were_considered |
| related_BOM_or_drawing_link |

## E. Reviewer Feedback Schema

Use one lightweight review form per case.

| Field | Description |
| --- | --- |
| review_id |
| case_id |
| reviewer_role |
| reviewer_name |
| top_recommendation_acceptable | yes / no |
| top_3_recommendations_acceptable | yes / no |
| missing_key_constraint | free text |
| wrong_assumption | free text |
| trust_level_1_to_5 |
| would_continue_using | yes / no |
| comments |

## F. Sample Collection Checklist

Collect the first batch in this order.

### F1. First sample pack

| Item | Minimum target | Owner suggestion | Status |
| --- | --- | --- | --- |
| cylinder catalog pages or structured tables | `20-50` representative SKUs | procurement or standard-part library owner | pending |
| historical selection cases | `10-20` cases | engineering + BOM data owner | pending |
| preferred-brand or approved-vendor rules | at least `1` current rule source | procurement or engineering manager | pending |
| price references | current or recent pricing for sampled SKUs | procurement | pending |
| lead-time references | current or recent supplier lead times | procurement | pending |
| sample requirement forms or design requests | `5-10` real requests | engineering | pending |
| reviewer list | at least `3` stakeholders | Anthony | pending |

### F2. Good sample selection rules

- include both easy and difficult cases
- include at least `2-3` cases with conflicting cost vs standardization tradeoffs
- include at least `2` cases where a later design change or procurement issue happened
- include at least `2` cases from different project types if available
- avoid using only perfect or fully documented cases

### F3. Exclude for V1

- cases missing both final selected model and core requirement context
- rare one-off mechanisms that are not repeatable
- cases that need major supplier-private data unavailable to the internal team

## G. Folder-Level Packaging Suggestion

The sample pack can be assembled in a simple structure like this:

```text
OPP-011-V1/
  01_requirements/
  02_catalogs/
  03_historical_cases/
  04_pricing_leadtime/
  05_rules_and_preferences/
  06_reviewer_feedback/
```

## H. Immediate next output

Once the first batch is collected, the next artifact should be:

`OPP-011 V1 comparable SKU table + historical replay case sheet`

That artifact should be enough to start:

- ranking candidates
- replaying past choices
- collecting engineering and procurement review comments

## Current recommendation

Do not wait for perfect data completeness.

For V1, the minimum practical starting pack is:

- `20-50` cylinder SKUs
- `10` historical cases
- `1` approved-brand or preferred-series rule source
- `3` reviewers across engineering and procurement

That is enough to test whether the wedge is real.
