(function () {
	'use strict';

	var n,
	    u,
	    i,
	    t,
	    o,
	    r = {},
	    f = [],
	    e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

	function c(n, l) {
	  for (var u in l) n[u] = l[u];

	  return n;
	}

	function s(n) {
	  var l = n.parentNode;
	  l && l.removeChild(n);
	}

	function a(n, l, u) {
	  var i,
	      t,
	      o,
	      r = arguments,
	      f = {};

	  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

	  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
	  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) void 0 === f[o] && (f[o] = n.defaultProps[o]);
	  return v(n, f, i, t, null);
	}

	function v(l, u, i, t, o) {
	  var r = {
	    type: l,
	    props: u,
	    key: i,
	    ref: t,
	    __k: null,
	    __: null,
	    __b: 0,
	    __e: null,
	    __d: void 0,
	    __c: null,
	    __h: null,
	    constructor: void 0,
	    __v: null == o ? ++n.__v : o
	  };
	  return null != n.vnode && n.vnode(r), r;
	}

	function y(n) {
	  return n.children;
	}

	function p(n, l) {
	  this.props = n, this.context = l;
	}

	function d(n, l) {
	  if (null == l) return n.__ ? d(n.__, n.__.__k.indexOf(n) + 1) : null;

	  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

	  return "function" == typeof n.type ? d(n) : null;
	}

	function _(n) {
	  var l, u;

	  if (null != (n = n.__) && null != n.__c) {
	    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
	      n.__e = n.__c.base = u.__e;
	      break;
	    }

	    return _(n);
	  }
	}

	function k(l) {
	  (!l.__d && (l.__d = !0) && u.push(l) && !b.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(b);
	}

	function b() {
	  for (var n; b.__r = u.length;) n = u.sort(function (n, l) {
	    return n.__v.__b - l.__v.__b;
	  }), u = [], n.some(function (n) {
	    var l, u, i, t, o, r;
	    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = c({}, t)).__v = t.__v + 1, I(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? d(t) : o, t.__h), T(u, t), t.__e != o && _(t)));
	  });
	}

	function m(n, l, u, i, t, o, e, c, s, a) {
	  var h,
	      p,
	      _,
	      k,
	      b,
	      m,
	      w,
	      A = i && i.__k || f,
	      P = A.length;

	  for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(y, {
	    children: k
	  }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, null, k.__v) : k)) {
	    if (k.__ = u, k.__b = u.__b + 1, null === (_ = A[h]) || _ && k.key == _.key && k.type === _.type) A[h] = void 0;else for (p = 0; p < P; p++) {
	      if ((_ = A[p]) && k.key == _.key && k.type === _.type) {
	        A[p] = void 0;
	        break;
	      }

	      _ = null;
	    }
	    I(n, k, _ = _ || r, t, o, e, c, s, a), b = k.__e, (p = k.ref) && _.ref != p && (w || (w = []), _.ref && w.push(_.ref, null, k), w.push(p, k.__c || b, k)), null != b ? (null == m && (m = b), "function" == typeof k.type && null != k.__k && k.__k === _.__k ? k.__d = s = g(k, s, n) : s = x(n, k, _, A, b, s), a || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && _.__e == s && s.parentNode != n && (s = d(_));
	  }

	  for (u.__e = m, h = P; h--;) null != A[h] && ("function" == typeof u.type && null != A[h].__e && A[h].__e == u.__d && (u.__d = d(i, h + 1)), L(A[h], A[h]));

	  if (w) for (h = 0; h < w.length; h++) z(w[h], w[++h], w[++h]);
	}

	function g(n, l, u) {
	  var i, t;

	  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? g(t, l, u) : x(u, t, t, n.__k, t.__e, l));

	  return l;
	}

	function x(n, l, u, i, t, o) {
	  var r, f, e;
	  if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
	    for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

	    n.insertBefore(t, o), r = o;
	  }
	  return void 0 !== r ? r : t.nextSibling;
	}

	function A(n, l, u, i, t) {
	  var o;

	  for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);

	  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
	}

	function P(n, l, u) {
	  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || e.test(l) ? u : u + "px";
	}

	function C(n, l, u, i, t) {
	  var o;

	  n: if ("style" === l) {
	    if ("string" == typeof u) n.style.cssText = u;else {
	      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || P(n.style, l, "");
	      if (u) for (l in u) i && u[l] === i[l] || P(n.style, l, u[l]);
	    }
	  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? H : $, o) : n.removeEventListener(l, o ? H : $, o);else if ("dangerouslySetInnerHTML" !== l) {
	    if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
	      n[l] = null == u ? "" : u;
	      break n;
	    } catch (n) {}
	    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
	  }
	}

	function $(l) {
	  this.l[l.type + !1](n.event ? n.event(l) : l);
	}

	function H(l) {
	  this.l[l.type + !0](n.event ? n.event(l) : l);
	}

	function I(l, u, i, t, o, r, f, e, s) {
	  var a,
	      v,
	      h,
	      d,
	      _,
	      k,
	      b,
	      g,
	      w,
	      x,
	      A,
	      P = u.type;

	  if (void 0 !== u.constructor) return null;
	  null != i.__h && (s = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = n.__b) && a(u);

	  try {
	    n: if ("function" == typeof P) {
	      if (g = u.props, w = (a = P.contextType) && t[a.__c], x = a ? w ? w.props.value : a.__ : t, i.__c ? b = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new p(g, x), v.constructor = P, v.render = M), w && w.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = c({}, v.__s)), c(v.__s, P.getDerivedStateFromProps(g, v.__s))), d = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
	        if (null == P.getDerivedStateFromProps && g !== d && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
	          v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
	            n && (n.__ = u);
	          }), v.__h.length && f.push(v);
	          break n;
	        }

	        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
	          v.componentDidUpdate(d, _, k);
	        });
	      }
	      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = c(c({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(d, _)), A = null != a && a.type === y && null == a.key ? a.props.children : a, m(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, s), v.base = u.__e, u.__h = null, v.__h.length && f.push(v), b && (v.__E = v.__ = null), v.__e = !1;
	    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = j(i.__e, u, i, t, o, r, f, s);

	    (a = n.diffed) && a(u);
	  } catch (l) {
	    u.__v = null, (s || null != r) && (u.__e = e, u.__h = !!s, r[r.indexOf(e)] = null), n.__e(l, u, i);
	  }
	}

	function T(l, u) {
	  n.__c && n.__c(u, l), l.some(function (u) {
	    try {
	      l = u.__h, u.__h = [], l.some(function (n) {
	        n.call(u);
	      });
	    } catch (l) {
	      n.__e(l, u.__v);
	    }
	  });
	}

	function j(n, l, u, i, t, o, e, c) {
	  var a,
	      v,
	      h,
	      y,
	      p = u.props,
	      d = l.props,
	      _ = l.type,
	      k = 0;
	  if ("svg" === _ && (t = !0), null != o) for (; k < o.length; k++) if ((a = o[k]) && (a === n || (_ ? a.localName == _ : 3 == a.nodeType))) {
	    n = a, o[k] = null;
	    break;
	  }

	  if (null == n) {
	    if (null === _) return document.createTextNode(d);
	    n = t ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, d.is && d), o = null, c = !1;
	  }

	  if (null === _) p === d || c && n.data === d || (n.data = d);else {
	    if (o = o && f.slice.call(n.childNodes), v = (p = u.props || r).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
	      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
	      (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
	    }

	    if (A(n, d, p, t, c), h) l.__k = [];else if (k = l.props.children, m(n, Array.isArray(k) ? k : [k], l, u, i, t && "foreignObject" !== _, o, e, n.firstChild, c), null != o) for (k = o.length; k--;) null != o[k] && s(o[k]);
	    c || ("value" in d && void 0 !== (k = d.value) && (k !== n.value || "progress" === _ && !k) && C(n, "value", k, p.value, !1), "checked" in d && void 0 !== (k = d.checked) && k !== n.checked && C(n, "checked", k, p.checked, !1));
	  }
	  return n;
	}

	function z(l, u, i) {
	  try {
	    "function" == typeof l ? l(u) : l.current = u;
	  } catch (l) {
	    n.__e(l, i);
	  }
	}

	function L(l, u, i) {
	  var t, o, r;

	  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || z(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
	    if (t.componentWillUnmount) try {
	      t.componentWillUnmount();
	    } catch (l) {
	      n.__e(l, u);
	    }
	    t.base = t.__P = null;
	  }

	  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && L(t[r], u, i);
	  null != o && s(o);
	}

	function M(n, l, u) {
	  return this.constructor(n, u);
	}

	function N(l, u, i) {
	  var t, o, e;
	  n.__ && n.__(l, u), o = (t = "function" == typeof i) ? null : i && i.__k || u.__k, e = [], I(u, l = (!t && i || u).__k = a(y, null, [l]), o || r, r, void 0 !== u.ownerSVGElement, !t && i ? [i] : o ? null : u.firstChild ? f.slice.call(u.childNodes) : null, e, !t && i ? i : o ? o.__e : u.firstChild, t), T(e, l);
	}

	n = {
	  __e: function (n, l) {
	    for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
	      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
	    } catch (l) {
	      n = l;
	    }

	    throw n;
	  },
	  __v: 0
	}, p.prototype.setState = function (n, l) {
	  var u;
	  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), "function" == typeof n && (n = n(c({}, u), this.props)), n && c(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
	}, p.prototype.forceUpdate = function (n) {
	  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
	}, p.prototype.render = y, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b.__r = 0, o = 0;

	var t$1,
	    u$1,
	    r$1,
	    o$1 = 0,
	    i$1 = [],
	    c$1 = n.__b,
	    f$1 = n.__r,
	    e$1 = n.diffed,
	    a$1 = n.__c,
	    v$1 = n.unmount;

	function m$1(t, r) {
	  n.__h && n.__h(u$1, t, o$1 || r), o$1 = 0;
	  var i = u$1.__H || (u$1.__H = {
	    __: [],
	    __h: []
	  });
	  return t >= i.__.length && i.__.push({}), i.__[t];
	}

	function l(n) {
	  return o$1 = 1, p$1(w, n);
	}

	function p$1(n, r, o) {
	  var i = m$1(t$1++, 2);
	  return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) {
	    var t = i.t(i.__[0], n);
	    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
	  }], i.__c = u$1), i.__;
	}

	function x$1() {
	  i$1.forEach(function (t) {
	    if (t.__P) try {
	      t.__H.__h.forEach(g$1), t.__H.__h.forEach(j$1), t.__H.__h = [];
	    } catch (u) {
	      t.__H.__h = [], n.__e(u, t.__v);
	    }
	  }), i$1 = [];
	}

	n.__b = function (n) {
	  u$1 = null, c$1 && c$1(n);
	}, n.__r = function (n) {
	  f$1 && f$1(n), t$1 = 0;
	  var r = (u$1 = n.__c).__H;
	  r && (r.__h.forEach(g$1), r.__h.forEach(j$1), r.__h = []);
	}, n.diffed = function (t) {
	  e$1 && e$1(t);
	  var o = t.__c;
	  o && o.__H && o.__H.__h.length && (1 !== i$1.push(o) && r$1 === n.requestAnimationFrame || ((r$1 = n.requestAnimationFrame) || function (n) {
	    var t,
	        u = function () {
	      clearTimeout(r), b$1 && cancelAnimationFrame(t), setTimeout(n);
	    },
	        r = setTimeout(u, 100);

	    b$1 && (t = requestAnimationFrame(u));
	  })(x$1)), u$1 = void 0;
	}, n.__c = function (t, u) {
	  u.some(function (t) {
	    try {
	      t.__h.forEach(g$1), t.__h = t.__h.filter(function (n) {
	        return !n.__ || j$1(n);
	      });
	    } catch (r) {
	      u.some(function (n) {
	        n.__h && (n.__h = []);
	      }), u = [], n.__e(r, t.__v);
	    }
	  }), a$1 && a$1(t, u);
	}, n.unmount = function (t) {
	  v$1 && v$1(t);
	  var u = t.__c;
	  if (u && u.__H) try {
	    u.__H.__.forEach(g$1);
	  } catch (t) {
	    n.__e(t, u.__v);
	  }
	};
	var b$1 = "function" == typeof requestAnimationFrame;

	function g$1(n) {
	  var t = u$1;
	  "function" == typeof n.__c && n.__c(), u$1 = t;
	}

	function j$1(n) {
	  var t = u$1;
	  n.__c = n.__(), u$1 = t;
	}

	function w(n, t) {
	  return "function" == typeof t ? t(n) : t;
	}

	let e$2 = {
	  data: ""
	},
	    t$2 = t => {
	  if ("undefined" != typeof window) {
	    let e = t ? t.querySelector("#_goober") : window._goober;
	    return e || (e = (t || document.head).appendChild(document.createElement("style")), e.innerHTML = " ", e.id = "_goober"), e.firstChild;
	  }

	  return t || e$2;
	},
	    l$1 = /(?:([A-Z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,
	    a$2 = /\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,
	    n$1 = (e, t) => {
	  let r,
	      l = "",
	      a = "",
	      o = "";

	  for (let c in e) {
	    let s = e[c];
	    "object" == typeof s ? (r = t ? t.replace(/([^,])+/g, e => c.replace(/([^,])+/g, t => /&/g.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : c, a += "@" == c[0] ? "f" == c[1] ? n$1(s, c) : c + "{" + n$1(s, "k" == c[1] ? "" : t) + "}" : n$1(s, r)) : "@" == c[0] && "i" == c[1] ? l = c + " " + s + ";" : o += n$1.p ? n$1.p(c.replace(/[A-Z]/g, "-$&").toLowerCase(), s) : c.replace(/[A-Z]/g, "-$&").toLowerCase() + ":" + s + ";";
	  }

	  return o[0] ? (r = t ? t + "{" + o + "}" : o, l + r + a) : l + a;
	},
	    o$2 = {},
	    c$2 = e => {
	  let t = "";

	  for (let r in e) t += r + ("object" == typeof e[r] ? c$2(e[r]) : e[r]);

	  return t;
	},
	    s$1 = (e, t, r, s, i) => {
	  let p = "object" == typeof e ? c$2(e) : e,
	      f = o$2[p] || (o$2[p] = (e => {
	    let t = 0,
	        r = e.length,
	        l = 11;

	    for (; t < r;) l = 101 * l + e.charCodeAt(t++) >>> 0;

	    return "go" + l;
	  })(p));

	  if (!o$2[f]) {
	    let t = "object" == typeof e ? e : (e => {
	      let t,
	          r = [{}];

	      for (; t = l$1.exec(e.replace(a$2, ""));) t[4] && r.shift(), t[3] ? r.unshift(r[0][t[3]] = r[0][t[3]] || {}) : t[4] || (r[0][t[1]] = t[2]);

	      return r[0];
	    })(e);
	    o$2[f] = n$1(i ? {
	      ["@keyframes " + f]: t
	    } : t, r ? "" : "." + f);
	  }

	  return ((e, t, r) => {
	    -1 == t.data.indexOf(e) && (t.data = r ? e + t.data : t.data + e);
	  })(o$2[f], t, s), f;
	},
	    i$2 = (e, t, r) => e.reduce((e, l, a) => {
	  let o = t[a];

	  if (o && o.call) {
	    let e = o(r),
	        t = e && e.props && e.props.className || /^go/.test(e) && e;
	    o = t ? "." + t : e && "object" == typeof e ? e.props ? "" : n$1(e, "") : e;
	  }

	  return e + l + (null == o ? "" : o);
	}, "");

	function p$2(e) {
	  let r = this || {},
	      l = e.call ? e(r.p) : e;
	  return s$1(l.unshift ? l.raw ? i$2(l, [].slice.call(arguments, 1), r.p) : l.reduce((e, t) => t ? Object.assign(e, t.call ? t(r.p) : t) : e, {}) : l, t$2(r.target), r.g, r.o, r.k);
	}

	let f$2,
	    u$2,
	    d$1,
	    g$2 = p$2.bind({
	  g: 1
	}),
	    b$2 = p$2.bind({
	  k: 1
	});

	function h(e, t, r, l) {
	  n$1.p = t, f$2 = e, u$2 = r, d$1 = l;
	}

	function m$2(e, t) {
	  let r = this || {};
	  return function () {
	    let l = arguments;

	    function a(n, o) {
	      let c = Object.assign({}, n),
	          s = c.className || a.className;
	      r.p = Object.assign({
	        theme: u$2 && u$2()
	      }, c), r.o = / *go\d+/g.test(s), c.className = p$2.apply(r, l) + (s ? " " + s : ""), t && (c.ref = o);
	      let i = c.as || e;
	      return d$1 && i[0] && d$1(c), f$2(i, c);
	    }

	    return t ? t(a) : a;
	  };
	}

	// //@ts-check
	let states = {};
	function setState(key, value) {
	  for (const hook of states[key].hooks) {
	    // console.log(hook);
	    hook(value);
	  }
	}
	function useStore(key, init_value) {
	  const [value, setValue] = l(init_value !== undefined ? init_value : (states[key] || {}).initState);

	  if (key in states) {
	    !~states[key].hooks.indexOf(setValue) && states[key].hooks.push(setValue);
	  } else states[key] = {
	    hooks: [setValue],
	    initState: init_value
	  };

	  return [value, setState.bind(null, key)];
	}
	function initStore(init_dict) {
	  for (const key in init_dict) {
	    states[key] = {
	      hooks: [],
	      initState: init_dict[key]
	    };
	  }
	}

	const Button = props => {
	  const [text] = l('minus');
	  const [count, setCount] = useStore('count'); // const { dispatch, count } = useStoreon('count')

	  return a(y, null, a("hr", null), a("div", null, a("button", {
	    onClick: e => setCount(count - 1)
	  }, text, " (", count, ")")));
	};

	h(a);
	const Title = m$2("h1")`
  text-align: center;
  color: red;
`;
	const BtnClassName = p$2`
  background-color: lightgray;
`;

	const App = props => {
	  const [message] = l('State manager working example:');
	  const [count, setCount] = useStore('count');
	  return a(y, null, a("header", null), a("main", {
	    class: BtnClassName
	  }, a("h1", {
	    class: "title"
	  }, message), a("p", null, "works w/o props transfers"), a("button", {
	    onClick: e => setCount(count + 1)
	  }, "Plus (", count, ")")), a(Button, null));
	};

	initStore({
	  count: 9
	});
	N(a(App, null), document.getElementById('root'));

}());
//# sourceMappingURL=bundle.js.map
