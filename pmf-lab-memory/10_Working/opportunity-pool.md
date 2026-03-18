# Opportunity Pool

Active candidate opportunities live here.

## Review fields

- problem
- target user
- process step
- repeat frequency
- manual effort
- failure cost
- data availability
- integration difficulty
- human approval needed
- pmf signal

## Status values

- raw
- triaged
- shortlisted
- testing
- validated
- parked
- retired

## V1 scoring note

- score uses 8 dimensions from 1 to 5: pain severity, repeat frequency, data availability, agent fit, implementation feasibility, measurable value, human review burden, strategic relevance
- current version is first-principles synthesis only
- no field evidence has been added yet
- use this file to prioritize discovery, not to claim validation
- the current procedural scoring rubric also requires a weighted decision view: strategic fit 25%, closeness to money 25%, validation difficulty 20%, replicability 15%, asset accumulation value 15%
- Anthony's strategy input introduces one named strategic-anchor candidate: standard-part selection recommendation to procurement cost optimization

## V1.1 rescreen summary

- reviewed against the updated strategy: small wedge, close to money, easy to validate, suitable for a 3-month A / B / C cycle
- enter formal top-6 analysis: OPP-011, OPP-001, OPP-002, OPP-004, OPP-007, OPP-009
- keep as reserve / observe: OPP-003, OPP-006, OPP-010
- exclude from current cycle: OPP-005, OPP-008
- OPP-003 is the first alternate if internal engineering-document access proves easier than supplier-side workflow access

## Current shortlist

| id | title | target user / buyer | process step | score | evidence status | status | decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| OPP-001 | RFQ and quotation copilot for custom parts | estimator / sales engineer / GM | pre-sales quoting | 34/40 | hypothesis-only | triaged | shortlist for discovery |
| OPP-002 | NCR and CAPA draft assistant from defect evidence | quality engineer / quality manager | nonconformance handling | 33/40 | hypothesis-only | triaged | shortlist for discovery |
| OPP-003 | Engineering change to work-instruction update copilot | process engineer / manufacturing engineer | change rollout | 32/40 | hypothesis-only | triaged | shortlist for discovery |
| OPP-004 | PPAP and FAI package assembly assistant | quality engineer / APQP lead | customer documentation | 31/40 | hypothesis-only | triaged | shortlist for discovery |
| OPP-005 | Machine downtime troubleshooting copilot | maintenance engineer / production manager | fault response | 30/40 | hypothesis-only | triaged | shortlist for discovery |
| OPP-006 | ECO, BOM, and routing impact summarizer | industrial engineer / operations manager | change impact review | 29/40 | hypothesis-only | triaged | shortlist for discovery |
| OPP-007 | Customer complaint evidence pack and response draft | quality manager / account manager | complaint handling | 29/40 | hypothesis-only | triaged | shortlist for discovery |
| OPP-008 | Production scheduling exception copilot | planner / production manager | dispatch and replanning | 28/40 | hypothesis-only | triaged | watch list |
| OPP-009 | Supplier drawing and spec change checker | SQE / procurement / quality manager | supplier change control | 28/40 | hypothesis-only | triaged | watch list |
| OPP-010 | Shift handover and production anomaly summarizer | line leader / supervisor | shift reporting | 27/40 | hypothesis-only | triaged | watch list |
| OPP-011 | Standard-part selection recommendation for procurement optimization | buyer / sourcing engineer / cost engineer | part selection and sourcing strategy | 35/40 | strategy-input + hypothesis | triaged | strategic anchor candidate |

## Opportunity cards

### OPP-001 RFQ and quotation copilot for custom parts

- manufacturing domain: discrete manufacturing, machining, sheet metal, contract manufacturing
- user or buyer: estimator, sales engineer, GM of SME manufacturer
- pain statement: quoting is slow, dependent on experienced staff, and error-prone when RFQs include drawings, tolerances, and process notes
- current workaround: senior staff manually read drawings and emails, estimate routing and material, and assemble quotes in spreadsheets or ERP
- agent fit: high for document parsing, scope extraction, checklisting, and quote draft generation with human approval
- value hypothesis: reduce quote turnaround time and increase hit rate without increasing estimation errors
- feasibility hypothesis: feasible if sample RFQ packages and historical quotes are available
- risk level: medium
- evidence status: hypothesis-only
- score: 34/40
- decision: shortlist for discovery

### OPP-002 NCR and CAPA draft assistant from defect evidence

- manufacturing domain: quality operations across discrete and process manufacturing
- user or buyer: quality engineer, quality manager
- pain statement: defect handling requires repetitive evidence gathering, root-cause framing, and document drafting under time pressure
- current workaround: engineers manually collect images, notes, measurements, and past records to draft NCR or CAPA documents
- agent fit: high for evidence organization, document drafting, and action checklist generation
- value hypothesis: reduce admin time per quality event and improve closure speed without reducing review quality
- feasibility hypothesis: feasible if defect images, templates, and historical cases exist
- risk level: medium
- evidence status: hypothesis-only
- score: 33/40
- decision: shortlist for discovery

### OPP-003 Engineering change to work-instruction update copilot

- manufacturing domain: assembly and process engineering
- user or buyer: manufacturing engineer, process engineer, operations leader
- pain statement: engineering changes require many downstream instruction updates that are easy to miss and expensive to update manually
- current workaround: engineers manually compare revisions and edit work instructions, training notes, and checklists
- agent fit: high for change comparison, impacted-document detection, and draft update generation
- value hypothesis: shorten change rollout time and reduce missed downstream updates
- feasibility hypothesis: feasible if change notices, BOM revisions, and instruction templates exist
- risk level: medium
- evidence status: hypothesis-only
- score: 32/40
- decision: shortlist for discovery

### OPP-004 PPAP and FAI package assembly assistant

- manufacturing domain: automotive, aerospace, industrial OEM supply
- user or buyer: quality engineer, APQP lead, supplier quality lead
- pain statement: customer documentation packages are repetitive, deadline-driven, and require data collection from many systems and files
- current workaround: teams manually assemble forms, extract measurements, copy evidence, and chase missing items
- agent fit: high for document collection, template population, gap checking, and package drafting
- value hypothesis: reduce package preparation time and rework caused by missing documentation
- feasibility hypothesis: feasible if templates and prior submission packages are available
- risk level: medium
- evidence status: hypothesis-only
- score: 31/40
- decision: shortlist for discovery

### OPP-005 Machine downtime troubleshooting copilot

- manufacturing domain: factory maintenance and production support
- user or buyer: maintenance engineer, line leader, production manager
- pain statement: downtime resolution depends on tribal knowledge spread across manuals, alarm logs, and experienced technicians
- current workaround: technicians search manuals, ask senior staff, and inspect historical notes while production waits
- agent fit: medium-high for alarm interpretation, manual retrieval, and probable-cause guidance
- value hypothesis: reduce time-to-diagnosis and increase first-pass resolution speed
- feasibility hypothesis: feasible if machine manuals, alarm logs, and maintenance records can be accessed
- risk level: high due to integration and safety constraints
- evidence status: hypothesis-only
- score: 30/40
- decision: shortlist for discovery

### OPP-006 ECO, BOM, and routing impact summarizer

- manufacturing domain: production engineering and operations
- user or buyer: industrial engineer, operations manager
- pain statement: product or process changes create downstream impacts across BOMs, routings, labor assumptions, and workcells that are hard to trace manually
- current workaround: engineers manually review ERP/MES exports and change documents to estimate impact
- agent fit: medium-high for comparison, summarization, and impacted-item detection
- value hypothesis: reduce missed impacts and accelerate decision-making on engineering changes
- feasibility hypothesis: feasible if structured exports and change records are available
- risk level: medium
- evidence status: hypothesis-only
- score: 29/40
- decision: shortlist for discovery

### OPP-007 Customer complaint evidence pack and response draft

- manufacturing domain: supplier quality and customer success in manufacturing
- user or buyer: quality manager, account manager
- pain statement: responding to complaints requires fast collection of traceability, inspection, and containment evidence across fragmented systems
- current workaround: teams manually search records and build customer-facing responses under escalation pressure
- agent fit: high for evidence retrieval, chronology building, and response drafting
- value hypothesis: reduce response time and improve customer confidence during complaint handling
- feasibility hypothesis: feasible if traceability records and prior complaint records are available
- risk level: medium
- evidence status: hypothesis-only
- score: 29/40
- decision: shortlist for discovery

### OPP-008 Production scheduling exception copilot

- manufacturing domain: production planning and scheduling
- user or buyer: planner, production manager
- pain statement: schedule changes create cascading exceptions that require constant manual replanning and communication
- current workaround: planners adjust spreadsheets or APS tools manually and coordinate via calls and chat
- agent fit: medium for exception detection, scenario summaries, and recommendation drafting
- value hypothesis: reduce replanning effort and improve schedule adherence for common disruptions
- feasibility hypothesis: possible, but value may depend on deep system integration
- risk level: high
- evidence status: hypothesis-only
- score: 28/40
- decision: watch list

### OPP-009 Supplier drawing and spec change checker

- manufacturing domain: supplier quality and procurement
- user or buyer: SQE, procurement manager, quality manager
- pain statement: supplier-side drawing or spec changes can introduce unnoticed quality and delivery risk
- current workaround: engineers manually compare revisions and send emails to confirm impact
- agent fit: medium-high for revision diffing, risk flagging, and follow-up drafting
- value hypothesis: reduce unnoticed supplier change risk and speed supplier communication
- feasibility hypothesis: feasible if revision-controlled drawings and change notifications are available
- risk level: medium
- evidence status: hypothesis-only
- score: 28/40
- decision: watch list

### OPP-010 Shift handover and production anomaly summarizer

- manufacturing domain: shop-floor operations
- user or buyer: line leader, production supervisor
- pain statement: shift handovers lose important context about downtime, scrap, staffing, and pending issues
- current workaround: supervisors write brief notes manually, often inconsistently and after the fact
- agent fit: medium for summarization and anomaly extraction
- value hypothesis: improve continuity and issue visibility across shifts
- feasibility hypothesis: feasible if shift notes and production logs are available
- risk level: low-medium
- evidence status: hypothesis-only
- score: 27/40
- decision: watch list

### OPP-011 Standard-part selection recommendation for procurement optimization

- manufacturing domain: equipment design, industrial procurement, non-standard machine building
- user or buyer: buyer, sourcing engineer, cost engineer, engineering manager
- pain statement: standard-part selection is often inconsistent, experience-heavy, and disconnected from downstream procurement cost and lead-time optimization
- current workaround: engineers and buyers manually compare catalogs, reuse old BOM choices, and negotiate sourcing options without a structured recommendation layer
- agent fit: high for requirement structuring, catalog filtering, tradeoff explanation, and recommendation drafting with human approval
- value hypothesis: reduce sourcing cost and selection cycle time while improving standardization and procurement decisions
- feasibility hypothesis: feasible if part catalogs, prior BOMs, and selection constraints can be collected
- risk level: medium
- evidence status: strategy-input + hypothesis
- score: 35/40
- decision: strategic anchor candidate
