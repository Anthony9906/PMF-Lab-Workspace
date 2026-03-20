# OPP-011 Batch 1 Minimum Sample Plan

## Purpose

Use 5 complete cylinder cases to verify that the shadow-test workflow is executable before expanding to the full sample set.

This batch is not for final PMF judgment.
It is for checking whether the team can reliably:

- retrieve baseline engineering selections
- generate agent recommendations under the same requirement boundary
- review engineering usability with a stable standard
- retrieve traceable price and supplier-option data
- produce a comparable procurement-side conclusion

## Batch 1 Goal

Answer one operational question:

Can the team run a clean comparison between baseline and agent-selected cylinder models for engineering usability, supplier optionality, and price?

## Batch 1 Success Standard

Batch 1 is successful if:

- 5 cases are collected with complete baseline and agent comparison fields
- at least 4 of 5 cases have usable engineering review results
- at least 4 of 5 cases have traceable price data
- at least 4 of 5 cases have traceable supplier-option counts
- the team can make one clear per-case judgment: better, same, worse, or incomplete

## Recommended Case Mix

Choose 5 cases using this mix:

1. 2 cases from recent cylinder-selection work with strong documentation
2. 2 cases from historical work where procurement records are easy to retrieve
3. 1 case that is slightly ambiguous or borderline, to test whether the template still works when reality is messy

Do not choose 5 highly special cases.
Do not choose 5 perfect showcase cases.

## Minimum Fields To Collect

Only collect the fields required to make the first decision:

- case_id
- requirement_summary
- key_constraints
- baseline_model
- baseline_is_preferred_model
- baseline_price
- baseline_price_source
- baseline_supplier_option_count
- agent_recommended_model
- agent_backup_model
- agent_is_preferred_model
- agent_price
- agent_price_source
- agent_supplier_option_count
- engineering_usability_review
- engineering_review_notes
- procurement_conclusion
- data_completeness
- notes

## Collection Sequence

1. Pick 5 candidate cases.
2. Normalize each case into requirement summary and key constraints.
3. Fill baseline model and baseline procurement data first.
4. Run the agent on the same requirement boundary.
5. Record the recommended model and backup model.
6. Ask engineering to judge usability.
7. Compare price and supplier-option count.
8. Write one per-case procurement conclusion.
9. Review whether any field definitions need to change before scaling to 10 to 20 cases.

## Per-Case Judgment Rule

Use one simple output for each case:

- better: engineering-usable and procurement-side outcome is better on price or supplier optionality
- same: engineering-usable and procurement-side difference is not material
- worse: engineering-usable but procurement-side outcome is worse, or engineering review fails
- incomplete: required procurement or review data is missing

## Recommended Owners

- Anthony: case selection, baseline confirmation, engineering review coordination
- 小智: template control, agent recommendation record, comparison logic, final summary drafting

## Main Risks

- price source is not consistent across cases
- supplier-option count is counted with different rules
- engineering review becomes outcome-biased after seeing procurement comparison
- requirement summaries are too vague for fair comparison

## Controls

- tag every price with source
- count only realistic suppliers already usable by the company
- do engineering review before showing procurement comparison
- require one short structured requirement summary for every case

## Expansion Trigger

Expand from Batch 1 to the full shadow test if:

- the template fields are stable
- at least 4 of 5 cases are complete enough to compare
- engineering review language is consistent
- procurement-side comparison can be explained without case-by-case exceptions
