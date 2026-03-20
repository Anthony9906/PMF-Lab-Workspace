# UI Patterns

Use this file when the ERP page labels are inconsistent or the page is difficult to automate.

## Navigation heuristics

- Start from the main navigation tree, app launcher, or top search.
- Search menu synonyms before browsing blindly.
- Prefer modules that already expose list totals or summary chips.

## Common element synonyms

Use these synonym groups when scanning snapshots:

- material: `物料`, `料号`, `存货`, `商品`, `Item`, `Material`
- purchase order: `采购订单`, `采购单`, `PO`, `订单查询`
- supplier: `供应商`, `厂商`, `供方`, `Vendor`, `Supplier`
- spec/model: `规格`, `规格型号`, `型号`, `系列`, `Model`
- search: `查询`, `搜索`, `检索`, `筛选`, `过滤`
- total: `总数`, `合计`, `共`, `Total`, `记录数`

## Filtering rules

- Apply one high-impact filter at a time, then re-snapshot.
- If there is an advanced filter drawer, open it rather than relying only on the quick search bar.
- For date fields, confirm whether the UI uses creation date, order date, audit date, or posting date.

## Totals and aggregation

Prefer these evidence sources in order:

1. 顶部明确标注的总数或汇总卡片
2. 分页控件里的总记录数
3. 表格分组后的组数
4. 导出后的去重统计

If you must fall back to export:

- Export the smallest filtered dataset possible.
- Use export only for counting or de-duplication, not for broad offline analysis.
- State clearly that the result comes from exported filtered records.

## Failure handling

- If a page is empty, verify filters and organization scope before concluding zero.
- If the list is lazy-loaded, scroll or paginate once and then re-check the total.
- If the page uses nested tabs, capture the active tab name in the final answer.
- If the snapshot is ambiguous, use `agent-browser get text` on likely headers, chips, or count labels.
