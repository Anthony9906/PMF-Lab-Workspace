"use strict";

const path = require("path");
const PptxGenJS = require("pptxgenjs");
const { svgToDataUri } = require("./pptxgenjs_helpers/svg");
const {
  warnIfSlideHasOverlaps,
  warnIfSlideElementsOutOfBounds,
} = require("./pptxgenjs_helpers/layout");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "OpenAI Codex";
pptx.company = "PMF Lab";
pptx.subject = "Chairman weekly report supplement pages";
pptx.title = "企业级 AI Agent 市场动态与机会池";
pptx.lang = "zh-CN";
pptx.theme = {
  headFontFace: "PingFang SC",
  bodyFontFace: "PingFang SC",
  lang: "zh-CN",
};

const OUT = path.join(__dirname, "chairman_weekly_report_pages_v1.pptx");

const C = {
  bg: "F6F1EA",
  topBar: "243946",
  title: "1F2D3D",
  body: "5D6975",
  line: "C7D3D9",
  card: "FFFFFF",
  teal: "1C8E89",
  tealSoft: "DCEFEB",
  gold: "D49A2A",
  goldSoft: "F7E5BE",
  mint: "8BBEB4",
  mintSoft: "DFEFE7",
  red: "B45F56",
  redSoft: "F3DFDC",
  graySoft: "EEF2F4",
};

function addBaseChrome(slide, pageNo, sectionLabel, accentFill) {
  slide.background = { color: C.bg };
  slide.addShape(pptx._shapeType.rect, {
    x: 0,
    y: 0,
    w: 13.333,
    h: 0.2,
    line: { color: C.topBar, transparency: 100 },
    fill: { color: C.topBar },
  });
  slide.addShape(pptx._shapeType.roundRect, {
    x: 0.82,
    y: 0.55,
    w: 2.9,
    h: 0.42,
    rectRadius: 0.08,
    line: { color: accentFill, transparency: 100 },
    fill: { color: accentFill },
  });
  slide.addText(sectionLabel, {
    x: 1.03,
    y: 0.64,
    w: 2.4,
    h: 0.2,
    fontFace: "PingFang SC",
    fontSize: 11.5,
    bold: true,
    color: C.teal,
    margin: 0,
  });
  slide.addShape(pptx._shapeType.roundRect, {
    x: 11.15,
    y: 0.42,
    w: 1.4,
    h: 0.48,
    rectRadius: 0.08,
    line: { color: accentFill, transparency: 100 },
    fill: { color: accentFill },
  });
  slide.addText(String(pageNo).padStart(2, "0"), {
    x: 12.75,
    y: 7.18,
    w: 0.3,
    h: 0.18,
    fontFace: "Avenir",
    fontSize: 10,
    color: C.body,
    align: "right",
    margin: 0,
  });
}

function addTitle(slide, title, subtitle) {
  slide.addText(title, {
    x: 0.78,
    y: 1.08,
    w: 11.8,
    h: 0.62,
    fontFace: "PingFang SC",
    fontSize: 26,
    bold: true,
    color: C.title,
    margin: 0,
  });
  slide.addText(subtitle, {
    x: 0.8,
    y: 1.87,
    w: 11.55,
    h: 0.42,
    fontFace: "PingFang SC",
    fontSize: 11.5,
    color: C.body,
    margin: 0,
  });
}

function addCard(slide, opts) {
  const {
    x,
    y,
    w,
    h,
    title,
    titleFill,
    titleColor,
    bodyLines,
    note,
  } = opts;
  slide.addShape(pptx._shapeType.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: 0.08,
    line: { color: C.line, width: 1.2 },
    fill: { color: C.card },
    shadow: { type: "outer", color: "D9E1E6", blur: 1, angle: 45, distance: 1, opacity: 0.08 },
  });
  slide.addText(title, {
    x: x + 0.22,
    y: y + 0.2,
    w: Math.min(w - 0.44, 1.75),
    h: 0.34,
    fontFace: "PingFang SC",
    fontSize: 11.5,
    bold: true,
    color: titleColor || C.title,
    margin: 0,
    align: "center",
    valign: "mid",
    line: { color: titleFill, transparency: 100 },
    fill: { color: titleFill },
  });
  addBullets(slide, {
    x: x + 0.24,
    y: y + 0.72,
    w: w - 0.48,
    lines: bodyLines,
    bulletColor: titleColor || C.teal,
    fontSize: 10.8,
    lineGap: 0.46,
  });
  if (note) {
    slide.addText(note, {
      x: x + 0.24,
      y: y + h - 0.32,
      w: w - 0.48,
      h: 0.18,
      fontFace: "PingFang SC",
      fontSize: 8.5,
      color: "8A97A2",
      margin: 0,
    });
  }
}

function addBullets(slide, opts) {
  const { x, y, w, lines, bulletColor, fontSize, lineGap } = opts;
  lines.forEach((line, idx) => {
    const yy = y + idx * lineGap;
    slide.addShape(pptx._shapeType.ellipse, {
      x,
      y: yy + 0.05,
      w: 0.11,
      h: 0.11,
      line: { color: bulletColor, transparency: 100 },
      fill: { color: bulletColor },
    });
    slide.addText(line, {
      x: x + 0.18,
      y: yy,
      w: w - 0.18,
      h: 0.24,
      fontFace: "PingFang SC",
      fontSize,
      color: C.title,
      margin: 0,
      breakLine: false,
      valign: "mid",
    });
  });
}

function addMetricCard(slide, x, y, w, label, value, subtext) {
  slide.addShape(pptx._shapeType.roundRect, {
    x,
    y,
    w,
    h: 0.86,
    rectRadius: 0.08,
    line: { color: C.line, transparency: 100 },
    fill: { color: C.card },
  });
  slide.addText(label, {
    x: x + 0.18,
    y: y + 0.14,
    w: w - 0.36,
    h: 0.14,
    fontFace: "Avenir",
    fontSize: 9.5,
    color: C.body,
    margin: 0,
  });
  slide.addText(value, {
    x: x + 0.18,
    y: y + 0.32,
    w: w - 0.36,
    h: 0.26,
    fontFace: "Avenir",
    fontSize: 19,
    bold: true,
    color: C.title,
    margin: 0,
  });
  slide.addText(subtext, {
    x: x + 0.18,
    y: y + 0.62,
    w: w - 0.36,
    h: 0.14,
    fontFace: "PingFang SC",
    fontSize: 8.5,
    color: C.body,
    margin: 0,
  });
}

function addTag(slide, x, y, text, fill, color) {
  slide.addText(text, {
    x,
    y,
    w: 0.7,
    h: 0.22,
    align: "center",
    valign: "mid",
    fontFace: "PingFang SC",
    fontSize: 8.5,
    bold: true,
    color,
    margin: 0,
    line: { color: fill, transparency: 100 },
    fill: { color: fill },
  });
}

function addMapDot(slide, opts) {
  const { x, y, title, subtitle, fill, tagText, tagFill, tagColor } = opts;
  slide.addShape(pptx._shapeType.ellipse, {
    x,
    y,
    w: 0.16,
    h: 0.16,
    line: { color: fill, transparency: 100 },
    fill: { color: fill },
  });
  slide.addText(title, {
    x: x + 0.2,
    y: y - 0.02,
    w: 2.05,
    h: 0.18,
    fontFace: "PingFang SC",
    fontSize: 10.8,
    bold: true,
    color: C.title,
    margin: 0,
  });
  slide.addText(subtitle, {
    x: x + 0.2,
    y: y + 0.18,
    w: 2.25,
    h: 0.17,
    fontFace: "PingFang SC",
    fontSize: 9,
    color: C.body,
    margin: 0,
  });
  addTag(slide, x + 1.55, y - 0.02, tagText, tagFill, tagColor);
}

function finalizeSlide(slide) {
  warnIfSlideHasOverlaps(slide, pptx, {
    muteContainment: true,
    ignoreDecorativeShapes: true,
  });
  warnIfSlideElementsOutOfBounds(slide, pptx);
}

function buildMarketSlide() {
  const slide = pptx.addSlide();
  addBaseChrome(slide, 1, "近期市场动态", C.tealSoft);
  addTitle(
    slide,
    "企业级 AI Agent 正从“对话工具”快速转向“桌面执行 + 企业落地”",
    "过去 6-8 周最强的市场信号，不是模型再次升级，而是各家都在争夺“谁能真正替用户干活”的入口。"
  );

  addCard(slide, {
    x: 0.82,
    y: 2.42,
    w: 3.86,
    h: 2.22,
    title: "01  OpenClaw 热潮",
    titleFill: C.tealSoft,
    titleColor: C.teal,
    bodyLines: [
      "把“桌面 Agent / Computer Use”从极客圈推向企业管理层视野",
      "价值叙事从“会回答”升级为“会调工具、会执行、会交付”",
      "也同步暴露权限、安全、审计与长任务稳定性的短板",
    ],
  });

  addCard(slide, {
    x: 4.74,
    y: 2.42,
    w: 3.86,
    h: 2.22,
    title: "02  国内大厂跟进",
    titleFill: C.goldSoft,
    titleColor: C.gold,
    bodyLines: [
      "阿里：钉钉 Agent OS / 悟空 与 AgentBay，强调企业入口与可管控部署",
      "腾讯：WorkBuddy / QClaw，强调桌面工作台、本地文件操作与多技能集成",
      "竞争焦点已从单纯模型能力，转向生态入口、系统接入与安全边界",
    ],
  });

  addCard(slide, {
    x: 8.66,
    y: 2.42,
    w: 3.86,
    h: 2.22,
    title: "03  英伟达上移到底座",
    titleFill: C.mintSoft,
    titleColor: "4E8E7C",
    bodyLines: [
      "以 NeMo / NIM / AI Blueprints 强化企业 Agent 的基础设施能力",
      "说明市场正从“单体 Agent”走向“编排、治理、部署”的体系化竞争",
      "对制造业而言，私有化、可观测、可审计很快会从加分项变成门槛",
    ],
  });

  slide.addShape(pptx._shapeType.roundRect, {
    x: 0.82,
    y: 4.96,
    w: 11.7,
    h: 1.46,
    rectRadius: 0.08,
    line: { color: C.line, width: 1.2 },
    fill: { color: C.card, transparency: 100 },
  });
  slide.addText("对我们的启发", {
    x: 1.05,
    y: 5.15,
    w: 1.65,
    h: 0.34,
    fontFace: "PingFang SC",
    fontSize: 12,
    bold: true,
    color: C.teal,
    margin: 0,
    align: "center",
    valign: "mid",
    line: { color: C.tealSoft, transparency: 100 },
    fill: { color: C.tealSoft },
  });
  addBullets(slide, {
    x: 1.03,
    y: 5.64,
    w: 11.05,
    lines: [
      "非标制造不会先为通用桌面助手买单，而会先为高频、强约束、可计量的流程 Agent 买单。",
      "优先切入离钱近且样本易拿的岗位任务：标准件选型、报价、质量文档，是更现实的三条线。",
      "我们的路线应聚焦“垂直工作流闭环”，而不是一开始就做大而全的 Agent 平台。",
    ],
    bulletColor: C.teal,
    fontSize: 10.8,
    lineGap: 0.3,
  });
  slide.addText(
    "公开市场样本：OpenClaw docs；阿里云 AgentBay / 企业 Agent 相关文档；腾讯公开产品报道；NVIDIA GTC / Agentic AI materials",
    {
      x: 0.84,
      y: 6.78,
      w: 11.6,
      h: 0.16,
      fontFace: "PingFang SC",
      fontSize: 7.8,
      color: "8A97A2",
      margin: 0,
    }
  );
  finalizeSlide(slide);
}

function buildOpportunitySlide() {
  const slide = pptx.addSlide();
  addBaseChrome(slide, 2, "机会池与发现地图", C.goldSoft);
  addTitle(
    slide,
    "非标制造 Agent 机会池正在收敛到 3 条主线，标准件选型最适合作为首个闭环",
    "不是把 11 个机会并行推进，而是用“离钱近 + 数据可得 + 3个月可验证”三个标准，把机会池收敛成主项目、备选线与学习线。"
  );

  addMetricCard(slide, 0.92, 2.4, 1.62, "机会点", "11", "当前池内总量");
  addMetricCard(slide, 2.74, 2.4, 1.62, "活跃工作集", "Top 6", "进入本轮深挖");
  addMetricCard(slide, 4.56, 2.4, 1.82, "结构", "1 / 1 / 1", "主 / 备 / 学");
  addMetricCard(slide, 6.58, 2.4, 2.34, "当前主项目", "OPP-011", "标准件选型 -> 采购优化");

  const mapSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1100" height="430" viewBox="0 0 1100 430">
    <rect x="2" y="2" width="1096" height="426" rx="12" fill="#FFFFFF" stroke="#C7D3D9" stroke-width="2"/>
    <rect x="34" y="30" width="190" height="38" rx="8" fill="#DCEFEB"/>
    <text x="129" y="55" text-anchor="middle" font-size="25" font-weight="700" fill="#1C8E89" font-family="PingFang SC, Arial Unicode MS, sans-serif">机会发现地图</text>
    <ellipse cx="545" cy="145" rx="235" ry="110" fill="#F7E5BE" fill-opacity="0.62" stroke="#D49A2A" stroke-opacity="0.82" stroke-width="2"/>
    <ellipse cx="310" cy="278" rx="240" ry="118" fill="#DCEFEB" fill-opacity="0.66" stroke="#1C8E89" stroke-opacity="0.8" stroke-width="2"/>
    <ellipse cx="690" cy="278" rx="240" ry="118" fill="#DFEFE7" fill-opacity="0.7" stroke="#4E8E7C" stroke-opacity="0.82" stroke-width="2"/>
    <text x="545" y="30" text-anchor="middle" font-size="22" font-weight="700" fill="#D49A2A" font-family="PingFang SC, Arial Unicode MS, sans-serif">客户体验</text>
    <text x="150" y="352" text-anchor="middle" font-size="22" font-weight="700" fill="#1C8E89" font-family="PingFang SC, Arial Unicode MS, sans-serif">供应链</text>
    <text x="900" y="352" text-anchor="middle" font-size="22" font-weight="700" fill="#4E8E7C" font-family="PingFang SC, Arial Unicode MS, sans-serif">工程设计</text>

    <circle cx="500" cy="246" r="9" fill="#D49A2A"/>
    <text x="522" y="238" font-size="22" font-weight="700" fill="#1F2D3D" font-family="PingFang SC, Arial Unicode MS, sans-serif">RFQ / 报价</text>
    <text x="522" y="265" font-size="17" fill="#5D6975" font-family="PingFang SC, Arial Unicode MS, sans-serif">处于三圆交集：既连客户需求，也连供应链与工程设计</text>

    <circle cx="470" cy="286" r="9" fill="#1C8E89"/>
    <text x="492" y="278" font-size="23" font-weight="700" fill="#1F2D3D" font-family="PingFang SC, Arial Unicode MS, sans-serif">OPP-011  标准件选型推荐</text>
    <text x="492" y="306" font-size="18" fill="#5D6975" font-family="PingFang SC, Arial Unicode MS, sans-serif">位于供应链与工程设计交集，目标是采购成本优化与标准化</text>
    <rect x="816" y="254" width="92" height="30" rx="8" fill="#DCEFEB"/>
    <text x="862" y="275" text-anchor="middle" font-size="17" font-weight="700" fill="#1C8E89" font-family="PingFang SC, Arial Unicode MS, sans-serif">主项目</text>

    <circle cx="625" cy="198" r="9" fill="#B45F56"/>
    <text x="647" y="190" font-size="22" font-weight="700" fill="#1F2D3D" font-family="PingFang SC, Arial Unicode MS, sans-serif">NCR / FACA</text>
    <text x="647" y="217" font-size="17" fill="#5D6975" font-family="PingFang SC, Arial Unicode MS, sans-serif">处于工程设计与客户体验交集，反馈现场问题并推动纠正</text>
    <rect x="920" y="174" width="92" height="30" rx="8" fill="#F3DFDC"/>
    <text x="966" y="195" text-anchor="middle" font-size="17" font-weight="700" fill="#B45F56" font-family="PingFang SC, Arial Unicode MS, sans-serif">学习线</text>

    <circle cx="760" cy="322" r="7" fill="#5D6975"/>
    <text x="778" y="328" font-size="17" fill="#5D6975" font-family="PingFang SC, Arial Unicode MS, sans-serif">OPP-003  工程变更 -> 作业指导书更新（偏工程设计）</text>
  </svg>`;
  slide.addImage({
    data: svgToDataUri(mapSvg),
    x: 0.92,
    y: 3.34,
    w: 7.35,
    h: 2.88,
  });

  slide.addShape(pptx._shapeType.roundRect, {
    x: 8.48,
    y: 3.34,
    w: 4.02,
    h: 2.88,
    rectRadius: 0.08,
    line: { color: C.line, width: 1.2 },
    fill: { color: C.card },
  });
  slide.addText("当前收敛逻辑", {
    x: 8.72,
    y: 3.54,
    w: 1.72,
    h: 0.34,
    fontFace: "PingFang SC",
    fontSize: 12,
    bold: true,
    color: C.gold,
    margin: 0,
    align: "center",
    valign: "mid",
    line: { color: C.goldSoft, transparency: 100 },
    fill: { color: C.goldSoft },
  });
  addBullets(slide, {
    x: 8.74,
    y: 4.0,
    w: 3.42,
    lines: [
      "优先保留三类机会：离钱近、数据可得、3个月内能形成 A / B / C 结论。",
      "主项目 OPP-011：兼具采购价值与标准化价值，且已有气缸类验证进展。",
      "备选线 OPP-001：内部 RFQ / 历史报价数据强，但首个报价切片需要继续收窄。",
      "学习线 OPP-002：质量端痛点真实，但客户现场离线与高安全要求会拉高落地复杂度。",
    ],
    bulletColor: C.gold,
    fontSize: 9.6,
    lineGap: 0.46,
  });

  slide.addShape(pptx._shapeType.roundRect, {
    x: 0.92,
    y: 6.42,
    w: 11.58,
    h: 0.56,
    rectRadius: 0.06,
    line: { color: C.line, width: 1 },
    fill: { color: C.card },
  });
  slide.addText(
    "当前 Top 6：OPP-011 / OPP-001 / OPP-002 / OPP-003 / OPP-004 / OPP-007    |    运行方式：1 个主项目 + 1 个备选线 + 1 个学习线，而不是平台式铺开。",
    {
      x: 1.12,
      y: 6.58,
      w: 11.1,
      h: 0.16,
      fontFace: "PingFang SC",
      fontSize: 9.4,
      color: C.title,
      margin: 0,
      align: "center",
    }
  );
  finalizeSlide(slide);
}

buildMarketSlide();
buildOpportunitySlide();

pptx.writeFile({ fileName: OUT }).then(() => {
  console.log(`Wrote ${OUT}`);
});
