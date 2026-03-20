---
name: erp-search
description: Use when the user wants a verified answer from an ERP, SRM, or purchasing web UI, such as material counts, SKU/spec counts, recent purchase-order totals, supplier-specific product lists, or other filtered master/transaction data.
---

# ERP Search

Use this skill to query enterprise ERP data through the web UI and return a checked answer, not a vague guess.

## Use this skill when

- The user asks for a concrete ERP fact such as "有多少种", "过去 3 个月多少单", "某供应商有多少规格", "某类物料有多少编码".
- The answer must come from the live ERP interface rather than memory or a static export.
- The task can be completed by navigating pages, applying filters, reading totals, and summarizing the result.

## Do not use this skill when

- The user needs write actions such as creating orders, editing master data, or approving workflows.
- The source is not the ERP web UI.
- The request is really a business analysis task rather than a data retrieval task.

## Required operating rules

1. Default to read-only behavior. Do not create, submit, approve, delete, or edit records.
2. Make the metric explicit before querying:
   - object: material, supplier item, purchase order, line item, etc.
   - scope: category, supplier, plant, org, status, date range
   - aggregation: record count, distinct SKU count, sum amount, grouped breakdown
3. If the question is slightly underspecified, make the narrowest reasonable assumption and state it in the final answer. Only ask the user when the ambiguity would materially change the result.
4. Prefer the total count shown in the UI. If the page does not expose a reliable total, use list pagination, grouped views, or export as a fallback.
5. Cross-check once before answering:
   - compare header total vs. visible list count pattern
   - compare filtered result vs. unfiltered baseline when feasible
   - verify whether "records" means documents or line items
6. Report the answer together with filters used, page path, and confidence notes.

## Primary tool

Use [$agent-browser](/Users/anthony/.codex/skills/agent-browser/SKILL.md) for navigation and extraction.

Recommended command pattern:

```bash
agent-browser --session erp-search open <erp-url>
agent-browser --session erp-search snapshot -i --json
agent-browser --session erp-search click @e2
agent-browser --session erp-search fill @e4 "亚德客"
agent-browser --session erp-search press Enter
agent-browser --session erp-search wait --load networkidle
agent-browser --session erp-search snapshot -i --json
```

Rules for browser execution:

- Always use a named session such as `erp-search`.
- After every click, filter change, page switch, or search submit, wait for the page to stabilize and re-snapshot.
- If login is required and already completed manually, save and reuse state when possible.
- Use ref-based actions from the latest snapshot. Do not hardcode selectors if refs are available.
- If a page renders inside an iframe, switch frame first, then re-snapshot.

## Standard workflow

1. Normalize the request into `object + filters + metric + time range`.
2. Find the correct module by page title or menu synonyms.
3. Open the list page, confirm the default grain of the data.
4. Apply filters one by one and re-snapshot after each meaningful change.
5. Read the total, grouped result, or summary field.
6. Validate whether the number represents documents, rows, or distinct items.
7. Return the result with assumptions and traceability.

## Output contract

Return a short answer in this structure:

```text
结果：<核心数字或表格结论>
口径：<统计对象和去重规则>
筛选条件：<时间/供应商/品类/组织/状态>
来源路径：<模块 > 页面 > 关键筛选>
校验：<如何确认数字可信>
备注：<不确定点或系统限制；没有就省略>
```

## Query families

Read [Query Playbooks](references/query-playbooks.md) for detailed page patterns and step-by-step flows.

- Material / item master queries
- Purchase order and purchase line queries
- Supplier + category + spec queries

Read [UI Patterns](references/ui-patterns.md) when page naming, buttons, filters, or totals are hard to recognize.

## Examples

- 使用 `$erp-search` 查询 ERP 里当前气缸产品有多少种，按物料编码去重，并告诉我筛选路径。
- 使用 `$erp-search` 查询过去 3 个月标准件采购订单有多少单，同时区分订单数和订单行数。
- 使用 `$erp-search` 查询亚德客气缸共有多少个规格，并说明你是按供应商加品类筛出来的。
