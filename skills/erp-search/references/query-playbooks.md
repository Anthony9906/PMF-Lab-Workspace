# Query Playbooks

Use this file when the request maps to a known ERP query family.

## 1. Material / Item Master

Typical questions:

- 现在 ERP 中有多少种气缸产品
- 当前企业内部标准件的品类有多少
- 某个品类下有多少个物料编码

Likely modules or page names:

- 物料主数据
- 物料列表
- 商品资料
- 存货档案
- 料号管理

Common filters:

- 物料大类 / 小类 / 产品线
- 品牌 / 供应商
- 启用状态
- 组织 / 工厂 / 库存地点
- 自定义属性，如标准件、气缸、亚德客

Page clues to identify the correct page:

- 表格包含物料编码、物料名称、规格型号、品牌、状态
- 顶部或侧栏有分类树
- 搜索区包含名称、编码、品牌、创建时间

Recommended flow:

1. 找到物料列表页并确认默认粒度是单条物料编码，而不是分类汇总。
2. 如果问题是“多少种产品”，先判断去重口径：
   - 默认按物料编码计数
   - 如果用户明确说“规格数”，按规格型号或型号字段去重
   - 如果页面只有记录数，没有 distinct 能力，说明该口径受 UI 限制
3. 依次设置品类、品牌、状态等过滤条件。
4. 读取页面总数、分页总数或列表头部统计信息。
5. 如怀疑重复，抽样查看相邻记录，确认同一规格是否拆成多个编码。

Validation notes:

- 区分“品类数”和“物料数”。分类树节点数不等于物料数。
- 区分“启用中”与“全部状态”。很多 ERP 默认隐藏停用物料。
- 如果用户问“气缸产品有多少种”，优先确认是“全部气缸物料编码”还是“亚德客气缸规格数”。

## 2. Purchase Orders

Typical questions:

- 过去 3 个月标准件采购订单有多少
- 本月气缸采购金额是多少
- 某供应商最近一季度下了多少张采购单

Likely modules or page names:

- 采购订单
- 采购订单列表
- 采购执行
- 采购单据查询
- 采购明细

Common filters:

- 下单日期 / 审核日期 / 入库日期
- 采购组织 / 工厂 / 部门
- 供应商
- 物料分类 / 品牌 / 物料编码
- 单据状态，如已审核、已关闭、已完成

Page clues:

- 表格含订单号、供应商、下单日期、状态、金额
- 常见存在“表头/表体切换”或“订单/明细”两个视图

Recommended flow:

1. 先确认问题口径是“订单数”还是“订单行数”。
2. 设定时间范围。对“过去 3 个月”使用自然日回溯，并在回答里写出起止日期。
3. 若要求“标准件采购订单”，优先在物料分类中过滤标准件；没有分类时再用关键词或品牌辅助筛选。
4. 读取总订单数；如果页面是明细视图，再寻找“单据去重数”或切换到表头视图。
5. 如需金额，确认币种和含税/未税口径。

Validation notes:

- 很多 ERP 列表默认显示订单行而不是订单头，这会显著放大数量。
- 状态过滤会改变结果，尤其是草稿、取消、关闭单据是否计入。
- 日期字段不同会得到不同结果，优先使用业务最贴近问题的字段，并在结果中说明。

## 3. Supplier + Category + Spec

Typical questions:

- 亚德客气缸有多少种产品规格
- 某品牌标准件在库有多少个可采购型号
- 某供应商当前有效料号有多少

Likely modules or page names:

- 物料主数据
- 供应商供货目录
- 采购价格资料
- 合格供应商物料

Common filters:

- 供应商品牌 / 供应商名称
- 品类，如气缸、电磁阀、导轨
- 状态，如有效、启用、可采购
- 型号、规格、系列

Recommended flow:

1. 先找能同时出现供应商和物料规格的页面。
2. 用供应商名称和品类双重过滤。
3. 判断“产品规格”对应哪个字段：
   - 优先 `规格型号` / `型号`
   - 其次 `物料名称 + 关键规格字段`
4. 若页面可分组或导出 distinct 值，优先用系统能力。
5. 若只能看到记录数，说明结果是“符合条件的记录数”，不是严格 distinct 规格数。

Validation notes:

- 同一规格可能对应多个采购组织、工厂或包装单位，需警惕重复。
- 同一品牌可能有别名，必要时分别尝试中文名、英文名、简称。

## 4. When no exact page matches

If the ERP uses unfamiliar names:

- `物料主数据` 也可能叫 `存货档案`、`料号资料`、`商品资料`
- `采购订单` 也可能叫 `采购单据`、`PO 查询`、`订单执行`
- `供应商物料` 也可能叫 `供货关系`、`供方目录`、`采购价目`

Selection rule:

1. Pick the page that exposes the needed grain and filter fields.
2. Prefer list pages with a visible total count over drill-down detail pages.
3. If two pages can answer the question, prefer the one that makes the metric definition clearer.
