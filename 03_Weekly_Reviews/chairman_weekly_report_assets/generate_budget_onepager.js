"use strict";

const path = require("path");
const PptxGenJS = require("pptxgenjs");
const {
  warnIfSlideHasOverlaps,
  warnIfSlideElementsOutOfBounds,
} = require("./pptxgenjs_helpers/layout");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "OpenAI Codex";
pptx.company = "PMF Lab";
pptx.subject = "AI+制造 3个月产品创新预算建议";
pptx.title = "AI+制造 3个月产品创新预算";
pptx.lang = "zh-CN";
pptx.theme = {
  headFontFace: "PingFang SC",
  bodyFontFace: "PingFang SC",
  lang: "zh-CN",
};

const OUT = path.join(__dirname, "innovation_budget_onepager_v1.pptx");

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
};

function addBase(slide) {
  slide.background = { color: C.bg };
  slide.addShape(pptx._shapeType.rect, {
    x: 0,
    y: 0,
    w: 13.333,
    h: 0.2,
    line: { color: C.topBar, transparency: 100 },
    fill: { color: C.topBar },
  });
  slide.addText("产品创新预算", {
    x: 0.84,
    y: 0.58,
    w: 2.9,
    h: 0.42,
    fontFace: "PingFang SC",
    fontSize: 11.5,
    bold: true,
    color: C.teal,
    margin: 0,
    align: "center",
    valign: "mid",
    line: { color: C.tealSoft, transparency: 100 },
    fill: { color: C.tealSoft },
  });
  slide.addShape(pptx._shapeType.roundRect, {
    x: 11.15,
    y: 0.42,
    w: 1.4,
    h: 0.48,
    rectRadius: 0.08,
    line: { color: C.goldSoft, transparency: 100 },
    fill: { color: C.goldSoft },
  });
}

function addMetricCard(slide, x, label, value, subtext) {
  slide.addShape(pptx._shapeType.roundRect, {
    x,
    y: 2.28,
    w: 2.18,
    h: 0.92,
    rectRadius: 0.08,
    line: { color: C.line, transparency: 100 },
    fill: { color: C.card },
  });
  slide.addText(label, {
    x: x + 0.18,
    y: 2.42,
    w: 1.8,
    h: 0.14,
    fontFace: "Avenir",
    fontSize: 9.5,
    color: C.body,
    margin: 0,
  });
  slide.addText(value, {
    x: x + 0.18,
    y: 2.61,
    w: 1.8,
    h: 0.22,
    fontFace: "Avenir",
    fontSize: 18,
    bold: true,
    color: C.title,
    margin: 0,
  });
  slide.addText(subtext, {
    x: x + 0.18,
    y: 2.88,
    w: 1.82,
    h: 0.13,
    fontFace: "PingFang SC",
    fontSize: 8.5,
    color: C.body,
    margin: 0,
  });
}

function addBulletList(slide, x, y, w, lines, color, fontSize, gap) {
  lines.forEach((line, i) => {
    const yy = y + i * gap;
    slide.addShape(pptx._shapeType.ellipse, {
      x,
      y: yy + 0.05,
      w: 0.11,
      h: 0.11,
      line: { color, transparency: 100 },
      fill: { color },
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
      valign: "mid",
    });
  });
}

function addBudgetCard(slide, opts) {
  const { x, y, w, h, title, fill, titleColor, lines, footer, fontSize, gap } = opts;
  slide.addShape(pptx._shapeType.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: 0.08,
    line: { color: C.line, width: 1.1 },
    fill: { color: C.card },
  });
  slide.addText(title, {
    x: x + 0.2,
    y: y + 0.18,
    w: 1.95,
    h: 0.34,
    fontFace: "PingFang SC",
    fontSize: 11.5,
    bold: true,
    color: titleColor,
    margin: 0,
    align: "center",
    valign: "mid",
    line: { color: fill, transparency: 100 },
    fill: { color: fill },
  });
  addBulletList(
    slide,
    x + 0.22,
    y + 0.7,
    w - 0.44,
    lines,
    titleColor,
    fontSize || 9.8,
    gap || 0.42
  );
  if (footer) {
    slide.addText(footer, {
      x: x + 0.22,
      y: y + h - 0.32,
      w: w - 0.44,
      h: 0.16,
      fontFace: "PingFang SC",
      fontSize: 8.4,
      color: C.body,
      margin: 0,
    });
  }
}

const slide = pptx.addSlide();
addBase(slide);

slide.addText("3个月产品创新预算：按全成本口径，基准版总预算约 39.3 万元", {
  x: 0.78,
  y: 1.08,
  w: 12.0,
  h: 0.62,
  fontFace: "PingFang SC",
  fontSize: 25,
  bold: true,
  color: C.title,
  margin: 0,
});

slide.addText(
  "预算按全新团队编制项目测算，包含人力成本与费用成本两大类。人力成本按现有核心团队 + 1 名制造专家的 3 个月投入，并统一加计 35% 社保成本。",
  {
    x: 0.8,
    y: 1.82,
    w: 12.0,
    h: 0.4,
    fontFace: "PingFang SC",
    fontSize: 11.2,
    color: C.body,
    margin: 0,
  }
);

addMetricCard(slide, 0.92, "测算口径", "全成本", "按全新团队编制项目计算");
addMetricCard(slide, 3.34, "预算版本", "基准版", "制造专家按 2.5 万 / 月");
addMetricCard(slide, 5.76, "人力成本", "34.4 万", "占总预算约 87.5%");
addMetricCard(slide, 8.18, "费用成本", "4.9 万", "占总预算约 12.5%");

addBudgetCard(slide, {
  x: 0.92,
  y: 3.38,
  w: 3.72,
  h: 2.58,
  title: "A. 人力成本 34.4 万",
  fill: C.tealSoft,
  titleColor: C.teal,
  lines: [
    "核心团队：6 万 / 月 x 3 个月 = 18.0 万",
    "制造专家：2.5 万 / 月 x 3 个月 = 7.5 万",
    "人力原值合计：25.5 万",
    "加计社保 35% 后：34.4 万",
  ],
  footer: "对应 2+1 配置：AI 产品 + AI 架构师 + 工程/制造专家。",
});

addBudgetCard(slide, {
  x: 4.82,
  y: 3.38,
  w: 3.72,
  h: 2.58,
  title: "B. 费用成本 4.9 万",
  fill: C.goldSoft,
  titleColor: C.gold,
  lines: [
    "基础算力池：0.3 万 / 月 x 3 = 0.9 万",
    "其中模型调用 0.6 万，云服务 0.3 万",
    "机动预算：4.0 万 / 3个月",
    "用于第三方工具、调参、清洗标注、智能硬件等",
    "费用预算总计：4.9 万",
  ],
  fontSize: 9.3,
  gap: 0.36,
});

addBudgetCard(slide, {
  x: 8.72,
  y: 3.38,
  w: 3.72,
  h: 2.58,
  title: "C. 总预算与管理口径",
  fill: C.mintSoft,
  titleColor: "4E8E7C",
  lines: [
    "3个月总预算：34.4 万 + 4.9 万 = 39.3 万",
    "其中人力是决定性投入，费用用于提升验证速度与质量",
    "预算目标不是建设完整产品，而是支撑 O1/O2/O3 闭环",
    "3个月后应形成继续投入 / 孵化 / 暂缓的决策依据",
  ],
  footer: "建议以 39.3 万作为本轮董事长周会的基准版预算申请口径。",
});

slide.addShape(pptx._shapeType.roundRect, {
  x: 0.92,
  y: 6.18,
  w: 11.52,
  h: 0.52,
  rectRadius: 0.06,
  line: { color: C.line, width: 1.1 },
  fill: { color: C.card },
});

slide.addText("汇报口径建议：39.3 万预算买的不是完整产品，而是 3 个月内形成可决策的创新验证结论。", {
  x: 1.16,
  y: 6.35,
  w: 11.0,
  h: 0.18,
  fontFace: "PingFang SC",
  fontSize: 10.2,
  bold: true,
  color: C.title,
  margin: 0,
  align: "center",
});

slide.addText("测算公式：[(6.0 + 2.5) 万 / 月 x 3个月 x 1.35] + [0.2 + 0.1 万 / 月 x 3个月] + 4.0 万机动预算 = 39.3 万。", {
  x: 0.98,
  y: 6.88,
  w: 11.4,
  h: 0.16,
  fontFace: "PingFang SC",
  fontSize: 8.8,
  color: C.body,
  margin: 0,
  align: "center",
});

warnIfSlideHasOverlaps(slide, pptx, {
  muteContainment: true,
  ignoreDecorativeShapes: true,
});
warnIfSlideElementsOutOfBounds(slide, pptx);

pptx.writeFile({ fileName: OUT }).then(() => {
  console.log(`Wrote ${OUT}`);
});
