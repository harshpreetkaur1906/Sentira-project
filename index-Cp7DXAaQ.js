import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-B6Zdqy5u.js";
import { a as useNavigate, u as useTheme, L as Link } from "./router-CblMheHg.js";
import { c as createLucideIcon, A as AuroraBackground, a as Sun, M as Moon, S as Sparkles, m as motion, B as Button, d as axios } from "./button-BhbdIqPy.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "util";
import "stream";
import "path";
import "http";
import "https";
import "url";
import "fs";
import "crypto";
import "http2";
import "assert";
import "os";
import "zlib";
import "events";
const __iconNode$2 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function AuthLanding() {
  const navigate = useNavigate();
  const {
    theme,
    toggle
  } = useTheme();
  const [mode, setMode] = reactExports.useState("login");
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate({
        to: "/dashboard"
      });
    }
  }, [navigate]);
  const handle = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!email || !password || mode === "register" && !name) {
      setError("Please fill all fields");
      setLoading(false);
      return;
    }
    try {
      if (mode === "register") {
        await axios.post("http://localhost:5000/api/register", {
          name,
          email,
          password
        });
        setMode("login");
        setError("Account created! Please login.");
        setLoading(false);
        return;
      }
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.name || name || email);
      navigate({
        to: "/dashboard"
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AuroraBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-6 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: toggle, className: "p-2 rounded-xl bg-white/10 backdrop-blur hover:scale-105 transition", children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-5 w-5 text-black" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-semibold tracking-tight", children: "Sentira" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:pt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-glass-border bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur", children: "Wellness intelligence, beautifully calm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display text-5xl sm:text-6xl lg:text-7xl", children: [
          "Track your wellness ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "clarity" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground", children: "Sentira gathers your heart rate, sleep, mood and stress into one view." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.section, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-[2rem] p-8 shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-full bg-muted p-1", children: ["login", "register"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode(m), className: `px-4 py-1.5 rounded-full ${mode === m ? "bg-gradient-primary text-white" : ""}`, children: m === "login" ? "Sign in" : "Create account" }, m)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-3xl font-semibold", children: mode === "login" ? "Welcome back" : "Begin your rhythm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handle, className: "mt-6 space-y-4", children: [
          mode === "register" && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { icon: User, label: "Name", value: name, onChange: setName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { icon: Mail, label: "Email", value: email, onChange: setEmail }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border p-3 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showPassword ? "text" : "password", value: password, placeholder: "Password", onChange: (e) => setPassword(e.target.value), className: "w-full bg-transparent outline-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "text-muted-foreground", children: showPassword ? "🙈" : "👁" })
            ] })
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 text-xs", children: error }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "w-full", children: loading ? "Loading..." : mode === "login" ? "Login" : "Create Account" })
        ] })
      ] }) })
    ] })
  ] });
}
function Field({
  icon: Icon,
  label,
  type = "text",
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border p-3 rounded-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, value, placeholder: label, onChange: (e) => onChange(e.target.value), className: "w-full bg-transparent outline-none" })
    ] })
  ] });
}
export {
  AuthLanding as component
};
