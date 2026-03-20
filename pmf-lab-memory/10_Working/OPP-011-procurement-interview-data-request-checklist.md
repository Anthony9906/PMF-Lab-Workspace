# OPP-011 Procurement Interview Data Request Checklist

## Purpose

Collect the minimum internal data needed before the standard-part procurement key-user interview for OPP-011.

The goal is not to complete a full spend analysis.
The goal is to enter the interview with enough concrete evidence to discuss real workflow, real purchasing patterns, and realistic cost-down hypotheses.

## Priority Levels

### P0: Must have before interview

- recent cylinder purchase records
- basic supplier information
- top purchased models
- 2 to 3 real cylinder cases linked to engineering selection

### P1: Strongly recommended

- preferred-part or preferred-supplier rules
- purchaser or requester information
- price history by model where available
- lead-time fields where available

### P2: Nice to have

- inventory or stock-related fields
- substitute-part mappings
- exception approval records

## Data Pull Window

- default window: last 6 months
- fallback window: last 3 months if extraction is difficult

## System Sources To Check

- ERP purchase order records
- supplier quotation records
- supplier master or vendor list
- standard-part library
- preferred-part or preferred-supplier list
- BOM or demand request records
- engineering selection notes if traceable

## Request 1: Cylinder Purchase Order Data

### Goal

Understand actual purchasing volume, purchasing concentration, supplier distribution, and comparable price records.

### Minimum fields

- purchase order date
- order number
- supplier name
- model or SKU
- part description
- quantity
- unit price
- total amount

### Strongly recommended fields

- requester or department
- project or cost center
- purchaser or buyer name
- brand
- delivery date or promised lead time
- order status

### Questions this data should answer

- how many cylinder purchase lines occurred in the period
- which models appear most often
- which suppliers dominate the category
- whether purchasing is concentrated or fragmented
- whether price comparison is possible for repeated models

## Request 2: Supplier Information

### Goal

Understand whether supplier optionality is real and how constrained the category is.

### Minimum fields

- supplier name
- brand or represented brand
- active or inactive status

### Strongly recommended fields

- approved supplier status
- preferred supplier status
- category coverage
- notes on exclusivity or special restrictions

### Questions this data should answer

- who are the main usable suppliers for cylinders
- whether preferred suppliers exist
- whether some models are effectively single-source
- whether multiple realistic suppliers exist for common demand

## Request 3: Preferred-Part / Preferred-Supplier Rules

### Goal

Understand whether standardization policy already exists and how much it influences actual purchasing.

### Minimum fields

- preferred model or preferred SKU
- preferred supplier if applicable
- rule owner
- rule source or document source

### Strongly recommended fields

- reason for preference
- exception rule
- approval path when a non-preferred part is used

### Questions this data should answer

- whether a preferred-part policy already exists
- who owns it
- whether the policy is enforced or only advisory
- whether agent recommendations can align with existing policy

## Request 4: Top Model Statistics

### Goal

Build a fast category profile before the interview.

### Minimum outputs

- top 20 cylinder models by purchase line count
- top 20 cylinder models by total quantity
- top suppliers by purchase line count
- top suppliers by total quantity or amount

### Strongly recommended outputs

- model count by supplier
- share of top 10 models in total volume
- count of low-frequency tail SKUs

### Questions this data should answer

- whether demand is concentrated in a small number of models
- whether long-tail SKU fragmentation may exist
- whether standardization opportunity is likely material

## Request 5: Example Cases Linking Engineering To Procurement

### Goal

Bring real cases into the interview instead of only category summaries.

### Minimum fields

- case or project identifier
- requirement summary
- engineering-selected model
- purchased model
- supplier
- price if available

### Strongly recommended fields

- why the model was chosen
- whether procurement changed the engineering choice
- whether substitutes were considered
- whether any preferred-part rule applied

### Questions this data should answer

- whether engineering and procurement choose the same model in practice
- where conflicts or tradeoffs appear
- whether procurement already overrides or reshapes selection decisions

## Suggested Output Pack For Interview

Prepare these 5 items:

1. One page: current agent capability in cylinder selection
2. One page: last 3 to 6 months cylinder purchasing snapshot
3. One page: top models and top suppliers
4. One page: 2 to 3 real example cases
5. One page: open questions for the procurement interview

## Fast Analysis To Do Before Interview

Do not over-analyze.
Just prepare these simple observations:

- total purchase line count
- total quantity
- top models
- top suppliers
- rough sign of concentration or fragmentation
- any obvious preferred-model pattern
- any obvious price spread for similar models

## Practical Request Message Template

Use this when asking internal colleagues for data:

Please help provide recent standard-part purchasing data for cylinders for the last 6 months, or 3 months if 6 months is harder to extract. The minimum fields needed are purchase date, supplier, model or SKU, quantity, unit price, and total amount. If available, please also include requester or project, buyer name, delivery date, and any preferred-part or preferred-supplier indicators. We are using this only for an internal workflow validation study on standard-part selection and procurement optimization.

## Non-Blocking Gaps

You can still run the interview if some items are missing, especially:

- exact lead-time data
- complete preferred-part policy records
- full inventory data

Do not delay the interview waiting for perfect completeness.
