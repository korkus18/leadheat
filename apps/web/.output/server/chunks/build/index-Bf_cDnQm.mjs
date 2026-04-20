import { v as vueExports, s as serverRenderer_cjs_prodExports, _ as _export_sfc } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { MessageSquare, Heart, FileText, ArrowDown, User, Flame, Send } from 'lucide-vue-next';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'node:stream';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue';
import 'unhead/plugins';

const _sfc_main$b = /* @__PURE__ */ vueExports.defineComponent({
  __name: "GradientButton",
  __ssrInlineRender: true,
  props: {
    label: {},
    href: {},
    size: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer_cjs_prodExports.ssrRenderVNode(_push, vueExports.createVNode(vueExports.resolveDynamicComponent(__props.href ? "a" : "button"), vueExports.mergeProps({
        href: __props.href,
        class: [
          "btn-shimmer inline-flex items-center justify-center font-semibold text-white rounded-[6px] cursor-pointer border-0",
          __props.size === "sm" ? "px-4 py-2.5 text-[13px]" : __props.size === "lg" ? "px-8 py-3.5 text-base" : "px-6 py-3 text-[15px]"
        ]
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(__props.label)}`);
          } else {
            return [
              vueExports.createTextVNode(vueExports.toDisplayString(__props.label), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/GradientButton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/logo.png");
const _sfc_main$a = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_GradientButton = _sfc_main$b;
  _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "sticky top-0 z-50" }, _attrs))}><header class="navbar-glass" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "border-bottom": "0.5px solid rgba(30,37,53,0.8)" })}"><div class="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[60px]"><div class="flex items-center" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "gap": "10px" })}"><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0)} alt="LeadHeat" width="32" height="32" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "mix-blend-mode": "lighten" })}"><span class="text-[18px] font-bold text-lh-text">LeadHeat</span></div><div class="flex items-center gap-4"><a href="#" class="text-[14px] text-lh-secondary hover:text-lh-text transition-colors duration-200"> Sign in </a>`);
  _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GradientButton, {
    label: "Book a demo",
    size: "sm",
    href: "#demo"
  }, null, _parent));
  _push(`</div></div></header><div class="navbar-glow-line"></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/NavBar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$9 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "SectionLabel",
  __ssrInlineRender: true,
  props: {
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "text-[11px] font-semibold tracking-[0.08em] uppercase text-lh-muted" }, _attrs))}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.text)}</span>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/SectionLabel.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const activities = [
      { icon: vueExports.markRaw(MessageSquare), iconColor: "#A78BFA", text: "Commented on Sarah Chen's post about PLG strategy", time: "2m ago" },
      { icon: vueExports.markRaw(Heart), iconColor: "#EC4899", text: "Liked Marcus Reid's article on outbound automation", time: "8m ago" },
      { icon: vueExports.markRaw(FileText), iconColor: "#F97316", text: "Published post on LinkedIn: 'Cold outreach is broken'", time: "23m ago" },
      { icon: vueExports.markRaw(MessageSquare), iconColor: "#A78BFA", text: "Commented on Aiko Tanaka's post about growth loops", time: "1h ago" },
      { icon: vueExports.markRaw(Heart), iconColor: "#EC4899", text: "Liked Sarah Chen's post about SaaS metrics", time: "2h ago" }
    ];
    const prospects = [
      { initials: "SC", avatarBg: "linear-gradient(135deg, #7C3AED, #EC4899)", name: "Sarah Chen", role: "Head of Growth", score: 84, fill: "84%", scoreColor: "#A78BFA" },
      { initials: "MR", avatarBg: "linear-gradient(135deg, #EC4899, #F97316)", name: "Marcus Reid", role: "VP Sales", score: 61, fill: "61%", scoreColor: "#EC4899" },
      { initials: "AT", avatarBg: "linear-gradient(135deg, #475569, #1E2535)", name: "Aiko Tanaka", role: "Growth Lead", score: 38, fill: "38%", scoreColor: "#8B9AB0" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionLabel = _sfc_main$9;
      const _component_GradientButton = _sfc_main$b;
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: "relative bg-lh-bg overflow-hidden px-6 md:px-12",
        style: { "padding-top": "120px", "padding-bottom": "96px" }
      }, _attrs))}><div class="absolute pointer-events-none" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "top": "10%", "left": "50%", "transform": "translateX(-50%)", "width": "600px", "height": "300px", "background": "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, rgba(236,72,153,0.08) 50%, transparent 70%)", "filter": "blur(60px)", "z-index": "0" })}"></div><div class="relative max-w-[800px] mx-auto text-center" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "z-index": "1" })}"><div class="animate-up">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SectionLabel, { text: "AI Pre-Engagement Engine" }, null, _parent));
      _push(`</div><h1 class="text-lh-text font-bold mt-4 animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "clamp(42px, 6vw, 72px)", "letter-spacing": "-0.03em", "line-height": "1.0" })}" data-delay="50"> Stop sending messages<br> to people who don&#39;t <span class="gradient-word">know</span> you. </h1><p class="text-lh-secondary mx-auto mt-6 animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "18px", "line-height": "1.7", "max-width": "540px" })}" data-delay="100"> LeadHeat builds familiarity with your prospects before you send a single message. Automated comments, likes, and content \u2014 so your outreach lands warm. </p><div class="flex flex-wrap items-center justify-center gap-4 mt-10 animate-up" data-delay="150">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GradientButton, {
        label: "Book a demo",
        size: "lg",
        href: "#demo"
      }, null, _parent));
      _push(`<button class="flex items-center gap-2 text-lh-text font-medium transition-all duration-200 ease-out hover:border-lh-violet" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "background": "transparent", "border": "0.5px solid #1E2535", "border-radius": "6px", "padding": "14px 24px", "font-size": "15px", "cursor": "pointer" })}"> See how it works `);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ArrowDown), {
        size: 16,
        "stroke-width": 1.5
      }, null, _parent));
      _push(`</button></div><p class="mt-12 text-[13px] text-lh-muted animate-up" data-delay="200"> Used by sales teams running LinkedIn outbound </p><div class="mt-16 mx-auto animate-up hero-card-float" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "max-width": "760px" })}" data-delay="250"><div class="gradient-border-wrap"><div style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "background": "#0E1117", "border-radius": "15px", "overflow": "hidden" })}"><div class="flex flex-col md:flex-row"><div class="md:w-[55%]" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "background": "#08090E", "border-bottom": "0.5px solid #1E2535" })}"><div class="md:border-bottom-0 md:border-right" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "border-right": "0.5px solid #1E2535", "height": "100%" })}"><div class="flex items-center justify-between px-4 py-3" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "border-bottom": "0.5px solid #1E2535" })}">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SectionLabel, { text: "Live activity" }, null, _parent));
      _push(`<div class="flex items-center gap-1.5"><div class="ready-indicator"></div><span style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "12px", "color": "#22c55e", "font-weight": "500" })}">Running</span></div></div><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(activities, (item, i) => {
        _push(`<div class="flex items-center gap-2 px-4" style="${serverRenderer_cjs_prodExports.ssrRenderStyle([{ "padding-top": "10px", "padding-bottom": "10px" }, i < activities.length - 1 ? "border-bottom: 0.5px solid #1E2535;" : ""])}"><div class="flex items-center justify-center shrink-0" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "32px", "height": "32px", "border-radius": "50%", "background": "rgba(255,255,255,0.04)" })}">`);
        serverRenderer_cjs_prodExports.ssrRenderVNode(_push, vueExports.createVNode(vueExports.resolveDynamicComponent(item.icon), {
          size: 14,
          "stroke-width": 1.5,
          style: { color: item.iconColor }
        }, null), _parent);
        _push(`</div><span class="text-lh-secondary flex-1 overflow-hidden" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "12px", "white-space": "nowrap", "text-overflow": "ellipsis", "overflow": "hidden" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(item.text)}</span><span class="shrink-0 ml-2 text-lh-muted" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "11px" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(item.time)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="md:w-[45%]" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "padding": "16px" })}"><div class="flex items-center justify-between mb-3">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SectionLabel, { text: "Prospects" }, null, _parent));
      _push(`<span class="text-[11px] font-semibold" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "background": "rgba(124,58,237,0.12)", "color": "#A78BFA", "padding": "2px 8px", "border-radius": "4px" })}"> 3 warming </span></div><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(prospects, (p, i) => {
        _push(`<div class="flex items-center gap-2 py-2" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(i < prospects.length - 1 ? "border-bottom: 0.5px solid #1E2535;" : "")}"><div class="flex items-center justify-center shrink-0" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(`width: 28px; height: 28px; border-radius: 50%; background: ${p.avatarBg};`)}"><span style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "11px", "font-weight": "600", "color": "white" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(p.initials)}</span></div><div class="flex-1 min-w-0"><div class="text-lh-text font-medium truncate" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "12px" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(p.name)}</div><div class="text-lh-muted truncate" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "10px" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(p.role)}</div></div><div class="shrink-0 flex flex-col items-end gap-1" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "64px" })}"><div style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "64px", "height": "4px", "background": "#1E2535", "border-radius": "2px", "overflow": "hidden" })}"><div style="${serverRenderer_cjs_prodExports.ssrRenderStyle(`width: ${p.fill}; height: 100%; background: linear-gradient(90deg, #7C3AED, #EC4899, #F97316); border-radius: 2px;`)}"></div></div><span class="font-semibold" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(`font-size: 11px; color: ${p.scoreColor};`)}">${serverRenderer_cjs_prodExports.ssrInterpolate(p.score)}</span></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HeroSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ProblemSection",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      {
        number: "1\u20135%",
        label: "average reply rate on cold LinkedIn outreach",
        countTo: "5",
        countFormat: "1\u20135%"
      },
      {
        number: "0",
        label: "existing tools that build awareness before outreach"
      },
      {
        number: "7 sec",
        label: "before a prospect decides to ignore your message",
        countTo: "7",
        countFormat: "7 sec"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionLabel = _sfc_main$9;
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: "section-fade-top px-6 md:px-12",
        style: { "padding-top": "96px", "padding-bottom": "96px" }
      }, _attrs))}><div class="max-w-[960px] mx-auto text-center"><div class="animate-up">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SectionLabel, { text: "The problem" }, null, _parent));
      _push(`</div><h2 class="text-lh-text font-semibold mt-4 animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "28px", "letter-spacing": "-0.01em", "line-height": "1.2" })}" data-delay="50"> Cold outreach fails for one reason. </h2><p class="text-lh-secondary mx-auto mt-4 animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "16px", "line-height": "1.7", "max-width": "600px" })}" data-delay="100"> Prospects don&#39;t respond to strangers. They respond to people they&#39;ve seen before \u2014 in their feed, in the same conversations, on topics they care about. Most outbound starts too late. By the time you message them, you&#39;re still a stranger. </p><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(stats, (stat, i) => {
        _push(`<div class="card-hover text-left animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(`background: #08090E; border: 0.5px solid #1E2535; border-radius: 10px; padding: 24px;`)}"${serverRenderer_cjs_prodExports.ssrRenderAttr("data-delay", i * 100)}><div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
          class: "font-bold gradient-text",
          style: { "font-size": "64px", "line-height": "1.0", "filter": "drop-shadow(0 0 16px rgba(236, 72, 153, 0.3))" }
        }, { ref_for: true }, stat.countTo ? { "data-count-to": stat.countTo, "data-count-format": stat.countFormat } : {}))}>${serverRenderer_cjs_prodExports.ssrInterpolate(stat.number)}</div><p class="text-lh-secondary mt-3" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "14px", "line-height": "1.5" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ProblemSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "HowItWorksSection",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        number: "01",
        icon: vueExports.markRaw(User),
        iconColor: "#7C3AED",
        iconBg: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(124,58,237,0.05))",
        iconBorder: "1px solid rgba(124,58,237,0.3)",
        stepGlow: "rgba(124,58,237,0.6)",
        connColor: "linear-gradient(to right, rgba(124,58,237,0.2), rgba(236,72,153,0.4), transparent)",
        align: "start",
        title: "Import your prospects",
        body: "Add a LinkedIn URL, paste a CSV, or connect Clay or Apollo. LeadHeat builds a full behavioral profile: what they read, post, and care about.",
        delay: 0
      },
      {
        number: "02",
        icon: vueExports.markRaw(Flame),
        iconColor: "#EC4899",
        iconBg: "linear-gradient(135deg, rgba(236,72,153,0.2), rgba(236,72,153,0.05))",
        iconBorder: "1px solid rgba(236,72,153,0.3)",
        stepGlow: "rgba(236,72,153,0.5)",
        connColor: "linear-gradient(to right, transparent, rgba(236,72,153,0.4), rgba(249,115,22,0.3))",
        align: "end",
        title: "LeadHeat warms them up",
        body: "AI generates strategic comments, likes, and posts aligned to the prospect's topics. You appear in their feed \u2014 naturally, repeatedly, without looking automated.",
        delay: 100
      },
      {
        number: "03",
        icon: vueExports.markRaw(Send),
        iconColor: "#F97316",
        iconBg: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(249,115,22,0.05))",
        iconBorder: "1px solid rgba(249,115,22,0.3)",
        stepGlow: "rgba(249,115,22,0.5)",
        connColor: null,
        align: "start",
        title: "Message them when they're ready",
        body: "Heat Score tracks familiarity in real time. When it hits 70+, LeadHeat alerts you: the prospect knows who you are. Now you're no longer a stranger.",
        delay: 200
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionLabel = _sfc_main$9;
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        id: "how-it-works",
        class: "hiw-grid-bg px-6 md:px-12",
        style: { "background-color": "#08090E", "padding-top": "96px", "padding-bottom": "96px" }
      }, _attrs))}><div class="max-w-[960px] mx-auto text-center"><div class="animate-up">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SectionLabel, { text: "How it works" }, null, _parent));
      _push(`</div><h2 class="text-lh-text font-semibold mt-4 animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "28px", "letter-spacing": "-0.01em", "line-height": "1.2" })}" data-delay="50"> From cold prospect to warm contact. Automatically. </h2><div class="flex flex-col gap-6 mt-14 text-left"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(steps, (step) => {
        _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([step.align === "end" ? "flex md:justify-end" : "flex md:justify-start", "relative"])}"><div class="hiw-step-card card-hover animate-up w-full md:w-[62%]" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(`--step-glow: ${step.stepGlow}; background: #0E1117; border: 0.5px solid #1E2535; border-radius: 16px; padding: 32px;`)}"${serverRenderer_cjs_prodExports.ssrRenderAttr("data-delay", step.delay)}><div class="text-[16px] font-semibold tracking-[0.08em] uppercase text-lh-muted mb-4">${serverRenderer_cjs_prodExports.ssrInterpolate(step.number)}</div><div class="flex items-center justify-center mb-5" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(`width: 72px; height: 72px; border-radius: 50%; background: ${step.iconBg}; border: ${step.iconBorder};`)}">`);
        serverRenderer_cjs_prodExports.ssrRenderVNode(_push, vueExports.createVNode(vueExports.resolveDynamicComponent(step.icon), {
          size: 32,
          "stroke-width": 1.5,
          style: { color: step.iconColor }
        }, null), _parent);
        _push(`</div><h3 class="text-lh-text font-semibold" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "20px", "letter-spacing": "-0.01em", "line-height": "1.3" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(step.title)}</h3><p class="text-lh-secondary mt-2" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "14px", "line-height": "1.7" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(step.body)}</p></div>`);
        if (step.connColor) {
          _push(`<div class="hidden md:block absolute pointer-events-none" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(`${step.align === "start" ? "right: 0" : "left: 0"}; top: 50%; width: 40%; height: 1px; background: ${step.connColor}; z-index: 0;`)}"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HowItWorksSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const RADIUS = 110;
const STROKE = 10;
const SVG_SIZE = 280;
const _sfc_main$5 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "HeatScoreGauge",
  __ssrInlineRender: true,
  props: {
    score: {},
    animated: { type: Boolean, default: true }
  },
  setup(__props) {
    const CENTER = SVG_SIZE / 2;
    const CIRCUMFERENCE = Math.PI * RADIUS;
    const displayScore = vueExports.ref(0);
    const dashOffset = vueExports.computed(() => {
      const filled = displayScore.value / 100 * CIRCUMFERENCE;
      return CIRCUMFERENCE - filled;
    });
    const statusLabel = vueExports.computed(() => {
      if (displayScore.value < 20) return { text: "Cold", color: "#475569" };
      if (displayScore.value < 40) return { text: "Warming", color: "#8B9AB0" };
      if (displayScore.value < 70) return { text: "Active", color: "#EC4899" };
      return { text: "Ready", color: "#7C3AED" };
    });
    const showPulse = vueExports.computed(() => displayScore.value >= 70);
    const gradientId = `gauge-gradient-${Math.random().toString(36).slice(2)}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex flex-col items-center" }, _attrs))}><svg${serverRenderer_cjs_prodExports.ssrRenderAttr("width", SVG_SIZE)}${serverRenderer_cjs_prodExports.ssrRenderAttr("height", SVG_SIZE / 2 + 20)}${serverRenderer_cjs_prodExports.ssrRenderAttr("viewBox", `0 0 ${SVG_SIZE} ${SVG_SIZE / 2 + 20}`)} overflow="visible"><defs><linearGradient${serverRenderer_cjs_prodExports.ssrRenderAttr("id", gradientId)} x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7C3AED"></stop><stop offset="50%" stop-color="#EC4899"></stop><stop offset="100%" stop-color="#F97316"></stop></linearGradient></defs><path${serverRenderer_cjs_prodExports.ssrRenderAttr("d", `M ${CENTER - RADIUS} ${CENTER} A ${RADIUS} ${RADIUS} 0 0 1 ${CENTER + RADIUS} ${CENTER}`)} fill="none" stroke="#1E2535"${serverRenderer_cjs_prodExports.ssrRenderAttr("stroke-width", STROKE)} stroke-linecap="round"></path><path${serverRenderer_cjs_prodExports.ssrRenderAttr("d", `M ${CENTER - RADIUS} ${CENTER} A ${RADIUS} ${RADIUS} 0 0 1 ${CENTER + RADIUS} ${CENTER}`)} fill="none"${serverRenderer_cjs_prodExports.ssrRenderAttr("stroke", `url(#${gradientId})`)}${serverRenderer_cjs_prodExports.ssrRenderAttr("stroke-width", STROKE)} stroke-linecap="round"${serverRenderer_cjs_prodExports.ssrRenderAttr("stroke-dasharray", CIRCUMFERENCE)}${serverRenderer_cjs_prodExports.ssrRenderAttr("stroke-dashoffset", dashOffset.value)} style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "transition": "stroke-dashoffset 0.05s linear" })}"></path></svg><div class="flex flex-col items-center -mt-4"><div class="flex items-center gap-2"><span class="font-bold leading-none text-lh-text" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "64px" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(displayScore.value)}</span>`);
      if (showPulse.value) {
        _push(`<span class="w-2 h-2 rounded-full bg-lh-violet animate-pulse"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><span class="text-[11px] font-semibold tracking-[0.08em] uppercase mt-1" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ color: statusLabel.value.color })}">${serverRenderer_cjs_prodExports.ssrInterpolate(statusLabel.value.text)}</span><span class="text-[11px] font-semibold tracking-[0.08em] uppercase text-lh-muted mt-0.5"> Heat Score </span></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/HeatScoreGauge.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "HeatScoreSection",
  __ssrInlineRender: true,
  setup(__props) {
    const tiers = [
      { color: "#7C3AED", dotClass: "threshold-dot-ready", range: "0\u201340:", description: "Likes only. Building initial visibility." },
      { color: "#EC4899", dotClass: "threshold-dot-pink", range: "40\u201370:", description: "Contextual commenting. Entering their conversations." },
      { color: "#F97316", dotClass: "threshold-dot-orange", range: "70+:", description: "Ready. They know you. Send the message." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionLabel = _sfc_main$9;
      const _component_HeatScoreGauge = _sfc_main$5;
      const _component_GradientButton = _sfc_main$b;
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: "section-fade-top px-6 md:px-12",
        style: { "padding-top": "96px", "padding-bottom": "96px" }
      }, _attrs))}><div class="max-w-[960px] mx-auto"><div class="flex flex-col md:flex-row gap-16 items-center"><div class="flex-1"><div class="animate-up">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SectionLabel, { text: "Heat Score" }, null, _parent));
      _push(`</div><h2 class="text-lh-text font-semibold mt-4 animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "28px", "letter-spacing": "-0.01em", "line-height": "1.2" })}" data-delay="50"> Know exactly when to reach out. </h2><p class="text-lh-secondary mt-4 animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "16px", "line-height": "1.7", "max-width": "400px" })}" data-delay="100"> Heat Score (0\u2013100) measures how familiar a prospect is with you. It tracks visibility hits, topic alignment, and engagement signals \u2014 and tells you the optimal moment to send a message. </p><div class="flex flex-col gap-4 mt-8 animate-up" data-delay="150"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(tiers, (tier) => {
        _push(`<div class="flex items-start gap-3"><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([tier.dotClass, "w-2 h-2 rounded-full shrink-0 mt-1.5"])}" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ backgroundColor: tier.color })}"></div><span class="text-lh-secondary" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "14px", "line-height": "1.5" })}"><strong class="text-lh-text font-semibold">${serverRenderer_cjs_prodExports.ssrInterpolate(tier.range)}</strong> ${serverRenderer_cjs_prodExports.ssrInterpolate(tier.description)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-col items-center animate-up" data-delay="100"><div class="relative flex items-center justify-center" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "300px", "height": "300px" })}"><div class="absolute pointer-events-none" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "inset": "-20px", "border-radius": "50%", "background": "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 60%)" })}"></div><div class="absolute pointer-events-none" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "inset": "0", "background": "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", "filter": "blur(20px)" })}"></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HeatScoreGauge, {
        score: 84,
        animated: true
      }, null, _parent));
      _push(`</div><div class="mt-6" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "background": "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(236,72,153,0.3), rgba(30,37,53,1) 60%)", "border-radius": "11px", "padding": "1px", "width": "200px" })}"><div class="card-hover" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "background": "#08090E", "border-radius": "10px", "padding": "16px" })}"><div class="flex items-center gap-2 mb-1"><div class="ready-indicator"></div><p class="text-lh-text font-medium" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "13px", "line-height": "1.4" })}"> Sarah Chen is ready to contact </p></div><p class="text-lh-muted" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "12px", "line-height": "1.4", "margin-left": "14px" })}"> Heat Score crossed 70 \xB7 2 hours ago </p><div class="mt-3">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GradientButton, {
        label: "Send message",
        size: "sm",
        href: "#demo",
        class: "w-full"
      }, null, _parent));
      _push(`</div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HeatScoreSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "IntegrationsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const integrations = [
      { name: "Clay", monogram: "Cl" },
      { name: "Apollo", monogram: "Ap" },
      { name: "Leadspicker", monogram: "Ls" },
      { name: "Lemlist", monogram: "Lm" },
      { name: "Instantly", monogram: "In" },
      { name: "HubSpot", monogram: "Hs" }
    ];
    const marqueeItems = [...integrations, ...integrations];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionLabel = _sfc_main$9;
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: "bg-lh-bg px-6 md:px-12",
        style: { "padding-top": "80px", "padding-bottom": "80px" }
      }, _attrs))}><div class="max-w-[960px] mx-auto text-center"><div class="animate-up">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_SectionLabel, { text: "Integrations" }, null, _parent));
      _push(`</div><h2 class="text-lh-text font-semibold mt-4 animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "28px", "letter-spacing": "-0.01em", "line-height": "1.2" })}" data-delay="50"> Fits into your existing stack. </h2><p class="text-lh-secondary mx-auto mt-3 animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "16px", "line-height": "1.7", "max-width": "480px" })}" data-delay="100"> LeadHeat layers between your leadgen and outreach tools. No migration. No workflow changes. </p><div class="integrations-overflow mt-12 animate-up" data-delay="150"><div class="flex flex-col" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "gap": "12px" })}"><div class="integrations-track"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(marqueeItems, (tool, i) => {
        _push(`<div class="flex flex-col items-center gap-3 shrink-0"><div class="integration-tile flex items-center justify-center" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "80px", "height": "80px", "background": "#0E1117", "border": "0.5px solid #1E2535", "border-radius": "10px" })}"><span class="gradient-text" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "20px", "font-weight": "700", "letter-spacing": "-0.02em" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(tool.monogram)}</span></div><span class="text-[12px] text-lh-muted">${serverRenderer_cjs_prodExports.ssrInterpolate(tool.name)}</span></div>`);
      });
      _push(`<!--]--></div><div class="integrations-track-reverse"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(marqueeItems, (tool, i) => {
        _push(`<div class="flex flex-col items-center gap-3 shrink-0"><div class="integration-tile flex items-center justify-center" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "80px", "height": "80px", "background": "#0E1117", "border": "0.5px solid #1E2535", "border-radius": "10px" })}"><span class="gradient-text" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "20px", "font-weight": "700", "letter-spacing": "-0.02em" })}">${serverRenderer_cjs_prodExports.ssrInterpolate(tool.monogram)}</span></div><span class="text-[12px] text-lh-muted">${serverRenderer_cjs_prodExports.ssrInterpolate(tool.name)}</span></div>`);
      });
      _push(`<!--]--></div></div></div><p class="mt-8 text-[13px] text-lh-muted animate-up" data-delay="200"> CSV import and manual entry also supported </p></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/IntegrationsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_GradientButton = _sfc_main$b;
  _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
    id: "demo",
    class: "section-fade-bottom relative overflow-hidden px-6 md:px-12 text-center",
    style: { "padding-top": "120px", "padding-bottom": "120px" }
  }, _attrs))}><div class="absolute pointer-events-none" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "bottom": "-50%", "left": "50%", "transform": "translateX(-50%)", "width": "500px", "height": "400px", "background": "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)", "filter": "blur(40px)", "z-index": "0" })}"></div><div class="relative max-w-[640px] mx-auto" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "z-index": "1" })}"><h2 class="text-lh-text font-semibold animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "28px", "letter-spacing": "-0.01em", "line-height": "1.2" })}"> Your prospects are ignoring your messages.<br> Let&#39;s fix that. </h2><p class="text-lh-secondary mt-4 animate-up" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "font-size": "16px", "line-height": "1.7" })}" data-delay="50"> Book a 20-minute demo. We&#39;ll show you exactly how LeadHeat works and set up your first prospect list. </p><div class="mt-8 animate-up" data-delay="100">`);
  _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_GradientButton, {
    label: "Book a demo",
    size: "lg",
    href: "#demo"
  }, null, _parent));
  _push(`</div><p class="mt-4 text-[13px] text-lh-muted animate-up" data-delay="150"> No commitment. No credit card. </p></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/FinalCtaSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
    class: "bg-lh-bg border-t border-lh-border py-8",
    style: { "border-top-width": "0.5px" }
  }, _attrs))}><div class="max-w-[1200px] mx-auto px-6 flex items-center justify-between"><span class="text-[14px] font-semibold text-lh-muted"> LeadHeat \xA0\xB7\xA0 \xA9 2026 </span><div class="flex gap-6"><a href="#" class="text-[14px] text-lh-muted hover:text-lh-secondary transition-colors duration-200">Privacy</a><a href="#" class="text-[14px] text-lh-muted hover:text-lh-secondary transition-colors duration-200">Terms</a></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = _sfc_main$8;
      const _component_ProblemSection = _sfc_main$7;
      const _component_HowItWorksSection = _sfc_main$6;
      const _component_HeatScoreSection = _sfc_main$4;
      const _component_IntegrationsSection = _sfc_main$3;
      const _component_FinalCtaSection = __nuxt_component_6;
      const _component_Footer = __nuxt_component_7;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "bg-lh-bg" }, _attrs))}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<main>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ProblemSection, null, null, _parent));
      _push(`<div style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "height": "1px", "background": "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(236,72,153,0.3), transparent)", "margin": "0" })}"></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HowItWorksSection, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HeatScoreSection, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_IntegrationsSection, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_FinalCtaSection, null, null, _parent));
      _push(`</main>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bf_cDnQm.mjs.map
