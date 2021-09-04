(function () {
	'use strict';

	var n,
	    l,
	    u,
	    t,
	    o,
	    r,
	    f,
	    e = {},
	    c = [],
	    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

	function a(n, l) {
	  for (var u in l) n[u] = l[u];

	  return n;
	}

	function h(n) {
	  var l = n.parentNode;
	  l && l.removeChild(n);
	}

	function v(l, u, i) {
	  var t,
	      o,
	      r,
	      f = {};

	  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

	  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
	  return y(l, f, t, o, null);
	}

	function y(n, i, t, o, r) {
	  var f = {
	    type: n,
	    props: i,
	    key: t,
	    ref: o,
	    __k: null,
	    __: null,
	    __b: 0,
	    __e: null,
	    __d: void 0,
	    __c: null,
	    __h: null,
	    constructor: void 0,
	    __v: null == r ? ++u : r
	  };
	  return null != l.vnode && l.vnode(f), f;
	}

	function d(n) {
	  return n.children;
	}

	function _(n, l) {
	  this.props = n, this.context = l;
	}

	function k(n, l) {
	  if (null == l) return n.__ ? k(n.__, n.__.__k.indexOf(n) + 1) : null;

	  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

	  return "function" == typeof n.type ? k(n) : null;
	}

	function b(n) {
	  var l, u;

	  if (null != (n = n.__) && null != n.__c) {
	    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
	      n.__e = n.__c.base = u.__e;
	      break;
	    }

	    return b(n);
	  }
	}

	function m(n) {
	  (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
	}

	function g() {
	  for (var n; g.__r = t.length;) n = t.sort(function (n, l) {
	    return n.__v.__b - l.__v.__b;
	  }), t = [], n.some(function (n) {
	    var l, u, i, t, o, r;
	    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = a({}, t)).__v = t.__v + 1, j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? k(t) : o, t.__h), z(u, t), t.__e != o && b(t)));
	  });
	}

	function w(n, l, u, i, t, o, r, f, s, a) {
	  var h,
	      v,
	      p,
	      _,
	      b,
	      m,
	      g,
	      w = i && i.__k || c,
	      A = w.length;

	  for (u.__k = [], h = 0; h < l.length; h++) if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y(null, _, null, null, _) : Array.isArray(_) ? y(d, {
	    children: _
	  }, null, null, null) : _.__b > 0 ? y(_.type, _.props, _.key, null, _.__v) : _)) {
	    if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0;else for (v = 0; v < A; v++) {
	      if ((p = w[v]) && _.key == p.key && _.type === p.type) {
	        w[v] = void 0;
	        break;
	      }

	      p = null;
	    }
	    j(n, _, p = p || e, t, o, r, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && null != _.__k && _.__k === p.__k ? _.__d = s = x(_, s, n) : s = P(n, _, p, w, b, s), a || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && p.__e == s && s.parentNode != n && (s = k(p));
	  }

	  for (u.__e = m, h = A; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k(i, h + 1)), N(w[h], w[h]));

	  if (g) for (h = 0; h < g.length; h++) M(g[h], g[++h], g[++h]);
	}

	function x(n, l, u) {
	  var i, t;

	  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? x(t, l, u) : P(u, t, t, n.__k, t.__e, l));

	  return l;
	}

	function P(n, l, u, i, t, o) {
	  var r, f, e;
	  if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
	    for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

	    n.insertBefore(t, o), r = o;
	  }
	  return void 0 !== r ? r : t.nextSibling;
	}

	function C(n, l, u, i, t) {
	  var o;

	  for (o in u) "children" === o || "key" === o || o in l || H(n, o, null, u[o], i);

	  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H(n, o, l[o], u[o], i);
	}

	function $(n, l, u) {
	  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s.test(l) ? u : u + "px";
	}

	function H(n, l, u, i, t) {
	  var o;

	  n: if ("style" === l) {
	    if ("string" == typeof u) n.style.cssText = u;else {
	      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
	      if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
	    }
	  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o);else if ("dangerouslySetInnerHTML" !== l) {
	    if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
	      n[l] = null == u ? "" : u;
	      break n;
	    } catch (n) {}
	    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
	  }
	}

	function I(n) {
	  this.l[n.type + !1](l.event ? l.event(n) : n);
	}

	function T(n) {
	  this.l[n.type + !0](l.event ? l.event(n) : n);
	}

	function j(n, u, i, t, o, r, f, e, c) {
	  var s,
	      h,
	      v,
	      y,
	      p,
	      k,
	      b,
	      m,
	      g,
	      x,
	      A,
	      P = u.type;
	  if (void 0 !== u.constructor) return null;
	  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (s = l.__b) && s(u);

	  try {
	    n: if ("function" == typeof P) {
	      if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new _(m, x), h.constructor = P, h.render = O), g && g.sub(h), h.props = m, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a({}, h.__s)), a(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, p = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
	        if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === i.__v) {
	          h.props = m, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
	            n && (n.__ = u);
	          }), h.__h.length && f.push(h);
	          break n;
	        }

	        null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
	          h.componentDidUpdate(y, p, k);
	        });
	      }
	      h.context = x, h.props = m, h.state = h.__s, (s = l.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a(a({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d && null == s.key ? s.props.children : s, w(n, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
	    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c);

	    (s = l.diffed) && s(u);
	  } catch (n) {
	    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, i);
	  }
	}

	function z(n, u) {
	  l.__c && l.__c(u, n), n.some(function (u) {
	    try {
	      n = u.__h, u.__h = [], n.some(function (n) {
	        n.call(u);
	      });
	    } catch (n) {
	      l.__e(n, u.__v);
	    }
	  });
	}

	function L(l, u, i, t, o, r, f, c) {
	  var s,
	      a,
	      v,
	      y = i.props,
	      p = u.props,
	      d = u.type,
	      _ = 0;
	  if ("svg" === d && (o = !0), null != r) for (; _ < r.length; _++) if ((s = r[_]) && (s === l || (d ? s.localName == d : 3 == s.nodeType))) {
	    l = s, r[_] = null;
	    break;
	  }

	  if (null == l) {
	    if (null === d) return document.createTextNode(p);
	    l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
	  }

	  if (null === d) y === p || c && l.data === p || (l.data = p);else {
	    if (r = r && n.call(l.childNodes), a = (y = i.props || e).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
	      if (null != r) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
	      (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
	    }

	    if (C(l, p, y, o, c), v) u.__k = [];else if (_ = u.props.children, w(l, Array.isArray(_) ? _ : [_], u, i, t, o && "foreignObject" !== d, r, f, r ? r[0] : i.__k && k(i, 0), c), null != r) for (_ = r.length; _--;) null != r[_] && h(r[_]);
	    c || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_) && H(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H(l, "checked", _, y.checked, !1));
	  }
	  return l;
	}

	function M(n, u, i) {
	  try {
	    "function" == typeof n ? n(u) : n.current = u;
	  } catch (n) {
	    l.__e(n, i);
	  }
	}

	function N(n, u, i) {
	  var t, o;

	  if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
	    if (t.componentWillUnmount) try {
	      t.componentWillUnmount();
	    } catch (n) {
	      l.__e(n, u);
	    }
	    t.base = t.__P = null;
	  }

	  if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N(t[o], u, "function" != typeof n.type);
	  i || null == n.__e || h(n.__e), n.__e = n.__d = void 0;
	}

	function O(n, l, u) {
	  return this.constructor(n, u);
	}

	function S(u, i, t) {
	  var o, r, f;
	  l.__ && l.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j(i, u = (!o && t || i).__k = v(d, null, [u]), r || e, e, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, f, !o && t ? t : r ? r.__e : i.firstChild, o), z(f, u);
	}

	n = c.slice, l = {
	  __e: function (n, l) {
	    for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
	      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
	    } catch (l) {
	      n = l;
	    }

	    throw n;
	  }
	}, u = 0, _.prototype.setState = function (n, l) {
	  var u;
	  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(a({}, u), this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), m(this));
	}, _.prototype.forceUpdate = function (n) {
	  this.__v && (this.__e = !0, n && this.__h.push(n), m(this));
	}, _.prototype.render = d, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

	var t$1,
	    u$1,
	    r$1,
	    o$1 = 0,
	    i = [],
	    c$1 = l.__b,
	    f$1 = l.__r,
	    e$1 = l.diffed,
	    a$1 = l.__c,
	    v$1 = l.unmount;

	function m$1(t, r) {
	  l.__h && l.__h(u$1, t, o$1 || r), o$1 = 0;
	  var i = u$1.__H || (u$1.__H = {
	    __: [],
	    __h: []
	  });
	  return t >= i.__.length && i.__.push({}), i.__[t];
	}

	function l$1(n) {
	  return o$1 = 1, p(w$1, n);
	}

	function p(n, r, o) {
	  var i = m$1(t$1++, 2);
	  return i.t = n, i.__c || (i.__ = [o ? o(r) : w$1(void 0, r), function (n) {
	    var t = i.t(i.__[0], n);
	    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
	  }], i.__c = u$1), i.__;
	}

	function x$1() {
	  i.forEach(function (t) {
	    if (t.__P) try {
	      t.__H.__h.forEach(g$1), t.__H.__h.forEach(j$1), t.__H.__h = [];
	    } catch (u) {
	      t.__H.__h = [], l.__e(u, t.__v);
	    }
	  }), i = [];
	}

	l.__b = function (n) {
	  u$1 = null, c$1 && c$1(n);
	}, l.__r = function (n) {
	  f$1 && f$1(n), t$1 = 0;
	  var r = (u$1 = n.__c).__H;
	  r && (r.__h.forEach(g$1), r.__h.forEach(j$1), r.__h = []);
	}, l.diffed = function (t) {
	  e$1 && e$1(t);
	  var o = t.__c;
	  o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r$1 === l.requestAnimationFrame || ((r$1 = l.requestAnimationFrame) || function (n) {
	    var t,
	        u = function () {
	      clearTimeout(r), b$1 && cancelAnimationFrame(t), setTimeout(n);
	    },
	        r = setTimeout(u, 100);

	    b$1 && (t = requestAnimationFrame(u));
	  })(x$1)), u$1 = void 0;
	}, l.__c = function (t, u) {
	  u.some(function (t) {
	    try {
	      t.__h.forEach(g$1), t.__h = t.__h.filter(function (n) {
	        return !n.__ || j$1(n);
	      });
	    } catch (r) {
	      u.some(function (n) {
	        n.__h && (n.__h = []);
	      }), u = [], l.__e(r, t.__v);
	    }
	  }), a$1 && a$1(t, u);
	}, l.unmount = function (t) {
	  v$1 && v$1(t);
	  var u = t.__c;
	  if (u && u.__H) try {
	    u.__H.__.forEach(g$1);
	  } catch (t) {
	    l.__e(t, u.__v);
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

	function w$1(n, t) {
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
	    l$2 = /(?:([A-Z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,
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

	      for (; t = l$2.exec(e.replace(a$2, ""));) t[4] && r.shift(), t[3] ? r.unshift(r[0][t[3]] = r[0][t[3]] || {}) : t[4] || (r[0][t[1]] = t[2]);

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
	    i$1 = (e, t, r) => e.reduce((e, l, a) => {
	  let o = t[a];

	  if (o && o.call) {
	    let e = o(r),
	        t = e && e.props && e.props.className || /^go/.test(e) && e;
	    o = t ? "." + t : e && "object" == typeof e ? e.props ? "" : n$1(e, "") : e;
	  }

	  return e + l + (null == o ? "" : o);
	}, "");

	function p$1(e) {
	  let r = this || {},
	      l = e.call ? e(r.p) : e;
	  return s$1(l.unshift ? l.raw ? i$1(l, [].slice.call(arguments, 1), r.p) : l.reduce((e, t) => t ? Object.assign(e, t.call ? t(r.p) : t) : e, {}) : l, t$2(r.target), r.g, r.o, r.k);
	}

	let f$2,
	    u$2,
	    d$1,
	    g$2 = p$1.bind({
	  g: 1
	}),
	    b$2 = p$1.bind({
	  k: 1
	});

	function h$1(e, t, r, l) {
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
	      }, c), r.o = / *go\d+/g.test(s), c.className = p$1.apply(r, l) + (s ? " " + s : ""), t && (c.ref = o);
	      let i = c.as || e;
	      return d$1 && i[0] && d$1(c), f$2(i, c);
	    }

	    return t ? t(a) : a;
	  };
	}

	//@ts-check

	const Button = props => {
	  const [text] = l$1('minus'); // const [count, setCount] = useStore('count')
	  // const { dispatch, count } = useStoreon('count')

	  return v(d, null, v("hr", null), v("div", null, v("button", {
	    onClick: e => 'setCount(count - 1)'
	  }, text, " (", 'count', ")")));
	};

	//@ts-check
	h$1(v);
	const Title = m$2("h1")`
  text-align: center;
  color: red;
`;
	const BtnClassName = p$1`
  background-color: lightgray;
`;

	const App = props => {
	  const [message] = l$1('State manager working example:'); // const [count, setCount] = useStore('count')

	  return v(d, null, v("header", null), v("main", {
	    className: BtnClassName
	  }, v("h1", {
	    className: "title"
	  }, 'message'), v("p", null, "works w/o props transfers"), v("button", {
	    onClick: e => 'setCount(count + 1)'
	  }, "Plus (", 'count', ")")), v(Button, null));
	};

	//@ts-check
	// import App from './TSApp'
	// import { initStore } from "../../source/state";
	// initStore({
	// 	count: 9
	// })

	S(v(App, null), document.getElementById('root'));

}());
//# sourceMappingURL=bundle.js.map
