var Fx = Object.create;
var { getPrototypeOf: Px, defineProperty: YN, getOwnPropertyNames: Ax } = Object;
var Ux = Object.prototype.hasOwnProperty;
var L6 = (Q, J, Y) => {
  Y = Q != null ? Fx(Px(Q)) : {};
  let W = J || !Q || !Q.__esModule ? YN(Y, "default", { value: Q, enumerable: !0 }) : Y;
  for (let K of Ax(Q))
    if (!Ux.call(W, K))
      YN(W, K, {
        get: () => Q[K],
        enumerable: !0
      });
  return W;
};
var t1 = (Q, J) => () => (J || Q((J = { exports: {} }).exports, J), J.exports);
var nY = (Q, J) => {
  for (var Y in J)
    YN(Q, Y, {
      get: J[Y],
      enumerable: !0,
      configurable: !0,
      set: (W) => J[Y] = () => W
    });
};

// node_modules/react/cjs/react.development.js
var UQ = t1((Lx, D5) => {
  (function() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function")
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);
    var Q = "18.3.1", J = Symbol.for("react.element"), Y = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), F = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), o = Symbol.iterator, p = "@@iterator";
    function X0(U) {
      if (U === null || typeof U !== "object")
        return null;
      var j = o && U[o] || U[p];
      if (typeof j === "function")
        return j;
      return null;
    }
    var d = {
      current: null
    }, Z0 = {
      transition: null
    }, n = {
      current: null,
      isBatchingLegacy: !1,
      didScheduleLegacyUpdate: !1
    }, r = {
      current: null
    }, i = {}, t = null;
    function O0(U) {
      t = U;
    }
    i.setExtraStackFrame = function(U) {
      t = U;
    }, i.getCurrentStack = null, i.getStackAddendum = function() {
      var U = "";
      if (t)
        U += t;
      var j = i.getCurrentStack;
      if (j)
        U += j() || "";
      return U;
    };
    var I0 = !1, P0 = !1, A0 = !1, y0 = !1, O1 = !1, r0 = {
      ReactCurrentDispatcher: d,
      ReactCurrentBatchConfig: Z0,
      ReactCurrentOwner: r
    };
    r0.ReactDebugCurrentFrame = i, r0.ReactCurrentActQueue = n;
    function x1(U) {
      {
        for (var j = arguments.length, g = new Array(j > 1 ? j - 1 : 0), m = 1;m < j; m++)
          g[m - 1] = arguments[m];
        F1("warn", U, g);
      }
    }
    function k0(U) {
      {
        for (var j = arguments.length, g = new Array(j > 1 ? j - 1 : 0), m = 1;m < j; m++)
          g[m - 1] = arguments[m];
        F1("error", U, g);
      }
    }
    function F1(U, j, g) {
      {
        var m = r0.ReactDebugCurrentFrame, e = m.getStackAddendum();
        if (e !== "")
          j += "%s", g = g.concat([e]);
        var V0 = g.map(function(E0) {
          return String(E0);
        });
        V0.unshift("Warning: " + j), Function.prototype.apply.call(console[U], console, V0);
      }
    }
    var S1 = {};
    function w6(U, j) {
      {
        var g = U.constructor, m = g && (g.displayName || g.name) || "ReactClass", e = m + "." + j;
        if (S1[e])
          return;
        k0("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", j, m), S1[e] = !0;
      }
    }
    var q6 = {
      isMounted: function(U) {
        return !1;
      },
      enqueueForceUpdate: function(U, j, g) {
        w6(U, "forceUpdate");
      },
      enqueueReplaceState: function(U, j, g, m) {
        w6(U, "replaceState");
      },
      enqueueSetState: function(U, j, g, m) {
        w6(U, "setState");
      }
    }, z6 = Object.assign, M6 = {};
    Object.freeze(M6);
    function U1(U, j, g) {
      this.props = U, this.context = j, this.refs = M6, this.updater = g || q6;
    }
    U1.prototype.isReactComponent = {}, U1.prototype.setState = function(U, j) {
      if (typeof U !== "object" && typeof U !== "function" && U != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, U, j, "setState");
    }, U1.prototype.forceUpdate = function(U) {
      this.updater.enqueueForceUpdate(this, U, "forceUpdate");
    };
    {
      var f0 = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, j6 = function(U, j) {
        Object.defineProperty(U1.prototype, U, {
          get: function() {
            x1("%s(...) is deprecated in plain JavaScript React classes. %s", j[0], j[1]);
            return;
          }
        });
      };
      for (var $8 in f0)
        if (f0.hasOwnProperty($8))
          j6($8, f0[$8]);
    }
    function l1() {}
    l1.prototype = U1.prototype;
    function N6(U, j, g) {
      this.props = U, this.context = j, this.refs = M6, this.updater = g || q6;
    }
    var W6 = N6.prototype = new l1;
    W6.constructor = N6, z6(W6, U1.prototype), W6.isPureReactComponent = !0;
    function I1() {
      var U = {
        current: null
      };
      return Object.seal(U), U;
    }
    var u0 = Array.isArray;
    function d1(U) {
      return u0(U);
    }
    function J0(U) {
      {
        var j = typeof Symbol === "function" && Symbol.toStringTag, g = j && U[Symbol.toStringTag] || U.constructor.name || "Object";
        return g;
      }
    }
    function K6(U) {
      try {
        return k1(U), !1;
      } catch (j) {
        return !0;
      }
    }
    function k1(U) {
      return "" + U;
    }
    function _1(U) {
      if (K6(U))
        return k0("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", J0(U)), k1(U);
    }
    function x6(U, j, g) {
      var m = U.displayName;
      if (m)
        return m;
      var e = j.displayName || j.name || "";
      return e !== "" ? g + "(" + e + ")" : g;
    }
    function c8(U) {
      return U.displayName || "Context";
    }
    function u6(U) {
      if (U == null)
        return null;
      if (typeof U.tag === "number")
        k0("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
      if (typeof U === "function")
        return U.displayName || U.name || null;
      if (typeof U === "string")
        return U;
      switch (U) {
        case W:
          return "Fragment";
        case Y:
          return "Portal";
        case z:
          return "Profiler";
        case K:
          return "StrictMode";
        case w:
          return "Suspense";
        case D:
          return "SuspenseList";
      }
      if (typeof U === "object")
        switch (U.$$typeof) {
          case F:
            var j = U;
            return c8(j) + ".Consumer";
          case N:
            var g = U;
            return c8(g._context) + ".Provider";
          case L:
            return x6(U, U.render, "ForwardRef");
          case k:
            var m = U.displayName || null;
            if (m !== null)
              return m;
            return u6(U.type) || "Memo";
          case I: {
            var e = U, V0 = e._payload, E0 = e._init;
            try {
              return u6(E0(V0));
            } catch (x0) {
              return null;
            }
          }
        }
      return null;
    }
    var R8 = Object.prototype.hasOwnProperty, Y8 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, q8, c6, E6;
    E6 = {};
    function RQ(U) {
      if (R8.call(U, "ref")) {
        var j = Object.getOwnPropertyDescriptor(U, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return U.ref !== void 0;
    }
    function k8(U) {
      if (R8.call(U, "key")) {
        var j = Object.getOwnPropertyDescriptor(U, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return U.key !== void 0;
    }
    function qQ(U, j) {
      var g = function() {
        if (!q8)
          q8 = !0, k0("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j);
      };
      g.isReactWarning = !0, Object.defineProperty(U, "key", {
        get: g,
        configurable: !0
      });
    }
    function p6(U, j) {
      var g = function() {
        if (!c6)
          c6 = !0, k0("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j);
      };
      g.isReactWarning = !0, Object.defineProperty(U, "ref", {
        get: g,
        configurable: !0
      });
    }
    function p8(U) {
      if (typeof U.ref === "string" && r.current && U.__self && r.current.stateNode !== U.__self) {
        var j = u6(r.current.type);
        if (!E6[j])
          k0('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j, U.ref), E6[j] = !0;
      }
    }
    var d8 = function(U, j, g, m, e, V0, E0) {
      var x0 = {
        $$typeof: J,
        type: U,
        key: j,
        ref: g,
        props: E0,
        _owner: V0
      };
      if (x0._store = {}, Object.defineProperty(x0._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x0, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(x0, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: e
      }), Object.freeze)
        Object.freeze(x0.props), Object.freeze(x0);
      return x0;
    };
    function kQ(U, j, g) {
      var m, e = {}, V0 = null, E0 = null, x0 = null, z1 = null;
      if (j != null) {
        if (RQ(j))
          E0 = j.ref, p8(j);
        if (k8(j))
          _1(j.key), V0 = "" + j.key;
        x0 = j.__self === void 0 ? null : j.__self, z1 = j.__source === void 0 ? null : j.__source;
        for (m in j)
          if (R8.call(j, m) && !Y8.hasOwnProperty(m))
            e[m] = j[m];
      }
      var v1 = arguments.length - 2;
      if (v1 === 1)
        e.children = g;
      else if (v1 > 1) {
        var s1 = Array(v1);
        for (var o1 = 0;o1 < v1; o1++)
          s1[o1] = arguments[o1 + 2];
        if (Object.freeze)
          Object.freeze(s1);
        e.children = s1;
      }
      if (U && U.defaultProps) {
        var Q6 = U.defaultProps;
        for (m in Q6)
          if (e[m] === void 0)
            e[m] = Q6[m];
      }
      if (V0 || E0) {
        var D6 = typeof U === "function" ? U.displayName || U.name || "Unknown" : U;
        if (V0)
          qQ(e, D6);
        if (E0)
          p6(e, D6);
      }
      return d8(U, V0, E0, x0, z1, r.current, e);
    }
    function Q0(U, j) {
      var g = d8(U.type, j, U.ref, U._self, U._source, U._owner, U.props);
      return g;
    }
    function U0(U, j, g) {
      if (U === null || U === void 0)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + U + ".");
      var m, e = z6({}, U.props), V0 = U.key, E0 = U.ref, x0 = U._self, z1 = U._source, v1 = U._owner;
      if (j != null) {
        if (RQ(j))
          E0 = j.ref, v1 = r.current;
        if (k8(j))
          _1(j.key), V0 = "" + j.key;
        var s1;
        if (U.type && U.type.defaultProps)
          s1 = U.type.defaultProps;
        for (m in j)
          if (R8.call(j, m) && !Y8.hasOwnProperty(m))
            if (j[m] === void 0 && s1 !== void 0)
              e[m] = s1[m];
            else
              e[m] = j[m];
      }
      var o1 = arguments.length - 2;
      if (o1 === 1)
        e.children = g;
      else if (o1 > 1) {
        var Q6 = Array(o1);
        for (var D6 = 0;D6 < o1; D6++)
          Q6[D6] = arguments[D6 + 2];
        e.children = Q6;
      }
      return d8(U.type, V0, E0, x0, z1, v1, e);
    }
    function g0(U) {
      return typeof U === "object" && U !== null && U.$$typeof === J;
    }
    var w1 = ".", T1 = ":";
    function B6(U) {
      var j = /[=:]/g, g = {
        "=": "=0",
        ":": "=2"
      }, m = U.replace(j, function(e) {
        return g[e];
      });
      return "$" + m;
    }
    var c1 = !1, l8 = /\/+/g;
    function J1(U) {
      return U.replace(l8, "$&/");
    }
    function g1(U, j) {
      if (typeof U === "object" && U !== null && U.key != null)
        return _1(U.key), B6("" + U.key);
      return j.toString(36);
    }
    function n1(U, j, g, m, e) {
      var V0 = typeof U;
      if (V0 === "undefined" || V0 === "boolean")
        U = null;
      var E0 = !1;
      if (U === null)
        E0 = !0;
      else
        switch (V0) {
          case "string":
          case "number":
            E0 = !0;
            break;
          case "object":
            switch (U.$$typeof) {
              case J:
              case Y:
                E0 = !0;
            }
        }
      if (E0) {
        var x0 = U, z1 = e(x0), v1 = m === "" ? w1 + g1(x0, 0) : m;
        if (d1(z1)) {
          var s1 = "";
          if (v1 != null)
            s1 = J1(v1) + "/";
          n1(z1, j, s1, "", function(Z7) {
            return Z7;
          });
        } else if (z1 != null) {
          if (g0(z1)) {
            if (z1.key && (!x0 || x0.key !== z1.key))
              _1(z1.key);
            z1 = Q0(z1, g + (z1.key && (!x0 || x0.key !== z1.key) ? J1("" + z1.key) + "/" : "") + v1);
          }
          j.push(z1);
        }
        return 1;
      }
      var o1, Q6, D6 = 0, B1 = m === "" ? w1 : m + T1;
      if (d1(U))
        for (var dJ = 0;dJ < U.length; dJ++)
          o1 = U[dJ], Q6 = B1 + g1(o1, dJ), D6 += n1(o1, j, g, Q6, e);
      else {
        var e$ = X0(U);
        if (typeof e$ === "function") {
          var hq = U;
          if (e$ === hq.entries) {
            if (!c1)
              x1("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
            c1 = !0;
          }
          var X7 = e$.call(hq), oZ, yq = 0;
          while (!(oZ = X7.next()).done)
            o1 = oZ.value, Q6 = B1 + g1(o1, yq++), D6 += n1(o1, j, g, Q6, e);
        } else if (V0 === "object") {
          var fq = String(U);
          throw new Error("Objects are not valid as a React child (found: " + (fq === "[object Object]" ? "object with keys {" + Object.keys(U).join(", ") + "}" : fq) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return D6;
    }
    function r1(U, j, g) {
      if (U == null)
        return U;
      var m = [], e = 0;
      return n1(U, m, "", "", function(V0) {
        return j.call(g, V0, e++);
      }), m;
    }
    function F6(U) {
      var j = 0;
      return r1(U, function() {
        j++;
      }), j;
    }
    function n8(U, j, g) {
      r1(U, function() {
        j.apply(this, arguments);
      }, g);
    }
    function W8(U) {
      return r1(U, function(j) {
        return j;
      }) || [];
    }
    function K8(U) {
      if (!g0(U))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return U;
    }
    function j8(U) {
      var j = {
        $$typeof: F,
        _currentValue: U,
        _currentValue2: U,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      };
      j.Provider = {
        $$typeof: N,
        _context: j
      };
      var g = !1, m = !1, e = !1;
      {
        var V0 = {
          $$typeof: F,
          _context: j
        };
        Object.defineProperties(V0, {
          Provider: {
            get: function() {
              if (!m)
                m = !0, k0("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
              return j.Provider;
            },
            set: function(E0) {
              j.Provider = E0;
            }
          },
          _currentValue: {
            get: function() {
              return j._currentValue;
            },
            set: function(E0) {
              j._currentValue = E0;
            }
          },
          _currentValue2: {
            get: function() {
              return j._currentValue2;
            },
            set: function(E0) {
              j._currentValue2 = E0;
            }
          },
          _threadCount: {
            get: function() {
              return j._threadCount;
            },
            set: function(E0) {
              j._threadCount = E0;
            }
          },
          Consumer: {
            get: function() {
              if (!g)
                g = !0, k0("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
              return j.Consumer;
            }
          },
          displayName: {
            get: function() {
              return j.displayName;
            },
            set: function(E0) {
              if (!e)
                x1("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", E0), e = !0;
            }
          }
        }), j.Consumer = V0;
      }
      return j._currentRenderer = null, j._currentRenderer2 = null, j;
    }
    var H8 = -1, v6 = 0, jQ = 1, s8 = 2;
    function o8(U) {
      if (U._status === H8) {
        var j = U._result, g = j();
        if (g.then(function(V0) {
          if (U._status === v6 || U._status === H8) {
            var E0 = U;
            E0._status = jQ, E0._result = V0;
          }
        }, function(V0) {
          if (U._status === v6 || U._status === H8) {
            var E0 = U;
            E0._status = s8, E0._result = V0;
          }
        }), U._status === H8) {
          var m = U;
          m._status = v6, m._result = g;
        }
      }
      if (U._status === jQ) {
        var e = U._result;
        if (e === void 0)
          k0(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, e);
        if (!("default" in e))
          k0(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, e);
        return e.default;
      } else
        throw U._result;
    }
    function WQ(U) {
      var j = {
        _status: H8,
        _result: U
      }, g = {
        $$typeof: I,
        _payload: j,
        _init: o8
      };
      {
        var m, e;
        Object.defineProperties(g, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return m;
            },
            set: function(V0) {
              k0("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), m = V0, Object.defineProperty(g, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function() {
              return e;
            },
            set: function(V0) {
              k0("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), e = V0, Object.defineProperty(g, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return g;
    }
    function PZ(U) {
      {
        if (U != null && U.$$typeof === k)
          k0("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        else if (typeof U !== "function")
          k0("forwardRef requires a render function but was given %s.", U === null ? "null" : typeof U);
        else if (U.length !== 0 && U.length !== 2)
          k0("forwardRef render functions accept exactly two parameters: props and ref. %s", U.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        if (U != null) {
          if (U.defaultProps != null || U.propTypes != null)
            k0("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        }
      }
      var j = {
        $$typeof: L,
        render: U
      };
      {
        var g;
        Object.defineProperty(j, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return g;
          },
          set: function(m) {
            if (g = m, !U.name && !U.displayName)
              U.displayName = m;
          }
        });
      }
      return j;
    }
    var cQ = Symbol.for("react.module.reference");
    function KQ(U) {
      if (typeof U === "string" || typeof U === "function")
        return !0;
      if (U === W || U === z || O1 || U === K || U === w || U === D || y0 || U === h || I0 || P0 || A0)
        return !0;
      if (typeof U === "object" && U !== null) {
        if (U.$$typeof === I || U.$$typeof === k || U.$$typeof === N || U.$$typeof === F || U.$$typeof === L || U.$$typeof === cQ || U.getModuleId !== void 0)
          return !0;
      }
      return !1;
    }
    function fX(U, j) {
      if (!KQ(U))
        k0("memo: The first argument must be a component. Instead received: %s", U === null ? "null" : typeof U);
      var g = {
        $$typeof: k,
        type: U,
        compare: j === void 0 ? null : j
      };
      {
        var m;
        Object.defineProperty(g, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return m;
          },
          set: function(e) {
            if (m = e, !U.name && !U.displayName)
              U.displayName = e;
          }
        });
      }
      return g;
    }
    function j1() {
      var U = d.current;
      if (U === null)
        k0(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return U;
    }
    function C4(U) {
      var j = j1();
      if (U._context !== void 0) {
        var g = U._context;
        if (g.Consumer === U)
          k0("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
        else if (g.Provider === U)
          k0("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return j.useContext(U);
    }
    function V4(U) {
      var j = j1();
      return j.useState(U);
    }
    function lZ(U, j, g) {
      var m = j1();
      return m.useReducer(U, j, g);
    }
    function d6(U) {
      var j = j1();
      return j.useRef(U);
    }
    function _q(U, j) {
      var g = j1();
      return g.useEffect(U, j);
    }
    function Tq(U, j) {
      var g = j1();
      return g.useInsertionEffect(U, j);
    }
    function n$(U, j) {
      var g = j1();
      return g.useLayoutEffect(U, j);
    }
    function gq(U, j) {
      var g = j1();
      return g.useCallback(U, j);
    }
    function xq(U, j) {
      var g = j1();
      return g.useMemo(U, j);
    }
    function vq(U, j, g) {
      var m = j1();
      return m.useImperativeHandle(U, j, g);
    }
    function mJ(U, j) {
      {
        var g = j1();
        return g.useDebugValue(U, j);
      }
    }
    function s$() {
      var U = j1();
      return U.useTransition();
    }
    function mX(U) {
      var j = j1();
      return j.useDeferredValue(U);
    }
    function $1() {
      var U = j1();
      return U.useId();
    }
    function AZ(U, j, g) {
      var m = j1();
      return m.useSyncExternalStore(U, j, g);
    }
    var UZ = 0, S4, I4, _4, bJ, T4, g4, uJ;
    function o$() {}
    o$.__reactDisabledLog = !0;
    function a$() {
      {
        if (UZ === 0) {
          S4 = console.log, I4 = console.info, _4 = console.warn, bJ = console.error, T4 = console.group, g4 = console.groupCollapsed, uJ = console.groupEnd;
          var U = {
            configurable: !0,
            enumerable: !0,
            value: o$,
            writable: !0
          };
          Object.defineProperties(console, {
            info: U,
            log: U,
            warn: U,
            error: U,
            group: U,
            groupCollapsed: U,
            groupEnd: U
          });
        }
        UZ++;
      }
    }
    function cJ() {
      {
        if (UZ--, UZ === 0) {
          var U = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z6({}, U, {
              value: S4
            }),
            info: z6({}, U, {
              value: I4
            }),
            warn: z6({}, U, {
              value: _4
            }),
            error: z6({}, U, {
              value: bJ
            }),
            group: z6({}, U, {
              value: T4
            }),
            groupCollapsed: z6({}, U, {
              value: g4
            }),
            groupEnd: z6({}, U, {
              value: uJ
            })
          });
        }
        if (UZ < 0)
          k0("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var nZ = r0.ReactCurrentDispatcher, BQ;
    function LZ(U, j, g) {
      {
        if (BQ === void 0)
          try {
            throw Error();
          } catch (e) {
            var m = e.stack.trim().match(/\n( *(at )?)/);
            BQ = m && m[1] || "";
          }
        return `
` + BQ + U;
      }
    }
    var OZ = !1, x4;
    {
      var M = typeof WeakMap === "function" ? WeakMap : Map;
      x4 = new M;
    }
    function V(U, j) {
      if (!U || OZ)
        return "";
      {
        var g = x4.get(U);
        if (g !== void 0)
          return g;
      }
      var m;
      OZ = !0;
      var e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V0;
      V0 = nZ.current, nZ.current = null, a$();
      try {
        if (j) {
          var E0 = function() {
            throw Error();
          };
          if (Object.defineProperty(E0.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect === "object" && Reflect.construct) {
            try {
              Reflect.construct(E0, []);
            } catch (B1) {
              m = B1;
            }
            Reflect.construct(U, [], E0);
          } else {
            try {
              E0.call();
            } catch (B1) {
              m = B1;
            }
            U.call(E0.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B1) {
            m = B1;
          }
          U();
        }
      } catch (B1) {
        if (B1 && m && typeof B1.stack === "string") {
          var x0 = B1.stack.split(`
`), z1 = m.stack.split(`
`), v1 = x0.length - 1, s1 = z1.length - 1;
          while (v1 >= 1 && s1 >= 0 && x0[v1] !== z1[s1])
            s1--;
          for (;v1 >= 1 && s1 >= 0; v1--, s1--)
            if (x0[v1] !== z1[s1]) {
              if (v1 !== 1 || s1 !== 1)
                do
                  if (v1--, s1--, s1 < 0 || x0[v1] !== z1[s1]) {
                    var o1 = `
` + x0[v1].replace(" at new ", " at ");
                    if (U.displayName && o1.includes("<anonymous>"))
                      o1 = o1.replace("<anonymous>", U.displayName);
                    if (typeof U === "function")
                      x4.set(U, o1);
                    return o1;
                  }
                while (v1 >= 1 && s1 >= 0);
              break;
            }
        }
      } finally {
        OZ = !1, nZ.current = V0, cJ(), Error.prepareStackTrace = e;
      }
      var Q6 = U ? U.displayName || U.name : "", D6 = Q6 ? LZ(Q6) : "";
      if (typeof U === "function")
        x4.set(U, D6);
      return D6;
    }
    function y(U, j, g) {
      return V(U, !1);
    }
    function l(U) {
      var j = U.prototype;
      return !!(j && j.isReactComponent);
    }
    function q0(U, j, g) {
      if (U == null)
        return "";
      if (typeof U === "function")
        return V(U, l(U));
      if (typeof U === "string")
        return LZ(U);
      switch (U) {
        case w:
          return LZ("Suspense");
        case D:
          return LZ("SuspenseList");
      }
      if (typeof U === "object")
        switch (U.$$typeof) {
          case L:
            return y(U.render);
          case k:
            return q0(U.type, j, g);
          case I: {
            var m = U, e = m._payload, V0 = m._init;
            try {
              return q0(V0(e), j, g);
            } catch (E0) {}
          }
        }
      return "";
    }
    var Y1 = {}, C0 = r0.ReactDebugCurrentFrame;
    function b0(U) {
      if (U) {
        var j = U._owner, g = q0(U.type, U._source, j ? j.type : null);
        C0.setExtraStackFrame(g);
      } else
        C0.setExtraStackFrame(null);
    }
    function P6(U, j, g, m, e) {
      {
        var V0 = Function.call.bind(R8);
        for (var E0 in U)
          if (V0(U, E0)) {
            var x0 = void 0;
            try {
              if (typeof U[E0] !== "function") {
                var z1 = Error((m || "React class") + ": " + g + " type `" + E0 + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof U[E0] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z1.name = "Invariant Violation", z1;
              }
              x0 = U[E0](j, E0, m, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v1) {
              x0 = v1;
            }
            if (x0 && !(x0 instanceof Error))
              b0(e), k0("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", g, E0, typeof x0), b0(null);
            if (x0 instanceof Error && !(x0.message in Y1))
              Y1[x0.message] = !0, b0(e), k0("Failed %s type: %s", g, x0.message), b0(null);
          }
      }
    }
    function _0(U) {
      if (U) {
        var j = U._owner, g = q0(U.type, U._source, j ? j.type : null);
        O0(g);
      } else
        O0(null);
    }
    var B8 = !1;
    function l6() {
      if (r.current) {
        var U = u6(r.current.type);
        if (U)
          return `

Check the render method of \`` + U + "`.";
      }
      return "";
    }
    function j0(U) {
      if (U !== void 0) {
        var j = U.fileName.replace(/^.*[\\\/]/, ""), g = U.lineNumber;
        return `

Check your code at ` + j + ":" + g + ".";
      }
      return "";
    }
    function HQ(U) {
      if (U !== null && U !== void 0)
        return j0(U.__source);
      return "";
    }
    var G8 = {};
    function wZ(U) {
      var j = l6();
      if (!j) {
        var g = typeof U === "string" ? U : U.displayName || U.name;
        if (g)
          j = `

Check the top-level render call using <` + g + ">.";
      }
      return j;
    }
    function bX(U, j) {
      if (!U._store || U._store.validated || U.key != null)
        return;
      U._store.validated = !0;
      var g = wZ(j);
      if (G8[g])
        return;
      G8[g] = !0;
      var m = "";
      if (U && U._owner && U._owner !== r.current)
        m = " It was passed a child from " + u6(U._owner.type) + ".";
      _0(U), k0('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, m), _0(null);
    }
    function z3(U, j) {
      if (typeof U !== "object")
        return;
      if (d1(U))
        for (var g = 0;g < U.length; g++) {
          var m = U[g];
          if (g0(m))
            bX(m, j);
        }
      else if (g0(U)) {
        if (U._store)
          U._store.validated = !0;
      } else if (U) {
        var e = X0(U);
        if (typeof e === "function") {
          if (e !== U.entries) {
            var V0 = e.call(U), E0;
            while (!(E0 = V0.next()).done)
              if (g0(E0.value))
                bX(E0.value, j);
          }
        }
      }
    }
    function z8(U) {
      {
        var j = U.type;
        if (j === null || j === void 0 || typeof j === "string")
          return;
        var g;
        if (typeof j === "function")
          g = j.propTypes;
        else if (typeof j === "object" && (j.$$typeof === L || j.$$typeof === k))
          g = j.propTypes;
        else
          return;
        if (g) {
          var m = u6(j);
          P6(g, U.props, "prop", m, U);
        } else if (j.PropTypes !== void 0 && !B8) {
          B8 = !0;
          var e = u6(j);
          k0("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", e || "Unknown");
        }
        if (typeof j.getDefaultProps === "function" && !j.getDefaultProps.isReactClassApproved)
          k0("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function A6(U) {
      {
        var j = Object.keys(U.props);
        for (var g = 0;g < j.length; g++) {
          var m = j[g];
          if (m !== "children" && m !== "key") {
            _0(U), k0("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), _0(null);
            break;
          }
        }
        if (U.ref !== null)
          _0(U), k0("Invalid attribute `ref` supplied to `React.Fragment`."), _0(null);
      }
    }
    function N3(U, j, g) {
      var m = KQ(U);
      if (!m) {
        var e = "";
        if (U === void 0 || typeof U === "object" && U !== null && Object.keys(U).length === 0)
          e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        var V0 = HQ(j);
        if (V0)
          e += V0;
        else
          e += l6();
        var E0;
        if (U === null)
          E0 = "null";
        else if (d1(U))
          E0 = "array";
        else if (U !== void 0 && U.$$typeof === J)
          E0 = "<" + (u6(U.type) || "Unknown") + " />", e = " Did you accidentally export a JSX literal instead of a component?";
        else
          E0 = typeof U;
        k0("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E0, e);
      }
      var x0 = kQ.apply(this, arguments);
      if (x0 == null)
        return x0;
      if (m)
        for (var z1 = 2;z1 < arguments.length; z1++)
          z3(arguments[z1], U);
      if (U === W)
        A6(x0);
      else
        z8(x0);
      return x0;
    }
    var pQ = !1;
    function CQ(U) {
      var j = N3.bind(null, U);
      j.type = U;
      {
        if (!pQ)
          pQ = !0, x1("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
        Object.defineProperty(j, "type", {
          enumerable: !1,
          get: function() {
            return x1("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: U
            }), U;
          }
        });
      }
      return j;
    }
    function MZ(U, j, g) {
      var m = U0.apply(this, arguments);
      for (var e = 2;e < arguments.length; e++)
        z3(arguments[e], m.type);
      return z8(m), m;
    }
    function Q7(U, j) {
      var g = Z0.transition;
      Z0.transition = {};
      var m = Z0.transition;
      Z0.transition._updatedFibers = /* @__PURE__ */ new Set;
      try {
        U();
      } finally {
        if (Z0.transition = g, g === null && m._updatedFibers) {
          var e = m._updatedFibers.size;
          if (e > 10)
            x1("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
          m._updatedFibers.clear();
        }
      }
    }
    var r$ = !1, pJ = null;
    function E3(U) {
      if (pJ === null)
        try {
          var j = ("require" + Math.random()).slice(0, 7), g = D5 && D5[j];
          pJ = g.call(D5, "timers").setImmediate;
        } catch (m) {
          pJ = function(e) {
            if (r$ === !1) {
              if (r$ = !0, typeof MessageChannel === "undefined")
                k0("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
            }
            var V0 = new MessageChannel;
            V0.port1.onmessage = e, V0.port2.postMessage(void 0);
          };
        }
      return pJ(U);
    }
    var v4 = 0, F3 = !1;
    function P3(U) {
      {
        var j = v4;
        if (v4++, n.current === null)
          n.current = [];
        var g = n.isBatchingLegacy, m;
        try {
          if (n.isBatchingLegacy = !0, m = U(), !g && n.didScheduleLegacyUpdate) {
            var e = n.current;
            if (e !== null)
              n.didScheduleLegacyUpdate = !1, t$(e);
          }
        } catch (Q6) {
          throw sZ(j), Q6;
        } finally {
          n.isBatchingLegacy = g;
        }
        if (m !== null && typeof m === "object" && typeof m.then === "function") {
          var V0 = m, E0 = !1, x0 = {
            then: function(Q6, D6) {
              E0 = !0, V0.then(function(B1) {
                if (sZ(j), v4 === 0)
                  i$(B1, Q6, D6);
                else
                  Q6(B1);
              }, function(B1) {
                sZ(j), D6(B1);
              });
            }
          };
          if (!F3 && typeof Promise !== "undefined")
            Promise.resolve().then(function() {}).then(function() {
              if (!E0)
                F3 = !0, k0("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
            });
          return x0;
        } else {
          var z1 = m;
          if (sZ(j), v4 === 0) {
            var v1 = n.current;
            if (v1 !== null)
              t$(v1), n.current = null;
            var s1 = {
              then: function(Q6, D6) {
                if (n.current === null)
                  n.current = [], i$(z1, Q6, D6);
                else
                  Q6(z1);
              }
            };
            return s1;
          } else {
            var o1 = {
              then: function(Q6, D6) {
                Q6(z1);
              }
            };
            return o1;
          }
        }
      }
    }
    function sZ(U) {
      {
        if (U !== v4 - 1)
          k0("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        v4 = U;
      }
    }
    function i$(U, j, g) {
      {
        var m = n.current;
        if (m !== null)
          try {
            t$(m), E3(function() {
              if (m.length === 0)
                n.current = null, j(U);
              else
                i$(U, j, g);
            });
          } catch (e) {
            g(e);
          }
        else
          j(U);
      }
    }
    var h4 = !1;
    function t$(U) {
      if (!h4) {
        h4 = !0;
        var j = 0;
        try {
          for (;j < U.length; j++) {
            var g = U[j];
            do
              g = g(!0);
            while (g !== null);
          }
          U.length = 0;
        } catch (m) {
          throw U = U.slice(j + 1), m;
        } finally {
          h4 = !1;
        }
      }
    }
    var A3 = N3, U3 = MZ, L3 = CQ, O3 = {
      map: r1,
      forEach: n8,
      count: F6,
      toArray: W8,
      only: K8
    };
    if (Lx.Children = O3, Lx.Component = U1, Lx.Fragment = W, Lx.Profiler = z, Lx.PureComponent = N6, Lx.StrictMode = K, Lx.Suspense = w, Lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r0, Lx.act = P3, Lx.cloneElement = U3, Lx.createContext = j8, Lx.createElement = A3, Lx.createFactory = L3, Lx.createRef = I1, Lx.forwardRef = PZ, Lx.isValidElement = g0, Lx.lazy = WQ, Lx.memo = fX, Lx.startTransition = Q7, Lx.unstable_act = P3, Lx.useCallback = gq, Lx.useContext = C4, Lx.useDebugValue = mJ, Lx.useDeferredValue = mX, Lx.useEffect = _q, Lx.useId = $1, Lx.useImperativeHandle = vq, Lx.useInsertionEffect = Tq, Lx.useLayoutEffect = n$, Lx.useMemo = xq, Lx.useReducer = lZ, Lx.useRef = d6, Lx.useState = V4, Lx.useSyncExternalStore = AZ, Lx.useTransition = s$, Lx.version = Q, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function")
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error);
  })();
});

// node_modules/scheduler/cjs/scheduler.development.js
var Aw = t1((Ox) => {
  (function() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function")
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);
    var Q = !1, J = !1, Y = 5;
    function W(Q0, U0) {
      var g0 = Q0.length;
      Q0.push(U0), N(Q0, U0, g0);
    }
    function K(Q0) {
      return Q0.length === 0 ? null : Q0[0];
    }
    function z(Q0) {
      if (Q0.length === 0)
        return null;
      var U0 = Q0[0], g0 = Q0.pop();
      if (g0 !== U0)
        Q0[0] = g0, F(Q0, g0, 0);
      return U0;
    }
    function N(Q0, U0, g0) {
      var w1 = g0;
      while (w1 > 0) {
        var T1 = w1 - 1 >>> 1, B6 = Q0[T1];
        if (L(B6, U0) > 0)
          Q0[T1] = U0, Q0[w1] = B6, w1 = T1;
        else
          return;
      }
    }
    function F(Q0, U0, g0) {
      var w1 = g0, T1 = Q0.length, B6 = T1 >>> 1;
      while (w1 < B6) {
        var c1 = (w1 + 1) * 2 - 1, l8 = Q0[c1], J1 = c1 + 1, g1 = Q0[J1];
        if (L(l8, U0) < 0)
          if (J1 < T1 && L(g1, l8) < 0)
            Q0[w1] = g1, Q0[J1] = U0, w1 = J1;
          else
            Q0[w1] = l8, Q0[c1] = U0, w1 = c1;
        else if (J1 < T1 && L(g1, U0) < 0)
          Q0[w1] = g1, Q0[J1] = U0, w1 = J1;
        else
          return;
      }
    }
    function L(Q0, U0) {
      var g0 = Q0.sortIndex - U0.sortIndex;
      return g0 !== 0 ? g0 : Q0.id - U0.id;
    }
    var w = 1, D = 2, k = 3, I = 4, h = 5;
    function o(Q0, U0) {}
    var p = typeof performance === "object" && typeof performance.now === "function";
    if (p) {
      var X0 = performance;
      Ox.unstable_now = function() {
        return X0.now();
      };
    } else {
      var d = Date, Z0 = d.now();
      Ox.unstable_now = function() {
        return d.now() - Z0;
      };
    }
    var n = 1073741823, r = -1, i = 250, t = 5000, O0 = 1e4, I0 = n, P0 = [], A0 = [], y0 = 1, O1 = null, r0 = k, x1 = !1, k0 = !1, F1 = !1, S1 = typeof setTimeout === "function" ? setTimeout : null, w6 = typeof clearTimeout === "function" ? clearTimeout : null, q6 = typeof setImmediate !== "undefined" ? setImmediate : null, z6 = typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;
    function M6(Q0) {
      var U0 = K(A0);
      while (U0 !== null) {
        if (U0.callback === null)
          z(A0);
        else if (U0.startTime <= Q0)
          z(A0), U0.sortIndex = U0.expirationTime, W(P0, U0);
        else
          return;
        U0 = K(A0);
      }
    }
    function U1(Q0) {
      if (F1 = !1, M6(Q0), !k0)
        if (K(P0) !== null)
          k0 = !0, qQ(f0);
        else {
          var U0 = K(A0);
          if (U0 !== null)
            p6(U1, U0.startTime - Q0);
        }
    }
    function f0(Q0, U0) {
      if (k0 = !1, F1)
        F1 = !1, p8();
      x1 = !0;
      var g0 = r0;
      try {
        if (J)
          try {
            return j6(Q0, U0);
          } catch (T1) {
            if (O1 !== null) {
              var w1 = Ox.unstable_now();
              o(O1, w1), O1.isQueued = !1;
            }
            throw T1;
          }
        else
          return j6(Q0, U0);
      } finally {
        O1 = null, r0 = g0, x1 = !1;
      }
    }
    function j6(Q0, U0) {
      var g0 = U0;
      M6(g0), O1 = K(P0);
      while (O1 !== null && !Q) {
        if (O1.expirationTime > g0 && (!Q0 || R8()))
          break;
        var w1 = O1.callback;
        if (typeof w1 === "function") {
          O1.callback = null, r0 = O1.priorityLevel;
          var T1 = O1.expirationTime <= g0, B6 = w1(T1);
          if (g0 = Ox.unstable_now(), typeof B6 === "function")
            O1.callback = B6;
          else if (O1 === K(P0))
            z(P0);
          M6(g0);
        } else
          z(P0);
        O1 = K(P0);
      }
      if (O1 !== null)
        return !0;
      else {
        var c1 = K(A0);
        if (c1 !== null)
          p6(U1, c1.startTime - g0);
        return !1;
      }
    }
    function $8(Q0, U0) {
      switch (Q0) {
        case w:
        case D:
        case k:
        case I:
        case h:
          break;
        default:
          Q0 = k;
      }
      var g0 = r0;
      r0 = Q0;
      try {
        return U0();
      } finally {
        r0 = g0;
      }
    }
    function l1(Q0) {
      var U0;
      switch (r0) {
        case w:
        case D:
        case k:
          U0 = k;
          break;
        default:
          U0 = r0;
          break;
      }
      var g0 = r0;
      r0 = U0;
      try {
        return Q0();
      } finally {
        r0 = g0;
      }
    }
    function N6(Q0) {
      var U0 = r0;
      return function() {
        var g0 = r0;
        r0 = U0;
        try {
          return Q0.apply(this, arguments);
        } finally {
          r0 = g0;
        }
      };
    }
    function W6(Q0, U0, g0) {
      var w1 = Ox.unstable_now(), T1;
      if (typeof g0 === "object" && g0 !== null) {
        var B6 = g0.delay;
        if (typeof B6 === "number" && B6 > 0)
          T1 = w1 + B6;
        else
          T1 = w1;
      } else
        T1 = w1;
      var c1;
      switch (Q0) {
        case w:
          c1 = r;
          break;
        case D:
          c1 = i;
          break;
        case h:
          c1 = I0;
          break;
        case I:
          c1 = O0;
          break;
        case k:
        default:
          c1 = t;
          break;
      }
      var l8 = T1 + c1, J1 = {
        id: y0++,
        callback: U0,
        priorityLevel: Q0,
        startTime: T1,
        expirationTime: l8,
        sortIndex: -1
      };
      if (T1 > w1) {
        if (J1.sortIndex = T1, W(A0, J1), K(P0) === null && J1 === K(A0)) {
          if (F1)
            p8();
          else
            F1 = !0;
          p6(U1, T1 - w1);
        }
      } else if (J1.sortIndex = l8, W(P0, J1), !k0 && !x1)
        k0 = !0, qQ(f0);
      return J1;
    }
    function I1() {}
    function u0() {
      if (!k0 && !x1)
        k0 = !0, qQ(f0);
    }
    function d1() {
      return K(P0);
    }
    function J0(Q0) {
      Q0.callback = null;
    }
    function K6() {
      return r0;
    }
    var k1 = !1, _1 = null, x6 = -1, c8 = Y, u6 = -1;
    function R8() {
      var Q0 = Ox.unstable_now() - u6;
      if (Q0 < c8)
        return !1;
      return !0;
    }
    function Y8() {}
    function q8(Q0) {
      if (Q0 < 0 || Q0 > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      if (Q0 > 0)
        c8 = Math.floor(1000 / Q0);
      else
        c8 = Y;
    }
    var c6 = function() {
      if (_1 !== null) {
        var Q0 = Ox.unstable_now();
        u6 = Q0;
        var U0 = !0, g0 = !0;
        try {
          g0 = _1(U0, Q0);
        } finally {
          if (g0)
            E6();
          else
            k1 = !1, _1 = null;
        }
      } else
        k1 = !1;
    }, E6;
    if (typeof q6 === "function")
      E6 = function() {
        q6(c6);
      };
    else if (typeof MessageChannel !== "undefined") {
      var RQ = new MessageChannel, k8 = RQ.port2;
      RQ.port1.onmessage = c6, E6 = function() {
        k8.postMessage(null);
      };
    } else
      E6 = function() {
        S1(c6, 0);
      };
    function qQ(Q0) {
      if (_1 = Q0, !k1)
        k1 = !0, E6();
    }
    function p6(Q0, U0) {
      x6 = S1(function() {
        Q0(Ox.unstable_now());
      }, U0);
    }
    function p8() {
      w6(x6), x6 = -1;
    }
    var d8 = Y8, kQ = null;
    if (Ox.unstable_IdlePriority = h, Ox.unstable_ImmediatePriority = w, Ox.unstable_LowPriority = I, Ox.unstable_NormalPriority = k, Ox.unstable_Profiling = kQ, Ox.unstable_UserBlockingPriority = D, Ox.unstable_cancelCallback = J0, Ox.unstable_continueExecution = u0, Ox.unstable_forceFrameRate = q8, Ox.unstable_getCurrentPriorityLevel = K6, Ox.unstable_getFirstCallbackNode = d1, Ox.unstable_next = l1, Ox.unstable_pauseExecution = I1, Ox.unstable_requestPaint = d8, Ox.unstable_runWithPriority = $8, Ox.unstable_scheduleCallback = W6, Ox.unstable_shouldYield = R8, Ox.unstable_wrapCallback = N6, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function")
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error);
  })();
});

// node_modules/react-dom/cjs/react-dom.development.js
var Uw = t1((wx) => {
  var FK = L6(UQ(), 1), m1 = L6(Aw(), 1);
  (function() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function")
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);
    var Q = FK.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, J = !1;
    function Y(X) {
      J = X;
    }
    function W(X) {
      if (!J) {
        for (var Z = arguments.length, $ = new Array(Z > 1 ? Z - 1 : 0), q = 1;q < Z; q++)
          $[q - 1] = arguments[q];
        z("warn", X, $);
      }
    }
    function K(X) {
      if (!J) {
        for (var Z = arguments.length, $ = new Array(Z > 1 ? Z - 1 : 0), q = 1;q < Z; q++)
          $[q - 1] = arguments[q];
        z("error", X, $);
      }
    }
    function z(X, Z, $) {
      {
        var q = Q.ReactDebugCurrentFrame, H = q.getStackAddendum();
        if (H !== "")
          Z += "%s", $ = $.concat([H]);
        var G = $.map(function(E) {
          return String(E);
        });
        G.unshift("Warning: " + Z), Function.prototype.apply.call(console[X], console, G);
      }
    }
    var N = 0, F = 1, L = 2, w = 3, D = 4, k = 5, I = 6, h = 7, o = 8, p = 9, X0 = 10, d = 11, Z0 = 12, n = 13, r = 14, i = 15, t = 16, O0 = 17, I0 = 18, P0 = 19, A0 = 21, y0 = 22, O1 = 23, r0 = 24, x1 = 25, k0 = !0, F1 = !1, S1 = !1, w6 = !1, q6 = !1, z6 = !0, M6 = !1, U1 = !0, f0 = !0, j6 = !0, $8 = !0, l1 = /* @__PURE__ */ new Set, N6 = {}, W6 = {};
    function I1(X, Z) {
      u0(X, Z), u0(X + "Capture", Z);
    }
    function u0(X, Z) {
      if (N6[X])
        K("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", X);
      N6[X] = Z;
      {
        var $ = X.toLowerCase();
        if (W6[$] = X, X === "onDoubleClick")
          W6.ondblclick = X;
      }
      for (var q = 0;q < Z.length; q++)
        l1.add(Z[q]);
    }
    var d1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined", J0 = Object.prototype.hasOwnProperty;
    function K6(X) {
      {
        var Z = typeof Symbol === "function" && Symbol.toStringTag, $ = Z && X[Symbol.toStringTag] || X.constructor.name || "Object";
        return $;
      }
    }
    function k1(X) {
      try {
        return _1(X), !1;
      } catch (Z) {
        return !0;
      }
    }
    function _1(X) {
      return "" + X;
    }
    function x6(X, Z) {
      if (k1(X))
        return K("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", Z, K6(X)), _1(X);
    }
    function c8(X) {
      if (k1(X))
        return K("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", K6(X)), _1(X);
    }
    function u6(X, Z) {
      if (k1(X))
        return K("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", Z, K6(X)), _1(X);
    }
    function R8(X, Z) {
      if (k1(X))
        return K("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", Z, K6(X)), _1(X);
    }
    function Y8(X) {
      if (k1(X))
        return K("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", K6(X)), _1(X);
    }
    function q8(X) {
      if (k1(X))
        return K("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", K6(X)), _1(X);
    }
    var c6 = 0, E6 = 1, RQ = 2, k8 = 3, qQ = 4, p6 = 5, p8 = 6, d8 = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", kQ = d8 + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Q0 = new RegExp("^[" + d8 + "][" + kQ + "]*$"), U0 = {}, g0 = {};
    function w1(X) {
      if (J0.call(g0, X))
        return !0;
      if (J0.call(U0, X))
        return !1;
      if (Q0.test(X))
        return g0[X] = !0, !0;
      return U0[X] = !0, K("Invalid attribute name: `%s`", X), !1;
    }
    function T1(X, Z, $) {
      if (Z !== null)
        return Z.type === c6;
      if ($)
        return !1;
      if (X.length > 2 && (X[0] === "o" || X[0] === "O") && (X[1] === "n" || X[1] === "N"))
        return !0;
      return !1;
    }
    function B6(X, Z, $, q) {
      if ($ !== null && $.type === c6)
        return !1;
      switch (typeof Z) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (q)
            return !1;
          if ($ !== null)
            return !$.acceptsBooleans;
          else {
            var H = X.toLowerCase().slice(0, 5);
            return H !== "data-" && H !== "aria-";
          }
        }
        default:
          return !1;
      }
    }
    function c1(X, Z, $, q) {
      if (Z === null || typeof Z === "undefined")
        return !0;
      if (B6(X, Z, $, q))
        return !0;
      if (q)
        return !1;
      if ($ !== null)
        switch ($.type) {
          case k8:
            return !Z;
          case qQ:
            return Z === !1;
          case p6:
            return isNaN(Z);
          case p8:
            return isNaN(Z) || Z < 1;
        }
      return !1;
    }
    function l8(X) {
      return g1.hasOwnProperty(X) ? g1[X] : null;
    }
    function J1(X, Z, $, q, H, G, E) {
      this.acceptsBooleans = Z === RQ || Z === k8 || Z === qQ, this.attributeName = q, this.attributeNamespace = H, this.mustUseProperty = $, this.propertyName = X, this.type = Z, this.sanitizeURL = G, this.removeEmptyString = E;
    }
    var g1 = {}, n1 = [
      "children",
      "dangerouslySetInnerHTML",
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    n1.forEach(function(X) {
      g1[X] = new J1(X, c6, !1, X, null, !1, !1);
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(X) {
      var Z = X[0], $ = X[1];
      g1[Z] = new J1(Z, E6, !1, $, null, !1, !1);
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(X) {
      g1[X] = new J1(X, RQ, !1, X.toLowerCase(), null, !1, !1);
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(X) {
      g1[X] = new J1(X, RQ, !1, X, null, !1, !1);
    }), [
      "allowFullScreen",
      "async",
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      "itemScope"
    ].forEach(function(X) {
      g1[X] = new J1(X, k8, !1, X.toLowerCase(), null, !1, !1);
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(X) {
      g1[X] = new J1(X, k8, !0, X, null, !1, !1);
    }), [
      "capture",
      "download"
    ].forEach(function(X) {
      g1[X] = new J1(X, qQ, !1, X, null, !1, !1);
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(X) {
      g1[X] = new J1(X, p8, !1, X, null, !1, !1);
    }), ["rowSpan", "start"].forEach(function(X) {
      g1[X] = new J1(X, p6, !1, X.toLowerCase(), null, !1, !1);
    });
    var r1 = /[\-\:]([a-z])/g, F6 = function(X) {
      return X[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
    ].forEach(function(X) {
      var Z = X.replace(r1, F6);
      g1[Z] = new J1(Z, E6, !1, X, null, !1, !1);
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
    ].forEach(function(X) {
      var Z = X.replace(r1, F6);
      g1[Z] = new J1(Z, E6, !1, X, "http://www.w3.org/1999/xlink", !1, !1);
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(X) {
      var Z = X.replace(r1, F6);
      g1[Z] = new J1(Z, E6, !1, X, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }), ["tabIndex", "crossOrigin"].forEach(function(X) {
      g1[X] = new J1(X, E6, !1, X.toLowerCase(), null, !1, !1);
    });
    var n8 = "xlinkHref";
    g1[n8] = new J1("xlinkHref", E6, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(X) {
      g1[X] = new J1(X, E6, !1, X.toLowerCase(), null, !0, !0);
    });
    var W8 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, K8 = !1;
    function j8(X) {
      if (!K8 && W8.test(X))
        K8 = !0, K("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(X));
    }
    function H8(X, Z, $, q) {
      if (q.mustUseProperty) {
        var H = q.propertyName;
        return X[H];
      } else {
        if (x6($, Z), q.sanitizeURL)
          j8("" + $);
        var G = q.attributeName, E = null;
        if (q.type === qQ) {
          if (X.hasAttribute(G)) {
            var P = X.getAttribute(G);
            if (P === "")
              return !0;
            if (c1(Z, $, q, !1))
              return P;
            if (P === "" + $)
              return $;
            return P;
          }
        } else if (X.hasAttribute(G)) {
          if (c1(Z, $, q, !1))
            return X.getAttribute(G);
          if (q.type === k8)
            return $;
          E = X.getAttribute(G);
        }
        if (c1(Z, $, q, !1))
          return E === null ? $ : E;
        else if (E === "" + $)
          return $;
        else
          return E;
      }
    }
    function v6(X, Z, $, q) {
      {
        if (!w1(Z))
          return;
        if (!X.hasAttribute(Z))
          return $ === void 0 ? void 0 : null;
        var H = X.getAttribute(Z);
        if (x6($, Z), H === "" + $)
          return $;
        return H;
      }
    }
    function jQ(X, Z, $, q) {
      var H = l8(Z);
      if (T1(Z, H, q))
        return;
      if (c1(Z, $, H, q))
        $ = null;
      if (q || H === null) {
        if (w1(Z)) {
          var G = Z;
          if ($ === null)
            X.removeAttribute(G);
          else
            x6($, Z), X.setAttribute(G, "" + $);
        }
        return;
      }
      var E = H.mustUseProperty;
      if (E) {
        var P = H.propertyName;
        if ($ === null) {
          var A = H.type;
          X[P] = A === k8 ? !1 : "";
        } else
          X[P] = $;
        return;
      }
      var { attributeName: O, attributeNamespace: R } = H;
      if ($ === null)
        X.removeAttribute(O);
      else {
        var C = H.type, B;
        if (C === k8 || C === qQ && $ === !0)
          B = "";
        else if (x6($, O), B = "" + $, H.sanitizeURL)
          j8(B.toString());
        if (R)
          X.setAttributeNS(R, O, B);
        else
          X.setAttribute(O, B);
      }
    }
    var s8 = Symbol.for("react.element"), o8 = Symbol.for("react.portal"), WQ = Symbol.for("react.fragment"), PZ = Symbol.for("react.strict_mode"), cQ = Symbol.for("react.profiler"), KQ = Symbol.for("react.provider"), fX = Symbol.for("react.context"), j1 = Symbol.for("react.forward_ref"), C4 = Symbol.for("react.suspense"), V4 = Symbol.for("react.suspense_list"), lZ = Symbol.for("react.memo"), d6 = Symbol.for("react.lazy"), _q = Symbol.for("react.scope"), Tq = Symbol.for("react.debug_trace_mode"), n$ = Symbol.for("react.offscreen"), gq = Symbol.for("react.legacy_hidden"), xq = Symbol.for("react.cache"), vq = Symbol.for("react.tracing_marker"), mJ = Symbol.iterator, s$ = "@@iterator";
    function mX(X) {
      if (X === null || typeof X !== "object")
        return null;
      var Z = mJ && X[mJ] || X[s$];
      if (typeof Z === "function")
        return Z;
      return null;
    }
    var $1 = Object.assign, AZ = 0, UZ, S4, I4, _4, bJ, T4, g4;
    function uJ() {}
    uJ.__reactDisabledLog = !0;
    function o$() {
      {
        if (AZ === 0) {
          UZ = console.log, S4 = console.info, I4 = console.warn, _4 = console.error, bJ = console.group, T4 = console.groupCollapsed, g4 = console.groupEnd;
          var X = {
            configurable: !0,
            enumerable: !0,
            value: uJ,
            writable: !0
          };
          Object.defineProperties(console, {
            info: X,
            log: X,
            warn: X,
            error: X,
            group: X,
            groupCollapsed: X,
            groupEnd: X
          });
        }
        AZ++;
      }
    }
    function a$() {
      {
        if (AZ--, AZ === 0) {
          var X = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $1({}, X, {
              value: UZ
            }),
            info: $1({}, X, {
              value: S4
            }),
            warn: $1({}, X, {
              value: I4
            }),
            error: $1({}, X, {
              value: _4
            }),
            group: $1({}, X, {
              value: bJ
            }),
            groupCollapsed: $1({}, X, {
              value: T4
            }),
            groupEnd: $1({}, X, {
              value: g4
            })
          });
        }
        if (AZ < 0)
          K("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var cJ = Q.ReactCurrentDispatcher, nZ;
    function BQ(X, Z, $) {
      {
        if (nZ === void 0)
          try {
            throw Error();
          } catch (H) {
            var q = H.stack.trim().match(/\n( *(at )?)/);
            nZ = q && q[1] || "";
          }
        return `
` + nZ + X;
      }
    }
    var LZ = !1, OZ;
    {
      var x4 = typeof WeakMap === "function" ? WeakMap : Map;
      OZ = new x4;
    }
    function M(X, Z) {
      if (!X || LZ)
        return "";
      {
        var $ = OZ.get(X);
        if ($ !== void 0)
          return $;
      }
      var q;
      LZ = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = cJ.current, cJ.current = null, o$();
      try {
        if (Z) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect === "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (v) {
              q = v;
            }
            Reflect.construct(X, [], E);
          } else {
            try {
              E.call();
            } catch (v) {
              q = v;
            }
            X.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            q = v;
          }
          X();
        }
      } catch (v) {
        if (v && q && typeof v.stack === "string") {
          var P = v.stack.split(`
`), A = q.stack.split(`
`), O = P.length - 1, R = A.length - 1;
          while (O >= 1 && R >= 0 && P[O] !== A[R])
            R--;
          for (;O >= 1 && R >= 0; O--, R--)
            if (P[O] !== A[R]) {
              if (O !== 1 || R !== 1)
                do
                  if (O--, R--, R < 0 || P[O] !== A[R]) {
                    var C = `
` + P[O].replace(" at new ", " at ");
                    if (X.displayName && C.includes("<anonymous>"))
                      C = C.replace("<anonymous>", X.displayName);
                    if (typeof X === "function")
                      OZ.set(X, C);
                    return C;
                  }
                while (O >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        LZ = !1, cJ.current = G, a$(), Error.prepareStackTrace = H;
      }
      var B = X ? X.displayName || X.name : "", x = B ? BQ(B) : "";
      if (typeof X === "function")
        OZ.set(X, x);
      return x;
    }
    function V(X, Z, $) {
      return M(X, !0);
    }
    function y(X, Z, $) {
      return M(X, !1);
    }
    function l(X) {
      var Z = X.prototype;
      return !!(Z && Z.isReactComponent);
    }
    function q0(X, Z, $) {
      if (X == null)
        return "";
      if (typeof X === "function")
        return M(X, l(X));
      if (typeof X === "string")
        return BQ(X);
      switch (X) {
        case C4:
          return BQ("Suspense");
        case V4:
          return BQ("SuspenseList");
      }
      if (typeof X === "object")
        switch (X.$$typeof) {
          case j1:
            return y(X.render);
          case lZ:
            return q0(X.type, Z, $);
          case d6: {
            var q = X, H = q._payload, G = q._init;
            try {
              return q0(G(H), Z, $);
            } catch (E) {}
          }
        }
      return "";
    }
    function Y1(X) {
      var Z = X._debugOwner ? X._debugOwner.type : null, $ = X._debugSource;
      switch (X.tag) {
        case k:
          return BQ(X.type);
        case t:
          return BQ("Lazy");
        case n:
          return BQ("Suspense");
        case P0:
          return BQ("SuspenseList");
        case N:
        case L:
        case i:
          return y(X.type);
        case d:
          return y(X.type.render);
        case F:
          return V(X.type);
        default:
          return "";
      }
    }
    function C0(X) {
      try {
        var Z = "", $ = X;
        do
          Z += Y1($), $ = $.return;
        while ($);
        return Z;
      } catch (q) {
        return `
Error generating stack: ` + q.message + `
` + q.stack;
      }
    }
    function b0(X, Z, $) {
      var q = X.displayName;
      if (q)
        return q;
      var H = Z.displayName || Z.name || "";
      return H !== "" ? $ + "(" + H + ")" : $;
    }
    function P6(X) {
      return X.displayName || "Context";
    }
    function _0(X) {
      if (X == null)
        return null;
      if (typeof X.tag === "number")
        K("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
      if (typeof X === "function")
        return X.displayName || X.name || null;
      if (typeof X === "string")
        return X;
      switch (X) {
        case WQ:
          return "Fragment";
        case o8:
          return "Portal";
        case cQ:
          return "Profiler";
        case PZ:
          return "StrictMode";
        case C4:
          return "Suspense";
        case V4:
          return "SuspenseList";
      }
      if (typeof X === "object")
        switch (X.$$typeof) {
          case fX:
            var Z = X;
            return P6(Z) + ".Consumer";
          case KQ:
            var $ = X;
            return P6($._context) + ".Provider";
          case j1:
            return b0(X, X.render, "ForwardRef");
          case lZ:
            var q = X.displayName || null;
            if (q !== null)
              return q;
            return _0(X.type) || "Memo";
          case d6: {
            var H = X, G = H._payload, E = H._init;
            try {
              return _0(E(G));
            } catch (P) {
              return null;
            }
          }
        }
      return null;
    }
    function B8(X, Z, $) {
      var q = Z.displayName || Z.name || "";
      return X.displayName || (q !== "" ? $ + "(" + q + ")" : $);
    }
    function l6(X) {
      return X.displayName || "Context";
    }
    function j0(X) {
      var { tag: Z, type: $ } = X;
      switch (Z) {
        case r0:
          return "Cache";
        case p:
          var q = $;
          return l6(q) + ".Consumer";
        case X0:
          var H = $;
          return l6(H._context) + ".Provider";
        case I0:
          return "DehydratedFragment";
        case d:
          return B8($, $.render, "ForwardRef");
        case h:
          return "Fragment";
        case k:
          return $;
        case D:
          return "Portal";
        case w:
          return "Root";
        case I:
          return "Text";
        case t:
          return _0($);
        case o:
          if ($ === PZ)
            return "StrictMode";
          return "Mode";
        case y0:
          return "Offscreen";
        case Z0:
          return "Profiler";
        case A0:
          return "Scope";
        case n:
          return "Suspense";
        case P0:
          return "SuspenseList";
        case x1:
          return "TracingMarker";
        case F:
        case N:
        case O0:
        case L:
        case r:
        case i:
          if (typeof $ === "function")
            return $.displayName || $.name || null;
          if (typeof $ === "string")
            return $;
          break;
      }
      return null;
    }
    var HQ = Q.ReactDebugCurrentFrame, G8 = null, wZ = !1;
    function bX() {
      {
        if (G8 === null)
          return null;
        var X = G8._debugOwner;
        if (X !== null && typeof X !== "undefined")
          return j0(X);
      }
      return null;
    }
    function z3() {
      {
        if (G8 === null)
          return "";
        return C0(G8);
      }
    }
    function z8() {
      HQ.getCurrentStack = null, G8 = null, wZ = !1;
    }
    function A6(X) {
      HQ.getCurrentStack = X === null ? null : z3, G8 = X, wZ = !1;
    }
    function N3() {
      return G8;
    }
    function pQ(X) {
      wZ = X;
    }
    function CQ(X) {
      return "" + X;
    }
    function MZ(X) {
      switch (typeof X) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return X;
        case "object":
          return q8(X), X;
        default:
          return "";
      }
    }
    var Q7 = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function r$(X, Z) {
      {
        if (!(Q7[Z.type] || Z.onChange || Z.onInput || Z.readOnly || Z.disabled || Z.value == null))
          K("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
        if (!(Z.onChange || Z.readOnly || Z.disabled || Z.checked == null))
          K("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
      }
    }
    function pJ(X) {
      var { type: Z, nodeName: $ } = X;
      return $ && $.toLowerCase() === "input" && (Z === "checkbox" || Z === "radio");
    }
    function E3(X) {
      return X._valueTracker;
    }
    function v4(X) {
      X._valueTracker = null;
    }
    function F3(X) {
      var Z = "";
      if (!X)
        return Z;
      if (pJ(X))
        Z = X.checked ? "true" : "false";
      else
        Z = X.value;
      return Z;
    }
    function P3(X) {
      var Z = pJ(X) ? "checked" : "value", $ = Object.getOwnPropertyDescriptor(X.constructor.prototype, Z);
      q8(X[Z]);
      var q = "" + X[Z];
      if (X.hasOwnProperty(Z) || typeof $ === "undefined" || typeof $.get !== "function" || typeof $.set !== "function")
        return;
      var { get: H, set: G } = $;
      Object.defineProperty(X, Z, {
        configurable: !0,
        get: function() {
          return H.call(this);
        },
        set: function(P) {
          q8(P), q = "" + P, G.call(this, P);
        }
      }), Object.defineProperty(X, Z, {
        enumerable: $.enumerable
      });
      var E = {
        getValue: function() {
          return q;
        },
        setValue: function(P) {
          q8(P), q = "" + P;
        },
        stopTracking: function() {
          v4(X), delete X[Z];
        }
      };
      return E;
    }
    function sZ(X) {
      if (E3(X))
        return;
      X._valueTracker = P3(X);
    }
    function i$(X) {
      if (!X)
        return !1;
      var Z = E3(X);
      if (!Z)
        return !0;
      var $ = Z.getValue(), q = F3(X);
      if (q !== $)
        return Z.setValue(q), !0;
      return !1;
    }
    function h4(X) {
      if (X = X || (typeof document !== "undefined" ? document : void 0), typeof X === "undefined")
        return null;
      try {
        return X.activeElement || X.body;
      } catch (Z) {
        return X.body;
      }
    }
    var t$ = !1, A3 = !1, U3 = !1, L3 = !1;
    function O3(X) {
      var Z = X.type === "checkbox" || X.type === "radio";
      return Z ? X.checked != null : X.value != null;
    }
    function U(X, Z) {
      var $ = X, q = Z.checked, H = $1({}, Z, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: q != null ? q : $._wrapperState.initialChecked
      });
      return H;
    }
    function j(X, Z) {
      {
        if (r$("input", Z), Z.checked !== void 0 && Z.defaultChecked !== void 0 && !A3)
          K("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", bX() || "A component", Z.type), A3 = !0;
        if (Z.value !== void 0 && Z.defaultValue !== void 0 && !t$)
          K("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", bX() || "A component", Z.type), t$ = !0;
      }
      var $ = X, q = Z.defaultValue == null ? "" : Z.defaultValue;
      $._wrapperState = {
        initialChecked: Z.checked != null ? Z.checked : Z.defaultChecked,
        initialValue: MZ(Z.value != null ? Z.value : q),
        controlled: O3(Z)
      };
    }
    function g(X, Z) {
      var $ = X, q = Z.checked;
      if (q != null)
        jQ($, "checked", q, !1);
    }
    function m(X, Z) {
      var $ = X;
      {
        var q = O3(Z);
        if (!$._wrapperState.controlled && q && !L3)
          K("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), L3 = !0;
        if ($._wrapperState.controlled && !q && !U3)
          K("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), U3 = !0;
      }
      g(X, Z);
      var H = MZ(Z.value), G = Z.type;
      if (H != null) {
        if (G === "number") {
          if (H === 0 && $.value === "" || $.value != H)
            $.value = CQ(H);
        } else if ($.value !== CQ(H))
          $.value = CQ(H);
      } else if (G === "submit" || G === "reset") {
        $.removeAttribute("value");
        return;
      }
      if (Z.hasOwnProperty("value"))
        x0($, Z.type, H);
      else if (Z.hasOwnProperty("defaultValue"))
        x0($, Z.type, MZ(Z.defaultValue));
      if (Z.checked == null && Z.defaultChecked != null)
        $.defaultChecked = !!Z.defaultChecked;
    }
    function e(X, Z, $) {
      var q = X;
      if (Z.hasOwnProperty("value") || Z.hasOwnProperty("defaultValue")) {
        var H = Z.type, G = H === "submit" || H === "reset";
        if (G && (Z.value === void 0 || Z.value === null))
          return;
        var E = CQ(q._wrapperState.initialValue);
        if (!$) {
          if (E !== q.value)
            q.value = E;
        }
        q.defaultValue = E;
      }
      var P = q.name;
      if (P !== "")
        q.name = "";
      if (q.defaultChecked = !q.defaultChecked, q.defaultChecked = !!q._wrapperState.initialChecked, P !== "")
        q.name = P;
    }
    function V0(X, Z) {
      var $ = X;
      m($, Z), E0($, Z);
    }
    function E0(X, Z) {
      var $ = Z.name;
      if (Z.type === "radio" && $ != null) {
        var q = X;
        while (q.parentNode)
          q = q.parentNode;
        x6($, "name");
        var H = q.querySelectorAll("input[name=" + JSON.stringify("" + $) + '][type="radio"]');
        for (var G = 0;G < H.length; G++) {
          var E = H[G];
          if (E === X || E.form !== X.form)
            continue;
          var P = q9(E);
          if (!P)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          i$(E), m(E, P);
        }
      }
    }
    function x0(X, Z, $) {
      if (Z !== "number" || h4(X.ownerDocument) !== X) {
        if ($ == null)
          X.defaultValue = CQ(X._wrapperState.initialValue);
        else if (X.defaultValue !== CQ($))
          X.defaultValue = CQ($);
      }
    }
    var z1 = !1, v1 = !1, s1 = !1;
    function o1(X, Z) {
      {
        if (Z.value == null) {
          if (typeof Z.children === "object" && Z.children !== null)
            FK.Children.forEach(Z.children, function($) {
              if ($ == null)
                return;
              if (typeof $ === "string" || typeof $ === "number")
                return;
              if (!v1)
                v1 = !0, K("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
            });
          else if (Z.dangerouslySetInnerHTML != null) {
            if (!s1)
              s1 = !0, K("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
          }
        }
        if (Z.selected != null && !z1)
          K("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), z1 = !0;
      }
    }
    function Q6(X, Z) {
      if (Z.value != null)
        X.setAttribute("value", CQ(MZ(Z.value)));
    }
    var D6 = Array.isArray;
    function B1(X) {
      return D6(X);
    }
    var dJ = !1;
    function e$() {
      var X = bX();
      if (X)
        return `

Check the render method of \`` + X + "`.";
      return "";
    }
    var hq = ["value", "defaultValue"];
    function X7(X) {
      {
        r$("select", X);
        for (var Z = 0;Z < hq.length; Z++) {
          var $ = hq[Z];
          if (X[$] == null)
            continue;
          var q = B1(X[$]);
          if (X.multiple && !q)
            K("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", $, e$());
          else if (!X.multiple && q)
            K("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", $, e$());
        }
      }
    }
    function oZ(X, Z, $, q) {
      var H = X.options;
      if (Z) {
        var G = $, E = {};
        for (var P = 0;P < G.length; P++)
          E["$" + G[P]] = !0;
        for (var A = 0;A < H.length; A++) {
          var O = E.hasOwnProperty("$" + H[A].value);
          if (H[A].selected !== O)
            H[A].selected = O;
          if (O && q)
            H[A].defaultSelected = !0;
        }
      } else {
        var R = CQ(MZ($)), C = null;
        for (var B = 0;B < H.length; B++) {
          if (H[B].value === R) {
            if (H[B].selected = !0, q)
              H[B].defaultSelected = !0;
            return;
          }
          if (C === null && !H[B].disabled)
            C = H[B];
        }
        if (C !== null)
          C.selected = !0;
      }
    }
    function yq(X, Z) {
      return $1({}, Z, {
        value: void 0
      });
    }
    function fq(X, Z) {
      var $ = X;
      if (X7(Z), $._wrapperState = {
        wasMultiple: !!Z.multiple
      }, Z.value !== void 0 && Z.defaultValue !== void 0 && !dJ)
        K("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), dJ = !0;
    }
    function Z7(X, Z) {
      var $ = X;
      $.multiple = !!Z.multiple;
      var q = Z.value;
      if (q != null)
        oZ($, !!Z.multiple, q, !1);
      else if (Z.defaultValue != null)
        oZ($, !!Z.multiple, Z.defaultValue, !0);
    }
    function ok(X, Z) {
      var $ = X, q = $._wrapperState.wasMultiple;
      $._wrapperState.wasMultiple = !!Z.multiple;
      var H = Z.value;
      if (H != null)
        oZ($, !!Z.multiple, H, !1);
      else if (q !== !!Z.multiple)
        if (Z.defaultValue != null)
          oZ($, !!Z.multiple, Z.defaultValue, !0);
        else
          oZ($, !!Z.multiple, Z.multiple ? [] : "", !1);
    }
    function ak(X, Z) {
      var $ = X, q = Z.value;
      if (q != null)
        oZ($, !!Z.multiple, q, !1);
    }
    var WP = !1;
    function J7(X, Z) {
      var $ = X;
      if (Z.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var q = $1({}, Z, {
        value: void 0,
        defaultValue: void 0,
        children: CQ($._wrapperState.initialValue)
      });
      return q;
    }
    function KP(X, Z) {
      var $ = X;
      if (r$("textarea", Z), Z.value !== void 0 && Z.defaultValue !== void 0 && !WP)
        K("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", bX() || "A component"), WP = !0;
      var q = Z.value;
      if (q == null) {
        var { children: H, defaultValue: G } = Z;
        if (H != null) {
          K("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (G != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (B1(H)) {
              if (H.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              H = H[0];
            }
            G = H;
          }
        }
        if (G == null)
          G = "";
        q = G;
      }
      $._wrapperState = {
        initialValue: MZ(q)
      };
    }
    function HP(X, Z) {
      var $ = X, q = MZ(Z.value), H = MZ(Z.defaultValue);
      if (q != null) {
        var G = CQ(q);
        if (G !== $.value)
          $.value = G;
        if (Z.defaultValue == null && $.defaultValue !== G)
          $.defaultValue = G;
      }
      if (H != null)
        $.defaultValue = CQ(H);
    }
    function GP(X, Z) {
      var $ = X, q = $.textContent;
      if (q === $._wrapperState.initialValue) {
        if (q !== "" && q !== null)
          $.value = q;
      }
    }
    function rk(X, Z) {
      HP(X, Z);
    }
    var aZ = "http://www.w3.org/1999/xhtml", ik = "http://www.w3.org/1998/Math/MathML", $7 = "http://www.w3.org/2000/svg";
    function Y7(X) {
      switch (X) {
        case "svg":
          return $7;
        case "math":
          return ik;
        default:
          return aZ;
      }
    }
    function q7(X, Z) {
      if (X == null || X === aZ)
        return Y7(Z);
      if (X === $7 && Z === "foreignObject")
        return aZ;
      return X;
    }
    var tk = function(X) {
      if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction)
        return function(Z, $, q, H) {
          MSApp.execUnsafeLocalFunction(function() {
            return X(Z, $, q, H);
          });
        };
      else
        return X;
    }, w3, zP = tk(function(X, Z) {
      if (X.namespaceURI === $7) {
        if (!("innerHTML" in X)) {
          w3 = w3 || document.createElement("div"), w3.innerHTML = "<svg>" + Z.valueOf().toString() + "</svg>";
          var $ = w3.firstChild;
          while (X.firstChild)
            X.removeChild(X.firstChild);
          while ($.firstChild)
            X.appendChild($.firstChild);
          return;
        }
      }
      X.innerHTML = Z;
    }), VQ = 1, rZ = 3, h6 = 8, iZ = 9, W7 = 11, M3 = function(X, Z) {
      if (Z) {
        var $ = X.firstChild;
        if ($ && $ === X.lastChild && $.nodeType === rZ) {
          $.nodeValue = Z;
          return;
        }
      }
      X.textContent = Z;
    }, ek = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, mq = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Qj(X, Z) {
      return X + Z.charAt(0).toUpperCase() + Z.substring(1);
    }
    var Xj = ["Webkit", "ms", "Moz", "O"];
    Object.keys(mq).forEach(function(X) {
      Xj.forEach(function(Z) {
        mq[Qj(Z, X)] = mq[X];
      });
    });
    function K7(X, Z, $) {
      var q = Z == null || typeof Z === "boolean" || Z === "";
      if (q)
        return "";
      if (!$ && typeof Z === "number" && Z !== 0 && !(mq.hasOwnProperty(X) && mq[X]))
        return Z + "px";
      return R8(Z, X), ("" + Z).trim();
    }
    var Zj = /([A-Z])/g, Jj = /^ms-/;
    function $j(X) {
      return X.replace(Zj, "-$1").toLowerCase().replace(Jj, "-ms-");
    }
    var NP = function() {};
    {
      var Yj = /^(?:webkit|moz|o)[A-Z]/, qj = /^-ms-/, Wj = /-(.)/g, EP = /;\s*$/, QY = {}, H7 = {}, FP = !1, PP = !1, Kj = function(X) {
        return X.replace(Wj, function(Z, $) {
          return $.toUpperCase();
        });
      }, Hj = function(X) {
        if (QY.hasOwnProperty(X) && QY[X])
          return;
        QY[X] = !0, K("Unsupported style property %s. Did you mean %s?", X, Kj(X.replace(qj, "ms-")));
      }, Gj = function(X) {
        if (QY.hasOwnProperty(X) && QY[X])
          return;
        QY[X] = !0, K("Unsupported vendor-prefixed style property %s. Did you mean %s?", X, X.charAt(0).toUpperCase() + X.slice(1));
      }, zj = function(X, Z) {
        if (H7.hasOwnProperty(Z) && H7[Z])
          return;
        H7[Z] = !0, K(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, X, Z.replace(EP, ""));
      }, Nj = function(X, Z) {
        if (FP)
          return;
        FP = !0, K("`NaN` is an invalid value for the `%s` css style property.", X);
      }, Ej = function(X, Z) {
        if (PP)
          return;
        PP = !0, K("`Infinity` is an invalid value for the `%s` css style property.", X);
      };
      NP = function(X, Z) {
        if (X.indexOf("-") > -1)
          Hj(X);
        else if (Yj.test(X))
          Gj(X);
        else if (EP.test(Z))
          zj(X, Z);
        if (typeof Z === "number") {
          if (isNaN(Z))
            Nj(X, Z);
          else if (!isFinite(Z))
            Ej(X, Z);
        }
      };
    }
    var Fj = NP;
    function Pj(X) {
      {
        var Z = "", $ = "";
        for (var q in X) {
          if (!X.hasOwnProperty(q))
            continue;
          var H = X[q];
          if (H != null) {
            var G = q.indexOf("--") === 0;
            Z += $ + (G ? q : $j(q)) + ":", Z += K7(q, H, G), $ = ";";
          }
        }
        return Z || null;
      }
    }
    function AP(X, Z) {
      var $ = X.style;
      for (var q in Z) {
        if (!Z.hasOwnProperty(q))
          continue;
        var H = q.indexOf("--") === 0;
        if (!H)
          Fj(q, Z[q]);
        var G = K7(q, Z[q], H);
        if (q === "float")
          q = "cssFloat";
        if (H)
          $.setProperty(q, G);
        else
          $[q] = G;
      }
    }
    function Aj(X) {
      return X == null || typeof X === "boolean" || X === "";
    }
    function UP(X) {
      var Z = {};
      for (var $ in X) {
        var q = ek[$] || [$];
        for (var H = 0;H < q.length; H++)
          Z[q[H]] = $;
      }
      return Z;
    }
    function Uj(X, Z) {
      {
        if (!Z)
          return;
        var $ = UP(X), q = UP(Z), H = {};
        for (var G in $) {
          var E = $[G], P = q[G];
          if (P && E !== P) {
            var A = E + "," + P;
            if (H[A])
              continue;
            H[A] = !0, K("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Aj(X[E]) ? "Removing" : "Updating", E, P);
          }
        }
      }
    }
    var Lj = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    }, Oj = $1({
      menuitem: !0
    }, Lj), wj = "__html";
    function G7(X, Z) {
      if (!Z)
        return;
      if (Oj[X]) {
        if (Z.children != null || Z.dangerouslySetInnerHTML != null)
          throw new Error(X + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      }
      if (Z.dangerouslySetInnerHTML != null) {
        if (Z.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof Z.dangerouslySetInnerHTML !== "object" || !(wj in Z.dangerouslySetInnerHTML))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      }
      if (!Z.suppressContentEditableWarning && Z.contentEditable && Z.children != null)
        K("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
      if (Z.style != null && typeof Z.style !== "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    }
    function lJ(X, Z) {
      if (X.indexOf("-") === -1)
        return typeof Z.is === "string";
      switch (X) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var D3 = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, LP = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, XY = {}, Mj = new RegExp("^(aria)-[" + kQ + "]*$"), Dj = new RegExp("^(aria)[A-Z][" + kQ + "]*$");
    function Rj(X, Z) {
      {
        if (J0.call(XY, Z) && XY[Z])
          return !0;
        if (Dj.test(Z)) {
          var $ = "aria-" + Z.slice(4).toLowerCase(), q = LP.hasOwnProperty($) ? $ : null;
          if (q == null)
            return K("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", Z), XY[Z] = !0, !0;
          if (Z !== q)
            return K("Invalid ARIA attribute `%s`. Did you mean `%s`?", Z, q), XY[Z] = !0, !0;
        }
        if (Mj.test(Z)) {
          var H = Z.toLowerCase(), G = LP.hasOwnProperty(H) ? H : null;
          if (G == null)
            return XY[Z] = !0, !1;
          if (Z !== G)
            return K("Unknown ARIA attribute `%s`. Did you mean `%s`?", Z, G), XY[Z] = !0, !0;
        }
      }
      return !0;
    }
    function kj(X, Z) {
      {
        var $ = [];
        for (var q in Z) {
          var H = Rj(X, q);
          if (!H)
            $.push(q);
        }
        var G = $.map(function(E) {
          return "`" + E + "`";
        }).join(", ");
        if ($.length === 1)
          K("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", G, X);
        else if ($.length > 1)
          K("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", G, X);
      }
    }
    function jj(X, Z) {
      if (lJ(X, Z))
        return;
      kj(X, Z);
    }
    var OP = !1;
    function Bj(X, Z) {
      {
        if (X !== "input" && X !== "textarea" && X !== "select")
          return;
        if (Z != null && Z.value === null && !OP)
          if (OP = !0, X === "select" && Z.multiple)
            K("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", X);
          else
            K("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", X);
      }
    }
    var wP = function() {};
    {
      var GQ = {}, MP = /^on./, Cj = /^on[^A-Z]/, Vj = new RegExp("^(aria)-[" + kQ + "]*$"), Sj = new RegExp("^(aria)[A-Z][" + kQ + "]*$");
      wP = function(X, Z, $, q) {
        if (J0.call(GQ, Z) && GQ[Z])
          return !0;
        var H = Z.toLowerCase();
        if (H === "onfocusin" || H === "onfocusout")
          return K("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), GQ[Z] = !0, !0;
        if (q != null) {
          var { registrationNameDependencies: G, possibleRegistrationNames: E } = q;
          if (G.hasOwnProperty(Z))
            return !0;
          var P = E.hasOwnProperty(H) ? E[H] : null;
          if (P != null)
            return K("Invalid event handler property `%s`. Did you mean `%s`?", Z, P), GQ[Z] = !0, !0;
          if (MP.test(Z))
            return K("Unknown event handler property `%s`. It will be ignored.", Z), GQ[Z] = !0, !0;
        } else if (MP.test(Z)) {
          if (Cj.test(Z))
            K("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", Z);
          return GQ[Z] = !0, !0;
        }
        if (Vj.test(Z) || Sj.test(Z))
          return !0;
        if (H === "innerhtml")
          return K("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), GQ[Z] = !0, !0;
        if (H === "aria")
          return K("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), GQ[Z] = !0, !0;
        if (H === "is" && $ !== null && $ !== void 0 && typeof $ !== "string")
          return K("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof $), GQ[Z] = !0, !0;
        if (typeof $ === "number" && isNaN($))
          return K("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", Z), GQ[Z] = !0, !0;
        var A = l8(Z), O = A !== null && A.type === c6;
        if (D3.hasOwnProperty(H)) {
          var R = D3[H];
          if (R !== Z)
            return K("Invalid DOM property `%s`. Did you mean `%s`?", Z, R), GQ[Z] = !0, !0;
        } else if (!O && Z !== H)
          return K("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", Z, H), GQ[Z] = !0, !0;
        if (typeof $ === "boolean" && B6(Z, $, A, !1)) {
          if ($)
            K('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', $, Z, Z, $, Z);
          else
            K('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', $, Z, Z, $, Z, Z, Z);
          return GQ[Z] = !0, !0;
        }
        if (O)
          return !0;
        if (B6(Z, $, A, !1))
          return GQ[Z] = !0, !1;
        if (($ === "false" || $ === "true") && A !== null && A.type === k8)
          return K("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", $, Z, $ === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', Z, $), GQ[Z] = !0, !0;
        return !0;
      };
    }
    var Ij = function(X, Z, $) {
      {
        var q = [];
        for (var H in Z) {
          var G = wP(X, H, Z[H], $);
          if (!G)
            q.push(H);
        }
        var E = q.map(function(P) {
          return "`" + P + "`";
        }).join(", ");
        if (q.length === 1)
          K("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", E, X);
        else if (q.length > 1)
          K("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", E, X);
      }
    };
    function _j(X, Z, $) {
      if (lJ(X, Z))
        return;
      Ij(X, Z, $);
    }
    var DP = 1, z7 = 2, bq = 4, Tj = DP | z7 | bq, uq = null;
    function gj(X) {
      if (uq !== null)
        K("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.");
      uq = X;
    }
    function xj() {
      if (uq === null)
        K("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.");
      uq = null;
    }
    function vj(X) {
      return X === uq;
    }
    function N7(X) {
      var Z = X.target || X.srcElement || window;
      if (Z.correspondingUseElement)
        Z = Z.correspondingUseElement;
      return Z.nodeType === rZ ? Z.parentNode : Z;
    }
    var E7 = null, ZY = null, JY = null;
    function RP(X) {
      var Z = d4(X);
      if (!Z)
        return;
      if (typeof E7 !== "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var $ = Z.stateNode;
      if ($) {
        var q = q9($);
        E7(Z.stateNode, Z.type, q);
      }
    }
    function hj(X) {
      E7 = X;
    }
    function kP(X) {
      if (ZY)
        if (JY)
          JY.push(X);
        else
          JY = [X];
      else
        ZY = X;
    }
    function yj() {
      return ZY !== null || JY !== null;
    }
    function jP() {
      if (!ZY)
        return;
      var X = ZY, Z = JY;
      if (ZY = null, JY = null, RP(X), Z)
        for (var $ = 0;$ < Z.length; $++)
          RP(Z[$]);
    }
    var BP = function(X, Z) {
      return X(Z);
    }, CP = function() {}, F7 = !1;
    function fj() {
      var X = yj();
      if (X)
        CP(), jP();
    }
    function VP(X, Z, $) {
      if (F7)
        return X(Z, $);
      F7 = !0;
      try {
        return BP(X, Z, $);
      } finally {
        F7 = !1, fj();
      }
    }
    function mj(X, Z, $) {
      BP = X, CP = $;
    }
    function bj(X) {
      return X === "button" || X === "input" || X === "select" || X === "textarea";
    }
    function uj(X, Z, $) {
      switch (X) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!($.disabled && bj(Z));
        default:
          return !1;
      }
    }
    function cq(X, Z) {
      var $ = X.stateNode;
      if ($ === null)
        return null;
      var q = q9($);
      if (q === null)
        return null;
      var H = q[Z];
      if (uj(Z, X.type, q))
        return null;
      if (H && typeof H !== "function")
        throw new Error("Expected `" + Z + "` listener to be a function, instead got a value of `" + typeof H + "` type.");
      return H;
    }
    var P7 = !1;
    if (d1)
      try {
        var pq = {};
        Object.defineProperty(pq, "passive", {
          get: function() {
            P7 = !0;
          }
        }), window.addEventListener("test", pq, pq), window.removeEventListener("test", pq, pq);
      } catch (X) {
        P7 = !1;
      }
    function SP(X, Z, $, q, H, G, E, P, A) {
      var O = Array.prototype.slice.call(arguments, 3);
      try {
        Z.apply($, O);
      } catch (R) {
        this.onError(R);
      }
    }
    var IP = SP;
    if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof document !== "undefined" && typeof document.createEvent === "function") {
      var A7 = document.createElement("react");
      IP = function X(Z, $, q, H, G, E, P, A, O) {
        if (typeof document === "undefined" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), C = !1, B = !0, x = window.event, v = Object.getOwnPropertyDescriptor(window, "event");
        function f() {
          if (A7.removeEventListener(b, L0, !1), typeof window.event !== "undefined" && window.hasOwnProperty("event"))
            window.event = x;
        }
        var Y0 = Array.prototype.slice.call(arguments, 3);
        function L0() {
          C = !0, f(), $.apply(q, Y0), B = !1;
        }
        var F0, K1 = !1, H1 = !1;
        function _(T) {
          if (F0 = T.error, K1 = !0, F0 === null && T.colno === 0 && T.lineno === 0)
            H1 = !0;
          if (T.defaultPrevented) {
            if (F0 != null && typeof F0 === "object")
              try {
                F0._suppressLogging = !0;
              } catch (a) {}
          }
        }
        var b = "react-" + (Z ? Z : "invokeguardedcallback");
        if (window.addEventListener("error", _), A7.addEventListener(b, L0, !1), R.initEvent(b, !1, !1), A7.dispatchEvent(R), v)
          Object.defineProperty(window, "event", v);
        if (C && B) {
          if (!K1)
            F0 = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`);
          else if (H1)
            F0 = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.");
          this.onError(F0);
        }
        if (window.removeEventListener("error", _), !C)
          return f(), SP.apply(this, arguments);
      };
    }
    var cj = IP, $Y = !1, R3 = null, k3 = !1, U7 = null, pj = {
      onError: function(X) {
        $Y = !0, R3 = X;
      }
    };
    function L7(X, Z, $, q, H, G, E, P, A) {
      $Y = !1, R3 = null, cj.apply(pj, arguments);
    }
    function dj(X, Z, $, q, H, G, E, P, A) {
      if (L7.apply(this, arguments), $Y) {
        var O = O7();
        if (!k3)
          k3 = !0, U7 = O;
      }
    }
    function lj() {
      if (k3) {
        var X = U7;
        throw k3 = !1, U7 = null, X;
      }
    }
    function nj() {
      return $Y;
    }
    function O7() {
      if ($Y) {
        var X = R3;
        return $Y = !1, R3 = null, X;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function YY(X) {
      return X._reactInternals;
    }
    function sj(X) {
      return X._reactInternals !== void 0;
    }
    function oj(X, Z) {
      X._reactInternals = Z;
    }
    var B0 = 0, qY = 1, y6 = 2, P1 = 4, nJ = 16, dq = 32, w7 = 64, C1 = 128, tZ = 256, y4 = 512, sJ = 1024, uX = 2048, eZ = 4096, oJ = 8192, j3 = 16384, aj = uX | P1 | w7 | y4 | sJ | j3, rj = 32767, lq = 32768, zQ = 65536, M7 = 131072, _P = 1048576, D7 = 2097152, aJ = 4194304, R7 = 8388608, Q4 = 16777216, B3 = 33554432, k7 = P1 | sJ | 0, j7 = y6 | P1 | nJ | dq | y4 | eZ | oJ, nq = P1 | w7 | y4 | oJ, WY = uX | nJ, X4 = aJ | R7 | D7, ij = Q.ReactCurrentOwner;
    function rJ(X) {
      var Z = X, $ = X;
      if (!X.alternate) {
        var q = Z;
        do {
          if (Z = q, (Z.flags & (y6 | eZ)) !== B0)
            $ = Z.return;
          q = Z.return;
        } while (q);
      } else
        while (Z.return)
          Z = Z.return;
      if (Z.tag === w)
        return $;
      return null;
    }
    function TP(X) {
      if (X.tag === n) {
        var Z = X.memoizedState;
        if (Z === null) {
          var $ = X.alternate;
          if ($ !== null)
            Z = $.memoizedState;
        }
        if (Z !== null)
          return Z.dehydrated;
      }
      return null;
    }
    function gP(X) {
      return X.tag === w ? X.stateNode.containerInfo : null;
    }
    function tj(X) {
      return rJ(X) === X;
    }
    function ej(X) {
      {
        var Z = ij.current;
        if (Z !== null && Z.tag === F) {
          var $ = Z, q = $.stateNode;
          if (!q._warnedAboutRefsInRender)
            K("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", j0($) || "A component");
          q._warnedAboutRefsInRender = !0;
        }
      }
      var H = YY(X);
      if (!H)
        return !1;
      return rJ(H) === H;
    }
    function xP(X) {
      if (rJ(X) !== X)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function vP(X) {
      var Z = X.alternate;
      if (!Z) {
        var $ = rJ(X);
        if ($ === null)
          throw new Error("Unable to find node on an unmounted component.");
        if ($ !== X)
          return null;
        return X;
      }
      var q = X, H = Z;
      while (!0) {
        var G = q.return;
        if (G === null)
          break;
        var E = G.alternate;
        if (E === null) {
          var P = G.return;
          if (P !== null) {
            q = H = P;
            continue;
          }
          break;
        }
        if (G.child === E.child) {
          var A = G.child;
          while (A) {
            if (A === q)
              return xP(G), X;
            if (A === H)
              return xP(G), Z;
            A = A.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (q.return !== H.return)
          q = G, H = E;
        else {
          var O = !1, R = G.child;
          while (R) {
            if (R === q) {
              O = !0, q = G, H = E;
              break;
            }
            if (R === H) {
              O = !0, H = G, q = E;
              break;
            }
            R = R.sibling;
          }
          if (!O) {
            R = E.child;
            while (R) {
              if (R === q) {
                O = !0, q = E, H = G;
                break;
              }
              if (R === H) {
                O = !0, H = E, q = G;
                break;
              }
              R = R.sibling;
            }
            if (!O)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (q.alternate !== H)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (q.tag !== w)
        throw new Error("Unable to find node on an unmounted component.");
      if (q.stateNode.current === q)
        return X;
      return Z;
    }
    function hP(X) {
      var Z = vP(X);
      return Z !== null ? yP(Z) : null;
    }
    function yP(X) {
      if (X.tag === k || X.tag === I)
        return X;
      var Z = X.child;
      while (Z !== null) {
        var $ = yP(Z);
        if ($ !== null)
          return $;
        Z = Z.sibling;
      }
      return null;
    }
    function QB(X) {
      var Z = vP(X);
      return Z !== null ? fP(Z) : null;
    }
    function fP(X) {
      if (X.tag === k || X.tag === I)
        return X;
      var Z = X.child;
      while (Z !== null) {
        if (Z.tag !== D) {
          var $ = fP(Z);
          if ($ !== null)
            return $;
        }
        Z = Z.sibling;
      }
      return null;
    }
    var mP = m1.unstable_scheduleCallback, XB = m1.unstable_cancelCallback, ZB = m1.unstable_shouldYield, JB = m1.unstable_requestPaint, N8 = m1.unstable_now, $B = m1.unstable_getCurrentPriorityLevel, C3 = m1.unstable_ImmediatePriority, B7 = m1.unstable_UserBlockingPriority, iJ = m1.unstable_NormalPriority, YB = m1.unstable_LowPriority, C7 = m1.unstable_IdlePriority, qB = m1.unstable_yieldValue, WB = m1.unstable_setDisableYieldValue, tJ = null, C8 = null, K0 = null, DZ = !1, cX = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined";
    function KB(X) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined")
        return !1;
      var Z = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (Z.isDisabled)
        return !0;
      if (!Z.supportsFiber)
        return K("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        if (f0)
          X = $1({}, X, {
            getLaneLabelMap: FB,
            injectProfilingHooks: EB
          });
        tJ = Z.inject(X), C8 = Z;
      } catch ($) {
        K("React instrumentation encountered an error: %s.", $);
      }
      if (Z.checkDCE)
        return !0;
      else
        return !1;
    }
    function HB(X, Z) {
      if (C8 && typeof C8.onScheduleFiberRoot === "function")
        try {
          C8.onScheduleFiberRoot(tJ, X, Z);
        } catch ($) {
          if (!DZ)
            DZ = !0, K("React instrumentation encountered an error: %s", $);
        }
    }
    function GB(X, Z) {
      if (C8 && typeof C8.onCommitFiberRoot === "function")
        try {
          var $ = (X.current.flags & C1) === C1;
          if (j6) {
            var q;
            switch (Z) {
              case nQ:
                q = C3;
                break;
              case J4:
                q = B7;
                break;
              case $4:
                q = iJ;
                break;
              case v3:
                q = C7;
                break;
              default:
                q = iJ;
                break;
            }
            C8.onCommitFiberRoot(tJ, X, q, $);
          } else
            C8.onCommitFiberRoot(tJ, X, void 0, $);
        } catch (H) {
          if (!DZ)
            DZ = !0, K("React instrumentation encountered an error: %s", H);
        }
    }
    function zB(X) {
      if (C8 && typeof C8.onPostCommitFiberRoot === "function")
        try {
          C8.onPostCommitFiberRoot(tJ, X);
        } catch (Z) {
          if (!DZ)
            DZ = !0, K("React instrumentation encountered an error: %s", Z);
        }
    }
    function NB(X) {
      if (C8 && typeof C8.onCommitFiberUnmount === "function")
        try {
          C8.onCommitFiberUnmount(tJ, X);
        } catch (Z) {
          if (!DZ)
            DZ = !0, K("React instrumentation encountered an error: %s", Z);
        }
    }
    function E8(X) {
      {
        if (typeof qB === "function")
          WB(X), Y(X);
        if (C8 && typeof C8.setStrictMode === "function")
          try {
            C8.setStrictMode(tJ, X);
          } catch (Z) {
            if (!DZ)
              DZ = !0, K("React instrumentation encountered an error: %s", Z);
          }
      }
    }
    function EB(X) {
      K0 = X;
    }
    function FB() {
      {
        var X = /* @__PURE__ */ new Map, Z = 1;
        for (var $ = 0;$ < S7; $++) {
          var q = xB(Z);
          X.set(Z, q), Z *= 2;
        }
        return X;
      }
    }
    function PB(X) {
      if (K0 !== null && typeof K0.markCommitStarted === "function")
        K0.markCommitStarted(X);
    }
    function bP() {
      if (K0 !== null && typeof K0.markCommitStopped === "function")
        K0.markCommitStopped();
    }
    function sq(X) {
      if (K0 !== null && typeof K0.markComponentRenderStarted === "function")
        K0.markComponentRenderStarted(X);
    }
    function KY() {
      if (K0 !== null && typeof K0.markComponentRenderStopped === "function")
        K0.markComponentRenderStopped();
    }
    function AB(X) {
      if (K0 !== null && typeof K0.markComponentPassiveEffectMountStarted === "function")
        K0.markComponentPassiveEffectMountStarted(X);
    }
    function UB() {
      if (K0 !== null && typeof K0.markComponentPassiveEffectMountStopped === "function")
        K0.markComponentPassiveEffectMountStopped();
    }
    function LB(X) {
      if (K0 !== null && typeof K0.markComponentPassiveEffectUnmountStarted === "function")
        K0.markComponentPassiveEffectUnmountStarted(X);
    }
    function OB() {
      if (K0 !== null && typeof K0.markComponentPassiveEffectUnmountStopped === "function")
        K0.markComponentPassiveEffectUnmountStopped();
    }
    function wB(X) {
      if (K0 !== null && typeof K0.markComponentLayoutEffectMountStarted === "function")
        K0.markComponentLayoutEffectMountStarted(X);
    }
    function MB() {
      if (K0 !== null && typeof K0.markComponentLayoutEffectMountStopped === "function")
        K0.markComponentLayoutEffectMountStopped();
    }
    function uP(X) {
      if (K0 !== null && typeof K0.markComponentLayoutEffectUnmountStarted === "function")
        K0.markComponentLayoutEffectUnmountStarted(X);
    }
    function cP() {
      if (K0 !== null && typeof K0.markComponentLayoutEffectUnmountStopped === "function")
        K0.markComponentLayoutEffectUnmountStopped();
    }
    function DB(X, Z, $) {
      if (K0 !== null && typeof K0.markComponentErrored === "function")
        K0.markComponentErrored(X, Z, $);
    }
    function RB(X, Z, $) {
      if (K0 !== null && typeof K0.markComponentSuspended === "function")
        K0.markComponentSuspended(X, Z, $);
    }
    function kB(X) {
      if (K0 !== null && typeof K0.markLayoutEffectsStarted === "function")
        K0.markLayoutEffectsStarted(X);
    }
    function jB() {
      if (K0 !== null && typeof K0.markLayoutEffectsStopped === "function")
        K0.markLayoutEffectsStopped();
    }
    function BB(X) {
      if (K0 !== null && typeof K0.markPassiveEffectsStarted === "function")
        K0.markPassiveEffectsStarted(X);
    }
    function CB() {
      if (K0 !== null && typeof K0.markPassiveEffectsStopped === "function")
        K0.markPassiveEffectsStopped();
    }
    function pP(X) {
      if (K0 !== null && typeof K0.markRenderStarted === "function")
        K0.markRenderStarted(X);
    }
    function VB() {
      if (K0 !== null && typeof K0.markRenderYielded === "function")
        K0.markRenderYielded();
    }
    function dP() {
      if (K0 !== null && typeof K0.markRenderStopped === "function")
        K0.markRenderStopped();
    }
    function SB(X) {
      if (K0 !== null && typeof K0.markRenderScheduled === "function")
        K0.markRenderScheduled(X);
    }
    function IB(X, Z) {
      if (K0 !== null && typeof K0.markForceUpdateScheduled === "function")
        K0.markForceUpdateScheduled(X, Z);
    }
    function V7(X, Z) {
      if (K0 !== null && typeof K0.markStateUpdateScheduled === "function")
        K0.markStateUpdateScheduled(X, Z);
    }
    var D0 = 0, N1 = 1, h1 = 2, R6 = 8, RZ = 16, lP = Math.clz32 ? Math.clz32 : gB, _B = Math.log, TB = Math.LN2;
    function gB(X) {
      var Z = X >>> 0;
      if (Z === 0)
        return 32;
      return 31 - (_B(Z) / TB | 0) | 0;
    }
    var S7 = 31, s = 0, F8 = 0, v0 = 1, HY = 2, Z4 = 4, eJ = 8, kZ = 16, oq = 32, GY = 4194240, aq = 64, I7 = 128, _7 = 256, T7 = 512, g7 = 1024, x7 = 2048, v7 = 4096, h7 = 8192, y7 = 16384, f7 = 32768, m7 = 65536, b7 = 131072, u7 = 262144, c7 = 524288, p7 = 1048576, d7 = 2097152, V3 = 130023424, zY = 4194304, l7 = 8388608, n7 = 16777216, s7 = 33554432, o7 = 67108864, nP = zY, rq = 134217728, sP = 268435455, iq = 268435456, Q$ = 536870912, dQ = 1073741824;
    function xB(X) {
      {
        if (X & v0)
          return "Sync";
        if (X & HY)
          return "InputContinuousHydration";
        if (X & Z4)
          return "InputContinuous";
        if (X & eJ)
          return "DefaultHydration";
        if (X & kZ)
          return "Default";
        if (X & oq)
          return "TransitionHydration";
        if (X & GY)
          return "Transition";
        if (X & V3)
          return "Retry";
        if (X & rq)
          return "SelectiveHydration";
        if (X & iq)
          return "IdleHydration";
        if (X & Q$)
          return "Idle";
        if (X & dQ)
          return "Offscreen";
      }
    }
    var i1 = -1, S3 = aq, I3 = zY;
    function tq(X) {
      switch (X$(X)) {
        case v0:
          return v0;
        case HY:
          return HY;
        case Z4:
          return Z4;
        case eJ:
          return eJ;
        case kZ:
          return kZ;
        case oq:
          return oq;
        case aq:
        case I7:
        case _7:
        case T7:
        case g7:
        case x7:
        case v7:
        case h7:
        case y7:
        case f7:
        case m7:
        case b7:
        case u7:
        case c7:
        case p7:
        case d7:
          return X & GY;
        case zY:
        case l7:
        case n7:
        case s7:
        case o7:
          return X & V3;
        case rq:
          return rq;
        case iq:
          return iq;
        case Q$:
          return Q$;
        case dQ:
          return dQ;
        default:
          return K("Should have found matching lanes. This is a bug in React."), X;
      }
    }
    function _3(X, Z) {
      var $ = X.pendingLanes;
      if ($ === s)
        return s;
      var q = s, H = X.suspendedLanes, G = X.pingedLanes, E = $ & sP;
      if (E !== s) {
        var P = E & ~H;
        if (P !== s)
          q = tq(P);
        else {
          var A = E & G;
          if (A !== s)
            q = tq(A);
        }
      } else {
        var O = $ & ~H;
        if (O !== s)
          q = tq(O);
        else if (G !== s)
          q = tq(G);
      }
      if (q === s)
        return s;
      if (Z !== s && Z !== q && (Z & H) === s) {
        var R = X$(q), C = X$(Z);
        if (R >= C || R === kZ && (C & GY) !== s)
          return Z;
      }
      if ((q & Z4) !== s)
        q |= $ & kZ;
      var B = X.entangledLanes;
      if (B !== s) {
        var x = X.entanglements, v = q & B;
        while (v > 0) {
          var f = Z$(v), Y0 = 1 << f;
          q |= x[f], v &= ~Y0;
        }
      }
      return q;
    }
    function vB(X, Z) {
      var $ = X.eventTimes, q = i1;
      while (Z > 0) {
        var H = Z$(Z), G = 1 << H, E = $[H];
        if (E > q)
          q = E;
        Z &= ~G;
      }
      return q;
    }
    function hB(X, Z) {
      switch (X) {
        case v0:
        case HY:
        case Z4:
          return Z + 250;
        case eJ:
        case kZ:
        case oq:
        case aq:
        case I7:
        case _7:
        case T7:
        case g7:
        case x7:
        case v7:
        case h7:
        case y7:
        case f7:
        case m7:
        case b7:
        case u7:
        case c7:
        case p7:
        case d7:
          return Z + 5000;
        case zY:
        case l7:
        case n7:
        case s7:
        case o7:
          return i1;
        case rq:
        case iq:
        case Q$:
        case dQ:
          return i1;
        default:
          return K("Should have found matching lanes. This is a bug in React."), i1;
      }
    }
    function yB(X, Z) {
      var { pendingLanes: $, suspendedLanes: q, pingedLanes: H, expirationTimes: G } = X, E = $;
      while (E > 0) {
        var P = Z$(E), A = 1 << P, O = G[P];
        if (O === i1) {
          if ((A & q) === s || (A & H) !== s)
            G[P] = hB(A, Z);
        } else if (O <= Z)
          X.expiredLanes |= A;
        E &= ~A;
      }
    }
    function fB(X) {
      return tq(X.pendingLanes);
    }
    function a7(X) {
      var Z = X.pendingLanes & ~dQ;
      if (Z !== s)
        return Z;
      if (Z & dQ)
        return dQ;
      return s;
    }
    function mB(X) {
      return (X & v0) !== s;
    }
    function r7(X) {
      return (X & sP) !== s;
    }
    function oP(X) {
      return (X & V3) === X;
    }
    function bB(X) {
      var Z = v0 | Z4 | kZ;
      return (X & Z) === s;
    }
    function uB(X) {
      return (X & GY) === X;
    }
    function T3(X, Z) {
      var $ = HY | Z4 | eJ | kZ;
      return (Z & $) !== s;
    }
    function cB(X, Z) {
      return (Z & X.expiredLanes) !== s;
    }
    function aP(X) {
      return (X & GY) !== s;
    }
    function rP() {
      var X = S3;
      if (S3 <<= 1, (S3 & GY) === s)
        S3 = aq;
      return X;
    }
    function pB() {
      var X = I3;
      if (I3 <<= 1, (I3 & V3) === s)
        I3 = zY;
      return X;
    }
    function X$(X) {
      return X & -X;
    }
    function eq(X) {
      return X$(X);
    }
    function Z$(X) {
      return 31 - lP(X);
    }
    function i7(X) {
      return Z$(X);
    }
    function lQ(X, Z) {
      return (X & Z) !== s;
    }
    function NY(X, Z) {
      return (X & Z) === Z;
    }
    function i0(X, Z) {
      return X | Z;
    }
    function g3(X, Z) {
      return X & ~Z;
    }
    function iP(X, Z) {
      return X & Z;
    }
    function x3(X) {
      return X;
    }
    function dB(X, Z) {
      return X !== F8 && X < Z ? X : Z;
    }
    function t7(X) {
      var Z = [];
      for (var $ = 0;$ < S7; $++)
        Z.push(X);
      return Z;
    }
    function QW(X, Z, $) {
      if (X.pendingLanes |= Z, Z !== Q$)
        X.suspendedLanes = s, X.pingedLanes = s;
      var q = X.eventTimes, H = i7(Z);
      q[H] = $;
    }
    function lB(X, Z) {
      X.suspendedLanes |= Z, X.pingedLanes &= ~Z;
      var $ = X.expirationTimes, q = Z;
      while (q > 0) {
        var H = Z$(q), G = 1 << H;
        $[H] = i1, q &= ~G;
      }
    }
    function tP(X, Z, $) {
      X.pingedLanes |= X.suspendedLanes & Z;
    }
    function nB(X, Z) {
      var $ = X.pendingLanes & ~Z;
      X.pendingLanes = Z, X.suspendedLanes = s, X.pingedLanes = s, X.expiredLanes &= Z, X.mutableReadLanes &= Z, X.entangledLanes &= Z;
      var { entanglements: q, eventTimes: H, expirationTimes: G } = X, E = $;
      while (E > 0) {
        var P = Z$(E), A = 1 << P;
        q[P] = s, H[P] = i1, G[P] = i1, E &= ~A;
      }
    }
    function e7(X, Z) {
      var $ = X.entangledLanes |= Z, q = X.entanglements, H = $;
      while (H) {
        var G = Z$(H), E = 1 << G;
        if (E & Z | q[G] & Z)
          q[G] |= Z;
        H &= ~E;
      }
    }
    function sB(X, Z) {
      var $ = X$(Z), q;
      switch ($) {
        case Z4:
          q = HY;
          break;
        case kZ:
          q = eJ;
          break;
        case aq:
        case I7:
        case _7:
        case T7:
        case g7:
        case x7:
        case v7:
        case h7:
        case y7:
        case f7:
        case m7:
        case b7:
        case u7:
        case c7:
        case p7:
        case d7:
        case zY:
        case l7:
        case n7:
        case s7:
        case o7:
          q = oq;
          break;
        case Q$:
          q = iq;
          break;
        default:
          q = F8;
          break;
      }
      if ((q & (X.suspendedLanes | Z)) !== F8)
        return F8;
      return q;
    }
    function eP(X, Z, $) {
      if (!cX)
        return;
      var q = X.pendingUpdatersLaneMap;
      while ($ > 0) {
        var H = i7($), G = 1 << H, E = q[H];
        E.add(Z), $ &= ~G;
      }
    }
    function QA(X, Z) {
      if (!cX)
        return;
      var { pendingUpdatersLaneMap: $, memoizedUpdaters: q } = X;
      while (Z > 0) {
        var H = i7(Z), G = 1 << H, E = $[H];
        if (E.size > 0)
          E.forEach(function(P) {
            var A = P.alternate;
            if (A === null || !q.has(A))
              q.add(P);
          }), E.clear();
        Z &= ~G;
      }
    }
    function XA(X, Z) {
      return null;
    }
    var nQ = v0, J4 = Z4, $4 = kZ, v3 = Q$, XW = F8;
    function pX() {
      return XW;
    }
    function P8(X) {
      XW = X;
    }
    function oB(X, Z) {
      var $ = XW;
      try {
        return XW = X, Z();
      } finally {
        XW = $;
      }
    }
    function aB(X, Z) {
      return X !== 0 && X < Z ? X : Z;
    }
    function rB(X, Z) {
      return X === 0 || X > Z ? X : Z;
    }
    function QG(X, Z) {
      return X !== 0 && X < Z;
    }
    function ZA(X) {
      var Z = X$(X);
      if (!QG(nQ, Z))
        return nQ;
      if (!QG(J4, Z))
        return J4;
      if (r7(Z))
        return $4;
      return v3;
    }
    function h3(X) {
      var Z = X.current.memoizedState;
      return Z.isDehydrated;
    }
    var JA;
    function iB(X) {
      JA = X;
    }
    function tB(X) {
      JA(X);
    }
    var XG;
    function eB(X) {
      XG = X;
    }
    var $A;
    function QC(X) {
      $A = X;
    }
    var YA;
    function XC(X) {
      YA = X;
    }
    var qA;
    function ZC(X) {
      qA = X;
    }
    var ZG = !1, y3 = [], f4 = null, m4 = null, b4 = null, ZW = /* @__PURE__ */ new Map, JW = /* @__PURE__ */ new Map, u4 = [], JC = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function $C(X) {
      return JC.indexOf(X) > -1;
    }
    function YC(X, Z, $, q, H) {
      return {
        blockedOn: X,
        domEventName: Z,
        eventSystemFlags: $,
        nativeEvent: H,
        targetContainers: [q]
      };
    }
    function WA(X, Z) {
      switch (X) {
        case "focusin":
        case "focusout":
          f4 = null;
          break;
        case "dragenter":
        case "dragleave":
          m4 = null;
          break;
        case "mouseover":
        case "mouseout":
          b4 = null;
          break;
        case "pointerover":
        case "pointerout": {
          var $ = Z.pointerId;
          ZW.delete($);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var q = Z.pointerId;
          JW.delete(q);
          break;
        }
      }
    }
    function $W(X, Z, $, q, H, G) {
      if (X === null || X.nativeEvent !== G) {
        var E = YC(Z, $, q, H, G);
        if (Z !== null) {
          var P = d4(Z);
          if (P !== null)
            XG(P);
        }
        return E;
      }
      X.eventSystemFlags |= q;
      var A = X.targetContainers;
      if (H !== null && A.indexOf(H) === -1)
        A.push(H);
      return X;
    }
    function qC(X, Z, $, q, H) {
      switch (Z) {
        case "focusin": {
          var G = H;
          return f4 = $W(f4, X, Z, $, q, G), !0;
        }
        case "dragenter": {
          var E = H;
          return m4 = $W(m4, X, Z, $, q, E), !0;
        }
        case "mouseover": {
          var P = H;
          return b4 = $W(b4, X, Z, $, q, P), !0;
        }
        case "pointerover": {
          var A = H, O = A.pointerId;
          return ZW.set(O, $W(ZW.get(O) || null, X, Z, $, q, A)), !0;
        }
        case "gotpointercapture": {
          var R = H, C = R.pointerId;
          return JW.set(C, $W(JW.get(C) || null, X, Z, $, q, R)), !0;
        }
      }
      return !1;
    }
    function KA(X) {
      var Z = Y$(X.target);
      if (Z !== null) {
        var $ = rJ(Z);
        if ($ !== null) {
          var q = $.tag;
          if (q === n) {
            var H = TP($);
            if (H !== null) {
              X.blockedOn = H, qA(X.priority, function() {
                $A($);
              });
              return;
            }
          } else if (q === w) {
            var G = $.stateNode;
            if (h3(G)) {
              X.blockedOn = gP($);
              return;
            }
          }
        }
      }
      X.blockedOn = null;
    }
    function WC(X) {
      var Z = YA(), $ = {
        blockedOn: null,
        target: X,
        priority: Z
      }, q = 0;
      for (;q < u4.length; q++)
        if (!QG(Z, u4[q].priority))
          break;
      if (u4.splice(q, 0, $), q === 0)
        KA($);
    }
    function f3(X) {
      if (X.blockedOn !== null)
        return !1;
      var Z = X.targetContainers;
      while (Z.length > 0) {
        var $ = Z[0], q = YG(X.domEventName, X.eventSystemFlags, $, X.nativeEvent);
        if (q === null) {
          var H = X.nativeEvent, G = new H.constructor(H.type, H);
          gj(G), H.target.dispatchEvent(G), xj();
        } else {
          var E = d4(q);
          if (E !== null)
            XG(E);
          return X.blockedOn = q, !1;
        }
        Z.shift();
      }
      return !0;
    }
    function HA(X, Z, $) {
      if (f3(X))
        $.delete(Z);
    }
    function KC() {
      if (ZG = !1, f4 !== null && f3(f4))
        f4 = null;
      if (m4 !== null && f3(m4))
        m4 = null;
      if (b4 !== null && f3(b4))
        b4 = null;
      ZW.forEach(HA), JW.forEach(HA);
    }
    function YW(X, Z) {
      if (X.blockedOn === Z) {
        if (X.blockedOn = null, !ZG)
          ZG = !0, m1.unstable_scheduleCallback(m1.unstable_NormalPriority, KC);
      }
    }
    function qW(X) {
      if (y3.length > 0) {
        YW(y3[0], X);
        for (var Z = 1;Z < y3.length; Z++) {
          var $ = y3[Z];
          if ($.blockedOn === X)
            $.blockedOn = null;
        }
      }
      if (f4 !== null)
        YW(f4, X);
      if (m4 !== null)
        YW(m4, X);
      if (b4 !== null)
        YW(b4, X);
      var q = function(P) {
        return YW(P, X);
      };
      ZW.forEach(q), JW.forEach(q);
      for (var H = 0;H < u4.length; H++) {
        var G = u4[H];
        if (G.blockedOn === X)
          G.blockedOn = null;
      }
      while (u4.length > 0) {
        var E = u4[0];
        if (E.blockedOn !== null)
          break;
        else if (KA(E), E.blockedOn === null)
          u4.shift();
      }
    }
    var EY = Q.ReactCurrentBatchConfig, JG = !0;
    function GA(X) {
      JG = !!X;
    }
    function HC() {
      return JG;
    }
    function GC(X, Z, $) {
      var q = zA(Z), H;
      switch (q) {
        case nQ:
          H = zC;
          break;
        case J4:
          H = NC;
          break;
        case $4:
        default:
          H = $G;
          break;
      }
      return H.bind(null, Z, $, X);
    }
    function zC(X, Z, $, q) {
      var H = pX(), G = EY.transition;
      EY.transition = null;
      try {
        P8(nQ), $G(X, Z, $, q);
      } finally {
        P8(H), EY.transition = G;
      }
    }
    function NC(X, Z, $, q) {
      var H = pX(), G = EY.transition;
      EY.transition = null;
      try {
        P8(J4), $G(X, Z, $, q);
      } finally {
        P8(H), EY.transition = G;
      }
    }
    function $G(X, Z, $, q) {
      if (!JG)
        return;
      EC(X, Z, $, q);
    }
    function EC(X, Z, $, q) {
      var H = YG(X, Z, $, q);
      if (H === null) {
        OG(X, Z, q, m3, $), WA(X, q);
        return;
      }
      if (qC(H, X, Z, $, q)) {
        q.stopPropagation();
        return;
      }
      if (WA(X, q), Z & bq && $C(X)) {
        while (H !== null) {
          var G = d4(H);
          if (G !== null)
            tB(G);
          var E = YG(X, Z, $, q);
          if (E === null)
            OG(X, Z, q, m3, $);
          if (E === H)
            break;
          H = E;
        }
        if (H !== null)
          q.stopPropagation();
        return;
      }
      OG(X, Z, q, null, $);
    }
    var m3 = null;
    function YG(X, Z, $, q) {
      m3 = null;
      var H = N7(q), G = Y$(H);
      if (G !== null) {
        var E = rJ(G);
        if (E === null)
          G = null;
        else {
          var P = E.tag;
          if (P === n) {
            var A = TP(E);
            if (A !== null)
              return A;
            G = null;
          } else if (P === w) {
            var O = E.stateNode;
            if (h3(O))
              return gP(E);
            G = null;
          } else if (E !== G)
            G = null;
        }
      }
      return m3 = G, null;
    }
    function zA(X) {
      switch (X) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return nQ;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return J4;
        case "message": {
          var Z = $B();
          switch (Z) {
            case C3:
              return nQ;
            case B7:
              return J4;
            case iJ:
            case YB:
              return $4;
            case C7:
              return v3;
            default:
              return $4;
          }
        }
        default:
          return $4;
      }
    }
    function FC(X, Z, $) {
      return X.addEventListener(Z, $, !1), $;
    }
    function PC(X, Z, $) {
      return X.addEventListener(Z, $, !0), $;
    }
    function AC(X, Z, $, q) {
      return X.addEventListener(Z, $, {
        capture: !0,
        passive: q
      }), $;
    }
    function UC(X, Z, $, q) {
      return X.addEventListener(Z, $, {
        passive: q
      }), $;
    }
    var WW = null, qG = null, KW = null;
    function LC(X) {
      return WW = X, qG = EA(), !0;
    }
    function OC() {
      WW = null, qG = null, KW = null;
    }
    function NA() {
      if (KW)
        return KW;
      var X, Z = qG, $ = Z.length, q, H = EA(), G = H.length;
      for (X = 0;X < $; X++)
        if (Z[X] !== H[X])
          break;
      var E = $ - X;
      for (q = 1;q <= E; q++)
        if (Z[$ - q] !== H[G - q])
          break;
      var P = q > 1 ? 1 - q : void 0;
      return KW = H.slice(X, P), KW;
    }
    function EA() {
      if ("value" in WW)
        return WW.value;
      return WW.textContent;
    }
    function b3(X) {
      var Z, $ = X.keyCode;
      if ("charCode" in X) {
        if (Z = X.charCode, Z === 0 && $ === 13)
          Z = 13;
      } else
        Z = $;
      if (Z === 10)
        Z = 13;
      if (Z >= 32 || Z === 13)
        return Z;
      return 0;
    }
    function u3() {
      return !0;
    }
    function FA() {
      return !1;
    }
    function sQ(X) {
      function Z($, q, H, G, E) {
        this._reactName = $, this._targetInst = H, this.type = q, this.nativeEvent = G, this.target = E, this.currentTarget = null;
        for (var P in X) {
          if (!X.hasOwnProperty(P))
            continue;
          var A = X[P];
          if (A)
            this[P] = A(G);
          else
            this[P] = G[P];
        }
        var O = G.defaultPrevented != null ? G.defaultPrevented : G.returnValue === !1;
        if (O)
          this.isDefaultPrevented = u3;
        else
          this.isDefaultPrevented = FA;
        return this.isPropagationStopped = FA, this;
      }
      return $1(Z.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var $ = this.nativeEvent;
          if (!$)
            return;
          if ($.preventDefault)
            $.preventDefault();
          else if (typeof $.returnValue !== "unknown")
            $.returnValue = !1;
          this.isDefaultPrevented = u3;
        },
        stopPropagation: function() {
          var $ = this.nativeEvent;
          if (!$)
            return;
          if ($.stopPropagation)
            $.stopPropagation();
          else if (typeof $.cancelBubble !== "unknown")
            $.cancelBubble = !0;
          this.isPropagationStopped = u3;
        },
        persist: function() {},
        isPersistent: u3
      }), Z;
    }
    var FY = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(X) {
        return X.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, WG = sQ(FY), HW = $1({}, FY, {
      view: 0,
      detail: 0
    }), wC = sQ(HW), KG, HG, GW;
    function MC(X) {
      if (X !== GW) {
        if (GW && X.type === "mousemove")
          KG = X.screenX - GW.screenX, HG = X.screenY - GW.screenY;
        else
          KG = 0, HG = 0;
        GW = X;
      }
    }
    var c3 = $1({}, HW, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zG,
      button: 0,
      buttons: 0,
      relatedTarget: function(X) {
        if (X.relatedTarget === void 0)
          return X.fromElement === X.srcElement ? X.toElement : X.fromElement;
        return X.relatedTarget;
      },
      movementX: function(X) {
        if ("movementX" in X)
          return X.movementX;
        return MC(X), KG;
      },
      movementY: function(X) {
        if ("movementY" in X)
          return X.movementY;
        return HG;
      }
    }), PA = sQ(c3), DC = $1({}, c3, {
      dataTransfer: 0
    }), RC = sQ(DC), kC = $1({}, HW, {
      relatedTarget: 0
    }), GG = sQ(kC), jC = $1({}, FY, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), BC = sQ(jC), CC = $1({}, FY, {
      clipboardData: function(X) {
        return "clipboardData" in X ? X.clipboardData : window.clipboardData;
      }
    }), VC = sQ(CC), SC = $1({}, FY, {
      data: 0
    }), AA = sQ(SC), IC = AA, _C = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, TC = {
      "8": "Backspace",
      "9": "Tab",
      "12": "Clear",
      "13": "Enter",
      "16": "Shift",
      "17": "Control",
      "18": "Alt",
      "19": "Pause",
      "20": "CapsLock",
      "27": "Escape",
      "32": " ",
      "33": "PageUp",
      "34": "PageDown",
      "35": "End",
      "36": "Home",
      "37": "ArrowLeft",
      "38": "ArrowUp",
      "39": "ArrowRight",
      "40": "ArrowDown",
      "45": "Insert",
      "46": "Delete",
      "112": "F1",
      "113": "F2",
      "114": "F3",
      "115": "F4",
      "116": "F5",
      "117": "F6",
      "118": "F7",
      "119": "F8",
      "120": "F9",
      "121": "F10",
      "122": "F11",
      "123": "F12",
      "144": "NumLock",
      "145": "ScrollLock",
      "224": "Meta"
    };
    function gC(X) {
      if (X.key) {
        var Z = _C[X.key] || X.key;
        if (Z !== "Unidentified")
          return Z;
      }
      if (X.type === "keypress") {
        var $ = b3(X);
        return $ === 13 ? "Enter" : String.fromCharCode($);
      }
      if (X.type === "keydown" || X.type === "keyup")
        return TC[X.keyCode] || "Unidentified";
      return "";
    }
    var xC = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function vC(X) {
      var Z = this, $ = Z.nativeEvent;
      if ($.getModifierState)
        return $.getModifierState(X);
      var q = xC[X];
      return q ? !!$[q] : !1;
    }
    function zG(X) {
      return vC;
    }
    var hC = $1({}, HW, {
      key: gC,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zG,
      charCode: function(X) {
        if (X.type === "keypress")
          return b3(X);
        return 0;
      },
      keyCode: function(X) {
        if (X.type === "keydown" || X.type === "keyup")
          return X.keyCode;
        return 0;
      },
      which: function(X) {
        if (X.type === "keypress")
          return b3(X);
        if (X.type === "keydown" || X.type === "keyup")
          return X.keyCode;
        return 0;
      }
    }), yC = sQ(hC), fC = $1({}, c3, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), UA = sQ(fC), mC = $1({}, HW, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zG
    }), bC = sQ(mC), uC = $1({}, FY, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cC = sQ(uC), pC = $1({}, c3, {
      deltaX: function(X) {
        return "deltaX" in X ? X.deltaX : ("wheelDeltaX" in X) ? -X.wheelDeltaX : 0;
      },
      deltaY: function(X) {
        return "deltaY" in X ? X.deltaY : ("wheelDeltaY" in X) ? -X.wheelDeltaY : ("wheelDelta" in X) ? -X.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), dC = sQ(pC), lC = [9, 13, 27, 32], LA = 229, NG = d1 && "CompositionEvent" in window, zW = null;
    if (d1 && "documentMode" in document)
      zW = document.documentMode;
    var nC = d1 && "TextEvent" in window && !zW, OA = d1 && (!NG || zW && zW > 8 && zW <= 11), wA = 32, MA = String.fromCharCode(wA);
    function sC() {
      I1("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), I1("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), I1("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), I1("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var DA = !1;
    function oC(X) {
      return (X.ctrlKey || X.altKey || X.metaKey) && !(X.ctrlKey && X.altKey);
    }
    function aC(X) {
      switch (X) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function rC(X, Z) {
      return X === "keydown" && Z.keyCode === LA;
    }
    function RA(X, Z) {
      switch (X) {
        case "keyup":
          return lC.indexOf(Z.keyCode) !== -1;
        case "keydown":
          return Z.keyCode !== LA;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function kA(X) {
      var Z = X.detail;
      if (typeof Z === "object" && "data" in Z)
        return Z.data;
      return null;
    }
    function jA(X) {
      return X.locale === "ko";
    }
    var PY = !1;
    function iC(X, Z, $, q, H) {
      var G, E;
      if (NG)
        G = aC(Z);
      else if (!PY) {
        if (rC(Z, q))
          G = "onCompositionStart";
      } else if (RA(Z, q))
        G = "onCompositionEnd";
      if (!G)
        return null;
      if (OA && !jA(q)) {
        if (!PY && G === "onCompositionStart")
          PY = LC(H);
        else if (G === "onCompositionEnd") {
          if (PY)
            E = NA();
        }
      }
      var P = s3($, G);
      if (P.length > 0) {
        var A = new AA(G, Z, null, q, H);
        if (X.push({
          event: A,
          listeners: P
        }), E)
          A.data = E;
        else {
          var O = kA(q);
          if (O !== null)
            A.data = O;
        }
      }
    }
    function tC(X, Z) {
      switch (X) {
        case "compositionend":
          return kA(Z);
        case "keypress":
          var $ = Z.which;
          if ($ !== wA)
            return null;
          return DA = !0, MA;
        case "textInput":
          var q = Z.data;
          if (q === MA && DA)
            return null;
          return q;
        default:
          return null;
      }
    }
    function eC(X, Z) {
      if (PY) {
        if (X === "compositionend" || !NG && RA(X, Z)) {
          var $ = NA();
          return OC(), PY = !1, $;
        }
        return null;
      }
      switch (X) {
        case "paste":
          return null;
        case "keypress":
          if (!oC(Z)) {
            if (Z.char && Z.char.length > 1)
              return Z.char;
            else if (Z.which)
              return String.fromCharCode(Z.which);
          }
          return null;
        case "compositionend":
          return OA && !jA(Z) ? null : Z.data;
        default:
          return null;
      }
    }
    function QV(X, Z, $, q, H) {
      var G;
      if (nC)
        G = tC(Z, q);
      else
        G = eC(Z, q);
      if (!G)
        return null;
      var E = s3($, "onBeforeInput");
      if (E.length > 0) {
        var P = new IC("onBeforeInput", "beforeinput", null, q, H);
        X.push({
          event: P,
          listeners: E
        }), P.data = G;
      }
    }
    function XV(X, Z, $, q, H, G, E) {
      iC(X, Z, $, q, H), QV(X, Z, $, q, H);
    }
    var ZV = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function BA(X) {
      var Z = X && X.nodeName && X.nodeName.toLowerCase();
      if (Z === "input")
        return !!ZV[X.type];
      if (Z === "textarea")
        return !0;
      return !1;
    }
    function JV(X) {
      if (!d1)
        return !1;
      var Z = "on" + X, $ = Z in document;
      if (!$) {
        var q = document.createElement("div");
        q.setAttribute(Z, "return;"), $ = typeof q[Z] === "function";
      }
      return $;
    }
    function $V() {
      I1("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function CA(X, Z, $, q) {
      kP(q);
      var H = s3(Z, "onChange");
      if (H.length > 0) {
        var G = new WG("onChange", "change", null, $, q);
        X.push({
          event: G,
          listeners: H
        });
      }
    }
    var NW = null, EW = null;
    function YV(X) {
      var Z = X.nodeName && X.nodeName.toLowerCase();
      return Z === "select" || Z === "input" && X.type === "file";
    }
    function qV(X) {
      var Z = [];
      CA(Z, EW, X, N7(X)), VP(WV, Z);
    }
    function WV(X) {
      lA(X, 0);
    }
    function p3(X) {
      var Z = MY(X);
      if (i$(Z))
        return X;
    }
    function KV(X, Z) {
      if (X === "change")
        return Z;
    }
    var VA = !1;
    if (d1)
      VA = JV("input") && (!document.documentMode || document.documentMode > 9);
    function HV(X, Z) {
      NW = X, EW = Z, NW.attachEvent("onpropertychange", IA);
    }
    function SA() {
      if (!NW)
        return;
      NW.detachEvent("onpropertychange", IA), NW = null, EW = null;
    }
    function IA(X) {
      if (X.propertyName !== "value")
        return;
      if (p3(EW))
        qV(X);
    }
    function GV(X, Z, $) {
      if (X === "focusin")
        SA(), HV(Z, $);
      else if (X === "focusout")
        SA();
    }
    function zV(X, Z) {
      if (X === "selectionchange" || X === "keyup" || X === "keydown")
        return p3(EW);
    }
    function NV(X) {
      var Z = X.nodeName;
      return Z && Z.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio");
    }
    function EV(X, Z) {
      if (X === "click")
        return p3(Z);
    }
    function FV(X, Z) {
      if (X === "input" || X === "change")
        return p3(Z);
    }
    function PV(X) {
      var Z = X._wrapperState;
      if (!Z || !Z.controlled || X.type !== "number")
        return;
      x0(X, "number", X.value);
    }
    function AV(X, Z, $, q, H, G, E) {
      var P = $ ? MY($) : window, A, O;
      if (YV(P))
        A = KV;
      else if (BA(P))
        if (VA)
          A = FV;
        else
          A = zV, O = GV;
      else if (NV(P))
        A = EV;
      if (A) {
        var R = A(Z, $);
        if (R) {
          CA(X, R, q, H);
          return;
        }
      }
      if (O)
        O(Z, P, $);
      if (Z === "focusout")
        PV(P);
    }
    function UV() {
      u0("onMouseEnter", ["mouseout", "mouseover"]), u0("onMouseLeave", ["mouseout", "mouseover"]), u0("onPointerEnter", ["pointerout", "pointerover"]), u0("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function LV(X, Z, $, q, H, G, E) {
      var P = Z === "mouseover" || Z === "pointerover", A = Z === "mouseout" || Z === "pointerout";
      if (P && !vj(q)) {
        var O = q.relatedTarget || q.fromElement;
        if (O) {
          if (Y$(O) || VW(O))
            return;
        }
      }
      if (!A && !P)
        return;
      var R;
      if (H.window === H)
        R = H;
      else {
        var C = H.ownerDocument;
        if (C)
          R = C.defaultView || C.parentWindow;
        else
          R = window;
      }
      var B, x;
      if (A) {
        var v = q.relatedTarget || q.toElement;
        if (B = $, x = v ? Y$(v) : null, x !== null) {
          var f = rJ(x);
          if (x !== f || x.tag !== k && x.tag !== I)
            x = null;
        }
      } else
        B = null, x = $;
      if (B === x)
        return;
      var Y0 = PA, L0 = "onMouseLeave", F0 = "onMouseEnter", K1 = "mouse";
      if (Z === "pointerout" || Z === "pointerover")
        Y0 = UA, L0 = "onPointerLeave", F0 = "onPointerEnter", K1 = "pointer";
      var H1 = B == null ? R : MY(B), _ = x == null ? R : MY(x), b = new Y0(L0, K1 + "leave", B, q, H);
      b.target = H1, b.relatedTarget = _;
      var T = null, a = Y$(H);
      if (a === $) {
        var G0 = new Y0(F0, K1 + "enter", x, q, H);
        G0.target = _, G0.relatedTarget = H1, T = G0;
      }
      cV(X, b, T, B, x);
    }
    function OV(X, Z) {
      return X === Z && (X !== 0 || 1 / X === 1 / Z) || X !== X && Z !== Z;
    }
    var oQ = typeof Object.is === "function" ? Object.is : OV;
    function FW(X, Z) {
      if (oQ(X, Z))
        return !0;
      if (typeof X !== "object" || X === null || typeof Z !== "object" || Z === null)
        return !1;
      var $ = Object.keys(X), q = Object.keys(Z);
      if ($.length !== q.length)
        return !1;
      for (var H = 0;H < $.length; H++) {
        var G = $[H];
        if (!J0.call(Z, G) || !oQ(X[G], Z[G]))
          return !1;
      }
      return !0;
    }
    function _A(X) {
      while (X && X.firstChild)
        X = X.firstChild;
      return X;
    }
    function wV(X) {
      while (X) {
        if (X.nextSibling)
          return X.nextSibling;
        X = X.parentNode;
      }
    }
    function TA(X, Z) {
      var $ = _A(X), q = 0, H = 0;
      while ($) {
        if ($.nodeType === rZ) {
          if (H = q + $.textContent.length, q <= Z && H >= Z)
            return {
              node: $,
              offset: Z - q
            };
          q = H;
        }
        $ = _A(wV($));
      }
    }
    function MV(X) {
      var Z = X.ownerDocument, $ = Z && Z.defaultView || window, q = $.getSelection && $.getSelection();
      if (!q || q.rangeCount === 0)
        return null;
      var { anchorNode: H, anchorOffset: G, focusNode: E, focusOffset: P } = q;
      try {
        H.nodeType, E.nodeType;
      } catch (A) {
        return null;
      }
      return DV(X, H, G, E, P);
    }
    function DV(X, Z, $, q, H) {
      var G = 0, E = -1, P = -1, A = 0, O = 0, R = X, C = null;
      Q:
        while (!0) {
          var B = null;
          while (!0) {
            if (R === Z && ($ === 0 || R.nodeType === rZ))
              E = G + $;
            if (R === q && (H === 0 || R.nodeType === rZ))
              P = G + H;
            if (R.nodeType === rZ)
              G += R.nodeValue.length;
            if ((B = R.firstChild) === null)
              break;
            C = R, R = B;
          }
          while (!0) {
            if (R === X)
              break Q;
            if (C === Z && ++A === $)
              E = G;
            if (C === q && ++O === H)
              P = G;
            if ((B = R.nextSibling) !== null)
              break;
            R = C, C = R.parentNode;
          }
          R = B;
        }
      if (E === -1 || P === -1)
        return null;
      return {
        start: E,
        end: P
      };
    }
    function RV(X, Z) {
      var $ = X.ownerDocument || document, q = $ && $.defaultView || window;
      if (!q.getSelection)
        return;
      var H = q.getSelection(), G = X.textContent.length, E = Math.min(Z.start, G), P = Z.end === void 0 ? E : Math.min(Z.end, G);
      if (!H.extend && E > P) {
        var A = P;
        P = E, E = A;
      }
      var O = TA(X, E), R = TA(X, P);
      if (O && R) {
        if (H.rangeCount === 1 && H.anchorNode === O.node && H.anchorOffset === O.offset && H.focusNode === R.node && H.focusOffset === R.offset)
          return;
        var C = $.createRange();
        if (C.setStart(O.node, O.offset), H.removeAllRanges(), E > P)
          H.addRange(C), H.extend(R.node, R.offset);
        else
          C.setEnd(R.node, R.offset), H.addRange(C);
      }
    }
    function gA(X) {
      return X && X.nodeType === rZ;
    }
    function xA(X, Z) {
      if (!X || !Z)
        return !1;
      else if (X === Z)
        return !0;
      else if (gA(X))
        return !1;
      else if (gA(Z))
        return xA(X, Z.parentNode);
      else if ("contains" in X)
        return X.contains(Z);
      else if (X.compareDocumentPosition)
        return !!(X.compareDocumentPosition(Z) & 16);
      else
        return !1;
    }
    function kV(X) {
      return X && X.ownerDocument && xA(X.ownerDocument.documentElement, X);
    }
    function jV(X) {
      try {
        return typeof X.contentWindow.location.href === "string";
      } catch (Z) {
        return !1;
      }
    }
    function vA() {
      var X = window, Z = h4();
      while (Z instanceof X.HTMLIFrameElement) {
        if (jV(Z))
          X = Z.contentWindow;
        else
          return Z;
        Z = h4(X.document);
      }
      return Z;
    }
    function EG(X) {
      var Z = X && X.nodeName && X.nodeName.toLowerCase();
      return Z && (Z === "input" && (X.type === "text" || X.type === "search" || X.type === "tel" || X.type === "url" || X.type === "password") || Z === "textarea" || X.contentEditable === "true");
    }
    function BV() {
      var X = vA();
      return {
        focusedElem: X,
        selectionRange: EG(X) ? VV(X) : null
      };
    }
    function CV(X) {
      var Z = vA(), $ = X.focusedElem, q = X.selectionRange;
      if (Z !== $ && kV($)) {
        if (q !== null && EG($))
          SV($, q);
        var H = [], G = $;
        while (G = G.parentNode)
          if (G.nodeType === VQ)
            H.push({
              element: G,
              left: G.scrollLeft,
              top: G.scrollTop
            });
        if (typeof $.focus === "function")
          $.focus();
        for (var E = 0;E < H.length; E++) {
          var P = H[E];
          P.element.scrollLeft = P.left, P.element.scrollTop = P.top;
        }
      }
    }
    function VV(X) {
      var Z;
      if ("selectionStart" in X)
        Z = {
          start: X.selectionStart,
          end: X.selectionEnd
        };
      else
        Z = MV(X);
      return Z || {
        start: 0,
        end: 0
      };
    }
    function SV(X, Z) {
      var { start: $, end: q } = Z;
      if (q === void 0)
        q = $;
      if ("selectionStart" in X)
        X.selectionStart = $, X.selectionEnd = Math.min(q, X.value.length);
      else
        RV(X, Z);
    }
    var IV = d1 && "documentMode" in document && document.documentMode <= 11;
    function _V() {
      I1("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var AY = null, FG = null, PW = null, PG = !1;
    function TV(X) {
      if ("selectionStart" in X && EG(X))
        return {
          start: X.selectionStart,
          end: X.selectionEnd
        };
      else {
        var Z = X.ownerDocument && X.ownerDocument.defaultView || window, $ = Z.getSelection();
        return {
          anchorNode: $.anchorNode,
          anchorOffset: $.anchorOffset,
          focusNode: $.focusNode,
          focusOffset: $.focusOffset
        };
      }
    }
    function gV(X) {
      return X.window === X ? X.document : X.nodeType === iZ ? X : X.ownerDocument;
    }
    function hA(X, Z, $) {
      var q = gV($);
      if (PG || AY == null || AY !== h4(q))
        return;
      var H = TV(AY);
      if (!PW || !FW(PW, H)) {
        PW = H;
        var G = s3(FG, "onSelect");
        if (G.length > 0) {
          var E = new WG("onSelect", "select", null, Z, $);
          X.push({
            event: E,
            listeners: G
          }), E.target = AY;
        }
      }
    }
    function xV(X, Z, $, q, H, G, E) {
      var P = $ ? MY($) : window;
      switch (Z) {
        case "focusin":
          if (BA(P) || P.contentEditable === "true")
            AY = P, FG = $, PW = null;
          break;
        case "focusout":
          AY = null, FG = null, PW = null;
          break;
        case "mousedown":
          PG = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          PG = !1, hA(X, q, H);
          break;
        case "selectionchange":
          if (IV)
            break;
        case "keydown":
        case "keyup":
          hA(X, q, H);
      }
    }
    function d3(X, Z) {
      var $ = {};
      return $[X.toLowerCase()] = Z.toLowerCase(), $["Webkit" + X] = "webkit" + Z, $["Moz" + X] = "moz" + Z, $;
    }
    var UY = {
      animationend: d3("Animation", "AnimationEnd"),
      animationiteration: d3("Animation", "AnimationIteration"),
      animationstart: d3("Animation", "AnimationStart"),
      transitionend: d3("Transition", "TransitionEnd")
    }, AG = {}, yA = {};
    if (d1) {
      if (yA = document.createElement("div").style, !("AnimationEvent" in window))
        delete UY.animationend.animation, delete UY.animationiteration.animation, delete UY.animationstart.animation;
      if (!("TransitionEvent" in window))
        delete UY.transitionend.transition;
    }
    function l3(X) {
      if (AG[X])
        return AG[X];
      else if (!UY[X])
        return X;
      var Z = UY[X];
      for (var $ in Z)
        if (Z.hasOwnProperty($) && $ in yA)
          return AG[X] = Z[$];
      return X;
    }
    var fA = l3("animationend"), mA = l3("animationiteration"), bA = l3("animationstart"), uA = l3("transitionend"), cA = /* @__PURE__ */ new Map, pA = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function c4(X, Z) {
      cA.set(X, Z), I1(Z, [X]);
    }
    function vV() {
      for (var X = 0;X < pA.length; X++) {
        var Z = pA[X], $ = Z.toLowerCase(), q = Z[0].toUpperCase() + Z.slice(1);
        c4($, "on" + q);
      }
      c4(fA, "onAnimationEnd"), c4(mA, "onAnimationIteration"), c4(bA, "onAnimationStart"), c4("dblclick", "onDoubleClick"), c4("focusin", "onFocus"), c4("focusout", "onBlur"), c4(uA, "onTransitionEnd");
    }
    function hV(X, Z, $, q, H, G, E) {
      var P = cA.get(Z);
      if (P === void 0)
        return;
      var A = WG, O = Z;
      switch (Z) {
        case "keypress":
          if (b3(q) === 0)
            return;
        case "keydown":
        case "keyup":
          A = yC;
          break;
        case "focusin":
          O = "focus", A = GG;
          break;
        case "focusout":
          O = "blur", A = GG;
          break;
        case "beforeblur":
        case "afterblur":
          A = GG;
          break;
        case "click":
          if (q.button === 2)
            return;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          A = PA;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          A = RC;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          A = bC;
          break;
        case fA:
        case mA:
        case bA:
          A = BC;
          break;
        case uA:
          A = cC;
          break;
        case "scroll":
          A = wC;
          break;
        case "wheel":
          A = dC;
          break;
        case "copy":
        case "cut":
        case "paste":
          A = VC;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          A = UA;
          break;
      }
      var R = (G & bq) !== 0;
      {
        var C = !R && Z === "scroll", B = bV($, P, q.type, R, C);
        if (B.length > 0) {
          var x = new A(P, O, null, q, H);
          X.push({
            event: x,
            listeners: B
          });
        }
      }
    }
    vV(), UV(), $V(), _V(), sC();
    function yV(X, Z, $, q, H, G, E) {
      hV(X, Z, $, q, H, G);
      var P = (G & Tj) === 0;
      if (P)
        LV(X, Z, $, q, H), AV(X, Z, $, q, H), xV(X, Z, $, q, H), XV(X, Z, $, q, H);
    }
    var AW = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], UG = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(AW));
    function dA(X, Z, $) {
      var q = X.type || "unknown-event";
      X.currentTarget = $, dj(q, Z, void 0, X), X.currentTarget = null;
    }
    function fV(X, Z, $) {
      var q;
      if ($)
        for (var H = Z.length - 1;H >= 0; H--) {
          var G = Z[H], E = G.instance, P = G.currentTarget, A = G.listener;
          if (E !== q && X.isPropagationStopped())
            return;
          dA(X, A, P), q = E;
        }
      else
        for (var O = 0;O < Z.length; O++) {
          var R = Z[O], C = R.instance, B = R.currentTarget, x = R.listener;
          if (C !== q && X.isPropagationStopped())
            return;
          dA(X, x, B), q = C;
        }
    }
    function lA(X, Z) {
      var $ = (Z & bq) !== 0;
      for (var q = 0;q < X.length; q++) {
        var H = X[q], G = H.event, E = H.listeners;
        fV(G, E, $);
      }
      lj();
    }
    function mV(X, Z, $, q, H) {
      var G = N7($), E = [];
      yV(E, X, q, $, G, Z), lA(E, Z);
    }
    function X6(X, Z) {
      if (!UG.has(X))
        K('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', X);
      var $ = !1, q = PI(Z), H = pV(X, $);
      if (!q.has(H))
        nA(Z, X, z7, $), q.add(H);
    }
    function LG(X, Z, $) {
      if (UG.has(X) && !Z)
        K('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', X);
      var q = 0;
      if (Z)
        q |= bq;
      nA($, X, q, Z);
    }
    var n3 = "_reactListening" + Math.random().toString(36).slice(2);
    function UW(X) {
      if (!X[n3]) {
        X[n3] = !0, l1.forEach(function($) {
          if ($ !== "selectionchange") {
            if (!UG.has($))
              LG($, !1, X);
            LG($, !0, X);
          }
        });
        var Z = X.nodeType === iZ ? X : X.ownerDocument;
        if (Z !== null) {
          if (!Z[n3])
            Z[n3] = !0, LG("selectionchange", !1, Z);
        }
      }
    }
    function nA(X, Z, $, q, H) {
      var G = GC(X, Z, $), E = void 0;
      if (P7) {
        if (Z === "touchstart" || Z === "touchmove" || Z === "wheel")
          E = !0;
      }
      X = X;
      var P;
      if (q)
        if (E !== void 0)
          P = AC(X, Z, G, E);
        else
          P = PC(X, Z, G);
      else if (E !== void 0)
        P = UC(X, Z, G, E);
      else
        P = FC(X, Z, G);
    }
    function sA(X, Z) {
      return X === Z || X.nodeType === h6 && X.parentNode === Z;
    }
    function OG(X, Z, $, q, H) {
      var G = q;
      if ((Z & DP) === 0 && (Z & z7) === 0) {
        var E = H;
        if (q !== null) {
          var P = q;
          Q:
            while (!0) {
              if (P === null)
                return;
              var A = P.tag;
              if (A === w || A === D) {
                var O = P.stateNode.containerInfo;
                if (sA(O, E))
                  break;
                if (A === D) {
                  var R = P.return;
                  while (R !== null) {
                    var C = R.tag;
                    if (C === w || C === D) {
                      var B = R.stateNode.containerInfo;
                      if (sA(B, E))
                        return;
                    }
                    R = R.return;
                  }
                }
                while (O !== null) {
                  var x = Y$(O);
                  if (x === null)
                    return;
                  var v = x.tag;
                  if (v === k || v === I) {
                    P = G = x;
                    continue Q;
                  }
                  O = O.parentNode;
                }
              }
              P = P.return;
            }
        }
      }
      VP(function() {
        return mV(X, Z, $, G);
      });
    }
    function LW(X, Z, $) {
      return {
        instance: X,
        listener: Z,
        currentTarget: $
      };
    }
    function bV(X, Z, $, q, H, G) {
      var E = Z !== null ? Z + "Capture" : null, P = q ? E : Z, A = [], O = X, R = null;
      while (O !== null) {
        var C = O, B = C.stateNode, x = C.tag;
        if (x === k && B !== null) {
          if (R = B, P !== null) {
            var v = cq(O, P);
            if (v != null)
              A.push(LW(O, v, R));
          }
        }
        if (H)
          break;
        O = O.return;
      }
      return A;
    }
    function s3(X, Z) {
      var $ = Z + "Capture", q = [], H = X;
      while (H !== null) {
        var G = H, E = G.stateNode, P = G.tag;
        if (P === k && E !== null) {
          var A = E, O = cq(H, $);
          if (O != null)
            q.unshift(LW(H, O, A));
          var R = cq(H, Z);
          if (R != null)
            q.push(LW(H, R, A));
        }
        H = H.return;
      }
      return q;
    }
    function LY(X) {
      if (X === null)
        return null;
      do
        X = X.return;
      while (X && X.tag !== k);
      if (X)
        return X;
      return null;
    }
    function uV(X, Z) {
      var $ = X, q = Z, H = 0;
      for (var G = $;G; G = LY(G))
        H++;
      var E = 0;
      for (var P = q;P; P = LY(P))
        E++;
      while (H - E > 0)
        $ = LY($), H--;
      while (E - H > 0)
        q = LY(q), E--;
      var A = H;
      while (A--) {
        if ($ === q || q !== null && $ === q.alternate)
          return $;
        $ = LY($), q = LY(q);
      }
      return null;
    }
    function oA(X, Z, $, q, H) {
      var G = Z._reactName, E = [], P = $;
      while (P !== null) {
        if (P === q)
          break;
        var A = P, O = A.alternate, R = A.stateNode, C = A.tag;
        if (O !== null && O === q)
          break;
        if (C === k && R !== null) {
          var B = R;
          if (H) {
            var x = cq(P, G);
            if (x != null)
              E.unshift(LW(P, x, B));
          } else if (!H) {
            var v = cq(P, G);
            if (v != null)
              E.push(LW(P, v, B));
          }
        }
        P = P.return;
      }
      if (E.length !== 0)
        X.push({
          event: Z,
          listeners: E
        });
    }
    function cV(X, Z, $, q, H) {
      var G = q && H ? uV(q, H) : null;
      if (q !== null)
        oA(X, Z, q, G, !1);
      if (H !== null && $ !== null)
        oA(X, $, H, G, !0);
    }
    function pV(X, Z) {
      return X + "__" + (Z ? "capture" : "bubble");
    }
    var SQ = !1, OW = "dangerouslySetInnerHTML", o3 = "suppressContentEditableWarning", p4 = "suppressHydrationWarning", aA = "autoFocus", J$ = "children", $$ = "style", a3 = "__html", wG, r3, wW, rA, i3, iA, tA;
    wG = {
      dialog: !0,
      webview: !0
    }, r3 = function(X, Z) {
      jj(X, Z), Bj(X, Z), _j(X, Z, {
        registrationNameDependencies: N6,
        possibleRegistrationNames: W6
      });
    }, iA = d1 && !document.documentMode, wW = function(X, Z, $) {
      if (SQ)
        return;
      var q = t3($), H = t3(Z);
      if (H === q)
        return;
      SQ = !0, K("Prop `%s` did not match. Server: %s Client: %s", X, JSON.stringify(H), JSON.stringify(q));
    }, rA = function(X) {
      if (SQ)
        return;
      SQ = !0;
      var Z = [];
      X.forEach(function($) {
        Z.push($);
      }), K("Extra attributes from the server: %s", Z);
    }, i3 = function(X, Z) {
      if (Z === !1)
        K("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", X, X, X);
      else
        K("Expected `%s` listener to be a function, instead got a value of `%s` type.", X, typeof Z);
    }, tA = function(X, Z) {
      var $ = X.namespaceURI === aZ ? X.ownerDocument.createElement(X.tagName) : X.ownerDocument.createElementNS(X.namespaceURI, X.tagName);
      return $.innerHTML = Z, $.innerHTML;
    };
    var dV = /\r\n?/g, lV = /\u0000|\uFFFD/g;
    function t3(X) {
      Y8(X);
      var Z = typeof X === "string" ? X : "" + X;
      return Z.replace(dV, `
`).replace(lV, "");
    }
    function e3(X, Z, $, q) {
      var H = t3(Z), G = t3(X);
      if (G === H)
        return;
      if (q) {
        if (!SQ)
          SQ = !0, K('Text content did not match. Server: "%s" Client: "%s"', G, H);
      }
      if ($ && k0)
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function eA(X) {
      return X.nodeType === iZ ? X : X.ownerDocument;
    }
    function nV() {}
    function Q9(X) {
      X.onclick = nV;
    }
    function sV(X, Z, $, q, H) {
      for (var G in q) {
        if (!q.hasOwnProperty(G))
          continue;
        var E = q[G];
        if (G === $$) {
          if (E)
            Object.freeze(E);
          AP(Z, E);
        } else if (G === OW) {
          var P = E ? E[a3] : void 0;
          if (P != null)
            zP(Z, P);
        } else if (G === J$) {
          if (typeof E === "string") {
            var A = X !== "textarea" || E !== "";
            if (A)
              M3(Z, E);
          } else if (typeof E === "number")
            M3(Z, "" + E);
        } else if (G === o3 || G === p4)
          ;
        else if (G === aA)
          ;
        else if (N6.hasOwnProperty(G)) {
          if (E != null) {
            if (typeof E !== "function")
              i3(G, E);
            if (G === "onScroll")
              X6("scroll", Z);
          }
        } else if (E != null)
          jQ(Z, G, E, H);
      }
    }
    function oV(X, Z, $, q) {
      for (var H = 0;H < Z.length; H += 2) {
        var G = Z[H], E = Z[H + 1];
        if (G === $$)
          AP(X, E);
        else if (G === OW)
          zP(X, E);
        else if (G === J$)
          M3(X, E);
        else
          jQ(X, G, E, q);
      }
    }
    function aV(X, Z, $, q) {
      var H, G = eA($), E, P = q;
      if (P === aZ)
        P = Y7(X);
      if (P === aZ) {
        if (H = lJ(X, Z), !H && X !== X.toLowerCase())
          K("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", X);
        if (X === "script") {
          var A = G.createElement("div");
          A.innerHTML = "<script></script>";
          var O = A.firstChild;
          E = A.removeChild(O);
        } else if (typeof Z.is === "string")
          E = G.createElement(X, {
            is: Z.is
          });
        else if (E = G.createElement(X), X === "select") {
          var R = E;
          if (Z.multiple)
            R.multiple = !0;
          else if (Z.size)
            R.size = Z.size;
        }
      } else
        E = G.createElementNS(P, X);
      if (P === aZ) {
        if (!H && Object.prototype.toString.call(E) === "[object HTMLUnknownElement]" && !J0.call(wG, X))
          wG[X] = !0, K("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", X);
      }
      return E;
    }
    function rV(X, Z) {
      return eA(Z).createTextNode(X);
    }
    function iV(X, Z, $, q) {
      var H = lJ(Z, $);
      r3(Z, $);
      var G;
      switch (Z) {
        case "dialog":
          X6("cancel", X), X6("close", X), G = $;
          break;
        case "iframe":
        case "object":
        case "embed":
          X6("load", X), G = $;
          break;
        case "video":
        case "audio":
          for (var E = 0;E < AW.length; E++)
            X6(AW[E], X);
          G = $;
          break;
        case "source":
          X6("error", X), G = $;
          break;
        case "img":
        case "image":
        case "link":
          X6("error", X), X6("load", X), G = $;
          break;
        case "details":
          X6("toggle", X), G = $;
          break;
        case "input":
          j(X, $), G = U(X, $), X6("invalid", X);
          break;
        case "option":
          o1(X, $), G = $;
          break;
        case "select":
          fq(X, $), G = yq(X, $), X6("invalid", X);
          break;
        case "textarea":
          KP(X, $), G = J7(X, $), X6("invalid", X);
          break;
        default:
          G = $;
      }
      switch (G7(Z, G), sV(Z, X, q, G, H), Z) {
        case "input":
          sZ(X), e(X, $, !1);
          break;
        case "textarea":
          sZ(X), GP(X);
          break;
        case "option":
          Q6(X, $);
          break;
        case "select":
          Z7(X, $);
          break;
        default:
          if (typeof G.onClick === "function")
            Q9(X);
          break;
      }
    }
    function tV(X, Z, $, q, H) {
      r3(Z, q);
      var G = null, E, P;
      switch (Z) {
        case "input":
          E = U(X, $), P = U(X, q), G = [];
          break;
        case "select":
          E = yq(X, $), P = yq(X, q), G = [];
          break;
        case "textarea":
          E = J7(X, $), P = J7(X, q), G = [];
          break;
        default:
          if (E = $, P = q, typeof E.onClick !== "function" && typeof P.onClick === "function")
            Q9(X);
          break;
      }
      G7(Z, P);
      var A, O, R = null;
      for (A in E) {
        if (P.hasOwnProperty(A) || !E.hasOwnProperty(A) || E[A] == null)
          continue;
        if (A === $$) {
          var C = E[A];
          for (O in C)
            if (C.hasOwnProperty(O)) {
              if (!R)
                R = {};
              R[O] = "";
            }
        } else if (A === OW || A === J$)
          ;
        else if (A === o3 || A === p4)
          ;
        else if (A === aA)
          ;
        else if (N6.hasOwnProperty(A)) {
          if (!G)
            G = [];
        } else
          (G = G || []).push(A, null);
      }
      for (A in P) {
        var B = P[A], x = E != null ? E[A] : void 0;
        if (!P.hasOwnProperty(A) || B === x || B == null && x == null)
          continue;
        if (A === $$) {
          if (B)
            Object.freeze(B);
          if (x) {
            for (O in x)
              if (x.hasOwnProperty(O) && (!B || !B.hasOwnProperty(O))) {
                if (!R)
                  R = {};
                R[O] = "";
              }
            for (O in B)
              if (B.hasOwnProperty(O) && x[O] !== B[O]) {
                if (!R)
                  R = {};
                R[O] = B[O];
              }
          } else {
            if (!R) {
              if (!G)
                G = [];
              G.push(A, R);
            }
            R = B;
          }
        } else if (A === OW) {
          var v = B ? B[a3] : void 0, f = x ? x[a3] : void 0;
          if (v != null) {
            if (f !== v)
              (G = G || []).push(A, v);
          }
        } else if (A === J$) {
          if (typeof B === "string" || typeof B === "number")
            (G = G || []).push(A, "" + B);
        } else if (A === o3 || A === p4)
          ;
        else if (N6.hasOwnProperty(A)) {
          if (B != null) {
            if (typeof B !== "function")
              i3(A, B);
            if (A === "onScroll")
              X6("scroll", X);
          }
          if (!G && x !== B)
            G = [];
        } else
          (G = G || []).push(A, B);
      }
      if (R)
        Uj(R, P[$$]), (G = G || []).push($$, R);
      return G;
    }
    function eV(X, Z, $, q, H) {
      if ($ === "input" && H.type === "radio" && H.name != null)
        g(X, H);
      var G = lJ($, q), E = lJ($, H);
      switch (oV(X, Z, G, E), $) {
        case "input":
          m(X, H);
          break;
        case "textarea":
          HP(X, H);
          break;
        case "select":
          ok(X, H);
          break;
      }
    }
    function QS(X) {
      {
        var Z = X.toLowerCase();
        if (!D3.hasOwnProperty(Z))
          return null;
        return D3[Z] || null;
      }
    }
    function XS(X, Z, $, q, H, G, E) {
      var P, A;
      switch (P = lJ(Z, $), r3(Z, $), Z) {
        case "dialog":
          X6("cancel", X), X6("close", X);
          break;
        case "iframe":
        case "object":
        case "embed":
          X6("load", X);
          break;
        case "video":
        case "audio":
          for (var O = 0;O < AW.length; O++)
            X6(AW[O], X);
          break;
        case "source":
          X6("error", X);
          break;
        case "img":
        case "image":
        case "link":
          X6("error", X), X6("load", X);
          break;
        case "details":
          X6("toggle", X);
          break;
        case "input":
          j(X, $), X6("invalid", X);
          break;
        case "option":
          o1(X, $);
          break;
        case "select":
          fq(X, $), X6("invalid", X);
          break;
        case "textarea":
          KP(X, $), X6("invalid", X);
          break;
      }
      G7(Z, $);
      {
        A = /* @__PURE__ */ new Set;
        var R = X.attributes;
        for (var C = 0;C < R.length; C++) {
          var B = R[C].name.toLowerCase();
          switch (B) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              A.add(R[C].name);
          }
        }
      }
      var x = null;
      for (var v in $) {
        if (!$.hasOwnProperty(v))
          continue;
        var f = $[v];
        if (v === J$) {
          if (typeof f === "string") {
            if (X.textContent !== f) {
              if ($[p4] !== !0)
                e3(X.textContent, f, G, E);
              x = [J$, f];
            }
          } else if (typeof f === "number") {
            if (X.textContent !== "" + f) {
              if ($[p4] !== !0)
                e3(X.textContent, f, G, E);
              x = [J$, "" + f];
            }
          }
        } else if (N6.hasOwnProperty(v)) {
          if (f != null) {
            if (typeof f !== "function")
              i3(v, f);
            if (v === "onScroll")
              X6("scroll", X);
          }
        } else if (E && !0 && typeof P === "boolean") {
          var Y0 = void 0, L0 = P && M6 ? null : l8(v);
          if ($[p4] === !0)
            ;
          else if (v === o3 || v === p4 || v === "value" || v === "checked" || v === "selected")
            ;
          else if (v === OW) {
            var F0 = X.innerHTML, K1 = f ? f[a3] : void 0;
            if (K1 != null) {
              var H1 = tA(X, K1);
              if (H1 !== F0)
                wW(v, F0, H1);
            }
          } else if (v === $$) {
            if (A.delete(v), iA) {
              var _ = Pj(f);
              if (Y0 = X.getAttribute("style"), _ !== Y0)
                wW(v, Y0, _);
            }
          } else if (P && !M6) {
            if (A.delete(v.toLowerCase()), Y0 = v6(X, v, f), f !== Y0)
              wW(v, Y0, f);
          } else if (!T1(v, L0, P) && !c1(v, f, L0, P)) {
            var b = !1;
            if (L0 !== null)
              A.delete(L0.attributeName), Y0 = H8(X, v, f, L0);
            else {
              var T = q;
              if (T === aZ)
                T = Y7(Z);
              if (T === aZ)
                A.delete(v.toLowerCase());
              else {
                var a = QS(v);
                if (a !== null && a !== v)
                  b = !0, A.delete(a);
                A.delete(v);
              }
              Y0 = v6(X, v, f);
            }
            var G0 = M6;
            if (!G0 && f !== Y0 && !b)
              wW(v, Y0, f);
          }
        }
      }
      if (E) {
        if (A.size > 0 && $[p4] !== !0)
          rA(A);
      }
      switch (Z) {
        case "input":
          sZ(X), e(X, $, !0);
          break;
        case "textarea":
          sZ(X), GP(X);
          break;
        case "select":
        case "option":
          break;
        default:
          if (typeof $.onClick === "function")
            Q9(X);
          break;
      }
      return x;
    }
    function ZS(X, Z, $) {
      var q = X.nodeValue !== Z;
      return q;
    }
    function MG(X, Z) {
      {
        if (SQ)
          return;
        SQ = !0, K("Did not expect server HTML to contain a <%s> in <%s>.", Z.nodeName.toLowerCase(), X.nodeName.toLowerCase());
      }
    }
    function DG(X, Z) {
      {
        if (SQ)
          return;
        SQ = !0, K('Did not expect server HTML to contain the text node "%s" in <%s>.', Z.nodeValue, X.nodeName.toLowerCase());
      }
    }
    function RG(X, Z, $) {
      {
        if (SQ)
          return;
        SQ = !0, K("Expected server HTML to contain a matching <%s> in <%s>.", Z, X.nodeName.toLowerCase());
      }
    }
    function kG(X, Z) {
      {
        if (Z === "")
          return;
        if (SQ)
          return;
        SQ = !0, K('Expected server HTML to contain a matching text node for "%s" in <%s>.', Z, X.nodeName.toLowerCase());
      }
    }
    function JS(X, Z, $) {
      switch (Z) {
        case "input":
          V0(X, $);
          return;
        case "textarea":
          rk(X, $);
          return;
        case "select":
          ak(X, $);
          return;
      }
    }
    var MW = function() {}, DW = function() {};
    {
      var $S = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], QU = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        "foreignObject",
        "desc",
        "title"
      ], YS = QU.concat(["button"]), qS = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], XU = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      DW = function(X, Z) {
        var $ = $1({}, X || XU), q = {
          tag: Z
        };
        if (QU.indexOf(Z) !== -1)
          $.aTagInScope = null, $.buttonTagInScope = null, $.nobrTagInScope = null;
        if (YS.indexOf(Z) !== -1)
          $.pTagInButtonScope = null;
        if ($S.indexOf(Z) !== -1 && Z !== "address" && Z !== "div" && Z !== "p")
          $.listItemTagAutoclosing = null, $.dlItemTagAutoclosing = null;
        if ($.current = q, Z === "form")
          $.formTag = q;
        if (Z === "a")
          $.aTagInScope = q;
        if (Z === "button")
          $.buttonTagInScope = q;
        if (Z === "nobr")
          $.nobrTagInScope = q;
        if (Z === "p")
          $.pTagInButtonScope = q;
        if (Z === "li")
          $.listItemTagAutoclosing = q;
        if (Z === "dd" || Z === "dt")
          $.dlItemTagAutoclosing = q;
        return $;
      };
      var WS = function(X, Z) {
        switch (Z) {
          case "select":
            return X === "option" || X === "optgroup" || X === "#text";
          case "optgroup":
            return X === "option" || X === "#text";
          case "option":
            return X === "#text";
          case "tr":
            return X === "th" || X === "td" || X === "style" || X === "script" || X === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return X === "tr" || X === "style" || X === "script" || X === "template";
          case "colgroup":
            return X === "col" || X === "template";
          case "table":
            return X === "caption" || X === "colgroup" || X === "tbody" || X === "tfoot" || X === "thead" || X === "style" || X === "script" || X === "template";
          case "head":
            return X === "base" || X === "basefont" || X === "bgsound" || X === "link" || X === "meta" || X === "title" || X === "noscript" || X === "noframes" || X === "style" || X === "script" || X === "template";
          case "html":
            return X === "head" || X === "body" || X === "frameset";
          case "frameset":
            return X === "frame";
          case "#document":
            return X === "html";
        }
        switch (X) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return Z !== "h1" && Z !== "h2" && Z !== "h3" && Z !== "h4" && Z !== "h5" && Z !== "h6";
          case "rp":
          case "rt":
            return qS.indexOf(Z) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return Z == null;
        }
        return !0;
      }, KS = function(X, Z) {
        switch (X) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return Z.pTagInButtonScope;
          case "form":
            return Z.formTag || Z.pTagInButtonScope;
          case "li":
            return Z.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return Z.dlItemTagAutoclosing;
          case "button":
            return Z.buttonTagInScope;
          case "a":
            return Z.aTagInScope;
          case "nobr":
            return Z.nobrTagInScope;
        }
        return null;
      }, ZU = {};
      MW = function(X, Z, $) {
        $ = $ || XU;
        var q = $.current, H = q && q.tag;
        if (Z != null) {
          if (X != null)
            K("validateDOMNesting: when childText is passed, childTag should be null");
          X = "#text";
        }
        var G = WS(X, H) ? null : q, E = G ? null : KS(X, $), P = G || E;
        if (!P)
          return;
        var A = P.tag, O = !!G + "|" + X + "|" + A;
        if (ZU[O])
          return;
        ZU[O] = !0;
        var R = X, C = "";
        if (X === "#text")
          if (/\S/.test(Z))
            R = "Text nodes";
          else
            R = "Whitespace text nodes", C = " Make sure you don't have any extra whitespace between tags on each line of your source code.";
        else
          R = "<" + X + ">";
        if (G) {
          var B = "";
          if (A === "table" && X === "tr")
            B += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.";
          K("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, A, C, B);
        } else
          K("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, A);
      };
    }
    var X9 = "suppressHydrationWarning", Z9 = "$", J9 = "/$", RW = "$?", kW = "$!", HS = "style", jG = null, BG = null;
    function GS(X) {
      var Z, $, q = X.nodeType;
      switch (q) {
        case iZ:
        case W7: {
          Z = q === iZ ? "#document" : "#fragment";
          var H = X.documentElement;
          $ = H ? H.namespaceURI : q7(null, "");
          break;
        }
        default: {
          var G = q === h6 ? X.parentNode : X, E = G.namespaceURI || null;
          Z = G.tagName, $ = q7(E, Z);
          break;
        }
      }
      {
        var P = Z.toLowerCase(), A = DW(null, P);
        return {
          namespace: $,
          ancestorInfo: A
        };
      }
    }
    function zS(X, Z, $) {
      {
        var q = X, H = q7(q.namespace, Z), G = DW(q.ancestorInfo, Z);
        return {
          namespace: H,
          ancestorInfo: G
        };
      }
    }
    function CG(X) {
      return X;
    }
    function NS(X) {
      jG = HC(), BG = BV();
      var Z = null;
      return GA(!1), Z;
    }
    function ES(X) {
      CV(BG), GA(jG), jG = null, BG = null;
    }
    function FS(X, Z, $, q, H) {
      var G;
      {
        var E = q;
        if (MW(X, null, E.ancestorInfo), typeof Z.children === "string" || typeof Z.children === "number") {
          var P = "" + Z.children, A = DW(E.ancestorInfo, X);
          MW(null, P, A);
        }
        G = E.namespace;
      }
      var O = aV(X, Z, $, G);
      return CW(H, O), vG(O, Z), O;
    }
    function PS(X, Z) {
      X.appendChild(Z);
    }
    function AS(X, Z, $, q, H) {
      switch (iV(X, Z, $, q), Z) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!$.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function US(X, Z, $, q, H, G) {
      {
        var E = G;
        if (typeof q.children !== typeof $.children && (typeof q.children === "string" || typeof q.children === "number")) {
          var P = "" + q.children, A = DW(E.ancestorInfo, Z);
          MW(null, P, A);
        }
      }
      return tV(X, Z, $, q);
    }
    function VG(X, Z) {
      return X === "textarea" || X === "noscript" || typeof Z.children === "string" || typeof Z.children === "number" || typeof Z.dangerouslySetInnerHTML === "object" && Z.dangerouslySetInnerHTML !== null && Z.dangerouslySetInnerHTML.__html != null;
    }
    function LS(X, Z, $, q) {
      {
        var H = $;
        MW(null, X, H.ancestorInfo);
      }
      var G = rV(X, Z);
      return CW(q, G), G;
    }
    function OS() {
      var X = window.event;
      if (X === void 0)
        return $4;
      return zA(X.type);
    }
    var SG = typeof setTimeout === "function" ? setTimeout : void 0, wS = typeof clearTimeout === "function" ? clearTimeout : void 0, IG = -1, JU = typeof Promise === "function" ? Promise : void 0, MS = typeof queueMicrotask === "function" ? queueMicrotask : typeof JU !== "undefined" ? function(X) {
      return JU.resolve(null).then(X).catch(DS);
    } : SG;
    function DS(X) {
      setTimeout(function() {
        throw X;
      });
    }
    function RS(X, Z, $, q) {
      switch (Z) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          if ($.autoFocus)
            X.focus();
          return;
        case "img": {
          if ($.src)
            X.src = $.src;
          return;
        }
      }
    }
    function kS(X, Z, $, q, H, G) {
      eV(X, Z, $, q, H), vG(X, H);
    }
    function $U(X) {
      M3(X, "");
    }
    function jS(X, Z, $) {
      X.nodeValue = $;
    }
    function BS(X, Z) {
      X.appendChild(Z);
    }
    function CS(X, Z) {
      var $;
      if (X.nodeType === h6)
        $ = X.parentNode, $.insertBefore(Z, X);
      else
        $ = X, $.appendChild(Z);
      var q = X._reactRootContainer;
      if ((q === null || q === void 0) && $.onclick === null)
        Q9($);
    }
    function VS(X, Z, $) {
      X.insertBefore(Z, $);
    }
    function SS(X, Z, $) {
      if (X.nodeType === h6)
        X.parentNode.insertBefore(Z, $);
      else
        X.insertBefore(Z, $);
    }
    function IS(X, Z) {
      X.removeChild(Z);
    }
    function _S(X, Z) {
      if (X.nodeType === h6)
        X.parentNode.removeChild(Z);
      else
        X.removeChild(Z);
    }
    function _G(X, Z) {
      var $ = Z, q = 0;
      do {
        var H = $.nextSibling;
        if (X.removeChild($), H && H.nodeType === h6) {
          var G = H.data;
          if (G === J9)
            if (q === 0) {
              X.removeChild(H), qW(Z);
              return;
            } else
              q--;
          else if (G === Z9 || G === RW || G === kW)
            q++;
        }
        $ = H;
      } while ($);
      qW(Z);
    }
    function TS(X, Z) {
      if (X.nodeType === h6)
        _G(X.parentNode, Z);
      else if (X.nodeType === VQ)
        _G(X, Z);
      qW(X);
    }
    function gS(X) {
      X = X;
      var Z = X.style;
      if (typeof Z.setProperty === "function")
        Z.setProperty("display", "none", "important");
      else
        Z.display = "none";
    }
    function xS(X) {
      X.nodeValue = "";
    }
    function vS(X, Z) {
      X = X;
      var $ = Z[HS], q = $ !== void 0 && $ !== null && $.hasOwnProperty("display") ? $.display : null;
      X.style.display = K7("display", q);
    }
    function hS(X, Z) {
      X.nodeValue = Z;
    }
    function yS(X) {
      if (X.nodeType === VQ)
        X.textContent = "";
      else if (X.nodeType === iZ) {
        if (X.documentElement)
          X.removeChild(X.documentElement);
      }
    }
    function fS(X, Z, $) {
      if (X.nodeType !== VQ || Z.toLowerCase() !== X.nodeName.toLowerCase())
        return null;
      return X;
    }
    function mS(X, Z) {
      if (Z === "" || X.nodeType !== rZ)
        return null;
      return X;
    }
    function bS(X) {
      if (X.nodeType !== h6)
        return null;
      return X;
    }
    function YU(X) {
      return X.data === RW;
    }
    function TG(X) {
      return X.data === kW;
    }
    function uS(X) {
      var Z = X.nextSibling && X.nextSibling.dataset, $, q, H;
      if (Z)
        $ = Z.dgst, q = Z.msg, H = Z.stck;
      return {
        message: q,
        digest: $,
        stack: H
      };
    }
    function cS(X, Z) {
      X._reactRetry = Z;
    }
    function $9(X) {
      for (;X != null; X = X.nextSibling) {
        var Z = X.nodeType;
        if (Z === VQ || Z === rZ)
          break;
        if (Z === h6) {
          var $ = X.data;
          if ($ === Z9 || $ === kW || $ === RW)
            break;
          if ($ === J9)
            return null;
        }
      }
      return X;
    }
    function jW(X) {
      return $9(X.nextSibling);
    }
    function pS(X) {
      return $9(X.firstChild);
    }
    function dS(X) {
      return $9(X.firstChild);
    }
    function lS(X) {
      return $9(X.nextSibling);
    }
    function nS(X, Z, $, q, H, G, E) {
      CW(G, X), vG(X, $);
      var P;
      {
        var A = H;
        P = A.namespace;
      }
      var O = (G.mode & N1) !== D0;
      return XS(X, Z, $, P, q, O, E);
    }
    function sS(X, Z, $, q) {
      CW($, X);
      var H = ($.mode & N1) !== D0;
      return ZS(X, Z);
    }
    function oS(X, Z) {
      CW(Z, X);
    }
    function aS(X) {
      var Z = X.nextSibling, $ = 0;
      while (Z) {
        if (Z.nodeType === h6) {
          var q = Z.data;
          if (q === J9)
            if ($ === 0)
              return jW(Z);
            else
              $--;
          else if (q === Z9 || q === kW || q === RW)
            $++;
        }
        Z = Z.nextSibling;
      }
      return null;
    }
    function qU(X) {
      var Z = X.previousSibling, $ = 0;
      while (Z) {
        if (Z.nodeType === h6) {
          var q = Z.data;
          if (q === Z9 || q === kW || q === RW)
            if ($ === 0)
              return Z;
            else
              $--;
          else if (q === J9)
            $++;
        }
        Z = Z.previousSibling;
      }
      return null;
    }
    function rS(X) {
      qW(X);
    }
    function iS(X) {
      qW(X);
    }
    function tS(X) {
      return X !== "head" && X !== "body";
    }
    function eS(X, Z, $, q) {
      var H = !0;
      e3(Z.nodeValue, $, q, H);
    }
    function QI(X, Z, $, q, H, G) {
      if (Z[X9] !== !0) {
        var E = !0;
        e3(q.nodeValue, H, G, E);
      }
    }
    function XI(X, Z) {
      if (Z.nodeType === VQ)
        MG(X, Z);
      else if (Z.nodeType === h6)
        ;
      else
        DG(X, Z);
    }
    function ZI(X, Z) {
      {
        var $ = X.parentNode;
        if ($ !== null)
          if (Z.nodeType === VQ)
            MG($, Z);
          else if (Z.nodeType === h6)
            ;
          else
            DG($, Z);
      }
    }
    function JI(X, Z, $, q, H) {
      if (H || Z[X9] !== !0)
        if (q.nodeType === VQ)
          MG($, q);
        else if (q.nodeType === h6)
          ;
        else
          DG($, q);
    }
    function $I(X, Z, $) {
      RG(X, Z);
    }
    function YI(X, Z) {
      kG(X, Z);
    }
    function qI(X, Z, $) {
      {
        var q = X.parentNode;
        if (q !== null)
          RG(q, Z);
      }
    }
    function WI(X, Z) {
      {
        var $ = X.parentNode;
        if ($ !== null)
          kG($, Z);
      }
    }
    function KI(X, Z, $, q, H, G) {
      if (G || Z[X9] !== !0)
        RG($, q);
    }
    function HI(X, Z, $, q, H) {
      if (H || Z[X9] !== !0)
        kG($, q);
    }
    function GI(X) {
      K("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", X.nodeName.toLowerCase());
    }
    function zI(X) {
      UW(X);
    }
    var OY = Math.random().toString(36).slice(2), wY = "__reactFiber$" + OY, gG = "__reactProps$" + OY, BW = "__reactContainer$" + OY, xG = "__reactEvents$" + OY, NI = "__reactListeners$" + OY, EI = "__reactHandles$" + OY;
    function FI(X) {
      delete X[wY], delete X[gG], delete X[xG], delete X[NI], delete X[EI];
    }
    function CW(X, Z) {
      Z[wY] = X;
    }
    function Y9(X, Z) {
      Z[BW] = X;
    }
    function WU(X) {
      X[BW] = null;
    }
    function VW(X) {
      return !!X[BW];
    }
    function Y$(X) {
      var Z = X[wY];
      if (Z)
        return Z;
      var $ = X.parentNode;
      while ($) {
        if (Z = $[BW] || $[wY], Z) {
          var q = Z.alternate;
          if (Z.child !== null || q !== null && q.child !== null) {
            var H = qU(X);
            while (H !== null) {
              var G = H[wY];
              if (G)
                return G;
              H = qU(H);
            }
          }
          return Z;
        }
        X = $, $ = X.parentNode;
      }
      return null;
    }
    function d4(X) {
      var Z = X[wY] || X[BW];
      if (Z)
        if (Z.tag === k || Z.tag === I || Z.tag === n || Z.tag === w)
          return Z;
        else
          return null;
      return null;
    }
    function MY(X) {
      if (X.tag === k || X.tag === I)
        return X.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function q9(X) {
      return X[gG] || null;
    }
    function vG(X, Z) {
      X[gG] = Z;
    }
    function PI(X) {
      var Z = X[xG];
      if (Z === void 0)
        Z = X[xG] = /* @__PURE__ */ new Set;
      return Z;
    }
    var KU = {}, HU = Q.ReactDebugCurrentFrame;
    function W9(X) {
      if (X) {
        var Z = X._owner, $ = q0(X.type, X._source, Z ? Z.type : null);
        HU.setExtraStackFrame($);
      } else
        HU.setExtraStackFrame(null);
    }
    function dX(X, Z, $, q, H) {
      {
        var G = Function.call.bind(J0);
        for (var E in X)
          if (G(X, E)) {
            var P = void 0;
            try {
              if (typeof X[E] !== "function") {
                var A = Error((q || "React class") + ": " + $ + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof X[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              P = X[E](Z, E, q, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              P = O;
            }
            if (P && !(P instanceof Error))
              W9(H), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", $, E, typeof P), W9(null);
            if (P instanceof Error && !(P.message in KU))
              KU[P.message] = !0, W9(H), K("Failed %s type: %s", $, P.message), W9(null);
          }
      }
    }
    var hG = [], K9;
    K9 = [];
    var Y4 = -1;
    function l4(X) {
      return {
        current: X
      };
    }
    function a8(X, Z) {
      if (Y4 < 0) {
        K("Unexpected pop.");
        return;
      }
      if (Z !== K9[Y4])
        K("Unexpected Fiber popped.");
      X.current = hG[Y4], hG[Y4] = null, K9[Y4] = null, Y4--;
    }
    function r8(X, Z, $) {
      Y4++, hG[Y4] = X.current, K9[Y4] = $, X.current = Z;
    }
    var GU = {}, aQ = {};
    Object.freeze(aQ);
    var q4 = l4(aQ), jZ = l4(!1), yG = aQ;
    function DY(X, Z, $) {
      {
        if ($ && BZ(Z))
          return yG;
        return q4.current;
      }
    }
    function zU(X, Z, $) {
      {
        var q = X.stateNode;
        q.__reactInternalMemoizedUnmaskedChildContext = Z, q.__reactInternalMemoizedMaskedChildContext = $;
      }
    }
    function RY(X, Z) {
      {
        var $ = X.type, q = $.contextTypes;
        if (!q)
          return aQ;
        var H = X.stateNode;
        if (H && H.__reactInternalMemoizedUnmaskedChildContext === Z)
          return H.__reactInternalMemoizedMaskedChildContext;
        var G = {};
        for (var E in q)
          G[E] = Z[E];
        {
          var P = j0(X) || "Unknown";
          dX(q, G, "context", P);
        }
        if (H)
          zU(X, Z, G);
        return G;
      }
    }
    function H9() {
      return jZ.current;
    }
    function BZ(X) {
      {
        var Z = X.childContextTypes;
        return Z !== null && Z !== void 0;
      }
    }
    function G9(X) {
      a8(jZ, X), a8(q4, X);
    }
    function fG(X) {
      a8(jZ, X), a8(q4, X);
    }
    function NU(X, Z, $) {
      {
        if (q4.current !== aQ)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        r8(q4, Z, X), r8(jZ, $, X);
      }
    }
    function EU(X, Z, $) {
      {
        var q = X.stateNode, H = Z.childContextTypes;
        if (typeof q.getChildContext !== "function") {
          {
            var G = j0(X) || "Unknown";
            if (!GU[G])
              GU[G] = !0, K("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", G, G);
          }
          return $;
        }
        var E = q.getChildContext();
        for (var P in E)
          if (!(P in H))
            throw new Error((j0(X) || "Unknown") + '.getChildContext(): key "' + P + '" is not defined in childContextTypes.');
        {
          var A = j0(X) || "Unknown";
          dX(H, E, "child context", A);
        }
        return $1({}, $, E);
      }
    }
    function z9(X) {
      {
        var Z = X.stateNode, $ = Z && Z.__reactInternalMemoizedMergedChildContext || aQ;
        return yG = q4.current, r8(q4, $, X), r8(jZ, jZ.current, X), !0;
      }
    }
    function FU(X, Z, $) {
      {
        var q = X.stateNode;
        if (!q)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if ($) {
          var H = EU(X, Z, yG);
          q.__reactInternalMemoizedMergedChildContext = H, a8(jZ, X), a8(q4, X), r8(q4, H, X), r8(jZ, $, X);
        } else
          a8(jZ, X), r8(jZ, $, X);
      }
    }
    function AI(X) {
      {
        if (!tj(X) || X.tag !== F)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var Z = X;
        do {
          switch (Z.tag) {
            case w:
              return Z.stateNode.context;
            case F: {
              var $ = Z.type;
              if (BZ($))
                return Z.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          Z = Z.return;
        } while (Z !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var n4 = 0, N9 = 1, W4 = null, mG = !1, bG = !1;
    function PU(X) {
      if (W4 === null)
        W4 = [X];
      else
        W4.push(X);
    }
    function UI(X) {
      mG = !0, PU(X);
    }
    function AU() {
      if (mG)
        s4();
    }
    function s4() {
      if (!bG && W4 !== null) {
        bG = !0;
        var X = 0, Z = pX();
        try {
          var $ = !0, q = W4;
          P8(nQ);
          for (;X < q.length; X++) {
            var H = q[X];
            do
              H = H($);
            while (H !== null);
          }
          W4 = null, mG = !1;
        } catch (G) {
          if (W4 !== null)
            W4 = W4.slice(X + 1);
          throw mP(C3, s4), G;
        } finally {
          P8(Z), bG = !1;
        }
      }
      return null;
    }
    var kY = [], jY = 0, E9 = null, F9 = 0, HX = [], GX = 0, q$ = null, K4 = 1, H4 = "";
    function LI(X) {
      return K$(), (X.flags & _P) !== B0;
    }
    function OI(X) {
      return K$(), F9;
    }
    function wI() {
      var X = H4, Z = K4, $ = Z & ~MI(Z);
      return $.toString(32) + X;
    }
    function W$(X, Z) {
      K$(), kY[jY++] = F9, kY[jY++] = E9, E9 = X, F9 = Z;
    }
    function UU(X, Z, $) {
      K$(), HX[GX++] = K4, HX[GX++] = H4, HX[GX++] = q$, q$ = X;
      var q = K4, H = H4, G = P9(q) - 1, E = q & ~(1 << G), P = $ + 1, A = P9(Z) + G;
      if (A > 30) {
        var O = G - G % 5, R = (1 << O) - 1, C = (E & R).toString(32), B = E >> O, x = G - O, v = P9(Z) + x, f = P << x, Y0 = f | B, L0 = C + H;
        K4 = 1 << v | Y0, H4 = L0;
      } else {
        var F0 = P << G, K1 = F0 | E, H1 = H;
        K4 = 1 << A | K1, H4 = H1;
      }
    }
    function uG(X) {
      K$();
      var Z = X.return;
      if (Z !== null) {
        var $ = 1, q = 0;
        W$(X, $), UU(X, $, q);
      }
    }
    function P9(X) {
      return 32 - lP(X);
    }
    function MI(X) {
      return 1 << P9(X) - 1;
    }
    function cG(X) {
      while (X === E9)
        E9 = kY[--jY], kY[jY] = null, F9 = kY[--jY], kY[jY] = null;
      while (X === q$)
        q$ = HX[--GX], HX[GX] = null, H4 = HX[--GX], HX[GX] = null, K4 = HX[--GX], HX[GX] = null;
    }
    function DI() {
      if (K$(), q$ !== null)
        return {
          id: K4,
          overflow: H4
        };
      else
        return null;
    }
    function RI(X, Z) {
      K$(), HX[GX++] = K4, HX[GX++] = H4, HX[GX++] = q$, K4 = Z.id, H4 = Z.overflow, q$ = X;
    }
    function K$() {
      if (!S8())
        K("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var V8 = null, zX = null, lX = !1, H$ = !1, o4 = null;
    function kI() {
      if (lX)
        K("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function LU() {
      H$ = !0;
    }
    function jI() {
      return H$;
    }
    function BI(X) {
      var Z = X.stateNode.containerInfo;
      return zX = dS(Z), V8 = X, lX = !0, o4 = null, H$ = !1, !0;
    }
    function CI(X, Z, $) {
      if (zX = lS(Z), V8 = X, lX = !0, o4 = null, H$ = !1, $ !== null)
        RI(X, $);
      return !0;
    }
    function OU(X, Z) {
      switch (X.tag) {
        case w: {
          XI(X.stateNode.containerInfo, Z);
          break;
        }
        case k: {
          var $ = (X.mode & N1) !== D0;
          JI(X.type, X.memoizedProps, X.stateNode, Z, $);
          break;
        }
        case n: {
          var q = X.memoizedState;
          if (q.dehydrated !== null)
            ZI(q.dehydrated, Z);
          break;
        }
      }
    }
    function wU(X, Z) {
      OU(X, Z);
      var $ = vg();
      $.stateNode = Z, $.return = X;
      var q = X.deletions;
      if (q === null)
        X.deletions = [$], X.flags |= nJ;
      else
        q.push($);
    }
    function pG(X, Z) {
      {
        if (H$)
          return;
        switch (X.tag) {
          case w: {
            var $ = X.stateNode.containerInfo;
            switch (Z.tag) {
              case k:
                var { type: q, pendingProps: H } = Z;
                $I($, q);
                break;
              case I:
                var G = Z.pendingProps;
                YI($, G);
                break;
            }
            break;
          }
          case k: {
            var { type: E, memoizedProps: P, stateNode: A } = X;
            switch (Z.tag) {
              case k: {
                var { type: O, pendingProps: R } = Z, C = (X.mode & N1) !== D0;
                KI(E, P, A, O, R, C);
                break;
              }
              case I: {
                var B = Z.pendingProps, x = (X.mode & N1) !== D0;
                HI(E, P, A, B, x);
                break;
              }
            }
            break;
          }
          case n: {
            var v = X.memoizedState, f = v.dehydrated;
            if (f !== null)
              switch (Z.tag) {
                case k:
                  var { type: Y0, pendingProps: L0 } = Z;
                  qI(f, Y0);
                  break;
                case I:
                  var F0 = Z.pendingProps;
                  WI(f, F0);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function MU(X, Z) {
      Z.flags = Z.flags & ~eZ | y6, pG(X, Z);
    }
    function DU(X, Z) {
      switch (X.tag) {
        case k: {
          var { type: $, pendingProps: q } = X, H = fS(Z, $);
          if (H !== null)
            return X.stateNode = H, V8 = X, zX = pS(H), !0;
          return !1;
        }
        case I: {
          var G = X.pendingProps, E = mS(Z, G);
          if (E !== null)
            return X.stateNode = E, V8 = X, zX = null, !0;
          return !1;
        }
        case n: {
          var P = bS(Z);
          if (P !== null) {
            var A = {
              dehydrated: P,
              treeContext: DI(),
              retryLane: dQ
            };
            X.memoizedState = A;
            var O = hg(P);
            return O.return = X, X.child = O, V8 = X, zX = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function dG(X) {
      return (X.mode & N1) !== D0 && (X.flags & C1) === B0;
    }
    function lG(X) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function nG(X) {
      if (!lX)
        return;
      var Z = zX;
      if (!Z) {
        if (dG(X))
          pG(V8, X), lG();
        MU(V8, X), lX = !1, V8 = X;
        return;
      }
      var $ = Z;
      if (!DU(X, Z)) {
        if (dG(X))
          pG(V8, X), lG();
        Z = jW($);
        var q = V8;
        if (!Z || !DU(X, Z)) {
          MU(V8, X), lX = !1, V8 = X;
          return;
        }
        wU(q, $);
      }
    }
    function VI(X, Z, $) {
      var q = X.stateNode, H = !H$, G = nS(q, X.type, X.memoizedProps, Z, $, X, H);
      if (X.updateQueue = G, G !== null)
        return !0;
      return !1;
    }
    function SI(X) {
      var { stateNode: Z, memoizedProps: $ } = X, q = sS(Z, $, X);
      if (q) {
        var H = V8;
        if (H !== null)
          switch (H.tag) {
            case w: {
              var G = H.stateNode.containerInfo, E = (H.mode & N1) !== D0;
              eS(G, Z, $, E);
              break;
            }
            case k: {
              var { type: P, memoizedProps: A, stateNode: O } = H, R = (H.mode & N1) !== D0;
              QI(P, A, O, Z, $, R);
              break;
            }
          }
      }
      return q;
    }
    function II(X) {
      var Z = X.memoizedState, $ = Z !== null ? Z.dehydrated : null;
      if (!$)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      oS($, X);
    }
    function _I(X) {
      var Z = X.memoizedState, $ = Z !== null ? Z.dehydrated : null;
      if (!$)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return aS($);
    }
    function RU(X) {
      var Z = X.return;
      while (Z !== null && Z.tag !== k && Z.tag !== w && Z.tag !== n)
        Z = Z.return;
      V8 = Z;
    }
    function A9(X) {
      if (X !== V8)
        return !1;
      if (!lX)
        return RU(X), lX = !0, !1;
      if (X.tag !== w && (X.tag !== k || tS(X.type) && !VG(X.type, X.memoizedProps))) {
        var Z = zX;
        if (Z)
          if (dG(X))
            kU(X), lG();
          else
            while (Z)
              wU(X, Z), Z = jW(Z);
      }
      if (RU(X), X.tag === n)
        zX = _I(X);
      else
        zX = V8 ? jW(X.stateNode) : null;
      return !0;
    }
    function TI() {
      return lX && zX !== null;
    }
    function kU(X) {
      var Z = zX;
      while (Z)
        OU(X, Z), Z = jW(Z);
    }
    function BY() {
      V8 = null, zX = null, lX = !1, H$ = !1;
    }
    function jU() {
      if (o4 !== null)
        OO(o4), o4 = null;
    }
    function S8() {
      return lX;
    }
    function sG(X) {
      if (o4 === null)
        o4 = [X];
      else
        o4.push(X);
    }
    var gI = Q.ReactCurrentBatchConfig, xI = null;
    function vI() {
      return gI.transition;
    }
    var nX = {
      recordUnsafeLifecycleWarnings: function(X, Z) {},
      flushPendingUnsafeLifecycleWarnings: function() {},
      recordLegacyContextWarning: function(X, Z) {},
      flushLegacyContextWarning: function() {},
      discardPendingWarnings: function() {}
    };
    {
      var hI = function(X) {
        var Z = null, $ = X;
        while ($ !== null) {
          if ($.mode & R6)
            Z = $;
          $ = $.return;
        }
        return Z;
      }, G$ = function(X) {
        var Z = [];
        return X.forEach(function($) {
          Z.push($);
        }), Z.sort().join(", ");
      }, SW = [], IW = [], _W = [], TW = [], gW = [], xW = [], z$ = /* @__PURE__ */ new Set;
      nX.recordUnsafeLifecycleWarnings = function(X, Z) {
        if (z$.has(X.type))
          return;
        if (typeof Z.componentWillMount === "function" && Z.componentWillMount.__suppressDeprecationWarning !== !0)
          SW.push(X);
        if (X.mode & R6 && typeof Z.UNSAFE_componentWillMount === "function")
          IW.push(X);
        if (typeof Z.componentWillReceiveProps === "function" && Z.componentWillReceiveProps.__suppressDeprecationWarning !== !0)
          _W.push(X);
        if (X.mode & R6 && typeof Z.UNSAFE_componentWillReceiveProps === "function")
          TW.push(X);
        if (typeof Z.componentWillUpdate === "function" && Z.componentWillUpdate.__suppressDeprecationWarning !== !0)
          gW.push(X);
        if (X.mode & R6 && typeof Z.UNSAFE_componentWillUpdate === "function")
          xW.push(X);
      }, nX.flushPendingUnsafeLifecycleWarnings = function() {
        var X = /* @__PURE__ */ new Set;
        if (SW.length > 0)
          SW.forEach(function(B) {
            X.add(j0(B) || "Component"), z$.add(B.type);
          }), SW = [];
        var Z = /* @__PURE__ */ new Set;
        if (IW.length > 0)
          IW.forEach(function(B) {
            Z.add(j0(B) || "Component"), z$.add(B.type);
          }), IW = [];
        var $ = /* @__PURE__ */ new Set;
        if (_W.length > 0)
          _W.forEach(function(B) {
            $.add(j0(B) || "Component"), z$.add(B.type);
          }), _W = [];
        var q = /* @__PURE__ */ new Set;
        if (TW.length > 0)
          TW.forEach(function(B) {
            q.add(j0(B) || "Component"), z$.add(B.type);
          }), TW = [];
        var H = /* @__PURE__ */ new Set;
        if (gW.length > 0)
          gW.forEach(function(B) {
            H.add(j0(B) || "Component"), z$.add(B.type);
          }), gW = [];
        var G = /* @__PURE__ */ new Set;
        if (xW.length > 0)
          xW.forEach(function(B) {
            G.add(j0(B) || "Component"), z$.add(B.type);
          }), xW = [];
        if (Z.size > 0) {
          var E = G$(Z);
          K(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, E);
        }
        if (q.size > 0) {
          var P = G$(q);
          K(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, P);
        }
        if (G.size > 0) {
          var A = G$(G);
          K(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, A);
        }
        if (X.size > 0) {
          var O = G$(X);
          W(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
        if ($.size > 0) {
          var R = G$($);
          W(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (H.size > 0) {
          var C = G$(H);
          W(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
      };
      var U9 = /* @__PURE__ */ new Map, BU = /* @__PURE__ */ new Set;
      nX.recordLegacyContextWarning = function(X, Z) {
        var $ = hI(X);
        if ($ === null) {
          K("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (BU.has(X.type))
          return;
        var q = U9.get($);
        if (X.type.contextTypes != null || X.type.childContextTypes != null || Z !== null && typeof Z.getChildContext === "function") {
          if (q === void 0)
            q = [], U9.set($, q);
          q.push(X);
        }
      }, nX.flushLegacyContextWarning = function() {
        U9.forEach(function(X, Z) {
          if (X.length === 0)
            return;
          var $ = X[0], q = /* @__PURE__ */ new Set;
          X.forEach(function(G) {
            q.add(j0(G) || "Component"), BU.add(G.type);
          });
          var H = G$(q);
          try {
            A6($), K(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, H);
          } finally {
            z8();
          }
        });
      }, nX.discardPendingWarnings = function() {
        SW = [], IW = [], _W = [], TW = [], gW = [], xW = [], U9 = /* @__PURE__ */ new Map;
      };
    }
    var oG, aG, rG, iG, tG, CU = function(X, Z) {};
    oG = !1, aG = !1, rG = {}, iG = {}, tG = {}, CU = function(X, Z) {
      if (X === null || typeof X !== "object")
        return;
      if (!X._store || X._store.validated || X.key != null)
        return;
      if (typeof X._store !== "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      X._store.validated = !0;
      var $ = j0(Z) || "Component";
      if (iG[$])
        return;
      iG[$] = !0, K('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.');
    };
    function yI(X) {
      return X.prototype && X.prototype.isReactComponent;
    }
    function vW(X, Z, $) {
      var q = $.ref;
      if (q !== null && typeof q !== "function" && typeof q !== "object") {
        if ((X.mode & R6 || U1) && !($._owner && $._self && $._owner.stateNode !== $._self) && !($._owner && $._owner.tag !== F) && !(typeof $.type === "function" && !yI($.type)) && $._owner) {
          var H = j0(X) || "Component";
          if (!rG[H])
            K('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H, q), rG[H] = !0;
        }
        if ($._owner) {
          var G = $._owner, E;
          if (G) {
            var P = G;
            if (P.tag !== F)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            E = P.stateNode;
          }
          if (!E)
            throw new Error("Missing owner for string ref " + q + ". This error is likely caused by a bug in React. Please file an issue.");
          var A = E;
          u6(q, "ref");
          var O = "" + q;
          if (Z !== null && Z.ref !== null && typeof Z.ref === "function" && Z.ref._stringRef === O)
            return Z.ref;
          var R = function(C) {
            var B = A.refs;
            if (C === null)
              delete B[O];
            else
              B[O] = C;
          };
          return R._stringRef = O, R;
        } else {
          if (typeof q !== "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!$._owner)
            throw new Error("Element ref was specified as a string (" + q + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return q;
    }
    function L9(X, Z) {
      var $ = Object.prototype.toString.call(Z);
      throw new Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(Z).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    }
    function O9(X) {
      {
        var Z = j0(X) || "Component";
        if (tG[Z])
          return;
        tG[Z] = !0, K("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function VU(X) {
      var { _payload: Z, _init: $ } = X;
      return $(Z);
    }
    function SU(X) {
      function Z(_, b) {
        if (!X)
          return;
        var T = _.deletions;
        if (T === null)
          _.deletions = [b], _.flags |= nJ;
        else
          T.push(b);
      }
      function $(_, b) {
        if (!X)
          return null;
        var T = b;
        while (T !== null)
          Z(_, T), T = T.sibling;
        return null;
      }
      function q(_, b) {
        var T = /* @__PURE__ */ new Map, a = b;
        while (a !== null) {
          if (a.key !== null)
            T.set(a.key, a);
          else
            T.set(a.index, a);
          a = a.sibling;
        }
        return T;
      }
      function H(_, b) {
        var T = w$(_, b);
        return T.index = 0, T.sibling = null, T;
      }
      function G(_, b, T) {
        if (_.index = T, !X)
          return _.flags |= _P, b;
        var a = _.alternate;
        if (a !== null) {
          var G0 = a.index;
          if (G0 < b)
            return _.flags |= y6, b;
          else
            return G0;
        } else
          return _.flags |= y6, b;
      }
      function E(_) {
        if (X && _.alternate === null)
          _.flags |= y6;
        return _;
      }
      function P(_, b, T, a) {
        if (b === null || b.tag !== I) {
          var G0 = az(T, _.mode, a);
          return G0.return = _, G0;
        } else {
          var W0 = H(b, T);
          return W0.return = _, W0;
        }
      }
      function A(_, b, T, a) {
        var G0 = T.type;
        if (G0 === WQ)
          return R(_, b, T.props.children, a, T.key);
        if (b !== null) {
          if (b.elementType === G0 || vO(b, T) || typeof G0 === "object" && G0 !== null && G0.$$typeof === d6 && VU(G0) === b.type) {
            var W0 = H(b, T.props);
            return W0.ref = vW(_, b, T), W0.return = _, W0._debugSource = T._source, W0._debugOwner = T._owner, W0;
          }
        }
        var S0 = oz(T, _.mode, a);
        return S0.ref = vW(_, b, T), S0.return = _, S0;
      }
      function O(_, b, T, a) {
        if (b === null || b.tag !== D || b.stateNode.containerInfo !== T.containerInfo || b.stateNode.implementation !== T.implementation) {
          var G0 = rz(T, _.mode, a);
          return G0.return = _, G0;
        } else {
          var W0 = H(b, T.children || []);
          return W0.return = _, W0;
        }
      }
      function R(_, b, T, a, G0) {
        if (b === null || b.tag !== h) {
          var W0 = YJ(T, _.mode, a, G0);
          return W0.return = _, W0;
        } else {
          var S0 = H(b, T);
          return S0.return = _, S0;
        }
      }
      function C(_, b, T) {
        if (typeof b === "string" && b !== "" || typeof b === "number") {
          var a = az("" + b, _.mode, T);
          return a.return = _, a;
        }
        if (typeof b === "object" && b !== null) {
          switch (b.$$typeof) {
            case s8: {
              var G0 = oz(b, _.mode, T);
              return G0.ref = vW(_, null, b), G0.return = _, G0;
            }
            case o8: {
              var W0 = rz(b, _.mode, T);
              return W0.return = _, W0;
            }
            case d6: {
              var { _payload: S0, _init: m0 } = b;
              return C(_, m0(S0), T);
            }
          }
          if (B1(b) || mX(b)) {
            var f1 = YJ(b, _.mode, T, null);
            return f1.return = _, f1;
          }
          L9(_, b);
        }
        if (typeof b === "function")
          O9(_);
        return null;
      }
      function B(_, b, T, a) {
        var G0 = b !== null ? b.key : null;
        if (typeof T === "string" && T !== "" || typeof T === "number") {
          if (G0 !== null)
            return null;
          return P(_, b, "" + T, a);
        }
        if (typeof T === "object" && T !== null) {
          switch (T.$$typeof) {
            case s8:
              if (T.key === G0)
                return A(_, b, T, a);
              else
                return null;
            case o8:
              if (T.key === G0)
                return O(_, b, T, a);
              else
                return null;
            case d6: {
              var { _payload: W0, _init: S0 } = T;
              return B(_, b, S0(W0), a);
            }
          }
          if (B1(T) || mX(T)) {
            if (G0 !== null)
              return null;
            return R(_, b, T, a, null);
          }
          L9(_, T);
        }
        if (typeof T === "function")
          O9(_);
        return null;
      }
      function x(_, b, T, a, G0) {
        if (typeof a === "string" && a !== "" || typeof a === "number") {
          var W0 = _.get(T) || null;
          return P(b, W0, "" + a, G0);
        }
        if (typeof a === "object" && a !== null) {
          switch (a.$$typeof) {
            case s8: {
              var S0 = _.get(a.key === null ? T : a.key) || null;
              return A(b, S0, a, G0);
            }
            case o8: {
              var m0 = _.get(a.key === null ? T : a.key) || null;
              return O(b, m0, a, G0);
            }
            case d6:
              var { _payload: f1, _init: M1 } = a;
              return x(_, b, T, M1(f1), G0);
          }
          if (B1(a) || mX(a)) {
            var C6 = _.get(T) || null;
            return R(b, C6, a, G0, null);
          }
          L9(b, a);
        }
        if (typeof a === "function")
          O9(b);
        return null;
      }
      function v(_, b, T) {
        {
          if (typeof _ !== "object" || _ === null)
            return b;
          switch (_.$$typeof) {
            case s8:
            case o8:
              CU(_, T);
              var a = _.key;
              if (typeof a !== "string")
                break;
              if (b === null) {
                b = /* @__PURE__ */ new Set, b.add(a);
                break;
              }
              if (!b.has(a)) {
                b.add(a);
                break;
              }
              K("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be " + "duplicated and/or omitted — the behavior is unsupported and " + "could change in a future version.", a);
              break;
            case d6:
              var { _payload: G0, _init: W0 } = _;
              v(W0(G0), b, T);
              break;
          }
        }
        return b;
      }
      function f(_, b, T, a) {
        {
          var G0 = null;
          for (var W0 = 0;W0 < T.length; W0++) {
            var S0 = T[W0];
            G0 = v(S0, G0, _);
          }
        }
        var m0 = null, f1 = null, M1 = b, C6 = 0, D1 = 0, k6 = null;
        for (;M1 !== null && D1 < T.length; D1++) {
          if (M1.index > D1)
            k6 = M1, M1 = null;
          else
            k6 = M1.sibling;
          var t8 = B(_, M1, T[D1], a);
          if (t8 === null) {
            if (M1 === null)
              M1 = k6;
            break;
          }
          if (X) {
            if (M1 && t8.alternate === null)
              Z(_, M1);
          }
          if (C6 = G(t8, C6, D1), f1 === null)
            m0 = t8;
          else
            f1.sibling = t8;
          f1 = t8, M1 = k6;
        }
        if (D1 === T.length) {
          if ($(_, M1), S8()) {
            var h8 = D1;
            W$(_, h8);
          }
          return m0;
        }
        if (M1 === null) {
          for (;D1 < T.length; D1++) {
            var iQ = C(_, T[D1], a);
            if (iQ === null)
              continue;
            if (C6 = G(iQ, C6, D1), f1 === null)
              m0 = iQ;
            else
              f1.sibling = iQ;
            f1 = iQ;
          }
          if (S8()) {
            var PQ = D1;
            W$(_, PQ);
          }
          return m0;
        }
        var AQ = q(_, M1);
        for (;D1 < T.length; D1++) {
          var e8 = x(AQ, _, D1, T[D1], a);
          if (e8 !== null) {
            if (X) {
              if (e8.alternate !== null)
                AQ.delete(e8.key === null ? D1 : e8.key);
            }
            if (C6 = G(e8, C6, D1), f1 === null)
              m0 = e8;
            else
              f1.sibling = e8;
            f1 = e8;
          }
        }
        if (X)
          AQ.forEach(function(lY) {
            return Z(_, lY);
          });
        if (S8()) {
          var A4 = D1;
          W$(_, A4);
        }
        return m0;
      }
      function Y0(_, b, T, a) {
        var G0 = mX(T);
        if (typeof G0 !== "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          if (typeof Symbol === "function" && T[Symbol.toStringTag] === "Generator") {
            if (!aG)
              K("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
            aG = !0;
          }
          if (T.entries === G0) {
            if (!oG)
              K("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
            oG = !0;
          }
          var W0 = G0.call(T);
          if (W0) {
            var S0 = null, m0 = W0.next();
            for (;!m0.done; m0 = W0.next()) {
              var f1 = m0.value;
              S0 = v(f1, S0, _);
            }
          }
        }
        var M1 = G0.call(T);
        if (M1 == null)
          throw new Error("An iterable object provided no iterator.");
        var C6 = null, D1 = null, k6 = b, t8 = 0, h8 = 0, iQ = null, PQ = M1.next();
        for (;k6 !== null && !PQ.done; h8++, PQ = M1.next()) {
          if (k6.index > h8)
            iQ = k6, k6 = null;
          else
            iQ = k6.sibling;
          var AQ = B(_, k6, PQ.value, a);
          if (AQ === null) {
            if (k6 === null)
              k6 = iQ;
            break;
          }
          if (X) {
            if (k6 && AQ.alternate === null)
              Z(_, k6);
          }
          if (t8 = G(AQ, t8, h8), D1 === null)
            C6 = AQ;
          else
            D1.sibling = AQ;
          D1 = AQ, k6 = iQ;
        }
        if (PQ.done) {
          if ($(_, k6), S8()) {
            var e8 = h8;
            W$(_, e8);
          }
          return C6;
        }
        if (k6 === null) {
          for (;!PQ.done; h8++, PQ = M1.next()) {
            var A4 = C(_, PQ.value, a);
            if (A4 === null)
              continue;
            if (t8 = G(A4, t8, h8), D1 === null)
              C6 = A4;
            else
              D1.sibling = A4;
            D1 = A4;
          }
          if (S8()) {
            var lY = h8;
            W$(_, lY);
          }
          return C6;
        }
        var EK = q(_, k6);
        for (;!PQ.done; h8++, PQ = M1.next()) {
          var xZ = x(EK, _, h8, PQ.value, a);
          if (xZ !== null) {
            if (X) {
              if (xZ.alternate !== null)
                EK.delete(xZ.key === null ? h8 : xZ.key);
            }
            if (t8 = G(xZ, t8, h8), D1 === null)
              C6 = xZ;
            else
              D1.sibling = xZ;
            D1 = xZ;
          }
        }
        if (X)
          EK.forEach(function(Ex) {
            return Z(_, Ex);
          });
        if (S8()) {
          var Nx = h8;
          W$(_, Nx);
        }
        return C6;
      }
      function L0(_, b, T, a) {
        if (b !== null && b.tag === I) {
          $(_, b.sibling);
          var G0 = H(b, T);
          return G0.return = _, G0;
        }
        $(_, b);
        var W0 = az(T, _.mode, a);
        return W0.return = _, W0;
      }
      function F0(_, b, T, a) {
        var G0 = T.key, W0 = b;
        while (W0 !== null) {
          if (W0.key === G0) {
            var S0 = T.type;
            if (S0 === WQ) {
              if (W0.tag === h) {
                $(_, W0.sibling);
                var m0 = H(W0, T.props.children);
                return m0.return = _, m0._debugSource = T._source, m0._debugOwner = T._owner, m0;
              }
            } else if (W0.elementType === S0 || vO(W0, T) || typeof S0 === "object" && S0 !== null && S0.$$typeof === d6 && VU(S0) === W0.type) {
              $(_, W0.sibling);
              var f1 = H(W0, T.props);
              return f1.ref = vW(_, W0, T), f1.return = _, f1._debugSource = T._source, f1._debugOwner = T._owner, f1;
            }
            $(_, W0);
            break;
          } else
            Z(_, W0);
          W0 = W0.sibling;
        }
        if (T.type === WQ) {
          var M1 = YJ(T.props.children, _.mode, a, T.key);
          return M1.return = _, M1;
        } else {
          var C6 = oz(T, _.mode, a);
          return C6.ref = vW(_, b, T), C6.return = _, C6;
        }
      }
      function K1(_, b, T, a) {
        var G0 = T.key, W0 = b;
        while (W0 !== null) {
          if (W0.key === G0)
            if (W0.tag === D && W0.stateNode.containerInfo === T.containerInfo && W0.stateNode.implementation === T.implementation) {
              $(_, W0.sibling);
              var S0 = H(W0, T.children || []);
              return S0.return = _, S0;
            } else {
              $(_, W0);
              break;
            }
          else
            Z(_, W0);
          W0 = W0.sibling;
        }
        var m0 = rz(T, _.mode, a);
        return m0.return = _, m0;
      }
      function H1(_, b, T, a) {
        var G0 = typeof T === "object" && T !== null && T.type === WQ && T.key === null;
        if (G0)
          T = T.props.children;
        if (typeof T === "object" && T !== null) {
          switch (T.$$typeof) {
            case s8:
              return E(F0(_, b, T, a));
            case o8:
              return E(K1(_, b, T, a));
            case d6:
              var { _payload: W0, _init: S0 } = T;
              return H1(_, b, S0(W0), a);
          }
          if (B1(T))
            return f(_, b, T, a);
          if (mX(T))
            return Y0(_, b, T, a);
          L9(_, T);
        }
        if (typeof T === "string" && T !== "" || typeof T === "number")
          return E(L0(_, b, "" + T, a));
        if (typeof T === "function")
          O9(_);
        return $(_, b);
      }
      return H1;
    }
    var CY = SU(!0), IU = SU(!1);
    function fI(X, Z) {
      if (X !== null && Z.child !== X.child)
        throw new Error("Resuming work not yet implemented.");
      if (Z.child === null)
        return;
      var $ = Z.child, q = w$($, $.pendingProps);
      Z.child = q, q.return = Z;
      while ($.sibling !== null)
        $ = $.sibling, q = q.sibling = w$($, $.pendingProps), q.return = Z;
      q.sibling = null;
    }
    function mI(X, Z) {
      var $ = X.child;
      while ($ !== null)
        Ig($, Z), $ = $.sibling;
    }
    var eG = l4(null), Q2;
    Q2 = {};
    var w9 = null, VY = null, X2 = null, M9 = !1;
    function D9() {
      w9 = null, VY = null, X2 = null, M9 = !1;
    }
    function _U() {
      M9 = !0;
    }
    function TU() {
      M9 = !1;
    }
    function gU(X, Z, $) {
      {
        r8(eG, Z._currentValue, X), Z._currentValue = $;
        {
          if (Z._currentRenderer !== void 0 && Z._currentRenderer !== null && Z._currentRenderer !== Q2)
            K("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
          Z._currentRenderer = Q2;
        }
      }
    }
    function Z2(X, Z) {
      var $ = eG.current;
      a8(eG, Z), X._currentValue = $;
    }
    function J2(X, Z, $) {
      var q = X;
      while (q !== null) {
        var H = q.alternate;
        if (!NY(q.childLanes, Z)) {
          if (q.childLanes = i0(q.childLanes, Z), H !== null)
            H.childLanes = i0(H.childLanes, Z);
        } else if (H !== null && !NY(H.childLanes, Z))
          H.childLanes = i0(H.childLanes, Z);
        if (q === $)
          break;
        q = q.return;
      }
      if (q !== $)
        K("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function bI(X, Z, $) {
      uI(X, Z, $);
    }
    function uI(X, Z, $) {
      var q = X.child;
      if (q !== null)
        q.return = X;
      while (q !== null) {
        var H = void 0, G = q.dependencies;
        if (G !== null) {
          H = q.child;
          var E = G.firstContext;
          while (E !== null) {
            if (E.context === Z) {
              if (q.tag === F) {
                var P = eq($), A = G4(i1, P);
                A.tag = k9;
                var O = q.updateQueue;
                if (O === null)
                  ;
                else {
                  var R = O.shared, C = R.pending;
                  if (C === null)
                    A.next = A;
                  else
                    A.next = C.next, C.next = A;
                  R.pending = A;
                }
              }
              q.lanes = i0(q.lanes, $);
              var B = q.alternate;
              if (B !== null)
                B.lanes = i0(B.lanes, $);
              J2(q.return, $, X), G.lanes = i0(G.lanes, $);
              break;
            }
            E = E.next;
          }
        } else if (q.tag === X0)
          H = q.type === X.type ? null : q.child;
        else if (q.tag === I0) {
          var x = q.return;
          if (x === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          x.lanes = i0(x.lanes, $);
          var v = x.alternate;
          if (v !== null)
            v.lanes = i0(v.lanes, $);
          J2(x, $, X), H = q.sibling;
        } else
          H = q.child;
        if (H !== null)
          H.return = q;
        else {
          H = q;
          while (H !== null) {
            if (H === X) {
              H = null;
              break;
            }
            var f = H.sibling;
            if (f !== null) {
              f.return = H.return, H = f;
              break;
            }
            H = H.return;
          }
        }
        q = H;
      }
    }
    function SY(X, Z) {
      w9 = X, VY = null, X2 = null;
      var $ = X.dependencies;
      if ($ !== null) {
        var q = $.firstContext;
        if (q !== null) {
          if (lQ($.lanes, Z))
            rW();
          $.firstContext = null;
        }
      }
    }
    function f6(X) {
      if (M9)
        K("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var Z = X._currentValue;
      if (X2 === X)
        ;
      else {
        var $ = {
          context: X,
          memoizedValue: Z,
          next: null
        };
        if (VY === null) {
          if (w9 === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          VY = $, w9.dependencies = {
            lanes: s,
            firstContext: $
          };
        } else
          VY = VY.next = $;
      }
      return Z;
    }
    var N$ = null;
    function $2(X) {
      if (N$ === null)
        N$ = [X];
      else
        N$.push(X);
    }
    function cI() {
      if (N$ !== null) {
        for (var X = 0;X < N$.length; X++) {
          var Z = N$[X], $ = Z.interleaved;
          if ($ !== null) {
            Z.interleaved = null;
            var q = $.next, H = Z.pending;
            if (H !== null) {
              var G = H.next;
              H.next = q, $.next = G;
            }
            Z.pending = $;
          }
        }
        N$ = null;
      }
    }
    function xU(X, Z, $, q) {
      var H = Z.interleaved;
      if (H === null)
        $.next = $, $2(Z);
      else
        $.next = H.next, H.next = $;
      return Z.interleaved = $, R9(X, q);
    }
    function pI(X, Z, $, q) {
      var H = Z.interleaved;
      if (H === null)
        $.next = $, $2(Z);
      else
        $.next = H.next, H.next = $;
      Z.interleaved = $;
    }
    function dI(X, Z, $, q) {
      var H = Z.interleaved;
      if (H === null)
        $.next = $, $2(Z);
      else
        $.next = H.next, H.next = $;
      return Z.interleaved = $, R9(X, q);
    }
    function IQ(X, Z) {
      return R9(X, Z);
    }
    var lI = R9;
    function R9(X, Z) {
      X.lanes = i0(X.lanes, Z);
      var $ = X.alternate;
      if ($ !== null)
        $.lanes = i0($.lanes, Z);
      if ($ === null && (X.flags & (y6 | eZ)) !== B0)
        _O(X);
      var q = X, H = X.return;
      while (H !== null) {
        if (H.childLanes = i0(H.childLanes, Z), $ = H.alternate, $ !== null)
          $.childLanes = i0($.childLanes, Z);
        else if ((H.flags & (y6 | eZ)) !== B0)
          _O(X);
        q = H, H = H.return;
      }
      if (q.tag === w) {
        var G = q.stateNode;
        return G;
      } else
        return null;
    }
    var vU = 0, hU = 1, k9 = 2, Y2 = 3, j9 = !1, q2, B9;
    q2 = !1, B9 = null;
    function W2(X) {
      var Z = {
        baseState: X.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: s
        },
        effects: null
      };
      X.updateQueue = Z;
    }
    function yU(X, Z) {
      var $ = Z.updateQueue, q = X.updateQueue;
      if ($ === q) {
        var H = {
          baseState: q.baseState,
          firstBaseUpdate: q.firstBaseUpdate,
          lastBaseUpdate: q.lastBaseUpdate,
          shared: q.shared,
          effects: q.effects
        };
        Z.updateQueue = H;
      }
    }
    function G4(X, Z) {
      var $ = {
        eventTime: X,
        lane: Z,
        tag: vU,
        payload: null,
        callback: null,
        next: null
      };
      return $;
    }
    function a4(X, Z, $) {
      var q = X.updateQueue;
      if (q === null)
        return null;
      var H = q.shared;
      if (B9 === H && !q2)
        K("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), q2 = !0;
      if (sT()) {
        var G = H.pending;
        if (G === null)
          Z.next = Z;
        else
          Z.next = G.next, G.next = Z;
        return H.pending = Z, lI(X, $);
      } else
        return dI(X, H, Z, $);
    }
    function C9(X, Z, $) {
      var q = Z.updateQueue;
      if (q === null)
        return;
      var H = q.shared;
      if (aP($)) {
        var G = H.lanes;
        G = iP(G, X.pendingLanes);
        var E = i0(G, $);
        H.lanes = E, e7(X, E);
      }
    }
    function K2(X, Z) {
      var { updateQueue: $, alternate: q } = X;
      if (q !== null) {
        var H = q.updateQueue;
        if ($ === H) {
          var G = null, E = null, P = $.firstBaseUpdate;
          if (P !== null) {
            var A = P;
            do {
              var O = {
                eventTime: A.eventTime,
                lane: A.lane,
                tag: A.tag,
                payload: A.payload,
                callback: A.callback,
                next: null
              };
              if (E === null)
                G = E = O;
              else
                E.next = O, E = O;
              A = A.next;
            } while (A !== null);
            if (E === null)
              G = E = Z;
            else
              E.next = Z, E = Z;
          } else
            G = E = Z;
          $ = {
            baseState: H.baseState,
            firstBaseUpdate: G,
            lastBaseUpdate: E,
            shared: H.shared,
            effects: H.effects
          }, X.updateQueue = $;
          return;
        }
      }
      var R = $.lastBaseUpdate;
      if (R === null)
        $.firstBaseUpdate = Z;
      else
        R.next = Z;
      $.lastBaseUpdate = Z;
    }
    function nI(X, Z, $, q, H, G) {
      switch ($.tag) {
        case hU: {
          var E = $.payload;
          if (typeof E === "function") {
            _U();
            var P = E.call(G, q, H);
            {
              if (X.mode & R6) {
                E8(!0);
                try {
                  E.call(G, q, H);
                } finally {
                  E8(!1);
                }
              }
              TU();
            }
            return P;
          }
          return E;
        }
        case Y2:
          X.flags = X.flags & ~zQ | C1;
        case vU: {
          var A = $.payload, O;
          if (typeof A === "function") {
            _U(), O = A.call(G, q, H);
            {
              if (X.mode & R6) {
                E8(!0);
                try {
                  A.call(G, q, H);
                } finally {
                  E8(!1);
                }
              }
              TU();
            }
          } else
            O = A;
          if (O === null || O === void 0)
            return q;
          return $1({}, q, O);
        }
        case k9:
          return j9 = !0, q;
      }
      return q;
    }
    function V9(X, Z, $, q) {
      var H = X.updateQueue;
      j9 = !1, B9 = H.shared;
      var { firstBaseUpdate: G, lastBaseUpdate: E } = H, P = H.shared.pending;
      if (P !== null) {
        H.shared.pending = null;
        var A = P, O = A.next;
        if (A.next = null, E === null)
          G = O;
        else
          E.next = O;
        E = A;
        var R = X.alternate;
        if (R !== null) {
          var C = R.updateQueue, B = C.lastBaseUpdate;
          if (B !== E) {
            if (B === null)
              C.firstBaseUpdate = O;
            else
              B.next = O;
            C.lastBaseUpdate = A;
          }
        }
      }
      if (G !== null) {
        var x = H.baseState, v = s, f = null, Y0 = null, L0 = null, F0 = G;
        do {
          var { lane: K1, eventTime: H1 } = F0;
          if (!NY(q, K1)) {
            var _ = {
              eventTime: H1,
              lane: K1,
              tag: F0.tag,
              payload: F0.payload,
              callback: F0.callback,
              next: null
            };
            if (L0 === null)
              Y0 = L0 = _, f = x;
            else
              L0 = L0.next = _;
            v = i0(v, K1);
          } else {
            if (L0 !== null) {
              var b = {
                eventTime: H1,
                lane: F8,
                tag: F0.tag,
                payload: F0.payload,
                callback: F0.callback,
                next: null
              };
              L0 = L0.next = b;
            }
            x = nI(X, H, F0, x, Z, $);
            var T = F0.callback;
            if (T !== null && F0.lane !== F8) {
              X.flags |= w7;
              var a = H.effects;
              if (a === null)
                H.effects = [F0];
              else
                a.push(F0);
            }
          }
          if (F0 = F0.next, F0 === null)
            if (P = H.shared.pending, P === null)
              break;
            else {
              var G0 = P, W0 = G0.next;
              G0.next = null, F0 = W0, H.lastBaseUpdate = G0, H.shared.pending = null;
            }
        } while (!0);
        if (L0 === null)
          f = x;
        H.baseState = f, H.firstBaseUpdate = Y0, H.lastBaseUpdate = L0;
        var S0 = H.shared.interleaved;
        if (S0 !== null) {
          var m0 = S0;
          do
            v = i0(v, m0.lane), m0 = m0.next;
          while (m0 !== S0);
        } else if (G === null)
          H.shared.lanes = s;
        KK(v), X.lanes = v, X.memoizedState = x;
      }
      B9 = null;
    }
    function sI(X, Z) {
      if (typeof X !== "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + X));
      X.call(Z);
    }
    function fU() {
      j9 = !1;
    }
    function S9() {
      return j9;
    }
    function mU(X, Z, $) {
      var q = Z.effects;
      if (Z.effects = null, q !== null)
        for (var H = 0;H < q.length; H++) {
          var G = q[H], E = G.callback;
          if (E !== null)
            G.callback = null, sI(E, $);
        }
    }
    var hW = {}, r4 = l4(hW), yW = l4(hW), I9 = l4(hW);
    function _9(X) {
      if (X === hW)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return X;
    }
    function bU() {
      var X = _9(I9.current);
      return X;
    }
    function H2(X, Z) {
      r8(I9, Z, X), r8(yW, X, X), r8(r4, hW, X);
      var $ = GS(Z);
      a8(r4, X), r8(r4, $, X);
    }
    function IY(X) {
      a8(r4, X), a8(yW, X), a8(I9, X);
    }
    function G2() {
      var X = _9(r4.current);
      return X;
    }
    function uU(X) {
      var Z = _9(I9.current), $ = _9(r4.current), q = zS($, X.type);
      if ($ === q)
        return;
      r8(yW, X, X), r8(r4, q, X);
    }
    function z2(X) {
      if (yW.current !== X)
        return;
      a8(r4, X), a8(yW, X);
    }
    var oI = 0, cU = 1, pU = 1, fW = 2, sX = l4(oI);
    function N2(X, Z) {
      return (X & Z) !== 0;
    }
    function _Y(X) {
      return X & cU;
    }
    function E2(X, Z) {
      return X & cU | Z;
    }
    function aI(X, Z) {
      return X | Z;
    }
    function i4(X, Z) {
      r8(sX, Z, X);
    }
    function TY(X) {
      a8(sX, X);
    }
    function rI(X, Z) {
      var $ = X.memoizedState;
      if ($ !== null) {
        if ($.dehydrated !== null)
          return !0;
        return !1;
      }
      var q = X.memoizedProps;
      return !0;
    }
    function T9(X) {
      var Z = X;
      while (Z !== null) {
        if (Z.tag === n) {
          var $ = Z.memoizedState;
          if ($ !== null) {
            var q = $.dehydrated;
            if (q === null || YU(q) || TG(q))
              return Z;
          }
        } else if (Z.tag === P0 && Z.memoizedProps.revealOrder !== void 0) {
          var H = (Z.flags & C1) !== B0;
          if (H)
            return Z;
        } else if (Z.child !== null) {
          Z.child.return = Z, Z = Z.child;
          continue;
        }
        if (Z === X)
          return null;
        while (Z.sibling === null) {
          if (Z.return === null || Z.return === X)
            return null;
          Z = Z.return;
        }
        Z.sibling.return = Z.return, Z = Z.sibling;
      }
      return null;
    }
    var _Q = 0, n6 = 1, CZ = 2, s6 = 4, I8 = 8, F2 = [];
    function P2() {
      for (var X = 0;X < F2.length; X++) {
        var Z = F2[X];
        Z._workInProgressVersionPrimary = null;
      }
      F2.length = 0;
    }
    function iI(X, Z) {
      var $ = Z._getVersion, q = $(Z._source);
      if (X.mutableSourceEagerHydrationData == null)
        X.mutableSourceEagerHydrationData = [Z, q];
      else
        X.mutableSourceEagerHydrationData.push(Z, q);
    }
    var { ReactCurrentDispatcher: H0, ReactCurrentBatchConfig: mW } = Q, A2, gY;
    A2 = /* @__PURE__ */ new Set;
    var E$ = s, y1 = null, o6 = null, a6 = null, g9 = !1, bW = !1, uW = 0, tI = 0, eI = 25, c = null, NX = null, t4 = -1, U2 = !1;
    function V1() {
      {
        var X = c;
        if (NX === null)
          NX = [X];
        else
          NX.push(X);
      }
    }
    function $0() {
      {
        var X = c;
        if (NX !== null) {
          if (t4++, NX[t4] !== X)
            Q_(X);
        }
      }
    }
    function xY(X) {
      if (X !== void 0 && X !== null && !B1(X))
        K("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", c, typeof X);
    }
    function Q_(X) {
      {
        var Z = j0(y1);
        if (!A2.has(Z)) {
          if (A2.add(Z), NX !== null) {
            var $ = "", q = 30;
            for (var H = 0;H <= t4; H++) {
              var G = NX[H], E = H === t4 ? X : G, P = H + 1 + ". " + G;
              while (P.length < q)
                P += " ";
              P += E + `
`, $ += P;
            }
            K(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, Z, $);
          }
        }
      }
    }
    function i8() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function L2(X, Z) {
      if (U2)
        return !1;
      if (Z === null)
        return K("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", c), !1;
      if (X.length !== Z.length)
        K(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, c, "[" + Z.join(", ") + "]", "[" + X.join(", ") + "]");
      for (var $ = 0;$ < Z.length && $ < X.length; $++) {
        if (oQ(X[$], Z[$]))
          continue;
        return !1;
      }
      return !0;
    }
    function vY(X, Z, $, q, H, G) {
      if (E$ = G, y1 = Z, NX = X !== null ? X._debugHookTypes : null, t4 = -1, U2 = X !== null && X.type !== Z.type, Z.memoizedState = null, Z.updateQueue = null, Z.lanes = s, X !== null && X.memoizedState !== null)
        H0.current = zL;
      else if (NX !== null)
        H0.current = GL;
      else
        H0.current = HL;
      var E = $(q, H);
      if (bW) {
        var P = 0;
        do {
          if (bW = !1, uW = 0, P >= eI)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          P += 1, U2 = !1, o6 = null, a6 = null, Z.updateQueue = null, t4 = -1, H0.current = NL, E = $(q, H);
        } while (bW);
      }
      H0.current = o9, Z._debugHookTypes = NX;
      var A = o6 !== null && o6.next !== null;
      if (E$ = s, y1 = null, o6 = null, a6 = null, c = null, NX = null, t4 = -1, X !== null && (X.flags & X4) !== (Z.flags & X4) && (X.mode & N1) !== D0)
        K("Internal React error: Expected static flag was missing. Please notify the React team.");
      if (g9 = !1, A)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return E;
    }
    function hY() {
      var X = uW !== 0;
      return uW = 0, X;
    }
    function dU(X, Z, $) {
      if (Z.updateQueue = X.updateQueue, (Z.mode & RZ) !== D0)
        Z.flags &= ~(B3 | Q4 | uX | P1);
      else
        Z.flags &= ~(uX | P1);
      X.lanes = g3(X.lanes, $);
    }
    function lU() {
      if (H0.current = o9, g9) {
        var X = y1.memoizedState;
        while (X !== null) {
          var Z = X.queue;
          if (Z !== null)
            Z.pending = null;
          X = X.next;
        }
        g9 = !1;
      }
      E$ = s, y1 = null, o6 = null, a6 = null, NX = null, t4 = -1, c = null, $L = !1, bW = !1, uW = 0;
    }
    function VZ() {
      var X = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      if (a6 === null)
        y1.memoizedState = a6 = X;
      else
        a6 = a6.next = X;
      return a6;
    }
    function EX() {
      var X;
      if (o6 === null) {
        var Z = y1.alternate;
        if (Z !== null)
          X = Z.memoizedState;
        else
          X = null;
      } else
        X = o6.next;
      var $;
      if (a6 === null)
        $ = y1.memoizedState;
      else
        $ = a6.next;
      if ($ !== null)
        a6 = $, $ = a6.next, o6 = X;
      else {
        if (X === null)
          throw new Error("Rendered more hooks than during the previous render.");
        o6 = X;
        var q = {
          memoizedState: o6.memoizedState,
          baseState: o6.baseState,
          baseQueue: o6.baseQueue,
          queue: o6.queue,
          next: null
        };
        if (a6 === null)
          y1.memoizedState = a6 = q;
        else
          a6 = a6.next = q;
      }
      return a6;
    }
    function nU() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function O2(X, Z) {
      return typeof Z === "function" ? Z(X) : Z;
    }
    function w2(X, Z, $) {
      var q = VZ(), H;
      if ($ !== void 0)
        H = $(Z);
      else
        H = Z;
      q.memoizedState = q.baseState = H;
      var G = {
        pending: null,
        interleaved: null,
        lanes: s,
        dispatch: null,
        lastRenderedReducer: X,
        lastRenderedState: H
      };
      q.queue = G;
      var E = G.dispatch = J_.bind(null, y1, G);
      return [q.memoizedState, E];
    }
    function M2(X, Z, $) {
      var q = EX(), H = q.queue;
      if (H === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      H.lastRenderedReducer = X;
      var G = o6, E = G.baseQueue, P = H.pending;
      if (P !== null) {
        if (E !== null) {
          var A = E.next, O = P.next;
          E.next = O, P.next = A;
        }
        if (G.baseQueue !== E)
          K("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.");
        G.baseQueue = E = P, H.pending = null;
      }
      if (E !== null) {
        var R = E.next, C = G.baseState, B = null, x = null, v = null, f = R;
        do {
          var Y0 = f.lane;
          if (!NY(E$, Y0)) {
            var L0 = {
              lane: Y0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null
            };
            if (v === null)
              x = v = L0, B = C;
            else
              v = v.next = L0;
            y1.lanes = i0(y1.lanes, Y0), KK(Y0);
          } else {
            if (v !== null) {
              var F0 = {
                lane: F8,
                action: f.action,
                hasEagerState: f.hasEagerState,
                eagerState: f.eagerState,
                next: null
              };
              v = v.next = F0;
            }
            if (f.hasEagerState)
              C = f.eagerState;
            else {
              var K1 = f.action;
              C = X(C, K1);
            }
          }
          f = f.next;
        } while (f !== null && f !== R);
        if (v === null)
          B = C;
        else
          v.next = x;
        if (!oQ(C, q.memoizedState))
          rW();
        q.memoizedState = C, q.baseState = B, q.baseQueue = v, H.lastRenderedState = C;
      }
      var H1 = H.interleaved;
      if (H1 !== null) {
        var _ = H1;
        do {
          var b = _.lane;
          y1.lanes = i0(y1.lanes, b), KK(b), _ = _.next;
        } while (_ !== H1);
      } else if (E === null)
        H.lanes = s;
      var T = H.dispatch;
      return [q.memoizedState, T];
    }
    function D2(X, Z, $) {
      var q = EX(), H = q.queue;
      if (H === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      H.lastRenderedReducer = X;
      var { dispatch: G, pending: E } = H, P = q.memoizedState;
      if (E !== null) {
        H.pending = null;
        var A = E.next, O = A;
        do {
          var R = O.action;
          P = X(P, R), O = O.next;
        } while (O !== A);
        if (!oQ(P, q.memoizedState))
          rW();
        if (q.memoizedState = P, q.baseQueue === null)
          q.baseState = P;
        H.lastRenderedState = P;
      }
      return [P, G];
    }
    function R2(X, Z, $) {
      return;
    }
    function x9(X, Z, $) {
      return;
    }
    function k2(X, Z, $) {
      var q = y1, H = VZ(), G, E = S8();
      if (E) {
        if ($ === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        if (G = $(), !gY) {
          if (G !== $())
            K("The result of getServerSnapshot should be cached to avoid an infinite loop"), gY = !0;
        }
      } else {
        if (G = Z(), !gY) {
          var P = Z();
          if (!oQ(G, P))
            K("The result of getSnapshot should be cached to avoid an infinite loop"), gY = !0;
        }
        var A = E5();
        if (A === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        if (!T3(A, E$))
          sU(q, Z, G);
      }
      H.memoizedState = G;
      var O = {
        value: G,
        getSnapshot: Z
      };
      return H.queue = O, m9(aU.bind(null, q, O, X), [X]), q.flags |= uX, cW(n6 | I8, oU.bind(null, q, O, G, Z), void 0, null), G;
    }
    function v9(X, Z, $) {
      var q = y1, H = EX(), G = Z();
      if (!gY) {
        var E = Z();
        if (!oQ(G, E))
          K("The result of getSnapshot should be cached to avoid an infinite loop"), gY = !0;
      }
      var P = H.memoizedState, A = !oQ(P, G);
      if (A)
        H.memoizedState = G, rW();
      var O = H.queue;
      if (dW(aU.bind(null, q, O, X), [X]), O.getSnapshot !== Z || A || a6 !== null && a6.memoizedState.tag & n6) {
        q.flags |= uX, cW(n6 | I8, oU.bind(null, q, O, G, Z), void 0, null);
        var R = E5();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        if (!T3(R, E$))
          sU(q, Z, G);
      }
      return G;
    }
    function sU(X, Z, $) {
      X.flags |= j3;
      var q = {
        getSnapshot: Z,
        value: $
      }, H = y1.updateQueue;
      if (H === null)
        H = nU(), y1.updateQueue = H, H.stores = [q];
      else {
        var G = H.stores;
        if (G === null)
          H.stores = [q];
        else
          G.push(q);
      }
    }
    function oU(X, Z, $, q) {
      if (Z.value = $, Z.getSnapshot = q, rU(Z))
        iU(X);
    }
    function aU(X, Z, $) {
      var q = function() {
        if (rU(Z))
          iU(X);
      };
      return $(q);
    }
    function rU(X) {
      var { getSnapshot: Z, value: $ } = X;
      try {
        var q = Z();
        return !oQ($, q);
      } catch (H) {
        return !0;
      }
    }
    function iU(X) {
      var Z = IQ(X, v0);
      if (Z !== null)
        e6(Z, X, v0, i1);
    }
    function h9(X) {
      var Z = VZ();
      if (typeof X === "function")
        X = X();
      Z.memoizedState = Z.baseState = X;
      var $ = {
        pending: null,
        interleaved: null,
        lanes: s,
        dispatch: null,
        lastRenderedReducer: O2,
        lastRenderedState: X
      };
      Z.queue = $;
      var q = $.dispatch = $_.bind(null, y1, $);
      return [Z.memoizedState, q];
    }
    function j2(X) {
      return M2(O2);
    }
    function B2(X) {
      return D2(O2);
    }
    function cW(X, Z, $, q) {
      var H = {
        tag: X,
        create: Z,
        destroy: $,
        deps: q,
        next: null
      }, G = y1.updateQueue;
      if (G === null)
        G = nU(), y1.updateQueue = G, G.lastEffect = H.next = H;
      else {
        var E = G.lastEffect;
        if (E === null)
          G.lastEffect = H.next = H;
        else {
          var P = E.next;
          E.next = H, H.next = P, G.lastEffect = H;
        }
      }
      return H;
    }
    function C2(X) {
      var Z = VZ();
      {
        var $ = {
          current: X
        };
        return Z.memoizedState = $, $;
      }
    }
    function y9(X) {
      var Z = EX();
      return Z.memoizedState;
    }
    function pW(X, Z, $, q) {
      var H = VZ(), G = q === void 0 ? null : q;
      y1.flags |= X, H.memoizedState = cW(n6 | Z, $, void 0, G);
    }
    function f9(X, Z, $, q) {
      var H = EX(), G = q === void 0 ? null : q, E = void 0;
      if (o6 !== null) {
        var P = o6.memoizedState;
        if (E = P.destroy, G !== null) {
          var A = P.deps;
          if (L2(G, A)) {
            H.memoizedState = cW(Z, $, E, G);
            return;
          }
        }
      }
      y1.flags |= X, H.memoizedState = cW(n6 | Z, $, E, G);
    }
    function m9(X, Z) {
      if ((y1.mode & RZ) !== D0)
        return pW(B3 | uX | R7, I8, X, Z);
      else
        return pW(uX | R7, I8, X, Z);
    }
    function dW(X, Z) {
      return f9(uX, I8, X, Z);
    }
    function V2(X, Z) {
      return pW(P1, CZ, X, Z);
    }
    function b9(X, Z) {
      return f9(P1, CZ, X, Z);
    }
    function S2(X, Z) {
      var $ = P1;
      if ($ |= aJ, (y1.mode & RZ) !== D0)
        $ |= Q4;
      return pW($, s6, X, Z);
    }
    function u9(X, Z) {
      return f9(P1, s6, X, Z);
    }
    function tU(X, Z) {
      if (typeof Z === "function") {
        var $ = Z, q = X();
        return $(q), function() {
          $(null);
        };
      } else if (Z !== null && Z !== void 0) {
        var H = Z;
        if (!H.hasOwnProperty("current"))
          K("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(H).join(", ") + "}");
        var G = X();
        return H.current = G, function() {
          H.current = null;
        };
      }
    }
    function I2(X, Z, $) {
      if (typeof Z !== "function")
        K("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", Z !== null ? typeof Z : "null");
      var q = $ !== null && $ !== void 0 ? $.concat([X]) : null, H = P1;
      if (H |= aJ, (y1.mode & RZ) !== D0)
        H |= Q4;
      return pW(H, s6, tU.bind(null, Z, X), q);
    }
    function c9(X, Z, $) {
      if (typeof Z !== "function")
        K("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", Z !== null ? typeof Z : "null");
      var q = $ !== null && $ !== void 0 ? $.concat([X]) : null;
      return f9(P1, s6, tU.bind(null, Z, X), q);
    }
    function p9(X, Z) {}
    var d9 = p9;
    function _2(X, Z) {
      var $ = VZ(), q = Z === void 0 ? null : Z;
      return $.memoizedState = [X, q], X;
    }
    function l9(X, Z) {
      var $ = EX(), q = Z === void 0 ? null : Z, H = $.memoizedState;
      if (H !== null) {
        if (q !== null) {
          var G = H[1];
          if (L2(q, G))
            return H[0];
        }
      }
      return $.memoizedState = [X, q], X;
    }
    function T2(X, Z) {
      var $ = VZ(), q = Z === void 0 ? null : Z, H = X();
      return $.memoizedState = [H, q], H;
    }
    function n9(X, Z) {
      var $ = EX(), q = Z === void 0 ? null : Z, H = $.memoizedState;
      if (H !== null) {
        if (q !== null) {
          var G = H[1];
          if (L2(q, G))
            return H[0];
        }
      }
      var E = X();
      return $.memoizedState = [E, q], E;
    }
    function g2(X) {
      var Z = VZ();
      return Z.memoizedState = X, X;
    }
    function eU(X) {
      var Z = EX(), $ = o6, q = $.memoizedState;
      return XL(Z, q, X);
    }
    function QL(X) {
      var Z = EX();
      if (o6 === null)
        return Z.memoizedState = X, X;
      else {
        var $ = o6.memoizedState;
        return XL(Z, $, X);
      }
    }
    function XL(X, Z, $) {
      var q = !bB(E$);
      if (q) {
        if (!oQ($, Z)) {
          var H = rP();
          y1.lanes = i0(y1.lanes, H), KK(H), X.baseState = !0;
        }
        return Z;
      } else {
        if (X.baseState)
          X.baseState = !1, rW();
        return X.memoizedState = $, $;
      }
    }
    function X_(X, Z, $) {
      var q = pX();
      P8(aB(q, J4)), X(!0);
      var H = mW.transition;
      mW.transition = {};
      var G = mW.transition;
      mW.transition._updatedFibers = /* @__PURE__ */ new Set;
      try {
        X(!1), Z();
      } finally {
        if (P8(q), mW.transition = H, H === null && G._updatedFibers) {
          var E = G._updatedFibers.size;
          if (E > 10)
            W("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
          G._updatedFibers.clear();
        }
      }
    }
    function x2() {
      var X = h9(!1), Z = X[0], $ = X[1], q = X_.bind(null, $), H = VZ();
      return H.memoizedState = q, [Z, q];
    }
    function ZL() {
      var X = j2(), Z = X[0], $ = EX(), q = $.memoizedState;
      return [Z, q];
    }
    function JL() {
      var X = B2(), Z = X[0], $ = EX(), q = $.memoizedState;
      return [Z, q];
    }
    var $L = !1;
    function Z_() {
      return $L;
    }
    function v2() {
      var X = VZ(), Z = E5(), $ = Z.identifierPrefix, q;
      if (S8()) {
        var H = wI();
        q = ":" + $ + "R" + H;
        var G = uW++;
        if (G > 0)
          q += "H" + G.toString(32);
        q += ":";
      } else {
        var E = tI++;
        q = ":" + $ + "r" + E.toString(32) + ":";
      }
      return X.memoizedState = q, q;
    }
    function s9() {
      var X = EX(), Z = X.memoizedState;
      return Z;
    }
    function J_(X, Z, $) {
      if (typeof arguments[3] === "function")
        K("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var q = JJ(X), H = {
        lane: q,
        action: $,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YL(X))
        qL(Z, H);
      else {
        var G = xU(X, Z, H, q);
        if (G !== null) {
          var E = FQ();
          e6(G, X, q, E), WL(G, Z, q);
        }
      }
      KL(X, q);
    }
    function $_(X, Z, $) {
      if (typeof arguments[3] === "function")
        K("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var q = JJ(X), H = {
        lane: q,
        action: $,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YL(X))
        qL(Z, H);
      else {
        var G = X.alternate;
        if (X.lanes === s && (G === null || G.lanes === s)) {
          var E = Z.lastRenderedReducer;
          if (E !== null) {
            var P;
            P = H0.current, H0.current = oX;
            try {
              var A = Z.lastRenderedState, O = E(A, $);
              if (H.hasEagerState = !0, H.eagerState = O, oQ(O, A)) {
                pI(X, Z, H, q);
                return;
              }
            } catch (B) {} finally {
              H0.current = P;
            }
          }
        }
        var R = xU(X, Z, H, q);
        if (R !== null) {
          var C = FQ();
          e6(R, X, q, C), WL(R, Z, q);
        }
      }
      KL(X, q);
    }
    function YL(X) {
      var Z = X.alternate;
      return X === y1 || Z !== null && Z === y1;
    }
    function qL(X, Z) {
      bW = g9 = !0;
      var $ = X.pending;
      if ($ === null)
        Z.next = Z;
      else
        Z.next = $.next, $.next = Z;
      X.pending = Z;
    }
    function WL(X, Z, $) {
      if (aP($)) {
        var q = Z.lanes;
        q = iP(q, X.pendingLanes);
        var H = i0(q, $);
        Z.lanes = H, e7(X, H);
      }
    }
    function KL(X, Z, $) {
      V7(X, Z);
    }
    var o9 = {
      readContext: f6,
      useCallback: i8,
      useContext: i8,
      useEffect: i8,
      useImperativeHandle: i8,
      useInsertionEffect: i8,
      useLayoutEffect: i8,
      useMemo: i8,
      useReducer: i8,
      useRef: i8,
      useState: i8,
      useDebugValue: i8,
      useDeferredValue: i8,
      useTransition: i8,
      useMutableSource: i8,
      useSyncExternalStore: i8,
      useId: i8,
      unstable_isNewReconciler: F1
    }, HL = null, GL = null, zL = null, NL = null, SZ = null, oX = null, a9 = null;
    {
      var h2 = function() {
        K("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, h0 = function() {
        K("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      HL = {
        readContext: function(X) {
          return f6(X);
        },
        useCallback: function(X, Z) {
          return c = "useCallback", V1(), xY(Z), _2(X, Z);
        },
        useContext: function(X) {
          return c = "useContext", V1(), f6(X);
        },
        useEffect: function(X, Z) {
          return c = "useEffect", V1(), xY(Z), m9(X, Z);
        },
        useImperativeHandle: function(X, Z, $) {
          return c = "useImperativeHandle", V1(), xY($), I2(X, Z, $);
        },
        useInsertionEffect: function(X, Z) {
          return c = "useInsertionEffect", V1(), xY(Z), V2(X, Z);
        },
        useLayoutEffect: function(X, Z) {
          return c = "useLayoutEffect", V1(), xY(Z), S2(X, Z);
        },
        useMemo: function(X, Z) {
          c = "useMemo", V1(), xY(Z);
          var $ = H0.current;
          H0.current = SZ;
          try {
            return T2(X, Z);
          } finally {
            H0.current = $;
          }
        },
        useReducer: function(X, Z, $) {
          c = "useReducer", V1();
          var q = H0.current;
          H0.current = SZ;
          try {
            return w2(X, Z, $);
          } finally {
            H0.current = q;
          }
        },
        useRef: function(X) {
          return c = "useRef", V1(), C2(X);
        },
        useState: function(X) {
          c = "useState", V1();
          var Z = H0.current;
          H0.current = SZ;
          try {
            return h9(X);
          } finally {
            H0.current = Z;
          }
        },
        useDebugValue: function(X, Z) {
          return c = "useDebugValue", V1(), p9();
        },
        useDeferredValue: function(X) {
          return c = "useDeferredValue", V1(), g2(X);
        },
        useTransition: function() {
          return c = "useTransition", V1(), x2();
        },
        useMutableSource: function(X, Z, $) {
          return c = "useMutableSource", V1(), R2();
        },
        useSyncExternalStore: function(X, Z, $) {
          return c = "useSyncExternalStore", V1(), k2(X, Z, $);
        },
        useId: function() {
          return c = "useId", V1(), v2();
        },
        unstable_isNewReconciler: F1
      }, GL = {
        readContext: function(X) {
          return f6(X);
        },
        useCallback: function(X, Z) {
          return c = "useCallback", $0(), _2(X, Z);
        },
        useContext: function(X) {
          return c = "useContext", $0(), f6(X);
        },
        useEffect: function(X, Z) {
          return c = "useEffect", $0(), m9(X, Z);
        },
        useImperativeHandle: function(X, Z, $) {
          return c = "useImperativeHandle", $0(), I2(X, Z, $);
        },
        useInsertionEffect: function(X, Z) {
          return c = "useInsertionEffect", $0(), V2(X, Z);
        },
        useLayoutEffect: function(X, Z) {
          return c = "useLayoutEffect", $0(), S2(X, Z);
        },
        useMemo: function(X, Z) {
          c = "useMemo", $0();
          var $ = H0.current;
          H0.current = SZ;
          try {
            return T2(X, Z);
          } finally {
            H0.current = $;
          }
        },
        useReducer: function(X, Z, $) {
          c = "useReducer", $0();
          var q = H0.current;
          H0.current = SZ;
          try {
            return w2(X, Z, $);
          } finally {
            H0.current = q;
          }
        },
        useRef: function(X) {
          return c = "useRef", $0(), C2(X);
        },
        useState: function(X) {
          c = "useState", $0();
          var Z = H0.current;
          H0.current = SZ;
          try {
            return h9(X);
          } finally {
            H0.current = Z;
          }
        },
        useDebugValue: function(X, Z) {
          return c = "useDebugValue", $0(), p9();
        },
        useDeferredValue: function(X) {
          return c = "useDeferredValue", $0(), g2(X);
        },
        useTransition: function() {
          return c = "useTransition", $0(), x2();
        },
        useMutableSource: function(X, Z, $) {
          return c = "useMutableSource", $0(), R2();
        },
        useSyncExternalStore: function(X, Z, $) {
          return c = "useSyncExternalStore", $0(), k2(X, Z, $);
        },
        useId: function() {
          return c = "useId", $0(), v2();
        },
        unstable_isNewReconciler: F1
      }, zL = {
        readContext: function(X) {
          return f6(X);
        },
        useCallback: function(X, Z) {
          return c = "useCallback", $0(), l9(X, Z);
        },
        useContext: function(X) {
          return c = "useContext", $0(), f6(X);
        },
        useEffect: function(X, Z) {
          return c = "useEffect", $0(), dW(X, Z);
        },
        useImperativeHandle: function(X, Z, $) {
          return c = "useImperativeHandle", $0(), c9(X, Z, $);
        },
        useInsertionEffect: function(X, Z) {
          return c = "useInsertionEffect", $0(), b9(X, Z);
        },
        useLayoutEffect: function(X, Z) {
          return c = "useLayoutEffect", $0(), u9(X, Z);
        },
        useMemo: function(X, Z) {
          c = "useMemo", $0();
          var $ = H0.current;
          H0.current = oX;
          try {
            return n9(X, Z);
          } finally {
            H0.current = $;
          }
        },
        useReducer: function(X, Z, $) {
          c = "useReducer", $0();
          var q = H0.current;
          H0.current = oX;
          try {
            return M2(X, Z, $);
          } finally {
            H0.current = q;
          }
        },
        useRef: function(X) {
          return c = "useRef", $0(), y9();
        },
        useState: function(X) {
          c = "useState", $0();
          var Z = H0.current;
          H0.current = oX;
          try {
            return j2(X);
          } finally {
            H0.current = Z;
          }
        },
        useDebugValue: function(X, Z) {
          return c = "useDebugValue", $0(), d9();
        },
        useDeferredValue: function(X) {
          return c = "useDeferredValue", $0(), eU(X);
        },
        useTransition: function() {
          return c = "useTransition", $0(), ZL();
        },
        useMutableSource: function(X, Z, $) {
          return c = "useMutableSource", $0(), x9();
        },
        useSyncExternalStore: function(X, Z, $) {
          return c = "useSyncExternalStore", $0(), v9(X, Z);
        },
        useId: function() {
          return c = "useId", $0(), s9();
        },
        unstable_isNewReconciler: F1
      }, NL = {
        readContext: function(X) {
          return f6(X);
        },
        useCallback: function(X, Z) {
          return c = "useCallback", $0(), l9(X, Z);
        },
        useContext: function(X) {
          return c = "useContext", $0(), f6(X);
        },
        useEffect: function(X, Z) {
          return c = "useEffect", $0(), dW(X, Z);
        },
        useImperativeHandle: function(X, Z, $) {
          return c = "useImperativeHandle", $0(), c9(X, Z, $);
        },
        useInsertionEffect: function(X, Z) {
          return c = "useInsertionEffect", $0(), b9(X, Z);
        },
        useLayoutEffect: function(X, Z) {
          return c = "useLayoutEffect", $0(), u9(X, Z);
        },
        useMemo: function(X, Z) {
          c = "useMemo", $0();
          var $ = H0.current;
          H0.current = a9;
          try {
            return n9(X, Z);
          } finally {
            H0.current = $;
          }
        },
        useReducer: function(X, Z, $) {
          c = "useReducer", $0();
          var q = H0.current;
          H0.current = a9;
          try {
            return D2(X, Z, $);
          } finally {
            H0.current = q;
          }
        },
        useRef: function(X) {
          return c = "useRef", $0(), y9();
        },
        useState: function(X) {
          c = "useState", $0();
          var Z = H0.current;
          H0.current = a9;
          try {
            return B2(X);
          } finally {
            H0.current = Z;
          }
        },
        useDebugValue: function(X, Z) {
          return c = "useDebugValue", $0(), d9();
        },
        useDeferredValue: function(X) {
          return c = "useDeferredValue", $0(), QL(X);
        },
        useTransition: function() {
          return c = "useTransition", $0(), JL();
        },
        useMutableSource: function(X, Z, $) {
          return c = "useMutableSource", $0(), x9();
        },
        useSyncExternalStore: function(X, Z, $) {
          return c = "useSyncExternalStore", $0(), v9(X, Z);
        },
        useId: function() {
          return c = "useId", $0(), s9();
        },
        unstable_isNewReconciler: F1
      }, SZ = {
        readContext: function(X) {
          return h2(), f6(X);
        },
        useCallback: function(X, Z) {
          return c = "useCallback", h0(), V1(), _2(X, Z);
        },
        useContext: function(X) {
          return c = "useContext", h0(), V1(), f6(X);
        },
        useEffect: function(X, Z) {
          return c = "useEffect", h0(), V1(), m9(X, Z);
        },
        useImperativeHandle: function(X, Z, $) {
          return c = "useImperativeHandle", h0(), V1(), I2(X, Z, $);
        },
        useInsertionEffect: function(X, Z) {
          return c = "useInsertionEffect", h0(), V1(), V2(X, Z);
        },
        useLayoutEffect: function(X, Z) {
          return c = "useLayoutEffect", h0(), V1(), S2(X, Z);
        },
        useMemo: function(X, Z) {
          c = "useMemo", h0(), V1();
          var $ = H0.current;
          H0.current = SZ;
          try {
            return T2(X, Z);
          } finally {
            H0.current = $;
          }
        },
        useReducer: function(X, Z, $) {
          c = "useReducer", h0(), V1();
          var q = H0.current;
          H0.current = SZ;
          try {
            return w2(X, Z, $);
          } finally {
            H0.current = q;
          }
        },
        useRef: function(X) {
          return c = "useRef", h0(), V1(), C2(X);
        },
        useState: function(X) {
          c = "useState", h0(), V1();
          var Z = H0.current;
          H0.current = SZ;
          try {
            return h9(X);
          } finally {
            H0.current = Z;
          }
        },
        useDebugValue: function(X, Z) {
          return c = "useDebugValue", h0(), V1(), p9();
        },
        useDeferredValue: function(X) {
          return c = "useDeferredValue", h0(), V1(), g2(X);
        },
        useTransition: function() {
          return c = "useTransition", h0(), V1(), x2();
        },
        useMutableSource: function(X, Z, $) {
          return c = "useMutableSource", h0(), V1(), R2();
        },
        useSyncExternalStore: function(X, Z, $) {
          return c = "useSyncExternalStore", h0(), V1(), k2(X, Z, $);
        },
        useId: function() {
          return c = "useId", h0(), V1(), v2();
        },
        unstable_isNewReconciler: F1
      }, oX = {
        readContext: function(X) {
          return h2(), f6(X);
        },
        useCallback: function(X, Z) {
          return c = "useCallback", h0(), $0(), l9(X, Z);
        },
        useContext: function(X) {
          return c = "useContext", h0(), $0(), f6(X);
        },
        useEffect: function(X, Z) {
          return c = "useEffect", h0(), $0(), dW(X, Z);
        },
        useImperativeHandle: function(X, Z, $) {
          return c = "useImperativeHandle", h0(), $0(), c9(X, Z, $);
        },
        useInsertionEffect: function(X, Z) {
          return c = "useInsertionEffect", h0(), $0(), b9(X, Z);
        },
        useLayoutEffect: function(X, Z) {
          return c = "useLayoutEffect", h0(), $0(), u9(X, Z);
        },
        useMemo: function(X, Z) {
          c = "useMemo", h0(), $0();
          var $ = H0.current;
          H0.current = oX;
          try {
            return n9(X, Z);
          } finally {
            H0.current = $;
          }
        },
        useReducer: function(X, Z, $) {
          c = "useReducer", h0(), $0();
          var q = H0.current;
          H0.current = oX;
          try {
            return M2(X, Z, $);
          } finally {
            H0.current = q;
          }
        },
        useRef: function(X) {
          return c = "useRef", h0(), $0(), y9();
        },
        useState: function(X) {
          c = "useState", h0(), $0();
          var Z = H0.current;
          H0.current = oX;
          try {
            return j2(X);
          } finally {
            H0.current = Z;
          }
        },
        useDebugValue: function(X, Z) {
          return c = "useDebugValue", h0(), $0(), d9();
        },
        useDeferredValue: function(X) {
          return c = "useDeferredValue", h0(), $0(), eU(X);
        },
        useTransition: function() {
          return c = "useTransition", h0(), $0(), ZL();
        },
        useMutableSource: function(X, Z, $) {
          return c = "useMutableSource", h0(), $0(), x9();
        },
        useSyncExternalStore: function(X, Z, $) {
          return c = "useSyncExternalStore", h0(), $0(), v9(X, Z);
        },
        useId: function() {
          return c = "useId", h0(), $0(), s9();
        },
        unstable_isNewReconciler: F1
      }, a9 = {
        readContext: function(X) {
          return h2(), f6(X);
        },
        useCallback: function(X, Z) {
          return c = "useCallback", h0(), $0(), l9(X, Z);
        },
        useContext: function(X) {
          return c = "useContext", h0(), $0(), f6(X);
        },
        useEffect: function(X, Z) {
          return c = "useEffect", h0(), $0(), dW(X, Z);
        },
        useImperativeHandle: function(X, Z, $) {
          return c = "useImperativeHandle", h0(), $0(), c9(X, Z, $);
        },
        useInsertionEffect: function(X, Z) {
          return c = "useInsertionEffect", h0(), $0(), b9(X, Z);
        },
        useLayoutEffect: function(X, Z) {
          return c = "useLayoutEffect", h0(), $0(), u9(X, Z);
        },
        useMemo: function(X, Z) {
          c = "useMemo", h0(), $0();
          var $ = H0.current;
          H0.current = oX;
          try {
            return n9(X, Z);
          } finally {
            H0.current = $;
          }
        },
        useReducer: function(X, Z, $) {
          c = "useReducer", h0(), $0();
          var q = H0.current;
          H0.current = oX;
          try {
            return D2(X, Z, $);
          } finally {
            H0.current = q;
          }
        },
        useRef: function(X) {
          return c = "useRef", h0(), $0(), y9();
        },
        useState: function(X) {
          c = "useState", h0(), $0();
          var Z = H0.current;
          H0.current = oX;
          try {
            return B2(X);
          } finally {
            H0.current = Z;
          }
        },
        useDebugValue: function(X, Z) {
          return c = "useDebugValue", h0(), $0(), d9();
        },
        useDeferredValue: function(X) {
          return c = "useDeferredValue", h0(), $0(), QL(X);
        },
        useTransition: function() {
          return c = "useTransition", h0(), $0(), JL();
        },
        useMutableSource: function(X, Z, $) {
          return c = "useMutableSource", h0(), $0(), x9();
        },
        useSyncExternalStore: function(X, Z, $) {
          return c = "useSyncExternalStore", h0(), $0(), v9(X, Z);
        },
        useId: function() {
          return c = "useId", h0(), $0(), s9();
        },
        unstable_isNewReconciler: F1
      };
    }
    var e4 = m1.unstable_now, EL = 0, r9 = -1, lW = -1, i9 = -1, y2 = !1, t9 = !1;
    function FL() {
      return y2;
    }
    function Y_() {
      t9 = !0;
    }
    function q_() {
      y2 = !1, t9 = !1;
    }
    function W_() {
      y2 = t9, t9 = !1;
    }
    function PL() {
      return EL;
    }
    function AL() {
      EL = e4();
    }
    function f2(X) {
      if (lW = e4(), X.actualStartTime < 0)
        X.actualStartTime = e4();
    }
    function UL(X) {
      lW = -1;
    }
    function e9(X, Z) {
      if (lW >= 0) {
        var $ = e4() - lW;
        if (X.actualDuration += $, Z)
          X.selfBaseDuration = $;
        lW = -1;
      }
    }
    function IZ(X) {
      if (r9 >= 0) {
        var Z = e4() - r9;
        r9 = -1;
        var $ = X.return;
        while ($ !== null) {
          switch ($.tag) {
            case w:
              var q = $.stateNode;
              q.effectDuration += Z;
              return;
            case Z0:
              var H = $.stateNode;
              H.effectDuration += Z;
              return;
          }
          $ = $.return;
        }
      }
    }
    function m2(X) {
      if (i9 >= 0) {
        var Z = e4() - i9;
        i9 = -1;
        var $ = X.return;
        while ($ !== null) {
          switch ($.tag) {
            case w:
              var q = $.stateNode;
              if (q !== null)
                q.passiveEffectDuration += Z;
              return;
            case Z0:
              var H = $.stateNode;
              if (H !== null)
                H.passiveEffectDuration += Z;
              return;
          }
          $ = $.return;
        }
      }
    }
    function _Z() {
      r9 = e4();
    }
    function b2() {
      i9 = e4();
    }
    function u2(X) {
      var Z = X.child;
      while (Z)
        X.actualDuration += Z.actualDuration, Z = Z.sibling;
    }
    function aX(X, Z) {
      if (X && X.defaultProps) {
        var $ = $1({}, Z), q = X.defaultProps;
        for (var H in q)
          if ($[H] === void 0)
            $[H] = q[H];
        return $;
      }
      return Z;
    }
    var c2 = {}, p2, d2, l2, n2, s2, LL, Q5, o2, a2, r2, nW;
    {
      p2 = /* @__PURE__ */ new Set, d2 = /* @__PURE__ */ new Set, l2 = /* @__PURE__ */ new Set, n2 = /* @__PURE__ */ new Set, o2 = /* @__PURE__ */ new Set, s2 = /* @__PURE__ */ new Set, a2 = /* @__PURE__ */ new Set, r2 = /* @__PURE__ */ new Set, nW = /* @__PURE__ */ new Set;
      var OL = /* @__PURE__ */ new Set;
      Q5 = function(X, Z) {
        if (X === null || typeof X === "function")
          return;
        var $ = Z + "_" + X;
        if (!OL.has($))
          OL.add($), K("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", Z, X);
      }, LL = function(X, Z) {
        if (Z === void 0) {
          var $ = _0(X) || "Component";
          if (!s2.has($))
            s2.add($), K("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", $);
        }
      }, Object.defineProperty(c2, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(c2);
    }
    function i2(X, Z, $, q) {
      var H = X.memoizedState, G = $(q, H);
      {
        if (X.mode & R6) {
          E8(!0);
          try {
            G = $(q, H);
          } finally {
            E8(!1);
          }
        }
        LL(Z, G);
      }
      var E = G === null || G === void 0 ? H : $1({}, H, G);
      if (X.memoizedState = E, X.lanes === s) {
        var P = X.updateQueue;
        P.baseState = E;
      }
    }
    var t2 = {
      isMounted: ej,
      enqueueSetState: function(X, Z, $) {
        var q = YY(X), H = FQ(), G = JJ(q), E = G4(H, G);
        if (E.payload = Z, $ !== void 0 && $ !== null)
          Q5($, "setState"), E.callback = $;
        var P = a4(q, E, G);
        if (P !== null)
          e6(P, q, G, H), C9(P, q, G);
        V7(q, G);
      },
      enqueueReplaceState: function(X, Z, $) {
        var q = YY(X), H = FQ(), G = JJ(q), E = G4(H, G);
        if (E.tag = hU, E.payload = Z, $ !== void 0 && $ !== null)
          Q5($, "replaceState"), E.callback = $;
        var P = a4(q, E, G);
        if (P !== null)
          e6(P, q, G, H), C9(P, q, G);
        V7(q, G);
      },
      enqueueForceUpdate: function(X, Z) {
        var $ = YY(X), q = FQ(), H = JJ($), G = G4(q, H);
        if (G.tag = k9, Z !== void 0 && Z !== null)
          Q5(Z, "forceUpdate"), G.callback = Z;
        var E = a4($, G, H);
        if (E !== null)
          e6(E, $, H, q), C9(E, $, H);
        IB($, H);
      }
    };
    function wL(X, Z, $, q, H, G, E) {
      var P = X.stateNode;
      if (typeof P.shouldComponentUpdate === "function") {
        var A = P.shouldComponentUpdate(q, G, E);
        {
          if (X.mode & R6) {
            E8(!0);
            try {
              A = P.shouldComponentUpdate(q, G, E);
            } finally {
              E8(!1);
            }
          }
          if (A === void 0)
            K("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", _0(Z) || "Component");
        }
        return A;
      }
      if (Z.prototype && Z.prototype.isPureReactComponent)
        return !FW($, q) || !FW(H, G);
      return !0;
    }
    function K_(X, Z, $) {
      var q = X.stateNode;
      {
        var H = _0(Z) || "Component", G = q.render;
        if (!G)
          if (Z.prototype && typeof Z.prototype.render === "function")
            K("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", H);
          else
            K("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", H);
        if (q.getInitialState && !q.getInitialState.isReactClassApproved && !q.state)
          K("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", H);
        if (q.getDefaultProps && !q.getDefaultProps.isReactClassApproved)
          K("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", H);
        if (q.propTypes)
          K("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", H);
        if (q.contextType)
          K("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", H);
        {
          if (Z.childContextTypes && !nW.has(Z) && (X.mode & R6) === D0)
            nW.add(Z), K(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, H);
          if (Z.contextTypes && !nW.has(Z) && (X.mode & R6) === D0)
            nW.add(Z), K(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, H);
          if (q.contextTypes)
            K("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", H);
          if (Z.contextType && Z.contextTypes && !a2.has(Z))
            a2.add(Z), K("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", H);
        }
        if (typeof q.componentShouldUpdate === "function")
          K("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", H);
        if (Z.prototype && Z.prototype.isPureReactComponent && typeof q.shouldComponentUpdate !== "undefined")
          K("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", _0(Z) || "A pure component");
        if (typeof q.componentDidUnmount === "function")
          K("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", H);
        if (typeof q.componentDidReceiveProps === "function")
          K("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", H);
        if (typeof q.componentWillRecieveProps === "function")
          K("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", H);
        if (typeof q.UNSAFE_componentWillRecieveProps === "function")
          K("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", H);
        var E = q.props !== $;
        if (q.props !== void 0 && E)
          K("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", H, H);
        if (q.defaultProps)
          K("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", H, H);
        if (typeof q.getSnapshotBeforeUpdate === "function" && typeof q.componentDidUpdate !== "function" && !l2.has(Z))
          l2.add(Z), K("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", _0(Z));
        if (typeof q.getDerivedStateFromProps === "function")
          K("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", H);
        if (typeof q.getDerivedStateFromError === "function")
          K("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", H);
        if (typeof Z.getSnapshotBeforeUpdate === "function")
          K("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", H);
        var P = q.state;
        if (P && (typeof P !== "object" || B1(P)))
          K("%s.state: must be set to an object or null", H);
        if (typeof q.getChildContext === "function" && typeof Z.childContextTypes !== "object")
          K("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", H);
      }
    }
    function ML(X, Z) {
      Z.updater = t2, X.stateNode = Z, oj(Z, X), Z._reactInternalInstance = c2;
    }
    function DL(X, Z, $) {
      var q = !1, H = aQ, G = aQ, E = Z.contextType;
      if ("contextType" in Z) {
        var P = E === null || E !== void 0 && E.$$typeof === fX && E._context === void 0;
        if (!P && !r2.has(Z)) {
          r2.add(Z);
          var A = "";
          if (E === void 0)
            A = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
          else if (typeof E !== "object")
            A = " However, it is set to a " + typeof E + ".";
          else if (E.$$typeof === KQ)
            A = " Did you accidentally pass the Context.Provider instead?";
          else if (E._context !== void 0)
            A = " Did you accidentally pass the Context.Consumer instead?";
          else
            A = " However, it is set to an object with keys {" + Object.keys(E).join(", ") + "}.";
          K("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", _0(Z) || "Component", A);
        }
      }
      if (typeof E === "object" && E !== null)
        G = f6(E);
      else {
        H = DY(X, Z, !0);
        var O = Z.contextTypes;
        q = O !== null && O !== void 0, G = q ? RY(X, H) : aQ;
      }
      var R = new Z($, G);
      if (X.mode & R6) {
        E8(!0);
        try {
          R = new Z($, G);
        } finally {
          E8(!1);
        }
      }
      var C = X.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      ML(X, R);
      {
        if (typeof Z.getDerivedStateFromProps === "function" && C === null) {
          var B = _0(Z) || "Component";
          if (!d2.has(B))
            d2.add(B), K("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", B, R.state === null ? "null" : "undefined", B);
        }
        if (typeof Z.getDerivedStateFromProps === "function" || typeof R.getSnapshotBeforeUpdate === "function") {
          var x = null, v = null, f = null;
          if (typeof R.componentWillMount === "function" && R.componentWillMount.__suppressDeprecationWarning !== !0)
            x = "componentWillMount";
          else if (typeof R.UNSAFE_componentWillMount === "function")
            x = "UNSAFE_componentWillMount";
          if (typeof R.componentWillReceiveProps === "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0)
            v = "componentWillReceiveProps";
          else if (typeof R.UNSAFE_componentWillReceiveProps === "function")
            v = "UNSAFE_componentWillReceiveProps";
          if (typeof R.componentWillUpdate === "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0)
            f = "componentWillUpdate";
          else if (typeof R.UNSAFE_componentWillUpdate === "function")
            f = "UNSAFE_componentWillUpdate";
          if (x !== null || v !== null || f !== null) {
            var Y0 = _0(Z) || "Component", L0 = typeof Z.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            if (!n2.has(Y0))
              n2.add(Y0), K(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Y0, L0, x !== null ? `
  ` + x : "", v !== null ? `
  ` + v : "", f !== null ? `
  ` + f : "");
          }
        }
      }
      if (q)
        zU(X, H, G);
      return R;
    }
    function H_(X, Z) {
      var $ = Z.state;
      if (typeof Z.componentWillMount === "function")
        Z.componentWillMount();
      if (typeof Z.UNSAFE_componentWillMount === "function")
        Z.UNSAFE_componentWillMount();
      if ($ !== Z.state)
        K("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", j0(X) || "Component"), t2.enqueueReplaceState(Z, Z.state, null);
    }
    function RL(X, Z, $, q) {
      var H = Z.state;
      if (typeof Z.componentWillReceiveProps === "function")
        Z.componentWillReceiveProps($, q);
      if (typeof Z.UNSAFE_componentWillReceiveProps === "function")
        Z.UNSAFE_componentWillReceiveProps($, q);
      if (Z.state !== H) {
        {
          var G = j0(X) || "Component";
          if (!p2.has(G))
            p2.add(G), K("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", G);
        }
        t2.enqueueReplaceState(Z, Z.state, null);
      }
    }
    function e2(X, Z, $, q) {
      K_(X, Z, $);
      var H = X.stateNode;
      H.props = $, H.state = X.memoizedState, H.refs = {}, W2(X);
      var G = Z.contextType;
      if (typeof G === "object" && G !== null)
        H.context = f6(G);
      else {
        var E = DY(X, Z, !0);
        H.context = RY(X, E);
      }
      {
        if (H.state === $) {
          var P = _0(Z) || "Component";
          if (!o2.has(P))
            o2.add(P), K("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", P);
        }
        if (X.mode & R6)
          nX.recordLegacyContextWarning(X, H);
        nX.recordUnsafeLifecycleWarnings(X, H);
      }
      H.state = X.memoizedState;
      var A = Z.getDerivedStateFromProps;
      if (typeof A === "function")
        i2(X, Z, A, $), H.state = X.memoizedState;
      if (typeof Z.getDerivedStateFromProps !== "function" && typeof H.getSnapshotBeforeUpdate !== "function" && (typeof H.UNSAFE_componentWillMount === "function" || typeof H.componentWillMount === "function"))
        H_(X, H), V9(X, $, H, q), H.state = X.memoizedState;
      if (typeof H.componentDidMount === "function") {
        var O = P1;
        if (O |= aJ, (X.mode & RZ) !== D0)
          O |= Q4;
        X.flags |= O;
      }
    }
    function G_(X, Z, $, q) {
      var { stateNode: H, memoizedProps: G } = X;
      H.props = G;
      var E = H.context, P = Z.contextType, A = aQ;
      if (typeof P === "object" && P !== null)
        A = f6(P);
      else {
        var O = DY(X, Z, !0);
        A = RY(X, O);
      }
      var R = Z.getDerivedStateFromProps, C = typeof R === "function" || typeof H.getSnapshotBeforeUpdate === "function";
      if (!C && (typeof H.UNSAFE_componentWillReceiveProps === "function" || typeof H.componentWillReceiveProps === "function")) {
        if (G !== $ || E !== A)
          RL(X, H, $, A);
      }
      fU();
      var B = X.memoizedState, x = H.state = B;
      if (V9(X, $, H, q), x = X.memoizedState, G === $ && B === x && !H9() && !S9()) {
        if (typeof H.componentDidMount === "function") {
          var v = P1;
          if (v |= aJ, (X.mode & RZ) !== D0)
            v |= Q4;
          X.flags |= v;
        }
        return !1;
      }
      if (typeof R === "function")
        i2(X, Z, R, $), x = X.memoizedState;
      var f = S9() || wL(X, Z, G, $, B, x, A);
      if (f) {
        if (!C && (typeof H.UNSAFE_componentWillMount === "function" || typeof H.componentWillMount === "function")) {
          if (typeof H.componentWillMount === "function")
            H.componentWillMount();
          if (typeof H.UNSAFE_componentWillMount === "function")
            H.UNSAFE_componentWillMount();
        }
        if (typeof H.componentDidMount === "function") {
          var Y0 = P1;
          if (Y0 |= aJ, (X.mode & RZ) !== D0)
            Y0 |= Q4;
          X.flags |= Y0;
        }
      } else {
        if (typeof H.componentDidMount === "function") {
          var L0 = P1;
          if (L0 |= aJ, (X.mode & RZ) !== D0)
            L0 |= Q4;
          X.flags |= L0;
        }
        X.memoizedProps = $, X.memoizedState = x;
      }
      return H.props = $, H.state = x, H.context = A, f;
    }
    function z_(X, Z, $, q, H) {
      var G = Z.stateNode;
      yU(X, Z);
      var E = Z.memoizedProps, P = Z.type === Z.elementType ? E : aX(Z.type, E);
      G.props = P;
      var A = Z.pendingProps, O = G.context, R = $.contextType, C = aQ;
      if (typeof R === "object" && R !== null)
        C = f6(R);
      else {
        var B = DY(Z, $, !0);
        C = RY(Z, B);
      }
      var x = $.getDerivedStateFromProps, v = typeof x === "function" || typeof G.getSnapshotBeforeUpdate === "function";
      if (!v && (typeof G.UNSAFE_componentWillReceiveProps === "function" || typeof G.componentWillReceiveProps === "function")) {
        if (E !== A || O !== C)
          RL(Z, G, q, C);
      }
      fU();
      var f = Z.memoizedState, Y0 = G.state = f;
      if (V9(Z, q, G, H), Y0 = Z.memoizedState, E === A && f === Y0 && !H9() && !S9() && !S1) {
        if (typeof G.componentDidUpdate === "function") {
          if (E !== X.memoizedProps || f !== X.memoizedState)
            Z.flags |= P1;
        }
        if (typeof G.getSnapshotBeforeUpdate === "function") {
          if (E !== X.memoizedProps || f !== X.memoizedState)
            Z.flags |= sJ;
        }
        return !1;
      }
      if (typeof x === "function")
        i2(Z, $, x, q), Y0 = Z.memoizedState;
      var L0 = S9() || wL(Z, $, P, q, f, Y0, C) || S1;
      if (L0) {
        if (!v && (typeof G.UNSAFE_componentWillUpdate === "function" || typeof G.componentWillUpdate === "function")) {
          if (typeof G.componentWillUpdate === "function")
            G.componentWillUpdate(q, Y0, C);
          if (typeof G.UNSAFE_componentWillUpdate === "function")
            G.UNSAFE_componentWillUpdate(q, Y0, C);
        }
        if (typeof G.componentDidUpdate === "function")
          Z.flags |= P1;
        if (typeof G.getSnapshotBeforeUpdate === "function")
          Z.flags |= sJ;
      } else {
        if (typeof G.componentDidUpdate === "function") {
          if (E !== X.memoizedProps || f !== X.memoizedState)
            Z.flags |= P1;
        }
        if (typeof G.getSnapshotBeforeUpdate === "function") {
          if (E !== X.memoizedProps || f !== X.memoizedState)
            Z.flags |= sJ;
        }
        Z.memoizedProps = q, Z.memoizedState = Y0;
      }
      return G.props = q, G.state = Y0, G.context = C, L0;
    }
    function F$(X, Z) {
      return {
        value: X,
        source: Z,
        stack: C0(Z),
        digest: null
      };
    }
    function Qz(X, Z, $) {
      return {
        value: X,
        source: null,
        stack: $ != null ? $ : null,
        digest: Z != null ? Z : null
      };
    }
    function N_(X, Z) {
      return !0;
    }
    function Xz(X, Z) {
      try {
        var $ = N_(X, Z);
        if ($ === !1)
          return;
        var { value: q, source: H, stack: G } = Z, E = G !== null ? G : "";
        if (q != null && q._suppressLogging) {
          if (X.tag === F)
            return;
          console.error(q);
        }
        var P = H ? j0(H) : null, A = P ? "The above error occurred in the <" + P + "> component:" : "The above error occurred in one of your React components:", O;
        if (X.tag === w)
          O = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = j0(X) || "Anonymous";
          O = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var C = A + `
` + E + `

` + ("" + O);
        console.error(C);
      } catch (B) {
        setTimeout(function() {
          throw B;
        });
      }
    }
    var E_ = typeof WeakMap === "function" ? WeakMap : Map;
    function kL(X, Z, $) {
      var q = G4(i1, $);
      q.tag = Y2, q.payload = {
        element: null
      };
      var H = Z.value;
      return q.callback = function() {
        Gg(H), Xz(X, Z);
      }, q;
    }
    function Zz(X, Z, $) {
      var q = G4(i1, $);
      q.tag = Y2;
      var H = X.type.getDerivedStateFromError;
      if (typeof H === "function") {
        var G = Z.value;
        q.payload = function() {
          return H(G);
        }, q.callback = function() {
          hO(X), Xz(X, Z);
        };
      }
      var E = X.stateNode;
      if (E !== null && typeof E.componentDidCatch === "function")
        q.callback = function P() {
          if (hO(X), Xz(X, Z), typeof H !== "function")
            Kg(this);
          var { value: A, stack: O } = Z;
          if (this.componentDidCatch(A, {
            componentStack: O !== null ? O : ""
          }), typeof H !== "function") {
            if (!lQ(X.lanes, v0))
              K("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", j0(X) || "Unknown");
          }
        };
      return q;
    }
    function jL(X, Z, $) {
      var q = X.pingCache, H;
      if (q === null)
        q = X.pingCache = new E_, H = /* @__PURE__ */ new Set, q.set(Z, H);
      else if (H = q.get(Z), H === void 0)
        H = /* @__PURE__ */ new Set, q.set(Z, H);
      if (!H.has($)) {
        H.add($);
        var G = zg.bind(null, X, Z, $);
        if (cX)
          HK(X, $);
        Z.then(G, G);
      }
    }
    function F_(X, Z, $, q) {
      var H = X.updateQueue;
      if (H === null) {
        var G = /* @__PURE__ */ new Set;
        G.add($), X.updateQueue = G;
      } else
        H.add($);
    }
    function P_(X, Z) {
      var $ = X.tag;
      if ((X.mode & N1) === D0 && ($ === N || $ === d || $ === i)) {
        var q = X.alternate;
        if (q)
          X.updateQueue = q.updateQueue, X.memoizedState = q.memoizedState, X.lanes = q.lanes;
        else
          X.updateQueue = null, X.memoizedState = null;
      }
    }
    function BL(X) {
      var Z = X;
      do {
        if (Z.tag === n && rI(Z))
          return Z;
        Z = Z.return;
      } while (Z !== null);
      return null;
    }
    function CL(X, Z, $, q, H) {
      if ((X.mode & N1) === D0) {
        if (X === Z)
          X.flags |= zQ;
        else {
          if (X.flags |= C1, $.flags |= M7, $.flags &= ~(aj | lq), $.tag === F) {
            var G = $.alternate;
            if (G === null)
              $.tag = O0;
            else {
              var E = G4(i1, v0);
              E.tag = k9, a4($, E, v0);
            }
          }
          $.lanes = i0($.lanes, v0);
        }
        return X;
      }
      return X.flags |= zQ, X.lanes = H, X;
    }
    function A_(X, Z, $, q, H) {
      if ($.flags |= lq, cX)
        HK(X, H);
      if (q !== null && typeof q === "object" && typeof q.then === "function") {
        var G = q;
        if (P_($), S8() && $.mode & N1)
          LU();
        var E = BL(Z);
        if (E !== null) {
          if (E.flags &= ~tZ, CL(E, Z, $, X, H), E.mode & N1)
            jL(X, G, H);
          F_(E, X, G);
          return;
        } else {
          if (!mB(H)) {
            jL(X, G, H), hz();
            return;
          }
          var P = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          q = P;
        }
      } else if (S8() && $.mode & N1) {
        LU();
        var A = BL(Z);
        if (A !== null) {
          if ((A.flags & zQ) === B0)
            A.flags |= tZ;
          CL(A, Z, $, X, H), sG(F$(q, $));
          return;
        }
      }
      q = F$(q, $), Qg(q);
      var O = Z;
      do {
        switch (O.tag) {
          case w: {
            var R = q;
            O.flags |= zQ;
            var C = eq(H);
            O.lanes = i0(O.lanes, C);
            var B = kL(O, R, C);
            K2(O, B);
            return;
          }
          case F:
            var x = q, v = O.type, f = O.stateNode;
            if ((O.flags & C1) === B0 && (typeof v.getDerivedStateFromError === "function" || f !== null && typeof f.componentDidCatch === "function" && !CO(f))) {
              O.flags |= zQ;
              var Y0 = eq(H);
              O.lanes = i0(O.lanes, Y0);
              var L0 = Zz(O, x, Y0);
              K2(O, L0);
              return;
            }
            break;
        }
        O = O.return;
      } while (O !== null);
    }
    function U_() {
      return null;
    }
    var sW = Q.ReactCurrentOwner, rX = !1, Jz, oW, $z, Yz, qz, P$, Wz, X5, aW;
    Jz = {}, oW = {}, $z = {}, Yz = {}, qz = {}, P$ = !1, Wz = {}, X5 = {}, aW = {};
    function NQ(X, Z, $, q) {
      if (X === null)
        Z.child = IU(Z, null, $, q);
      else
        Z.child = CY(Z, X.child, $, q);
    }
    function L_(X, Z, $, q) {
      Z.child = CY(Z, X.child, null, q), Z.child = CY(Z, null, $, q);
    }
    function VL(X, Z, $, q, H) {
      if (Z.type !== Z.elementType) {
        var G = $.propTypes;
        if (G)
          dX(G, q, "prop", _0($));
      }
      var E = $.render, P = Z.ref, A, O;
      SY(Z, H), sq(Z);
      {
        if (sW.current = Z, pQ(!0), A = vY(X, Z, E, q, P, H), O = hY(), Z.mode & R6) {
          E8(!0);
          try {
            A = vY(X, Z, E, q, P, H), O = hY();
          } finally {
            E8(!1);
          }
        }
        pQ(!1);
      }
      if (KY(), X !== null && !rX)
        return dU(X, Z, H), z4(X, Z, H);
      if (S8() && O)
        uG(Z);
      return Z.flags |= qY, NQ(X, Z, A, H), Z.child;
    }
    function SL(X, Z, $, q, H) {
      if (X === null) {
        var G = $.type;
        if (Vg(G) && $.compare === null && $.defaultProps === void 0) {
          var E = G;
          return E = dY(G), Z.tag = i, Z.type = E, Gz(Z, G), IL(X, Z, E, q, H);
        }
        {
          var P = G.propTypes;
          if (P)
            dX(P, q, "prop", _0(G));
          if ($.defaultProps !== void 0) {
            var A = _0(G) || "Unknown";
            if (!aW[A])
              K("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", A), aW[A] = !0;
          }
        }
        var O = sz($.type, null, q, Z, Z.mode, H);
        return O.ref = Z.ref, O.return = Z, Z.child = O, O;
      }
      {
        var R = $.type, C = R.propTypes;
        if (C)
          dX(C, q, "prop", _0(R));
      }
      var B = X.child, x = Az(X, H);
      if (!x) {
        var v = B.memoizedProps, f = $.compare;
        if (f = f !== null ? f : FW, f(v, q) && X.ref === Z.ref)
          return z4(X, Z, H);
      }
      Z.flags |= qY;
      var Y0 = w$(B, q);
      return Y0.ref = Z.ref, Y0.return = Z, Z.child = Y0, Y0;
    }
    function IL(X, Z, $, q, H) {
      if (Z.type !== Z.elementType) {
        var G = Z.elementType;
        if (G.$$typeof === d6) {
          var E = G, P = E._payload, A = E._init;
          try {
            G = A(P);
          } catch (C) {
            G = null;
          }
          var O = G && G.propTypes;
          if (O)
            dX(O, q, "prop", _0(G));
        }
      }
      if (X !== null) {
        var R = X.memoizedProps;
        if (FW(R, q) && X.ref === Z.ref && Z.type === X.type) {
          if (rX = !1, Z.pendingProps = q = R, !Az(X, H))
            return Z.lanes = X.lanes, z4(X, Z, H);
          else if ((X.flags & M7) !== B0)
            rX = !0;
        }
      }
      return Kz(X, Z, $, q, H);
    }
    function _L(X, Z, $) {
      var q = Z.pendingProps, H = q.children, G = X !== null ? X.memoizedState : null;
      if (q.mode === "hidden" || w6)
        if ((Z.mode & N1) === D0) {
          var E = {
            baseLanes: s,
            cachePool: null,
            transitions: null
          };
          Z.memoizedState = E, F5(Z, $);
        } else if (!lQ($, dQ)) {
          var P = null, A;
          if (G !== null) {
            var O = G.baseLanes;
            A = i0(O, $);
          } else
            A = $;
          Z.lanes = Z.childLanes = x3(dQ);
          var R = {
            baseLanes: A,
            cachePool: P,
            transitions: null
          };
          return Z.memoizedState = R, Z.updateQueue = null, F5(Z, A), null;
        } else {
          var C = {
            baseLanes: s,
            cachePool: null,
            transitions: null
          };
          Z.memoizedState = C;
          var B = G !== null ? G.baseLanes : $;
          F5(Z, B);
        }
      else {
        var x;
        if (G !== null)
          x = i0(G.baseLanes, $), Z.memoizedState = null;
        else
          x = $;
        F5(Z, x);
      }
      return NQ(X, Z, H, $), Z.child;
    }
    function O_(X, Z, $) {
      var q = Z.pendingProps;
      return NQ(X, Z, q, $), Z.child;
    }
    function w_(X, Z, $) {
      var q = Z.pendingProps.children;
      return NQ(X, Z, q, $), Z.child;
    }
    function M_(X, Z, $) {
      {
        Z.flags |= P1;
        {
          var q = Z.stateNode;
          q.effectDuration = 0, q.passiveEffectDuration = 0;
        }
      }
      var H = Z.pendingProps, G = H.children;
      return NQ(X, Z, G, $), Z.child;
    }
    function TL(X, Z) {
      var $ = Z.ref;
      if (X === null && $ !== null || X !== null && X.ref !== $)
        Z.flags |= y4, Z.flags |= D7;
    }
    function Kz(X, Z, $, q, H) {
      if (Z.type !== Z.elementType) {
        var G = $.propTypes;
        if (G)
          dX(G, q, "prop", _0($));
      }
      var E;
      {
        var P = DY(Z, $, !0);
        E = RY(Z, P);
      }
      var A, O;
      SY(Z, H), sq(Z);
      {
        if (sW.current = Z, pQ(!0), A = vY(X, Z, $, q, E, H), O = hY(), Z.mode & R6) {
          E8(!0);
          try {
            A = vY(X, Z, $, q, E, H), O = hY();
          } finally {
            E8(!1);
          }
        }
        pQ(!1);
      }
      if (KY(), X !== null && !rX)
        return dU(X, Z, H), z4(X, Z, H);
      if (S8() && O)
        uG(Z);
      return Z.flags |= qY, NQ(X, Z, A, H), Z.child;
    }
    function gL(X, Z, $, q, H) {
      {
        switch (pg(Z)) {
          case !1: {
            var { stateNode: G, type: E } = Z, P = new E(Z.memoizedProps, G.context), A = P.state;
            G.updater.enqueueSetState(G, A, null);
            break;
          }
          case !0: {
            Z.flags |= C1, Z.flags |= zQ;
            var O = new Error("Simulated error coming from DevTools"), R = eq(H);
            Z.lanes = i0(Z.lanes, R);
            var C = Zz(Z, F$(O, Z), R);
            K2(Z, C);
            break;
          }
        }
        if (Z.type !== Z.elementType) {
          var B = $.propTypes;
          if (B)
            dX(B, q, "prop", _0($));
        }
      }
      var x;
      if (BZ($))
        x = !0, z9(Z);
      else
        x = !1;
      SY(Z, H);
      var v = Z.stateNode, f;
      if (v === null)
        J5(X, Z), DL(Z, $, q), e2(Z, $, q, H), f = !0;
      else if (X === null)
        f = G_(Z, $, q, H);
      else
        f = z_(X, Z, $, q, H);
      var Y0 = Hz(X, Z, $, f, x, H);
      {
        var L0 = Z.stateNode;
        if (f && L0.props !== q) {
          if (!P$)
            K("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", j0(Z) || "a component");
          P$ = !0;
        }
      }
      return Y0;
    }
    function Hz(X, Z, $, q, H, G) {
      TL(X, Z);
      var E = (Z.flags & C1) !== B0;
      if (!q && !E) {
        if (H)
          FU(Z, $, !1);
        return z4(X, Z, G);
      }
      var P = Z.stateNode;
      sW.current = Z;
      var A;
      if (E && typeof $.getDerivedStateFromError !== "function")
        A = null, UL();
      else {
        sq(Z);
        {
          if (pQ(!0), A = P.render(), Z.mode & R6) {
            E8(!0);
            try {
              P.render();
            } finally {
              E8(!1);
            }
          }
          pQ(!1);
        }
        KY();
      }
      if (Z.flags |= qY, X !== null && E)
        L_(X, Z, A, G);
      else
        NQ(X, Z, A, G);
      if (Z.memoizedState = P.state, H)
        FU(Z, $, !0);
      return Z.child;
    }
    function xL(X) {
      var Z = X.stateNode;
      if (Z.pendingContext)
        NU(X, Z.pendingContext, Z.pendingContext !== Z.context);
      else if (Z.context)
        NU(X, Z.context, !1);
      H2(X, Z.containerInfo);
    }
    function D_(X, Z, $) {
      if (xL(Z), X === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var { pendingProps: q, memoizedState: H } = Z, G = H.element;
      yU(X, Z), V9(Z, q, null, $);
      var { memoizedState: E, stateNode: P } = Z, A = E.element;
      if (H.isDehydrated) {
        var O = {
          element: A,
          isDehydrated: !1,
          cache: E.cache,
          pendingSuspenseBoundaries: E.pendingSuspenseBoundaries,
          transitions: E.transitions
        }, R = Z.updateQueue;
        if (R.baseState = O, Z.memoizedState = O, Z.flags & tZ) {
          var C = F$(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), Z);
          return vL(X, Z, A, $, C);
        } else if (A !== G) {
          var B = F$(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), Z);
          return vL(X, Z, A, $, B);
        } else {
          BI(Z);
          var x = IU(Z, null, A, $);
          Z.child = x;
          var v = x;
          while (v)
            v.flags = v.flags & ~y6 | eZ, v = v.sibling;
        }
      } else {
        if (BY(), A === G)
          return z4(X, Z, $);
        NQ(X, Z, A, $);
      }
      return Z.child;
    }
    function vL(X, Z, $, q, H) {
      return BY(), sG(H), Z.flags |= tZ, NQ(X, Z, $, q), Z.child;
    }
    function R_(X, Z, $) {
      if (uU(Z), X === null)
        nG(Z);
      var { type: q, pendingProps: H } = Z, G = X !== null ? X.memoizedProps : null, E = H.children, P = VG(q, H);
      if (P)
        E = null;
      else if (G !== null && VG(q, G))
        Z.flags |= dq;
      return TL(X, Z), NQ(X, Z, E, $), Z.child;
    }
    function k_(X, Z) {
      if (X === null)
        nG(Z);
      return null;
    }
    function j_(X, Z, $, q) {
      J5(X, Z);
      var H = Z.pendingProps, G = $, E = G._payload, P = G._init, A = P(E);
      Z.type = A;
      var O = Z.tag = Sg(A), R = aX(A, H), C;
      switch (O) {
        case N:
          return Gz(Z, A), Z.type = A = dY(A), C = Kz(null, Z, A, R, q), C;
        case F:
          return Z.type = A = uz(A), C = gL(null, Z, A, R, q), C;
        case d:
          return Z.type = A = cz(A), C = VL(null, Z, A, R, q), C;
        case r: {
          if (Z.type !== Z.elementType) {
            var B = A.propTypes;
            if (B)
              dX(B, R, "prop", _0(A));
          }
          return C = SL(null, Z, A, aX(A.type, R), q), C;
        }
      }
      var x = "";
      if (A !== null && typeof A === "object" && A.$$typeof === d6)
        x = " Did you wrap a component in React.lazy() more than once?";
      throw new Error("Element type is invalid. Received a promise that resolves to: " + A + ". " + ("Lazy element type must resolve to a class or function." + x));
    }
    function B_(X, Z, $, q, H) {
      J5(X, Z), Z.tag = F;
      var G;
      if (BZ($))
        G = !0, z9(Z);
      else
        G = !1;
      return SY(Z, H), DL(Z, $, q), e2(Z, $, q, H), Hz(null, Z, $, !0, G, H);
    }
    function C_(X, Z, $, q) {
      J5(X, Z);
      var H = Z.pendingProps, G;
      {
        var E = DY(Z, $, !1);
        G = RY(Z, E);
      }
      SY(Z, q);
      var P, A;
      sq(Z);
      {
        if ($.prototype && typeof $.prototype.render === "function") {
          var O = _0($) || "Unknown";
          if (!Jz[O])
            K("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", O, O), Jz[O] = !0;
        }
        if (Z.mode & R6)
          nX.recordLegacyContextWarning(Z, null);
        pQ(!0), sW.current = Z, P = vY(null, Z, $, H, G, q), A = hY(), pQ(!1);
      }
      if (KY(), Z.flags |= qY, typeof P === "object" && P !== null && typeof P.render === "function" && P.$$typeof === void 0) {
        var R = _0($) || "Unknown";
        if (!oW[R])
          K("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), oW[R] = !0;
      }
      if (typeof P === "object" && P !== null && typeof P.render === "function" && P.$$typeof === void 0) {
        {
          var C = _0($) || "Unknown";
          if (!oW[C])
            K("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), oW[C] = !0;
        }
        Z.tag = F, Z.memoizedState = null, Z.updateQueue = null;
        var B = !1;
        if (BZ($))
          B = !0, z9(Z);
        else
          B = !1;
        return Z.memoizedState = P.state !== null && P.state !== void 0 ? P.state : null, W2(Z), ML(Z, P), e2(Z, $, H, q), Hz(null, Z, $, !0, B, q);
      } else {
        if (Z.tag = N, Z.mode & R6) {
          E8(!0);
          try {
            P = vY(null, Z, $, H, G, q), A = hY();
          } finally {
            E8(!1);
          }
        }
        if (S8() && A)
          uG(Z);
        return NQ(null, Z, P, q), Gz(Z, $), Z.child;
      }
    }
    function Gz(X, Z) {
      {
        if (Z) {
          if (Z.childContextTypes)
            K("%s(...): childContextTypes cannot be defined on a function component.", Z.displayName || Z.name || "Component");
        }
        if (X.ref !== null) {
          var $ = "", q = bX();
          if (q)
            $ += `

Check the render method of \`` + q + "`.";
          var H = q || "", G = X._debugSource;
          if (G)
            H = G.fileName + ":" + G.lineNumber;
          if (!qz[H])
            qz[H] = !0, K("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", $);
        }
        if (Z.defaultProps !== void 0) {
          var E = _0(Z) || "Unknown";
          if (!aW[E])
            K("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", E), aW[E] = !0;
        }
        if (typeof Z.getDerivedStateFromProps === "function") {
          var P = _0(Z) || "Unknown";
          if (!Yz[P])
            K("%s: Function components do not support getDerivedStateFromProps.", P), Yz[P] = !0;
        }
        if (typeof Z.contextType === "object" && Z.contextType !== null) {
          var A = _0(Z) || "Unknown";
          if (!$z[A])
            K("%s: Function components do not support contextType.", A), $z[A] = !0;
        }
      }
    }
    var zz = {
      dehydrated: null,
      treeContext: null,
      retryLane: F8
    };
    function Nz(X) {
      return {
        baseLanes: X,
        cachePool: U_(),
        transitions: null
      };
    }
    function V_(X, Z) {
      var $ = null;
      return {
        baseLanes: i0(X.baseLanes, Z),
        cachePool: $,
        transitions: X.transitions
      };
    }
    function S_(X, Z, $, q) {
      if (Z !== null) {
        var H = Z.memoizedState;
        if (H === null)
          return !1;
      }
      return N2(X, fW);
    }
    function I_(X, Z) {
      return g3(X.childLanes, Z);
    }
    function hL(X, Z, $) {
      var q = Z.pendingProps;
      if (dg(Z))
        Z.flags |= C1;
      var H = sX.current, G = !1, E = (Z.flags & C1) !== B0;
      if (E || S_(H, X))
        G = !0, Z.flags &= ~C1;
      else if (X === null || X.memoizedState !== null)
        H = aI(H, pU);
      if (H = _Y(H), i4(Z, H), X === null) {
        nG(Z);
        var P = Z.memoizedState;
        if (P !== null) {
          var A = P.dehydrated;
          if (A !== null)
            return v_(Z, A);
        }
        var { children: O, fallback: R } = q;
        if (G) {
          var C = __(Z, O, R, $), B = Z.child;
          return B.memoizedState = Nz($), Z.memoizedState = zz, C;
        } else
          return Ez(Z, O);
      } else {
        var x = X.memoizedState;
        if (x !== null) {
          var v = x.dehydrated;
          if (v !== null)
            return h_(X, Z, E, q, v, x, $);
        }
        if (G) {
          var { fallback: f, children: Y0 } = q, L0 = g_(X, Z, Y0, f, $), F0 = Z.child, K1 = X.child.memoizedState;
          return F0.memoizedState = K1 === null ? Nz($) : V_(K1, $), F0.childLanes = I_(X, $), Z.memoizedState = zz, L0;
        } else {
          var H1 = q.children, _ = T_(X, Z, H1, $);
          return Z.memoizedState = null, _;
        }
      }
    }
    function Ez(X, Z, $) {
      var q = X.mode, H = {
        mode: "visible",
        children: Z
      }, G = Fz(H, q);
      return G.return = X, X.child = G, G;
    }
    function __(X, Z, $, q) {
      var { mode: H, child: G } = X, E = {
        mode: "hidden",
        children: Z
      }, P, A;
      if ((H & N1) === D0 && G !== null) {
        if (P = G, P.childLanes = s, P.pendingProps = E, X.mode & h1)
          P.actualDuration = 0, P.actualStartTime = -1, P.selfBaseDuration = 0, P.treeBaseDuration = 0;
        A = YJ($, H, q, null);
      } else
        P = Fz(E, H), A = YJ($, H, q, null);
      return P.return = X, A.return = X, P.sibling = A, X.child = P, A;
    }
    function Fz(X, Z, $) {
      return fO(X, Z, s, null);
    }
    function yL(X, Z) {
      return w$(X, Z);
    }
    function T_(X, Z, $, q) {
      var H = X.child, G = H.sibling, E = yL(H, {
        mode: "visible",
        children: $
      });
      if ((Z.mode & N1) === D0)
        E.lanes = q;
      if (E.return = Z, E.sibling = null, G !== null) {
        var P = Z.deletions;
        if (P === null)
          Z.deletions = [G], Z.flags |= nJ;
        else
          P.push(G);
      }
      return Z.child = E, E;
    }
    function g_(X, Z, $, q, H) {
      var G = Z.mode, E = X.child, P = E.sibling, A = {
        mode: "hidden",
        children: $
      }, O;
      if ((G & N1) === D0 && Z.child !== E) {
        var R = Z.child;
        if (O = R, O.childLanes = s, O.pendingProps = A, Z.mode & h1)
          O.actualDuration = 0, O.actualStartTime = -1, O.selfBaseDuration = E.selfBaseDuration, O.treeBaseDuration = E.treeBaseDuration;
        Z.deletions = null;
      } else
        O = yL(E, A), O.subtreeFlags = E.subtreeFlags & X4;
      var C;
      if (P !== null)
        C = w$(P, q);
      else
        C = YJ(q, G, H, null), C.flags |= y6;
      return C.return = Z, O.return = Z, O.sibling = C, Z.child = O, C;
    }
    function Z5(X, Z, $, q) {
      if (q !== null)
        sG(q);
      CY(Z, X.child, null, $);
      var H = Z.pendingProps, G = H.children, E = Ez(Z, G);
      return E.flags |= y6, Z.memoizedState = null, E;
    }
    function x_(X, Z, $, q, H) {
      var G = Z.mode, E = {
        mode: "visible",
        children: $
      }, P = Fz(E, G), A = YJ(q, G, H, null);
      if (A.flags |= y6, P.return = Z, A.return = Z, P.sibling = A, Z.child = P, (Z.mode & N1) !== D0)
        CY(Z, X.child, null, H);
      return A;
    }
    function v_(X, Z, $) {
      if ((X.mode & N1) === D0)
        K("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), X.lanes = x3(v0);
      else if (TG(Z))
        X.lanes = x3(eJ);
      else
        X.lanes = x3(dQ);
      return null;
    }
    function h_(X, Z, $, q, H, G, E) {
      if (!$) {
        if (kI(), (Z.mode & N1) === D0)
          return Z5(X, Z, E, null);
        if (TG(H)) {
          var P, A, O;
          {
            var R = uS(H);
            P = R.digest, A = R.message, O = R.stack;
          }
          var C;
          if (A)
            C = new Error(A);
          else
            C = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var B = Qz(C, P, O);
          return Z5(X, Z, E, B);
        }
        var x = lQ(E, X.childLanes);
        if (rX || x) {
          var v = E5();
          if (v !== null) {
            var f = sB(v, E);
            if (f !== F8 && f !== G.retryLane) {
              G.retryLane = f;
              var Y0 = i1;
              IQ(X, f), e6(v, X, f, Y0);
            }
          }
          hz();
          var L0 = Qz(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Z5(X, Z, E, L0);
        } else if (YU(H)) {
          Z.flags |= C1, Z.child = X.child;
          var F0 = Ng.bind(null, X);
          return cS(H, F0), null;
        } else {
          CI(Z, H, G.treeContext);
          var K1 = q.children, H1 = Ez(Z, K1);
          return H1.flags |= eZ, H1;
        }
      } else if (Z.flags & tZ) {
        Z.flags &= ~tZ;
        var _ = Qz(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return Z5(X, Z, E, _);
      } else if (Z.memoizedState !== null)
        return Z.child = X.child, Z.flags |= C1, null;
      else {
        var { children: b, fallback: T } = q, a = x_(X, Z, b, T, E), G0 = Z.child;
        return G0.memoizedState = Nz(E), Z.memoizedState = zz, a;
      }
    }
    function fL(X, Z, $) {
      X.lanes = i0(X.lanes, Z);
      var q = X.alternate;
      if (q !== null)
        q.lanes = i0(q.lanes, Z);
      J2(X.return, Z, $);
    }
    function y_(X, Z, $) {
      var q = Z;
      while (q !== null) {
        if (q.tag === n) {
          var H = q.memoizedState;
          if (H !== null)
            fL(q, $, X);
        } else if (q.tag === P0)
          fL(q, $, X);
        else if (q.child !== null) {
          q.child.return = q, q = q.child;
          continue;
        }
        if (q === X)
          return;
        while (q.sibling === null) {
          if (q.return === null || q.return === X)
            return;
          q = q.return;
        }
        q.sibling.return = q.return, q = q.sibling;
      }
    }
    function f_(X) {
      var Z = X, $ = null;
      while (Z !== null) {
        var q = Z.alternate;
        if (q !== null && T9(q) === null)
          $ = Z;
        Z = Z.sibling;
      }
      return $;
    }
    function m_(X) {
      if (X !== void 0 && X !== "forwards" && X !== "backwards" && X !== "together" && !Wz[X])
        if (Wz[X] = !0, typeof X === "string")
          switch (X.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              K('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', X, X.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              K('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', X, X.toLowerCase());
              break;
            }
            default:
              K('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', X);
              break;
          }
        else
          K('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', X);
    }
    function b_(X, Z) {
      if (X !== void 0 && !X5[X]) {
        if (X !== "collapsed" && X !== "hidden")
          X5[X] = !0, K('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', X);
        else if (Z !== "forwards" && Z !== "backwards")
          X5[X] = !0, K('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', X);
      }
    }
    function mL(X, Z) {
      {
        var $ = B1(X), q = !$ && typeof mX(X) === "function";
        if ($ || q) {
          var H = $ ? "array" : "iterable";
          return K("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", H, Z, H), !1;
        }
      }
      return !0;
    }
    function u_(X, Z) {
      if ((Z === "forwards" || Z === "backwards") && X !== void 0 && X !== null && X !== !1)
        if (B1(X)) {
          for (var $ = 0;$ < X.length; $++)
            if (!mL(X[$], $))
              return;
        } else {
          var q = mX(X);
          if (typeof q === "function") {
            var H = q.call(X);
            if (H) {
              var G = H.next(), E = 0;
              for (;!G.done; G = H.next()) {
                if (!mL(G.value, E))
                  return;
                E++;
              }
            }
          } else
            K('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', Z);
        }
    }
    function Pz(X, Z, $, q, H) {
      var G = X.memoizedState;
      if (G === null)
        X.memoizedState = {
          isBackwards: Z,
          rendering: null,
          renderingStartTime: 0,
          last: q,
          tail: $,
          tailMode: H
        };
      else
        G.isBackwards = Z, G.rendering = null, G.renderingStartTime = 0, G.last = q, G.tail = $, G.tailMode = H;
    }
    function bL(X, Z, $) {
      var q = Z.pendingProps, H = q.revealOrder, G = q.tail, E = q.children;
      m_(H), b_(G, H), u_(E, H), NQ(X, Z, E, $);
      var P = sX.current, A = N2(P, fW);
      if (A)
        P = E2(P, fW), Z.flags |= C1;
      else {
        var O = X !== null && (X.flags & C1) !== B0;
        if (O)
          y_(Z, Z.child, $);
        P = _Y(P);
      }
      if (i4(Z, P), (Z.mode & N1) === D0)
        Z.memoizedState = null;
      else
        switch (H) {
          case "forwards": {
            var R = f_(Z.child), C;
            if (R === null)
              C = Z.child, Z.child = null;
            else
              C = R.sibling, R.sibling = null;
            Pz(Z, !1, C, R, G);
            break;
          }
          case "backwards": {
            var B = null, x = Z.child;
            Z.child = null;
            while (x !== null) {
              var v = x.alternate;
              if (v !== null && T9(v) === null) {
                Z.child = x;
                break;
              }
              var f = x.sibling;
              x.sibling = B, B = x, x = f;
            }
            Pz(Z, !0, B, null, G);
            break;
          }
          case "together": {
            Pz(Z, !1, null, null, void 0);
            break;
          }
          default:
            Z.memoizedState = null;
        }
      return Z.child;
    }
    function c_(X, Z, $) {
      H2(Z, Z.stateNode.containerInfo);
      var q = Z.pendingProps;
      if (X === null)
        Z.child = CY(Z, null, q, $);
      else
        NQ(X, Z, q, $);
      return Z.child;
    }
    var uL = !1;
    function p_(X, Z, $) {
      var q = Z.type, H = q._context, G = Z.pendingProps, E = Z.memoizedProps, P = G.value;
      {
        if (!("value" in G)) {
          if (!uL)
            uL = !0, K("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?");
        }
        var A = Z.type.propTypes;
        if (A)
          dX(A, G, "prop", "Context.Provider");
      }
      if (gU(Z, H, P), E !== null) {
        var O = E.value;
        if (oQ(O, P)) {
          if (E.children === G.children && !H9())
            return z4(X, Z, $);
        } else
          bI(Z, H, $);
      }
      var R = G.children;
      return NQ(X, Z, R, $), Z.child;
    }
    var cL = !1;
    function d_(X, Z, $) {
      var q = Z.type;
      if (q._context === void 0) {
        if (q !== q.Consumer) {
          if (!cL)
            cL = !0, K("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
        }
      } else
        q = q._context;
      var H = Z.pendingProps, G = H.children;
      if (typeof G !== "function")
        K("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      SY(Z, $);
      var E = f6(q);
      sq(Z);
      var P;
      return sW.current = Z, pQ(!0), P = G(E), pQ(!1), KY(), Z.flags |= qY, NQ(X, Z, P, $), Z.child;
    }
    function rW() {
      rX = !0;
    }
    function J5(X, Z) {
      if ((Z.mode & N1) === D0) {
        if (X !== null)
          X.alternate = null, Z.alternate = null, Z.flags |= y6;
      }
    }
    function z4(X, Z, $) {
      if (X !== null)
        Z.dependencies = X.dependencies;
      if (UL(), KK(Z.lanes), !lQ($, Z.childLanes))
        return null;
      return fI(X, Z), Z.child;
    }
    function l_(X, Z, $) {
      {
        var q = Z.return;
        if (q === null)
          throw new Error("Cannot swap the root fiber.");
        if (X.alternate = null, Z.alternate = null, $.index = Z.index, $.sibling = Z.sibling, $.return = Z.return, $.ref = Z.ref, Z === q.child)
          q.child = $;
        else {
          var H = q.child;
          if (H === null)
            throw new Error("Expected parent to have a child.");
          while (H.sibling !== Z)
            if (H = H.sibling, H === null)
              throw new Error("Expected to find the previous sibling.");
          H.sibling = $;
        }
        var G = q.deletions;
        if (G === null)
          q.deletions = [X], q.flags |= nJ;
        else
          G.push(X);
        return $.flags |= y6, $;
      }
    }
    function Az(X, Z) {
      var $ = X.lanes;
      if (lQ($, Z))
        return !0;
      return !1;
    }
    function n_(X, Z, $) {
      switch (Z.tag) {
        case w:
          xL(Z);
          var q = Z.stateNode;
          BY();
          break;
        case k:
          uU(Z);
          break;
        case F: {
          var H = Z.type;
          if (BZ(H))
            z9(Z);
          break;
        }
        case D:
          H2(Z, Z.stateNode.containerInfo);
          break;
        case X0: {
          var G = Z.memoizedProps.value, E = Z.type._context;
          gU(Z, E, G);
          break;
        }
        case Z0:
          {
            var P = lQ($, Z.childLanes);
            if (P)
              Z.flags |= P1;
            {
              var A = Z.stateNode;
              A.effectDuration = 0, A.passiveEffectDuration = 0;
            }
          }
          break;
        case n: {
          var O = Z.memoizedState;
          if (O !== null) {
            if (O.dehydrated !== null)
              return i4(Z, _Y(sX.current)), Z.flags |= C1, null;
            var R = Z.child, C = R.childLanes;
            if (lQ($, C))
              return hL(X, Z, $);
            else {
              i4(Z, _Y(sX.current));
              var B = z4(X, Z, $);
              if (B !== null)
                return B.sibling;
              else
                return null;
            }
          } else
            i4(Z, _Y(sX.current));
          break;
        }
        case P0: {
          var x = (X.flags & C1) !== B0, v = lQ($, Z.childLanes);
          if (x) {
            if (v)
              return bL(X, Z, $);
            Z.flags |= C1;
          }
          var f = Z.memoizedState;
          if (f !== null)
            f.rendering = null, f.tail = null, f.lastEffect = null;
          if (i4(Z, sX.current), v)
            break;
          else
            return null;
        }
        case y0:
        case O1:
          return Z.lanes = s, _L(X, Z, $);
      }
      return z4(X, Z, $);
    }
    function pL(X, Z, $) {
      if (Z._debugNeedsRemount && X !== null)
        return l_(X, Z, sz(Z.type, Z.key, Z.pendingProps, Z._debugOwner || null, Z.mode, Z.lanes));
      if (X !== null) {
        var q = X.memoizedProps, H = Z.pendingProps;
        if (q !== H || H9() || Z.type !== X.type)
          rX = !0;
        else {
          var G = Az(X, $);
          if (!G && (Z.flags & C1) === B0)
            return rX = !1, n_(X, Z, $);
          if ((X.flags & M7) !== B0)
            rX = !0;
          else
            rX = !1;
        }
      } else if (rX = !1, S8() && LI(Z)) {
        var E = Z.index, P = OI();
        UU(Z, P, E);
      }
      switch (Z.lanes = s, Z.tag) {
        case L:
          return C_(X, Z, Z.type, $);
        case t: {
          var A = Z.elementType;
          return j_(X, Z, A, $);
        }
        case N: {
          var { type: O, pendingProps: R } = Z, C = Z.elementType === O ? R : aX(O, R);
          return Kz(X, Z, O, C, $);
        }
        case F: {
          var { type: B, pendingProps: x } = Z, v = Z.elementType === B ? x : aX(B, x);
          return gL(X, Z, B, v, $);
        }
        case w:
          return D_(X, Z, $);
        case k:
          return R_(X, Z, $);
        case I:
          return k_(X, Z);
        case n:
          return hL(X, Z, $);
        case D:
          return c_(X, Z, $);
        case d: {
          var { type: f, pendingProps: Y0 } = Z, L0 = Z.elementType === f ? Y0 : aX(f, Y0);
          return VL(X, Z, f, L0, $);
        }
        case h:
          return O_(X, Z, $);
        case o:
          return w_(X, Z, $);
        case Z0:
          return M_(X, Z, $);
        case X0:
          return p_(X, Z, $);
        case p:
          return d_(X, Z, $);
        case r: {
          var { type: F0, pendingProps: K1 } = Z, H1 = aX(F0, K1);
          if (Z.type !== Z.elementType) {
            var _ = F0.propTypes;
            if (_)
              dX(_, H1, "prop", _0(F0));
          }
          return H1 = aX(F0.type, H1), SL(X, Z, F0, H1, $);
        }
        case i:
          return IL(X, Z, Z.type, Z.pendingProps, $);
        case O0: {
          var { type: b, pendingProps: T } = Z, a = Z.elementType === b ? T : aX(b, T);
          return B_(X, Z, b, a, $);
        }
        case P0:
          return bL(X, Z, $);
        case A0:
          break;
        case y0:
          return _L(X, Z, $);
      }
      throw new Error("Unknown unit of work tag (" + Z.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function yY(X) {
      X.flags |= P1;
    }
    function dL(X) {
      X.flags |= y4, X.flags |= D7;
    }
    var lL, Uz, nL, sL;
    lL = function(X, Z, $, q) {
      var H = Z.child;
      while (H !== null) {
        if (H.tag === k || H.tag === I)
          PS(X, H.stateNode);
        else if (H.tag === D)
          ;
        else if (H.child !== null) {
          H.child.return = H, H = H.child;
          continue;
        }
        if (H === Z)
          return;
        while (H.sibling === null) {
          if (H.return === null || H.return === Z)
            return;
          H = H.return;
        }
        H.sibling.return = H.return, H = H.sibling;
      }
    }, Uz = function(X, Z) {}, nL = function(X, Z, $, q, H) {
      var G = X.memoizedProps;
      if (G === q)
        return;
      var E = Z.stateNode, P = G2(), A = US(E, $, G, q, H, P);
      if (Z.updateQueue = A, A)
        yY(Z);
    }, sL = function(X, Z, $, q) {
      if ($ !== q)
        yY(Z);
    };
    function iW(X, Z) {
      if (S8())
        return;
      switch (X.tailMode) {
        case "hidden": {
          var $ = X.tail, q = null;
          while ($ !== null) {
            if ($.alternate !== null)
              q = $;
            $ = $.sibling;
          }
          if (q === null)
            X.tail = null;
          else
            q.sibling = null;
          break;
        }
        case "collapsed": {
          var H = X.tail, G = null;
          while (H !== null) {
            if (H.alternate !== null)
              G = H;
            H = H.sibling;
          }
          if (G === null)
            if (!Z && X.tail !== null)
              X.tail.sibling = null;
            else
              X.tail = null;
          else
            G.sibling = null;
          break;
        }
      }
    }
    function _8(X) {
      var Z = X.alternate !== null && X.alternate.child === X.child, $ = s, q = B0;
      if (!Z) {
        if ((X.mode & h1) !== D0) {
          var { actualDuration: H, selfBaseDuration: G, child: E } = X;
          while (E !== null)
            $ = i0($, i0(E.lanes, E.childLanes)), q |= E.subtreeFlags, q |= E.flags, H += E.actualDuration, G += E.treeBaseDuration, E = E.sibling;
          X.actualDuration = H, X.treeBaseDuration = G;
        } else {
          var P = X.child;
          while (P !== null)
            $ = i0($, i0(P.lanes, P.childLanes)), q |= P.subtreeFlags, q |= P.flags, P.return = X, P = P.sibling;
        }
        X.subtreeFlags |= q;
      } else {
        if ((X.mode & h1) !== D0) {
          var { selfBaseDuration: A, child: O } = X;
          while (O !== null)
            $ = i0($, i0(O.lanes, O.childLanes)), q |= O.subtreeFlags & X4, q |= O.flags & X4, A += O.treeBaseDuration, O = O.sibling;
          X.treeBaseDuration = A;
        } else {
          var R = X.child;
          while (R !== null)
            $ = i0($, i0(R.lanes, R.childLanes)), q |= R.subtreeFlags & X4, q |= R.flags & X4, R.return = X, R = R.sibling;
        }
        X.subtreeFlags |= q;
      }
      return X.childLanes = $, Z;
    }
    function s_(X, Z, $) {
      if (TI() && (Z.mode & N1) !== D0 && (Z.flags & C1) === B0)
        return kU(Z), BY(), Z.flags |= tZ | lq | zQ, !1;
      var q = A9(Z);
      if ($ !== null && $.dehydrated !== null)
        if (X === null) {
          if (!q)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (II(Z), _8(Z), (Z.mode & h1) !== D0) {
            var H = $ !== null;
            if (H) {
              var G = Z.child;
              if (G !== null)
                Z.treeBaseDuration -= G.treeBaseDuration;
            }
          }
          return !1;
        } else {
          if (BY(), (Z.flags & C1) === B0)
            Z.memoizedState = null;
          if (Z.flags |= P1, _8(Z), (Z.mode & h1) !== D0) {
            var E = $ !== null;
            if (E) {
              var P = Z.child;
              if (P !== null)
                Z.treeBaseDuration -= P.treeBaseDuration;
            }
          }
          return !1;
        }
      else
        return jU(), !0;
    }
    function oL(X, Z, $) {
      var q = Z.pendingProps;
      switch (cG(Z), Z.tag) {
        case L:
        case t:
        case i:
        case N:
        case d:
        case h:
        case o:
        case Z0:
        case p:
        case r:
          return _8(Z), null;
        case F: {
          var H = Z.type;
          if (BZ(H))
            G9(Z);
          return _8(Z), null;
        }
        case w: {
          var G = Z.stateNode;
          if (IY(Z), fG(Z), P2(), G.pendingContext)
            G.context = G.pendingContext, G.pendingContext = null;
          if (X === null || X.child === null) {
            var E = A9(Z);
            if (E)
              yY(Z);
            else if (X !== null) {
              var P = X.memoizedState;
              if (!P.isDehydrated || (Z.flags & tZ) !== B0)
                Z.flags |= sJ, jU();
            }
          }
          return Uz(X, Z), _8(Z), null;
        }
        case k: {
          z2(Z);
          var A = bU(), O = Z.type;
          if (X !== null && Z.stateNode != null) {
            if (nL(X, Z, O, q, A), X.ref !== Z.ref)
              dL(Z);
          } else {
            if (!q) {
              if (Z.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return _8(Z), null;
            }
            var R = G2(), C = A9(Z);
            if (C) {
              if (VI(Z, A, R))
                yY(Z);
            } else {
              var B = FS(O, q, A, R, Z);
              if (lL(B, Z, !1, !1), Z.stateNode = B, AS(B, O, q, A))
                yY(Z);
            }
            if (Z.ref !== null)
              dL(Z);
          }
          return _8(Z), null;
        }
        case I: {
          var x = q;
          if (X && Z.stateNode != null) {
            var v = X.memoizedProps;
            sL(X, Z, v, x);
          } else {
            if (typeof x !== "string") {
              if (Z.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            }
            var f = bU(), Y0 = G2(), L0 = A9(Z);
            if (L0) {
              if (SI(Z))
                yY(Z);
            } else
              Z.stateNode = LS(x, f, Y0, Z);
          }
          return _8(Z), null;
        }
        case n: {
          TY(Z);
          var F0 = Z.memoizedState;
          if (X === null || X.memoizedState !== null && X.memoizedState.dehydrated !== null) {
            var K1 = s_(X, Z, F0);
            if (!K1)
              if (Z.flags & zQ)
                return Z;
              else
                return null;
          }
          if ((Z.flags & C1) !== B0) {
            if (Z.lanes = $, (Z.mode & h1) !== D0)
              u2(Z);
            return Z;
          }
          var H1 = F0 !== null, _ = X !== null && X.memoizedState !== null;
          if (H1 !== _) {
            if (H1) {
              var b = Z.child;
              if (b.flags |= oJ, (Z.mode & N1) !== D0) {
                var T = X === null && (Z.memoizedProps.unstable_avoidThisFallback !== !0 || !q6);
                if (T || N2(sX.current, pU))
                  eT();
                else
                  hz();
              }
            }
          }
          var a = Z.updateQueue;
          if (a !== null)
            Z.flags |= P1;
          if (_8(Z), (Z.mode & h1) !== D0) {
            if (H1) {
              var G0 = Z.child;
              if (G0 !== null)
                Z.treeBaseDuration -= G0.treeBaseDuration;
            }
          }
          return null;
        }
        case D:
          if (IY(Z), Uz(X, Z), X === null)
            zI(Z.stateNode.containerInfo);
          return _8(Z), null;
        case X0:
          var W0 = Z.type._context;
          return Z2(W0, Z), _8(Z), null;
        case O0: {
          var S0 = Z.type;
          if (BZ(S0))
            G9(Z);
          return _8(Z), null;
        }
        case P0: {
          TY(Z);
          var m0 = Z.memoizedState;
          if (m0 === null)
            return _8(Z), null;
          var f1 = (Z.flags & C1) !== B0, M1 = m0.rendering;
          if (M1 === null)
            if (!f1) {
              var C6 = Xg() && (X === null || (X.flags & C1) === B0);
              if (!C6) {
                var D1 = Z.child;
                while (D1 !== null) {
                  var k6 = T9(D1);
                  if (k6 !== null) {
                    f1 = !0, Z.flags |= C1, iW(m0, !1);
                    var t8 = k6.updateQueue;
                    if (t8 !== null)
                      Z.updateQueue = t8, Z.flags |= P1;
                    return Z.subtreeFlags = B0, mI(Z, $), i4(Z, E2(sX.current, fW)), Z.child;
                  }
                  D1 = D1.sibling;
                }
              }
              if (m0.tail !== null && N8() > AO())
                Z.flags |= C1, f1 = !0, iW(m0, !1), Z.lanes = nP;
            } else
              iW(m0, !1);
          else {
            if (!f1) {
              var h8 = T9(M1);
              if (h8 !== null) {
                Z.flags |= C1, f1 = !0;
                var iQ = h8.updateQueue;
                if (iQ !== null)
                  Z.updateQueue = iQ, Z.flags |= P1;
                if (iW(m0, !0), m0.tail === null && m0.tailMode === "hidden" && !M1.alternate && !S8())
                  return _8(Z), null;
              } else if (N8() * 2 - m0.renderingStartTime > AO() && $ !== dQ)
                Z.flags |= C1, f1 = !0, iW(m0, !1), Z.lanes = nP;
            }
            if (m0.isBackwards)
              M1.sibling = Z.child, Z.child = M1;
            else {
              var PQ = m0.last;
              if (PQ !== null)
                PQ.sibling = M1;
              else
                Z.child = M1;
              m0.last = M1;
            }
          }
          if (m0.tail !== null) {
            var AQ = m0.tail;
            m0.rendering = AQ, m0.tail = AQ.sibling, m0.renderingStartTime = N8(), AQ.sibling = null;
            var e8 = sX.current;
            if (f1)
              e8 = E2(e8, fW);
            else
              e8 = _Y(e8);
            return i4(Z, e8), AQ;
          }
          return _8(Z), null;
        }
        case A0:
          break;
        case y0:
        case O1: {
          vz(Z);
          var A4 = Z.memoizedState, lY = A4 !== null;
          if (X !== null) {
            var EK = X.memoizedState, xZ = EK !== null;
            if (xZ !== lY && !w6)
              Z.flags |= oJ;
          }
          if (!lY || (Z.mode & N1) === D0)
            _8(Z);
          else if (lQ(gZ, dQ)) {
            if (_8(Z), Z.subtreeFlags & (y6 | P1))
              Z.flags |= oJ;
          }
          return null;
        }
        case r0:
          return null;
        case x1:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + Z.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function o_(X, Z, $) {
      switch (cG(Z), Z.tag) {
        case F: {
          var q = Z.type;
          if (BZ(q))
            G9(Z);
          var H = Z.flags;
          if (H & zQ) {
            if (Z.flags = H & ~zQ | C1, (Z.mode & h1) !== D0)
              u2(Z);
            return Z;
          }
          return null;
        }
        case w: {
          var G = Z.stateNode;
          IY(Z), fG(Z), P2();
          var E = Z.flags;
          if ((E & zQ) !== B0 && (E & C1) === B0)
            return Z.flags = E & ~zQ | C1, Z;
          return null;
        }
        case k:
          return z2(Z), null;
        case n: {
          TY(Z);
          var P = Z.memoizedState;
          if (P !== null && P.dehydrated !== null) {
            if (Z.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            BY();
          }
          var A = Z.flags;
          if (A & zQ) {
            if (Z.flags = A & ~zQ | C1, (Z.mode & h1) !== D0)
              u2(Z);
            return Z;
          }
          return null;
        }
        case P0:
          return TY(Z), null;
        case D:
          return IY(Z), null;
        case X0:
          var O = Z.type._context;
          return Z2(O, Z), null;
        case y0:
        case O1:
          return vz(Z), null;
        case r0:
          return null;
        default:
          return null;
      }
    }
    function aL(X, Z, $) {
      switch (cG(Z), Z.tag) {
        case F: {
          var q = Z.type.childContextTypes;
          if (q !== null && q !== void 0)
            G9(Z);
          break;
        }
        case w: {
          var H = Z.stateNode;
          IY(Z), fG(Z), P2();
          break;
        }
        case k: {
          z2(Z);
          break;
        }
        case D:
          IY(Z);
          break;
        case n:
          TY(Z);
          break;
        case P0:
          TY(Z);
          break;
        case X0:
          var G = Z.type._context;
          Z2(G, Z);
          break;
        case y0:
        case O1:
          vz(Z);
          break;
      }
    }
    var rL = null;
    rL = /* @__PURE__ */ new Set;
    var $5 = !1, T8 = !1, a_ = typeof WeakSet === "function" ? WeakSet : Set, N0 = null, fY = null, mY = null;
    function r_(X) {
      L7(null, function() {
        throw X;
      }), O7();
    }
    var i_ = function(X, Z) {
      if (Z.props = X.memoizedProps, Z.state = X.memoizedState, X.mode & h1)
        try {
          _Z(), Z.componentWillUnmount();
        } finally {
          IZ(X);
        }
      else
        Z.componentWillUnmount();
    };
    function iL(X, Z) {
      try {
        QJ(s6, X);
      } catch ($) {
        a1(X, Z, $);
      }
    }
    function Lz(X, Z, $) {
      try {
        i_(X, $);
      } catch (q) {
        a1(X, Z, q);
      }
    }
    function t_(X, Z, $) {
      try {
        $.componentDidMount();
      } catch (q) {
        a1(X, Z, q);
      }
    }
    function tL(X, Z) {
      try {
        XO(X);
      } catch ($) {
        a1(X, Z, $);
      }
    }
    function bY(X, Z) {
      var $ = X.ref;
      if ($ !== null)
        if (typeof $ === "function") {
          var q;
          try {
            if (j6 && $8 && X.mode & h1)
              try {
                _Z(), q = $(null);
              } finally {
                IZ(X);
              }
            else
              q = $(null);
          } catch (H) {
            a1(X, Z, H);
          }
          if (typeof q === "function")
            K("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", j0(X));
        } else
          $.current = null;
    }
    function Y5(X, Z, $) {
      try {
        $();
      } catch (q) {
        a1(X, Z, q);
      }
    }
    var eL = null, QO = !1;
    function e_(X, Z) {
      eL = NS(X.containerInfo), N0 = Z, QT();
      var $ = QO;
      return QO = !1, eL = null, $;
    }
    function QT() {
      while (N0 !== null) {
        var X = N0, Z = X.child;
        if ((X.subtreeFlags & k7) !== B0 && Z !== null)
          Z.return = X, N0 = Z;
        else
          XT();
      }
    }
    function XT() {
      while (N0 !== null) {
        var X = N0;
        A6(X);
        try {
          ZT(X);
        } catch ($) {
          a1(X, X.return, $);
        }
        z8();
        var Z = X.sibling;
        if (Z !== null) {
          Z.return = X.return, N0 = Z;
          return;
        }
        N0 = X.return;
      }
    }
    function ZT(X) {
      var { alternate: Z, flags: $ } = X;
      if (($ & sJ) !== B0) {
        switch (A6(X), X.tag) {
          case N:
          case d:
          case i:
            break;
          case F: {
            if (Z !== null) {
              var { memoizedProps: q, memoizedState: H } = Z, G = X.stateNode;
              if (X.type === X.elementType && !P$) {
                if (G.props !== X.memoizedProps)
                  K("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", j0(X) || "instance");
                if (G.state !== X.memoizedState)
                  K("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", j0(X) || "instance");
              }
              var E = G.getSnapshotBeforeUpdate(X.elementType === X.type ? q : aX(X.type, q), H);
              {
                var P = rL;
                if (E === void 0 && !P.has(X.type))
                  P.add(X.type), K("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", j0(X));
              }
              G.__reactInternalSnapshotBeforeUpdate = E;
            }
            break;
          }
          case w: {
            {
              var A = X.stateNode;
              yS(A.containerInfo);
            }
            break;
          }
          case k:
          case I:
          case D:
          case O0:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        z8();
      }
    }
    function iX(X, Z, $) {
      var q = Z.updateQueue, H = q !== null ? q.lastEffect : null;
      if (H !== null) {
        var G = H.next, E = G;
        do {
          if ((E.tag & X) === X) {
            var P = E.destroy;
            if (E.destroy = void 0, P !== void 0) {
              if ((X & I8) !== _Q)
                LB(Z);
              else if ((X & s6) !== _Q)
                uP(Z);
              if ((X & CZ) !== _Q)
                GK(!0);
              if (Y5(Z, $, P), (X & CZ) !== _Q)
                GK(!1);
              if ((X & I8) !== _Q)
                OB();
              else if ((X & s6) !== _Q)
                cP();
            }
          }
          E = E.next;
        } while (E !== G);
      }
    }
    function QJ(X, Z) {
      var $ = Z.updateQueue, q = $ !== null ? $.lastEffect : null;
      if (q !== null) {
        var H = q.next, G = H;
        do {
          if ((G.tag & X) === X) {
            if ((X & I8) !== _Q)
              AB(Z);
            else if ((X & s6) !== _Q)
              wB(Z);
            var E = G.create;
            if ((X & CZ) !== _Q)
              GK(!0);
            if (G.destroy = E(), (X & CZ) !== _Q)
              GK(!1);
            if ((X & I8) !== _Q)
              UB();
            else if ((X & s6) !== _Q)
              MB();
            {
              var P = G.destroy;
              if (P !== void 0 && typeof P !== "function") {
                var A = void 0;
                if ((G.tag & s6) !== B0)
                  A = "useLayoutEffect";
                else if ((G.tag & CZ) !== B0)
                  A = "useInsertionEffect";
                else
                  A = "useEffect";
                var O = void 0;
                if (P === null)
                  O = " You returned null. If your effect does not require clean up, return undefined (or nothing).";
                else if (typeof P.then === "function")
                  O = `

It looks like you wrote ` + A + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + A + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`;
                else
                  O = " You returned: " + P;
                K("%s must not return anything besides a function, which is used for clean-up.%s", A, O);
              }
            }
          }
          G = G.next;
        } while (G !== H);
      }
    }
    function JT(X, Z) {
      if ((Z.flags & P1) !== B0)
        switch (Z.tag) {
          case Z0: {
            var $ = Z.stateNode.passiveEffectDuration, q = Z.memoizedProps, H = q.id, G = q.onPostCommit, E = PL(), P = Z.alternate === null ? "mount" : "update";
            if (FL())
              P = "nested-update";
            if (typeof G === "function")
              G(H, P, $, E);
            var A = Z.return;
            Q:
              while (A !== null) {
                switch (A.tag) {
                  case w:
                    var O = A.stateNode;
                    O.passiveEffectDuration += $;
                    break Q;
                  case Z0:
                    var R = A.stateNode;
                    R.passiveEffectDuration += $;
                    break Q;
                }
                A = A.return;
              }
            break;
          }
        }
    }
    function $T(X, Z, $, q) {
      if (($.flags & nq) !== B0)
        switch ($.tag) {
          case N:
          case d:
          case i: {
            if (!T8)
              if ($.mode & h1)
                try {
                  _Z(), QJ(s6 | n6, $);
                } finally {
                  IZ($);
                }
              else
                QJ(s6 | n6, $);
            break;
          }
          case F: {
            var H = $.stateNode;
            if ($.flags & P1) {
              if (!T8)
                if (Z === null) {
                  if ($.type === $.elementType && !P$) {
                    if (H.props !== $.memoizedProps)
                      K("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", j0($) || "instance");
                    if (H.state !== $.memoizedState)
                      K("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", j0($) || "instance");
                  }
                  if ($.mode & h1)
                    try {
                      _Z(), H.componentDidMount();
                    } finally {
                      IZ($);
                    }
                  else
                    H.componentDidMount();
                } else {
                  var G = $.elementType === $.type ? Z.memoizedProps : aX($.type, Z.memoizedProps), E = Z.memoizedState;
                  if ($.type === $.elementType && !P$) {
                    if (H.props !== $.memoizedProps)
                      K("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", j0($) || "instance");
                    if (H.state !== $.memoizedState)
                      K("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", j0($) || "instance");
                  }
                  if ($.mode & h1)
                    try {
                      _Z(), H.componentDidUpdate(G, E, H.__reactInternalSnapshotBeforeUpdate);
                    } finally {
                      IZ($);
                    }
                  else
                    H.componentDidUpdate(G, E, H.__reactInternalSnapshotBeforeUpdate);
                }
            }
            var P = $.updateQueue;
            if (P !== null) {
              if ($.type === $.elementType && !P$) {
                if (H.props !== $.memoizedProps)
                  K("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", j0($) || "instance");
                if (H.state !== $.memoizedState)
                  K("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", j0($) || "instance");
              }
              mU($, P, H);
            }
            break;
          }
          case w: {
            var A = $.updateQueue;
            if (A !== null) {
              var O = null;
              if ($.child !== null)
                switch ($.child.tag) {
                  case k:
                    O = CG($.child.stateNode);
                    break;
                  case F:
                    O = $.child.stateNode;
                    break;
                }
              mU($, A, O);
            }
            break;
          }
          case k: {
            var R = $.stateNode;
            if (Z === null && $.flags & P1) {
              var { type: C, memoizedProps: B } = $;
              RS(R, C, B);
            }
            break;
          }
          case I:
            break;
          case D:
            break;
          case Z0: {
            {
              var x = $.memoizedProps, v = x.onCommit, f = x.onRender, Y0 = $.stateNode.effectDuration, L0 = PL(), F0 = Z === null ? "mount" : "update";
              if (FL())
                F0 = "nested-update";
              if (typeof f === "function")
                f($.memoizedProps.id, F0, $.actualDuration, $.treeBaseDuration, $.actualStartTime, L0);
              {
                if (typeof v === "function")
                  v($.memoizedProps.id, F0, Y0, L0);
                qg($);
                var K1 = $.return;
                Q:
                  while (K1 !== null) {
                    switch (K1.tag) {
                      case w:
                        var H1 = K1.stateNode;
                        H1.effectDuration += Y0;
                        break Q;
                      case Z0:
                        var _ = K1.stateNode;
                        _.effectDuration += Y0;
                        break Q;
                    }
                    K1 = K1.return;
                  }
              }
            }
            break;
          }
          case n: {
            NT(X, $);
            break;
          }
          case P0:
          case O0:
          case A0:
          case y0:
          case O1:
          case x1:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      if (!T8) {
        if ($.flags & y4)
          XO($);
      }
    }
    function YT(X) {
      switch (X.tag) {
        case N:
        case d:
        case i: {
          if (X.mode & h1)
            try {
              _Z(), iL(X, X.return);
            } finally {
              IZ(X);
            }
          else
            iL(X, X.return);
          break;
        }
        case F: {
          var Z = X.stateNode;
          if (typeof Z.componentDidMount === "function")
            t_(X, X.return, Z);
          tL(X, X.return);
          break;
        }
        case k: {
          tL(X, X.return);
          break;
        }
      }
    }
    function qT(X, Z) {
      var $ = null;
      {
        var q = X;
        while (!0) {
          if (q.tag === k) {
            if ($ === null) {
              $ = q;
              try {
                var H = q.stateNode;
                if (Z)
                  gS(H);
                else
                  vS(q.stateNode, q.memoizedProps);
              } catch (E) {
                a1(X, X.return, E);
              }
            }
          } else if (q.tag === I) {
            if ($ === null)
              try {
                var G = q.stateNode;
                if (Z)
                  xS(G);
                else
                  hS(G, q.memoizedProps);
              } catch (E) {
                a1(X, X.return, E);
              }
          } else if ((q.tag === y0 || q.tag === O1) && q.memoizedState !== null && q !== X)
            ;
          else if (q.child !== null) {
            q.child.return = q, q = q.child;
            continue;
          }
          if (q === X)
            return;
          while (q.sibling === null) {
            if (q.return === null || q.return === X)
              return;
            if ($ === q)
              $ = null;
            q = q.return;
          }
          if ($ === q)
            $ = null;
          q.sibling.return = q.return, q = q.sibling;
        }
      }
    }
    function XO(X) {
      var Z = X.ref;
      if (Z !== null) {
        var $ = X.stateNode, q;
        switch (X.tag) {
          case k:
            q = CG($);
            break;
          default:
            q = $;
        }
        if (typeof Z === "function") {
          var H;
          if (X.mode & h1)
            try {
              _Z(), H = Z(q);
            } finally {
              IZ(X);
            }
          else
            H = Z(q);
          if (typeof H === "function")
            K("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", j0(X));
        } else {
          if (!Z.hasOwnProperty("current"))
            K("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", j0(X));
          Z.current = q;
        }
      }
    }
    function WT(X) {
      var Z = X.alternate;
      if (Z !== null)
        Z.return = null;
      X.return = null;
    }
    function ZO(X) {
      var Z = X.alternate;
      if (Z !== null)
        X.alternate = null, ZO(Z);
      {
        if (X.child = null, X.deletions = null, X.sibling = null, X.tag === k) {
          var $ = X.stateNode;
          if ($ !== null)
            FI($);
        }
        X.stateNode = null, X._debugOwner = null, X.return = null, X.dependencies = null, X.memoizedProps = null, X.memoizedState = null, X.pendingProps = null, X.stateNode = null, X.updateQueue = null;
      }
    }
    function KT(X) {
      var Z = X.return;
      while (Z !== null) {
        if (JO(Z))
          return Z;
        Z = Z.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function JO(X) {
      return X.tag === k || X.tag === w || X.tag === D;
    }
    function $O(X) {
      var Z = X;
      Q:
        while (!0) {
          while (Z.sibling === null) {
            if (Z.return === null || JO(Z.return))
              return null;
            Z = Z.return;
          }
          Z.sibling.return = Z.return, Z = Z.sibling;
          while (Z.tag !== k && Z.tag !== I && Z.tag !== I0) {
            if (Z.flags & y6)
              continue Q;
            if (Z.child === null || Z.tag === D)
              continue Q;
            else
              Z.child.return = Z, Z = Z.child;
          }
          if (!(Z.flags & y6))
            return Z.stateNode;
        }
    }
    function HT(X) {
      var Z = KT(X);
      switch (Z.tag) {
        case k: {
          var $ = Z.stateNode;
          if (Z.flags & dq)
            $U($), Z.flags &= ~dq;
          var q = $O(X);
          wz(X, q, $);
          break;
        }
        case w:
        case D: {
          var H = Z.stateNode.containerInfo, G = $O(X);
          Oz(X, G, H);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function Oz(X, Z, $) {
      var q = X.tag, H = q === k || q === I;
      if (H) {
        var G = X.stateNode;
        if (Z)
          SS($, G, Z);
        else
          CS($, G);
      } else if (q === D)
        ;
      else {
        var E = X.child;
        if (E !== null) {
          Oz(E, Z, $);
          var P = E.sibling;
          while (P !== null)
            Oz(P, Z, $), P = P.sibling;
        }
      }
    }
    function wz(X, Z, $) {
      var q = X.tag, H = q === k || q === I;
      if (H) {
        var G = X.stateNode;
        if (Z)
          VS($, G, Z);
        else
          BS($, G);
      } else if (q === D)
        ;
      else {
        var E = X.child;
        if (E !== null) {
          wz(E, Z, $);
          var P = E.sibling;
          while (P !== null)
            wz(P, Z, $), P = P.sibling;
        }
      }
    }
    var g8 = null, tX = !1;
    function GT(X, Z, $) {
      {
        var q = Z;
        Q:
          while (q !== null) {
            switch (q.tag) {
              case k: {
                g8 = q.stateNode, tX = !1;
                break Q;
              }
              case w: {
                g8 = q.stateNode.containerInfo, tX = !0;
                break Q;
              }
              case D: {
                g8 = q.stateNode.containerInfo, tX = !0;
                break Q;
              }
            }
            q = q.return;
          }
        if (g8 === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        YO(X, Z, $), g8 = null, tX = !1;
      }
      WT($);
    }
    function XJ(X, Z, $) {
      var q = $.child;
      while (q !== null)
        YO(X, Z, q), q = q.sibling;
    }
    function YO(X, Z, $) {
      switch (NB($), $.tag) {
        case k:
          if (!T8)
            bY($, Z);
        case I: {
          {
            var q = g8, H = tX;
            if (g8 = null, XJ(X, Z, $), g8 = q, tX = H, g8 !== null)
              if (tX)
                _S(g8, $.stateNode);
              else
                IS(g8, $.stateNode);
          }
          return;
        }
        case I0: {
          if (g8 !== null)
            if (tX)
              TS(g8, $.stateNode);
            else
              _G(g8, $.stateNode);
          return;
        }
        case D: {
          {
            var G = g8, E = tX;
            g8 = $.stateNode.containerInfo, tX = !0, XJ(X, Z, $), g8 = G, tX = E;
          }
          return;
        }
        case N:
        case d:
        case r:
        case i: {
          if (!T8) {
            var P = $.updateQueue;
            if (P !== null) {
              var A = P.lastEffect;
              if (A !== null) {
                var O = A.next, R = O;
                do {
                  var C = R, B = C.destroy, x = C.tag;
                  if (B !== void 0) {
                    if ((x & CZ) !== _Q)
                      Y5($, Z, B);
                    else if ((x & s6) !== _Q) {
                      if (uP($), $.mode & h1)
                        _Z(), Y5($, Z, B), IZ($);
                      else
                        Y5($, Z, B);
                      cP();
                    }
                  }
                  R = R.next;
                } while (R !== O);
              }
            }
          }
          XJ(X, Z, $);
          return;
        }
        case F: {
          if (!T8) {
            bY($, Z);
            var v = $.stateNode;
            if (typeof v.componentWillUnmount === "function")
              Lz($, Z, v);
          }
          XJ(X, Z, $);
          return;
        }
        case A0: {
          XJ(X, Z, $);
          return;
        }
        case y0: {
          if ($.mode & N1) {
            var f = T8;
            T8 = f || $.memoizedState !== null, XJ(X, Z, $), T8 = f;
          } else
            XJ(X, Z, $);
          break;
        }
        default: {
          XJ(X, Z, $);
          return;
        }
      }
    }
    function zT(X) {
      var Z = X.memoizedState;
    }
    function NT(X, Z) {
      var $ = Z.memoizedState;
      if ($ === null) {
        var q = Z.alternate;
        if (q !== null) {
          var H = q.memoizedState;
          if (H !== null) {
            var G = H.dehydrated;
            if (G !== null)
              iS(G);
          }
        }
      }
    }
    function qO(X) {
      var Z = X.updateQueue;
      if (Z !== null) {
        X.updateQueue = null;
        var $ = X.stateNode;
        if ($ === null)
          $ = X.stateNode = new a_;
        Z.forEach(function(q) {
          var H = Eg.bind(null, X, q);
          if (!$.has(q)) {
            if ($.add(q), cX)
              if (fY !== null && mY !== null)
                HK(mY, fY);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            q.then(H, H);
          }
        });
      }
    }
    function ET(X, Z, $) {
      fY = $, mY = X, A6(Z), WO(Z, X), A6(Z), fY = null, mY = null;
    }
    function eX(X, Z, $) {
      var q = Z.deletions;
      if (q !== null)
        for (var H = 0;H < q.length; H++) {
          var G = q[H];
          try {
            GT(X, Z, G);
          } catch (A) {
            a1(G, Z, A);
          }
        }
      var E = N3();
      if (Z.subtreeFlags & j7) {
        var P = Z.child;
        while (P !== null)
          A6(P), WO(P, X), P = P.sibling;
      }
      A6(E);
    }
    function WO(X, Z, $) {
      var { alternate: q, flags: H } = X;
      switch (X.tag) {
        case N:
        case d:
        case r:
        case i: {
          if (eX(Z, X), TZ(X), H & P1) {
            try {
              iX(CZ | n6, X, X.return), QJ(CZ | n6, X);
            } catch (S0) {
              a1(X, X.return, S0);
            }
            if (X.mode & h1) {
              try {
                _Z(), iX(s6 | n6, X, X.return);
              } catch (S0) {
                a1(X, X.return, S0);
              }
              IZ(X);
            } else
              try {
                iX(s6 | n6, X, X.return);
              } catch (S0) {
                a1(X, X.return, S0);
              }
          }
          return;
        }
        case F: {
          if (eX(Z, X), TZ(X), H & y4) {
            if (q !== null)
              bY(q, q.return);
          }
          return;
        }
        case k: {
          if (eX(Z, X), TZ(X), H & y4) {
            if (q !== null)
              bY(q, q.return);
          }
          {
            if (X.flags & dq) {
              var G = X.stateNode;
              try {
                $U(G);
              } catch (S0) {
                a1(X, X.return, S0);
              }
            }
            if (H & P1) {
              var E = X.stateNode;
              if (E != null) {
                var P = X.memoizedProps, A = q !== null ? q.memoizedProps : P, O = X.type, R = X.updateQueue;
                if (X.updateQueue = null, R !== null)
                  try {
                    kS(E, R, O, A, P, X);
                  } catch (S0) {
                    a1(X, X.return, S0);
                  }
              }
            }
          }
          return;
        }
        case I: {
          if (eX(Z, X), TZ(X), H & P1) {
            if (X.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var { stateNode: C, memoizedProps: B } = X, x = q !== null ? q.memoizedProps : B;
            try {
              jS(C, x, B);
            } catch (S0) {
              a1(X, X.return, S0);
            }
          }
          return;
        }
        case w: {
          if (eX(Z, X), TZ(X), H & P1) {
            if (q !== null) {
              var v = q.memoizedState;
              if (v.isDehydrated)
                try {
                  rS(Z.containerInfo);
                } catch (S0) {
                  a1(X, X.return, S0);
                }
            }
          }
          return;
        }
        case D: {
          eX(Z, X), TZ(X);
          return;
        }
        case n: {
          eX(Z, X), TZ(X);
          var f = X.child;
          if (f.flags & oJ) {
            var { stateNode: Y0, memoizedState: L0 } = f, F0 = L0 !== null;
            if (Y0.isHidden = F0, F0) {
              var K1 = f.alternate !== null && f.alternate.memoizedState !== null;
              if (!K1)
                tT();
            }
          }
          if (H & P1) {
            try {
              zT(X);
            } catch (S0) {
              a1(X, X.return, S0);
            }
            qO(X);
          }
          return;
        }
        case y0: {
          var H1 = q !== null && q.memoizedState !== null;
          if (X.mode & N1) {
            var _ = T8;
            T8 = _ || H1, eX(Z, X), T8 = _;
          } else
            eX(Z, X);
          if (TZ(X), H & oJ) {
            var { stateNode: b, memoizedState: T } = X, a = T !== null, G0 = X;
            if (b.isHidden = a, a) {
              if (!H1) {
                if ((G0.mode & N1) !== D0) {
                  N0 = G0;
                  var W0 = G0.child;
                  while (W0 !== null)
                    N0 = W0, PT(W0), W0 = W0.sibling;
                }
              }
            }
            qT(G0, a);
          }
          return;
        }
        case P0: {
          if (eX(Z, X), TZ(X), H & P1)
            qO(X);
          return;
        }
        case A0:
          return;
        default: {
          eX(Z, X), TZ(X);
          return;
        }
      }
    }
    function TZ(X) {
      var Z = X.flags;
      if (Z & y6) {
        try {
          HT(X);
        } catch ($) {
          a1(X, X.return, $);
        }
        X.flags &= ~y6;
      }
      if (Z & eZ)
        X.flags &= ~eZ;
    }
    function FT(X, Z, $) {
      fY = $, mY = Z, N0 = X, KO(X, Z, $), fY = null, mY = null;
    }
    function KO(X, Z, $) {
      var q = (X.mode & N1) !== D0;
      while (N0 !== null) {
        var H = N0, G = H.child;
        if (H.tag === y0 && q) {
          var E = H.memoizedState !== null, P = E || $5;
          if (P) {
            Mz(X, Z, $);
            continue;
          } else {
            var A = H.alternate, O = A !== null && A.memoizedState !== null, R = O || T8, C = $5, B = T8;
            if ($5 = P, T8 = R, T8 && !B)
              N0 = H, AT(H);
            var x = G;
            while (x !== null)
              N0 = x, KO(x, Z, $), x = x.sibling;
            N0 = H, $5 = C, T8 = B, Mz(X, Z, $);
            continue;
          }
        }
        if ((H.subtreeFlags & nq) !== B0 && G !== null)
          G.return = H, N0 = G;
        else
          Mz(X, Z, $);
      }
    }
    function Mz(X, Z, $) {
      while (N0 !== null) {
        var q = N0;
        if ((q.flags & nq) !== B0) {
          var H = q.alternate;
          A6(q);
          try {
            $T(Z, H, q, $);
          } catch (E) {
            a1(q, q.return, E);
          }
          z8();
        }
        if (q === X) {
          N0 = null;
          return;
        }
        var G = q.sibling;
        if (G !== null) {
          G.return = q.return, N0 = G;
          return;
        }
        N0 = q.return;
      }
    }
    function PT(X) {
      while (N0 !== null) {
        var Z = N0, $ = Z.child;
        switch (Z.tag) {
          case N:
          case d:
          case r:
          case i: {
            if (Z.mode & h1)
              try {
                _Z(), iX(s6, Z, Z.return);
              } finally {
                IZ(Z);
              }
            else
              iX(s6, Z, Z.return);
            break;
          }
          case F: {
            bY(Z, Z.return);
            var q = Z.stateNode;
            if (typeof q.componentWillUnmount === "function")
              Lz(Z, Z.return, q);
            break;
          }
          case k: {
            bY(Z, Z.return);
            break;
          }
          case y0: {
            var H = Z.memoizedState !== null;
            if (H) {
              HO(X);
              continue;
            }
            break;
          }
        }
        if ($ !== null)
          $.return = Z, N0 = $;
        else
          HO(X);
      }
    }
    function HO(X) {
      while (N0 !== null) {
        var Z = N0;
        if (Z === X) {
          N0 = null;
          return;
        }
        var $ = Z.sibling;
        if ($ !== null) {
          $.return = Z.return, N0 = $;
          return;
        }
        N0 = Z.return;
      }
    }
    function AT(X) {
      while (N0 !== null) {
        var Z = N0, $ = Z.child;
        if (Z.tag === y0) {
          var q = Z.memoizedState !== null;
          if (q) {
            GO(X);
            continue;
          }
        }
        if ($ !== null)
          $.return = Z, N0 = $;
        else
          GO(X);
      }
    }
    function GO(X) {
      while (N0 !== null) {
        var Z = N0;
        A6(Z);
        try {
          YT(Z);
        } catch (q) {
          a1(Z, Z.return, q);
        }
        if (z8(), Z === X) {
          N0 = null;
          return;
        }
        var $ = Z.sibling;
        if ($ !== null) {
          $.return = Z.return, N0 = $;
          return;
        }
        N0 = Z.return;
      }
    }
    function UT(X, Z, $, q) {
      N0 = Z, LT(Z, X, $, q);
    }
    function LT(X, Z, $, q) {
      while (N0 !== null) {
        var H = N0, G = H.child;
        if ((H.subtreeFlags & WY) !== B0 && G !== null)
          G.return = H, N0 = G;
        else
          OT(X, Z, $, q);
      }
    }
    function OT(X, Z, $, q) {
      while (N0 !== null) {
        var H = N0;
        if ((H.flags & uX) !== B0) {
          A6(H);
          try {
            wT(Z, H, $, q);
          } catch (E) {
            a1(H, H.return, E);
          }
          z8();
        }
        if (H === X) {
          N0 = null;
          return;
        }
        var G = H.sibling;
        if (G !== null) {
          G.return = H.return, N0 = G;
          return;
        }
        N0 = H.return;
      }
    }
    function wT(X, Z, $, q) {
      switch (Z.tag) {
        case N:
        case d:
        case i: {
          if (Z.mode & h1) {
            b2();
            try {
              QJ(I8 | n6, Z);
            } finally {
              m2(Z);
            }
          } else
            QJ(I8 | n6, Z);
          break;
        }
      }
    }
    function MT(X) {
      N0 = X, DT();
    }
    function DT() {
      while (N0 !== null) {
        var X = N0, Z = X.child;
        if ((N0.flags & nJ) !== B0) {
          var $ = X.deletions;
          if ($ !== null) {
            for (var q = 0;q < $.length; q++) {
              var H = $[q];
              N0 = H, jT(H, X);
            }
            {
              var G = X.alternate;
              if (G !== null) {
                var E = G.child;
                if (E !== null) {
                  G.child = null;
                  do {
                    var P = E.sibling;
                    E.sibling = null, E = P;
                  } while (E !== null);
                }
              }
            }
            N0 = X;
          }
        }
        if ((X.subtreeFlags & WY) !== B0 && Z !== null)
          Z.return = X, N0 = Z;
        else
          RT();
      }
    }
    function RT() {
      while (N0 !== null) {
        var X = N0;
        if ((X.flags & uX) !== B0)
          A6(X), kT(X), z8();
        var Z = X.sibling;
        if (Z !== null) {
          Z.return = X.return, N0 = Z;
          return;
        }
        N0 = X.return;
      }
    }
    function kT(X) {
      switch (X.tag) {
        case N:
        case d:
        case i: {
          if (X.mode & h1)
            b2(), iX(I8 | n6, X, X.return), m2(X);
          else
            iX(I8 | n6, X, X.return);
          break;
        }
      }
    }
    function jT(X, Z) {
      while (N0 !== null) {
        var $ = N0;
        A6($), CT($, Z), z8();
        var q = $.child;
        if (q !== null)
          q.return = $, N0 = q;
        else
          BT(X);
      }
    }
    function BT(X) {
      while (N0 !== null) {
        var Z = N0, $ = Z.sibling, q = Z.return;
        if (ZO(Z), Z === X) {
          N0 = null;
          return;
        }
        if ($ !== null) {
          $.return = q, N0 = $;
          return;
        }
        N0 = q;
      }
    }
    function CT(X, Z) {
      switch (X.tag) {
        case N:
        case d:
        case i: {
          if (X.mode & h1)
            b2(), iX(I8, X, Z), m2(X);
          else
            iX(I8, X, Z);
          break;
        }
      }
    }
    function VT(X) {
      switch (X.tag) {
        case N:
        case d:
        case i: {
          try {
            QJ(s6 | n6, X);
          } catch ($) {
            a1(X, X.return, $);
          }
          break;
        }
        case F: {
          var Z = X.stateNode;
          try {
            Z.componentDidMount();
          } catch ($) {
            a1(X, X.return, $);
          }
          break;
        }
      }
    }
    function ST(X) {
      switch (X.tag) {
        case N:
        case d:
        case i: {
          try {
            QJ(I8 | n6, X);
          } catch (Z) {
            a1(X, X.return, Z);
          }
          break;
        }
      }
    }
    function IT(X) {
      switch (X.tag) {
        case N:
        case d:
        case i: {
          try {
            iX(s6 | n6, X, X.return);
          } catch ($) {
            a1(X, X.return, $);
          }
          break;
        }
        case F: {
          var Z = X.stateNode;
          if (typeof Z.componentWillUnmount === "function")
            Lz(X, X.return, Z);
          break;
        }
      }
    }
    function _T(X) {
      switch (X.tag) {
        case N:
        case d:
        case i:
          try {
            iX(I8 | n6, X, X.return);
          } catch (Z) {
            a1(X, X.return, Z);
          }
      }
    }
    var TT = 0, gT = 1, xT = 2, vT = 3, hT = 4;
    if (typeof Symbol === "function" && Symbol.for) {
      var tW = Symbol.for;
      TT = tW("selector.component"), gT = tW("selector.has_pseudo_class"), xT = tW("selector.role"), vT = tW("selector.test_id"), hT = tW("selector.text");
    }
    var yT = [];
    function fT() {
      yT.forEach(function(X) {
        return X();
      });
    }
    var mT = Q.ReactCurrentActQueue;
    function bT(X) {
      {
        var Z = typeof IS_REACT_ACT_ENVIRONMENT !== "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0, $ = typeof jest !== "undefined";
        return $ && Z !== !1;
      }
    }
    function zO() {
      {
        var X = typeof IS_REACT_ACT_ENVIRONMENT !== "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        if (!X && mT.current !== null)
          K("The current testing environment is not configured to support act(...)");
        return X;
      }
    }
    var uT = Math.ceil, Dz = Q.ReactCurrentDispatcher, Rz = Q.ReactCurrentOwner, x8 = Q.ReactCurrentBatchConfig, QZ = Q.ReactCurrentActQueue, r6 = 0, NO = 1, v8 = 2, FX = 4, N4 = 0, eW = 1, A$ = 2, q5 = 3, QK = 4, EO = 5, kz = 6, E1 = r6, EQ = null, U6 = null, i6 = s, gZ = s, jz = l4(s), t6 = N4, XK = null, Bz = s, W5 = s, ZK = s, K5 = s, JK = null, TQ = null, Cz = 0, FO = 500, PO = 1 / 0, cT = 500, E4 = null;
    function $K() {
      PO = N8() + cT;
    }
    function AO() {
      return PO;
    }
    var H5 = !1, Vz = null, uY = null, U$ = !1, ZJ = null, YK = s, Sz = [], Iz = null, pT = 50, qK = 0, _z = null, Tz = !1, G5 = !1, dT = 50, cY = 0, z5 = null, WK = i1, N5 = s, UO = !1;
    function E5() {
      return EQ;
    }
    function FQ() {
      if ((E1 & (v8 | FX)) !== r6)
        return N8();
      if (WK !== i1)
        return WK;
      return WK = N8(), WK;
    }
    function JJ(X) {
      var Z = X.mode;
      if ((Z & N1) === D0)
        return v0;
      else if ((E1 & v8) !== r6 && i6 !== s)
        return eq(i6);
      var $ = vI() !== xI;
      if ($) {
        if (x8.transition !== null) {
          var q = x8.transition;
          if (!q._updatedFibers)
            q._updatedFibers = /* @__PURE__ */ new Set;
          q._updatedFibers.add(X);
        }
        if (N5 === F8)
          N5 = rP();
        return N5;
      }
      var H = pX();
      if (H !== F8)
        return H;
      var G = OS();
      return G;
    }
    function lT(X) {
      var Z = X.mode;
      if ((Z & N1) === D0)
        return v0;
      return pB();
    }
    function e6(X, Z, $, q) {
      if (Pg(), UO)
        K("useInsertionEffect must not schedule updates.");
      if (Tz)
        G5 = !0;
      if (QW(X, $, q), (E1 & v8) !== s && X === EQ)
        Lg(Z);
      else {
        if (cX)
          eP(X, Z, $);
        if (Og(Z), X === EQ) {
          if ((E1 & v8) === r6)
            ZK = i0(ZK, $);
          if (t6 === QK)
            $J(X, i6);
        }
        if (gQ(X, q), $ === v0 && E1 === r6 && (Z.mode & N1) === D0 && !QZ.isBatchingLegacy)
          $K(), AU();
      }
    }
    function nT(X, Z, $) {
      var q = X.current;
      q.lanes = Z, QW(X, Z, $), gQ(X, $);
    }
    function sT(X) {
      return (E1 & v8) !== r6;
    }
    function gQ(X, Z) {
      var $ = X.callbackNode;
      yB(X, Z);
      var q = _3(X, X === EQ ? i6 : s);
      if (q === s) {
        if ($ !== null)
          gO($);
        X.callbackNode = null, X.callbackPriority = F8;
        return;
      }
      var H = X$(q), G = X.callbackPriority;
      if (G === H && !(QZ.current !== null && $ !== mz)) {
        if ($ == null && G !== v0)
          K("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if ($ != null)
        gO($);
      var E;
      if (H === v0) {
        if (X.tag === n4) {
          if (QZ.isBatchingLegacy !== null)
            QZ.didScheduleLegacyUpdate = !0;
          UI(wO.bind(null, X));
        } else
          PU(wO.bind(null, X));
        if (QZ.current !== null)
          QZ.current.push(s4);
        else
          MS(function() {
            if ((E1 & (v8 | FX)) === r6)
              s4();
          });
        E = null;
      } else {
        var P;
        switch (ZA(q)) {
          case nQ:
            P = C3;
            break;
          case J4:
            P = B7;
            break;
          case $4:
            P = iJ;
            break;
          case v3:
            P = C7;
            break;
          default:
            P = iJ;
            break;
        }
        E = bz(P, LO.bind(null, X));
      }
      X.callbackPriority = H, X.callbackNode = E;
    }
    function LO(X, Z) {
      if (q_(), WK = i1, N5 = s, (E1 & (v8 | FX)) !== r6)
        throw new Error("Should not already be working.");
      var $ = X.callbackNode, q = P4();
      if (q) {
        if (X.callbackNode !== $)
          return null;
      }
      var H = _3(X, X === EQ ? i6 : s);
      if (H === s)
        return null;
      var G = !T3(X, H) && !cB(X, H) && !Z, E = G ? Jg(X, H) : P5(X, H);
      if (E !== N4) {
        if (E === A$) {
          var P = a7(X);
          if (P !== s)
            H = P, E = gz(X, P);
        }
        if (E === eW) {
          var A = XK;
          throw L$(X, s), $J(X, H), gQ(X, N8()), A;
        }
        if (E === kz)
          $J(X, H);
        else {
          var O = !T3(X, H), R = X.current.alternate;
          if (O && !aT(R)) {
            if (E = P5(X, H), E === A$) {
              var C = a7(X);
              if (C !== s)
                H = C, E = gz(X, C);
            }
            if (E === eW) {
              var B = XK;
              throw L$(X, s), $J(X, H), gQ(X, N8()), B;
            }
          }
          X.finishedWork = R, X.finishedLanes = H, oT(X, E, H);
        }
      }
      if (gQ(X, N8()), X.callbackNode === $)
        return LO.bind(null, X);
      return null;
    }
    function gz(X, Z) {
      var $ = JK;
      if (h3(X)) {
        var q = L$(X, Z);
        q.flags |= tZ, GI(X.containerInfo);
      }
      var H = P5(X, Z);
      if (H !== A$) {
        var G = TQ;
        if (TQ = $, G !== null)
          OO(G);
      }
      return H;
    }
    function OO(X) {
      if (TQ === null)
        TQ = X;
      else
        TQ.push.apply(TQ, X);
    }
    function oT(X, Z, $) {
      switch (Z) {
        case N4:
        case eW:
          throw new Error("Root did not complete. This is a bug in React.");
        case A$: {
          O$(X, TQ, E4);
          break;
        }
        case q5: {
          if ($J(X, $), oP($) && !xO()) {
            var q = Cz + FO - N8();
            if (q > 10) {
              var H = _3(X, s);
              if (H !== s)
                break;
              var G = X.suspendedLanes;
              if (!NY(G, $)) {
                var E = FQ();
                tP(X, G);
                break;
              }
              X.timeoutHandle = SG(O$.bind(null, X, TQ, E4), q);
              break;
            }
          }
          O$(X, TQ, E4);
          break;
        }
        case QK: {
          if ($J(X, $), uB($))
            break;
          if (!xO()) {
            var P = vB(X, $), A = P, O = N8() - A, R = Fg(O) - O;
            if (R > 10) {
              X.timeoutHandle = SG(O$.bind(null, X, TQ, E4), R);
              break;
            }
          }
          O$(X, TQ, E4);
          break;
        }
        case EO: {
          O$(X, TQ, E4);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function aT(X) {
      var Z = X;
      while (!0) {
        if (Z.flags & j3) {
          var $ = Z.updateQueue;
          if ($ !== null) {
            var q = $.stores;
            if (q !== null)
              for (var H = 0;H < q.length; H++) {
                var G = q[H], E = G.getSnapshot, P = G.value;
                try {
                  if (!oQ(E(), P))
                    return !1;
                } catch (O) {
                  return !1;
                }
              }
          }
        }
        var A = Z.child;
        if (Z.subtreeFlags & j3 && A !== null) {
          A.return = Z, Z = A;
          continue;
        }
        if (Z === X)
          return !0;
        while (Z.sibling === null) {
          if (Z.return === null || Z.return === X)
            return !0;
          Z = Z.return;
        }
        Z.sibling.return = Z.return, Z = Z.sibling;
      }
      return !0;
    }
    function $J(X, Z) {
      Z = g3(Z, K5), Z = g3(Z, ZK), lB(X, Z);
    }
    function wO(X) {
      if (W_(), (E1 & (v8 | FX)) !== r6)
        throw new Error("Should not already be working.");
      P4();
      var Z = _3(X, s);
      if (!lQ(Z, v0))
        return gQ(X, N8()), null;
      var $ = P5(X, Z);
      if (X.tag !== n4 && $ === A$) {
        var q = a7(X);
        if (q !== s)
          Z = q, $ = gz(X, q);
      }
      if ($ === eW) {
        var H = XK;
        throw L$(X, s), $J(X, Z), gQ(X, N8()), H;
      }
      if ($ === kz)
        throw new Error("Root did not complete. This is a bug in React.");
      var G = X.current.alternate;
      return X.finishedWork = G, X.finishedLanes = Z, O$(X, TQ, E4), gQ(X, N8()), null;
    }
    function rT(X, Z) {
      if (Z !== s) {
        if (e7(X, i0(Z, v0)), gQ(X, N8()), (E1 & (v8 | FX)) === r6)
          $K(), s4();
      }
    }
    function xz(X, Z) {
      var $ = E1;
      E1 |= NO;
      try {
        return X(Z);
      } finally {
        if (E1 = $, E1 === r6 && !QZ.isBatchingLegacy)
          $K(), AU();
      }
    }
    function iT(X, Z, $, q, H) {
      var G = pX(), E = x8.transition;
      try {
        return x8.transition = null, P8(nQ), X(Z, $, q, H);
      } finally {
        if (P8(G), x8.transition = E, E1 === r6)
          $K();
      }
    }
    function F4(X) {
      if (ZJ !== null && ZJ.tag === n4 && (E1 & (v8 | FX)) === r6)
        P4();
      var Z = E1;
      E1 |= NO;
      var $ = x8.transition, q = pX();
      try {
        if (x8.transition = null, P8(nQ), X)
          return X();
        else
          return;
      } finally {
        if (P8(q), x8.transition = $, E1 = Z, (E1 & (v8 | FX)) === r6)
          s4();
      }
    }
    function MO() {
      return (E1 & (v8 | FX)) !== r6;
    }
    function F5(X, Z) {
      r8(jz, gZ, X), gZ = i0(gZ, Z), Bz = i0(Bz, Z);
    }
    function vz(X) {
      gZ = jz.current, a8(jz, X);
    }
    function L$(X, Z) {
      X.finishedWork = null, X.finishedLanes = s;
      var $ = X.timeoutHandle;
      if ($ !== IG)
        X.timeoutHandle = IG, wS($);
      if (U6 !== null) {
        var q = U6.return;
        while (q !== null) {
          var H = q.alternate;
          aL(H, q), q = q.return;
        }
      }
      EQ = X;
      var G = w$(X.current, null);
      return U6 = G, i6 = gZ = Bz = Z, t6 = N4, XK = null, W5 = s, ZK = s, K5 = s, JK = null, TQ = null, cI(), nX.discardPendingWarnings(), G;
    }
    function DO(X, Z) {
      do {
        var $ = U6;
        try {
          if (D9(), lU(), z8(), Rz.current = null, $ === null || $.return === null) {
            t6 = eW, XK = Z, U6 = null;
            return;
          }
          if (j6 && $.mode & h1)
            e9($, !0);
          if (f0)
            if (KY(), Z !== null && typeof Z === "object" && typeof Z.then === "function") {
              var q = Z;
              RB($, q, i6);
            } else
              DB($, Z, i6);
          A_(X, $.return, $, Z, i6), BO($);
        } catch (H) {
          if (Z = H, U6 === $ && $ !== null)
            $ = $.return, U6 = $;
          else
            $ = U6;
          continue;
        }
        return;
      } while (!0);
    }
    function RO() {
      var X = Dz.current;
      if (Dz.current = o9, X === null)
        return o9;
      else
        return X;
    }
    function kO(X) {
      Dz.current = X;
    }
    function tT() {
      Cz = N8();
    }
    function KK(X) {
      W5 = i0(X, W5);
    }
    function eT() {
      if (t6 === N4)
        t6 = q5;
    }
    function hz() {
      if (t6 === N4 || t6 === q5 || t6 === A$)
        t6 = QK;
      if (EQ !== null && (r7(W5) || r7(ZK)))
        $J(EQ, i6);
    }
    function Qg(X) {
      if (t6 !== QK)
        t6 = A$;
      if (JK === null)
        JK = [X];
      else
        JK.push(X);
    }
    function Xg() {
      return t6 === N4;
    }
    function P5(X, Z) {
      var $ = E1;
      E1 |= v8;
      var q = RO();
      if (EQ !== X || i6 !== Z) {
        if (cX) {
          var H = X.memoizedUpdaters;
          if (H.size > 0)
            HK(X, i6), H.clear();
          QA(X, Z);
        }
        E4 = XA(), L$(X, Z);
      }
      pP(Z);
      do
        try {
          Zg();
          break;
        } catch (G) {
          DO(X, G);
        }
      while (!0);
      if (D9(), E1 = $, kO(q), U6 !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return dP(), EQ = null, i6 = s, t6;
    }
    function Zg() {
      while (U6 !== null)
        jO(U6);
    }
    function Jg(X, Z) {
      var $ = E1;
      E1 |= v8;
      var q = RO();
      if (EQ !== X || i6 !== Z) {
        if (cX) {
          var H = X.memoizedUpdaters;
          if (H.size > 0)
            HK(X, i6), H.clear();
          QA(X, Z);
        }
        E4 = XA(), $K(), L$(X, Z);
      }
      pP(Z);
      do
        try {
          $g();
          break;
        } catch (G) {
          DO(X, G);
        }
      while (!0);
      if (D9(), kO(q), E1 = $, U6 !== null)
        return VB(), N4;
      else
        return dP(), EQ = null, i6 = s, t6;
    }
    function $g() {
      while (U6 !== null && !ZB())
        jO(U6);
    }
    function jO(X) {
      var Z = X.alternate;
      A6(X);
      var $;
      if ((X.mode & h1) !== D0)
        f2(X), $ = yz(Z, X, gZ), e9(X, !0);
      else
        $ = yz(Z, X, gZ);
      if (z8(), X.memoizedProps = X.pendingProps, $ === null)
        BO(X);
      else
        U6 = $;
      Rz.current = null;
    }
    function BO(X) {
      var Z = X;
      do {
        var { alternate: $, return: q } = Z;
        if ((Z.flags & lq) === B0) {
          A6(Z);
          var H = void 0;
          if ((Z.mode & h1) === D0)
            H = oL($, Z, gZ);
          else
            f2(Z), H = oL($, Z, gZ), e9(Z, !1);
          if (z8(), H !== null) {
            U6 = H;
            return;
          }
        } else {
          var G = o_($, Z);
          if (G !== null) {
            G.flags &= rj, U6 = G;
            return;
          }
          if ((Z.mode & h1) !== D0) {
            e9(Z, !1);
            var { actualDuration: E, child: P } = Z;
            while (P !== null)
              E += P.actualDuration, P = P.sibling;
            Z.actualDuration = E;
          }
          if (q !== null)
            q.flags |= lq, q.subtreeFlags = B0, q.deletions = null;
          else {
            t6 = kz, U6 = null;
            return;
          }
        }
        var A = Z.sibling;
        if (A !== null) {
          U6 = A;
          return;
        }
        Z = q, U6 = Z;
      } while (Z !== null);
      if (t6 === N4)
        t6 = EO;
    }
    function O$(X, Z, $) {
      var q = pX(), H = x8.transition;
      try {
        x8.transition = null, P8(nQ), Yg(X, Z, $, q);
      } finally {
        x8.transition = H, P8(q);
      }
      return null;
    }
    function Yg(X, Z, $, q) {
      do
        P4();
      while (ZJ !== null);
      if (Ag(), (E1 & (v8 | FX)) !== r6)
        throw new Error("Should not already be working.");
      var { finishedWork: H, finishedLanes: G } = X;
      if (PB(G), H === null)
        return bP(), null;
      else if (G === s)
        K("root.finishedLanes should not be empty during a commit. This is a bug in React.");
      if (X.finishedWork = null, X.finishedLanes = s, H === X.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      X.callbackNode = null, X.callbackPriority = F8;
      var E = i0(H.lanes, H.childLanes);
      if (nB(X, E), X === EQ)
        EQ = null, U6 = null, i6 = s;
      if ((H.subtreeFlags & WY) !== B0 || (H.flags & WY) !== B0) {
        if (!U$)
          U$ = !0, Iz = $, bz(iJ, function() {
            return P4(), null;
          });
      }
      var P = (H.subtreeFlags & (k7 | j7 | nq | WY)) !== B0, A = (H.flags & (k7 | j7 | nq | WY)) !== B0;
      if (P || A) {
        var O = x8.transition;
        x8.transition = null;
        var R = pX();
        P8(nQ);
        var C = E1;
        E1 |= FX, Rz.current = null;
        var B = e_(X, H);
        AL(), ET(X, H, G), ES(X.containerInfo), X.current = H, kB(G), FT(H, X, G), jB(), JB(), E1 = C, P8(R), x8.transition = O;
      } else
        X.current = H, AL();
      var x = U$;
      if (U$)
        U$ = !1, ZJ = X, YK = G;
      else
        cY = 0, z5 = null;
      if (E = X.pendingLanes, E === s)
        uY = null;
      if (!x)
        IO(X.current, !1);
      if (GB(H.stateNode, q), cX)
        X.memoizedUpdaters.clear();
      if (fT(), gQ(X, N8()), Z !== null) {
        var v = X.onRecoverableError;
        for (var f = 0;f < Z.length; f++) {
          var Y0 = Z[f], L0 = Y0.stack, F0 = Y0.digest;
          v(Y0.value, {
            componentStack: L0,
            digest: F0
          });
        }
      }
      if (H5) {
        H5 = !1;
        var K1 = Vz;
        throw Vz = null, K1;
      }
      if (lQ(YK, v0) && X.tag !== n4)
        P4();
      if (E = X.pendingLanes, lQ(E, v0))
        if (Y_(), X === _z)
          qK++;
        else
          qK = 0, _z = X;
      else
        qK = 0;
      return s4(), bP(), null;
    }
    function P4() {
      if (ZJ !== null) {
        var X = ZA(YK), Z = rB($4, X), $ = x8.transition, q = pX();
        try {
          return x8.transition = null, P8(Z), Wg();
        } finally {
          P8(q), x8.transition = $;
        }
      }
      return !1;
    }
    function qg(X) {
      if (Sz.push(X), !U$)
        U$ = !0, bz(iJ, function() {
          return P4(), null;
        });
    }
    function Wg() {
      if (ZJ === null)
        return !1;
      var X = Iz;
      Iz = null;
      var Z = ZJ, $ = YK;
      if (ZJ = null, YK = s, (E1 & (v8 | FX)) !== r6)
        throw new Error("Cannot flush passive effects while already rendering.");
      Tz = !0, G5 = !1, BB($);
      var q = E1;
      E1 |= FX, MT(Z.current), UT(Z, Z.current, $, X);
      {
        var H = Sz;
        Sz = [];
        for (var G = 0;G < H.length; G++) {
          var E = H[G];
          JT(Z, E);
        }
      }
      CB(), IO(Z.current, !0), E1 = q, s4();
      {
        if (G5)
          if (Z === z5)
            cY++;
          else
            cY = 0, z5 = Z;
        else
          cY = 0;
        Tz = !1, G5 = !1;
      }
      zB(Z);
      {
        var P = Z.current.stateNode;
        P.effectDuration = 0, P.passiveEffectDuration = 0;
      }
      return !0;
    }
    function CO(X) {
      return uY !== null && uY.has(X);
    }
    function Kg(X) {
      if (uY === null)
        uY = /* @__PURE__ */ new Set([X]);
      else
        uY.add(X);
    }
    function Hg(X) {
      if (!H5)
        H5 = !0, Vz = X;
    }
    var Gg = Hg;
    function VO(X, Z, $) {
      var q = F$($, Z), H = kL(X, q, v0), G = a4(X, H, v0), E = FQ();
      if (G !== null)
        QW(G, v0, E), gQ(G, E);
    }
    function a1(X, Z, $) {
      if (r_($), GK(!1), X.tag === w) {
        VO(X, X, $);
        return;
      }
      var q = null;
      q = Z;
      while (q !== null) {
        if (q.tag === w) {
          VO(q, X, $);
          return;
        } else if (q.tag === F) {
          var { type: H, stateNode: G } = q;
          if (typeof H.getDerivedStateFromError === "function" || typeof G.componentDidCatch === "function" && !CO(G)) {
            var E = F$($, X), P = Zz(q, E, v0), A = a4(q, P, v0), O = FQ();
            if (A !== null)
              QW(A, v0, O), gQ(A, O);
            return;
          }
        }
        q = q.return;
      }
      K(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, $);
    }
    function zg(X, Z, $) {
      var q = X.pingCache;
      if (q !== null)
        q.delete(Z);
      var H = FQ();
      if (tP(X, $), wg(X), EQ === X && NY(i6, $))
        if (t6 === QK || t6 === q5 && oP(i6) && N8() - Cz < FO)
          L$(X, s);
        else
          K5 = i0(K5, $);
      gQ(X, H);
    }
    function SO(X, Z) {
      if (Z === F8)
        Z = lT(X);
      var $ = FQ(), q = IQ(X, Z);
      if (q !== null)
        QW(q, Z, $), gQ(q, $);
    }
    function Ng(X) {
      var Z = X.memoizedState, $ = F8;
      if (Z !== null)
        $ = Z.retryLane;
      SO(X, $);
    }
    function Eg(X, Z) {
      var $ = F8, q;
      switch (X.tag) {
        case n:
          q = X.stateNode;
          var H = X.memoizedState;
          if (H !== null)
            $ = H.retryLane;
          break;
        case P0:
          q = X.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      if (q !== null)
        q.delete(Z);
      SO(X, $);
    }
    function Fg(X) {
      return X < 120 ? 120 : X < 480 ? 480 : X < 1080 ? 1080 : X < 1920 ? 1920 : X < 3000 ? 3000 : X < 4320 ? 4320 : uT(X / 1960) * 1960;
    }
    function Pg() {
      if (qK > pT)
        throw qK = 0, _z = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      if (cY > dT)
        cY = 0, z5 = null, K("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.");
    }
    function Ag() {
      nX.flushLegacyContextWarning(), nX.flushPendingUnsafeLifecycleWarnings();
    }
    function IO(X, Z) {
      {
        if (A6(X), A5(X, Q4, IT), Z)
          A5(X, B3, _T);
        if (A5(X, Q4, VT), Z)
          A5(X, B3, ST);
        z8();
      }
    }
    function A5(X, Z, $) {
      {
        var q = X, H = null;
        while (q !== null) {
          var G = q.subtreeFlags & Z;
          if (q !== H && q.child !== null && G !== B0)
            q = q.child;
          else {
            if ((q.flags & Z) !== B0)
              $(q);
            if (q.sibling !== null)
              q = q.sibling;
            else
              q = H = q.return;
          }
        }
      }
    }
    var U5 = null;
    function _O(X) {
      {
        if ((E1 & v8) !== r6)
          return;
        if (!(X.mode & N1))
          return;
        var Z = X.tag;
        if (Z !== L && Z !== w && Z !== F && Z !== N && Z !== d && Z !== r && Z !== i)
          return;
        var $ = j0(X) || "ReactComponent";
        if (U5 !== null) {
          if (U5.has($))
            return;
          U5.add($);
        } else
          U5 = /* @__PURE__ */ new Set([$]);
        var q = G8;
        try {
          A6(X), K("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          if (q)
            A6(X);
          else
            z8();
        }
      }
    }
    var yz;
    {
      var Ug = null;
      yz = function(X, Z, $) {
        var q = mO(Ug, Z);
        try {
          return pL(X, Z, $);
        } catch (G) {
          if (jI() || G !== null && typeof G === "object" && typeof G.then === "function")
            throw G;
          if (D9(), lU(), aL(X, Z), mO(Z, q), Z.mode & h1)
            f2(Z);
          if (L7(null, pL, null, X, Z, $), nj()) {
            var H = O7();
            if (typeof H === "object" && H !== null && H._suppressLogging && typeof G === "object" && G !== null && !G._suppressLogging)
              G._suppressLogging = !0;
          }
          throw G;
        }
      };
    }
    var TO = !1, fz;
    fz = /* @__PURE__ */ new Set;
    function Lg(X) {
      if (wZ && !Z_())
        switch (X.tag) {
          case N:
          case d:
          case i: {
            var Z = U6 && j0(U6) || "Unknown", $ = Z;
            if (!fz.has($)) {
              fz.add($);
              var q = j0(X) || "Unknown";
              K("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", q, Z, Z);
            }
            break;
          }
          case F: {
            if (!TO)
              K("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), TO = !0;
            break;
          }
        }
    }
    function HK(X, Z) {
      if (cX) {
        var $ = X.memoizedUpdaters;
        $.forEach(function(q) {
          eP(X, q, Z);
        });
      }
    }
    var mz = {};
    function bz(X, Z) {
      {
        var $ = QZ.current;
        if ($ !== null)
          return $.push(Z), mz;
        else
          return mP(X, Z);
      }
    }
    function gO(X) {
      if (X === mz)
        return;
      return XB(X);
    }
    function xO() {
      return QZ.current !== null;
    }
    function Og(X) {
      {
        if (X.mode & N1) {
          if (!zO())
            return;
        } else {
          if (!bT())
            return;
          if (E1 !== r6)
            return;
          if (X.tag !== N && X.tag !== d && X.tag !== i)
            return;
        }
        if (QZ.current === null) {
          var Z = G8;
          try {
            A6(X), K(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, j0(X));
          } finally {
            if (Z)
              A6(X);
            else
              z8();
          }
        }
      }
    }
    function wg(X) {
      if (X.tag !== n4 && zO() && QZ.current === null)
        K(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function GK(X) {
      UO = X;
    }
    var PX = null, pY = null, Mg = function(X) {
      PX = X;
    };
    function dY(X) {
      {
        if (PX === null)
          return X;
        var Z = PX(X);
        if (Z === void 0)
          return X;
        return Z.current;
      }
    }
    function uz(X) {
      return dY(X);
    }
    function cz(X) {
      {
        if (PX === null)
          return X;
        var Z = PX(X);
        if (Z === void 0) {
          if (X !== null && X !== void 0 && typeof X.render === "function") {
            var $ = dY(X.render);
            if (X.render !== $) {
              var q = {
                $$typeof: j1,
                render: $
              };
              if (X.displayName !== void 0)
                q.displayName = X.displayName;
              return q;
            }
          }
          return X;
        }
        return Z.current;
      }
    }
    function vO(X, Z) {
      {
        if (PX === null)
          return !1;
        var $ = X.elementType, q = Z.type, H = !1, G = typeof q === "object" && q !== null ? q.$$typeof : null;
        switch (X.tag) {
          case F: {
            if (typeof q === "function")
              H = !0;
            break;
          }
          case N: {
            if (typeof q === "function")
              H = !0;
            else if (G === d6)
              H = !0;
            break;
          }
          case d: {
            if (G === j1)
              H = !0;
            else if (G === d6)
              H = !0;
            break;
          }
          case r:
          case i: {
            if (G === lZ)
              H = !0;
            else if (G === d6)
              H = !0;
            break;
          }
          default:
            return !1;
        }
        if (H) {
          var E = PX($);
          if (E !== void 0 && E === PX(q))
            return !0;
        }
        return !1;
      }
    }
    function hO(X) {
      {
        if (PX === null)
          return;
        if (typeof WeakSet !== "function")
          return;
        if (pY === null)
          pY = /* @__PURE__ */ new WeakSet;
        pY.add(X);
      }
    }
    var Dg = function(X, Z) {
      {
        if (PX === null)
          return;
        var { staleFamilies: $, updatedFamilies: q } = Z;
        P4(), F4(function() {
          pz(X.current, q, $);
        });
      }
    }, Rg = function(X, Z) {
      {
        if (X.context !== aQ)
          return;
        P4(), F4(function() {
          zK(Z, X, null, null);
        });
      }
    };
    function pz(X, Z, $) {
      {
        var { alternate: q, child: H, sibling: G, tag: E, type: P } = X, A = null;
        switch (E) {
          case N:
          case i:
          case F:
            A = P;
            break;
          case d:
            A = P.render;
            break;
        }
        if (PX === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var O = !1, R = !1;
        if (A !== null) {
          var C = PX(A);
          if (C !== void 0) {
            if ($.has(C))
              R = !0;
            else if (Z.has(C))
              if (E === F)
                R = !0;
              else
                O = !0;
          }
        }
        if (pY !== null) {
          if (pY.has(X) || q !== null && pY.has(q))
            R = !0;
        }
        if (R)
          X._debugNeedsRemount = !0;
        if (R || O) {
          var B = IQ(X, v0);
          if (B !== null)
            e6(B, X, v0, i1);
        }
        if (H !== null && !R)
          pz(H, Z, $);
        if (G !== null)
          pz(G, Z, $);
      }
    }
    var kg = function(X, Z) {
      {
        var $ = /* @__PURE__ */ new Set, q = new Set(Z.map(function(H) {
          return H.current;
        }));
        return dz(X.current, q, $), $;
      }
    };
    function dz(X, Z, $) {
      {
        var { child: q, sibling: H, tag: G, type: E } = X, P = null;
        switch (G) {
          case N:
          case i:
          case F:
            P = E;
            break;
          case d:
            P = E.render;
            break;
        }
        var A = !1;
        if (P !== null) {
          if (Z.has(P))
            A = !0;
        }
        if (A)
          jg(X, $);
        else if (q !== null)
          dz(q, Z, $);
        if (H !== null)
          dz(H, Z, $);
      }
    }
    function jg(X, Z) {
      {
        var $ = Bg(X, Z);
        if ($)
          return;
        var q = X;
        while (!0) {
          switch (q.tag) {
            case k:
              Z.add(q.stateNode);
              return;
            case D:
              Z.add(q.stateNode.containerInfo);
              return;
            case w:
              Z.add(q.stateNode.containerInfo);
              return;
          }
          if (q.return === null)
            throw new Error("Expected to reach root first.");
          q = q.return;
        }
      }
    }
    function Bg(X, Z) {
      {
        var $ = X, q = !1;
        while (!0) {
          if ($.tag === k)
            q = !0, Z.add($.stateNode);
          else if ($.child !== null) {
            $.child.return = $, $ = $.child;
            continue;
          }
          if ($ === X)
            return q;
          while ($.sibling === null) {
            if ($.return === null || $.return === X)
              return q;
            $ = $.return;
          }
          $.sibling.return = $.return, $ = $.sibling;
        }
      }
      return !1;
    }
    var lz;
    {
      lz = !1;
      try {
        var yO = Object.preventExtensions({});
        ;
      } catch (X) {
        lz = !0;
      }
    }
    function Cg(X, Z, $, q) {
      if (this.tag = X, this.key = $, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = Z, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = q, this.flags = B0, this.subtreeFlags = B0, this.deletions = null, this.lanes = s, this.childLanes = s, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !lz && typeof Object.preventExtensions === "function")
        Object.preventExtensions(this);
    }
    var rQ = function(X, Z, $, q) {
      return new Cg(X, Z, $, q);
    };
    function nz(X) {
      var Z = X.prototype;
      return !!(Z && Z.isReactComponent);
    }
    function Vg(X) {
      return typeof X === "function" && !nz(X) && X.defaultProps === void 0;
    }
    function Sg(X) {
      if (typeof X === "function")
        return nz(X) ? F : N;
      else if (X !== void 0 && X !== null) {
        var Z = X.$$typeof;
        if (Z === j1)
          return d;
        if (Z === lZ)
          return r;
      }
      return L;
    }
    function w$(X, Z) {
      var $ = X.alternate;
      if ($ === null)
        $ = rQ(X.tag, Z, X.key, X.mode), $.elementType = X.elementType, $.type = X.type, $.stateNode = X.stateNode, $._debugSource = X._debugSource, $._debugOwner = X._debugOwner, $._debugHookTypes = X._debugHookTypes, $.alternate = X, X.alternate = $;
      else
        $.pendingProps = Z, $.type = X.type, $.flags = B0, $.subtreeFlags = B0, $.deletions = null, $.actualDuration = 0, $.actualStartTime = -1;
      $.flags = X.flags & X4, $.childLanes = X.childLanes, $.lanes = X.lanes, $.child = X.child, $.memoizedProps = X.memoizedProps, $.memoizedState = X.memoizedState, $.updateQueue = X.updateQueue;
      var q = X.dependencies;
      switch ($.dependencies = q === null ? null : {
        lanes: q.lanes,
        firstContext: q.firstContext
      }, $.sibling = X.sibling, $.index = X.index, $.ref = X.ref, $.selfBaseDuration = X.selfBaseDuration, $.treeBaseDuration = X.treeBaseDuration, $._debugNeedsRemount = X._debugNeedsRemount, $.tag) {
        case L:
        case N:
        case i:
          $.type = dY(X.type);
          break;
        case F:
          $.type = uz(X.type);
          break;
        case d:
          $.type = cz(X.type);
          break;
      }
      return $;
    }
    function Ig(X, Z) {
      X.flags &= X4 | y6;
      var $ = X.alternate;
      if ($ === null)
        X.childLanes = s, X.lanes = Z, X.child = null, X.subtreeFlags = B0, X.memoizedProps = null, X.memoizedState = null, X.updateQueue = null, X.dependencies = null, X.stateNode = null, X.selfBaseDuration = 0, X.treeBaseDuration = 0;
      else {
        X.childLanes = $.childLanes, X.lanes = $.lanes, X.child = $.child, X.subtreeFlags = B0, X.deletions = null, X.memoizedProps = $.memoizedProps, X.memoizedState = $.memoizedState, X.updateQueue = $.updateQueue, X.type = $.type;
        var q = $.dependencies;
        X.dependencies = q === null ? null : {
          lanes: q.lanes,
          firstContext: q.firstContext
        }, X.selfBaseDuration = $.selfBaseDuration, X.treeBaseDuration = $.treeBaseDuration;
      }
      return X;
    }
    function _g(X, Z, $) {
      var q;
      if (X === N9) {
        if (q = N1, Z === !0)
          q |= R6, q |= RZ;
      } else
        q = D0;
      if (cX)
        q |= h1;
      return rQ(w, null, null, q);
    }
    function sz(X, Z, $, q, H, G) {
      var E = L, P = X;
      if (typeof X === "function")
        if (nz(X))
          E = F, P = uz(P);
        else
          P = dY(P);
      else if (typeof X === "string")
        E = k;
      else
        Q:
          switch (X) {
            case WQ:
              return YJ($.children, H, G, Z);
            case PZ:
              if (E = o, H |= R6, (H & N1) !== D0)
                H |= RZ;
              break;
            case cQ:
              return Tg($, H, G, Z);
            case C4:
              return gg($, H, G, Z);
            case V4:
              return xg($, H, G, Z);
            case n$:
              return fO($, H, G, Z);
            case gq:
            case _q:
            case xq:
            case vq:
            case Tq:
            default: {
              if (typeof X === "object" && X !== null)
                switch (X.$$typeof) {
                  case KQ:
                    E = X0;
                    break Q;
                  case fX:
                    E = p;
                    break Q;
                  case j1:
                    E = d, P = cz(P);
                    break Q;
                  case lZ:
                    E = r;
                    break Q;
                  case d6:
                    E = t, P = null;
                    break Q;
                }
              var A = "";
              {
                if (X === void 0 || typeof X === "object" && X !== null && Object.keys(X).length === 0)
                  A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                var O = q ? j0(q) : null;
                if (O)
                  A += `

Check the render method of \`` + O + "`.";
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (X == null ? X : typeof X) + "." + A));
            }
          }
      var R = rQ(E, $, Z, H);
      return R.elementType = X, R.type = P, R.lanes = G, R._debugOwner = q, R;
    }
    function oz(X, Z, $) {
      var q = null;
      q = X._owner;
      var { type: H, key: G, props: E } = X, P = sz(H, G, E, q, Z, $);
      return P._debugSource = X._source, P._debugOwner = X._owner, P;
    }
    function YJ(X, Z, $, q) {
      var H = rQ(h, X, q, Z);
      return H.lanes = $, H;
    }
    function Tg(X, Z, $, q) {
      if (typeof X.id !== "string")
        K('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof X.id);
      var H = rQ(Z0, X, q, Z | h1);
      return H.elementType = cQ, H.lanes = $, H.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, H;
    }
    function gg(X, Z, $, q) {
      var H = rQ(n, X, q, Z);
      return H.elementType = C4, H.lanes = $, H;
    }
    function xg(X, Z, $, q) {
      var H = rQ(P0, X, q, Z);
      return H.elementType = V4, H.lanes = $, H;
    }
    function fO(X, Z, $, q) {
      var H = rQ(y0, X, q, Z);
      H.elementType = n$, H.lanes = $;
      var G = {
        isHidden: !1
      };
      return H.stateNode = G, H;
    }
    function az(X, Z, $) {
      var q = rQ(I, X, null, Z);
      return q.lanes = $, q;
    }
    function vg() {
      var X = rQ(k, null, null, D0);
      return X.elementType = "DELETED", X;
    }
    function hg(X) {
      var Z = rQ(I0, null, null, D0);
      return Z.stateNode = X, Z;
    }
    function rz(X, Z, $) {
      var q = X.children !== null ? X.children : [], H = rQ(D, q, X.key, Z);
      return H.lanes = $, H.stateNode = {
        containerInfo: X.containerInfo,
        pendingChildren: null,
        implementation: X.implementation
      }, H;
    }
    function mO(X, Z) {
      if (X === null)
        X = rQ(L, null, null, D0);
      return X.tag = Z.tag, X.key = Z.key, X.elementType = Z.elementType, X.type = Z.type, X.stateNode = Z.stateNode, X.return = Z.return, X.child = Z.child, X.sibling = Z.sibling, X.index = Z.index, X.ref = Z.ref, X.pendingProps = Z.pendingProps, X.memoizedProps = Z.memoizedProps, X.updateQueue = Z.updateQueue, X.memoizedState = Z.memoizedState, X.dependencies = Z.dependencies, X.mode = Z.mode, X.flags = Z.flags, X.subtreeFlags = Z.subtreeFlags, X.deletions = Z.deletions, X.lanes = Z.lanes, X.childLanes = Z.childLanes, X.alternate = Z.alternate, X.actualDuration = Z.actualDuration, X.actualStartTime = Z.actualStartTime, X.selfBaseDuration = Z.selfBaseDuration, X.treeBaseDuration = Z.treeBaseDuration, X._debugSource = Z._debugSource, X._debugOwner = Z._debugOwner, X._debugNeedsRemount = Z._debugNeedsRemount, X._debugHookTypes = Z._debugHookTypes, X;
    }
    function yg(X, Z, $, q, H) {
      this.tag = Z, this.containerInfo = X, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = IG, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = F8, this.eventTimes = t7(s), this.expirationTimes = t7(i1), this.pendingLanes = s, this.suspendedLanes = s, this.pingedLanes = s, this.expiredLanes = s, this.mutableReadLanes = s, this.finishedLanes = s, this.entangledLanes = s, this.entanglements = t7(s), this.identifierPrefix = q, this.onRecoverableError = H, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set;
        var G = this.pendingUpdatersLaneMap = [];
        for (var E = 0;E < S7; E++)
          G.push(/* @__PURE__ */ new Set);
      }
      switch (Z) {
        case N9:
          this._debugRootType = $ ? "hydrateRoot()" : "createRoot()";
          break;
        case n4:
          this._debugRootType = $ ? "hydrate()" : "render()";
          break;
      }
    }
    function bO(X, Z, $, q, H, G, E, P, A, O) {
      var R = new yg(X, Z, $, P, A), C = _g(Z, G);
      R.current = C, C.stateNode = R;
      {
        var B = {
          element: q,
          isDehydrated: $,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        C.memoizedState = B;
      }
      return W2(C), R;
    }
    var iz = "18.3.1";
    function fg(X, Z, $) {
      var q = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return c8(q), {
        $$typeof: o8,
        key: q == null ? null : "" + q,
        children: X,
        containerInfo: Z,
        implementation: $
      };
    }
    var tz, ez;
    tz = !1, ez = {};
    function uO(X) {
      if (!X)
        return aQ;
      var Z = YY(X), $ = AI(Z);
      if (Z.tag === F) {
        var q = Z.type;
        if (BZ(q))
          return EU(Z, q, $);
      }
      return $;
    }
    function mg(X, Z) {
      {
        var $ = YY(X);
        if ($ === void 0)
          if (typeof X.render === "function")
            throw new Error("Unable to find node on an unmounted component.");
          else {
            var q = Object.keys(X).join(",");
            throw new Error("Argument appears to not be a ReactComponent. Keys: " + q);
          }
        var H = hP($);
        if (H === null)
          return null;
        if (H.mode & R6) {
          var G = j0($) || "Component";
          if (!ez[G]) {
            ez[G] = !0;
            var E = G8;
            try {
              if (A6(H), $.mode & R6)
                K("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", Z, Z, G);
              else
                K("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", Z, Z, G);
            } finally {
              if (E)
                A6(E);
              else
                z8();
            }
          }
        }
        return H.stateNode;
      }
    }
    function cO(X, Z, $, q, H, G, E, P) {
      var A = !1, O = null;
      return bO(X, Z, A, O, $, q, H, G, E);
    }
    function pO(X, Z, $, q, H, G, E, P, A, O) {
      var R = !0, C = bO($, q, R, X, H, G, E, P, A);
      C.context = uO(null);
      var B = C.current, x = FQ(), v = JJ(B), f = G4(x, v);
      return f.callback = Z !== void 0 && Z !== null ? Z : null, a4(B, f, v), nT(C, v, x), C;
    }
    function zK(X, Z, $, q) {
      HB(Z, X);
      var H = Z.current, G = FQ(), E = JJ(H);
      SB(E);
      var P = uO($);
      if (Z.context === null)
        Z.context = P;
      else
        Z.pendingContext = P;
      if (wZ && G8 !== null && !tz)
        tz = !0, K(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, j0(G8) || "Unknown");
      var A = G4(G, E);
      if (A.payload = {
        element: X
      }, q = q === void 0 ? null : q, q !== null) {
        if (typeof q !== "function")
          K("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", q);
        A.callback = q;
      }
      var O = a4(H, A, E);
      if (O !== null)
        e6(O, H, E, G), C9(O, H, E);
      return E;
    }
    function L5(X) {
      var Z = X.current;
      if (!Z.child)
        return null;
      switch (Z.child.tag) {
        case k:
          return CG(Z.child.stateNode);
        default:
          return Z.child.stateNode;
      }
    }
    function bg(X) {
      switch (X.tag) {
        case w: {
          var Z = X.stateNode;
          if (h3(Z)) {
            var $ = fB(Z);
            rT(Z, $);
          }
          break;
        }
        case n: {
          F4(function() {
            var H = IQ(X, v0);
            if (H !== null) {
              var G = FQ();
              e6(H, X, v0, G);
            }
          });
          var q = v0;
          QN(X, q);
          break;
        }
      }
    }
    function dO(X, Z) {
      var $ = X.memoizedState;
      if ($ !== null && $.dehydrated !== null)
        $.retryLane = dB($.retryLane, Z);
    }
    function QN(X, Z) {
      dO(X, Z);
      var $ = X.alternate;
      if ($)
        dO($, Z);
    }
    function ug(X) {
      if (X.tag !== n)
        return;
      var Z = rq, $ = IQ(X, Z);
      if ($ !== null) {
        var q = FQ();
        e6($, X, Z, q);
      }
      QN(X, Z);
    }
    function cg(X) {
      if (X.tag !== n)
        return;
      var Z = JJ(X), $ = IQ(X, Z);
      if ($ !== null) {
        var q = FQ();
        e6($, X, Z, q);
      }
      QN(X, Z);
    }
    function lO(X) {
      var Z = QB(X);
      if (Z === null)
        return null;
      return Z.stateNode;
    }
    var nO = function(X) {
      return null;
    };
    function pg(X) {
      return nO(X);
    }
    var sO = function(X) {
      return !1;
    };
    function dg(X) {
      return sO(X);
    }
    var oO = null, aO = null, rO = null, iO = null, tO = null, eO = null, Qw = null, Xw = null, Zw = null;
    {
      var Jw = function(X, Z, $) {
        var q = Z[$], H = B1(X) ? X.slice() : $1({}, X);
        if ($ + 1 === Z.length) {
          if (B1(H))
            H.splice(q, 1);
          else
            delete H[q];
          return H;
        }
        return H[q] = Jw(X[q], Z, $ + 1), H;
      }, $w = function(X, Z) {
        return Jw(X, Z, 0);
      }, Yw = function(X, Z, $, q) {
        var H = Z[q], G = B1(X) ? X.slice() : $1({}, X);
        if (q + 1 === Z.length) {
          var E = $[q];
          if (G[E] = G[H], B1(G))
            G.splice(H, 1);
          else
            delete G[H];
        } else
          G[H] = Yw(X[H], Z, $, q + 1);
        return G;
      }, qw = function(X, Z, $) {
        if (Z.length !== $.length) {
          W("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var q = 0;q < $.length - 1; q++)
            if (Z[q] !== $[q]) {
              W("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Yw(X, Z, $, 0);
      }, Ww = function(X, Z, $, q) {
        if ($ >= Z.length)
          return q;
        var H = Z[$], G = B1(X) ? X.slice() : $1({}, X);
        return G[H] = Ww(X[H], Z, $ + 1, q), G;
      }, Kw = function(X, Z, $) {
        return Ww(X, Z, 0, $);
      }, XN = function(X, Z) {
        var $ = X.memoizedState;
        while ($ !== null && Z > 0)
          $ = $.next, Z--;
        return $;
      };
      oO = function(X, Z, $, q) {
        var H = XN(X, Z);
        if (H !== null) {
          var G = Kw(H.memoizedState, $, q);
          H.memoizedState = G, H.baseState = G, X.memoizedProps = $1({}, X.memoizedProps);
          var E = IQ(X, v0);
          if (E !== null)
            e6(E, X, v0, i1);
        }
      }, aO = function(X, Z, $) {
        var q = XN(X, Z);
        if (q !== null) {
          var H = $w(q.memoizedState, $);
          q.memoizedState = H, q.baseState = H, X.memoizedProps = $1({}, X.memoizedProps);
          var G = IQ(X, v0);
          if (G !== null)
            e6(G, X, v0, i1);
        }
      }, rO = function(X, Z, $, q) {
        var H = XN(X, Z);
        if (H !== null) {
          var G = qw(H.memoizedState, $, q);
          H.memoizedState = G, H.baseState = G, X.memoizedProps = $1({}, X.memoizedProps);
          var E = IQ(X, v0);
          if (E !== null)
            e6(E, X, v0, i1);
        }
      }, iO = function(X, Z, $) {
        if (X.pendingProps = Kw(X.memoizedProps, Z, $), X.alternate)
          X.alternate.pendingProps = X.pendingProps;
        var q = IQ(X, v0);
        if (q !== null)
          e6(q, X, v0, i1);
      }, tO = function(X, Z) {
        if (X.pendingProps = $w(X.memoizedProps, Z), X.alternate)
          X.alternate.pendingProps = X.pendingProps;
        var $ = IQ(X, v0);
        if ($ !== null)
          e6($, X, v0, i1);
      }, eO = function(X, Z, $) {
        if (X.pendingProps = qw(X.memoizedProps, Z, $), X.alternate)
          X.alternate.pendingProps = X.pendingProps;
        var q = IQ(X, v0);
        if (q !== null)
          e6(q, X, v0, i1);
      }, Qw = function(X) {
        var Z = IQ(X, v0);
        if (Z !== null)
          e6(Z, X, v0, i1);
      }, Xw = function(X) {
        nO = X;
      }, Zw = function(X) {
        sO = X;
      };
    }
    function lg(X) {
      var Z = hP(X);
      if (Z === null)
        return null;
      return Z.stateNode;
    }
    function ng(X) {
      return null;
    }
    function sg() {
      return G8;
    }
    function og(X) {
      var Z = X.findFiberByHostInstance, $ = Q.ReactCurrentDispatcher;
      return KB({
        bundleType: X.bundleType,
        version: X.version,
        rendererPackageName: X.rendererPackageName,
        rendererConfig: X.rendererConfig,
        overrideHookState: oO,
        overrideHookStateDeletePath: aO,
        overrideHookStateRenamePath: rO,
        overrideProps: iO,
        overridePropsDeletePath: tO,
        overridePropsRenamePath: eO,
        setErrorHandler: Xw,
        setSuspenseHandler: Zw,
        scheduleUpdate: Qw,
        currentDispatcherRef: $,
        findHostInstanceByFiber: lg,
        findFiberByHostInstance: Z || ng,
        findHostInstancesForRefresh: kg,
        scheduleRefresh: Dg,
        scheduleRoot: Rg,
        setRefreshHandler: Mg,
        getCurrentFiber: sg,
        reconcilerVersion: iz
      });
    }
    var Hw = typeof reportError === "function" ? reportError : function(X) {
      console.error(X);
    };
    function ZN(X) {
      this._internalRoot = X;
    }
    O5.prototype.render = ZN.prototype.render = function(X) {
      var Z = this._internalRoot;
      if (Z === null)
        throw new Error("Cannot update an unmounted root.");
      {
        if (typeof arguments[1] === "function")
          K("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        else if (w5(arguments[1]))
          K("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.");
        else if (typeof arguments[1] !== "undefined")
          K("You passed a second argument to root.render(...) but it only accepts one argument.");
        var $ = Z.containerInfo;
        if ($.nodeType !== h6) {
          var q = lO(Z.current);
          if (q) {
            if (q.parentNode !== $)
              K("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
          }
        }
      }
      zK(X, Z, null, null);
    }, O5.prototype.unmount = ZN.prototype.unmount = function() {
      if (typeof arguments[0] === "function")
        K("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var X = this._internalRoot;
      if (X !== null) {
        this._internalRoot = null;
        var Z = X.containerInfo;
        if (MO())
          K("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.");
        F4(function() {
          zK(null, X, null, null);
        }), WU(Z);
      }
    };
    function ag(X, Z) {
      if (!w5(X))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Gw(X);
      var $ = !1, q = !1, H = "", G = Hw, E = null;
      if (Z !== null && Z !== void 0) {
        if (Z.hydrate)
          W("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.");
        else if (typeof Z === "object" && Z !== null && Z.$$typeof === s8)
          K(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`);
        if (Z.unstable_strictMode === !0)
          $ = !0;
        if (Z.identifierPrefix !== void 0)
          H = Z.identifierPrefix;
        if (Z.onRecoverableError !== void 0)
          G = Z.onRecoverableError;
        if (Z.transitionCallbacks !== void 0)
          E = Z.transitionCallbacks;
      }
      var P = cO(X, N9, null, $, q, H, G);
      Y9(P.current, X);
      var A = X.nodeType === h6 ? X.parentNode : X;
      return UW(A), new ZN(P);
    }
    function O5(X) {
      this._internalRoot = X;
    }
    function rg(X) {
      if (X)
        WC(X);
    }
    O5.prototype.unstable_scheduleHydration = rg;
    function ig(X, Z, $) {
      if (!w5(X))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      if (Gw(X), Z === void 0)
        K("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var q = $ != null ? $ : null, H = $ != null && $.hydratedSources || null, G = !1, E = !1, P = "", A = Hw;
      if ($ !== null && $ !== void 0) {
        if ($.unstable_strictMode === !0)
          G = !0;
        if ($.identifierPrefix !== void 0)
          P = $.identifierPrefix;
        if ($.onRecoverableError !== void 0)
          A = $.onRecoverableError;
      }
      var O = pO(Z, null, X, N9, q, G, E, P, A);
      if (Y9(O.current, X), UW(X), H)
        for (var R = 0;R < H.length; R++) {
          var C = H[R];
          iI(O, C);
        }
      return new O5(O);
    }
    function w5(X) {
      return !!(X && (X.nodeType === VQ || X.nodeType === iZ || X.nodeType === W7 || !z6));
    }
    function NK(X) {
      return !!(X && (X.nodeType === VQ || X.nodeType === iZ || X.nodeType === W7 || X.nodeType === h6 && X.nodeValue === " react-mount-point-unstable "));
    }
    function Gw(X) {
      {
        if (X.nodeType === VQ && X.tagName && X.tagName.toUpperCase() === "BODY")
          K("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.");
        if (VW(X))
          if (X._reactRootContainer)
            K("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.");
          else
            K("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.");
      }
    }
    var tg = Q.ReactCurrentOwner, zw;
    zw = function(X) {
      if (X._reactRootContainer && X.nodeType !== h6) {
        var Z = lO(X._reactRootContainer.current);
        if (Z) {
          if (Z.parentNode !== X)
            K("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
        }
      }
      var $ = !!X._reactRootContainer, q = JN(X), H = !!(q && d4(q));
      if (H && !$)
        K("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.");
      if (X.nodeType === VQ && X.tagName && X.tagName.toUpperCase() === "BODY")
        K("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function JN(X) {
      if (!X)
        return null;
      if (X.nodeType === iZ)
        return X.documentElement;
      else
        return X.firstChild;
    }
    function Nw() {}
    function eg(X, Z, $, q, H) {
      if (H) {
        if (typeof q === "function") {
          var G = q;
          q = function() {
            var B = L5(E);
            G.call(B);
          };
        }
        var E = pO(Z, q, X, n4, null, !1, !1, "", Nw);
        X._reactRootContainer = E, Y9(E.current, X);
        var P = X.nodeType === h6 ? X.parentNode : X;
        return UW(P), F4(), E;
      } else {
        var A;
        while (A = X.lastChild)
          X.removeChild(A);
        if (typeof q === "function") {
          var O = q;
          q = function() {
            var B = L5(R);
            O.call(B);
          };
        }
        var R = cO(X, n4, null, !1, !1, "", Nw);
        X._reactRootContainer = R, Y9(R.current, X);
        var C = X.nodeType === h6 ? X.parentNode : X;
        return UW(C), F4(function() {
          zK(Z, R, $, q);
        }), R;
      }
    }
    function Qx(X, Z) {
      if (X !== null && typeof X !== "function")
        K("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", Z, X);
    }
    function M5(X, Z, $, q, H) {
      zw($), Qx(H === void 0 ? null : H, "render");
      var G = $._reactRootContainer, E;
      if (!G)
        E = eg($, Z, X, H, q);
      else {
        if (E = G, typeof H === "function") {
          var P = H;
          H = function() {
            var A = L5(E);
            P.call(A);
          };
        }
        zK(Z, E, X, H);
      }
      return L5(E);
    }
    var Ew = !1;
    function Xx(X) {
      {
        if (!Ew)
          Ew = !0, K("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node");
        var Z = tg.current;
        if (Z !== null && Z.stateNode !== null) {
          var $ = Z.stateNode._warnedAboutRefsInRender;
          if (!$)
            K("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", _0(Z.type) || "A component");
          Z.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      if (X == null)
        return null;
      if (X.nodeType === VQ)
        return X;
      return mg(X, "findDOMNode");
    }
    function Zx(X, Z, $) {
      if (K("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !NK(Z))
        throw new Error("Target container is not a DOM element.");
      {
        var q = VW(Z) && Z._reactRootContainer === void 0;
        if (q)
          K("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return M5(null, X, Z, !0, $);
    }
    function Jx(X, Z, $) {
      if (K("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !NK(Z))
        throw new Error("Target container is not a DOM element.");
      {
        var q = VW(Z) && Z._reactRootContainer === void 0;
        if (q)
          K("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return M5(null, X, Z, !1, $);
    }
    function $x(X, Z, $, q) {
      if (K("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !NK($))
        throw new Error("Target container is not a DOM element.");
      if (X == null || !sj(X))
        throw new Error("parentComponent must be a valid React Component");
      return M5(X, Z, $, !1, q);
    }
    var Fw = !1;
    function Yx(X) {
      if (!Fw)
        Fw = !0, K("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot");
      if (!NK(X))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var Z = VW(X) && X._reactRootContainer === void 0;
        if (Z)
          K("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (X._reactRootContainer) {
        {
          var $ = JN(X), q = $ && !d4($);
          if (q)
            K("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return F4(function() {
          M5(null, null, X, !1, function() {
            X._reactRootContainer = null, WU(X);
          });
        }), !0;
      } else {
        {
          var H = JN(X), G = !!(H && d4(H)), E = X.nodeType === VQ && NK(X.parentNode) && !!X.parentNode._reactRootContainer;
          if (G)
            K("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", E ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    if (iB(bg), eB(ug), QC(cg), XC(pX), ZC(oB), typeof Map !== "function" || Map.prototype == null || typeof Map.prototype.forEach !== "function" || typeof Set !== "function" || Set.prototype == null || typeof Set.prototype.clear !== "function" || typeof Set.prototype.forEach !== "function")
      K("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    hj(JS), mj(xz, iT, F4);
    function qx(X, Z) {
      var $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!w5(Z))
        throw new Error("Target container is not a DOM element.");
      return fg(X, Z, null, $);
    }
    function Wx(X, Z, $, q) {
      return $x(X, Z, $, q);
    }
    var $N = {
      usingClientEntryPoint: !1,
      Events: [d4, MY, q9, kP, jP, xz]
    };
    function Kx(X, Z) {
      if (!$N.usingClientEntryPoint)
        K('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".');
      return ag(X, Z);
    }
    function Hx(X, Z, $) {
      if (!$N.usingClientEntryPoint)
        K('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".');
      return ig(X, Z, $);
    }
    function Gx(X) {
      if (MO())
        K("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
      return F4(X);
    }
    var zx = og({
      findFiberByHostInstance: Y$,
      bundleType: 1,
      version: iz,
      rendererPackageName: "react-dom"
    });
    if (!zx && d1 && window.top === window.self) {
      if (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1) {
        var Pw = window.location.protocol;
        if (/^(https?|file):$/.test(Pw))
          console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Pw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
      }
    }
    if (wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $N, wx.createPortal = qx, wx.createRoot = Kx, wx.findDOMNode = Xx, wx.flushSync = Gx, wx.hydrate = Zx, wx.hydrateRoot = Hx, wx.render = Jx, wx.unmountComponentAtNode = Yx, wx.unstable_batchedUpdates = xz, wx.unstable_renderSubtreeIntoContainer = Wx, wx.version = iz, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function")
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error);
  })();
});

// node_modules/react-dom/index.js
var qN = t1((yu, Lw) => {
  var Mx = L6(Uw(), 1);
  Lw.exports = Mx;
});

// node_modules/react-dom/client.js
var Ow = t1((Dx) => {
  var oY = L6(qN(), 1);
  sY = oY.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Dx.createRoot = function(Q, J) {
    sY.usingClientEntryPoint = !0;
    try {
      return oY.createRoot(Q, J);
    } finally {
      sY.usingClientEntryPoint = !1;
    }
  }, Dx.hydrateRoot = function(Q, J, Y) {
    sY.usingClientEntryPoint = !0;
    try {
      return oY.hydrateRoot(Q, J, Y);
    } finally {
      sY.usingClientEntryPoint = !1;
    }
  };
  var sY;
});

// node_modules/react-is/cjs/react-is.development.js
var ww = t1((Rx) => {
  (function() {
    var Q = typeof Symbol === "function" && Symbol.for, J = Q ? Symbol.for("react.element") : 60103, Y = Q ? Symbol.for("react.portal") : 60106, W = Q ? Symbol.for("react.fragment") : 60107, K = Q ? Symbol.for("react.strict_mode") : 60108, z = Q ? Symbol.for("react.profiler") : 60114, N = Q ? Symbol.for("react.provider") : 60109, F = Q ? Symbol.for("react.context") : 60110, L = Q ? Symbol.for("react.async_mode") : 60111, w = Q ? Symbol.for("react.concurrent_mode") : 60111, D = Q ? Symbol.for("react.forward_ref") : 60112, k = Q ? Symbol.for("react.suspense") : 60113, I = Q ? Symbol.for("react.suspense_list") : 60120, h = Q ? Symbol.for("react.memo") : 60115, o = Q ? Symbol.for("react.lazy") : 60116, p = Q ? Symbol.for("react.block") : 60121, X0 = Q ? Symbol.for("react.fundamental") : 60117, d = Q ? Symbol.for("react.responder") : 60118, Z0 = Q ? Symbol.for("react.scope") : 60119;
    function n(J0) {
      return typeof J0 === "string" || typeof J0 === "function" || J0 === W || J0 === w || J0 === z || J0 === K || J0 === k || J0 === I || typeof J0 === "object" && J0 !== null && (J0.$$typeof === o || J0.$$typeof === h || J0.$$typeof === N || J0.$$typeof === F || J0.$$typeof === D || J0.$$typeof === X0 || J0.$$typeof === d || J0.$$typeof === Z0 || J0.$$typeof === p);
    }
    function r(J0) {
      if (typeof J0 === "object" && J0 !== null) {
        var K6 = J0.$$typeof;
        switch (K6) {
          case J:
            var k1 = J0.type;
            switch (k1) {
              case L:
              case w:
              case W:
              case z:
              case K:
              case k:
                return k1;
              default:
                var _1 = k1 && k1.$$typeof;
                switch (_1) {
                  case F:
                  case D:
                  case o:
                  case h:
                  case N:
                    return _1;
                  default:
                    return K6;
                }
            }
          case Y:
            return K6;
        }
      }
      return;
    }
    var i = L, t = w, O0 = F, I0 = N, P0 = J, A0 = D, y0 = W, O1 = o, r0 = h, x1 = Y, k0 = z, F1 = K, S1 = k, w6 = !1;
    function q6(J0) {
      if (!w6)
        w6 = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
      return z6(J0) || r(J0) === L;
    }
    function z6(J0) {
      return r(J0) === w;
    }
    function M6(J0) {
      return r(J0) === F;
    }
    function U1(J0) {
      return r(J0) === N;
    }
    function f0(J0) {
      return typeof J0 === "object" && J0 !== null && J0.$$typeof === J;
    }
    function j6(J0) {
      return r(J0) === D;
    }
    function $8(J0) {
      return r(J0) === W;
    }
    function l1(J0) {
      return r(J0) === o;
    }
    function N6(J0) {
      return r(J0) === h;
    }
    function W6(J0) {
      return r(J0) === Y;
    }
    function I1(J0) {
      return r(J0) === z;
    }
    function u0(J0) {
      return r(J0) === K;
    }
    function d1(J0) {
      return r(J0) === k;
    }
    Rx.AsyncMode = i, Rx.ConcurrentMode = t, Rx.ContextConsumer = O0, Rx.ContextProvider = I0, Rx.Element = P0, Rx.ForwardRef = A0, Rx.Fragment = y0, Rx.Lazy = O1, Rx.Memo = r0, Rx.Portal = x1, Rx.Profiler = k0, Rx.StrictMode = F1, Rx.Suspense = S1, Rx.isAsyncMode = q6, Rx.isConcurrentMode = z6, Rx.isContextConsumer = M6, Rx.isContextProvider = U1, Rx.isElement = f0, Rx.isForwardRef = j6, Rx.isFragment = $8, Rx.isLazy = l1, Rx.isMemo = N6, Rx.isPortal = W6, Rx.isProfiler = I1, Rx.isStrictMode = u0, Rx.isSuspense = d1, Rx.isValidElementType = n, Rx.typeOf = r;
  })();
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var Cw = t1((Ac, Bw) => {
  var aY = L6(ww(), 1), kx = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, jx = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, Bx = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, kw = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, WN = {};
  WN[aY.ForwardRef] = Bx;
  WN[aY.Memo] = kw;
  function Mw(Q) {
    if (aY.isMemo(Q))
      return kw;
    return WN[Q.$$typeof] || kx;
  }
  var { defineProperty: Cx, getOwnPropertyNames: Vx, getOwnPropertySymbols: Dw, getOwnPropertyDescriptor: Sx, getPrototypeOf: Ix, prototype: Rw } = Object;
  function jw(Q, J, Y) {
    if (typeof J !== "string") {
      if (Rw) {
        var W = Ix(J);
        if (W && W !== Rw)
          jw(Q, W, Y);
      }
      var K = Vx(J);
      if (Dw)
        K = K.concat(Dw(J));
      var z = Mw(Q), N = Mw(J);
      for (var F = 0;F < K.length; ++F) {
        var L = K[F];
        if (!jx[L] && !(Y && Y[L]) && !(N && N[L]) && !(z && z[L])) {
          var w = Sx(J, L);
          try {
            Cx(Q, L, w);
          } catch (D) {}
        }
      }
    }
    return Q;
  }
  Bw.exports = jw;
});

// node_modules/object-assign/index.js
var Iw = t1((Uc, Sw) => {
  var Vw = Object.getOwnPropertySymbols, _x = Object.prototype.hasOwnProperty, Tx = Object.prototype.propertyIsEnumerable;
  function gx(Q) {
    if (Q === null || Q === void 0)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(Q);
  }
  function xx() {
    try {
      if (!Object.assign)
        return !1;
      var Q = new String("abc");
      if (Q[5] = "de", Object.getOwnPropertyNames(Q)[0] === "5")
        return !1;
      var J = {};
      for (var Y = 0;Y < 10; Y++)
        J["_" + String.fromCharCode(Y)] = Y;
      var W = Object.getOwnPropertyNames(J).map(function(z) {
        return J[z];
      });
      if (W.join("") !== "0123456789")
        return !1;
      var K = {};
      if ("abcdefghijklmnopqrst".split("").forEach(function(z) {
        K[z] = z;
      }), Object.keys(Object.assign({}, K)).join("") !== "abcdefghijklmnopqrst")
        return !1;
      return !0;
    } catch (z) {
      return !1;
    }
  }
  Sw.exports = xx() ? Object.assign : function(Q, J) {
    var Y, W = gx(Q), K;
    for (var z = 1;z < arguments.length; z++) {
      Y = Object(arguments[z]);
      for (var N in Y)
        if (_x.call(Y, N))
          W[N] = Y[N];
      if (Vw) {
        K = Vw(Y);
        for (var F = 0;F < K.length; F++)
          if (Tx.call(Y, K[F]))
            W[K[F]] = Y[K[F]];
      }
    }
    return W;
  };
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var Tw = t1((Lc, _w) => {
  var vx = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  _w.exports = vx;
});

// node_modules/prop-types/lib/has.js
var xw = t1((Oc, gw) => {
  gw.exports = Function.call.bind(Object.prototype.hasOwnProperty);
});

// node_modules/prop-types/checkPropTypes.js
var yw = t1((wc, hw) => {
  var KN = function() {};
  HN = Tw(), PK = {}, GN = xw(), KN = function(Q) {
    var J = "Warning: " + Q;
    if (typeof console !== "undefined")
      console.error(J);
    try {
      throw new Error(J);
    } catch (Y) {}
  };
  var HN, PK, GN;
  function vw(Q, J, Y, W, K) {
    for (var z in Q)
      if (GN(Q, z)) {
        var N;
        try {
          if (typeof Q[z] !== "function") {
            var F = Error((W || "React class") + ": " + Y + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Q[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
            throw F.name = "Invariant Violation", F;
          }
          N = Q[z](J, z, W, Y, null, HN);
        } catch (w) {
          N = w;
        }
        if (N && !(N instanceof Error))
          KN((W || "React class") + ": type specification of " + Y + " `" + z + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof N + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
        if (N instanceof Error && !(N.message in PK)) {
          PK[N.message] = !0;
          var L = K ? K() : "";
          KN("Failed " + Y + " type: " + N.message + (L != null ? L : ""));
        }
      }
  }
  vw.resetWarningCache = function() {
    PK = {};
  };
  hw.exports = vw;
});

// node_modules/streamlit-component-lib/node_modules/react/cjs/react.development.js
var fw = t1((hx) => {
  (function() {
    var Q = Iw(), J = yw(), Y = "16.14.0", W = typeof Symbol === "function" && Symbol.for, K = W ? Symbol.for("react.element") : 60103, z = W ? Symbol.for("react.portal") : 60106, N = W ? Symbol.for("react.fragment") : 60107, F = W ? Symbol.for("react.strict_mode") : 60108, L = W ? Symbol.for("react.profiler") : 60114, w = W ? Symbol.for("react.provider") : 60109, D = W ? Symbol.for("react.context") : 60110, k = W ? Symbol.for("react.concurrent_mode") : 60111, I = W ? Symbol.for("react.forward_ref") : 60112, h = W ? Symbol.for("react.suspense") : 60113, o = W ? Symbol.for("react.suspense_list") : 60120, p = W ? Symbol.for("react.memo") : 60115, X0 = W ? Symbol.for("react.lazy") : 60116, d = W ? Symbol.for("react.block") : 60121, Z0 = W ? Symbol.for("react.fundamental") : 60117, n = W ? Symbol.for("react.responder") : 60118, r = W ? Symbol.for("react.scope") : 60119, i = typeof Symbol === "function" && Symbol.iterator, t = "@@iterator";
    function O0(M) {
      if (M === null || typeof M !== "object")
        return null;
      var V = i && M[i] || M[t];
      if (typeof V === "function")
        return V;
      return null;
    }
    var I0 = {
      current: null
    }, P0 = {
      suspense: null
    }, A0 = {
      current: null
    }, y0 = /^(.*)[\\\/]/;
    function O1(M, V, y) {
      var l = "";
      if (V) {
        var q0 = V.fileName, Y1 = q0.replace(y0, "");
        if (/^index\./.test(Y1)) {
          var C0 = q0.match(y0);
          if (C0) {
            var b0 = C0[1];
            if (b0) {
              var P6 = b0.replace(y0, "");
              Y1 = P6 + "/" + Y1;
            }
          }
        }
        l = " (at " + Y1 + ":" + V.lineNumber + ")";
      } else if (y)
        l = " (created by " + y + ")";
      return `
    in ` + (M || "Unknown") + l;
    }
    var r0 = 1;
    function x1(M) {
      return M._status === r0 ? M._result : null;
    }
    function k0(M, V, y) {
      var l = V.displayName || V.name || "";
      return M.displayName || (l !== "" ? y + "(" + l + ")" : y);
    }
    function F1(M) {
      if (M == null)
        return null;
      if (typeof M.tag === "number")
        f0("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
      if (typeof M === "function")
        return M.displayName || M.name || null;
      if (typeof M === "string")
        return M;
      switch (M) {
        case N:
          return "Fragment";
        case z:
          return "Portal";
        case L:
          return "Profiler";
        case F:
          return "StrictMode";
        case h:
          return "Suspense";
        case o:
          return "SuspenseList";
      }
      if (typeof M === "object")
        switch (M.$$typeof) {
          case D:
            return "Context.Consumer";
          case w:
            return "Context.Provider";
          case I:
            return k0(M, M.render, "ForwardRef");
          case p:
            return F1(M.type);
          case d:
            return F1(M.render);
          case X0: {
            var V = M, y = x1(V);
            if (y)
              return F1(y);
            break;
          }
        }
      return null;
    }
    var S1 = {}, w6 = null;
    function q6(M) {
      w6 = M;
    }
    S1.getCurrentStack = null, S1.getStackAddendum = function() {
      var M = "";
      if (w6) {
        var V = F1(w6.type), y = w6._owner;
        M += O1(V, w6._source, y && F1(y.type));
      }
      var l = S1.getCurrentStack;
      if (l)
        M += l() || "";
      return M;
    };
    var z6 = {
      current: !1
    }, M6 = {
      ReactCurrentDispatcher: I0,
      ReactCurrentBatchConfig: P0,
      ReactCurrentOwner: A0,
      IsSomeRendererActing: z6,
      assign: Q
    };
    Q(M6, {
      ReactDebugCurrentFrame: S1,
      ReactComponentTreeHook: {}
    });
    function U1(M) {
      {
        for (var V = arguments.length, y = new Array(V > 1 ? V - 1 : 0), l = 1;l < V; l++)
          y[l - 1] = arguments[l];
        j6("warn", M, y);
      }
    }
    function f0(M) {
      {
        for (var V = arguments.length, y = new Array(V > 1 ? V - 1 : 0), l = 1;l < V; l++)
          y[l - 1] = arguments[l];
        j6("error", M, y);
      }
    }
    function j6(M, V, y) {
      {
        var l = y.length > 0 && typeof y[y.length - 1] === "string" && y[y.length - 1].indexOf(`
    in`) === 0;
        if (!l) {
          var q0 = M6.ReactDebugCurrentFrame, Y1 = q0.getStackAddendum();
          if (Y1 !== "")
            V += "%s", y = y.concat([Y1]);
        }
        var C0 = y.map(function(_0) {
          return "" + _0;
        });
        C0.unshift("Warning: " + V), Function.prototype.apply.call(console[M], console, C0);
        try {
          var b0 = 0, P6 = "Warning: " + V.replace(/%s/g, function() {
            return y[b0++];
          });
          throw new Error(P6);
        } catch (_0) {}
      }
    }
    var $8 = {};
    function l1(M, V) {
      {
        var y = M.constructor, l = y && (y.displayName || y.name) || "ReactClass", q0 = l + "." + V;
        if ($8[q0])
          return;
        f0("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", V, l), $8[q0] = !0;
      }
    }
    var N6 = {
      isMounted: function(M) {
        return !1;
      },
      enqueueForceUpdate: function(M, V, y) {
        l1(M, "forceUpdate");
      },
      enqueueReplaceState: function(M, V, y, l) {
        l1(M, "replaceState");
      },
      enqueueSetState: function(M, V, y, l) {
        l1(M, "setState");
      }
    }, W6 = {};
    Object.freeze(W6);
    function I1(M, V, y) {
      this.props = M, this.context = V, this.refs = W6, this.updater = y || N6;
    }
    I1.prototype.isReactComponent = {}, I1.prototype.setState = function(M, V) {
      if (!(typeof M === "object" || typeof M === "function" || M == null))
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, M, V, "setState");
    }, I1.prototype.forceUpdate = function(M) {
      this.updater.enqueueForceUpdate(this, M, "forceUpdate");
    };
    {
      var u0 = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, d1 = function(M, V) {
        Object.defineProperty(I1.prototype, M, {
          get: function() {
            U1("%s(...) is deprecated in plain JavaScript React classes. %s", V[0], V[1]);
            return;
          }
        });
      };
      for (var J0 in u0)
        if (u0.hasOwnProperty(J0))
          d1(J0, u0[J0]);
    }
    function K6() {}
    K6.prototype = I1.prototype;
    function k1(M, V, y) {
      this.props = M, this.context = V, this.refs = W6, this.updater = y || N6;
    }
    var _1 = k1.prototype = new K6;
    _1.constructor = k1, Q(_1, I1.prototype), _1.isPureReactComponent = !0;
    function x6() {
      var M = {
        current: null
      };
      return Object.seal(M), M;
    }
    var c8 = Object.prototype.hasOwnProperty, u6 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, R8, Y8, q8;
    q8 = {};
    function c6(M) {
      if (c8.call(M, "ref")) {
        var V = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function E6(M) {
      if (c8.call(M, "key")) {
        var V = Object.getOwnPropertyDescriptor(M, "key").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function RQ(M, V) {
      var y = function() {
        if (!R8)
          R8 = !0, f0("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", V);
      };
      y.isReactWarning = !0, Object.defineProperty(M, "key", {
        get: y,
        configurable: !0
      });
    }
    function k8(M, V) {
      var y = function() {
        if (!Y8)
          Y8 = !0, f0("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", V);
      };
      y.isReactWarning = !0, Object.defineProperty(M, "ref", {
        get: y,
        configurable: !0
      });
    }
    function qQ(M) {
      if (typeof M.ref === "string" && A0.current && M.__self && A0.current.stateNode !== M.__self) {
        var V = F1(A0.current.type);
        if (!q8[V])
          f0('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref', F1(A0.current.type), M.ref), q8[V] = !0;
      }
    }
    var p6 = function(M, V, y, l, q0, Y1, C0) {
      var b0 = {
        $$typeof: K,
        type: M,
        key: V,
        ref: y,
        props: C0,
        _owner: Y1
      };
      if (b0._store = {}, Object.defineProperty(b0._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b0, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(b0, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q0
      }), Object.freeze)
        Object.freeze(b0.props), Object.freeze(b0);
      return b0;
    };
    function p8(M, V, y) {
      var l, q0 = {}, Y1 = null, C0 = null, b0 = null, P6 = null;
      if (V != null) {
        if (c6(V))
          C0 = V.ref, qQ(V);
        if (E6(V))
          Y1 = "" + V.key;
        b0 = V.__self === void 0 ? null : V.__self, P6 = V.__source === void 0 ? null : V.__source;
        for (l in V)
          if (c8.call(V, l) && !u6.hasOwnProperty(l))
            q0[l] = V[l];
      }
      var _0 = arguments.length - 2;
      if (_0 === 1)
        q0.children = y;
      else if (_0 > 1) {
        var B8 = Array(_0);
        for (var l6 = 0;l6 < _0; l6++)
          B8[l6] = arguments[l6 + 2];
        if (Object.freeze)
          Object.freeze(B8);
        q0.children = B8;
      }
      if (M && M.defaultProps) {
        var j0 = M.defaultProps;
        for (l in j0)
          if (q0[l] === void 0)
            q0[l] = j0[l];
      }
      if (Y1 || C0) {
        var HQ = typeof M === "function" ? M.displayName || M.name || "Unknown" : M;
        if (Y1)
          RQ(q0, HQ);
        if (C0)
          k8(q0, HQ);
      }
      return p6(M, Y1, C0, b0, P6, A0.current, q0);
    }
    function d8(M, V) {
      var y = p6(M.type, V, M.ref, M._self, M._source, M._owner, M.props);
      return y;
    }
    function kQ(M, V, y) {
      if (M === null || M === void 0)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
      var l, q0 = Q({}, M.props), Y1 = M.key, C0 = M.ref, b0 = M._self, P6 = M._source, _0 = M._owner;
      if (V != null) {
        if (c6(V))
          C0 = V.ref, _0 = A0.current;
        if (E6(V))
          Y1 = "" + V.key;
        var B8;
        if (M.type && M.type.defaultProps)
          B8 = M.type.defaultProps;
        for (l in V)
          if (c8.call(V, l) && !u6.hasOwnProperty(l))
            if (V[l] === void 0 && B8 !== void 0)
              q0[l] = B8[l];
            else
              q0[l] = V[l];
      }
      var l6 = arguments.length - 2;
      if (l6 === 1)
        q0.children = y;
      else if (l6 > 1) {
        var j0 = Array(l6);
        for (var HQ = 0;HQ < l6; HQ++)
          j0[HQ] = arguments[HQ + 2];
        q0.children = j0;
      }
      return p6(M.type, Y1, C0, b0, P6, _0, q0);
    }
    function Q0(M) {
      return typeof M === "object" && M !== null && M.$$typeof === K;
    }
    var U0 = ".", g0 = ":";
    function w1(M) {
      var V = /[=:]/g, y = {
        "=": "=0",
        ":": "=2"
      }, l = ("" + M).replace(V, function(q0) {
        return y[q0];
      });
      return "$" + l;
    }
    var T1 = !1, B6 = /\/+/g;
    function c1(M) {
      return ("" + M).replace(B6, "$&/");
    }
    var l8 = 10, J1 = [];
    function g1(M, V, y, l) {
      if (J1.length) {
        var q0 = J1.pop();
        return q0.result = M, q0.keyPrefix = V, q0.func = y, q0.context = l, q0.count = 0, q0;
      } else
        return {
          result: M,
          keyPrefix: V,
          func: y,
          context: l,
          count: 0
        };
    }
    function n1(M) {
      if (M.result = null, M.keyPrefix = null, M.func = null, M.context = null, M.count = 0, J1.length < l8)
        J1.push(M);
    }
    function r1(M, V, y, l) {
      var q0 = typeof M;
      if (q0 === "undefined" || q0 === "boolean")
        M = null;
      var Y1 = !1;
      if (M === null)
        Y1 = !0;
      else
        switch (q0) {
          case "string":
          case "number":
            Y1 = !0;
            break;
          case "object":
            switch (M.$$typeof) {
              case K:
              case z:
                Y1 = !0;
            }
        }
      if (Y1)
        return y(l, M, V === "" ? U0 + n8(M, 0) : V), 1;
      var C0, b0, P6 = 0, _0 = V === "" ? U0 : V + g0;
      if (Array.isArray(M))
        for (var B8 = 0;B8 < M.length; B8++)
          C0 = M[B8], b0 = _0 + n8(C0, B8), P6 += r1(C0, b0, y, l);
      else {
        var l6 = O0(M);
        if (typeof l6 === "function") {
          if (l6 === M.entries) {
            if (!T1)
              U1("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead.");
            T1 = !0;
          }
          var j0 = l6.call(M), HQ, G8 = 0;
          while (!(HQ = j0.next()).done)
            C0 = HQ.value, b0 = _0 + n8(C0, G8++), P6 += r1(C0, b0, y, l);
        } else if (q0 === "object") {
          var wZ = "";
          wZ = " If you meant to render a collection of children, use an array instead." + S1.getStackAddendum();
          var bX = "" + M;
          throw Error("Objects are not valid as a React child (found: " + (bX === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : bX) + ")." + wZ);
        }
      }
      return P6;
    }
    function F6(M, V, y) {
      if (M == null)
        return 0;
      return r1(M, "", V, y);
    }
    function n8(M, V) {
      if (typeof M === "object" && M !== null && M.key != null)
        return w1(M.key);
      return V.toString(36);
    }
    function W8(M, V, y) {
      var { func: l, context: q0 } = M;
      l.call(q0, V, M.count++);
    }
    function K8(M, V, y) {
      if (M == null)
        return M;
      var l = g1(null, null, V, y);
      F6(M, W8, l), n1(l);
    }
    function j8(M, V, y) {
      var { result: l, keyPrefix: q0, func: Y1, context: C0 } = M, b0 = Y1.call(C0, V, M.count++);
      if (Array.isArray(b0))
        H8(b0, l, y, function(P6) {
          return P6;
        });
      else if (b0 != null) {
        if (Q0(b0))
          b0 = d8(b0, q0 + (b0.key && (!V || V.key !== b0.key) ? c1(b0.key) + "/" : "") + y);
        l.push(b0);
      }
    }
    function H8(M, V, y, l, q0) {
      var Y1 = "";
      if (y != null)
        Y1 = c1(y) + "/";
      var C0 = g1(V, Y1, l, q0);
      F6(M, j8, C0), n1(C0);
    }
    function v6(M, V, y) {
      if (M == null)
        return M;
      var l = [];
      return H8(M, l, null, V, y), l;
    }
    function jQ(M) {
      return F6(M, function() {
        return null;
      }, null);
    }
    function s8(M) {
      var V = [];
      return H8(M, V, null, function(y) {
        return y;
      }), V;
    }
    function o8(M) {
      if (!Q0(M))
        throw Error("React.Children.only expected to receive a single React element child.");
      return M;
    }
    function WQ(M, V) {
      if (V === void 0)
        V = null;
      else if (V !== null && typeof V !== "function")
        f0("createContext: Expected the optional second argument to be a function. Instead received: %s", V);
      var y = {
        $$typeof: D,
        _calculateChangedBits: V,
        _currentValue: M,
        _currentValue2: M,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      y.Provider = {
        $$typeof: w,
        _context: y
      };
      var l = !1, q0 = !1;
      {
        var Y1 = {
          $$typeof: D,
          _context: y,
          _calculateChangedBits: y._calculateChangedBits
        };
        Object.defineProperties(Y1, {
          Provider: {
            get: function() {
              if (!q0)
                q0 = !0, f0("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
              return y.Provider;
            },
            set: function(C0) {
              y.Provider = C0;
            }
          },
          _currentValue: {
            get: function() {
              return y._currentValue;
            },
            set: function(C0) {
              y._currentValue = C0;
            }
          },
          _currentValue2: {
            get: function() {
              return y._currentValue2;
            },
            set: function(C0) {
              y._currentValue2 = C0;
            }
          },
          _threadCount: {
            get: function() {
              return y._threadCount;
            },
            set: function(C0) {
              y._threadCount = C0;
            }
          },
          Consumer: {
            get: function() {
              if (!l)
                l = !0, f0("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
              return y.Consumer;
            }
          }
        }), y.Consumer = Y1;
      }
      return y._currentRenderer = null, y._currentRenderer2 = null, y;
    }
    function PZ(M) {
      var V = {
        $$typeof: X0,
        _ctor: M,
        _status: -1,
        _result: null
      };
      {
        var y, l;
        Object.defineProperties(V, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return y;
            },
            set: function(q0) {
              f0("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), y = q0, Object.defineProperty(V, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function() {
              return l;
            },
            set: function(q0) {
              f0("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), l = q0, Object.defineProperty(V, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return V;
    }
    function cQ(M) {
      {
        if (M != null && M.$$typeof === p)
          f0("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        else if (typeof M !== "function")
          f0("forwardRef requires a render function but was given %s.", M === null ? "null" : typeof M);
        else if (M.length !== 0 && M.length !== 2)
          f0("forwardRef render functions accept exactly two parameters: props and ref. %s", M.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        if (M != null) {
          if (M.defaultProps != null || M.propTypes != null)
            f0("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        }
      }
      return {
        $$typeof: I,
        render: M
      };
    }
    function KQ(M) {
      return typeof M === "string" || typeof M === "function" || M === N || M === k || M === L || M === F || M === h || M === o || typeof M === "object" && M !== null && (M.$$typeof === X0 || M.$$typeof === p || M.$$typeof === w || M.$$typeof === D || M.$$typeof === I || M.$$typeof === Z0 || M.$$typeof === n || M.$$typeof === r || M.$$typeof === d);
    }
    function fX(M, V) {
      if (!KQ(M))
        f0("memo: The first argument must be a component. Instead received: %s", M === null ? "null" : typeof M);
      return {
        $$typeof: p,
        type: M,
        compare: V === void 0 ? null : V
      };
    }
    function j1() {
      var M = I0.current;
      if (M === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.`);
      return M;
    }
    function C4(M, V) {
      var y = j1();
      {
        if (V !== void 0)
          f0("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", V, typeof V === "number" && Array.isArray(arguments[2]) ? `

Did you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks` : "");
        if (M._context !== void 0) {
          var l = M._context;
          if (l.Consumer === M)
            f0("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
          else if (l.Provider === M)
            f0("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
      }
      return y.useContext(M, V);
    }
    function V4(M) {
      var V = j1();
      return V.useState(M);
    }
    function lZ(M, V, y) {
      var l = j1();
      return l.useReducer(M, V, y);
    }
    function d6(M) {
      var V = j1();
      return V.useRef(M);
    }
    function _q(M, V) {
      var y = j1();
      return y.useEffect(M, V);
    }
    function Tq(M, V) {
      var y = j1();
      return y.useLayoutEffect(M, V);
    }
    function n$(M, V) {
      var y = j1();
      return y.useCallback(M, V);
    }
    function gq(M, V) {
      var y = j1();
      return y.useMemo(M, V);
    }
    function xq(M, V, y) {
      var l = j1();
      return l.useImperativeHandle(M, V, y);
    }
    function vq(M, V) {
      {
        var y = j1();
        return y.useDebugValue(M, V);
      }
    }
    var mJ = !1;
    function s$() {
      if (A0.current) {
        var M = F1(A0.current.type);
        if (M)
          return `

Check the render method of \`` + M + "`.";
      }
      return "";
    }
    function mX(M) {
      if (M !== void 0) {
        var V = M.fileName.replace(/^.*[\\\/]/, ""), y = M.lineNumber;
        return `

Check your code at ` + V + ":" + y + ".";
      }
      return "";
    }
    function $1(M) {
      if (M !== null && M !== void 0)
        return mX(M.__source);
      return "";
    }
    var AZ = {};
    function UZ(M) {
      var V = s$();
      if (!V) {
        var y = typeof M === "string" ? M : M.displayName || M.name;
        if (y)
          V = `

Check the top-level render call using <` + y + ">.";
      }
      return V;
    }
    function S4(M, V) {
      if (!M._store || M._store.validated || M.key != null)
        return;
      M._store.validated = !0;
      var y = UZ(V);
      if (AZ[y])
        return;
      AZ[y] = !0;
      var l = "";
      if (M && M._owner && M._owner !== A0.current)
        l = " It was passed a child from " + F1(M._owner.type) + ".";
      q6(M), f0('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.', y, l), q6(null);
    }
    function I4(M, V) {
      if (typeof M !== "object")
        return;
      if (Array.isArray(M))
        for (var y = 0;y < M.length; y++) {
          var l = M[y];
          if (Q0(l))
            S4(l, V);
        }
      else if (Q0(M)) {
        if (M._store)
          M._store.validated = !0;
      } else if (M) {
        var q0 = O0(M);
        if (typeof q0 === "function") {
          if (q0 !== M.entries) {
            var Y1 = q0.call(M), C0;
            while (!(C0 = Y1.next()).done)
              if (Q0(C0.value))
                S4(C0.value, V);
          }
        }
      }
    }
    function _4(M) {
      {
        var V = M.type;
        if (V === null || V === void 0 || typeof V === "string")
          return;
        var y = F1(V), l;
        if (typeof V === "function")
          l = V.propTypes;
        else if (typeof V === "object" && (V.$$typeof === I || V.$$typeof === p))
          l = V.propTypes;
        else
          return;
        if (l)
          q6(M), J(l, M.props, "prop", y, S1.getStackAddendum), q6(null);
        else if (V.PropTypes !== void 0 && !mJ)
          mJ = !0, f0("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        if (typeof V.getDefaultProps === "function" && !V.getDefaultProps.isReactClassApproved)
          f0("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bJ(M) {
      {
        q6(M);
        var V = Object.keys(M.props);
        for (var y = 0;y < V.length; y++) {
          var l = V[y];
          if (l !== "children" && l !== "key") {
            f0("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l);
            break;
          }
        }
        if (M.ref !== null)
          f0("Invalid attribute `ref` supplied to `React.Fragment`.");
        q6(null);
      }
    }
    function T4(M, V, y) {
      var l = KQ(M);
      if (!l) {
        var q0 = "";
        if (M === void 0 || typeof M === "object" && M !== null && Object.keys(M).length === 0)
          q0 += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        var Y1 = $1(V);
        if (Y1)
          q0 += Y1;
        else
          q0 += s$();
        var C0;
        if (M === null)
          C0 = "null";
        else if (Array.isArray(M))
          C0 = "array";
        else if (M !== void 0 && M.$$typeof === K)
          C0 = "<" + (F1(M.type) || "Unknown") + " />", q0 = " Did you accidentally export a JSX literal instead of a component?";
        else
          C0 = typeof M;
        f0("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C0, q0);
      }
      var b0 = p8.apply(this, arguments);
      if (b0 == null)
        return b0;
      if (l)
        for (var P6 = 2;P6 < arguments.length; P6++)
          I4(arguments[P6], M);
      if (M === N)
        bJ(b0);
      else
        _4(b0);
      return b0;
    }
    var g4 = !1;
    function uJ(M) {
      var V = T4.bind(null, M);
      V.type = M;
      {
        if (!g4)
          g4 = !0, U1("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
        Object.defineProperty(V, "type", {
          enumerable: !1,
          get: function() {
            return U1("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: M
            }), M;
          }
        });
      }
      return V;
    }
    function o$(M, V, y) {
      var l = kQ.apply(this, arguments);
      for (var q0 = 2;q0 < arguments.length; q0++)
        I4(arguments[q0], l.type);
      return _4(l), l;
    }
    try {
      var a$ = Object.freeze({}), cJ = /* @__PURE__ */ new Map([[a$, null]]), nZ = /* @__PURE__ */ new Set([a$]);
      cJ.set(0, 0), nZ.add(0);
    } catch (M) {}
    var BQ = T4, LZ = o$, OZ = uJ, x4 = {
      map: v6,
      forEach: K8,
      count: jQ,
      toArray: s8,
      only: o8
    };
    hx.Children = x4, hx.Component = I1, hx.Fragment = N, hx.Profiler = L, hx.PureComponent = k1, hx.StrictMode = F, hx.Suspense = h, hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M6, hx.cloneElement = LZ, hx.createContext = WQ, hx.createElement = BQ, hx.createFactory = OZ, hx.createRef = x6, hx.forwardRef = cQ, hx.isValidElement = Q0, hx.lazy = PZ, hx.memo = fX, hx.useCallback = n$, hx.useContext = C4, hx.useDebugValue = vq, hx.useEffect = _q, hx.useImperativeHandle = xq, hx.useLayoutEffect = Tq, hx.useMemo = gq, hx.useReducer = lZ, hx.useRef = d6, hx.useState = V4, hx.version = Y;
  })();
});

// node_modules/pdb-parser-js/dist/extension/string.js
var T6 = t1((dR) => {
  Object.defineProperty(dR, "__esModule", { value: !0 });
  dR.toFloatOrNull = dR.toIntOrNull = void 0;
  String.prototype.extract = function(Q, J) {
    try {
      let Y = this.substring(Q - 1, J).trim();
      return Y.isEmpty() ? null : Y;
    } catch (Y) {
      return console.warn(Y), null;
    }
  };
  String.prototype.isEmpty = function() {
    return !this || !this.length;
  };
  String.prototype.isBlank = function() {
    return !this || !this.trim().length;
  };
  function af(Q) {
    if (Q) {
      let J = parseInt(Q);
      return isNaN(J) ? null : J;
    }
    return null;
  }
  dR.toIntOrNull = af;
  function rf(Q) {
    if (Q) {
      let J = parseFloat(Q);
      return isNaN(J) ? null : J;
    }
    return null;
  }
  dR.toFloatOrNull = rf;
});

// node_modules/pdb-parser-js/dist/parser.js
var gX = t1((oR) => {
  Object.defineProperty(oR, "__esModule", { value: !0 });
  oR.SectionParser = oR.AbstractParser = void 0;

  class nR {
    lines = [];
    collect(Q) {
      if (Array.isArray(Q)) {
        for (let J of Q)
          if (this.match(J))
            this.lines.push(J);
      } else if (this.match(Q))
        this.lines.push(Q);
    }
    parse() {
      let Q = this._parse();
      if (this.validate(Q))
        return Q;
      else
        throw Error("validate error");
    }
    validate(Q) {
      return !0;
    }
  }
  oR.AbstractParser = nR;

  class sR {
    collect(Q) {
      if (Array.isArray(Q))
        for (let J of Q)
          for (let Y of this.parsers())
            Y.collect(J);
      else
        for (let J of this.parsers())
          J.collect(Q);
    }
  }
  oR.SectionParser = sR;
});

// node_modules/pdb-parser-js/dist/section/title.js
var EF = t1((iR) => {
  Object.defineProperty(iR, "__esModule", { value: !0 });
  iR.TitleSectionParser = iR.Remark470Parser = iR.Remark465Parser = iR.Remark350Parser = iR.Remark4Parser = iR.RemarkParser = iR.SprsdeParser = iR.RevdatParser = iR.AuthorParser = iR.MdltypParser = iR.NummdlParser = iR.ExpdtaParser = iR.KeywdsParser = iR.SourceParser = iR.CompndParser = iR.CaveatParser = iR.SplitParser = iR.TitleParser = iR.ObslteParser = iR.HeaderParser = iR.Biomt = void 0;
  T6();
  var MQ = gX(), EZ = T6();

  class sE {
    recordName;
    serial;
    Mn1;
    Mn2;
    Mn3;
    Vn;
    constructor(Q, J, Y, W, K, z) {
      this.recordName = Q, this.serial = J, this.Mn1 = Y, this.Mn2 = W, this.Mn3 = K, this.Vn = z;
    }
    toPoint4D() {
      return [this.Mn1, this.Mn2, this.Mn3, this.Vn];
    }
  }
  iR.Biomt = sE;

  class oE extends MQ.AbstractParser {
    match(Q) {
      return Q.startsWith("HEADER");
    }
    _parse() {
      let Q = {
        classification: null,
        depDate: null,
        idCode: null
      };
      if (this.lines.length == 0)
        return Q;
      let J = this.lines[0], Y = J.extract(11, 50), W = J.extract(51, 59), K = J.extract(63, 66);
      return {
        ...Q,
        classification: Y,
        depDate: W,
        idCode: K
      };
    }
  }
  iR.HeaderParser = oE;

  class aE extends MQ.AbstractParser {
    match(Q) {
      return Q.startsWith("OBSLTE");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(12, 20), Y = Q.extract(22, 25), W = [
          Q.extract(32, 35),
          Q.extract(37, 40),
          Q.extract(42, 45),
          Q.extract(47, 50),
          Q.extract(52, 55),
          Q.extract(57, 60),
          Q.extract(62, 65),
          Q.extract(67, 70),
          Q.extract(72, 75)
        ];
        return {
          repDate: J,
          idCode: Y,
          rIdCodes: W.filter((K) => K)
        };
      });
    }
  }
  iR.ObslteParser = aE;

  class rE extends MQ.AbstractParser {
    match(Q) {
      return Q.startsWith("TITLE ");
    }
    _parse() {
      let Q = this.lines.map((J) => J.extract(11)).join(" ");
      if (Q.isBlank())
        return null;
      return Q;
    }
  }
  iR.TitleParser = rE;

  class iE extends MQ.AbstractParser {
    match(Q) {
      return Q.startsWith("SPLIT ");
    }
    _parse() {
      return this.lines.flatMap((Q) => {
        return [
          Q.extract(12, 15),
          Q.extract(17, 20),
          Q.extract(22, 25),
          Q.extract(27, 30),
          Q.extract(32, 35),
          Q.extract(37, 40),
          Q.extract(42, 45),
          Q.extract(47, 50),
          Q.extract(52, 55),
          Q.extract(57, 60),
          Q.extract(62, 65),
          Q.extract(67, 70),
          Q.extract(72, 75),
          Q.extract(77, 80)
        ].filter((J) => J);
      });
    }
  }
  iR.SplitParser = iE;

  class tE extends MQ.AbstractParser {
    match(Q) {
      return Q.startsWith("CAVEAT");
    }
    _parse() {
      return this.lines.flatMap((Q) => {
        let J = Q.extract(12, 15), Y = Q.extract(20, 79);
        return {
          idCode: J,
          comment: Y
        };
      });
    }
  }
  iR.CaveatParser = tE;

  class eE extends MQ.AbstractParser {
    isTokenBegin(Q) {
      let J = this.tokens();
      for (let Y of J)
        if (Q.startsWith(`${Y}:`))
          return !0;
      return !1;
    }
    _parse() {
      let Q = this.lines.map((K) => K.extract(11, 80)).filter((K) => K), J = [];
      for (let K of Q) {
        if (!K)
          continue;
        if (this.isTokenBegin(K))
          J.push(K);
        else
          J[J.length - 1] += K;
      }
      let Y = [], W = null;
      for (let K of J) {
        if (K.startsWith("MOL_ID:")) {
          if (W != null)
            Y.push(W);
          W = {};
        }
        let z = K.indexOf(":"), N = K.substring(0, z), F = K.substring(z + 1).trim();
        W[N] = F.endsWith(";") ? F.slice(0, -1) : F;
      }
      if (W != null)
        Y.push(W);
      return Y;
    }
  }

  class QF extends eE {
    tokens() {
      return [
        "MOL_ID",
        "MOLECULE",
        "CHAIN",
        "FRAGMENT",
        "SYNONYM",
        "EC",
        "ENGINEERED",
        "MUTATION",
        "OTHER_DETAILS"
      ];
    }
    match(Q) {
      return Q.startsWith("COMPND");
    }
  }
  iR.CompndParser = QF;

  class XF extends eE {
    tokens() {
      return [
        "MOL_ID",
        "SYNTHETIC",
        "FRAGMENT",
        "ORGANISM_SCIENTIFIC",
        "ORGANISM_COMMON",
        "ORGANISM_TAXID",
        "STRAIN",
        "VARIANT",
        "CELL_LINE",
        "ATCC",
        "ORGAN",
        "TISSUE",
        "CELL",
        "ORGANELLE",
        "SECRETION",
        "CELLULAR_LOCATION",
        "PLASMID",
        "GENE",
        "EXPRESSION_SYSTEM",
        "EXPRESSION_SYSTEM_COMMON",
        "EXPRESSION_SYSTEM_TAXID",
        "EXPRESSION_SYSTEM_STRAIN",
        "EXPRESSION_SYSTEM_VARIANT",
        "EXPRESSION_SYSTEM_CELL_LINE",
        "EXPRESSION_SYSTEM_ATCC_NUMBER",
        "EXPRESSION_SYSTEM_ORGAN",
        "EXPRESSION_SYSTEM_TISSUE",
        "EXPRESSION_SYSTEM_CELL",
        "EXPRESSION_SYSTEM_ORGANELLE",
        "EXPRESSION_SYSTEM_CELLULAR_LOCATION",
        "EXPRESSION_SYSTEM_VECTOR_TYPE",
        "EXPRESSION_SYSTEM_VECTOR",
        "EXPRESSION_SYSTEM_PLASMID",
        "EXPRESSION_SYSTEM_GENE",
        "OTHER_DETAILS"
      ];
    }
    match(Q) {
      return Q.startsWith("SOURCE");
    }
  }
  iR.SourceParser = XF;

  class ZF extends MQ.AbstractParser {
    match(Q) {
      return Q.startsWith("KEYWDS");
    }
    _parse() {
      return this.lines.map((Q) => Q.extract(11)).filter((Q) => Q).join("").split(",").map((Q) => Q.trim()).filter((Q) => Q);
    }
  }
  iR.KeywdsParser = ZF;

  class JF extends MQ.AbstractParser {
    match(Q) {
      return Q.startsWith("EXPDTA");
    }
    _parse() {
      return this.lines.map((Q) => Q.extract(11)).filter((Q) => Q);
    }
  }
  iR.ExpdtaParser = JF;

  class $F extends MQ.AbstractParser {
    match(Q) {
      return Q.startsWith("NUMMDL");
    }
    _parse() {
      if (this.lines.length == 0)
        return null;
      let J = this.lines[0].extract(11, 14);
      return EZ.toIntOrNull(J);
    }
  }
  iR.NummdlParser = $F;

  class YF extends MQ.AbstractParser {
    match(Q) {
      return Q.startsWith("MDLTYP");
    }
    _parse() {
      return this.lines.map((Q) => Q.extract(11, 48)).filter((Q) => Q);
    }
  }
  iR.MdltypParser = YF;

  class qF extends MQ.AbstractParser {
    match(Q) {
      return Q.startsWith("AUTHOR");
    }
    _parse() {
      return this.lines.map((Q) => Q.extract(11)).filter((Q) => Q).join("").split(",").map((Q) => Q.trim()).filter((Q) => Q);
    }
  }
  iR.AuthorParser = qF;

  class WF extends MQ.AbstractParser {
    sortDesc;
    constructor(Q = !0) {
      super();
      this.sortDesc = Q;
    }
    match(Q) {
      return Q.startsWith("REVDAT");
    }
    _parse() {
      let Q = this.lines.map((W) => {
        let K = W.extract(8, 10), z = W.extract(14, 22), N = W.extract(24, 27), F = W.extract(32, 32), L = [
          W.extract(40, 45),
          W.extract(47, 52),
          W.extract(54, 59),
          W.extract(61, 66)
        ];
        return {
          modNum: EZ.toIntOrNull(K),
          modDate: z,
          modId: N,
          modType: F,
          records: L.filter((w) => w)
        };
      }), J = [], Y = null;
      for (let W of Q) {
        if (W.modNum == Y) {
          let K = J.length - 1, { records: z, ...N } = { ...J[K] };
          J[K] = {
            ...N,
            records: [
              ...z,
              ...W.records
            ]
          };
        } else
          J.push(W);
        Y = W.modNum;
      }
      return J.sort((W) => W.modNum * (this.sortDesc ? 1 : -1));
    }
  }
  iR.RevdatParser = WF;

  class KF extends MQ.AbstractParser {
    match(Q) {
      return Q.startsWith("SPRSDE");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(12, 20), Y = Q.extract(22, 25), W = [
          Q.extract(32, 35),
          Q.extract(37, 40),
          Q.extract(42, 45),
          Q.extract(47, 50),
          Q.extract(52, 55),
          Q.extract(57, 60),
          Q.extract(62, 65),
          Q.extract(67, 70),
          Q.extract(72, 75)
        ];
        return {
          sprsdeDate: J,
          idCode: Y,
          sIdCodes: W.filter((K) => K)
        };
      });
    }
  }
  iR.SprsdeParser = KF;

  class Iq extends MQ.AbstractParser {
    match(Q) {
      if (Q.startsWith("REMARK")) {
        let J = EZ.toIntOrNull(Q.extract(8, 10));
        if (this.remarkNum == J)
          return !0;
      }
      return !1;
    }
  }
  iR.RemarkParser = Iq;

  class HF extends Iq {
    remarkNum = 4;
    _parse() {
      let Q = {
        idCode: null,
        relDate: null,
        version: null
      }, J = 12, Y = this.lines.map((F) => F.extract(12)).filter((F) => F);
      if (Y.length == 0)
        return Q;
      let W = Y[0], K = W.extract(0, 4), z = W.extract(30, 33), N = W.extract(36, 44);
      return {
        ...Q,
        idCode: K,
        relDate: N,
        version: z
      };
    }
  }
  iR.Remark4Parser = HF;

  class GF extends Iq {
    remarkNum = 350;
    _parse() {
      let Q = [], J = null, Y = null, W = [], K = [];
      for (let z of this.lines) {
        if (z.extract(11, 23) == "BIOMOLECULE:") {
          if (J != null)
            Q.push({ biomolecule: J, biologicalUnit: Y, chains: [...W], biomts: [...K] }), Y = null, W.length = 0, K.length = 0;
          J = EZ.toIntOrNull(z.extract(24));
        }
        if (z.extract(12, 45) == "AUTHOR DETERMINED BIOLOGICAL UNIT:")
          Y = z.extract(47);
        if (z.extract(12, 41) == "APPLY THE FOLLOWING TO CHAINS:" || z.extract(12, 41) == "AND CHAINS:")
          z.extract(43)?.split(",")?.forEach((N) => {
            let F = N.trim();
            if (F)
              W.push(F);
          });
        if (z.extract(14, 18) == "BIOMT") {
          let N = z.split(/\s+/);
          K.push(new sE(N[2], EZ.toIntOrNull(N[3]), EZ.toFloatOrNull(N[4]), EZ.toFloatOrNull(N[5]), EZ.toFloatOrNull(N[6]), EZ.toFloatOrNull(N[7])));
        }
      }
      return Q.push({ biomolecule: J, biologicalUnit: Y, chains: [...W], biomts: [...K] }), Q;
    }
  }
  iR.Remark350Parser = GF;

  class zF extends Iq {
    remarkNum = 465;
    _parse() {
      let Q = [], J = !1;
      for (let Y of this.lines)
        if (J) {
          let W = Y.extract(16, 19), K = Y.extract(20, 20), z = Y.extract(22, 26), N = Y.extract(27, 27);
          Q.push({
            resName: W,
            chainID: K,
            resSeq: EZ.toIntOrNull(z),
            iCode: N
          });
        } else if (Y.includes("RES C SSSEQI"))
          J = !0;
      return Q;
    }
  }
  iR.Remark465Parser = zF;

  class NF extends Iq {
    remarkNum = 470;
    _parse() {
      let Q = (W, K, z, N, F) => {
        return {
          resName: W,
          chainID: K,
          resSeq: EZ.toIntOrNull(z),
          iCode: N,
          atoms: F?.split(" ")?.map((L) => L.trim())?.filter((L) => L) ?? []
        };
      }, J = [], Y = null;
      for (let W of this.lines)
        switch (Y) {
          case "NonNMR": {
            let K = W.extract(16, 19), z = W.extract(21, 21), N = W.extract(22, 25), F = W.extract(26, 26), L = W.extract(29);
            J.push(Q(K, z, N, F, L));
            break;
          }
          case "NMR": {
            let K = W.extract(16, 19), z = W.extract(20, 20), N = W.extract(21, 24), F = W.extract(25, 25), L = W.extract(28);
            J.push(Q(K, z, N, F, L));
            break;
          }
          default:
            if (W.includes("RES  CSSEQI  ATOMS"))
              Y = "NonNMR";
            else if (W.includes("RES CSSEQI  ATOMS"))
              Y = "NMR";
            break;
        }
      return J;
    }
  }
  iR.Remark470Parser = NF;

  class rR extends MQ.SectionParser {
    headerParser = new oE;
    obslteParser = new aE;
    titleParser = new rE;
    splitParser = new iE;
    caveatParser = new tE;
    compndParser = new QF;
    sourceParser = new XF;
    keywdsParser = new ZF;
    expdtaParser = new JF;
    nummdlParser = new $F;
    mdltypParser = new YF;
    authorParser = new qF;
    revdatParser = new WF;
    sprsdeParser = new KF;
    remark4Parser = new HF;
    remark350Parser = new GF;
    remark465Parser = new zF;
    remark470Parser = new NF;
    parsers() {
      return [
        this.headerParser,
        this.obslteParser,
        this.titleParser,
        this.splitParser,
        this.caveatParser,
        this.compndParser,
        this.sourceParser,
        this.keywdsParser,
        this.expdtaParser,
        this.nummdlParser,
        this.mdltypParser,
        this.authorParser,
        this.revdatParser,
        this.sprsdeParser,
        this.remark4Parser,
        this.remark350Parser,
        this.remark465Parser,
        this.remark470Parser
      ];
    }
    parse() {
      return {
        header: this.headerParser.parse(),
        obsltes: this.obslteParser.parse(),
        title: this.titleParser.parse(),
        splits: this.splitParser.parse(),
        caveats: this.caveatParser.parse(),
        compnds: this.compndParser.parse(),
        sources: this.sourceParser.parse(),
        keywds: this.keywdsParser.parse(),
        expdtas: this.expdtaParser.parse(),
        nummdl: this.nummdlParser.parse(),
        mdltyps: this.mdltypParser.parse(),
        authors: this.authorParser.parse(),
        revdats: this.revdatParser.parse(),
        sprsdes: this.sprsdeParser.parse(),
        remark4: this.remark4Parser.parse(),
        remark350: this.remark350Parser.parse(),
        missingResidues: this.remark465Parser.parse(),
        missingAtoms: this.remark470Parser.parse()
      };
    }
  }
  iR.TitleSectionParser = rR;
});

// node_modules/pdb-parser-js/dist/section/primaryStructure.js
var wF = t1((Xk) => {
  Object.defineProperty(Xk, "__esModule", { value: !0 });
  Xk.PrimaryStructureSectionParser = Xk.SeqresParser = Xk.Dbref2Parser = Xk.Dbref1Parser = Xk.ModresParser = Xk.SeqadvParser = Xk.DbrefParser = void 0;
  T6();
  var d$ = gX(), KX = T6();

  class eR {
    idCode;
    resName;
    chainID;
    resSeq;
    iCode;
    database;
    dbAccession;
    dbRes;
    dbSeq;
    conflict;
    constructor(Q, J, Y, W, K, z, N, F, L, w) {
      this.idCode = Q, this.resName = J, this.chainID = Y, this.resSeq = W, this.iCode = K, this.database = z, this.dbAccession = N, this.dbRes = F, this.dbSeq = L, this.conflict = w;
    }
    isMutation() {
      return this.conflict == "ENGINEERED MUTATION";
    }
  }

  class FF extends d$.AbstractParser {
    match(Q) {
      return Q.startsWith("DBREF ");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(8, 11), Y = Q.extract(13, 13), W = Q.extract(15, 18), K = Q.extract(19, 19), z = Q.extract(21, 24), N = Q.extract(25, 25), F = Q.extract(27, 32), L = Q.extract(34, 41), w = Q.extract(43, 54), D = Q.extract(56, 60), k = Q.extract(61, 61), I = Q.extract(63, 67), h = Q.extract(68, 68);
        return {
          idCode: J,
          chainID: Y,
          seqBegin: KX.toIntOrNull(W),
          insertBegin: K,
          seqEnd: KX.toIntOrNull(z),
          insertEnd: N,
          database: F,
          dbAccession: L,
          dbIdCode: w,
          dbseqBegin: KX.toIntOrNull(D),
          idbnsBeg: k,
          dbseqEnd: KX.toIntOrNull(I),
          dbinsEnd: h
        };
      });
    }
  }
  Xk.DbrefParser = FF;

  class PF extends d$.AbstractParser {
    match(Q) {
      return Q.startsWith("SEQADV");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(8, 11), Y = Q.extract(13, 15), W = Q.extract(17, 17), K = Q.extract(19, 22), z = Q.extract(23, 23), N = Q.extract(25, 28), F = Q.extract(30, 38), L = Q.extract(40, 42), w = Q.extract(44, 48), D = Q.extract(50, 70);
        return new eR(J, Y, W, KX.toIntOrNull(K), z, N, F, L, KX.toIntOrNull(w), D);
      });
    }
  }
  Xk.SeqadvParser = PF;

  class AF extends d$.AbstractParser {
    match(Q) {
      return Q.startsWith("MODRES");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(8, 11), Y = Q.extract(13, 15), W = Q.extract(17, 17), K = Q.extract(19, 22), z = Q.extract(23, 23), N = Q.extract(25, 27), F = Q.extract(30, 70);
        return {
          idCode: J,
          resName: Y,
          chainID: W,
          resSeq: KX.toIntOrNull(K),
          iCode: z,
          stdRes: N,
          comment: F
        };
      });
    }
  }
  Xk.ModresParser = AF;

  class UF extends d$.AbstractParser {
    match(Q) {
      return Q.startsWith("DBREF1");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(8, 11), Y = Q.extract(13, 13), W = Q.extract(15, 18), K = Q.extract(19, 19), z = Q.extract(21, 24), N = Q.extract(25, 25), F = Q.extract(27, 32), L = Q.extract(48, 67);
        return {
          idCode: J,
          chainID: Y,
          seqBegin: KX.toIntOrNull(W),
          insertBegin: K,
          seqEnd: KX.toIntOrNull(z),
          insertEnd: N,
          database: F,
          dbIdCode: L
        };
      });
    }
  }
  Xk.Dbref1Parser = UF;

  class LF extends d$.AbstractParser {
    match(Q) {
      return Q.startsWith("DBREF2");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(8, 11), Y = Q.extract(13, 13), W = Q.extract(19, 40), K = Q.extract(46, 55), z = Q.extract(58, 67);
        return {
          idCode: J,
          chainID: Y,
          dbAccession: W,
          seqBegin: KX.toIntOrNull(K),
          seqEnd: KX.toIntOrNull(z)
        };
      });
    }
  }
  Xk.Dbref2Parser = LF;

  class OF extends d$.AbstractParser {
    match(Q) {
      return Q.startsWith("SEQRES");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(8, 10), Y = Q.extract(12, 12), W = Q.extract(14, 17), K = [
          Q.extract(20, 22),
          Q.extract(24, 26),
          Q.extract(28, 30),
          Q.extract(32, 34),
          Q.extract(36, 38),
          Q.extract(40, 42),
          Q.extract(44, 46),
          Q.extract(48, 50),
          Q.extract(52, 54),
          Q.extract(56, 58),
          Q.extract(60, 62),
          Q.extract(64, 66),
          Q.extract(68, 70)
        ];
        return {
          serNum: KX.toIntOrNull(J),
          chainID: Y,
          numRes: KX.toIntOrNull(W),
          resNames: K.filter((z) => z)
        };
      });
    }
  }
  Xk.SeqresParser = OF;

  class Qk extends d$.SectionParser {
    dbrefParser = new FF;
    seqadvParser = new PF;
    modresParser = new AF;
    dbref1Parser = new UF;
    dbref2Parser = new LF;
    seqresParser = new OF;
    parsers() {
      return [
        this.dbrefParser,
        this.seqadvParser,
        this.modresParser,
        this.dbref1Parser,
        this.dbref2Parser,
        this.seqresParser
      ];
    }
    parse() {
      return {
        dbrefs: this.dbrefParser.parse(),
        seqadvs: this.seqadvParser.parse(),
        modress: this.modresParser.parse(),
        dbref1s: this.dbref1Parser.parse(),
        dbref2s: this.dbref2Parser.parse(),
        seqress: this.seqresParser.parse()
      };
    }
  }
  Xk.PrimaryStructureSectionParser = Qk;
});

// node_modules/pdb-parser-js/dist/section/heterogen.js
var jF = t1(($k) => {
  Object.defineProperty($k, "__esModule", { value: !0 });
  $k.HeterogenSectionParser = $k.FormulParser = $k.HetsynParser = $k.HetnamParser = $k.HetParser = void 0;
  T6();
  var q3 = gX(), sH = T6();

  class MF extends q3.AbstractParser {
    match(Q) {
      return Q.startsWith("HET   ");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(8, 10), Y = Q.extract(13, 13), W = Q.extract(14, 17), K = Q.extract(18, 18), z = Q.extract(21, 25), N = Q.extract(31, 70);
        return {
          hetID: J,
          chainID: Y,
          seqNum: sH.toIntOrNull(W),
          iCode: K,
          numHetAtoms: sH.toIntOrNull(z),
          text: N
        };
      });
    }
  }
  $k.HetParser = MF;

  class DF extends q3.AbstractParser {
    match(Q) {
      return Q.startsWith("HETNAM");
    }
    _parse() {
      let Q = this.lines.map((Y) => {
        let W = Y.extract(12, 14), K = Y.extract(16, 70);
        return [
          W,
          K
        ];
      }).reduce((Y, [W, K]) => {
        return Y[W] = Y[W] ?? [], Y[W].push(K), Y;
      }, {}), J = [];
      for (let Y in Q) {
        let W = Q[Y].join(" ");
        J.push({
          hetID: Y,
          text: !W.isBlank() ? W : null
        });
      }
      return J;
    }
  }
  $k.HetnamParser = DF;

  class RF extends q3.AbstractParser {
    match(Q) {
      return Q.startsWith("HETSYN");
    }
    _parse() {
      let Q = this.lines.map((Y) => {
        let W = Y.extract(12, 14), K = Y.extract(16, 70);
        return [
          W,
          K
        ];
      }).reduce((Y, [W, K]) => {
        return Y[W] = Y[W] ?? [], Y[W].push(K), Y;
      }, {}), J = [];
      for (let Y in Q) {
        let W = Q[Y].join(" ");
        J.push({
          hetID: Y,
          hetSynonyms: !W.isBlank() ? W : null
        });
      }
      return J;
    }
  }
  $k.HetsynParser = RF;

  class kF extends q3.AbstractParser {
    match(Q) {
      return Q.startsWith("FORMUL");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(9, 10), Y = Q.extract(13, 15), W = Q.extract(17, 18), K = Q.extract(19, 19), z = Q.extract(20, 70);
        return {
          compNum: sH.toIntOrNull(J),
          hetID: Y,
          continuation: sH.toIntOrNull(W),
          asterisk: K,
          text: z
        };
      });
    }
  }
  $k.FormulParser = kF;

  class Jk extends q3.SectionParser {
    hetParser = new MF;
    hetnamParser = new DF;
    hetsynParser = new RF;
    formulParser = new kF;
    parsers() {
      return [this.hetParser, this.hetnamParser, this.hetsynParser, this.formulParser];
    }
    parse() {
      return {
        hets: this.hetParser.parse(),
        hetnams: this.hetnamParser.parse(),
        hetsyns: this.hetsynParser.parse(),
        formuls: this.formulParser.parse()
      };
    }
  }
  $k.HeterogenSectionParser = Jk;
});

// node_modules/pdb-parser-js/dist/section/secondaryStructure.js
var SF = t1((Wk) => {
  Object.defineProperty(Wk, "__esModule", { value: !0 });
  Wk.SecondaryStructureSectionParser = Wk.SheetParser = Wk.HelixParser = void 0;
  T6();
  var BF = gX(), xX = T6();

  class CF extends BF.AbstractParser {
    match(Q) {
      return Q.startsWith("HELIX ");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(8, 10), Y = Q.extract(12, 14), W = Q.extract(16, 18), K = Q.extract(20, 20), z = Q.extract(22, 25), N = Q.extract(26, 26), F = Q.extract(28, 30), L = Q.extract(32, 32), w = Q.extract(34, 37), D = Q.extract(38, 38), k = Q.extract(39, 40), I = Q.extract(41, 70), h = Q.extract(72, 76);
        return {
          serNum: xX.toIntOrNull(J),
          helixID: Y,
          initResidue: {
            resName: W,
            chainID: K,
            resSeq: xX.toIntOrNull(z),
            iCode: N
          },
          endResidue: {
            resName: F,
            chainID: L,
            resSeq: xX.toIntOrNull(w),
            iCode: D
          },
          helixClass: xX.toIntOrNull(k),
          comment: I,
          length: xX.toIntOrNull(h)
        };
      });
    }
  }
  Wk.HelixParser = CF;

  class VF extends BF.AbstractParser {
    match(Q) {
      return Q.startsWith("SHEET ");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(8, 10), Y = Q.extract(12, 14), W = Q.extract(15, 16), K = Q.extract(18, 20), z = Q.extract(22, 22), N = Q.extract(23, 26), F = Q.extract(27, 27), L = Q.extract(29, 31), w = Q.extract(33, 33), D = Q.extract(34, 37), k = Q.extract(38, 38), I = Q.extract(39, 40), h = Q.extract(42, 45), o = Q.extract(46, 48), p = Q.extract(50, 50), X0 = Q.extract(51, 54), d = Q.extract(55, 55), Z0 = Q.extract(57, 60), n = Q.extract(61, 63), r = Q.extract(65, 65), i = Q.extract(66, 69), t = Q.extract(70, 70);
        return {
          strand: xX.toIntOrNull(J),
          sheetID: Y,
          numStrands: xX.toIntOrNull(W),
          initResidue: {
            resName: K,
            chainID: z,
            resSeq: xX.toIntOrNull(N),
            iCode: F
          },
          endResidue: {
            resName: L,
            chainID: w,
            resSeq: xX.toIntOrNull(D),
            iCode: k
          },
          sense: xX.toIntOrNull(I),
          curResidue: {
            atom: h,
            resName: o,
            chainID: p,
            resSeq: xX.toIntOrNull(X0),
            iCode: d
          },
          prevResidue: {
            atom: Z0,
            resName: n,
            chainID: r,
            resSeq: xX.toIntOrNull(i),
            iCode: t
          }
        };
      });
    }
  }
  Wk.SheetParser = VF;

  class qk extends BF.SectionParser {
    helixParser = new CF;
    sheetParser = new VF;
    parsers() {
      return [
        this.helixParser,
        this.sheetParser
      ];
    }
    parse() {
      return {
        helixs: this.helixParser.parse(),
        sheets: this.sheetParser.parse()
      };
    }
  }
  Wk.SecondaryStructureSectionParser = qk;
});

// node_modules/pdb-parser-js/dist/section/connectivityAnnotation.js
var gF = t1((Gk) => {
  Object.defineProperty(Gk, "__esModule", { value: !0 });
  Gk.ConnectivityAnnotationSectionParser = Gk.CispepParser = Gk.LinkParser = Gk.SsbondParser = void 0;
  T6();
  var oH = gX(), vX = T6();

  class IF extends oH.AbstractParser {
    match(Q) {
      return Q.startsWith("SSBOND");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(8, 10), Y = Q.extract(12, 14), W = Q.extract(16, 16), K = Q.extract(18, 21), z = Q.extract(22, 22), N = Q.extract(26, 28), F = Q.extract(30, 30), L = Q.extract(32, 35), w = Q.extract(36, 36), D = Q.extract(60, 65), k = Q.extract(67, 72), I = Q.extract(74, 78);
        return {
          serNum: vX.toIntOrNull(J),
          residue1: {
            resName: Y ?? "CYS",
            chainID: W,
            resSeq: vX.toIntOrNull(K),
            iCode: z
          },
          residue2: {
            resName: N ?? "CYS",
            chainID: F,
            resSeq: vX.toIntOrNull(L),
            iCode: w
          },
          sym1: D,
          sym2: k,
          Length: vX.toFloatOrNull(I)
        };
      });
    }
  }
  Gk.SsbondParser = IF;

  class _F extends oH.AbstractParser {
    match(Q) {
      return Q.startsWith("LINK  ");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(13, 16), Y = Q.extract(17, 17), W = Q.extract(18, 20), K = Q.extract(22, 22), z = Q.extract(23, 26), N = Q.extract(27, 27), F = Q.extract(43, 46), L = Q.extract(47, 47), w = Q.extract(48, 50), D = Q.extract(52, 52), k = Q.extract(53, 56), I = Q.extract(57, 57), h = Q.extract(60, 65), o = Q.extract(67, 72), p = Q.extract(74, 78);
        return {
          residue1: {
            atom: J,
            altLoc: Y,
            resName: W,
            chainID: K,
            resSeq: vX.toIntOrNull(z),
            iCode: N
          },
          residue2: {
            atom: F,
            altLoc: L,
            resName: w,
            chainID: D,
            resSeq: vX.toIntOrNull(k),
            iCode: I
          },
          sym1: h,
          sym2: o,
          Length: vX.toFloatOrNull(p)
        };
      });
    }
  }
  Gk.LinkParser = _F;

  class TF extends oH.AbstractParser {
    match(Q) {
      return Q.startsWith("CISPEP");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(8, 10), Y = Q.extract(12, 14), W = Q.extract(16, 16), K = Q.extract(18, 21), z = Q.extract(22, 22), N = Q.extract(26, 28), F = Q.extract(30, 30), L = Q.extract(32, 35), w = Q.extract(36, 36), D = Q.extract(44, 46), k = Q.extract(54, 59);
        return {
          serNum: vX.toIntOrNull(J),
          residue1: {
            resName: Y,
            chainID: W,
            resSeq: vX.toIntOrNull(K),
            iCode: z
          },
          residue2: {
            resName: N,
            chainID: F,
            resSeq: vX.toIntOrNull(L),
            iCode: w
          },
          modNum: vX.toIntOrNull(D),
          measure: vX.toFloatOrNull(k)
        };
      });
    }
  }
  Gk.CispepParser = TF;

  class Hk extends oH.SectionParser {
    ssbondParser = new IF;
    linkParser = new _F;
    cispepParser = new TF;
    parsers() {
      return [this.ssbondParser, this.linkParser, this.cispepParser];
    }
    parse() {
      return {
        ssbonds: this.ssbondParser.parse(),
        links: this.linkParser.parse(),
        cispeps: this.cispepParser.parse()
      };
    }
  }
  Gk.ConnectivityAnnotationSectionParser = Hk;
});

// node_modules/pdb-parser-js/dist/section/miscellaneousFeatures.js
var hF = t1((Fk) => {
  Object.defineProperty(Fk, "__esModule", { value: !0 });
  Fk.MiscellaneousFeaturesSectionParser = Fk.SiteParser = void 0;
  T6();
  var Nk = gX(), xF = T6();

  class vF extends Nk.AbstractParser {
    match(Q) {
      return Q.startsWith("SITE  ");
    }
    _parse() {
      let Q = (J, Y, W, K) => {
        if (J == null || Y == null || W == null)
          return null;
        return {
          resName: J,
          chainID: Y,
          resSeq: xF.toIntOrNull(W),
          iCode: K
        };
      };
      return this.lines.map((J) => {
        let Y = J.extract(8, 10), W = J.extract(12, 14), K = J.extract(16, 17), z = J.extract(19, 21), N = J.extract(23, 23), F = J.extract(24, 27), L = J.extract(28, 28), w = J.extract(30, 32), D = J.extract(34, 34), k = J.extract(35, 38), I = J.extract(39, 39), h = J.extract(41, 43), o = J.extract(45, 45), p = J.extract(46, 49), X0 = J.extract(50, 50), d = J.extract(52, 54), Z0 = J.extract(56, 56), n = J.extract(57, 60), r = J.extract(61, 61);
        return {
          seqNum: xF.toIntOrNull(Y),
          siteID: W,
          numRes: xF.toIntOrNull(K),
          residues: [
            Q(z, N, F, L),
            Q(w, D, k, I),
            Q(h, o, p, X0),
            Q(d, Z0, n, r)
          ].filter((i) => i)
        };
      });
    }
    validate(Q) {
      let J = Q.reduce((Y, W) => {
        let K = W.siteID + "\t" + W.numRes;
        return Y[K] = Y[K] ?? [], Y[K].push(...W.residues), Y;
      }, {});
      for (let Y in J) {
        let [W, K] = Y.split("\t"), z = J[Y].length;
        if (parseInt(K) != z)
          return console.error(`"${W}" length error. expected : ${K}, actual : ${z}`), !1;
      }
      return !0;
    }
  }
  Fk.SiteParser = vF;

  class Ek extends Nk.SectionParser {
    siteParser = new vF;
    parsers() {
      return [this.siteParser];
    }
    parse() {
      return {
        sites: this.siteParser.parse()
      };
    }
  }
  Fk.MiscellaneousFeaturesSectionParser = Ek;
});

// node_modules/pdb-parser-js/dist/section/crystallographicAndCoordinateTransformation.js
var dF = t1((Uk) => {
  Object.defineProperty(Uk, "__esModule", { value: !0 });
  Uk.CrystallographicAndCoordinateTransformationSectionParser = Uk.MtrixParser = Uk.ScaleParser = Uk.OrigxParser = Uk.Cryst1Parser = Uk.Mtrix = Uk.Scale = Uk.Origx = void 0;
  T6();
  var W3 = gX(), g6 = T6();

  class yF {
    recordName;
    On1;
    On2;
    On3;
    Tn;
    constructor(Q, J, Y, W, K) {
      this.recordName = Q, this.On1 = J, this.On2 = Y, this.On3 = W, this.Tn = K;
    }
    toPoint4D() {
      return [this.On1, this.On2, this.On3, this.Tn];
    }
  }
  Uk.Origx = yF;

  class fF {
    recordName;
    Sn1;
    Sn2;
    Sn3;
    Un;
    constructor(Q, J, Y, W, K) {
      this.recordName = Q, this.Sn1 = J, this.Sn2 = Y, this.Sn3 = W, this.Un = K;
    }
    toPoint4D() {
      return [this.Sn1, this.Sn2, this.Sn3, this.Un];
    }
  }
  Uk.Scale = fF;

  class mF {
    recordName;
    serial;
    Mn1;
    Mn2;
    Mn3;
    Vn;
    iGiven;
    constructor(Q, J, Y, W, K, z, N) {
      this.recordName = Q, this.serial = J, this.Mn1 = Y, this.Mn2 = W, this.Mn3 = K, this.Vn = z, this.iGiven = N;
    }
    toPoint4D() {
      return [this.Mn1, this.Mn2, this.Mn3, this.Vn];
    }
  }
  Uk.Mtrix = mF;

  class bF extends W3.AbstractParser {
    match(Q) {
      return Q.startsWith("CRYST1");
    }
    _parse() {
      if (this.lines.length == 0)
        return null;
      let Q = this.lines[0], J = Q.extract(7, 15), Y = Q.extract(16, 24), W = Q.extract(25, 33), K = Q.extract(34, 40), z = Q.extract(41, 47), N = Q.extract(48, 54), F = Q.extract(56, 66), L = Q.extract(67, 70);
      return {
        a: g6.toFloatOrNull(J),
        b: g6.toFloatOrNull(Y),
        c: g6.toFloatOrNull(W),
        alpha: g6.toFloatOrNull(K),
        beta: g6.toFloatOrNull(z),
        gamma: g6.toFloatOrNull(N),
        sGroup: F,
        z: g6.toIntOrNull(L)
      };
    }
  }
  Uk.Cryst1Parser = bF;

  class uF extends W3.AbstractParser {
    match(Q) {
      return Q.startsWith("ORIGX1") || Q.startsWith("ORIGX2") || Q.startsWith("ORIGX3");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(1, 6), Y = Q.extract(11, 20), W = Q.extract(21, 30), K = Q.extract(31, 40), z = Q.extract(46, 55);
        return new yF(J, g6.toFloatOrNull(Y), g6.toFloatOrNull(W), g6.toFloatOrNull(K), g6.toFloatOrNull(z));
      });
    }
  }
  Uk.OrigxParser = uF;

  class cF extends W3.AbstractParser {
    match(Q) {
      return Q.startsWith("SCALE1") || Q.startsWith("SCALE2") || Q.startsWith("SCALE3");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(1, 6), Y = Q.extract(11, 20), W = Q.extract(21, 30), K = Q.extract(31, 40), z = Q.extract(46, 55);
        return new fF(J, g6.toFloatOrNull(Y), g6.toFloatOrNull(W), g6.toFloatOrNull(K), g6.toFloatOrNull(z));
      });
    }
  }
  Uk.ScaleParser = cF;

  class pF extends W3.AbstractParser {
    match(Q) {
      return Q.startsWith("MTRIX1") || Q.startsWith("MTRIX2") || Q.startsWith("MTRIX3");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(1, 6), Y = Q.extract(8, 11), W = Q.extract(11, 20), K = Q.extract(21, 30), z = Q.extract(31, 40), N = Q.extract(46, 55), F = Q.extract(60, 60);
        return new mF(J, g6.toIntOrNull(Y), g6.toFloatOrNull(W), g6.toFloatOrNull(K), g6.toFloatOrNull(z), g6.toFloatOrNull(N), g6.toIntOrNull(F));
      });
    }
  }
  Uk.MtrixParser = pF;

  class Ak extends W3.SectionParser {
    cryst1Parser = new bF;
    origxParser = new uF;
    scaleParser = new cF;
    mtrixParser = new pF;
    parsers() {
      return [
        this.cryst1Parser,
        this.origxParser,
        this.scaleParser,
        this.mtrixParser
      ];
    }
    parse() {
      return {
        cryst1: this.cryst1Parser.parse(),
        origxs: this.origxParser.parse(),
        scales: this.scaleParser.parse(),
        mtrixs: this.mtrixParser.parse()
      };
    }
  }
  Uk.CrystallographicAndCoordinateTransformationSectionParser = Ak;
});

// node_modules/pdb-parser-js/dist/section/coordinate.js
var rF = t1((wk) => {
  Object.defineProperty(wk, "__esModule", { value: !0 });
  wk.CoordinateSectionParser = wk.HetatmParser = wk.AnisouParser = wk.AtomParser = wk.Atom = wk.Hetatm = void 0;
  T6();
  var aH = gX(), DQ = T6();

  class K3 {
    data;
    constructor(Q) {
      this.data = Q;
    }
    toResidue() {
      return {
        resName: this.data.resName,
        chainID: this.data.chainID,
        resSeq: this.data.resSeq,
        iCode: this.data.iCode
      };
    }
    static lineToCoordinate(Q) {
      let J = Q.extract(7, 11), Y = Q.extract(13, 16), W = Q.extract(17, 17), K = Q.extract(18, 20), z = Q.extract(22, 22), N = Q.extract(23, 26), F = Q.extract(27, 27), L = Q.extract(31, 38), w = Q.extract(39, 46), D = Q.extract(47, 54), k = Q.extract(55, 60), I = Q.extract(61, 66), h = Q.extract(77, 78), o = Q.extract(79, 80);
      return {
        serial: DQ.toIntOrNull(J),
        atom: Y,
        altLoc: W,
        resName: K,
        chainID: z,
        resSeq: DQ.toIntOrNull(N),
        iCode: F,
        x: DQ.toFloatOrNull(L),
        y: DQ.toFloatOrNull(w),
        z: DQ.toFloatOrNull(D),
        occupancy: DQ.toFloatOrNull(k),
        tempFactor: DQ.toFloatOrNull(I),
        element: h,
        charge: o
      };
    }
  }

  class lF extends K3 {
    isCrystalWater() {
      return this.data.resName == "HOH";
    }
    isDummy() {
      return this.data.resName == "DUM";
    }
  }
  wk.Hetatm = lF;

  class nF extends K3 {
  }
  wk.Atom = nF;

  class sF extends aH.AbstractParser {
    filter;
    constructor(Q = null) {
      super();
      this.filter = Q;
    }
    match(Q) {
      return Q.startsWith("ATOM  ");
    }
    _parse() {
      let Q = [];
      for (let J of this.lines) {
        let Y = new nF(K3.lineToCoordinate(J));
        if (this.filter != null) {
          if (this.filter(Y))
            Q.push(Y);
        } else
          Q.push(Y);
      }
      return Q;
    }
  }
  wk.AtomParser = sF;

  class oF extends aH.AbstractParser {
    match(Q) {
      return Q.startsWith("ANISOU");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(7, 11), Y = Q.extract(13, 16), W = Q.extract(17, 17), K = Q.extract(18, 20), z = Q.extract(22, 22), N = Q.extract(23, 26), F = Q.extract(27, 27), L = Q.extract(29, 35), w = Q.extract(36, 42), D = Q.extract(43, 49), k = Q.extract(50, 56), I = Q.extract(57, 63), h = Q.extract(64, 70), o = Q.extract(77, 78), p = Q.extract(79, 80);
        return {
          serial: DQ.toIntOrNull(J),
          atom: Y,
          altLoc: W,
          resName: K,
          chainID: z,
          resSeq: DQ.toIntOrNull(N),
          iCode: F,
          u00: DQ.toIntOrNull(L),
          u11: DQ.toIntOrNull(w),
          u22: DQ.toIntOrNull(D),
          u01: DQ.toIntOrNull(k),
          u02: DQ.toIntOrNull(I),
          u12: DQ.toIntOrNull(h),
          element: o,
          charge: p
        };
      });
    }
  }
  wk.AnisouParser = oF;

  class aF extends aH.AbstractParser {
    excludeDummy;
    filter;
    constructor(Q = !0, J = null) {
      super();
      this.excludeDummy = Q, this.filter = J;
    }
    match(Q) {
      if (this.excludeDummy) {
        if (Q.extract(18, 20) == "DUM")
          return !1;
      }
      return Q.startsWith("HETATM");
    }
    _parse() {
      let Q = [];
      for (let J of this.lines) {
        let Y = new lF(K3.lineToCoordinate(J));
        if (this.filter != null) {
          if (this.filter(Y))
            Q.push(Y);
        } else
          Q.push(Y);
      }
      return Q;
    }
  }
  wk.HetatmParser = aF;

  class Ok extends aH.SectionParser {
    atomParer;
    anisouParser;
    hetatmParser;
    constructor(Q = !0, J = !0, Y = null, W = null) {
      super();
      this.atomParer = new sF(Y), this.hetatmParser = new aF(Q, W), this.anisouParser = J ? null : new oF;
    }
    parsers() {
      return [this.atomParer, this.anisouParser, this.hetatmParser].filter((Q) => Q);
    }
    parse() {
      return {
        atoms: this.atomParer.parse(),
        anisous: this.anisouParser?.parse() ?? [],
        hetatms: this.hetatmParser.parse()
      };
    }
  }
  wk.CoordinateSectionParser = Ok;
});

// node_modules/pdb-parser-js/dist/section/connectivity.js
var tF = t1((jk) => {
  Object.defineProperty(jk, "__esModule", { value: !0 });
  jk.ConnectivitySectionParser = jk.ConectParser = void 0;
  T6();
  var Rk = gX(), Dk = T6();

  class iF extends Rk.AbstractParser {
    match(Q) {
      return Q.startsWith("CONECT");
    }
    _parse() {
      return this.lines.map((Q) => {
        let J = Q.extract(7, 11), Y = [
          Q.extract(12, 16),
          Q.extract(17, 21),
          Q.extract(22, 26),
          Q.extract(27, 31)
        ];
        return {
          atomSeqNum: Dk.toIntOrNull(J),
          bondedAtomSeqNums: Y.filter((W) => W).map((W) => Dk.toIntOrNull(W))
        };
      });
    }
  }
  jk.ConectParser = iF;

  class kk extends Rk.SectionParser {
    conectParser = new iF;
    parsers() {
      return [this.conectParser];
    }
    parse() {
      return {
        conects: this.conectParser.parse()
      };
    }
  }
  jk.ConnectivitySectionParser = kk;
});

// node_modules/pdb-parser-js/dist/section/bookkeeping.js
var QP = t1((Sk) => {
  Object.defineProperty(Sk, "__esModule", { value: !0 });
  Sk.BookkeepingSectionParser = Sk.MasterParser = void 0;
  T6();
  var Ck = gX(), FZ = T6();

  class eF extends Ck.AbstractParser {
    match(Q) {
      return Q.startsWith("MASTER");
    }
    _parse() {
      if (this.lines.length == 0)
        return null;
      let Q = this.lines[0], J = Q.extract(11, 15), Y = Q.extract(21, 25), W = Q.extract(26, 30), K = Q.extract(31, 35), z = Q.extract(36, 40), N = Q.extract(41, 45), F = Q.extract(46, 50), L = Q.extract(51, 55), w = Q.extract(56, 60), D = Q.extract(61, 65), k = Q.extract(66, 70);
      return {
        numRemark: FZ.toIntOrNull(J),
        numHet: FZ.toIntOrNull(Y),
        numHelix: FZ.toIntOrNull(W),
        numSheet: FZ.toIntOrNull(K),
        numTurn: FZ.toIntOrNull(z),
        numSite: FZ.toIntOrNull(N),
        numXform: FZ.toIntOrNull(F),
        numCoord: FZ.toIntOrNull(L),
        numTer: FZ.toIntOrNull(w),
        numConect: FZ.toIntOrNull(D),
        numSeq: FZ.toIntOrNull(k)
      };
    }
  }
  Sk.MasterParser = eF;

  class Vk extends Ck.SectionParser {
    masterParser = new eF;
    parsers() {
      return [this.masterParser];
    }
    parse() {
      return {
        master: this.masterParser.parse()
      };
    }
  }
  Sk.BookkeepingSectionParser = Vk;
});

// node_modules/pdb-parser-js/dist/pdb.js
var xk = t1((Tk) => {
  Object.defineProperty(Tk, "__esModule", { value: !0 });
  Tk.PdbParser = Tk.Pdb = void 0;
  var rm = EF(), im = wF(), tm = jF(), em = SF(), Qb = gF(), Xb = hF(), Zb = dF(), Jb = rF(), $b = tF(), Yb = QP(), qb = gX();

  class XP {
    title;
    primaryStructure;
    heterogen;
    secondaryStructure;
    connectivityAnnotation;
    miscellaneousFeatures;
    crystallographicAndCoordinateTransformation;
    coordinate;
    connectivity;
    bookkeeping;
    constructor(Q, J, Y, W, K, z, N, F, L, w) {
      this.title = Q, this.primaryStructure = J, this.heterogen = Y, this.secondaryStructure = W, this.connectivityAnnotation = K, this.miscellaneousFeatures = z, this.crystallographicAndCoordinateTransformation = N, this.coordinate = F, this.connectivity = L, this.bookkeeping = w;
    }
  }
  Tk.Pdb = XP;

  class _k extends qb.SectionParser {
    titleSectionParser = new rm.TitleSectionParser;
    primaryStructureSectionParser = new im.PrimaryStructureSectionParser;
    heterogenSectionParser = new tm.HeterogenSectionParser;
    secondaryStructureSectionParser = new em.SecondaryStructureSectionParser;
    connectivityAnnotationSectionParser = new Qb.ConnectivityAnnotationSectionParser;
    miscellaneousFeaturesSectionParser = new Xb.MiscellaneousFeaturesSectionParser;
    crystallographicAndCoordinateTransformationSectionParser = new Zb.CrystallographicAndCoordinateTransformationSectionParser;
    coordinateSectionParser;
    connectivitySectionParser = new $b.ConnectivitySectionParser;
    bookkeepingSectionParser = new Yb.BookkeepingSectionParser;
    constructor(Q = !0, J = !0, Y = null, W = null) {
      super();
      this.coordinateSectionParser = new Jb.CoordinateSectionParser(Q, J, Y, W);
    }
    parsers() {
      return [
        this.titleSectionParser,
        this.primaryStructureSectionParser,
        this.heterogenSectionParser,
        this.secondaryStructureSectionParser,
        this.connectivityAnnotationSectionParser,
        this.miscellaneousFeaturesSectionParser,
        this.crystallographicAndCoordinateTransformationSectionParser,
        this.coordinateSectionParser,
        this.connectivitySectionParser,
        this.bookkeepingSectionParser
      ];
    }
    parse() {
      return new XP(this.titleSectionParser.parse(), this.primaryStructureSectionParser.parse(), this.heterogenSectionParser.parse(), this.secondaryStructureSectionParser.parse(), this.connectivityAnnotationSectionParser.parse(), this.miscellaneousFeaturesSectionParser.parse(), this.crystallographicAndCoordinateTransformationSectionParser.parse(), this.coordinateSectionParser.parse(), this.connectivitySectionParser.parse(), this.bookkeepingSectionParser.parse());
    }
  }
  Tk.PdbParser = _k;
});

// node_modules/pdb-parser-js/dist/index.js
var fk = t1((M0) => {
  Object.defineProperty(M0, "__esModule", { value: !0 });
  M0.ConnectivitySectionParser = M0.HetatmParser = M0.AnisouParser = M0.AtomParser = M0.CoordinateSectionParser = M0.MtrixParser = M0.ScaleParser = M0.OrigxParser = M0.Cryst1Parser = M0.CrystallographicAndCoordinateTransformationSectionParser = M0.SiteParser = M0.MiscellaneousFeaturesSectionParser = M0.CispepParser = M0.LinkParser = M0.SsbondParser = M0.ConnectivityAnnotationSectionParser = M0.SheetParser = M0.HelixParser = M0.SecondaryStructureSectionParser = M0.FormulParser = M0.HetsynParser = M0.HetnamParser = M0.HetParser = M0.HeterogenSectionParser = M0.SeqresParser = M0.Dbref2Parser = M0.Dbref1Parser = M0.ModresParser = M0.SeqadvParser = M0.DbrefParser = M0.PrimaryStructureSectionParser = M0.Remark470Parser = M0.Remark465Parser = M0.RemarkParser = M0.SprsdeParser = M0.RevdatParser = M0.AuthorParser = M0.MdltypParser = M0.NummdlParser = M0.ExpdtaParser = M0.KeywdsParser = M0.SourceParser = M0.CompndParser = M0.CaveatParser = M0.SplitParser = M0.TitleParser = M0.ObslteParser = M0.HeaderParser = M0.TitleSectionParser = M0.PdbParser = void 0;
  M0.MasterParser = M0.BookkeepingSectionParser = M0.ConectParser = void 0;
  var Kb = xk();
  Object.defineProperty(M0, "PdbParser", { enumerable: !0, get: function() {
    return Kb.PdbParser;
  } });
  var vk = QP();
  Object.defineProperty(M0, "BookkeepingSectionParser", { enumerable: !0, get: function() {
    return vk.BookkeepingSectionParser;
  } });
  Object.defineProperty(M0, "MasterParser", { enumerable: !0, get: function() {
    return vk.MasterParser;
  } });
  var hk = tF();
  Object.defineProperty(M0, "ConectParser", { enumerable: !0, get: function() {
    return hk.ConectParser;
  } });
  Object.defineProperty(M0, "ConnectivitySectionParser", { enumerable: !0, get: function() {
    return hk.ConnectivitySectionParser;
  } });
  var rH = gF();
  Object.defineProperty(M0, "CispepParser", { enumerable: !0, get: function() {
    return rH.CispepParser;
  } });
  Object.defineProperty(M0, "ConnectivityAnnotationSectionParser", { enumerable: !0, get: function() {
    return rH.ConnectivityAnnotationSectionParser;
  } });
  Object.defineProperty(M0, "LinkParser", { enumerable: !0, get: function() {
    return rH.LinkParser;
  } });
  Object.defineProperty(M0, "SsbondParser", { enumerable: !0, get: function() {
    return rH.SsbondParser;
  } });
  var iH = rF();
  Object.defineProperty(M0, "AnisouParser", { enumerable: !0, get: function() {
    return iH.AnisouParser;
  } });
  Object.defineProperty(M0, "AtomParser", { enumerable: !0, get: function() {
    return iH.AtomParser;
  } });
  Object.defineProperty(M0, "CoordinateSectionParser", { enumerable: !0, get: function() {
    return iH.CoordinateSectionParser;
  } });
  Object.defineProperty(M0, "HetatmParser", { enumerable: !0, get: function() {
    return iH.HetatmParser;
  } });
  var H3 = dF();
  Object.defineProperty(M0, "Cryst1Parser", { enumerable: !0, get: function() {
    return H3.Cryst1Parser;
  } });
  Object.defineProperty(M0, "CrystallographicAndCoordinateTransformationSectionParser", { enumerable: !0, get: function() {
    return H3.CrystallographicAndCoordinateTransformationSectionParser;
  } });
  Object.defineProperty(M0, "MtrixParser", { enumerable: !0, get: function() {
    return H3.MtrixParser;
  } });
  Object.defineProperty(M0, "OrigxParser", { enumerable: !0, get: function() {
    return H3.OrigxParser;
  } });
  Object.defineProperty(M0, "ScaleParser", { enumerable: !0, get: function() {
    return H3.ScaleParser;
  } });
  var G3 = jF();
  Object.defineProperty(M0, "FormulParser", { enumerable: !0, get: function() {
    return G3.FormulParser;
  } });
  Object.defineProperty(M0, "HeterogenSectionParser", { enumerable: !0, get: function() {
    return G3.HeterogenSectionParser;
  } });
  Object.defineProperty(M0, "HetnamParser", { enumerable: !0, get: function() {
    return G3.HetnamParser;
  } });
  Object.defineProperty(M0, "HetParser", { enumerable: !0, get: function() {
    return G3.HetParser;
  } });
  Object.defineProperty(M0, "HetsynParser", { enumerable: !0, get: function() {
    return G3.HetsynParser;
  } });
  var yk = hF();
  Object.defineProperty(M0, "MiscellaneousFeaturesSectionParser", { enumerable: !0, get: function() {
    return yk.MiscellaneousFeaturesSectionParser;
  } });
  Object.defineProperty(M0, "SiteParser", { enumerable: !0, get: function() {
    return yk.SiteParser;
  } });
  var l$ = wF();
  Object.defineProperty(M0, "Dbref1Parser", { enumerable: !0, get: function() {
    return l$.Dbref1Parser;
  } });
  Object.defineProperty(M0, "Dbref2Parser", { enumerable: !0, get: function() {
    return l$.Dbref2Parser;
  } });
  Object.defineProperty(M0, "DbrefParser", { enumerable: !0, get: function() {
    return l$.DbrefParser;
  } });
  Object.defineProperty(M0, "ModresParser", { enumerable: !0, get: function() {
    return l$.ModresParser;
  } });
  Object.defineProperty(M0, "PrimaryStructureSectionParser", { enumerable: !0, get: function() {
    return l$.PrimaryStructureSectionParser;
  } });
  Object.defineProperty(M0, "SeqadvParser", { enumerable: !0, get: function() {
    return l$.SeqadvParser;
  } });
  Object.defineProperty(M0, "SeqresParser", { enumerable: !0, get: function() {
    return l$.SeqresParser;
  } });
  var ZP = SF();
  Object.defineProperty(M0, "HelixParser", { enumerable: !0, get: function() {
    return ZP.HelixParser;
  } });
  Object.defineProperty(M0, "SecondaryStructureSectionParser", { enumerable: !0, get: function() {
    return ZP.SecondaryStructureSectionParser;
  } });
  Object.defineProperty(M0, "SheetParser", { enumerable: !0, get: function() {
    return ZP.SheetParser;
  } });
  var M8 = EF();
  Object.defineProperty(M0, "AuthorParser", { enumerable: !0, get: function() {
    return M8.AuthorParser;
  } });
  Object.defineProperty(M0, "CaveatParser", { enumerable: !0, get: function() {
    return M8.CaveatParser;
  } });
  Object.defineProperty(M0, "CompndParser", { enumerable: !0, get: function() {
    return M8.CompndParser;
  } });
  Object.defineProperty(M0, "ExpdtaParser", { enumerable: !0, get: function() {
    return M8.ExpdtaParser;
  } });
  Object.defineProperty(M0, "HeaderParser", { enumerable: !0, get: function() {
    return M8.HeaderParser;
  } });
  Object.defineProperty(M0, "KeywdsParser", { enumerable: !0, get: function() {
    return M8.KeywdsParser;
  } });
  Object.defineProperty(M0, "MdltypParser", { enumerable: !0, get: function() {
    return M8.MdltypParser;
  } });
  Object.defineProperty(M0, "NummdlParser", { enumerable: !0, get: function() {
    return M8.NummdlParser;
  } });
  Object.defineProperty(M0, "ObslteParser", { enumerable: !0, get: function() {
    return M8.ObslteParser;
  } });
  Object.defineProperty(M0, "Remark465Parser", { enumerable: !0, get: function() {
    return M8.Remark465Parser;
  } });
  Object.defineProperty(M0, "Remark470Parser", { enumerable: !0, get: function() {
    return M8.Remark470Parser;
  } });
  Object.defineProperty(M0, "RemarkParser", { enumerable: !0, get: function() {
    return M8.RemarkParser;
  } });
  Object.defineProperty(M0, "RevdatParser", { enumerable: !0, get: function() {
    return M8.RevdatParser;
  } });
  Object.defineProperty(M0, "SourceParser", { enumerable: !0, get: function() {
    return M8.SourceParser;
  } });
  Object.defineProperty(M0, "SplitParser", { enumerable: !0, get: function() {
    return M8.SplitParser;
  } });
  Object.defineProperty(M0, "SprsdeParser", { enumerable: !0, get: function() {
    return M8.SprsdeParser;
  } });
  Object.defineProperty(M0, "TitleParser", { enumerable: !0, get: function() {
    return M8.TitleParser;
  } });
  Object.defineProperty(M0, "TitleSectionParser", { enumerable: !0, get: function() {
    return M8.TitleSectionParser;
  } });
});

// src/index.tsx
var eH = L6(UQ(), 1), sk = L6(Ow(), 1);

// node_modules/streamlit-component-lib/dist/StreamlitReact.js
var yD = L6(Cw(), 1), x$ = L6(fw(), 1);

// node_modules/tslib/tslib.es6.mjs
function bw(Q, J) {
  var Y = {};
  for (var W in Q)
    if (Object.prototype.hasOwnProperty.call(Q, W) && J.indexOf(W) < 0)
      Y[W] = Q[W];
  if (Q != null && typeof Object.getOwnPropertySymbols === "function") {
    for (var K = 0, W = Object.getOwnPropertySymbols(Q);K < W.length; K++)
      if (J.indexOf(W[K]) < 0 && Object.prototype.propertyIsEnumerable.call(Q, W[K]))
        Y[W[K]] = Q[W[K]];
  }
  return Y;
}
function z0(Q, J, Y, W) {
  function K(z) {
    return z instanceof Y ? z : new Y(function(N) {
      N(z);
    });
  }
  return new (Y || (Y = Promise))(function(z, N) {
    function F(D) {
      try {
        w(W.next(D));
      } catch (k) {
        N(k);
      }
    }
    function L(D) {
      try {
        w(W.throw(D));
      } catch (k) {
        N(k);
      }
    }
    function w(D) {
      D.done ? z(D.value) : K(D.value).then(F, L);
    }
    w((W = W.apply(Q, J || [])).next());
  });
}
function mw(Q) {
  var J = typeof Symbol === "function" && Symbol.iterator, Y = J && Q[J], W = 0;
  if (Y)
    return Y.call(Q);
  if (Q && typeof Q.length === "number")
    return {
      next: function() {
        if (Q && W >= Q.length)
          Q = void 0;
        return { value: Q && Q[W++], done: !Q };
      }
    };
  throw new TypeError(J ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function s0(Q) {
  return this instanceof s0 ? (this.v = Q, this) : new s0(Q);
}
function tQ(Q, J, Y) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var W = Y.apply(Q, J || []), K, z = [];
  return K = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), F("next"), F("throw"), F("return", N), K[Symbol.asyncIterator] = function() {
    return this;
  }, K;
  function N(h) {
    return function(o) {
      return Promise.resolve(o).then(h, k);
    };
  }
  function F(h, o) {
    if (W[h]) {
      if (K[h] = function(p) {
        return new Promise(function(X0, d) {
          z.push([h, p, X0, d]) > 1 || L(h, p);
        });
      }, o)
        K[h] = o(K[h]);
    }
  }
  function L(h, o) {
    try {
      w(W[h](o));
    } catch (p) {
      I(z[0][3], p);
    }
  }
  function w(h) {
    h.value instanceof s0 ? Promise.resolve(h.value.v).then(D, k) : I(z[0][2], h);
  }
  function D(h) {
    L("next", h);
  }
  function k(h) {
    L("throw", h);
  }
  function I(h, o) {
    if (h(o), z.shift(), z.length)
      L(z[0][0], z[0][1]);
  }
}
function rY(Q) {
  var J, Y;
  return J = {}, W("next"), W("throw", function(K) {
    throw K;
  }), W("return"), J[Symbol.iterator] = function() {
    return this;
  }, J;
  function W(K, z) {
    J[K] = Q[K] ? function(N) {
      return (Y = !Y) ? { value: s0(Q[K](N)), done: !1 } : z ? z(N) : N;
    } : z;
  }
}
function XZ(Q) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var J = Q[Symbol.asyncIterator], Y;
  return J ? J.call(Q) : (Q = typeof mw === "function" ? mw(Q) : Q[Symbol.iterator](), Y = {}, W("next"), W("throw"), W("return"), Y[Symbol.asyncIterator] = function() {
    return this;
  }, Y);
  function W(z) {
    Y[z] = Q[z] && function(N) {
      return new Promise(function(F, L) {
        N = Q[z](N), K(F, L, N.done, N.value);
      });
    };
  }
  function K(z, N, F, L) {
    Promise.resolve(L).then(function(w) {
      z({ value: w, done: F });
    }, N);
  }
}

// node_modules/apache-arrow/util/buffer.mjs
var AN = {};
nY(AN, {
  toUint8ClampedArrayIterator: () => Jv,
  toUint8ClampedArrayAsyncIterator: () => zv,
  toUint8ClampedArray: () => ax,
  toUint8ArrayIterator: () => EN,
  toUint8ArrayAsyncIterator: () => FN,
  toUint8Array: () => c0,
  toUint32ArrayIterator: () => Qv,
  toUint32ArrayAsyncIterator: () => Kv,
  toUint32Array: () => lx,
  toUint16ArrayIterator: () => ex,
  toUint16ArrayAsyncIterator: () => Wv,
  toUint16Array: () => dx,
  toInt8ArrayIterator: () => rx,
  toInt8ArrayAsyncIterator: () => $v,
  toInt8Array: () => ux,
  toInt32ArrayIterator: () => tx,
  toInt32ArrayAsyncIterator: () => qv,
  toInt32Array: () => D$,
  toInt16ArrayIterator: () => ix,
  toInt16ArrayAsyncIterator: () => Yv,
  toInt16Array: () => cx,
  toFloat64ArrayIterator: () => Zv,
  toFloat64ArrayAsyncIterator: () => Gv,
  toFloat64Array: () => ox,
  toFloat32ArrayIterator: () => Xv,
  toFloat32ArrayAsyncIterator: () => Hv,
  toFloat32Array: () => sx,
  toBigUint64Array: () => nx,
  toBigInt64Array: () => px,
  toArrayBufferViewIterator: () => vZ,
  toArrayBufferViewAsyncIterator: () => JZ,
  toArrayBufferView: () => q1,
  rebaseValueOffsets: () => LK,
  memcpy: () => iY,
  joinUint8Arrays: () => QX,
  compareArrayLike: () => PN
});

// node_modules/apache-arrow/util/utf8.mjs
var yx = new TextDecoder("utf-8"), AK = (Q) => yx.decode(Q), fx = /* @__PURE__ */ new TextEncoder, qJ = (Q) => fx.encode(Q);

// node_modules/apache-arrow/util/compat.mjs
var [tc, R5] = (() => {
  let Q = () => {
    throw new Error("BigInt is not available in this environment");
  };
  function J() {
    throw Q();
  }
  return J.asIntN = () => {
    throw Q();
  }, J.asUintN = () => {
    throw Q();
  }, typeof BigInt !== "undefined" ? [BigInt, !0] : [J, !1];
})(), [AX, ec] = (() => {
  let Q = () => {
    throw new Error("BigInt64Array is not available in this environment");
  };

  class J {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw Q();
    }
    static from() {
      throw Q();
    }
    constructor() {
      throw Q();
    }
  }
  return typeof BigInt64Array !== "undefined" ? [BigInt64Array, !0] : [J, !1];
})(), [UX, Qp] = (() => {
  let Q = () => {
    throw new Error("BigUint64Array is not available in this environment");
  };

  class J {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw Q();
    }
    static from() {
      throw Q();
    }
    constructor() {
      throw Q();
    }
  }
  return typeof BigUint64Array !== "undefined" ? [BigUint64Array, !0] : [J, !1];
})();
var mx = (Q) => typeof Q === "number", uw = (Q) => typeof Q === "boolean", Q8 = (Q) => typeof Q === "function", LQ = (Q) => Q != null && Object(Q) === Q, eQ = (Q) => {
  return LQ(Q) && Q8(Q.then);
};
var ZZ = (Q) => {
  return LQ(Q) && Q8(Q[Symbol.iterator]);
}, LX = (Q) => {
  return LQ(Q) && Q8(Q[Symbol.asyncIterator]);
}, k5 = (Q) => {
  return LQ(Q) && LQ(Q.schema);
};
var j5 = (Q) => {
  return LQ(Q) && "done" in Q && "value" in Q;
};
var B5 = (Q) => {
  return LQ(Q) && Q8(Q.stat) && mx(Q.fd);
};
var C5 = (Q) => {
  return LQ(Q) && UK(Q.body);
}, V5 = (Q) => ("_getDOMStream" in Q) && ("_getNodeStream" in Q), cw = (Q) => {
  return LQ(Q) && Q8(Q.abort) && Q8(Q.getWriter) && !V5(Q);
}, UK = (Q) => {
  return LQ(Q) && Q8(Q.cancel) && Q8(Q.getReader) && !V5(Q);
}, pw = (Q) => {
  return LQ(Q) && Q8(Q.end) && Q8(Q.write) && uw(Q.writable) && !V5(Q);
}, S5 = (Q) => {
  return LQ(Q) && Q8(Q.read) && Q8(Q.pipe) && uw(Q.readable) && !V5(Q);
}, dw = (Q) => {
  return LQ(Q) && Q8(Q.clear) && Q8(Q.bytes) && Q8(Q.position) && Q8(Q.setPosition) && Q8(Q.capacity) && Q8(Q.getBufferIdentifier) && Q8(Q.createLong);
};

// node_modules/apache-arrow/util/buffer.mjs
var NN = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : ArrayBuffer;
function bx(Q) {
  let J = Q[0] ? [Q[0]] : [], Y, W, K, z;
  for (let N, F, L = 0, w = 0, D = Q.length;++L < D; ) {
    if (N = J[w], F = Q[L], !N || !F || N.buffer !== F.buffer || F.byteOffset < N.byteOffset) {
      F && (J[++w] = F);
      continue;
    }
    if ({ byteOffset: Y, byteLength: K } = N, { byteOffset: W, byteLength: z } = F, Y + K < W || W + z < Y) {
      F && (J[++w] = F);
      continue;
    }
    J[w] = new Uint8Array(N.buffer, Y, W - Y + z);
  }
  return J;
}
function iY(Q, J, Y = 0, W = J.byteLength) {
  let K = Q.byteLength, z = new Uint8Array(Q.buffer, Q.byteOffset, K), N = new Uint8Array(J.buffer, J.byteOffset, Math.min(W, K));
  return z.set(N, Y), Q;
}
function QX(Q, J) {
  let Y = bx(Q), W = Y.reduce((D, k) => D + k.byteLength, 0), K, z, N, F = 0, L = -1, w = Math.min(J || Number.POSITIVE_INFINITY, W);
  for (let D = Y.length;++L < D; ) {
    if (K = Y[L], z = K.subarray(0, Math.min(K.length, w - F)), w <= F + z.length) {
      if (z.length < K.length)
        Y[L] = K.subarray(z.length);
      else if (z.length === K.length)
        L++;
      N ? iY(N, z, F) : N = z;
      break;
    }
    iY(N || (N = new Uint8Array(w)), z, F), F += z.length;
  }
  return [N || new Uint8Array(0), Y.slice(L), W - (N ? N.byteLength : 0)];
}
function q1(Q, J) {
  let Y = j5(J) ? J.value : J;
  if (Y instanceof Q) {
    if (Q === Uint8Array)
      return new Q(Y.buffer, Y.byteOffset, Y.byteLength);
    return Y;
  }
  if (!Y)
    return new Q(0);
  if (typeof Y === "string")
    Y = qJ(Y);
  if (Y instanceof ArrayBuffer)
    return new Q(Y);
  if (Y instanceof NN)
    return new Q(Y);
  if (dw(Y))
    return q1(Q, Y.bytes());
  return !ArrayBuffer.isView(Y) ? Q.from(Y) : Y.byteLength <= 0 ? new Q(0) : new Q(Y.buffer, Y.byteOffset, Y.byteLength / Q.BYTES_PER_ELEMENT);
}
var ux = (Q) => q1(Int8Array, Q), cx = (Q) => q1(Int16Array, Q), D$ = (Q) => q1(Int32Array, Q), px = (Q) => q1(AX, Q), c0 = (Q) => q1(Uint8Array, Q), dx = (Q) => q1(Uint16Array, Q), lx = (Q) => q1(Uint32Array, Q), nx = (Q) => q1(UX, Q), sx = (Q) => q1(Float32Array, Q), ox = (Q) => q1(Float64Array, Q), ax = (Q) => q1(Uint8ClampedArray, Q), zN = (Q) => {
  return Q.next(), Q;
};
function* vZ(Q, J) {
  let Y = function* (K) {
    yield K;
  }, W = typeof J === "string" ? Y(J) : ArrayBuffer.isView(J) ? Y(J) : J instanceof ArrayBuffer ? Y(J) : J instanceof NN ? Y(J) : !ZZ(J) ? Y(J) : J;
  return yield* zN(function* (K) {
    let z = null;
    do
      z = K.next(yield q1(Q, z));
    while (!z.done);
  }(W[Symbol.iterator]())), new Q;
}
var rx = (Q) => vZ(Int8Array, Q), ix = (Q) => vZ(Int16Array, Q), tx = (Q) => vZ(Int32Array, Q), EN = (Q) => vZ(Uint8Array, Q), ex = (Q) => vZ(Uint16Array, Q), Qv = (Q) => vZ(Uint32Array, Q), Xv = (Q) => vZ(Float32Array, Q), Zv = (Q) => vZ(Float64Array, Q), Jv = (Q) => vZ(Uint8ClampedArray, Q);
function JZ(Q, J) {
  return tQ(this, arguments, function* Y() {
    if (eQ(J))
      return yield s0(yield s0(yield* rY(XZ(JZ(Q, yield s0(J))))));
    let W = function(N) {
      return tQ(this, arguments, function* () {
        yield yield s0(yield s0(N));
      });
    }, K = function(N) {
      return tQ(this, arguments, function* () {
        yield s0(yield* rY(XZ(zN(function* (F) {
          let L = null;
          do
            L = F.next(yield L === null || L === void 0 ? void 0 : L.value);
          while (!L.done);
        }(N[Symbol.iterator]())))));
      });
    }, z = typeof J === "string" ? W(J) : ArrayBuffer.isView(J) ? W(J) : J instanceof ArrayBuffer ? W(J) : J instanceof NN ? W(J) : ZZ(J) ? K(J) : !LX(J) ? W(J) : J;
    return yield s0(yield* rY(XZ(zN(function(N) {
      return tQ(this, arguments, function* () {
        let F = null;
        do
          F = yield s0(N.next(yield yield s0(q1(Q, F))));
        while (!F.done);
      });
    }(z[Symbol.asyncIterator]()))))), yield s0(new Q);
  });
}
var $v = (Q) => JZ(Int8Array, Q), Yv = (Q) => JZ(Int16Array, Q), qv = (Q) => JZ(Int32Array, Q), FN = (Q) => JZ(Uint8Array, Q), Wv = (Q) => JZ(Uint16Array, Q), Kv = (Q) => JZ(Uint32Array, Q), Hv = (Q) => JZ(Float32Array, Q), Gv = (Q) => JZ(Float64Array, Q), zv = (Q) => JZ(Uint8ClampedArray, Q);
function LK(Q, J, Y) {
  if (Q !== 0) {
    Y = Y.slice(0, J + 1);
    for (let W = -1;++W <= J; )
      Y[W] += Q;
  }
  return Y;
}
function PN(Q, J) {
  let Y = 0, W = Q.length;
  if (W !== J.length)
    return !1;
  if (W > 0)
    do
      if (Q[Y] !== J[Y])
        return !1;
    while (++Y < W);
  return !0;
}

// node_modules/apache-arrow/io/adapters.mjs
var y8 = {
  fromIterable(Q) {
    return I5(Nv(Q));
  },
  fromAsyncIterable(Q) {
    return I5(Ev(Q));
  },
  fromDOMStream(Q) {
    return I5(Fv(Q));
  },
  fromNodeStream(Q) {
    return I5(Pv(Q));
  },
  toDOMStream(Q, J) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  toNodeStream(Q, J) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, I5 = (Q) => {
  return Q.next(), Q;
};
function* Nv(Q) {
  let J, Y = !1, W = [], K, z, N, F = 0;
  function L() {
    if (z === "peek")
      return QX(W, N)[0];
    return [K, W, F] = QX(W, N), K;
  }
  ({ cmd: z, size: N } = yield null);
  let w = EN(Q)[Symbol.iterator]();
  try {
    do {
      if ({ done: J, value: K } = Number.isNaN(N - F) ? w.next() : w.next(N - F), !J && K.byteLength > 0)
        W.push(K), F += K.byteLength;
      if (J || N <= F)
        do
          ({ cmd: z, size: N } = yield L());
        while (N < F);
    } while (!J);
  } catch (D) {
    (Y = !0) && typeof w.throw === "function" && w.throw(D);
  } finally {
    Y === !1 && typeof w.return === "function" && w.return(null);
  }
  return null;
}
function Ev(Q) {
  return tQ(this, arguments, function* J() {
    let Y, W = !1, K = [], z, N, F, L = 0;
    function w() {
      if (N === "peek")
        return QX(K, F)[0];
      return [z, K, L] = QX(K, F), z;
    }
    ({ cmd: N, size: F } = yield yield s0(null));
    let D = FN(Q)[Symbol.asyncIterator]();
    try {
      do {
        if ({ done: Y, value: z } = Number.isNaN(F - L) ? yield s0(D.next()) : yield s0(D.next(F - L)), !Y && z.byteLength > 0)
          K.push(z), L += z.byteLength;
        if (Y || F <= L)
          do
            ({ cmd: N, size: F } = yield yield s0(w()));
          while (F < L);
      } while (!Y);
    } catch (k) {
      (W = !0) && typeof D.throw === "function" && (yield s0(D.throw(k)));
    } finally {
      W === !1 && typeof D.return === "function" && (yield s0(D.return(new Uint8Array(0))));
    }
    return yield s0(null);
  });
}
function Fv(Q) {
  return tQ(this, arguments, function* J() {
    let Y = !1, W = !1, K = [], z, N, F, L = 0;
    function w() {
      if (N === "peek")
        return QX(K, F)[0];
      return [z, K, L] = QX(K, F), z;
    }
    ({ cmd: N, size: F } = yield yield s0(null));
    let D = new lw(Q);
    try {
      do {
        if ({ done: Y, value: z } = Number.isNaN(F - L) ? yield s0(D.read()) : yield s0(D.read(F - L)), !Y && z.byteLength > 0)
          K.push(c0(z)), L += z.byteLength;
        if (Y || F <= L)
          do
            ({ cmd: N, size: F } = yield yield s0(w()));
          while (F < L);
      } while (!Y);
    } catch (k) {
      (W = !0) && (yield s0(D.cancel(k)));
    } finally {
      W === !1 ? yield s0(D.cancel()) : Q.locked && D.releaseLock();
    }
    return yield s0(null);
  });
}

class lw {
  constructor(Q) {
    this.source = Q, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch(() => {});
  }
  get closed() {
    return this.reader ? this.reader.closed.catch(() => {}) : Promise.resolve();
  }
  releaseLock() {
    if (this.reader)
      this.reader.releaseLock();
    this.reader = null;
  }
  cancel(Q) {
    return z0(this, void 0, void 0, function* () {
      let { reader: J, source: Y } = this;
      J && (yield J.cancel(Q).catch(() => {})), Y && (Y.locked && this.releaseLock());
    });
  }
  read(Q) {
    return z0(this, void 0, void 0, function* () {
      if (Q === 0)
        return { done: this.reader == null, value: new Uint8Array(0) };
      let J = yield this.reader.read();
      return !J.done && (J.value = c0(J)), J;
    });
  }
}
var UN = (Q, J) => {
  let Y = (K) => W([J, K]), W;
  return [J, Y, new Promise((K) => (W = K) && Q.once(J, Y))];
};
function Pv(Q) {
  return tQ(this, arguments, function* J() {
    let Y = [], W = "error", K = !1, z = null, N, F, L = 0, w = [], D;
    function k() {
      if (N === "peek")
        return QX(w, F)[0];
      return [D, w, L] = QX(w, F), D;
    }
    if ({ cmd: N, size: F } = yield yield s0(null), Q.isTTY)
      return yield yield s0(new Uint8Array(0)), yield s0(null);
    try {
      Y[0] = UN(Q, "end"), Y[1] = UN(Q, "error");
      do {
        if (Y[2] = UN(Q, "readable"), [W, z] = yield s0(Promise.race(Y.map((h) => h[2]))), W === "error")
          break;
        if (!(K = W === "end")) {
          if (!Number.isFinite(F - L))
            D = c0(Q.read());
          else if (D = c0(Q.read(F - L)), D.byteLength < F - L)
            D = c0(Q.read());
          if (D.byteLength > 0)
            w.push(D), L += D.byteLength;
        }
        if (K || F <= L)
          do
            ({ cmd: N, size: F } = yield yield s0(k()));
          while (F < L);
      } while (!K);
    } finally {
      yield s0(I(Y, W === "error" ? z : null));
    }
    return yield s0(null);
    function I(h, o) {
      return D = w = null, new Promise((p, X0) => {
        for (let [d, Z0] of h)
          Q.off(d, Z0);
        try {
          let d = Q.destroy;
          d && d.call(Q, o), o = void 0;
        } catch (d) {
          o = d || o;
        } finally {
          o != null ? X0(o) : p();
        }
      });
    }
  });
}

// node_modules/apache-arrow/enum.mjs
var A8;
(function(Q) {
  Q[Q.V1 = 0] = "V1", Q[Q.V2 = 1] = "V2", Q[Q.V3 = 2] = "V3", Q[Q.V4 = 3] = "V4", Q[Q.V5 = 4] = "V5";
})(A8 || (A8 = {}));
var O6;
(function(Q) {
  Q[Q.Sparse = 0] = "Sparse", Q[Q.Dense = 1] = "Dense";
})(O6 || (O6 = {}));
var Z6;
(function(Q) {
  Q[Q.HALF = 0] = "HALF", Q[Q.SINGLE = 1] = "SINGLE", Q[Q.DOUBLE = 2] = "DOUBLE";
})(Z6 || (Z6 = {}));
var f8;
(function(Q) {
  Q[Q.DAY = 0] = "DAY", Q[Q.MILLISECOND = 1] = "MILLISECOND";
})(f8 || (f8 = {}));
var G1;
(function(Q) {
  Q[Q.SECOND = 0] = "SECOND", Q[Q.MILLISECOND = 1] = "MILLISECOND", Q[Q.MICROSECOND = 2] = "MICROSECOND", Q[Q.NANOSECOND = 3] = "NANOSECOND";
})(G1 || (G1 = {}));
var OQ;
(function(Q) {
  Q[Q.YEAR_MONTH = 0] = "YEAR_MONTH", Q[Q.DAY_TIME = 1] = "DAY_TIME", Q[Q.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(OQ || (OQ = {}));
var R1;
(function(Q) {
  Q[Q.NONE = 0] = "NONE", Q[Q.Schema = 1] = "Schema", Q[Q.DictionaryBatch = 2] = "DictionaryBatch", Q[Q.RecordBatch = 3] = "RecordBatch", Q[Q.Tensor = 4] = "Tensor", Q[Q.SparseTensor = 5] = "SparseTensor";
})(R1 || (R1 = {}));
var S;
(function(Q) {
  Q[Q.NONE = 0] = "NONE", Q[Q.Null = 1] = "Null", Q[Q.Int = 2] = "Int", Q[Q.Float = 3] = "Float", Q[Q.Binary = 4] = "Binary", Q[Q.Utf8 = 5] = "Utf8", Q[Q.Bool = 6] = "Bool", Q[Q.Decimal = 7] = "Decimal", Q[Q.Date = 8] = "Date", Q[Q.Time = 9] = "Time", Q[Q.Timestamp = 10] = "Timestamp", Q[Q.Interval = 11] = "Interval", Q[Q.List = 12] = "List", Q[Q.Struct = 13] = "Struct", Q[Q.Union = 14] = "Union", Q[Q.FixedSizeBinary = 15] = "FixedSizeBinary", Q[Q.FixedSizeList = 16] = "FixedSizeList", Q[Q.Map = 17] = "Map", Q[Q.Dictionary = -1] = "Dictionary", Q[Q.Int8 = -2] = "Int8", Q[Q.Int16 = -3] = "Int16", Q[Q.Int32 = -4] = "Int32", Q[Q.Int64 = -5] = "Int64", Q[Q.Uint8 = -6] = "Uint8", Q[Q.Uint16 = -7] = "Uint16", Q[Q.Uint32 = -8] = "Uint32", Q[Q.Uint64 = -9] = "Uint64", Q[Q.Float16 = -10] = "Float16", Q[Q.Float32 = -11] = "Float32", Q[Q.Float64 = -12] = "Float64", Q[Q.DateDay = -13] = "DateDay", Q[Q.DateMillisecond = -14] = "DateMillisecond", Q[Q.TimestampSecond = -15] = "TimestampSecond", Q[Q.TimestampMillisecond = -16] = "TimestampMillisecond", Q[Q.TimestampMicrosecond = -17] = "TimestampMicrosecond", Q[Q.TimestampNanosecond = -18] = "TimestampNanosecond", Q[Q.TimeSecond = -19] = "TimeSecond", Q[Q.TimeMillisecond = -20] = "TimeMillisecond", Q[Q.TimeMicrosecond = -21] = "TimeMicrosecond", Q[Q.TimeNanosecond = -22] = "TimeNanosecond", Q[Q.DenseUnion = -23] = "DenseUnion", Q[Q.SparseUnion = -24] = "SparseUnion", Q[Q.IntervalDayTime = -25] = "IntervalDayTime", Q[Q.IntervalYearMonth = -26] = "IntervalYearMonth";
})(S || (S = {}));
var OX;
(function(Q) {
  Q[Q.OFFSET = 0] = "OFFSET", Q[Q.DATA = 1] = "DATA", Q[Q.VALIDITY = 2] = "VALIDITY", Q[Q.TYPE = 3] = "TYPE";
})(OX || (OX = {}));

// node_modules/apache-arrow/util/vector.mjs
var bN = {};
nY(bN, {
  createElementComparator: () => UJ,
  clampRange: () => DK,
  clampIndex: () => qh
});

// node_modules/apache-arrow/util/pretty.mjs
var Av = void 0;
function $Z(Q) {
  if (Q === null)
    return "null";
  if (Q === Av)
    return "undefined";
  switch (typeof Q) {
    case "number":
      return `${Q}`;
    case "bigint":
      return `${Q}`;
    case "string":
      return `"${Q}"`;
  }
  if (typeof Q[Symbol.toPrimitive] === "function")
    return Q[Symbol.toPrimitive]("string");
  if (ArrayBuffer.isView(Q)) {
    if (Q instanceof AX || Q instanceof UX)
      return `[${[...Q].map((J) => $Z(J))}]`;
    return `[${Q}]`;
  }
  return ArrayBuffer.isView(Q) ? `[${Q}]` : JSON.stringify(Q, (J, Y) => typeof Y === "bigint" ? `${Y}` : Y);
}

// node_modules/apache-arrow/util/bn.mjs
var ON = {};
nY(ON, {
  isArrowBigNumSymbol: () => nw,
  bignumToString: () => WJ,
  bignumToBigInt: () => _5,
  BN: () => wK
});
var nw = Symbol.for("isArrowBigNum");
function YZ(Q, ...J) {
  if (J.length === 0)
    return Object.setPrototypeOf(q1(this.TypedArray, Q), this.constructor.prototype);
  return Object.setPrototypeOf(new this.TypedArray(Q, ...J), this.constructor.prototype);
}
YZ.prototype[nw] = !0;
YZ.prototype.toJSON = function() {
  return `"${WJ(this)}"`;
};
YZ.prototype.valueOf = function() {
  return sw(this);
};
YZ.prototype.toString = function() {
  return WJ(this);
};
YZ.prototype[Symbol.toPrimitive] = function(Q = "default") {
  switch (Q) {
    case "number":
      return sw(this);
    case "string":
      return WJ(this);
    case "default":
      return _5(this);
  }
  return WJ(this);
};
function tY(...Q) {
  return YZ.apply(this, Q);
}
function eY(...Q) {
  return YZ.apply(this, Q);
}
function OK(...Q) {
  return YZ.apply(this, Q);
}
Object.setPrototypeOf(tY.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(eY.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(OK.prototype, Object.create(Uint32Array.prototype));
Object.assign(tY.prototype, YZ.prototype, { constructor: tY, signed: !0, TypedArray: Int32Array, BigIntArray: AX });
Object.assign(eY.prototype, YZ.prototype, { constructor: eY, signed: !1, TypedArray: Uint32Array, BigIntArray: UX });
Object.assign(OK.prototype, YZ.prototype, { constructor: OK, signed: !0, TypedArray: Uint32Array, BigIntArray: UX });
function sw(Q) {
  let { buffer: J, byteOffset: Y, length: W, signed: K } = Q, z = new UX(J, Y, W), N = K && z[z.length - 1] & BigInt(1) << BigInt(63), F = N ? BigInt(1) : BigInt(0), L = BigInt(0);
  if (!N)
    for (let w of z)
      F += w * (BigInt(1) << BigInt(32) * L++);
  else {
    for (let w of z)
      F += ~w * (BigInt(1) << BigInt(32) * L++);
    F *= BigInt(-1);
  }
  return F;
}
var WJ, _5;
if (!R5)
  WJ = LN, _5 = WJ;
else
  _5 = (Q) => Q.byteLength === 8 ? new Q.BigIntArray(Q.buffer, Q.byteOffset, 1)[0] : LN(Q), WJ = (Q) => Q.byteLength === 8 ? `${new Q.BigIntArray(Q.buffer, Q.byteOffset, 1)[0]}` : LN(Q);
function LN(Q) {
  let J = "", Y = new Uint32Array(2), W = new Uint16Array(Q.buffer, Q.byteOffset, Q.byteLength / 2), K = new Uint32Array((W = new Uint16Array(W).reverse()).buffer), z = -1, N = W.length - 1;
  do {
    for (Y[0] = W[z = 0];z < N; )
      W[z++] = Y[1] = Y[0] / 10, Y[0] = (Y[0] - Y[1] * 10 << 16) + W[z];
    W[z] = Y[1] = Y[0] / 10, Y[0] = Y[0] - Y[1] * 10, J = `${Y[0]}${J}`;
  } while (K[0] || K[1] || K[2] || K[3]);
  return J !== null && J !== void 0 ? J : "0";
}

class wK {
  static new(Q, J) {
    switch (J) {
      case !0:
        return new tY(Q);
      case !1:
        return new eY(Q);
    }
    switch (Q.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case AX:
        return new tY(Q);
    }
    if (Q.byteLength === 16)
      return new OK(Q);
    return new eY(Q);
  }
  static signed(Q) {
    return new tY(Q);
  }
  static unsigned(Q) {
    return new eY(Q);
  }
  static decimal(Q) {
    return new OK(Q);
  }
  constructor(Q, J) {
    return wK.new(Q, J);
  }
}

// node_modules/apache-arrow/type.mjs
var ow, aw, rw, iw, tw, ew, QM, XM, ZM, JM, $M, YM, qM, WM, KM, HM, GM, zM, NM;

class R0 {
  static isNull(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Null;
  }
  static isInt(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Int;
  }
  static isFloat(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Float;
  }
  static isBinary(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Binary;
  }
  static isUtf8(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Utf8;
  }
  static isBool(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Bool;
  }
  static isDecimal(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Decimal;
  }
  static isDate(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Date;
  }
  static isTime(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Time;
  }
  static isTimestamp(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Timestamp;
  }
  static isInterval(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Interval;
  }
  static isList(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.List;
  }
  static isStruct(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Struct;
  }
  static isUnion(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Union;
  }
  static isFixedSizeBinary(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.FixedSizeBinary;
  }
  static isFixedSizeList(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.FixedSizeList;
  }
  static isMap(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Map;
  }
  static isDictionary(Q) {
    return (Q === null || Q === void 0 ? void 0 : Q.typeId) === S.Dictionary;
  }
  static isDenseUnion(Q) {
    return R0.isUnion(Q) && Q.mode === O6.Dense;
  }
  static isSparseUnion(Q) {
    return R0.isUnion(Q) && Q.mode === O6.Sparse;
  }
  get typeId() {
    return S.NONE;
  }
}
ow = Symbol.toStringTag;
R0[ow] = ((Q) => {
  return Q.children = null, Q.ArrayType = Array, Q[Symbol.toStringTag] = "DataType";
})(R0.prototype);

class xQ extends R0 {
  toString() {
    return "Null";
  }
  get typeId() {
    return S.Null;
  }
}
aw = Symbol.toStringTag;
xQ[aw] = ((Q) => Q[Symbol.toStringTag] = "Null")(xQ.prototype);

class m6 extends R0 {
  constructor(Q, J) {
    super();
    this.isSigned = Q, this.bitWidth = J;
  }
  get typeId() {
    return S.Int;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 8:
        return this.isSigned ? Int8Array : Uint8Array;
      case 16:
        return this.isSigned ? Int16Array : Uint16Array;
      case 32:
        return this.isSigned ? Int32Array : Uint32Array;
      case 64:
        return this.isSigned ? AX : UX;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
  }
}
rw = Symbol.toStringTag;
m6[rw] = ((Q) => {
  return Q.isSigned = null, Q.bitWidth = null, Q[Symbol.toStringTag] = "Int";
})(m6.prototype);
class wN extends m6 {
  constructor() {
    super(!0, 8);
  }
  get ArrayType() {
    return Int8Array;
  }
}

class MN extends m6 {
  constructor() {
    super(!0, 16);
  }
  get ArrayType() {
    return Int16Array;
  }
}

class U4 extends m6 {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}

class DN extends m6 {
  constructor() {
    super(!0, 64);
  }
  get ArrayType() {
    return AX;
  }
}

class RN extends m6 {
  constructor() {
    super(!1, 8);
  }
  get ArrayType() {
    return Uint8Array;
  }
}

class kN extends m6 {
  constructor() {
    super(!1, 16);
  }
  get ArrayType() {
    return Uint16Array;
  }
}

class jN extends m6 {
  constructor() {
    super(!1, 32);
  }
  get ArrayType() {
    return Uint32Array;
  }
}

class BN extends m6 {
  constructor() {
    super(!1, 64);
  }
  get ArrayType() {
    return UX;
  }
}
Object.defineProperty(wN.prototype, "ArrayType", { value: Int8Array });
Object.defineProperty(MN.prototype, "ArrayType", { value: Int16Array });
Object.defineProperty(U4.prototype, "ArrayType", { value: Int32Array });
Object.defineProperty(DN.prototype, "ArrayType", { value: AX });
Object.defineProperty(RN.prototype, "ArrayType", { value: Uint8Array });
Object.defineProperty(kN.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(jN.prototype, "ArrayType", { value: Uint32Array });
Object.defineProperty(BN.prototype, "ArrayType", { value: UX });

class XX extends R0 {
  constructor(Q) {
    super();
    this.precision = Q;
  }
  get typeId() {
    return S.Float;
  }
  get ArrayType() {
    switch (this.precision) {
      case Z6.HALF:
        return Uint16Array;
      case Z6.SINGLE:
        return Float32Array;
      case Z6.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
iw = Symbol.toStringTag;
XX[iw] = ((Q) => {
  return Q.precision = null, Q[Symbol.toStringTag] = "Float";
})(XX.prototype);

class CN extends XX {
  constructor() {
    super(Z6.HALF);
  }
}

class VN extends XX {
  constructor() {
    super(Z6.SINGLE);
  }
}

class SN extends XX {
  constructor() {
    super(Z6.DOUBLE);
  }
}
Object.defineProperty(CN.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(VN.prototype, "ArrayType", { value: Float32Array });
Object.defineProperty(SN.prototype, "ArrayType", { value: Float64Array });

class KJ extends R0 {
  constructor() {
    super();
  }
  get typeId() {
    return S.Binary;
  }
  toString() {
    return "Binary";
  }
}
tw = Symbol.toStringTag;
KJ[tw] = ((Q) => {
  return Q.ArrayType = Uint8Array, Q[Symbol.toStringTag] = "Binary";
})(KJ.prototype);

class HJ extends R0 {
  constructor() {
    super();
  }
  get typeId() {
    return S.Utf8;
  }
  toString() {
    return "Utf8";
  }
}
ew = Symbol.toStringTag;
HJ[ew] = ((Q) => {
  return Q.ArrayType = Uint8Array, Q[Symbol.toStringTag] = "Utf8";
})(HJ.prototype);

class GJ extends R0 {
  constructor() {
    super();
  }
  get typeId() {
    return S.Bool;
  }
  toString() {
    return "Bool";
  }
}
QM = Symbol.toStringTag;
GJ[QM] = ((Q) => {
  return Q.ArrayType = Uint8Array, Q[Symbol.toStringTag] = "Bool";
})(GJ.prototype);

class zJ extends R0 {
  constructor(Q, J, Y = 128) {
    super();
    this.scale = Q, this.precision = J, this.bitWidth = Y;
  }
  get typeId() {
    return S.Decimal;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
}
XM = Symbol.toStringTag;
zJ[XM] = ((Q) => {
  return Q.scale = null, Q.precision = null, Q.ArrayType = Uint32Array, Q[Symbol.toStringTag] = "Decimal";
})(zJ.prototype);

class NJ extends R0 {
  constructor(Q) {
    super();
    this.unit = Q;
  }
  get typeId() {
    return S.Date;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${f8[this.unit]}>`;
  }
}
ZM = Symbol.toStringTag;
NJ[ZM] = ((Q) => {
  return Q.unit = null, Q.ArrayType = Int32Array, Q[Symbol.toStringTag] = "Date";
})(NJ.prototype);
class hZ extends R0 {
  constructor(Q, J) {
    super();
    this.unit = Q, this.bitWidth = J;
  }
  get typeId() {
    return S.Time;
  }
  toString() {
    return `Time${this.bitWidth}<${G1[this.unit]}>`;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 32:
        return Int32Array;
      case 64:
        return AX;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
}
JM = Symbol.toStringTag;
hZ[JM] = ((Q) => {
  return Q.unit = null, Q.bitWidth = null, Q[Symbol.toStringTag] = "Time";
})(hZ.prototype);
class EJ extends R0 {
  constructor(Q, J) {
    super();
    this.unit = Q, this.timezone = J;
  }
  get typeId() {
    return S.Timestamp;
  }
  toString() {
    return `Timestamp<${G1[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
$M = Symbol.toStringTag;
EJ[$M] = ((Q) => {
  return Q.unit = null, Q.timezone = null, Q.ArrayType = Int32Array, Q[Symbol.toStringTag] = "Timestamp";
})(EJ.prototype);
class FJ extends R0 {
  constructor(Q) {
    super();
    this.unit = Q;
  }
  get typeId() {
    return S.Interval;
  }
  toString() {
    return `Interval<${OQ[this.unit]}>`;
  }
}
YM = Symbol.toStringTag;
FJ[YM] = ((Q) => {
  return Q.unit = null, Q.ArrayType = Int32Array, Q[Symbol.toStringTag] = "Interval";
})(FJ.prototype);
class yZ extends R0 {
  constructor(Q) {
    super();
    this.children = [Q];
  }
  get typeId() {
    return S.List;
  }
  toString() {
    return `List<${this.valueType}>`;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
}
qM = Symbol.toStringTag;
yZ[qM] = ((Q) => {
  return Q.children = null, Q[Symbol.toStringTag] = "List";
})(yZ.prototype);

class J6 extends R0 {
  constructor(Q) {
    super();
    this.children = Q;
  }
  get typeId() {
    return S.Struct;
  }
  toString() {
    return `Struct<{${this.children.map((Q) => `${Q.name}:${Q.type}`).join(", ")}}>`;
  }
}
WM = Symbol.toStringTag;
J6[WM] = ((Q) => {
  return Q.children = null, Q[Symbol.toStringTag] = "Struct";
})(J6.prototype);

class fZ extends R0 {
  constructor(Q, J, Y) {
    super();
    this.mode = Q, this.children = Y, this.typeIds = J = Int32Array.from(J), this.typeIdToChildIndex = J.reduce((W, K, z) => (W[K] = z) && W || W, Object.create(null));
  }
  get typeId() {
    return S.Union;
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((Q) => `${Q.type}`).join(" | ")}>`;
  }
}
KM = Symbol.toStringTag;
fZ[KM] = ((Q) => {
  return Q.mode = null, Q.typeIds = null, Q.children = null, Q.typeIdToChildIndex = null, Q.ArrayType = Int8Array, Q[Symbol.toStringTag] = "Union";
})(fZ.prototype);
class PJ extends R0 {
  constructor(Q) {
    super();
    this.byteWidth = Q;
  }
  get typeId() {
    return S.FixedSizeBinary;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
HM = Symbol.toStringTag;
PJ[HM] = ((Q) => {
  return Q.byteWidth = null, Q.ArrayType = Uint8Array, Q[Symbol.toStringTag] = "FixedSizeBinary";
})(PJ.prototype);

class mZ extends R0 {
  constructor(Q, J) {
    super();
    this.listSize = Q, this.children = [J];
  }
  get typeId() {
    return S.FixedSizeList;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
  toString() {
    return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
  }
}
GM = Symbol.toStringTag;
mZ[GM] = ((Q) => {
  return Q.children = null, Q.listSize = null, Q[Symbol.toStringTag] = "FixedSizeList";
})(mZ.prototype);

class bZ extends R0 {
  constructor(Q, J = !1) {
    super();
    this.children = [Q], this.keysSorted = J;
  }
  get typeId() {
    return S.Map;
  }
  get keyType() {
    return this.children[0].type.children[0].type;
  }
  get valueType() {
    return this.children[0].type.children[1].type;
  }
  get childType() {
    return this.children[0].type;
  }
  toString() {
    return `Map<{${this.children[0].type.children.map((Q) => `${Q.name}:${Q.type}`).join(", ")}}>`;
  }
}
zM = Symbol.toStringTag;
bZ[zM] = ((Q) => {
  return Q.children = null, Q.keysSorted = null, Q[Symbol.toStringTag] = "Map_";
})(bZ.prototype);
var Uv = ((Q) => () => ++Q)(-1);

class wX extends R0 {
  constructor(Q, J, Y, W) {
    super();
    this.indices = J, this.dictionary = Q, this.isOrdered = W || !1, this.id = Y == null ? Uv() : typeof Y === "number" ? Y : Y.low;
  }
  get typeId() {
    return S.Dictionary;
  }
  get children() {
    return this.dictionary.children;
  }
  get valueType() {
    return this.dictionary;
  }
  get ArrayType() {
    return this.dictionary.ArrayType;
  }
  toString() {
    return `Dictionary<${this.indices}, ${this.dictionary}>`;
  }
}
NM = Symbol.toStringTag;
wX[NM] = ((Q) => {
  return Q.id = null, Q.indices = null, Q.isOrdered = null, Q.dictionary = null, Q[Symbol.toStringTag] = "Dictionary";
})(wX.prototype);
function ZX(Q) {
  let J = Q;
  switch (Q.typeId) {
    case S.Decimal:
      return Q.bitWidth / 32;
    case S.Timestamp:
      return 2;
    case S.Date:
      return 1 + J.unit;
    case S.Interval:
      return 1 + J.unit;
    case S.FixedSizeList:
      return J.listSize;
    case S.FixedSizeBinary:
      return J.byteWidth;
    default:
      return 1;
  }
}

// node_modules/apache-arrow/visitor.mjs
class T0 {
  visitMany(Q, ...J) {
    return Q.map((Y, W) => this.visit(Y, ...J.map((K) => K[W])));
  }
  visit(...Q) {
    return this.getVisitFn(Q[0], !1).apply(this, Q);
  }
  getVisitFn(Q, J = !0) {
    return Lv(this, Q, J);
  }
  getVisitFnByTypeId(Q, J = !0) {
    return Qq(this, Q, J);
  }
  visitNull(Q, ...J) {
    return null;
  }
  visitBool(Q, ...J) {
    return null;
  }
  visitInt(Q, ...J) {
    return null;
  }
  visitFloat(Q, ...J) {
    return null;
  }
  visitUtf8(Q, ...J) {
    return null;
  }
  visitBinary(Q, ...J) {
    return null;
  }
  visitFixedSizeBinary(Q, ...J) {
    return null;
  }
  visitDate(Q, ...J) {
    return null;
  }
  visitTimestamp(Q, ...J) {
    return null;
  }
  visitTime(Q, ...J) {
    return null;
  }
  visitDecimal(Q, ...J) {
    return null;
  }
  visitList(Q, ...J) {
    return null;
  }
  visitStruct(Q, ...J) {
    return null;
  }
  visitUnion(Q, ...J) {
    return null;
  }
  visitDictionary(Q, ...J) {
    return null;
  }
  visitInterval(Q, ...J) {
    return null;
  }
  visitFixedSizeList(Q, ...J) {
    return null;
  }
  visitMap(Q, ...J) {
    return null;
  }
}
function Lv(Q, J, Y = !0) {
  if (typeof J === "number")
    return Qq(Q, J, Y);
  if (typeof J === "string" && J in S)
    return Qq(Q, S[J], Y);
  if (J && J instanceof R0)
    return Qq(Q, EM(J), Y);
  if ((J === null || J === void 0 ? void 0 : J.type) && J.type instanceof R0)
    return Qq(Q, EM(J.type), Y);
  return Qq(Q, S.NONE, Y);
}
function Qq(Q, J, Y = !0) {
  let W = null;
  switch (J) {
    case S.Null:
      W = Q.visitNull;
      break;
    case S.Bool:
      W = Q.visitBool;
      break;
    case S.Int:
      W = Q.visitInt;
      break;
    case S.Int8:
      W = Q.visitInt8 || Q.visitInt;
      break;
    case S.Int16:
      W = Q.visitInt16 || Q.visitInt;
      break;
    case S.Int32:
      W = Q.visitInt32 || Q.visitInt;
      break;
    case S.Int64:
      W = Q.visitInt64 || Q.visitInt;
      break;
    case S.Uint8:
      W = Q.visitUint8 || Q.visitInt;
      break;
    case S.Uint16:
      W = Q.visitUint16 || Q.visitInt;
      break;
    case S.Uint32:
      W = Q.visitUint32 || Q.visitInt;
      break;
    case S.Uint64:
      W = Q.visitUint64 || Q.visitInt;
      break;
    case S.Float:
      W = Q.visitFloat;
      break;
    case S.Float16:
      W = Q.visitFloat16 || Q.visitFloat;
      break;
    case S.Float32:
      W = Q.visitFloat32 || Q.visitFloat;
      break;
    case S.Float64:
      W = Q.visitFloat64 || Q.visitFloat;
      break;
    case S.Utf8:
      W = Q.visitUtf8;
      break;
    case S.Binary:
      W = Q.visitBinary;
      break;
    case S.FixedSizeBinary:
      W = Q.visitFixedSizeBinary;
      break;
    case S.Date:
      W = Q.visitDate;
      break;
    case S.DateDay:
      W = Q.visitDateDay || Q.visitDate;
      break;
    case S.DateMillisecond:
      W = Q.visitDateMillisecond || Q.visitDate;
      break;
    case S.Timestamp:
      W = Q.visitTimestamp;
      break;
    case S.TimestampSecond:
      W = Q.visitTimestampSecond || Q.visitTimestamp;
      break;
    case S.TimestampMillisecond:
      W = Q.visitTimestampMillisecond || Q.visitTimestamp;
      break;
    case S.TimestampMicrosecond:
      W = Q.visitTimestampMicrosecond || Q.visitTimestamp;
      break;
    case S.TimestampNanosecond:
      W = Q.visitTimestampNanosecond || Q.visitTimestamp;
      break;
    case S.Time:
      W = Q.visitTime;
      break;
    case S.TimeSecond:
      W = Q.visitTimeSecond || Q.visitTime;
      break;
    case S.TimeMillisecond:
      W = Q.visitTimeMillisecond || Q.visitTime;
      break;
    case S.TimeMicrosecond:
      W = Q.visitTimeMicrosecond || Q.visitTime;
      break;
    case S.TimeNanosecond:
      W = Q.visitTimeNanosecond || Q.visitTime;
      break;
    case S.Decimal:
      W = Q.visitDecimal;
      break;
    case S.List:
      W = Q.visitList;
      break;
    case S.Struct:
      W = Q.visitStruct;
      break;
    case S.Union:
      W = Q.visitUnion;
      break;
    case S.DenseUnion:
      W = Q.visitDenseUnion || Q.visitUnion;
      break;
    case S.SparseUnion:
      W = Q.visitSparseUnion || Q.visitUnion;
      break;
    case S.Dictionary:
      W = Q.visitDictionary;
      break;
    case S.Interval:
      W = Q.visitInterval;
      break;
    case S.IntervalDayTime:
      W = Q.visitIntervalDayTime || Q.visitInterval;
      break;
    case S.IntervalYearMonth:
      W = Q.visitIntervalYearMonth || Q.visitInterval;
      break;
    case S.FixedSizeList:
      W = Q.visitFixedSizeList;
      break;
    case S.Map:
      W = Q.visitMap;
      break;
  }
  if (typeof W === "function")
    return W;
  if (!Y)
    return () => null;
  throw new Error(`Unrecognized type '${S[J]}'`);
}
function EM(Q) {
  switch (Q.typeId) {
    case S.Null:
      return S.Null;
    case S.Int: {
      let { bitWidth: J, isSigned: Y } = Q;
      switch (J) {
        case 8:
          return Y ? S.Int8 : S.Uint8;
        case 16:
          return Y ? S.Int16 : S.Uint16;
        case 32:
          return Y ? S.Int32 : S.Uint32;
        case 64:
          return Y ? S.Int64 : S.Uint64;
      }
      return S.Int;
    }
    case S.Float:
      switch (Q.precision) {
        case Z6.HALF:
          return S.Float16;
        case Z6.SINGLE:
          return S.Float32;
        case Z6.DOUBLE:
          return S.Float64;
      }
      return S.Float;
    case S.Binary:
      return S.Binary;
    case S.Utf8:
      return S.Utf8;
    case S.Bool:
      return S.Bool;
    case S.Decimal:
      return S.Decimal;
    case S.Time:
      switch (Q.unit) {
        case G1.SECOND:
          return S.TimeSecond;
        case G1.MILLISECOND:
          return S.TimeMillisecond;
        case G1.MICROSECOND:
          return S.TimeMicrosecond;
        case G1.NANOSECOND:
          return S.TimeNanosecond;
      }
      return S.Time;
    case S.Timestamp:
      switch (Q.unit) {
        case G1.SECOND:
          return S.TimestampSecond;
        case G1.MILLISECOND:
          return S.TimestampMillisecond;
        case G1.MICROSECOND:
          return S.TimestampMicrosecond;
        case G1.NANOSECOND:
          return S.TimestampNanosecond;
      }
      return S.Timestamp;
    case S.Date:
      switch (Q.unit) {
        case f8.DAY:
          return S.DateDay;
        case f8.MILLISECOND:
          return S.DateMillisecond;
      }
      return S.Date;
    case S.Interval:
      switch (Q.unit) {
        case OQ.DAY_TIME:
          return S.IntervalDayTime;
        case OQ.YEAR_MONTH:
          return S.IntervalYearMonth;
      }
      return S.Interval;
    case S.Map:
      return S.Map;
    case S.List:
      return S.List;
    case S.Struct:
      return S.Struct;
    case S.Union:
      switch (Q.mode) {
        case O6.Dense:
          return S.DenseUnion;
        case O6.Sparse:
          return S.SparseUnion;
      }
      return S.Union;
    case S.FixedSizeBinary:
      return S.FixedSizeBinary;
    case S.FixedSizeList:
      return S.FixedSizeList;
    case S.Dictionary:
      return S.Dictionary;
  }
  throw new Error(`Unrecognized type '${S[Q.typeId]}'`);
}
T0.prototype.visitInt8 = null;
T0.prototype.visitInt16 = null;
T0.prototype.visitInt32 = null;
T0.prototype.visitInt64 = null;
T0.prototype.visitUint8 = null;
T0.prototype.visitUint16 = null;
T0.prototype.visitUint32 = null;
T0.prototype.visitUint64 = null;
T0.prototype.visitFloat16 = null;
T0.prototype.visitFloat32 = null;
T0.prototype.visitFloat64 = null;
T0.prototype.visitDateDay = null;
T0.prototype.visitDateMillisecond = null;
T0.prototype.visitTimestampSecond = null;
T0.prototype.visitTimestampMillisecond = null;
T0.prototype.visitTimestampMicrosecond = null;
T0.prototype.visitTimestampNanosecond = null;
T0.prototype.visitTimeSecond = null;
T0.prototype.visitTimeMillisecond = null;
T0.prototype.visitTimeMicrosecond = null;
T0.prototype.visitTimeNanosecond = null;
T0.prototype.visitDenseUnion = null;
T0.prototype.visitSparseUnion = null;
T0.prototype.visitIntervalDayTime = null;
T0.prototype.visitIntervalYearMonth = null;

// node_modules/apache-arrow/util/math.mjs
var IN = {};
nY(IN, {
  uint16ToFloat64: () => T5,
  float64ToUint16: () => MK
});
var FM = new Float64Array(1), Xq = new Uint32Array(FM.buffer);
function T5(Q) {
  let J = (Q & 31744) >> 10, Y = (Q & 1023) / 1024, W = Math.pow(-1, (Q & 32768) >> 15);
  switch (J) {
    case 31:
      return W * (Y ? Number.NaN : 1 / 0);
    case 0:
      return W * (Y ? 0.00006103515625 * Y : 0);
  }
  return W * Math.pow(2, J - 15) * (1 + Y);
}
function MK(Q) {
  if (Q !== Q)
    return 32256;
  FM[0] = Q;
  let J = (Xq[1] & 2147483648) >> 16 & 65535, Y = Xq[1] & 2146435072, W = 0;
  if (Y >= 1089470464)
    if (Xq[0] > 0)
      Y = 31744;
    else
      Y = (Y & 2080374784) >> 16, W = (Xq[1] & 1048575) >> 10;
  else if (Y <= 1056964608)
    W = 1048576 + (Xq[1] & 1048575), W = 1048576 + (W << (Y >> 20) - 998) >> 21, Y = 0;
  else
    Y = Y - 1056964608 >> 10, W = (Xq[1] & 1048575) + 512 >> 10;
  return J | Y | W & 65535;
}

// node_modules/apache-arrow/visitor/set.mjs
class o0 extends T0 {
}
function X1(Q) {
  return (J, Y, W) => {
    if (J.setValid(Y, W != null))
      return Q(J, Y, W);
  };
}
var Ov = (Q, J, Y) => {
  Q[J] = Math.trunc(Y / 86400000);
}, _N = (Q, J, Y) => {
  Q[J] = Math.trunc(Y % 4294967296), Q[J + 1] = Math.trunc(Y / 4294967296);
}, wv = (Q, J, Y) => {
  Q[J] = Math.trunc(Y * 1000 % 4294967296), Q[J + 1] = Math.trunc(Y * 1000 / 4294967296);
}, Mv = (Q, J, Y) => {
  Q[J] = Math.trunc(Y * 1e6 % 4294967296), Q[J + 1] = Math.trunc(Y * 1e6 / 4294967296);
}, PM = (Q, J, Y, W) => {
  if (Y + 1 < J.length) {
    let { [Y]: K, [Y + 1]: z } = J;
    Q.set(W.subarray(0, z - K), K);
  }
}, Dv = ({ offset: Q, values: J }, Y, W) => {
  let K = Q + Y;
  W ? J[K >> 3] |= 1 << K % 8 : J[K >> 3] &= ~(1 << K % 8);
}, L4 = ({ values: Q }, J, Y) => {
  Q[J] = Y;
}, TN = ({ values: Q }, J, Y) => {
  Q[J] = Y;
}, AM = ({ values: Q }, J, Y) => {
  Q[J] = MK(Y);
}, Rv = (Q, J, Y) => {
  switch (Q.type.precision) {
    case Z6.HALF:
      return AM(Q, J, Y);
    case Z6.SINGLE:
    case Z6.DOUBLE:
      return TN(Q, J, Y);
  }
}, g5 = ({ values: Q }, J, Y) => {
  Ov(Q, J, Y.valueOf());
}, x5 = ({ values: Q }, J, Y) => {
  _N(Q, J * 2, Y.valueOf());
}, gN = ({ stride: Q, values: J }, Y, W) => {
  J.set(W.subarray(0, Q), Q * Y);
}, kv = ({ values: Q, valueOffsets: J }, Y, W) => PM(Q, J, Y, W), jv = ({ values: Q, valueOffsets: J }, Y, W) => {
  PM(Q, J, Y, qJ(W));
}, xN = (Q, J, Y) => {
  Q.type.unit === f8.DAY ? g5(Q, J, Y) : x5(Q, J, Y);
}, v5 = ({ values: Q }, J, Y) => _N(Q, J * 2, Y / 1000), h5 = ({ values: Q }, J, Y) => _N(Q, J * 2, Y), y5 = ({ values: Q }, J, Y) => wv(Q, J * 2, Y), f5 = ({ values: Q }, J, Y) => Mv(Q, J * 2, Y), vN = (Q, J, Y) => {
  switch (Q.type.unit) {
    case G1.SECOND:
      return v5(Q, J, Y);
    case G1.MILLISECOND:
      return h5(Q, J, Y);
    case G1.MICROSECOND:
      return y5(Q, J, Y);
    case G1.NANOSECOND:
      return f5(Q, J, Y);
  }
}, m5 = ({ values: Q }, J, Y) => {
  Q[J] = Y;
}, b5 = ({ values: Q }, J, Y) => {
  Q[J] = Y;
}, u5 = ({ values: Q }, J, Y) => {
  Q[J] = Y;
}, c5 = ({ values: Q }, J, Y) => {
  Q[J] = Y;
}, hN = (Q, J, Y) => {
  switch (Q.type.unit) {
    case G1.SECOND:
      return m5(Q, J, Y);
    case G1.MILLISECOND:
      return b5(Q, J, Y);
    case G1.MICROSECOND:
      return u5(Q, J, Y);
    case G1.NANOSECOND:
      return c5(Q, J, Y);
  }
}, yN = ({ values: Q, stride: J }, Y, W) => {
  Q.set(W.subarray(0, J), J * Y);
}, Bv = (Q, J, Y) => {
  let W = Q.children[0], K = Q.valueOffsets, z = m8.getVisitFn(W);
  if (Array.isArray(Y))
    for (let N = -1, F = K[J], L = K[J + 1];F < L; )
      z(W, F++, Y[++N]);
  else
    for (let N = -1, F = K[J], L = K[J + 1];F < L; )
      z(W, F++, Y.get(++N));
}, Cv = (Q, J, Y) => {
  let W = Q.children[0], { valueOffsets: K } = Q, z = m8.getVisitFn(W), { [J]: N, [J + 1]: F } = K, L = Y instanceof Map ? Y.entries() : Object.entries(Y);
  for (let w of L)
    if (z(W, N, w), ++N >= F)
      break;
}, Vv = (Q, J) => (Y, W, K, z) => W && Y(W, Q, J[z]), Sv = (Q, J) => (Y, W, K, z) => W && Y(W, Q, J.get(z)), Iv = (Q, J) => (Y, W, K, z) => W && Y(W, Q, J.get(K.name)), _v = (Q, J) => (Y, W, K, z) => W && Y(W, Q, J[K.name]), Tv = (Q, J, Y) => {
  let W = Q.type.children.map((z) => m8.getVisitFn(z.type)), K = Y instanceof Map ? Iv(J, Y) : Y instanceof t0 ? Sv(J, Y) : Array.isArray(Y) ? Vv(J, Y) : _v(J, Y);
  Q.type.children.forEach((z, N) => K(W[N], Q.children[N], z, N));
}, gv = (Q, J, Y) => {
  Q.type.mode === O6.Dense ? UM(Q, J, Y) : LM(Q, J, Y);
}, UM = (Q, J, Y) => {
  let W = Q.type.typeIdToChildIndex[Q.typeIds[J]], K = Q.children[W];
  m8.visit(K, Q.valueOffsets[J], Y);
}, LM = (Q, J, Y) => {
  let W = Q.type.typeIdToChildIndex[Q.typeIds[J]], K = Q.children[W];
  m8.visit(K, J, Y);
}, xv = (Q, J, Y) => {
  var W;
  (W = Q.dictionary) === null || W === void 0 || W.set(Q.values[J], Y);
}, fN = (Q, J, Y) => {
  Q.type.unit === OQ.DAY_TIME ? p5(Q, J, Y) : d5(Q, J, Y);
}, p5 = ({ values: Q }, J, Y) => {
  Q.set(Y.subarray(0, 2), 2 * J);
}, d5 = ({ values: Q }, J, Y) => {
  Q[J] = Y[0] * 12 + Y[1] % 12;
}, vv = (Q, J, Y) => {
  let { stride: W } = Q, K = Q.children[0], z = m8.getVisitFn(K);
  if (Array.isArray(Y))
    for (let N = -1, F = J * W;++N < W; )
      z(K, F + N, Y[N]);
  else
    for (let N = -1, F = J * W;++N < W; )
      z(K, F + N, Y.get(N));
};
o0.prototype.visitBool = X1(Dv);
o0.prototype.visitInt = X1(L4);
o0.prototype.visitInt8 = X1(L4);
o0.prototype.visitInt16 = X1(L4);
o0.prototype.visitInt32 = X1(L4);
o0.prototype.visitInt64 = X1(L4);
o0.prototype.visitUint8 = X1(L4);
o0.prototype.visitUint16 = X1(L4);
o0.prototype.visitUint32 = X1(L4);
o0.prototype.visitUint64 = X1(L4);
o0.prototype.visitFloat = X1(Rv);
o0.prototype.visitFloat16 = X1(AM);
o0.prototype.visitFloat32 = X1(TN);
o0.prototype.visitFloat64 = X1(TN);
o0.prototype.visitUtf8 = X1(jv);
o0.prototype.visitBinary = X1(kv);
o0.prototype.visitFixedSizeBinary = X1(gN);
o0.prototype.visitDate = X1(xN);
o0.prototype.visitDateDay = X1(g5);
o0.prototype.visitDateMillisecond = X1(x5);
o0.prototype.visitTimestamp = X1(vN);
o0.prototype.visitTimestampSecond = X1(v5);
o0.prototype.visitTimestampMillisecond = X1(h5);
o0.prototype.visitTimestampMicrosecond = X1(y5);
o0.prototype.visitTimestampNanosecond = X1(f5);
o0.prototype.visitTime = X1(hN);
o0.prototype.visitTimeSecond = X1(m5);
o0.prototype.visitTimeMillisecond = X1(b5);
o0.prototype.visitTimeMicrosecond = X1(u5);
o0.prototype.visitTimeNanosecond = X1(c5);
o0.prototype.visitDecimal = X1(yN);
o0.prototype.visitList = X1(Bv);
o0.prototype.visitStruct = X1(Tv);
o0.prototype.visitUnion = X1(gv);
o0.prototype.visitDenseUnion = X1(UM);
o0.prototype.visitSparseUnion = X1(LM);
o0.prototype.visitDictionary = X1(xv);
o0.prototype.visitInterval = X1(fN);
o0.prototype.visitIntervalDayTime = X1(p5);
o0.prototype.visitIntervalYearMonth = X1(d5);
o0.prototype.visitFixedSizeList = X1(vv);
o0.prototype.visitMap = X1(Cv);
var m8 = new o0;

// node_modules/apache-arrow/row/struct.mjs
var qZ = Symbol.for("parent"), Zq = Symbol.for("rowIndex");

class R$ {
  constructor(Q, J) {
    return this[qZ] = Q, this[Zq] = J, new Proxy(this, new wM);
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    let Q = this[Zq], J = this[qZ], Y = J.type.children, W = {};
    for (let K = -1, z = Y.length;++K < z; )
      W[Y[K].name] = b6.visit(J.children[K], Q);
    return W;
  }
  toString() {
    return `{${[...this].map(([Q, J]) => `${$Z(Q)}: ${$Z(J)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new OM(this[qZ], this[Zq]);
  }
}

class OM {
  constructor(Q, J) {
    this.childIndex = 0, this.children = Q.children, this.rowIndex = J, this.childFields = Q.type.children, this.numChildren = this.childFields.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let Q = this.childIndex;
    if (Q < this.numChildren)
      return this.childIndex = Q + 1, {
        done: !1,
        value: [
          this.childFields[Q].name,
          b6.visit(this.children[Q], this.rowIndex)
        ]
      };
    return { done: !0, value: null };
  }
}
Object.defineProperties(R$.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [qZ]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [Zq]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
});

class wM {
  isExtensible() {
    return !1;
  }
  deleteProperty() {
    return !1;
  }
  preventExtensions() {
    return !0;
  }
  ownKeys(Q) {
    return Q[qZ].type.children.map((J) => J.name);
  }
  has(Q, J) {
    return Q[qZ].type.children.findIndex((Y) => Y.name === J) !== -1;
  }
  getOwnPropertyDescriptor(Q, J) {
    if (Q[qZ].type.children.findIndex((Y) => Y.name === J) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
    return;
  }
  get(Q, J) {
    if (Reflect.has(Q, J))
      return Q[J];
    let Y = Q[qZ].type.children.findIndex((W) => W.name === J);
    if (Y !== -1) {
      let W = b6.visit(Q[qZ].children[Y], Q[Zq]);
      return Reflect.set(Q, J, W), W;
    }
  }
  set(Q, J, Y) {
    let W = Q[qZ].type.children.findIndex((K) => K.name === J);
    if (W !== -1)
      return m8.visit(Q[qZ].children[W], Q[Zq], Y), Reflect.set(Q, J, Y);
    else if (Reflect.has(Q, J) || typeof J === "symbol")
      return Reflect.set(Q, J, Y);
    return !1;
  }
}

// node_modules/apache-arrow/visitor/get.mjs
class p0 extends T0 {
}
function e0(Q) {
  return (J, Y) => J.getValid(Y) ? Q(J, Y) : null;
}
var hv = (Q, J) => 86400000 * Q[J], mN = (Q, J) => 4294967296 * Q[J + 1] + (Q[J] >>> 0), yv = (Q, J) => 4294967296 * (Q[J + 1] / 1000) + (Q[J] >>> 0) / 1000, fv = (Q, J) => 4294967296 * (Q[J + 1] / 1e6) + (Q[J] >>> 0) / 1e6, MM = (Q) => new Date(Q), mv = (Q, J) => MM(hv(Q, J)), bv = (Q, J) => MM(mN(Q, J)), uv = (Q, J) => null, DM = (Q, J, Y) => {
  if (Y + 1 >= J.length)
    return null;
  let W = J[Y], K = J[Y + 1];
  return Q.subarray(W, K);
}, cv = ({ offset: Q, values: J }, Y) => {
  let W = Q + Y;
  return (J[W >> 3] & 1 << W % 8) !== 0;
}, RM = ({ values: Q }, J) => mv(Q, J), kM = ({ values: Q }, J) => bv(Q, J * 2), AJ = ({ stride: Q, values: J }, Y) => J[Q * Y], pv = ({ stride: Q, values: J }, Y) => T5(J[Q * Y]), jM = ({ values: Q }, J) => Q[J], dv = ({ stride: Q, values: J }, Y) => J.subarray(Q * Y, Q * (Y + 1)), lv = ({ values: Q, valueOffsets: J }, Y) => DM(Q, J, Y), nv = ({ values: Q, valueOffsets: J }, Y) => {
  let W = DM(Q, J, Y);
  return W !== null ? AK(W) : null;
}, sv = ({ values: Q }, J) => Q[J], ov = ({ type: Q, values: J }, Y) => Q.precision !== Z6.HALF ? J[Y] : T5(J[Y]), av = (Q, J) => Q.type.unit === f8.DAY ? RM(Q, J) : kM(Q, J), BM = ({ values: Q }, J) => 1000 * mN(Q, J * 2), CM = ({ values: Q }, J) => mN(Q, J * 2), VM = ({ values: Q }, J) => yv(Q, J * 2), SM = ({ values: Q }, J) => fv(Q, J * 2), rv = (Q, J) => {
  switch (Q.type.unit) {
    case G1.SECOND:
      return BM(Q, J);
    case G1.MILLISECOND:
      return CM(Q, J);
    case G1.MICROSECOND:
      return VM(Q, J);
    case G1.NANOSECOND:
      return SM(Q, J);
  }
}, IM = ({ values: Q }, J) => Q[J], _M = ({ values: Q }, J) => Q[J], TM = ({ values: Q }, J) => Q[J], gM = ({ values: Q }, J) => Q[J], iv = (Q, J) => {
  switch (Q.type.unit) {
    case G1.SECOND:
      return IM(Q, J);
    case G1.MILLISECOND:
      return _M(Q, J);
    case G1.MICROSECOND:
      return TM(Q, J);
    case G1.NANOSECOND:
      return gM(Q, J);
  }
}, tv = ({ values: Q, stride: J }, Y) => wK.decimal(Q.subarray(J * Y, J * (Y + 1))), ev = (Q, J) => {
  let { valueOffsets: Y, stride: W, children: K } = Q, { [J * W]: z, [J * W + 1]: N } = Y, L = K[0].slice(z, N - z);
  return new t0([L]);
}, Qh = (Q, J) => {
  let { valueOffsets: Y, children: W } = Q, { [J]: K, [J + 1]: z } = Y, N = W[0];
  return new O4(N.slice(K, z - K));
}, Xh = (Q, J) => {
  return new R$(Q, J);
}, Zh = (Q, J) => {
  return Q.type.mode === O6.Dense ? xM(Q, J) : vM(Q, J);
}, xM = (Q, J) => {
  let Y = Q.type.typeIdToChildIndex[Q.typeIds[J]], W = Q.children[Y];
  return b6.visit(W, Q.valueOffsets[J]);
}, vM = (Q, J) => {
  let Y = Q.type.typeIdToChildIndex[Q.typeIds[J]], W = Q.children[Y];
  return b6.visit(W, J);
}, Jh = (Q, J) => {
  var Y;
  return (Y = Q.dictionary) === null || Y === void 0 ? void 0 : Y.get(Q.values[J]);
}, $h = (Q, J) => Q.type.unit === OQ.DAY_TIME ? hM(Q, J) : yM(Q, J), hM = ({ values: Q }, J) => Q.subarray(2 * J, 2 * (J + 1)), yM = ({ values: Q }, J) => {
  let Y = Q[J], W = new Int32Array(2);
  return W[0] = Math.trunc(Y / 12), W[1] = Math.trunc(Y % 12), W;
}, Yh = (Q, J) => {
  let { stride: Y, children: W } = Q, z = W[0].slice(J * Y, Y);
  return new t0([z]);
};
p0.prototype.visitNull = e0(uv);
p0.prototype.visitBool = e0(cv);
p0.prototype.visitInt = e0(sv);
p0.prototype.visitInt8 = e0(AJ);
p0.prototype.visitInt16 = e0(AJ);
p0.prototype.visitInt32 = e0(AJ);
p0.prototype.visitInt64 = e0(jM);
p0.prototype.visitUint8 = e0(AJ);
p0.prototype.visitUint16 = e0(AJ);
p0.prototype.visitUint32 = e0(AJ);
p0.prototype.visitUint64 = e0(jM);
p0.prototype.visitFloat = e0(ov);
p0.prototype.visitFloat16 = e0(pv);
p0.prototype.visitFloat32 = e0(AJ);
p0.prototype.visitFloat64 = e0(AJ);
p0.prototype.visitUtf8 = e0(nv);
p0.prototype.visitBinary = e0(lv);
p0.prototype.visitFixedSizeBinary = e0(dv);
p0.prototype.visitDate = e0(av);
p0.prototype.visitDateDay = e0(RM);
p0.prototype.visitDateMillisecond = e0(kM);
p0.prototype.visitTimestamp = e0(rv);
p0.prototype.visitTimestampSecond = e0(BM);
p0.prototype.visitTimestampMillisecond = e0(CM);
p0.prototype.visitTimestampMicrosecond = e0(VM);
p0.prototype.visitTimestampNanosecond = e0(SM);
p0.prototype.visitTime = e0(iv);
p0.prototype.visitTimeSecond = e0(IM);
p0.prototype.visitTimeMillisecond = e0(_M);
p0.prototype.visitTimeMicrosecond = e0(TM);
p0.prototype.visitTimeNanosecond = e0(gM);
p0.prototype.visitDecimal = e0(tv);
p0.prototype.visitList = e0(ev);
p0.prototype.visitStruct = e0(Xh);
p0.prototype.visitUnion = e0(Zh);
p0.prototype.visitDenseUnion = e0(xM);
p0.prototype.visitSparseUnion = e0(vM);
p0.prototype.visitDictionary = e0(Jh);
p0.prototype.visitInterval = e0($h);
p0.prototype.visitIntervalDayTime = e0(hM);
p0.prototype.visitIntervalYearMonth = e0(yM);
p0.prototype.visitFixedSizeList = e0(Yh);
p0.prototype.visitMap = e0(Qh);
var b6 = new p0;

// node_modules/apache-arrow/row/map.mjs
var MX = Symbol.for("keys"), Jq = Symbol.for("vals");

class O4 {
  constructor(Q) {
    return this[MX] = new t0([Q.children[0]]).memoize(), this[Jq] = Q.children[1], new Proxy(this, new mM);
  }
  [Symbol.iterator]() {
    return new fM(this[MX], this[Jq]);
  }
  get size() {
    return this[MX].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    let Q = this[MX], J = this[Jq], Y = {};
    for (let W = -1, K = Q.length;++W < K; )
      Y[Q.get(W)] = b6.visit(J, W);
    return Y;
  }
  toString() {
    return `{${[...this].map(([Q, J]) => `${$Z(Q)}: ${$Z(J)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}

class fM {
  constructor(Q, J) {
    this.keys = Q, this.vals = J, this.keyIndex = 0, this.numKeys = Q.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let Q = this.keyIndex;
    if (Q === this.numKeys)
      return { done: !0, value: null };
    return this.keyIndex++, {
      done: !1,
      value: [
        this.keys.get(Q),
        b6.visit(this.vals, Q)
      ]
    };
  }
}

class mM {
  isExtensible() {
    return !1;
  }
  deleteProperty() {
    return !1;
  }
  preventExtensions() {
    return !0;
  }
  ownKeys(Q) {
    return Q[MX].toArray().map(String);
  }
  has(Q, J) {
    return Q[MX].includes(J);
  }
  getOwnPropertyDescriptor(Q, J) {
    if (Q[MX].indexOf(J) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
    return;
  }
  get(Q, J) {
    if (Reflect.has(Q, J))
      return Q[J];
    let Y = Q[MX].indexOf(J);
    if (Y !== -1) {
      let W = b6.visit(Reflect.get(Q, Jq), Y);
      return Reflect.set(Q, J, W), W;
    }
  }
  set(Q, J, Y) {
    let W = Q[MX].indexOf(J);
    if (W !== -1)
      return m8.visit(Reflect.get(Q, Jq), W, Y), Reflect.set(Q, J, Y);
    else if (Reflect.has(Q, J))
      return Reflect.set(Q, J, Y);
    return !1;
  }
}
Object.defineProperties(O4.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [MX]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [Jq]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});

// node_modules/apache-arrow/util/vector.mjs
function qh(Q, J, Y) {
  let W = Q.length, K = J > -1 ? J : W + J % W;
  return Y ? Y(Q, K) : K;
}
var bM;
function DK(Q, J, Y, W) {
  let { length: K = 0 } = Q, z = typeof J !== "number" ? 0 : J, N = typeof Y !== "number" ? K : Y;
  return z < 0 && (z = (z % K + K) % K), N < 0 && (N = (N % K + K) % K), N < z && (bM = z, z = N, N = bM), N > K && (N = K), W ? W(Q, z, N) : [z, N];
}
var uM = (Q) => Q !== Q;
function UJ(Q) {
  if (typeof Q !== "object" || Q === null) {
    if (uM(Q))
      return uM;
    return (Y) => Y === Q;
  }
  if (Q instanceof Date) {
    let Y = Q.valueOf();
    return (W) => W instanceof Date ? W.valueOf() === Y : !1;
  }
  if (ArrayBuffer.isView(Q))
    return (Y) => Y ? PN(Q, Y) : !1;
  if (Q instanceof Map)
    return Kh(Q);
  if (Array.isArray(Q))
    return Wh(Q);
  if (Q instanceof t0)
    return Hh(Q);
  return Gh(Q, !0);
}
function Wh(Q) {
  let J = [];
  for (let Y = -1, W = Q.length;++Y < W; )
    J[Y] = UJ(Q[Y]);
  return l5(J);
}
function Kh(Q) {
  let J = -1, Y = [];
  for (let W of Q.values())
    Y[++J] = UJ(W);
  return l5(Y);
}
function Hh(Q) {
  let J = [];
  for (let Y = -1, W = Q.length;++Y < W; )
    J[Y] = UJ(Q.get(Y));
  return l5(J);
}
function Gh(Q, J = !1) {
  let Y = Object.keys(Q);
  if (!J && Y.length === 0)
    return () => !1;
  let W = [];
  for (let K = -1, z = Y.length;++K < z; )
    W[K] = UJ(Q[Y[K]]);
  return l5(W, Y);
}
function l5(Q, J) {
  return (Y) => {
    if (!Y || typeof Y !== "object")
      return !1;
    switch (Y.constructor) {
      case Array:
        return zh(Q, Y);
      case Map:
        return cM(Q, Y, Y.keys());
      case O4:
      case R$:
      case Object:
      case void 0:
        return cM(Q, Y, J || Object.keys(Y));
    }
    return Y instanceof t0 ? Nh(Q, Y) : !1;
  };
}
function zh(Q, J) {
  let Y = Q.length;
  if (J.length !== Y)
    return !1;
  for (let W = -1;++W < Y; )
    if (!Q[W](J[W]))
      return !1;
  return !0;
}
function Nh(Q, J) {
  let Y = Q.length;
  if (J.length !== Y)
    return !1;
  for (let W = -1;++W < Y; )
    if (!Q[W](J.get(W)))
      return !1;
  return !0;
}
function cM(Q, J, Y) {
  let W = Y[Symbol.iterator](), K = J instanceof Map ? J.keys() : Object.keys(J)[Symbol.iterator](), z = J instanceof Map ? J.values() : Object.values(J)[Symbol.iterator](), N = 0, F = Q.length, L = z.next(), w = W.next(), D = K.next();
  for (;N < F && !w.done && !D.done && !L.done; ++N, w = W.next(), D = K.next(), L = z.next())
    if (w.value !== D.value || !Q[N](L.value))
      break;
  if (N === F && w.done && D.done && L.done)
    return !0;
  return W.return && W.return(), K.return && K.return(), z.return && z.return(), !1;
}

// node_modules/apache-arrow/util/bit.mjs
var uN = {};
nY(uN, {
  truncateBitmap: () => $q,
  setBool: () => Eh,
  popcnt_uint32: () => n5,
  popcnt_bit_range: () => RK,
  popcnt_array: () => dM,
  packBools: () => k$,
  getBool: () => s5,
  getBit: () => pM,
  BitIterator: () => Yq
});
function s5(Q, J, Y, W) {
  return (Y & 1 << W) !== 0;
}
function pM(Q, J, Y, W) {
  return (Y & 1 << W) >> W;
}
function Eh(Q, J, Y) {
  return Y ? !!(Q[J >> 3] |= 1 << J % 8) || !0 : !(Q[J >> 3] &= ~(1 << J % 8)) && !1;
}
function $q(Q, J, Y) {
  let W = Y.byteLength + 7 & -8;
  if (Q > 0 || Y.byteLength < W) {
    let K = new Uint8Array(W);
    return K.set(Q % 8 === 0 ? Y.subarray(Q >> 3) : k$(new Yq(Y, Q, J, null, s5)).subarray(0, W)), K;
  }
  return Y;
}
function k$(Q) {
  let J = [], Y = 0, W = 0, K = 0;
  for (let N of Q)
    if (N && (K |= 1 << W), ++W === 8)
      J[Y++] = K, K = W = 0;
  if (Y === 0 || W > 0)
    J[Y++] = K;
  let z = new Uint8Array(J.length + 7 & -8);
  return z.set(J), z;
}

class Yq {
  constructor(Q, J, Y, W, K) {
    this.bytes = Q, this.length = Y, this.context = W, this.get = K, this.bit = J % 8, this.byteIndex = J >> 3, this.byte = Q[this.byteIndex++], this.index = 0;
  }
  next() {
    if (this.index < this.length) {
      if (this.bit === 8)
        this.bit = 0, this.byte = this.bytes[this.byteIndex++];
      return {
        value: this.get(this.context, this.index++, this.byte, this.bit++)
      };
    }
    return { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function RK(Q, J, Y) {
  if (Y - J <= 0)
    return 0;
  if (Y - J < 8) {
    let z = 0;
    for (let N of new Yq(Q, J, Y - J, Q, pM))
      z += N;
    return z;
  }
  let W = Y >> 3 << 3, K = J + (J % 8 === 0 ? 0 : 8 - J % 8);
  return RK(Q, J, K) + RK(Q, W, Y) + dM(Q, K >> 3, W - K >> 3);
}
function dM(Q, J, Y) {
  let W = 0, K = Math.trunc(J), z = new DataView(Q.buffer, Q.byteOffset, Q.byteLength), N = Y === void 0 ? Q.byteLength : K + Y;
  while (N - K >= 4)
    W += n5(z.getUint32(K)), K += 4;
  while (N - K >= 2)
    W += n5(z.getUint16(K)), K += 2;
  while (N - K >= 1)
    W += n5(z.getUint8(K)), K += 1;
  return W;
}
function n5(Q) {
  let J = Math.trunc(Q);
  return J = J - (J >>> 1 & 1431655765), J = (J & 858993459) + (J >>> 2 & 858993459), (J + (J >>> 4) & 252645135) * 16843009 >>> 24;
}

// node_modules/apache-arrow/data.mjs
var Fh = -1;

class b1 {
  constructor(Q, J, Y, W, K, z = [], N) {
    this.type = Q, this.children = z, this.dictionary = N, this.offset = Math.floor(Math.max(J || 0, 0)), this.length = Math.floor(Math.max(Y || 0, 0)), this._nullCount = Math.floor(Math.max(W || 0, -1));
    let F;
    if (K instanceof b1)
      this.stride = K.stride, this.values = K.values, this.typeIds = K.typeIds, this.nullBitmap = K.nullBitmap, this.valueOffsets = K.valueOffsets;
    else if (this.stride = ZX(Q), K)
      (F = K[0]) && (this.valueOffsets = F), (F = K[1]) && (this.values = F), (F = K[2]) && (this.nullBitmap = F), (F = K[3]) && (this.typeIds = F);
    this.nullable = this._nullCount !== 0 && this.nullBitmap && this.nullBitmap.byteLength > 0;
  }
  get typeId() {
    return this.type.typeId;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get buffers() {
    return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
  }
  get byteLength() {
    let Q = 0, { valueOffsets: J, values: Y, nullBitmap: W, typeIds: K } = this;
    return J && (Q += J.byteLength), Y && (Q += Y.byteLength), W && (Q += W.byteLength), K && (Q += K.byteLength), this.children.reduce((z, N) => z + N.byteLength, Q);
  }
  get nullCount() {
    let Q = this._nullCount, J;
    if (Q <= Fh && (J = this.nullBitmap))
      this._nullCount = Q = this.length - RK(J, this.offset, this.offset + this.length);
    return Q;
  }
  getValid(Q) {
    if (this.nullable && this.nullCount > 0) {
      let J = this.offset + Q;
      return (this.nullBitmap[J >> 3] & 1 << J % 8) !== 0;
    }
    return !0;
  }
  setValid(Q, J) {
    if (!this.nullable)
      return J;
    if (!this.nullBitmap || this.nullBitmap.byteLength <= Q >> 3) {
      let { nullBitmap: F } = this._changeLengthAndBackfillNullBitmap(this.length);
      Object.assign(this, { nullBitmap: F, _nullCount: 0 });
    }
    let { nullBitmap: Y, offset: W } = this, K = W + Q >> 3, z = (W + Q) % 8, N = Y[K] >> z & 1;
    return J ? N === 0 && (Y[K] |= 1 << z, this._nullCount = this.nullCount + 1) : N === 1 && (Y[K] &= ~(1 << z), this._nullCount = this.nullCount - 1), J;
  }
  clone(Q = this.type, J = this.offset, Y = this.length, W = this._nullCount, K = this, z = this.children) {
    return new b1(Q, J, Y, W, K, z, this.dictionary);
  }
  slice(Q, J) {
    let { stride: Y, typeId: W, children: K } = this, z = +(this._nullCount === 0) - 1, N = W === 16 ? Y : 1, F = this._sliceBuffers(Q, J, Y, W);
    return this.clone(this.type, this.offset + Q, J, z, F, K.length === 0 || this.valueOffsets ? K : this._sliceChildren(K, N * Q, N * J));
  }
  _changeLengthAndBackfillNullBitmap(Q) {
    if (this.typeId === S.Null)
      return this.clone(this.type, 0, Q, 0);
    let { length: J, nullCount: Y } = this, W = new Uint8Array((Q + 63 & -64) >> 3).fill(255, 0, J >> 3);
    if (W[J >> 3] = (1 << J - (J & -8)) - 1, Y > 0)
      W.set($q(this.offset, J, this.nullBitmap), 0);
    let K = this.buffers;
    return K[OX.VALIDITY] = W, this.clone(this.type, 0, Q, Y + (Q - J), K);
  }
  _sliceBuffers(Q, J, Y, W) {
    let K, { buffers: z } = this;
    return (K = z[OX.TYPE]) && (z[OX.TYPE] = K.subarray(Q, Q + J)), (K = z[OX.OFFSET]) && (z[OX.OFFSET] = K.subarray(Q, Q + J + 1)) || (K = z[OX.DATA]) && (z[OX.DATA] = W === 6 ? K : K.subarray(Y * Q, Y * (Q + J))), z;
  }
  _sliceChildren(Q, J, Y) {
    return Q.map((W) => W.slice(J, Y));
  }
}
b1.prototype.children = Object.freeze([]);

class kK extends T0 {
  visit(Q) {
    return this.getVisitFn(Q.type).call(this, Q);
  }
  visitNull(Q) {
    let { ["type"]: J, ["offset"]: Y = 0, ["length"]: W = 0 } = Q;
    return new b1(J, Y, W, 0);
  }
  visitBool(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.nullBitmap), K = q1(J.ArrayType, Q.data), { ["length"]: z = K.length >> 3, ["nullCount"]: N = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, z, N, [void 0, K, W]);
  }
  visitInt(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.nullBitmap), K = q1(J.ArrayType, Q.data), { ["length"]: z = K.length, ["nullCount"]: N = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, z, N, [void 0, K, W]);
  }
  visitFloat(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.nullBitmap), K = q1(J.ArrayType, Q.data), { ["length"]: z = K.length, ["nullCount"]: N = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, z, N, [void 0, K, W]);
  }
  visitUtf8(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.data), K = c0(Q.nullBitmap), z = D$(Q.valueOffsets), { ["length"]: N = z.length - 1, ["nullCount"]: F = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, N, F, [z, W, K]);
  }
  visitBinary(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.data), K = c0(Q.nullBitmap), z = D$(Q.valueOffsets), { ["length"]: N = z.length - 1, ["nullCount"]: F = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, N, F, [z, W, K]);
  }
  visitFixedSizeBinary(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.nullBitmap), K = q1(J.ArrayType, Q.data), { ["length"]: z = K.length / ZX(J), ["nullCount"]: N = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, z, N, [void 0, K, W]);
  }
  visitDate(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.nullBitmap), K = q1(J.ArrayType, Q.data), { ["length"]: z = K.length / ZX(J), ["nullCount"]: N = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, z, N, [void 0, K, W]);
  }
  visitTimestamp(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.nullBitmap), K = q1(J.ArrayType, Q.data), { ["length"]: z = K.length / ZX(J), ["nullCount"]: N = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, z, N, [void 0, K, W]);
  }
  visitTime(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.nullBitmap), K = q1(J.ArrayType, Q.data), { ["length"]: z = K.length / ZX(J), ["nullCount"]: N = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, z, N, [void 0, K, W]);
  }
  visitDecimal(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.nullBitmap), K = q1(J.ArrayType, Q.data), { ["length"]: z = K.length / ZX(J), ["nullCount"]: N = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, z, N, [void 0, K, W]);
  }
  visitList(Q) {
    let { ["type"]: J, ["offset"]: Y = 0, ["child"]: W } = Q, K = c0(Q.nullBitmap), z = D$(Q.valueOffsets), { ["length"]: N = z.length - 1, ["nullCount"]: F = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, N, F, [z, void 0, K], [W]);
  }
  visitStruct(Q) {
    let { ["type"]: J, ["offset"]: Y = 0, ["children"]: W = [] } = Q, K = c0(Q.nullBitmap), { length: z = W.reduce((F, { length: L }) => Math.max(F, L), 0), nullCount: N = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, z, N, [void 0, void 0, K], W);
  }
  visitUnion(Q) {
    let { ["type"]: J, ["offset"]: Y = 0, ["children"]: W = [] } = Q, K = c0(Q.nullBitmap), z = q1(J.ArrayType, Q.typeIds), { ["length"]: N = z.length, ["nullCount"]: F = Q.nullBitmap ? -1 : 0 } = Q;
    if (R0.isSparseUnion(J))
      return new b1(J, Y, N, F, [void 0, void 0, K, z], W);
    let L = D$(Q.valueOffsets);
    return new b1(J, Y, N, F, [L, void 0, K, z], W);
  }
  visitDictionary(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.nullBitmap), K = q1(J.indices.ArrayType, Q.data), { ["dictionary"]: z = new t0([new kK().visit({ type: J.dictionary })]) } = Q, { ["length"]: N = K.length, ["nullCount"]: F = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, N, F, [void 0, K, W], [], z);
  }
  visitInterval(Q) {
    let { ["type"]: J, ["offset"]: Y = 0 } = Q, W = c0(Q.nullBitmap), K = q1(J.ArrayType, Q.data), { ["length"]: z = K.length / ZX(J), ["nullCount"]: N = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, z, N, [void 0, K, W]);
  }
  visitFixedSizeList(Q) {
    let { ["type"]: J, ["offset"]: Y = 0, ["child"]: W = new kK().visit({ type: J.valueType }) } = Q, K = c0(Q.nullBitmap), { ["length"]: z = W.length / ZX(J), ["nullCount"]: N = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, z, N, [void 0, void 0, K], [W]);
  }
  visitMap(Q) {
    let { ["type"]: J, ["offset"]: Y = 0, ["child"]: W = new kK().visit({ type: J.childType }) } = Q, K = c0(Q.nullBitmap), z = D$(Q.valueOffsets), { ["length"]: N = z.length - 1, ["nullCount"]: F = Q.nullBitmap ? -1 : 0 } = Q;
    return new b1(J, Y, N, F, [z, void 0, K], [W]);
  }
}
function a0(Q) {
  return new kK().visit(Q);
}

// node_modules/apache-arrow/util/chunk.mjs
class o5 {
  constructor(Q = 0, J) {
    this.numChunks = Q, this.getChunkIterator = J, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
  }
  next() {
    while (this.chunkIndex < this.numChunks) {
      let Q = this.chunkIterator.next();
      if (!Q.done)
        return Q;
      if (++this.chunkIndex < this.numChunks)
        this.chunkIterator = this.getChunkIterator(this.chunkIndex);
    }
    return { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function a5(Q) {
  return Q.reduce((J, Y) => J + Y.nullCount, 0);
}
function r5(Q) {
  return Q.reduce((J, Y, W) => {
    return J[W + 1] = J[W] + Y.length, J;
  }, new Uint32Array(Q.length + 1));
}
function i5(Q, J, Y, W) {
  let K = [];
  for (let z = -1, N = Q.length;++z < N; ) {
    let F = Q[z], L = J[z], { length: w } = F;
    if (L >= W)
      break;
    if (Y >= L + w)
      continue;
    if (L >= Y && L + w <= W) {
      K.push(F);
      continue;
    }
    let D = Math.max(0, Y - L), k = Math.min(W - L, w);
    K.push(F.slice(D, k - D));
  }
  if (K.length === 0)
    K.push(Q[0].slice(0, 0));
  return K;
}
function cN(Q, J, Y, W) {
  let K = 0, z = 0, N = J.length - 1;
  do {
    if (K >= N - 1)
      return Y < J[N] ? W(Q, K, Y - J[K]) : null;
    z = K + Math.trunc((N - K) * 0.5), Y < J[z] ? N = z : K = z;
  } while (K < N);
}
function jK(Q, J) {
  return Q.getValid(J);
}
function LJ(Q) {
  function J(Y, W, K) {
    return Q(Y[W], K);
  }
  return function(Y) {
    let W = this.data;
    return cN(W, this._offsets, Y, J);
  };
}
function t5(Q) {
  let J;
  function Y(W, K, z) {
    return Q(W[K], z, J);
  }
  return function(W, K) {
    let z = this.data;
    J = K;
    let N = cN(z, this._offsets, W, Y);
    return J = void 0, N;
  };
}
function e5(Q) {
  let J;
  function Y(W, K, z) {
    let N = z, F = 0, L = 0;
    for (let w = K - 1, D = W.length;++w < D; ) {
      let k = W[w];
      if (~(F = Q(k, J, N)))
        return L + F;
      N = 0, L += k.length;
    }
    return -1;
  }
  return function(W, K) {
    J = W;
    let z = this.data, N = typeof K !== "number" ? Y(z, 0, 0) : cN(z, this._offsets, K, Y);
    return J = void 0, N;
  };
}

// node_modules/apache-arrow/visitor/indexof.mjs
class d0 extends T0 {
}
function Ph(Q, J) {
  return J === null && Q.length > 0 ? 0 : -1;
}
function Ah(Q, J) {
  let { nullBitmap: Y } = Q;
  if (!Y || Q.nullCount <= 0)
    return -1;
  let W = 0;
  for (let K of new Yq(Y, Q.offset + (J || 0), Q.length, Y, s5)) {
    if (!K)
      return W;
    ++W;
  }
  return -1;
}
function W1(Q, J, Y) {
  if (J === void 0)
    return -1;
  if (J === null)
    return Ah(Q, Y);
  let W = b6.getVisitFn(Q), K = UJ(J);
  for (let z = (Y || 0) - 1, N = Q.length;++z < N; )
    if (K(W(Q, z)))
      return z;
  return -1;
}
function lM(Q, J, Y) {
  let W = b6.getVisitFn(Q), K = UJ(J);
  for (let z = (Y || 0) - 1, N = Q.length;++z < N; )
    if (K(W(Q, z)))
      return z;
  return -1;
}
d0.prototype.visitNull = Ph;
d0.prototype.visitBool = W1;
d0.prototype.visitInt = W1;
d0.prototype.visitInt8 = W1;
d0.prototype.visitInt16 = W1;
d0.prototype.visitInt32 = W1;
d0.prototype.visitInt64 = W1;
d0.prototype.visitUint8 = W1;
d0.prototype.visitUint16 = W1;
d0.prototype.visitUint32 = W1;
d0.prototype.visitUint64 = W1;
d0.prototype.visitFloat = W1;
d0.prototype.visitFloat16 = W1;
d0.prototype.visitFloat32 = W1;
d0.prototype.visitFloat64 = W1;
d0.prototype.visitUtf8 = W1;
d0.prototype.visitBinary = W1;
d0.prototype.visitFixedSizeBinary = W1;
d0.prototype.visitDate = W1;
d0.prototype.visitDateDay = W1;
d0.prototype.visitDateMillisecond = W1;
d0.prototype.visitTimestamp = W1;
d0.prototype.visitTimestampSecond = W1;
d0.prototype.visitTimestampMillisecond = W1;
d0.prototype.visitTimestampMicrosecond = W1;
d0.prototype.visitTimestampNanosecond = W1;
d0.prototype.visitTime = W1;
d0.prototype.visitTimeSecond = W1;
d0.prototype.visitTimeMillisecond = W1;
d0.prototype.visitTimeMicrosecond = W1;
d0.prototype.visitTimeNanosecond = W1;
d0.prototype.visitDecimal = W1;
d0.prototype.visitList = W1;
d0.prototype.visitStruct = W1;
d0.prototype.visitUnion = W1;
d0.prototype.visitDenseUnion = lM;
d0.prototype.visitSparseUnion = lM;
d0.prototype.visitDictionary = W1;
d0.prototype.visitInterval = W1;
d0.prototype.visitIntervalDayTime = W1;
d0.prototype.visitIntervalYearMonth = W1;
d0.prototype.visitFixedSizeList = W1;
d0.prototype.visitMap = W1;
var j$ = new d0;

// node_modules/apache-arrow/visitor/iterator.mjs
class l0 extends T0 {
}
function Q1(Q) {
  let { type: J } = Q;
  if (Q.nullCount === 0 && Q.stride === 1 && (J.typeId === S.Timestamp || J instanceof m6 && J.bitWidth !== 64 || J instanceof hZ && J.bitWidth !== 64 || J instanceof XX && J.precision !== Z6.HALF))
    return new o5(Q.data.length, (W) => {
      let K = Q.data[W];
      return K.values.subarray(0, K.length)[Symbol.iterator]();
    });
  let Y = 0;
  return new o5(Q.data.length, (W) => {
    let z = Q.data[W].length, N = Q.slice(Y, Y + z);
    return Y += z, new nM(N);
  });
}

class nM {
  constructor(Q) {
    this.vector = Q, this.index = 0;
  }
  next() {
    if (this.index < this.vector.length)
      return {
        value: this.vector.get(this.index++)
      };
    return { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
l0.prototype.visitNull = Q1;
l0.prototype.visitBool = Q1;
l0.prototype.visitInt = Q1;
l0.prototype.visitInt8 = Q1;
l0.prototype.visitInt16 = Q1;
l0.prototype.visitInt32 = Q1;
l0.prototype.visitInt64 = Q1;
l0.prototype.visitUint8 = Q1;
l0.prototype.visitUint16 = Q1;
l0.prototype.visitUint32 = Q1;
l0.prototype.visitUint64 = Q1;
l0.prototype.visitFloat = Q1;
l0.prototype.visitFloat16 = Q1;
l0.prototype.visitFloat32 = Q1;
l0.prototype.visitFloat64 = Q1;
l0.prototype.visitUtf8 = Q1;
l0.prototype.visitBinary = Q1;
l0.prototype.visitFixedSizeBinary = Q1;
l0.prototype.visitDate = Q1;
l0.prototype.visitDateDay = Q1;
l0.prototype.visitDateMillisecond = Q1;
l0.prototype.visitTimestamp = Q1;
l0.prototype.visitTimestampSecond = Q1;
l0.prototype.visitTimestampMillisecond = Q1;
l0.prototype.visitTimestampMicrosecond = Q1;
l0.prototype.visitTimestampNanosecond = Q1;
l0.prototype.visitTime = Q1;
l0.prototype.visitTimeSecond = Q1;
l0.prototype.visitTimeMillisecond = Q1;
l0.prototype.visitTimeMicrosecond = Q1;
l0.prototype.visitTimeNanosecond = Q1;
l0.prototype.visitDecimal = Q1;
l0.prototype.visitList = Q1;
l0.prototype.visitStruct = Q1;
l0.prototype.visitUnion = Q1;
l0.prototype.visitDenseUnion = Q1;
l0.prototype.visitSparseUnion = Q1;
l0.prototype.visitDictionary = Q1;
l0.prototype.visitInterval = Q1;
l0.prototype.visitIntervalDayTime = Q1;
l0.prototype.visitIntervalYearMonth = Q1;
l0.prototype.visitFixedSizeList = Q1;
l0.prototype.visitMap = Q1;
var qq = new l0;

// node_modules/apache-arrow/visitor/bytelength.mjs
var Uh = (Q, J) => Q + J;

class w4 extends T0 {
  visitNull(Q, J) {
    return 0;
  }
  visitInt(Q, J) {
    return Q.type.bitWidth / 8;
  }
  visitFloat(Q, J) {
    return Q.type.ArrayType.BYTES_PER_ELEMENT;
  }
  visitBool(Q, J) {
    return 0.125;
  }
  visitDecimal(Q, J) {
    return Q.type.bitWidth / 8;
  }
  visitDate(Q, J) {
    return (Q.type.unit + 1) * 4;
  }
  visitTime(Q, J) {
    return Q.type.bitWidth / 8;
  }
  visitTimestamp(Q, J) {
    return Q.type.unit === G1.SECOND ? 4 : 8;
  }
  visitInterval(Q, J) {
    return (Q.type.unit + 1) * 4;
  }
  visitStruct(Q, J) {
    return Q.children.reduce((Y, W) => Y + JX.visit(W, J), 0);
  }
  visitFixedSizeBinary(Q, J) {
    return Q.type.byteWidth;
  }
  visitMap(Q, J) {
    return 8 + Q.children.reduce((Y, W) => Y + JX.visit(W, J), 0);
  }
  visitDictionary(Q, J) {
    var Y;
    return Q.type.indices.bitWidth / 8 + (((Y = Q.dictionary) === null || Y === void 0 ? void 0 : Y.getByteLength(Q.values[J])) || 0);
  }
}
var Lh = ({ valueOffsets: Q }, J) => {
  return 8 + (Q[J + 1] - Q[J]);
}, Oh = ({ valueOffsets: Q }, J) => {
  return 8 + (Q[J + 1] - Q[J]);
}, wh = ({ valueOffsets: Q, stride: J, children: Y }, W) => {
  let K = Y[0], { [W * J]: z } = Q, { [W * J + 1]: N } = Q, F = JX.getVisitFn(K.type), L = K.slice(z, N - z), w = 8;
  for (let D = -1, k = N - z;++D < k; )
    w += F(L, D);
  return w;
}, Mh = ({ stride: Q, children: J }, Y) => {
  let W = J[0], K = W.slice(Y * Q, Q), z = JX.getVisitFn(W.type), N = 0;
  for (let F = -1, L = K.length;++F < L; )
    N += z(K, F);
  return N;
}, Dh = (Q, J) => {
  return Q.type.mode === O6.Dense ? sM(Q, J) : oM(Q, J);
}, sM = ({ type: Q, children: J, typeIds: Y, valueOffsets: W }, K) => {
  let z = Q.typeIdToChildIndex[Y[K]];
  return 8 + JX.visit(J[z], W[K]);
}, oM = ({ children: Q }, J) => {
  return 4 + JX.visitMany(Q, Q.map(() => J)).reduce(Uh, 0);
};
w4.prototype.visitUtf8 = Lh;
w4.prototype.visitBinary = Oh;
w4.prototype.visitList = wh;
w4.prototype.visitFixedSizeList = Mh;
w4.prototype.visitUnion = Dh;
w4.prototype.visitDenseUnion = sM;
w4.prototype.visitSparseUnion = oM;
var JX = new w4;

// node_modules/apache-arrow/vector.mjs
var aM, rM = {}, iM = {};

class t0 {
  constructor(Q) {
    var J, Y, W;
    let K = Q[0] instanceof t0 ? Q.flatMap((N) => N.data) : Q;
    if (K.length === 0 || K.some((N) => !(N instanceof b1)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    let z = (J = K[0]) === null || J === void 0 ? void 0 : J.type;
    switch (K.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        let { get: N, set: F, indexOf: L, byteLength: w } = rM[z.typeId], D = K[0];
        this.isValid = (k) => jK(D, k), this.get = (k) => N(D, k), this.set = (k, I) => F(D, k, I), this.indexOf = (k) => L(D, k), this.getByteLength = (k) => w(D, k), this._offsets = [0, D.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, iM[z.typeId]), this._offsets = r5(K);
        break;
    }
    this.data = K, this.type = z, this.stride = ZX(z), this.numChildren = (W = (Y = z.children) === null || Y === void 0 ? void 0 : Y.length) !== null && W !== void 0 ? W : 0, this.length = this._offsets[this._offsets.length - 1];
  }
  get byteLength() {
    if (this._byteLength === -1)
      this._byteLength = this.data.reduce((Q, J) => Q + J.byteLength, 0);
    return this._byteLength;
  }
  get nullCount() {
    if (this._nullCount === -1)
      this._nullCount = a5(this.data);
    return this._nullCount;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get [Symbol.toStringTag]() {
    return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
  }
  get VectorName() {
    return `${S[this.type.typeId]}Vector`;
  }
  isValid(Q) {
    return !1;
  }
  get(Q) {
    return null;
  }
  set(Q, J) {
    return;
  }
  indexOf(Q, J) {
    return -1;
  }
  includes(Q, J) {
    return this.indexOf(Q, J) > 0;
  }
  getByteLength(Q) {
    return 0;
  }
  [Symbol.iterator]() {
    return qq.visit(this);
  }
  concat(...Q) {
    return new t0(this.data.concat(Q.flatMap((J) => J.data).flat(Number.POSITIVE_INFINITY)));
  }
  slice(Q, J) {
    return new t0(DK(this, Q, J, ({ data: Y, _offsets: W }, K, z) => i5(Y, W, K, z)));
  }
  toJSON() {
    return [...this];
  }
  toArray() {
    let { type: Q, data: J, length: Y, stride: W, ArrayType: K } = this;
    switch (Q.typeId) {
      case S.Int:
      case S.Float:
      case S.Decimal:
      case S.Time:
      case S.Timestamp:
        switch (J.length) {
          case 0:
            return new K;
          case 1:
            return J[0].values.subarray(0, Y * W);
          default:
            return J.reduce((z, { values: N, length: F }) => {
              return z.array.set(N.subarray(0, F * W), z.offset), z.offset += F * W, z;
            }, { array: new K(Y * W), offset: 0 }).array;
        }
    }
    return [...this];
  }
  toString() {
    return `[${[...this].join(",")}]`;
  }
  getChild(Q) {
    var J;
    return this.getChildAt((J = this.type.children) === null || J === void 0 ? void 0 : J.findIndex((Y) => Y.name === Q));
  }
  getChildAt(Q) {
    if (Q > -1 && Q < this.numChildren)
      return new t0(this.data.map(({ children: J }) => J[Q]));
    return null;
  }
  get isMemoized() {
    if (R0.isDictionary(this.type))
      return this.data[0].dictionary.isMemoized;
    return !1;
  }
  memoize() {
    if (R0.isDictionary(this.type)) {
      let Q = new QH(this.data[0].dictionary), J = this.data.map((Y) => {
        let W = Y.clone();
        return W.dictionary = Q, W;
      });
      return new t0(J);
    }
    return new QH(this);
  }
  unmemoize() {
    if (R0.isDictionary(this.type) && this.isMemoized) {
      let Q = this.data[0].dictionary.unmemoize(), J = this.data.map((Y) => {
        let W = Y.clone();
        return W.dictionary = Q, W;
      });
      return new t0(J);
    }
    return this;
  }
}
aM = Symbol.toStringTag;
t0[aM] = ((Q) => {
  Q.type = R0.prototype, Q.data = [], Q.length = 0, Q.stride = 1, Q.numChildren = 0, Q._nullCount = -1, Q._byteLength = -1, Q._offsets = new Uint32Array([0]), Q[Symbol.isConcatSpreadable] = !0;
  let J = Object.keys(S).map((Y) => S[Y]).filter((Y) => typeof Y === "number" && Y !== S.NONE);
  for (let Y of J) {
    let W = b6.getVisitFnByTypeId(Y), K = m8.getVisitFnByTypeId(Y), z = j$.getVisitFnByTypeId(Y), N = JX.getVisitFnByTypeId(Y);
    rM[Y] = { get: W, set: K, indexOf: z, byteLength: N }, iM[Y] = Object.create(Q, {
      ["isValid"]: { value: LJ(jK) },
      ["get"]: { value: LJ(b6.getVisitFnByTypeId(Y)) },
      ["set"]: { value: t5(m8.getVisitFnByTypeId(Y)) },
      ["indexOf"]: { value: e5(j$.getVisitFnByTypeId(Y)) },
      ["getByteLength"]: { value: LJ(JX.getVisitFnByTypeId(Y)) }
    });
  }
  return "Vector";
})(t0.prototype);

class QH extends t0 {
  constructor(Q) {
    super(Q.data);
    let J = this.get, Y = this.set, W = this.slice, K = new Array(this.length);
    Object.defineProperty(this, "get", {
      value(z) {
        let N = K[z];
        if (N !== void 0)
          return N;
        let F = J.call(this, z);
        return K[z] = F, F;
      }
    }), Object.defineProperty(this, "set", {
      value(z, N) {
        Y.call(this, z, N), K[z] = N;
      }
    }), Object.defineProperty(this, "slice", {
      value: (z, N) => new QH(W.call(this, z, N))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new t0(this.data)
    }), Object.defineProperty(this, "memoize", {
      value: () => this
    });
  }
}

// node_modules/apache-arrow/builder/valid.mjs
function tM(Q) {
  if (!Q || Q.length <= 0)
    return function W(K) {
      return !0;
    };
  let J = "", Y = Q.filter((W) => W === W);
  if (Y.length > 0)
    J = `
    switch (x) {${Y.map((W) => `
        case ${Rh(W)}:`).join("")}
            return false;
    }`;
  if (Q.length !== Y.length)
    J = `if (x !== x) return false;
${J}`;
  return new Function("x", `${J}
return true;`);
}
function Rh(Q) {
  if (typeof Q !== "bigint")
    return $Z(Q);
  else if (R5)
    return `${$Z(Q)}n`;
  return `"${$Z(Q)}"`;
}

// node_modules/apache-arrow/builder/buffer.mjs
var pN = (Q, J) => (Math.ceil(Q) * J + 63 & -64 || 64) / J, kh = (Q, J = 0) => Q.length >= J ? Q.subarray(0, J) : iY(new Q.constructor(J), Q, 0);

class B$ {
  constructor(Q, J = 1) {
    this.buffer = Q, this.stride = J, this.BYTES_PER_ELEMENT = Q.BYTES_PER_ELEMENT, this.ArrayType = Q.constructor, this._resize(this.length = Math.ceil(Q.length / J));
  }
  get byteLength() {
    return Math.ceil(this.length * this.stride) * this.BYTES_PER_ELEMENT;
  }
  get reservedLength() {
    return this.buffer.length / this.stride;
  }
  get reservedByteLength() {
    return this.buffer.byteLength;
  }
  set(Q, J) {
    return this;
  }
  append(Q) {
    return this.set(this.length, Q);
  }
  reserve(Q) {
    if (Q > 0) {
      this.length += Q;
      let J = this.stride, Y = this.length * J, W = this.buffer.length;
      if (Y >= W)
        this._resize(W === 0 ? pN(Y * 1, this.BYTES_PER_ELEMENT) : pN(Y * 2, this.BYTES_PER_ELEMENT));
    }
    return this;
  }
  flush(Q = this.length) {
    Q = pN(Q * this.stride, this.BYTES_PER_ELEMENT);
    let J = kh(this.buffer, Q);
    return this.clear(), J;
  }
  clear() {
    return this.length = 0, this._resize(0), this;
  }
  _resize(Q) {
    return this.buffer = iY(new this.ArrayType(Q), this.buffer);
  }
}
B$.prototype.offset = 0;

class OJ extends B$ {
  last() {
    return this.get(this.length - 1);
  }
  get(Q) {
    return this.buffer[Q];
  }
  set(Q, J) {
    return this.reserve(Q - this.length + 1), this.buffer[Q * this.stride] = J, this;
  }
}

class BK extends OJ {
  constructor(Q = new Uint8Array(0)) {
    super(Q, 0.125);
    this.numValid = 0;
  }
  get numInvalid() {
    return this.length - this.numValid;
  }
  get(Q) {
    return this.buffer[Q >> 3] >> Q % 8 & 1;
  }
  set(Q, J) {
    let { buffer: Y } = this.reserve(Q - this.length + 1), W = Q >> 3, K = Q % 8, z = Y[W] >> K & 1;
    return J ? z === 0 && (Y[W] |= 1 << K, ++this.numValid) : z === 1 && (Y[W] &= ~(1 << K), --this.numValid), this;
  }
  clear() {
    return this.numValid = 0, super.clear();
  }
}

class CK extends OJ {
  constructor(Q = new Int32Array(1)) {
    super(Q, 1);
  }
  append(Q) {
    return this.set(this.length - 1, Q);
  }
  set(Q, J) {
    let Y = this.length - 1, W = this.reserve(Q - Y + 1).buffer;
    if (Y < Q++)
      W.fill(W[Y], Y, Q);
    return W[Q] = W[Q - 1] + J, this;
  }
  flush(Q = this.length - 1) {
    if (Q > this.length)
      this.set(Q - 1, 0);
    return super.flush(Q + 1);
  }
}

// node_modules/apache-arrow/builder.mjs
class H6 {
  constructor({ type: Q, nullValues: J }) {
    if (this.length = 0, this.finished = !1, this.type = Q, this.children = [], this.nullValues = J, this.stride = ZX(Q), this._nulls = new BK, J && J.length > 0)
      this._isValid = tM(J);
  }
  static throughNode(Q) {
    throw new Error('"throughNode" not available in this environment');
  }
  static throughDOM(Q) {
    throw new Error('"throughDOM" not available in this environment');
  }
  toVector() {
    return new t0([this.flush()]);
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get nullCount() {
    return this._nulls.numInvalid;
  }
  get numChildren() {
    return this.children.length;
  }
  get byteLength() {
    let Q = 0, { _offsets: J, _values: Y, _nulls: W, _typeIds: K, children: z } = this;
    return J && (Q += J.byteLength), Y && (Q += Y.byteLength), W && (Q += W.byteLength), K && (Q += K.byteLength), z.reduce((N, F) => N + F.byteLength, Q);
  }
  get reservedLength() {
    return this._nulls.reservedLength;
  }
  get reservedByteLength() {
    let Q = 0;
    return this._offsets && (Q += this._offsets.reservedByteLength), this._values && (Q += this._values.reservedByteLength), this._nulls && (Q += this._nulls.reservedByteLength), this._typeIds && (Q += this._typeIds.reservedByteLength), this.children.reduce((J, Y) => J + Y.reservedByteLength, Q);
  }
  get valueOffsets() {
    return this._offsets ? this._offsets.buffer : null;
  }
  get values() {
    return this._values ? this._values.buffer : null;
  }
  get nullBitmap() {
    return this._nulls ? this._nulls.buffer : null;
  }
  get typeIds() {
    return this._typeIds ? this._typeIds.buffer : null;
  }
  append(Q) {
    return this.set(this.length, Q);
  }
  isValid(Q) {
    return this._isValid(Q);
  }
  set(Q, J) {
    if (this.setValid(Q, this.isValid(J)))
      this.setValue(Q, J);
    return this;
  }
  setValue(Q, J) {
    this._setValue(this, Q, J);
  }
  setValid(Q, J) {
    return this.length = this._nulls.set(Q, +J).length, J;
  }
  addChild(Q, J = `${this.numChildren}`) {
    throw new Error(`Cannot append children to non-nested type "${this.type}"`);
  }
  getChildAt(Q) {
    return this.children[Q] || null;
  }
  flush() {
    let Q, J, Y, W, { type: K, length: z, nullCount: N, _typeIds: F, _offsets: L, _values: w, _nulls: D } = this;
    if (J = F === null || F === void 0 ? void 0 : F.flush(z))
      W = L === null || L === void 0 ? void 0 : L.flush(z);
    else if (W = L === null || L === void 0 ? void 0 : L.flush(z))
      Q = w === null || w === void 0 ? void 0 : w.flush(L.last());
    else
      Q = w === null || w === void 0 ? void 0 : w.flush(z);
    if (N > 0)
      Y = D === null || D === void 0 ? void 0 : D.flush(z);
    let k = this.children.map((I) => I.flush());
    return this.clear(), a0({
      type: K,
      length: z,
      nullCount: N,
      children: k,
      child: k[0],
      data: Q,
      typeIds: J,
      nullBitmap: Y,
      valueOffsets: W
    });
  }
  finish() {
    this.finished = !0;
    for (let Q of this.children)
      Q.finish();
    return this;
  }
  clear() {
    var Q, J, Y, W;
    this.length = 0, (Q = this._nulls) === null || Q === void 0 || Q.clear(), (J = this._values) === null || J === void 0 || J.clear(), (Y = this._offsets) === null || Y === void 0 || Y.clear(), (W = this._typeIds) === null || W === void 0 || W.clear();
    for (let K of this.children)
      K.clear();
    return this;
  }
}
H6.prototype.length = 1;
H6.prototype.stride = 1;
H6.prototype.children = null;
H6.prototype.finished = !1;
H6.prototype.nullValues = null;
H6.prototype._isValid = () => !0;

class b8 extends H6 {
  constructor(Q) {
    super(Q);
    this._values = new OJ(new this.ArrayType(0), this.stride);
  }
  setValue(Q, J) {
    let Y = this._values;
    return Y.reserve(Q - Y.length + 1), super.setValue(Q, J);
  }
}

class M4 extends H6 {
  constructor(Q) {
    super(Q);
    this._pendingLength = 0, this._offsets = new CK;
  }
  setValue(Q, J) {
    let Y = this._pending || (this._pending = /* @__PURE__ */ new Map), W = Y.get(Q);
    W && (this._pendingLength -= W.length), this._pendingLength += J instanceof O4 ? J[MX].length : J.length, Y.set(Q, J);
  }
  setValid(Q, J) {
    if (!super.setValid(Q, J))
      return (this._pending || (this._pending = /* @__PURE__ */ new Map)).set(Q, void 0), !1;
    return !0;
  }
  clear() {
    return this._pendingLength = 0, this._pending = void 0, super.clear();
  }
  flush() {
    return this._flush(), super.flush();
  }
  finish() {
    return this._flush(), super.finish();
  }
  _flush() {
    let Q = this._pending, J = this._pendingLength;
    if (this._pendingLength = 0, this._pending = void 0, Q && Q.size > 0)
      this._flushPending(Q, J);
    return this;
  }
}

// node_modules/apache-arrow/fb/block.mjs
class Wq {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  metaDataLength() {
    return this.bb.readInt32(this.bb_pos + 8);
  }
  bodyLength() {
    return this.bb.readInt64(this.bb_pos + 16);
  }
  static sizeOf() {
    return 24;
  }
  static createBlock(Q, J, Y, W) {
    return Q.prep(8, 24), Q.writeInt64(W), Q.pad(4), Q.writeInt32(Y), Q.writeInt64(J), Q.offset();
  }
}

// node_modules/flatbuffers/mjs/constants.js
var VK = 2, $X = 4, DX = 4, w0 = 4;
// node_modules/flatbuffers/mjs/utils.js
var uZ = new Int32Array(2), XH = new Float32Array(uZ.buffer), ZH = new Float64Array(uZ.buffer), Kq = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
// node_modules/flatbuffers/mjs/long.js
class U8 {
  constructor(Q, J) {
    this.low = Q | 0, this.high = J | 0;
  }
  static create(Q, J) {
    return Q == 0 && J == 0 ? U8.ZERO : new U8(Q, J);
  }
  toFloat64() {
    return (this.low >>> 0) + this.high * 4294967296;
  }
  equals(Q) {
    return this.low == Q.low && this.high == Q.high;
  }
}
U8.ZERO = new U8(0, 0);
// node_modules/flatbuffers/mjs/encoding.js
var SK;
(function(Q) {
  Q[Q.UTF8_BYTES = 1] = "UTF8_BYTES", Q[Q.UTF16_STRING = 2] = "UTF16_STRING";
})(SK || (SK = {}));
// node_modules/flatbuffers/mjs/byte-buffer.js
class YX {
  constructor(Q) {
    this.bytes_ = Q, this.position_ = 0;
  }
  static allocate(Q) {
    return new YX(new Uint8Array(Q));
  }
  clear() {
    this.position_ = 0;
  }
  bytes() {
    return this.bytes_;
  }
  position() {
    return this.position_;
  }
  setPosition(Q) {
    this.position_ = Q;
  }
  capacity() {
    return this.bytes_.length;
  }
  readInt8(Q) {
    return this.readUint8(Q) << 24 >> 24;
  }
  readUint8(Q) {
    return this.bytes_[Q];
  }
  readInt16(Q) {
    return this.readUint16(Q) << 16 >> 16;
  }
  readUint16(Q) {
    return this.bytes_[Q] | this.bytes_[Q + 1] << 8;
  }
  readInt32(Q) {
    return this.bytes_[Q] | this.bytes_[Q + 1] << 8 | this.bytes_[Q + 2] << 16 | this.bytes_[Q + 3] << 24;
  }
  readUint32(Q) {
    return this.readInt32(Q) >>> 0;
  }
  readInt64(Q) {
    return new U8(this.readInt32(Q), this.readInt32(Q + 4));
  }
  readUint64(Q) {
    return new U8(this.readUint32(Q), this.readUint32(Q + 4));
  }
  readFloat32(Q) {
    return uZ[0] = this.readInt32(Q), XH[0];
  }
  readFloat64(Q) {
    return uZ[Kq ? 0 : 1] = this.readInt32(Q), uZ[Kq ? 1 : 0] = this.readInt32(Q + 4), ZH[0];
  }
  writeInt8(Q, J) {
    this.bytes_[Q] = J;
  }
  writeUint8(Q, J) {
    this.bytes_[Q] = J;
  }
  writeInt16(Q, J) {
    this.bytes_[Q] = J, this.bytes_[Q + 1] = J >> 8;
  }
  writeUint16(Q, J) {
    this.bytes_[Q] = J, this.bytes_[Q + 1] = J >> 8;
  }
  writeInt32(Q, J) {
    this.bytes_[Q] = J, this.bytes_[Q + 1] = J >> 8, this.bytes_[Q + 2] = J >> 16, this.bytes_[Q + 3] = J >> 24;
  }
  writeUint32(Q, J) {
    this.bytes_[Q] = J, this.bytes_[Q + 1] = J >> 8, this.bytes_[Q + 2] = J >> 16, this.bytes_[Q + 3] = J >> 24;
  }
  writeInt64(Q, J) {
    this.writeInt32(Q, J.low), this.writeInt32(Q + 4, J.high);
  }
  writeUint64(Q, J) {
    this.writeUint32(Q, J.low), this.writeUint32(Q + 4, J.high);
  }
  writeFloat32(Q, J) {
    XH[0] = J, this.writeInt32(Q, uZ[0]);
  }
  writeFloat64(Q, J) {
    ZH[0] = J, this.writeInt32(Q, uZ[Kq ? 0 : 1]), this.writeInt32(Q + 4, uZ[Kq ? 1 : 0]);
  }
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + $X + DX)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let Q = "";
    for (let J = 0;J < DX; J++)
      Q += String.fromCharCode(this.readInt8(this.position_ + $X + J));
    return Q;
  }
  __offset(Q, J) {
    let Y = Q - this.readInt32(Q);
    return J < this.readInt16(Y) ? this.readInt16(Y + J) : 0;
  }
  __union(Q, J) {
    return Q.bb_pos = J + this.readInt32(J), Q.bb = this, Q;
  }
  __string(Q, J) {
    Q += this.readInt32(Q);
    let Y = this.readInt32(Q), W = "", K = 0;
    if (Q += $X, J === SK.UTF8_BYTES)
      return this.bytes_.subarray(Q, Q + Y);
    while (K < Y) {
      let z, N = this.readUint8(Q + K++);
      if (N < 192)
        z = N;
      else {
        let F = this.readUint8(Q + K++);
        if (N < 224)
          z = (N & 31) << 6 | F & 63;
        else {
          let L = this.readUint8(Q + K++);
          if (N < 240)
            z = (N & 15) << 12 | (F & 63) << 6 | L & 63;
          else {
            let w = this.readUint8(Q + K++);
            z = (N & 7) << 18 | (F & 63) << 12 | (L & 63) << 6 | w & 63;
          }
        }
      }
      if (z < 65536)
        W += String.fromCharCode(z);
      else
        z -= 65536, W += String.fromCharCode((z >> 10) + 55296, (z & 1023) + 56320);
    }
    return W;
  }
  __union_with_string(Q, J) {
    if (typeof Q === "string")
      return this.__string(J);
    return this.__union(Q, J);
  }
  __indirect(Q) {
    return Q + this.readInt32(Q);
  }
  __vector(Q) {
    return Q + this.readInt32(Q) + $X;
  }
  __vector_len(Q) {
    return this.readInt32(Q + this.readInt32(Q));
  }
  __has_identifier(Q) {
    if (Q.length != DX)
      throw new Error("FlatBuffers: file identifier must be length " + DX);
    for (let J = 0;J < DX; J++)
      if (Q.charCodeAt(J) != this.readInt8(this.position() + $X + J))
        return !1;
    return !0;
  }
  createLong(Q, J) {
    return U8.create(Q, J);
  }
  createScalarList(Q, J) {
    let Y = [];
    for (let W = 0;W < J; ++W)
      if (Q(W) !== null)
        Y.push(Q(W));
    return Y;
  }
  createObjList(Q, J) {
    let Y = [];
    for (let W = 0;W < J; ++W) {
      let K = Q(W);
      if (K !== null)
        Y.push(K.unpack());
    }
    return Y;
  }
}

// node_modules/flatbuffers/mjs/builder.js
class C$ {
  constructor(Q) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
    let J;
    if (!Q)
      J = 1024;
    else
      J = Q;
    this.bb = YX.allocate(J), this.space = J;
  }
  clear() {
    this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
  }
  forceDefaults(Q) {
    this.force_defaults = Q;
  }
  dataBuffer() {
    return this.bb;
  }
  asUint8Array() {
    return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
  }
  prep(Q, J) {
    if (Q > this.minalign)
      this.minalign = Q;
    let Y = ~(this.bb.capacity() - this.space + J) + 1 & Q - 1;
    while (this.space < Y + Q + J) {
      let W = this.bb.capacity();
      this.bb = C$.growByteBuffer(this.bb), this.space += this.bb.capacity() - W;
    }
    this.pad(Y);
  }
  pad(Q) {
    for (let J = 0;J < Q; J++)
      this.bb.writeInt8(--this.space, 0);
  }
  writeInt8(Q) {
    this.bb.writeInt8(this.space -= 1, Q);
  }
  writeInt16(Q) {
    this.bb.writeInt16(this.space -= 2, Q);
  }
  writeInt32(Q) {
    this.bb.writeInt32(this.space -= 4, Q);
  }
  writeInt64(Q) {
    this.bb.writeInt64(this.space -= 8, Q);
  }
  writeFloat32(Q) {
    this.bb.writeFloat32(this.space -= 4, Q);
  }
  writeFloat64(Q) {
    this.bb.writeFloat64(this.space -= 8, Q);
  }
  addInt8(Q) {
    this.prep(1, 0), this.writeInt8(Q);
  }
  addInt16(Q) {
    this.prep(2, 0), this.writeInt16(Q);
  }
  addInt32(Q) {
    this.prep(4, 0), this.writeInt32(Q);
  }
  addInt64(Q) {
    this.prep(8, 0), this.writeInt64(Q);
  }
  addFloat32(Q) {
    this.prep(4, 0), this.writeFloat32(Q);
  }
  addFloat64(Q) {
    this.prep(8, 0), this.writeFloat64(Q);
  }
  addFieldInt8(Q, J, Y) {
    if (this.force_defaults || J != Y)
      this.addInt8(J), this.slot(Q);
  }
  addFieldInt16(Q, J, Y) {
    if (this.force_defaults || J != Y)
      this.addInt16(J), this.slot(Q);
  }
  addFieldInt32(Q, J, Y) {
    if (this.force_defaults || J != Y)
      this.addInt32(J), this.slot(Q);
  }
  addFieldInt64(Q, J, Y) {
    if (this.force_defaults || !J.equals(Y))
      this.addInt64(J), this.slot(Q);
  }
  addFieldFloat32(Q, J, Y) {
    if (this.force_defaults || J != Y)
      this.addFloat32(J), this.slot(Q);
  }
  addFieldFloat64(Q, J, Y) {
    if (this.force_defaults || J != Y)
      this.addFloat64(J), this.slot(Q);
  }
  addFieldOffset(Q, J, Y) {
    if (this.force_defaults || J != Y)
      this.addOffset(J), this.slot(Q);
  }
  addFieldStruct(Q, J, Y) {
    if (J != Y)
      this.nested(J), this.slot(Q);
  }
  nested(Q) {
    if (Q != this.offset())
      throw new Error("FlatBuffers: struct must be serialized inline.");
  }
  notNested() {
    if (this.isNested)
      throw new Error("FlatBuffers: object serialization must not be nested.");
  }
  slot(Q) {
    if (this.vtable !== null)
      this.vtable[Q] = this.offset();
  }
  offset() {
    return this.bb.capacity() - this.space;
  }
  static growByteBuffer(Q) {
    let J = Q.capacity();
    if (J & 3221225472)
      throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
    let Y = J << 1, W = YX.allocate(Y);
    return W.setPosition(Y - J), W.bytes().set(Q.bytes(), Y - J), W;
  }
  addOffset(Q) {
    this.prep($X, 0), this.writeInt32(this.offset() - Q + $X);
  }
  startObject(Q) {
    if (this.notNested(), this.vtable == null)
      this.vtable = [];
    this.vtable_in_use = Q;
    for (let J = 0;J < Q; J++)
      this.vtable[J] = 0;
    this.isNested = !0, this.object_start = this.offset();
  }
  endObject() {
    if (this.vtable == null || !this.isNested)
      throw new Error("FlatBuffers: endObject called without startObject");
    this.addInt32(0);
    let Q = this.offset(), J = this.vtable_in_use - 1;
    for (;J >= 0 && this.vtable[J] == 0; J--)
      ;
    let Y = J + 1;
    for (;J >= 0; J--)
      this.addInt16(this.vtable[J] != 0 ? Q - this.vtable[J] : 0);
    let W = 2;
    this.addInt16(Q - this.object_start);
    let K = (Y + W) * VK;
    this.addInt16(K);
    let z = 0, N = this.space;
    Q:
      for (J = 0;J < this.vtables.length; J++) {
        let F = this.bb.capacity() - this.vtables[J];
        if (K == this.bb.readInt16(F)) {
          for (let L = VK;L < K; L += VK)
            if (this.bb.readInt16(N + L) != this.bb.readInt16(F + L))
              continue Q;
          z = this.vtables[J];
          break;
        }
      }
    if (z)
      this.space = this.bb.capacity() - Q, this.bb.writeInt32(this.space, z - Q);
    else
      this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - Q, this.offset() - Q);
    return this.isNested = !1, Q;
  }
  finish(Q, J, Y) {
    let W = Y ? w0 : 0;
    if (J) {
      let K = J;
      if (this.prep(this.minalign, $X + DX + W), K.length != DX)
        throw new Error("FlatBuffers: file identifier must be length " + DX);
      for (let z = DX - 1;z >= 0; z--)
        this.writeInt8(K.charCodeAt(z));
    }
    if (this.prep(this.minalign, $X + W), this.addOffset(Q), W)
      this.addInt32(this.bb.capacity() - this.space);
    this.bb.setPosition(this.space);
  }
  finishSizePrefixed(Q, J) {
    this.finish(Q, J, !0);
  }
  requiredField(Q, J) {
    let Y = this.bb.capacity() - Q, W = Y - this.bb.readInt32(Y);
    if (this.bb.readInt16(W + J) == 0)
      throw new Error("FlatBuffers: field " + J + " must be set");
  }
  startVector(Q, J, Y) {
    this.notNested(), this.vector_num_elems = J, this.prep($X, Q * J), this.prep(Y, Q * J);
  }
  endVector() {
    return this.writeInt32(this.vector_num_elems), this.offset();
  }
  createSharedString(Q) {
    if (!Q)
      return 0;
    if (!this.string_maps)
      this.string_maps = /* @__PURE__ */ new Map;
    if (this.string_maps.has(Q))
      return this.string_maps.get(Q);
    let J = this.createString(Q);
    return this.string_maps.set(Q, J), J;
  }
  createString(Q) {
    if (!Q)
      return 0;
    let J;
    if (Q instanceof Uint8Array)
      J = Q;
    else {
      J = [];
      let Y = 0;
      while (Y < Q.length) {
        let W, K = Q.charCodeAt(Y++);
        if (K < 55296 || K >= 56320)
          W = K;
        else {
          let z = Q.charCodeAt(Y++);
          W = (K << 10) + z + -56613888;
        }
        if (W < 128)
          J.push(W);
        else {
          if (W < 2048)
            J.push(W >> 6 & 31 | 192);
          else {
            if (W < 65536)
              J.push(W >> 12 & 15 | 224);
            else
              J.push(W >> 18 & 7 | 240, W >> 12 & 63 | 128);
            J.push(W >> 6 & 63 | 128);
          }
          J.push(W & 63 | 128);
        }
      }
    }
    this.addInt8(0), this.startVector(1, J.length, 1), this.bb.setPosition(this.space -= J.length);
    for (let Y = 0, W = this.space, K = this.bb.bytes();Y < J.length; Y++)
      K[W++] = J[Y];
    return this.endVector();
  }
  createLong(Q, J) {
    return U8.create(Q, J);
  }
  createObjectOffset(Q) {
    if (Q === null)
      return 0;
    if (typeof Q === "string")
      return this.createString(Q);
    else
      return Q.pack(this);
  }
  createObjectOffsetList(Q) {
    let J = [];
    for (let Y = 0;Y < Q.length; ++Y) {
      let W = Q[Y];
      if (W !== null)
        J.push(this.createObjectOffset(W));
      else
        throw new Error("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
    }
    return J;
  }
  createStructOffsetList(Q, J) {
    return J(this, Q.length), this.createObjectOffsetList(Q), this.endVector();
  }
}
// node_modules/apache-arrow/fb/key-value.mjs
class G6 {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsKeyValue(Q, J) {
    return (J || new G6).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsKeyValue(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new G6).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  key(Q) {
    let J = this.bb.__offset(this.bb_pos, 4);
    return J ? this.bb.__string(this.bb_pos + J, Q) : null;
  }
  value(Q) {
    let J = this.bb.__offset(this.bb_pos, 6);
    return J ? this.bb.__string(this.bb_pos + J, Q) : null;
  }
  static startKeyValue(Q) {
    Q.startObject(2);
  }
  static addKey(Q, J) {
    Q.addFieldOffset(0, J, 0);
  }
  static addValue(Q, J) {
    Q.addFieldOffset(1, J, 0);
  }
  static endKeyValue(Q) {
    return Q.endObject();
  }
  static createKeyValue(Q, J, Y) {
    return G6.startKeyValue(Q), G6.addKey(Q, J), G6.addValue(Q, Y), G6.endKeyValue(Q);
  }
}

// node_modules/apache-arrow/fb/metadata-version.mjs
var wJ;
(function(Q) {
  Q[Q.V1 = 0] = "V1", Q[Q.V2 = 1] = "V2", Q[Q.V3 = 2] = "V3", Q[Q.V4 = 3] = "V4", Q[Q.V5 = 4] = "V5";
})(wJ || (wJ = {}));

// node_modules/apache-arrow/fb/endianness.mjs
var MJ;
(function(Q) {
  Q[Q.Little = 0] = "Little", Q[Q.Big = 1] = "Big";
})(MJ || (MJ = {}));

// node_modules/apache-arrow/fb/dictionary-kind.mjs
var IK;
(function(Q) {
  Q[Q.DenseArray = 0] = "DenseArray";
})(IK || (IK = {}));

// node_modules/apache-arrow/fb/int.mjs
class QQ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsInt(Q, J) {
    return (J || new QQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsInt(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new QQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  bitWidth() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt32(this.bb_pos + Q) : 0;
  }
  isSigned() {
    let Q = this.bb.__offset(this.bb_pos, 6);
    return Q ? !!this.bb.readInt8(this.bb_pos + Q) : !1;
  }
  static startInt(Q) {
    Q.startObject(2);
  }
  static addBitWidth(Q, J) {
    Q.addFieldInt32(0, J, 0);
  }
  static addIsSigned(Q, J) {
    Q.addFieldInt8(1, +J, 0);
  }
  static endInt(Q) {
    return Q.endObject();
  }
  static createInt(Q, J, Y) {
    return QQ.startInt(Q), QQ.addBitWidth(Q, J), QQ.addIsSigned(Q, Y), QQ.endInt(Q);
  }
}

// node_modules/apache-arrow/fb/dictionary-encoding.mjs
class WZ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsDictionaryEncoding(Q, J) {
    return (J || new WZ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsDictionaryEncoding(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new WZ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  id() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt64(this.bb_pos + Q) : this.bb.createLong(0, 0);
  }
  indexType(Q) {
    let J = this.bb.__offset(this.bb_pos, 6);
    return J ? (Q || new QQ).__init(this.bb.__indirect(this.bb_pos + J), this.bb) : null;
  }
  isOrdered() {
    let Q = this.bb.__offset(this.bb_pos, 8);
    return Q ? !!this.bb.readInt8(this.bb_pos + Q) : !1;
  }
  dictionaryKind() {
    let Q = this.bb.__offset(this.bb_pos, 10);
    return Q ? this.bb.readInt16(this.bb_pos + Q) : IK.DenseArray;
  }
  static startDictionaryEncoding(Q) {
    Q.startObject(4);
  }
  static addId(Q, J) {
    Q.addFieldInt64(0, J, Q.createLong(0, 0));
  }
  static addIndexType(Q, J) {
    Q.addFieldOffset(1, J, 0);
  }
  static addIsOrdered(Q, J) {
    Q.addFieldInt8(2, +J, 0);
  }
  static addDictionaryKind(Q, J) {
    Q.addFieldInt16(3, J, IK.DenseArray);
  }
  static endDictionaryEncoding(Q) {
    return Q.endObject();
  }
}

// node_modules/apache-arrow/fb/binary.mjs
class DJ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsBinary(Q, J) {
    return (J || new DJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsBinary(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new DJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static startBinary(Q) {
    Q.startObject(0);
  }
  static endBinary(Q) {
    return Q.endObject();
  }
  static createBinary(Q) {
    return DJ.startBinary(Q), DJ.endBinary(Q);
  }
}

// node_modules/apache-arrow/fb/bool.mjs
class RJ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsBool(Q, J) {
    return (J || new RJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsBool(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new RJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static startBool(Q) {
    Q.startObject(0);
  }
  static endBool(Q) {
    return Q.endObject();
  }
  static createBool(Q) {
    return RJ.startBool(Q), RJ.endBool(Q);
  }
}

// node_modules/apache-arrow/fb/date-unit.mjs
var _K;
(function(Q) {
  Q[Q.DAY = 0] = "DAY", Q[Q.MILLISECOND = 1] = "MILLISECOND";
})(_K || (_K = {}));

// node_modules/apache-arrow/fb/date.mjs
class RX {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsDate(Q, J) {
    return (J || new RX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsDate(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new RX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  unit() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt16(this.bb_pos + Q) : _K.MILLISECOND;
  }
  static startDate(Q) {
    Q.startObject(1);
  }
  static addUnit(Q, J) {
    Q.addFieldInt16(0, J, _K.MILLISECOND);
  }
  static endDate(Q) {
    return Q.endObject();
  }
  static createDate(Q, J) {
    return RX.startDate(Q), RX.addUnit(Q, J), RX.endDate(Q);
  }
}

// node_modules/apache-arrow/fb/decimal.mjs
class XQ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsDecimal(Q, J) {
    return (J || new XQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsDecimal(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new XQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  precision() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt32(this.bb_pos + Q) : 0;
  }
  scale() {
    let Q = this.bb.__offset(this.bb_pos, 6);
    return Q ? this.bb.readInt32(this.bb_pos + Q) : 0;
  }
  bitWidth() {
    let Q = this.bb.__offset(this.bb_pos, 8);
    return Q ? this.bb.readInt32(this.bb_pos + Q) : 128;
  }
  static startDecimal(Q) {
    Q.startObject(3);
  }
  static addPrecision(Q, J) {
    Q.addFieldInt32(0, J, 0);
  }
  static addScale(Q, J) {
    Q.addFieldInt32(1, J, 0);
  }
  static addBitWidth(Q, J) {
    Q.addFieldInt32(2, J, 128);
  }
  static endDecimal(Q) {
    return Q.endObject();
  }
  static createDecimal(Q, J, Y, W) {
    return XQ.startDecimal(Q), XQ.addPrecision(Q, J), XQ.addScale(Q, Y), XQ.addBitWidth(Q, W), XQ.endDecimal(Q);
  }
}

// node_modules/apache-arrow/fb/time-unit.mjs
var kJ;
(function(Q) {
  Q[Q.SECOND = 0] = "SECOND", Q[Q.MILLISECOND = 1] = "MILLISECOND", Q[Q.MICROSECOND = 2] = "MICROSECOND", Q[Q.NANOSECOND = 3] = "NANOSECOND";
})(kJ || (kJ = {}));

// node_modules/apache-arrow/fb/fixed-size-binary.mjs
class kX {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsFixedSizeBinary(Q, J) {
    return (J || new kX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsFixedSizeBinary(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new kX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  byteWidth() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt32(this.bb_pos + Q) : 0;
  }
  static startFixedSizeBinary(Q) {
    Q.startObject(1);
  }
  static addByteWidth(Q, J) {
    Q.addFieldInt32(0, J, 0);
  }
  static endFixedSizeBinary(Q) {
    return Q.endObject();
  }
  static createFixedSizeBinary(Q, J) {
    return kX.startFixedSizeBinary(Q), kX.addByteWidth(Q, J), kX.endFixedSizeBinary(Q);
  }
}

// node_modules/apache-arrow/fb/fixed-size-list.mjs
class jX {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsFixedSizeList(Q, J) {
    return (J || new jX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsFixedSizeList(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new jX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  listSize() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt32(this.bb_pos + Q) : 0;
  }
  static startFixedSizeList(Q) {
    Q.startObject(1);
  }
  static addListSize(Q, J) {
    Q.addFieldInt32(0, J, 0);
  }
  static endFixedSizeList(Q) {
    return Q.endObject();
  }
  static createFixedSizeList(Q, J) {
    return jX.startFixedSizeList(Q), jX.addListSize(Q, J), jX.endFixedSizeList(Q);
  }
}

// node_modules/apache-arrow/fb/precision.mjs
var TK;
(function(Q) {
  Q[Q.HALF = 0] = "HALF", Q[Q.SINGLE = 1] = "SINGLE", Q[Q.DOUBLE = 2] = "DOUBLE";
})(TK || (TK = {}));

// node_modules/apache-arrow/fb/floating-point.mjs
class BX {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsFloatingPoint(Q, J) {
    return (J || new BX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsFloatingPoint(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new BX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  precision() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt16(this.bb_pos + Q) : TK.HALF;
  }
  static startFloatingPoint(Q) {
    Q.startObject(1);
  }
  static addPrecision(Q, J) {
    Q.addFieldInt16(0, J, TK.HALF);
  }
  static endFloatingPoint(Q) {
    return Q.endObject();
  }
  static createFloatingPoint(Q, J) {
    return BX.startFloatingPoint(Q), BX.addPrecision(Q, J), BX.endFloatingPoint(Q);
  }
}

// node_modules/apache-arrow/fb/interval-unit.mjs
var gK;
(function(Q) {
  Q[Q.YEAR_MONTH = 0] = "YEAR_MONTH", Q[Q.DAY_TIME = 1] = "DAY_TIME", Q[Q.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(gK || (gK = {}));

// node_modules/apache-arrow/fb/interval.mjs
class CX {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsInterval(Q, J) {
    return (J || new CX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsInterval(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new CX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  unit() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt16(this.bb_pos + Q) : gK.YEAR_MONTH;
  }
  static startInterval(Q) {
    Q.startObject(1);
  }
  static addUnit(Q, J) {
    Q.addFieldInt16(0, J, gK.YEAR_MONTH);
  }
  static endInterval(Q) {
    return Q.endObject();
  }
  static createInterval(Q, J) {
    return CX.startInterval(Q), CX.addUnit(Q, J), CX.endInterval(Q);
  }
}

// node_modules/apache-arrow/fb/list.mjs
class jJ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsList(Q, J) {
    return (J || new jJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsList(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new jJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static startList(Q) {
    Q.startObject(0);
  }
  static endList(Q) {
    return Q.endObject();
  }
  static createList(Q) {
    return jJ.startList(Q), jJ.endList(Q);
  }
}

// node_modules/apache-arrow/fb/map.mjs
class VX {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsMap(Q, J) {
    return (J || new VX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsMap(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new VX).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  keysSorted() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? !!this.bb.readInt8(this.bb_pos + Q) : !1;
  }
  static startMap(Q) {
    Q.startObject(1);
  }
  static addKeysSorted(Q, J) {
    Q.addFieldInt8(0, +J, 0);
  }
  static endMap(Q) {
    return Q.endObject();
  }
  static createMap(Q, J) {
    return VX.startMap(Q), VX.addKeysSorted(Q, J), VX.endMap(Q);
  }
}

// node_modules/apache-arrow/fb/null.mjs
class BJ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsNull(Q, J) {
    return (J || new BJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsNull(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new BJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static startNull(Q) {
    Q.startObject(0);
  }
  static endNull(Q) {
    return Q.endObject();
  }
  static createNull(Q) {
    return BJ.startNull(Q), BJ.endNull(Q);
  }
}

// node_modules/apache-arrow/fb/struct_.mjs
class CJ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsStruct_(Q, J) {
    return (J || new CJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsStruct_(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new CJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static startStruct_(Q) {
    Q.startObject(0);
  }
  static endStruct_(Q) {
    return Q.endObject();
  }
  static createStruct_(Q) {
    return CJ.startStruct_(Q), CJ.endStruct_(Q);
  }
}

// node_modules/apache-arrow/fb/time.mjs
class vQ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsTime(Q, J) {
    return (J || new vQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsTime(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new vQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  unit() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt16(this.bb_pos + Q) : kJ.MILLISECOND;
  }
  bitWidth() {
    let Q = this.bb.__offset(this.bb_pos, 6);
    return Q ? this.bb.readInt32(this.bb_pos + Q) : 32;
  }
  static startTime(Q) {
    Q.startObject(2);
  }
  static addUnit(Q, J) {
    Q.addFieldInt16(0, J, kJ.MILLISECOND);
  }
  static addBitWidth(Q, J) {
    Q.addFieldInt32(1, J, 32);
  }
  static endTime(Q) {
    return Q.endObject();
  }
  static createTime(Q, J, Y) {
    return vQ.startTime(Q), vQ.addUnit(Q, J), vQ.addBitWidth(Q, Y), vQ.endTime(Q);
  }
}

// node_modules/apache-arrow/fb/timestamp.mjs
class hQ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsTimestamp(Q, J) {
    return (J || new hQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsTimestamp(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new hQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  unit() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt16(this.bb_pos + Q) : kJ.SECOND;
  }
  timezone(Q) {
    let J = this.bb.__offset(this.bb_pos, 6);
    return J ? this.bb.__string(this.bb_pos + J, Q) : null;
  }
  static startTimestamp(Q) {
    Q.startObject(2);
  }
  static addUnit(Q, J) {
    Q.addFieldInt16(0, J, kJ.SECOND);
  }
  static addTimezone(Q, J) {
    Q.addFieldOffset(1, J, 0);
  }
  static endTimestamp(Q) {
    return Q.endObject();
  }
  static createTimestamp(Q, J, Y) {
    return hQ.startTimestamp(Q), hQ.addUnit(Q, J), hQ.addTimezone(Q, Y), hQ.endTimestamp(Q);
  }
}

// node_modules/apache-arrow/fb/union-mode.mjs
var xK;
(function(Q) {
  Q[Q.Sparse = 0] = "Sparse", Q[Q.Dense = 1] = "Dense";
})(xK || (xK = {}));

// node_modules/apache-arrow/fb/union.mjs
class ZQ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsUnion(Q, J) {
    return (J || new ZQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsUnion(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new ZQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  mode() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt16(this.bb_pos + Q) : xK.Sparse;
  }
  typeIds(Q) {
    let J = this.bb.__offset(this.bb_pos, 6);
    return J ? this.bb.readInt32(this.bb.__vector(this.bb_pos + J) + Q * 4) : 0;
  }
  typeIdsLength() {
    let Q = this.bb.__offset(this.bb_pos, 6);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  typeIdsArray() {
    let Q = this.bb.__offset(this.bb_pos, 6);
    return Q ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + Q), this.bb.__vector_len(this.bb_pos + Q)) : null;
  }
  static startUnion(Q) {
    Q.startObject(2);
  }
  static addMode(Q, J) {
    Q.addFieldInt16(0, J, xK.Sparse);
  }
  static addTypeIds(Q, J) {
    Q.addFieldOffset(1, J, 0);
  }
  static createTypeIdsVector(Q, J) {
    Q.startVector(4, J.length, 4);
    for (let Y = J.length - 1;Y >= 0; Y--)
      Q.addInt32(J[Y]);
    return Q.endVector();
  }
  static startTypeIdsVector(Q, J) {
    Q.startVector(4, J, 4);
  }
  static endUnion(Q) {
    return Q.endObject();
  }
  static createUnion(Q, J, Y) {
    return ZQ.startUnion(Q), ZQ.addMode(Q, J), ZQ.addTypeIds(Q, Y), ZQ.endUnion(Q);
  }
}

// node_modules/apache-arrow/fb/utf8.mjs
class VJ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsUtf8(Q, J) {
    return (J || new VJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsUtf8(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new VJ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static startUtf8(Q) {
    Q.startObject(0);
  }
  static endUtf8(Q) {
    return Q.endObject();
  }
  static createUtf8(Q) {
    return VJ.startUtf8(Q), VJ.endUtf8(Q);
  }
}

// node_modules/apache-arrow/fb/type.mjs
var $6;
(function(Q) {
  Q[Q.NONE = 0] = "NONE", Q[Q.Null = 1] = "Null", Q[Q.Int = 2] = "Int", Q[Q.FloatingPoint = 3] = "FloatingPoint", Q[Q.Binary = 4] = "Binary", Q[Q.Utf8 = 5] = "Utf8", Q[Q.Bool = 6] = "Bool", Q[Q.Decimal = 7] = "Decimal", Q[Q.Date = 8] = "Date", Q[Q.Time = 9] = "Time", Q[Q.Timestamp = 10] = "Timestamp", Q[Q.Interval = 11] = "Interval", Q[Q.List = 12] = "List", Q[Q.Struct_ = 13] = "Struct_", Q[Q.Union = 14] = "Union", Q[Q.FixedSizeBinary = 15] = "FixedSizeBinary", Q[Q.FixedSizeList = 16] = "FixedSizeList", Q[Q.Map = 17] = "Map", Q[Q.Duration = 18] = "Duration", Q[Q.LargeBinary = 19] = "LargeBinary", Q[Q.LargeUtf8 = 20] = "LargeUtf8", Q[Q.LargeList = 21] = "LargeList";
})($6 || ($6 = {}));

// node_modules/apache-arrow/fb/field.mjs
class L8 {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsField(Q, J) {
    return (J || new L8).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsField(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new L8).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  name(Q) {
    let J = this.bb.__offset(this.bb_pos, 4);
    return J ? this.bb.__string(this.bb_pos + J, Q) : null;
  }
  nullable() {
    let Q = this.bb.__offset(this.bb_pos, 6);
    return Q ? !!this.bb.readInt8(this.bb_pos + Q) : !1;
  }
  typeType() {
    let Q = this.bb.__offset(this.bb_pos, 8);
    return Q ? this.bb.readUint8(this.bb_pos + Q) : $6.NONE;
  }
  type(Q) {
    let J = this.bb.__offset(this.bb_pos, 10);
    return J ? this.bb.__union(Q, this.bb_pos + J) : null;
  }
  dictionary(Q) {
    let J = this.bb.__offset(this.bb_pos, 12);
    return J ? (Q || new WZ).__init(this.bb.__indirect(this.bb_pos + J), this.bb) : null;
  }
  children(Q, J) {
    let Y = this.bb.__offset(this.bb_pos, 14);
    return Y ? (J || new L8).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + Y) + Q * 4), this.bb) : null;
  }
  childrenLength() {
    let Q = this.bb.__offset(this.bb_pos, 14);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  customMetadata(Q, J) {
    let Y = this.bb.__offset(this.bb_pos, 16);
    return Y ? (J || new G6).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + Y) + Q * 4), this.bb) : null;
  }
  customMetadataLength() {
    let Q = this.bb.__offset(this.bb_pos, 16);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  static startField(Q) {
    Q.startObject(7);
  }
  static addName(Q, J) {
    Q.addFieldOffset(0, J, 0);
  }
  static addNullable(Q, J) {
    Q.addFieldInt8(1, +J, 0);
  }
  static addTypeType(Q, J) {
    Q.addFieldInt8(2, J, $6.NONE);
  }
  static addType(Q, J) {
    Q.addFieldOffset(3, J, 0);
  }
  static addDictionary(Q, J) {
    Q.addFieldOffset(4, J, 0);
  }
  static addChildren(Q, J) {
    Q.addFieldOffset(5, J, 0);
  }
  static createChildrenVector(Q, J) {
    Q.startVector(4, J.length, 4);
    for (let Y = J.length - 1;Y >= 0; Y--)
      Q.addOffset(J[Y]);
    return Q.endVector();
  }
  static startChildrenVector(Q, J) {
    Q.startVector(4, J, 4);
  }
  static addCustomMetadata(Q, J) {
    Q.addFieldOffset(6, J, 0);
  }
  static createCustomMetadataVector(Q, J) {
    Q.startVector(4, J.length, 4);
    for (let Y = J.length - 1;Y >= 0; Y--)
      Q.addOffset(J[Y]);
    return Q.endVector();
  }
  static startCustomMetadataVector(Q, J) {
    Q.startVector(4, J, 4);
  }
  static endField(Q) {
    return Q.endObject();
  }
}

// node_modules/apache-arrow/fb/schema.mjs
class V6 {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsSchema(Q, J) {
    return (J || new V6).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsSchema(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new V6).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  endianness() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt16(this.bb_pos + Q) : MJ.Little;
  }
  fields(Q, J) {
    let Y = this.bb.__offset(this.bb_pos, 6);
    return Y ? (J || new L8).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + Y) + Q * 4), this.bb) : null;
  }
  fieldsLength() {
    let Q = this.bb.__offset(this.bb_pos, 6);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  customMetadata(Q, J) {
    let Y = this.bb.__offset(this.bb_pos, 8);
    return Y ? (J || new G6).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + Y) + Q * 4), this.bb) : null;
  }
  customMetadataLength() {
    let Q = this.bb.__offset(this.bb_pos, 8);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  features(Q) {
    let J = this.bb.__offset(this.bb_pos, 10);
    return J ? this.bb.readInt64(this.bb.__vector(this.bb_pos + J) + Q * 8) : this.bb.createLong(0, 0);
  }
  featuresLength() {
    let Q = this.bb.__offset(this.bb_pos, 10);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  static startSchema(Q) {
    Q.startObject(4);
  }
  static addEndianness(Q, J) {
    Q.addFieldInt16(0, J, MJ.Little);
  }
  static addFields(Q, J) {
    Q.addFieldOffset(1, J, 0);
  }
  static createFieldsVector(Q, J) {
    Q.startVector(4, J.length, 4);
    for (let Y = J.length - 1;Y >= 0; Y--)
      Q.addOffset(J[Y]);
    return Q.endVector();
  }
  static startFieldsVector(Q, J) {
    Q.startVector(4, J, 4);
  }
  static addCustomMetadata(Q, J) {
    Q.addFieldOffset(2, J, 0);
  }
  static createCustomMetadataVector(Q, J) {
    Q.startVector(4, J.length, 4);
    for (let Y = J.length - 1;Y >= 0; Y--)
      Q.addOffset(J[Y]);
    return Q.endVector();
  }
  static startCustomMetadataVector(Q, J) {
    Q.startVector(4, J, 4);
  }
  static addFeatures(Q, J) {
    Q.addFieldOffset(3, J, 0);
  }
  static createFeaturesVector(Q, J) {
    Q.startVector(8, J.length, 8);
    for (let Y = J.length - 1;Y >= 0; Y--)
      Q.addInt64(J[Y]);
    return Q.endVector();
  }
  static startFeaturesVector(Q, J) {
    Q.startVector(8, J, 8);
  }
  static endSchema(Q) {
    return Q.endObject();
  }
  static finishSchemaBuffer(Q, J) {
    Q.finish(J);
  }
  static finishSizePrefixedSchemaBuffer(Q, J) {
    Q.finish(J, void 0, !0);
  }
  static createSchema(Q, J, Y, W, K) {
    return V6.startSchema(Q), V6.addEndianness(Q, J), V6.addFields(Q, Y), V6.addCustomMetadata(Q, W), V6.addFeatures(Q, K), V6.endSchema(Q);
  }
}

// node_modules/apache-arrow/fb/footer.mjs
class yQ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsFooter(Q, J) {
    return (J || new yQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsFooter(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new yQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  version() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt16(this.bb_pos + Q) : wJ.V1;
  }
  schema(Q) {
    let J = this.bb.__offset(this.bb_pos, 6);
    return J ? (Q || new V6).__init(this.bb.__indirect(this.bb_pos + J), this.bb) : null;
  }
  dictionaries(Q, J) {
    let Y = this.bb.__offset(this.bb_pos, 8);
    return Y ? (J || new Wq).__init(this.bb.__vector(this.bb_pos + Y) + Q * 24, this.bb) : null;
  }
  dictionariesLength() {
    let Q = this.bb.__offset(this.bb_pos, 8);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  recordBatches(Q, J) {
    let Y = this.bb.__offset(this.bb_pos, 10);
    return Y ? (J || new Wq).__init(this.bb.__vector(this.bb_pos + Y) + Q * 24, this.bb) : null;
  }
  recordBatchesLength() {
    let Q = this.bb.__offset(this.bb_pos, 10);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  customMetadata(Q, J) {
    let Y = this.bb.__offset(this.bb_pos, 12);
    return Y ? (J || new G6).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + Y) + Q * 4), this.bb) : null;
  }
  customMetadataLength() {
    let Q = this.bb.__offset(this.bb_pos, 12);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  static startFooter(Q) {
    Q.startObject(5);
  }
  static addVersion(Q, J) {
    Q.addFieldInt16(0, J, wJ.V1);
  }
  static addSchema(Q, J) {
    Q.addFieldOffset(1, J, 0);
  }
  static addDictionaries(Q, J) {
    Q.addFieldOffset(2, J, 0);
  }
  static startDictionariesVector(Q, J) {
    Q.startVector(24, J, 8);
  }
  static addRecordBatches(Q, J) {
    Q.addFieldOffset(3, J, 0);
  }
  static startRecordBatchesVector(Q, J) {
    Q.startVector(24, J, 8);
  }
  static addCustomMetadata(Q, J) {
    Q.addFieldOffset(4, J, 0);
  }
  static createCustomMetadataVector(Q, J) {
    Q.startVector(4, J.length, 4);
    for (let Y = J.length - 1;Y >= 0; Y--)
      Q.addOffset(J[Y]);
    return Q.endVector();
  }
  static startCustomMetadataVector(Q, J) {
    Q.startVector(4, J, 4);
  }
  static endFooter(Q) {
    return Q.endObject();
  }
  static finishFooterBuffer(Q, J) {
    Q.finish(J);
  }
  static finishSizePrefixedFooterBuffer(Q, J) {
    Q.finish(J, void 0, !0);
  }
}

// node_modules/apache-arrow/schema.mjs
class A1 {
  constructor(Q = [], J, Y) {
    if (this.fields = Q || [], this.metadata = J || /* @__PURE__ */ new Map, !Y)
      Y = dN(Q);
    this.dictionaries = Y;
  }
  get [Symbol.toStringTag]() {
    return "Schema";
  }
  get names() {
    return this.fields.map((Q) => Q.name);
  }
  toString() {
    return `Schema<{ ${this.fields.map((Q, J) => `${J}: ${Q}`).join(", ")} }>`;
  }
  select(Q) {
    let J = new Set(Q), Y = this.fields.filter((W) => J.has(W.name));
    return new A1(Y, this.metadata);
  }
  selectAt(Q) {
    let J = Q.map((Y) => this.fields[Y]).filter(Boolean);
    return new A1(J, this.metadata);
  }
  assign(...Q) {
    let J = Q[0] instanceof A1 ? Q[0] : Array.isArray(Q[0]) ? new A1(Q[0]) : new A1(Q), Y = [...this.fields], W = JH(JH(/* @__PURE__ */ new Map, this.metadata), J.metadata), K = J.fields.filter((N) => {
      let F = Y.findIndex((L) => L.name === N.name);
      return ~F ? (Y[F] = N.clone({
        metadata: JH(JH(/* @__PURE__ */ new Map, Y[F].metadata), N.metadata)
      })) && !1 : !0;
    }), z = dN(K, /* @__PURE__ */ new Map);
    return new A1([...Y, ...K], W, new Map([...this.dictionaries, ...z]));
  }
}
A1.prototype.fields = null;
A1.prototype.metadata = null;
A1.prototype.dictionaries = null;

class Z1 {
  constructor(Q, J, Y = !1, W) {
    this.name = Q, this.type = J, this.nullable = Y, this.metadata = W || /* @__PURE__ */ new Map;
  }
  static new(...Q) {
    let [J, Y, W, K] = Q;
    if (Q[0] && typeof Q[0] === "object")
      ({ name: J } = Q[0]), Y === void 0 && (Y = Q[0].type), W === void 0 && (W = Q[0].nullable), K === void 0 && (K = Q[0].metadata);
    return new Z1(`${J}`, Y, W, K);
  }
  get typeId() {
    return this.type.typeId;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    return `${this.name}: ${this.type}`;
  }
  clone(...Q) {
    let [J, Y, W, K] = Q;
    return !Q[0] || typeof Q[0] !== "object" ? [J = this.name, Y = this.type, W = this.nullable, K = this.metadata] = Q : { name: J = this.name, type: Y = this.type, nullable: W = this.nullable, metadata: K = this.metadata } = Q[0], Z1.new(J, Y, W, K);
  }
}
Z1.prototype.type = null;
Z1.prototype.name = null;
Z1.prototype.nullable = null;
Z1.prototype.metadata = null;
function JH(Q, J) {
  return new Map([...Q || /* @__PURE__ */ new Map, ...J || /* @__PURE__ */ new Map]);
}
function dN(Q, J = /* @__PURE__ */ new Map) {
  for (let Y = -1, W = Q.length;++Y < W; ) {
    let z = Q[Y].type;
    if (R0.isDictionary(z)) {
      if (!J.has(z.id))
        J.set(z.id, z.dictionary);
      else if (J.get(z.id) !== z.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    if (z.children && z.children.length > 0)
      dN(z.children, J);
  }
  return J;
}

// node_modules/apache-arrow/ipc/metadata/file.mjs
var eM = U8, jh = C$, Bh = YX;

class SJ {
  constructor(Q, J = A8.V4, Y, W) {
    this.schema = Q, this.version = J, Y && (this._recordBatches = Y), W && (this._dictionaryBatches = W);
  }
  static decode(Q) {
    Q = new Bh(c0(Q));
    let J = yQ.getRootAsFooter(Q), Y = A1.decode(J.schema());
    return new QD(Y, J);
  }
  static encode(Q) {
    let J = new jh, Y = A1.encode(J, Q.schema);
    yQ.startRecordBatchesVector(J, Q.numRecordBatches);
    for (let z of [...Q.recordBatches()].slice().reverse())
      D4.encode(J, z);
    let W = J.endVector();
    yQ.startDictionariesVector(J, Q.numDictionaries);
    for (let z of [...Q.dictionaryBatches()].slice().reverse())
      D4.encode(J, z);
    let K = J.endVector();
    return yQ.startFooter(J), yQ.addSchema(J, Y), yQ.addVersion(J, A8.V4), yQ.addRecordBatches(J, W), yQ.addDictionaries(J, K), yQ.finishFooterBuffer(J, yQ.endFooter(J)), J.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  *recordBatches() {
    for (let Q, J = -1, Y = this.numRecordBatches;++J < Y; )
      if (Q = this.getRecordBatch(J))
        yield Q;
  }
  *dictionaryBatches() {
    for (let Q, J = -1, Y = this.numDictionaries;++J < Y; )
      if (Q = this.getDictionaryBatch(J))
        yield Q;
  }
  getRecordBatch(Q) {
    return Q >= 0 && Q < this.numRecordBatches && this._recordBatches[Q] || null;
  }
  getDictionaryBatch(Q) {
    return Q >= 0 && Q < this.numDictionaries && this._dictionaryBatches[Q] || null;
  }
}
class QD extends SJ {
  constructor(Q, J) {
    super(Q, J.version());
    this._footer = J;
  }
  get numRecordBatches() {
    return this._footer.recordBatchesLength();
  }
  get numDictionaries() {
    return this._footer.dictionariesLength();
  }
  getRecordBatch(Q) {
    if (Q >= 0 && Q < this.numRecordBatches) {
      let J = this._footer.recordBatches(Q);
      if (J)
        return D4.decode(J);
    }
    return null;
  }
  getDictionaryBatch(Q) {
    if (Q >= 0 && Q < this.numDictionaries) {
      let J = this._footer.dictionaries(Q);
      if (J)
        return D4.decode(J);
    }
    return null;
  }
}

class D4 {
  constructor(Q, J, Y) {
    this.metaDataLength = Q, this.offset = typeof Y === "number" ? Y : Y.low, this.bodyLength = typeof J === "number" ? J : J.low;
  }
  static decode(Q) {
    return new D4(Q.metaDataLength(), Q.bodyLength(), Q.offset());
  }
  static encode(Q, J) {
    let { metaDataLength: Y } = J, W = new eM(J.offset, 0), K = new eM(J.bodyLength, 0);
    return Wq.createBlock(Q, W, Y, K);
  }
}

// node_modules/apache-arrow/io/interfaces.mjs
var e1 = Object.freeze({ done: !0, value: void 0 });

class $H {
  constructor(Q) {
    this._json = Q;
  }
  get schema() {
    return this._json.schema;
  }
  get batches() {
    return this._json.batches || [];
  }
  get dictionaries() {
    return this._json.dictionaries || [];
  }
}

class Hq {
  tee() {
    return this._getDOMStream().tee();
  }
  pipe(Q, J) {
    return this._getNodeStream().pipe(Q, J);
  }
  pipeTo(Q, J) {
    return this._getDOMStream().pipeTo(Q, J);
  }
  pipeThrough(Q, J) {
    return this._getDOMStream().pipeThrough(Q, J);
  }
  _getDOMStream() {
    return this._DOMStream || (this._DOMStream = this.toDOMStream());
  }
  _getNodeStream() {
    return this._nodeStream || (this._nodeStream = this.toNodeStream());
  }
}

class lN extends Hq {
  constructor() {
    super();
    this._values = [], this.resolvers = [], this._closedPromise = new Promise((Q) => this._closedPromiseResolve = Q);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(Q) {
    return z0(this, void 0, void 0, function* () {
      yield this.return(Q);
    });
  }
  write(Q) {
    if (this._ensureOpen())
      this.resolvers.length <= 0 ? this._values.push(Q) : this.resolvers.shift().resolve({ done: !1, value: Q });
  }
  abort(Q) {
    if (this._closedPromiseResolve)
      this.resolvers.length <= 0 ? this._error = { error: Q } : this.resolvers.shift().reject({ done: !0, value: Q });
  }
  close() {
    if (this._closedPromiseResolve) {
      let { resolvers: Q } = this;
      while (Q.length > 0)
        Q.shift().resolve(e1);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(Q) {
    return y8.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, Q);
  }
  toNodeStream(Q) {
    return y8.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, Q);
  }
  throw(Q) {
    return z0(this, void 0, void 0, function* () {
      return yield this.abort(Q), e1;
    });
  }
  return(Q) {
    return z0(this, void 0, void 0, function* () {
      return yield this.close(), e1;
    });
  }
  read(Q) {
    return z0(this, void 0, void 0, function* () {
      return (yield this.next(Q, "read")).value;
    });
  }
  peek(Q) {
    return z0(this, void 0, void 0, function* () {
      return (yield this.next(Q, "peek")).value;
    });
  }
  next(...Q) {
    if (this._values.length > 0)
      return Promise.resolve({ done: !1, value: this._values.shift() });
    else if (this._error)
      return Promise.reject({ done: !0, value: this._error.error });
    else if (!this._closedPromiseResolve)
      return Promise.resolve(e1);
    else
      return new Promise((J, Y) => {
        this.resolvers.push({ resolve: J, reject: Y });
      });
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}

// node_modules/apache-arrow/io/stream.mjs
class R4 extends lN {
  write(Q) {
    if ((Q = c0(Q)).byteLength > 0)
      return super.write(Q);
  }
  toString(Q = !1) {
    return Q ? AK(this.toUint8Array(!0)) : this.toUint8Array(!1).then(AK);
  }
  toUint8Array(Q = !1) {
    return Q ? QX(this._values)[0] : (() => z0(this, void 0, void 0, function* () {
      var J, Y;
      let W = [], K = 0;
      try {
        for (var z = XZ(this), N;N = yield z.next(), !N.done; ) {
          let F = N.value;
          W.push(F), K += F.byteLength;
        }
      } catch (F) {
        J = { error: F };
      } finally {
        try {
          if (N && !N.done && (Y = z.return))
            yield Y.call(z);
        } finally {
          if (J)
            throw J.error;
        }
      }
      return QX(W, K)[0];
    }))();
  }
}

class k4 {
  constructor(Q) {
    if (Q)
      this.source = new XD(y8.fromIterable(Q));
  }
  [Symbol.iterator]() {
    return this;
  }
  next(Q) {
    return this.source.next(Q);
  }
  throw(Q) {
    return this.source.throw(Q);
  }
  return(Q) {
    return this.source.return(Q);
  }
  peek(Q) {
    return this.source.peek(Q);
  }
  read(Q) {
    return this.source.read(Q);
  }
}

class SX {
  constructor(Q) {
    if (Q instanceof SX)
      this.source = Q.source;
    else if (Q instanceof R4)
      this.source = new IJ(y8.fromAsyncIterable(Q));
    else if (S5(Q))
      this.source = new IJ(y8.fromNodeStream(Q));
    else if (UK(Q))
      this.source = new IJ(y8.fromDOMStream(Q));
    else if (C5(Q))
      this.source = new IJ(y8.fromDOMStream(Q.body));
    else if (ZZ(Q))
      this.source = new IJ(y8.fromIterable(Q));
    else if (eQ(Q))
      this.source = new IJ(y8.fromAsyncIterable(Q));
    else if (LX(Q))
      this.source = new IJ(y8.fromAsyncIterable(Q));
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next(Q) {
    return this.source.next(Q);
  }
  throw(Q) {
    return this.source.throw(Q);
  }
  return(Q) {
    return this.source.return(Q);
  }
  get closed() {
    return this.source.closed;
  }
  cancel(Q) {
    return this.source.cancel(Q);
  }
  peek(Q) {
    return this.source.peek(Q);
  }
  read(Q) {
    return this.source.read(Q);
  }
}

class XD {
  constructor(Q) {
    this.source = Q;
  }
  cancel(Q) {
    this.return(Q);
  }
  peek(Q) {
    return this.next(Q, "peek").value;
  }
  read(Q) {
    return this.next(Q, "read").value;
  }
  next(Q, J = "read") {
    return this.source.next({ cmd: J, size: Q });
  }
  throw(Q) {
    return Object.create(this.source.throw && this.source.throw(Q) || e1);
  }
  return(Q) {
    return Object.create(this.source.return && this.source.return(Q) || e1);
  }
}

class IJ {
  constructor(Q) {
    this.source = Q, this._closedPromise = new Promise((J) => this._closedPromiseResolve = J);
  }
  cancel(Q) {
    return z0(this, void 0, void 0, function* () {
      yield this.return(Q);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(Q) {
    return z0(this, void 0, void 0, function* () {
      return (yield this.next(Q, "read")).value;
    });
  }
  peek(Q) {
    return z0(this, void 0, void 0, function* () {
      return (yield this.next(Q, "peek")).value;
    });
  }
  next(Q, J = "read") {
    return z0(this, void 0, void 0, function* () {
      return yield this.source.next({ cmd: J, size: Q });
    });
  }
  throw(Q) {
    return z0(this, void 0, void 0, function* () {
      let J = this.source.throw && (yield this.source.throw(Q)) || e1;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(J);
    });
  }
  return(Q) {
    return z0(this, void 0, void 0, function* () {
      let J = this.source.return && (yield this.source.return(Q)) || e1;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(J);
    });
  }
}

// node_modules/apache-arrow/io/file.mjs
class YH extends k4 {
  constructor(Q, J) {
    super();
    this.position = 0, this.buffer = c0(Q), this.size = typeof J === "undefined" ? this.buffer.byteLength : J;
  }
  readInt32(Q) {
    let { buffer: J, byteOffset: Y } = this.readAt(Q, 4);
    return new DataView(J, Y).getInt32(0, !0);
  }
  seek(Q) {
    return this.position = Math.min(Q, this.size), Q < this.size;
  }
  read(Q) {
    let { buffer: J, size: Y, position: W } = this;
    if (J && W < Y) {
      if (typeof Q !== "number")
        Q = Number.POSITIVE_INFINITY;
      return this.position = Math.min(Y, W + Math.min(Y - W, Q)), J.subarray(W, this.position);
    }
    return null;
  }
  readAt(Q, J) {
    let Y = this.buffer, W = Math.min(this.size, Q + J);
    return Y ? Y.subarray(Q, W) : new Uint8Array(J);
  }
  close() {
    this.buffer && (this.buffer = null);
  }
  throw(Q) {
    return this.close(), { done: !0, value: Q };
  }
  return(Q) {
    return this.close(), { done: !0, value: Q };
  }
}

class V$ extends SX {
  constructor(Q, J) {
    super();
    if (this.position = 0, this._handle = Q, typeof J === "number")
      this.size = J;
    else
      this._pending = (() => z0(this, void 0, void 0, function* () {
        this.size = (yield Q.stat()).size, delete this._pending;
      }))();
  }
  readInt32(Q) {
    return z0(this, void 0, void 0, function* () {
      let { buffer: J, byteOffset: Y } = yield this.readAt(Q, 4);
      return new DataView(J, Y).getInt32(0, !0);
    });
  }
  seek(Q) {
    return z0(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(Q, this.size), Q < this.size;
    });
  }
  read(Q) {
    return z0(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      let { _handle: J, size: Y, position: W } = this;
      if (J && W < Y) {
        if (typeof Q !== "number")
          Q = Number.POSITIVE_INFINITY;
        let K = W, z = 0, N = 0, F = Math.min(Y, K + Math.min(Y - K, Q)), L = new Uint8Array(Math.max(0, (this.position = F) - K));
        while ((K += N) < F && (z += N) < L.byteLength)
          ({ bytesRead: N } = yield J.read(L, z, L.byteLength - z, K));
        return L;
      }
      return null;
    });
  }
  readAt(Q, J) {
    return z0(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      let { _handle: Y, size: W } = this;
      if (Y && Q + J < W) {
        let K = Math.min(W, Q + J), z = new Uint8Array(K - Q);
        return (yield Y.read(z, 0, J, Q)).buffer;
      }
      return new Uint8Array(J);
    });
  }
  close() {
    return z0(this, void 0, void 0, function* () {
      let Q = this._handle;
      this._handle = null, Q && (yield Q.close());
    });
  }
  throw(Q) {
    return z0(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: Q };
    });
  }
  return(Q) {
    return z0(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: Q };
    });
  }
}

// node_modules/apache-arrow/util/int.mjs
var sN = {};
nY(sN, {
  Uint64: () => u1,
  Int64: () => JQ,
  Int128: () => IX,
  BaseInt64: () => qH
});
function Gq(Q) {
  if (Q < 0)
    Q = 4294967295 + Q + 1;
  return `0x${Q.toString(16)}`;
}
var zq = 8, nN = [
  1,
  10,
  100,
  1000,
  1e4,
  1e5,
  1e6,
  1e7,
  1e8
];

class qH {
  constructor(Q) {
    this.buffer = Q;
  }
  high() {
    return this.buffer[1];
  }
  low() {
    return this.buffer[0];
  }
  _times(Q) {
    let J = new Uint32Array([
      this.buffer[1] >>> 16,
      this.buffer[1] & 65535,
      this.buffer[0] >>> 16,
      this.buffer[0] & 65535
    ]), Y = new Uint32Array([
      Q.buffer[1] >>> 16,
      Q.buffer[1] & 65535,
      Q.buffer[0] >>> 16,
      Q.buffer[0] & 65535
    ]), W = J[3] * Y[3];
    this.buffer[0] = W & 65535;
    let K = W >>> 16;
    return W = J[2] * Y[3], K += W, W = J[3] * Y[2] >>> 0, K += W, this.buffer[0] += K << 16, this.buffer[1] = K >>> 0 < W ? 65536 : 0, this.buffer[1] += K >>> 16, this.buffer[1] += J[1] * Y[3] + J[2] * Y[2] + J[3] * Y[1], this.buffer[1] += J[0] * Y[3] + J[1] * Y[2] + J[2] * Y[1] + J[3] * Y[0] << 16, this;
  }
  _plus(Q) {
    let J = this.buffer[0] + Q.buffer[0] >>> 0;
    if (this.buffer[1] += Q.buffer[1], J < this.buffer[0] >>> 0)
      ++this.buffer[1];
    this.buffer[0] = J;
  }
  lessThan(Q) {
    return this.buffer[1] < Q.buffer[1] || this.buffer[1] === Q.buffer[1] && this.buffer[0] < Q.buffer[0];
  }
  equals(Q) {
    return this.buffer[1] === Q.buffer[1] && this.buffer[0] == Q.buffer[0];
  }
  greaterThan(Q) {
    return Q.lessThan(this);
  }
  hex() {
    return `${Gq(this.buffer[1])} ${Gq(this.buffer[0])}`;
  }
}

class u1 extends qH {
  times(Q) {
    return this._times(Q), this;
  }
  plus(Q) {
    return this._plus(Q), this;
  }
  static from(Q, J = new Uint32Array(2)) {
    return u1.fromString(typeof Q === "string" ? Q : Q.toString(), J);
  }
  static fromNumber(Q, J = new Uint32Array(2)) {
    return u1.fromString(Q.toString(), J);
  }
  static fromString(Q, J = new Uint32Array(2)) {
    let Y = Q.length, W = new u1(J);
    for (let K = 0;K < Y; ) {
      let z = zq < Y - K ? zq : Y - K, N = new u1(new Uint32Array([Number.parseInt(Q.slice(K, K + z), 10), 0])), F = new u1(new Uint32Array([nN[z], 0]));
      W.times(F), W.plus(N), K += z;
    }
    return W;
  }
  static convertArray(Q) {
    let J = new Uint32Array(Q.length * 2);
    for (let Y = -1, W = Q.length;++Y < W; )
      u1.from(Q[Y], new Uint32Array(J.buffer, J.byteOffset + 2 * Y * 4, 2));
    return J;
  }
  static multiply(Q, J) {
    return new u1(new Uint32Array(Q.buffer)).times(J);
  }
  static add(Q, J) {
    return new u1(new Uint32Array(Q.buffer)).plus(J);
  }
}

class JQ extends qH {
  negate() {
    if (this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[0] == 0)
      ++this.buffer[1];
    return this;
  }
  times(Q) {
    return this._times(Q), this;
  }
  plus(Q) {
    return this._plus(Q), this;
  }
  lessThan(Q) {
    let J = this.buffer[1] << 0, Y = Q.buffer[1] << 0;
    return J < Y || J === Y && this.buffer[0] < Q.buffer[0];
  }
  static from(Q, J = new Uint32Array(2)) {
    return JQ.fromString(typeof Q === "string" ? Q : Q.toString(), J);
  }
  static fromNumber(Q, J = new Uint32Array(2)) {
    return JQ.fromString(Q.toString(), J);
  }
  static fromString(Q, J = new Uint32Array(2)) {
    let Y = Q.startsWith("-"), W = Q.length, K = new JQ(J);
    for (let z = Y ? 1 : 0;z < W; ) {
      let N = zq < W - z ? zq : W - z, F = new JQ(new Uint32Array([Number.parseInt(Q.slice(z, z + N), 10), 0])), L = new JQ(new Uint32Array([nN[N], 0]));
      K.times(L), K.plus(F), z += N;
    }
    return Y ? K.negate() : K;
  }
  static convertArray(Q) {
    let J = new Uint32Array(Q.length * 2);
    for (let Y = -1, W = Q.length;++Y < W; )
      JQ.from(Q[Y], new Uint32Array(J.buffer, J.byteOffset + 2 * Y * 4, 2));
    return J;
  }
  static multiply(Q, J) {
    return new JQ(new Uint32Array(Q.buffer)).times(J);
  }
  static add(Q, J) {
    return new JQ(new Uint32Array(Q.buffer)).plus(J);
  }
}

class IX {
  constructor(Q) {
    this.buffer = Q;
  }
  high() {
    return new JQ(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new JQ(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    if (this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0)
      ++this.buffer[1];
    if (this.buffer[1] == 0)
      ++this.buffer[2];
    if (this.buffer[2] == 0)
      ++this.buffer[3];
    return this;
  }
  times(Q) {
    let J = new u1(new Uint32Array([this.buffer[3], 0])), Y = new u1(new Uint32Array([this.buffer[2], 0])), W = new u1(new Uint32Array([this.buffer[1], 0])), K = new u1(new Uint32Array([this.buffer[0], 0])), z = new u1(new Uint32Array([Q.buffer[3], 0])), N = new u1(new Uint32Array([Q.buffer[2], 0])), F = new u1(new Uint32Array([Q.buffer[1], 0])), L = new u1(new Uint32Array([Q.buffer[0], 0])), w = u1.multiply(K, L);
    this.buffer[0] = w.low();
    let D = new u1(new Uint32Array([w.high(), 0]));
    return w = u1.multiply(W, L), D.plus(w), w = u1.multiply(K, F), D.plus(w), this.buffer[1] = D.low(), this.buffer[3] = D.lessThan(w) ? 1 : 0, this.buffer[2] = D.high(), new u1(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(u1.multiply(Y, L)).plus(u1.multiply(W, F)).plus(u1.multiply(K, N)), this.buffer[3] += u1.multiply(J, L).plus(u1.multiply(Y, F)).plus(u1.multiply(W, N)).plus(u1.multiply(K, z)).low(), this;
  }
  plus(Q) {
    let J = new Uint32Array(4);
    if (J[3] = this.buffer[3] + Q.buffer[3] >>> 0, J[2] = this.buffer[2] + Q.buffer[2] >>> 0, J[1] = this.buffer[1] + Q.buffer[1] >>> 0, J[0] = this.buffer[0] + Q.buffer[0] >>> 0, J[0] < this.buffer[0] >>> 0)
      ++J[1];
    if (J[1] < this.buffer[1] >>> 0)
      ++J[2];
    if (J[2] < this.buffer[2] >>> 0)
      ++J[3];
    return this.buffer[3] = J[3], this.buffer[2] = J[2], this.buffer[1] = J[1], this.buffer[0] = J[0], this;
  }
  hex() {
    return `${Gq(this.buffer[3])} ${Gq(this.buffer[2])} ${Gq(this.buffer[1])} ${Gq(this.buffer[0])}`;
  }
  static multiply(Q, J) {
    return new IX(new Uint32Array(Q.buffer)).times(J);
  }
  static add(Q, J) {
    return new IX(new Uint32Array(Q.buffer)).plus(J);
  }
  static from(Q, J = new Uint32Array(4)) {
    return IX.fromString(typeof Q === "string" ? Q : Q.toString(), J);
  }
  static fromNumber(Q, J = new Uint32Array(4)) {
    return IX.fromString(Q.toString(), J);
  }
  static fromString(Q, J = new Uint32Array(4)) {
    let Y = Q.startsWith("-"), W = Q.length, K = new IX(J);
    for (let z = Y ? 1 : 0;z < W; ) {
      let N = zq < W - z ? zq : W - z, F = new IX(new Uint32Array([Number.parseInt(Q.slice(z, z + N), 10), 0, 0, 0])), L = new IX(new Uint32Array([nN[N], 0, 0, 0]));
      K.times(L), K.plus(F), z += N;
    }
    return Y ? K.negate() : K;
  }
  static convertArray(Q) {
    let J = new Uint32Array(Q.length * 4);
    for (let Y = -1, W = Q.length;++Y < W; )
      IX.from(Q[Y], new Uint32Array(J.buffer, J.byteOffset + 16 * Y, 4));
    return J;
  }
}

// node_modules/apache-arrow/visitor/vectorloader.mjs
class WH extends T0 {
  constructor(Q, J, Y, W) {
    super();
    this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = Q, this.nodes = J, this.buffers = Y, this.dictionaries = W;
  }
  visit(Q) {
    return super.visit(Q instanceof Z1 ? Q.type : Q);
  }
  visitNull(Q, { length: J } = this.nextFieldNode()) {
    return a0({ type: Q, length: J });
  }
  visitBool(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), data: this.readData(Q) });
  }
  visitInt(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), data: this.readData(Q) });
  }
  visitFloat(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), data: this.readData(Q) });
  }
  visitUtf8(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), valueOffsets: this.readOffsets(Q), data: this.readData(Q) });
  }
  visitBinary(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), valueOffsets: this.readOffsets(Q), data: this.readData(Q) });
  }
  visitFixedSizeBinary(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), data: this.readData(Q) });
  }
  visitDate(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), data: this.readData(Q) });
  }
  visitTimestamp(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), data: this.readData(Q) });
  }
  visitTime(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), data: this.readData(Q) });
  }
  visitDecimal(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), data: this.readData(Q) });
  }
  visitList(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), valueOffsets: this.readOffsets(Q), child: this.visit(Q.children[0]) });
  }
  visitStruct(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), children: this.visitMany(Q.children) });
  }
  visitUnion(Q) {
    return Q.mode === O6.Sparse ? this.visitSparseUnion(Q) : this.visitDenseUnion(Q);
  }
  visitDenseUnion(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), typeIds: this.readTypeIds(Q), valueOffsets: this.readOffsets(Q), children: this.visitMany(Q.children) });
  }
  visitSparseUnion(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), typeIds: this.readTypeIds(Q), children: this.visitMany(Q.children) });
  }
  visitDictionary(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), data: this.readData(Q.indices), dictionary: this.readDictionary(Q) });
  }
  visitInterval(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), data: this.readData(Q) });
  }
  visitFixedSizeList(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), child: this.visit(Q.children[0]) });
  }
  visitMap(Q, { length: J, nullCount: Y } = this.nextFieldNode()) {
    return a0({ type: Q, length: J, nullCount: Y, nullBitmap: this.readNullBitmap(Q, Y), valueOffsets: this.readOffsets(Q), child: this.visit(Q.children[0]) });
  }
  nextFieldNode() {
    return this.nodes[++this.nodesIndex];
  }
  nextBufferRange() {
    return this.buffers[++this.buffersIndex];
  }
  readNullBitmap(Q, J, Y = this.nextBufferRange()) {
    return J > 0 && this.readData(Q, Y) || new Uint8Array(0);
  }
  readOffsets(Q, J) {
    return this.readData(Q, J);
  }
  readTypeIds(Q, J) {
    return this.readData(Q, J);
  }
  readData(Q, { length: J, offset: Y } = this.nextBufferRange()) {
    return this.bytes.subarray(Y, Y + J);
  }
  readDictionary(Q) {
    return this.dictionaries.get(Q.id);
  }
}

class oN extends WH {
  constructor(Q, J, Y, W) {
    super(new Uint8Array(0), J, Y, W);
    this.sources = Q;
  }
  readNullBitmap(Q, J, { offset: Y } = this.nextBufferRange()) {
    return J <= 0 ? new Uint8Array(0) : k$(this.sources[Y]);
  }
  readOffsets(Q, { offset: J } = this.nextBufferRange()) {
    return q1(Uint8Array, q1(Int32Array, this.sources[J]));
  }
  readTypeIds(Q, { offset: J } = this.nextBufferRange()) {
    return q1(Uint8Array, q1(Q.ArrayType, this.sources[J]));
  }
  readData(Q, { offset: J } = this.nextBufferRange()) {
    let { sources: Y } = this;
    if (R0.isTimestamp(Q))
      return q1(Uint8Array, JQ.convertArray(Y[J]));
    else if ((R0.isInt(Q) || R0.isTime(Q)) && Q.bitWidth === 64)
      return q1(Uint8Array, JQ.convertArray(Y[J]));
    else if (R0.isDate(Q) && Q.unit === f8.MILLISECOND)
      return q1(Uint8Array, JQ.convertArray(Y[J]));
    else if (R0.isDecimal(Q))
      return q1(Uint8Array, IX.convertArray(Y[J]));
    else if (R0.isBinary(Q) || R0.isFixedSizeBinary(Q))
      return Ch(Y[J]);
    else if (R0.isBool(Q))
      return k$(Y[J]);
    else if (R0.isUtf8(Q))
      return qJ(Y[J].join(""));
    return q1(Uint8Array, q1(Q.ArrayType, Y[J].map((W) => +W)));
  }
}
function Ch(Q) {
  let J = Q.join(""), Y = new Uint8Array(J.length / 2);
  for (let W = 0;W < J.length; W += 2)
    Y[W >> 1] = Number.parseInt(J.slice(W, W + 2), 16);
  return Y;
}

// node_modules/apache-arrow/builder/binary.mjs
class vK extends M4 {
  constructor(Q) {
    super(Q);
    this._values = new B$(new Uint8Array(0));
  }
  get byteLength() {
    let Q = this._pendingLength + this.length * 4;
    return this._offsets && (Q += this._offsets.byteLength), this._values && (Q += this._values.byteLength), this._nulls && (Q += this._nulls.byteLength), Q;
  }
  setValue(Q, J) {
    return super.setValue(Q, c0(J));
  }
  _flushPending(Q, J) {
    let Y = this._offsets, W = this._values.reserve(J).buffer, K = 0;
    for (let [z, N] of Q)
      if (N === void 0)
        Y.set(z, 0);
      else {
        let F = N.length;
        W.set(N, K), Y.set(z, F), K += F;
      }
  }
}

// node_modules/apache-arrow/builder/bool.mjs
class aN extends H6 {
  constructor(Q) {
    super(Q);
    this._values = new BK;
  }
  setValue(Q, J) {
    this._values.set(Q, +J);
  }
}

// node_modules/apache-arrow/builder/date.mjs
class Nq extends b8 {
}
Nq.prototype._setValue = xN;

class KH extends Nq {
}
KH.prototype._setValue = g5;

class HH extends Nq {
}
HH.prototype._setValue = x5;

// node_modules/apache-arrow/builder/decimal.mjs
class GH extends b8 {
}
GH.prototype._setValue = yN;

// node_modules/apache-arrow/builder/dictionary.mjs
class rN extends H6 {
  constructor({ type: Q, nullValues: J, dictionaryHashFunction: Y }) {
    super({ type: new wX(Q.dictionary, Q.indices, Q.id, Q.isOrdered) });
    if (this._nulls = null, this._dictionaryOffset = 0, this._keysToIndices = Object.create(null), this.indices = S$({ type: this.type.indices, nullValues: J }), this.dictionary = S$({ type: this.type.dictionary, nullValues: null }), typeof Y === "function")
      this.valueToKey = Y;
  }
  get values() {
    return this.indices.values;
  }
  get nullCount() {
    return this.indices.nullCount;
  }
  get nullBitmap() {
    return this.indices.nullBitmap;
  }
  get byteLength() {
    return this.indices.byteLength + this.dictionary.byteLength;
  }
  get reservedLength() {
    return this.indices.reservedLength + this.dictionary.reservedLength;
  }
  get reservedByteLength() {
    return this.indices.reservedByteLength + this.dictionary.reservedByteLength;
  }
  isValid(Q) {
    return this.indices.isValid(Q);
  }
  setValid(Q, J) {
    let Y = this.indices;
    return J = Y.setValid(Q, J), this.length = Y.length, J;
  }
  setValue(Q, J) {
    let Y = this._keysToIndices, W = this.valueToKey(J), K = Y[W];
    if (K === void 0)
      Y[W] = K = this._dictionaryOffset + this.dictionary.append(J).length - 1;
    return this.indices.setValue(Q, K);
  }
  flush() {
    let Q = this.type, J = this._dictionary, Y = this.dictionary.toVector(), W = this.indices.flush().clone(Q);
    return W.dictionary = J ? J.concat(Y) : Y, this.finished || (this._dictionaryOffset += Y.length), this._dictionary = W.dictionary, this.clear(), W;
  }
  finish() {
    return this.indices.finish(), this.dictionary.finish(), this._dictionaryOffset = 0, this._keysToIndices = Object.create(null), super.finish();
  }
  clear() {
    return this.indices.clear(), this.dictionary.clear(), super.clear();
  }
  valueToKey(Q) {
    return typeof Q === "string" ? Q : `${Q}`;
  }
}

// node_modules/apache-arrow/builder/fixedsizebinary.mjs
class zH extends b8 {
}
zH.prototype._setValue = gN;

// node_modules/apache-arrow/builder/fixedsizelist.mjs
class iN extends H6 {
  setValue(Q, J) {
    let [Y] = this.children, W = Q * this.stride;
    for (let K = -1, z = J.length;++K < z; )
      Y.set(W + K, J[K]);
  }
  addChild(Q, J = "0") {
    if (this.numChildren > 0)
      throw new Error("FixedSizeListBuilder can only have one child.");
    let Y = this.children.push(Q);
    return this.type = new mZ(this.type.listSize, new Z1(J, Q.type, !0)), Y;
  }
}

// node_modules/apache-arrow/builder/float.mjs
class Eq extends b8 {
  setValue(Q, J) {
    this._values.set(Q, J);
  }
}

class tN extends Eq {
  setValue(Q, J) {
    super.setValue(Q, MK(J));
  }
}

class eN extends Eq {
}

class QE extends Eq {
}

// node_modules/apache-arrow/builder/interval.mjs
class Fq extends b8 {
}
Fq.prototype._setValue = fN;

class NH extends Fq {
}
NH.prototype._setValue = p5;

class EH extends Fq {
}
EH.prototype._setValue = d5;

// node_modules/apache-arrow/builder/int.mjs
class KZ extends b8 {
  setValue(Q, J) {
    this._values.set(Q, J);
  }
}

class XE extends KZ {
}

class ZE extends KZ {
}

class JE extends KZ {
}

class $E extends KZ {
}

class YE extends KZ {
}

class qE extends KZ {
}

class WE extends KZ {
}

class KE extends KZ {
}

// node_modules/apache-arrow/builder/list.mjs
class HE extends M4 {
  constructor(Q) {
    super(Q);
    this._offsets = new CK;
  }
  addChild(Q, J = "0") {
    if (this.numChildren > 0)
      throw new Error("ListBuilder can only have one child.");
    return this.children[this.numChildren] = Q, this.type = new yZ(new Z1(J, Q.type, !0)), this.numChildren - 1;
  }
  _flushPending(Q) {
    let J = this._offsets, [Y] = this.children;
    for (let [W, K] of Q)
      if (typeof K === "undefined")
        J.set(W, 0);
      else {
        let z = K.length, N = J.set(W, z).buffer[W];
        for (let F = -1;++F < z; )
          Y.set(N + F, K[F]);
      }
  }
}

// node_modules/apache-arrow/builder/map.mjs
class GE extends M4 {
  set(Q, J) {
    return super.set(Q, J);
  }
  setValue(Q, J) {
    let Y = J instanceof Map ? J : new Map(Object.entries(J)), W = this._pending || (this._pending = /* @__PURE__ */ new Map), K = W.get(Q);
    K && (this._pendingLength -= K.size), this._pendingLength += Y.size, W.set(Q, Y);
  }
  addChild(Q, J = `${this.numChildren}`) {
    if (this.numChildren > 0)
      throw new Error("ListBuilder can only have one child.");
    return this.children[this.numChildren] = Q, this.type = new bZ(new Z1(J, Q.type, !0), this.type.keysSorted), this.numChildren - 1;
  }
  _flushPending(Q) {
    let J = this._offsets, [Y] = this.children;
    for (let [W, K] of Q)
      if (K === void 0)
        J.set(W, 0);
      else {
        let { [W]: z, [W + 1]: N } = J.set(W, K.size).buffer;
        for (let F of K.entries())
          if (Y.set(z, F), ++z >= N)
            break;
      }
  }
}

// node_modules/apache-arrow/builder/null.mjs
class zE extends H6 {
  setValue(Q, J) {}
  setValid(Q, J) {
    return this.length = Math.max(Q + 1, this.length), J;
  }
}

// node_modules/apache-arrow/builder/struct.mjs
class NE extends H6 {
  setValue(Q, J) {
    let { children: Y, type: W } = this;
    switch (Array.isArray(J) || J.constructor) {
      case !0:
        return W.children.forEach((K, z) => Y[z].set(Q, J[z]));
      case Map:
        return W.children.forEach((K, z) => Y[z].set(Q, J.get(K.name)));
      default:
        return W.children.forEach((K, z) => Y[z].set(Q, J[K.name]));
    }
  }
  setValid(Q, J) {
    if (!super.setValid(Q, J))
      this.children.forEach((Y) => Y.setValid(Q, J));
    return J;
  }
  addChild(Q, J = `${this.numChildren}`) {
    let Y = this.children.push(Q);
    return this.type = new J6([...this.type.children, new Z1(J, Q.type, !0)]), Y;
  }
}

// node_modules/apache-arrow/builder/timestamp.mjs
class _J extends b8 {
}
_J.prototype._setValue = vN;

class FH extends _J {
}
FH.prototype._setValue = v5;

class PH extends _J {
}
PH.prototype._setValue = h5;

class AH extends _J {
}
AH.prototype._setValue = y5;

class UH extends _J {
}
UH.prototype._setValue = f5;

// node_modules/apache-arrow/builder/time.mjs
class TJ extends b8 {
}
TJ.prototype._setValue = hN;

class LH extends TJ {
}
LH.prototype._setValue = m5;

class OH extends TJ {
}
OH.prototype._setValue = b5;

class wH extends TJ {
}
wH.prototype._setValue = u5;

class MH extends TJ {
}
MH.prototype._setValue = c5;

// node_modules/apache-arrow/builder/union.mjs
class hK extends H6 {
  constructor(Q) {
    super(Q);
    if (this._typeIds = new OJ(new Int8Array(0), 1), typeof Q.valueToChildTypeId === "function")
      this._valueToChildTypeId = Q.valueToChildTypeId;
  }
  get typeIdToChildIndex() {
    return this.type.typeIdToChildIndex;
  }
  append(Q, J) {
    return this.set(this.length, Q, J);
  }
  set(Q, J, Y) {
    if (Y === void 0)
      Y = this._valueToChildTypeId(this, J, Q);
    if (this.setValid(Q, this.isValid(J)))
      this.setValue(Q, J, Y);
    return this;
  }
  setValue(Q, J, Y) {
    this._typeIds.set(Q, Y);
    let W = this.type.typeIdToChildIndex[Y], K = this.children[W];
    K === null || K === void 0 || K.set(Q, J);
  }
  addChild(Q, J = `${this.children.length}`) {
    let Y = this.children.push(Q), { type: { children: W, mode: K, typeIds: z } } = this, N = [...W, new Z1(J, Q.type)];
    return this.type = new fZ(K, [...z, Y], N), Y;
  }
  _valueToChildTypeId(Q, J, Y) {
    throw new Error("Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.");
  }
}

class EE extends hK {
}

class FE extends hK {
  constructor(Q) {
    super(Q);
    this._offsets = new OJ(new Int32Array(0));
  }
  setValue(Q, J, Y) {
    let W = this._typeIds.set(Q, Y).buffer[Q], K = this.getChildAt(this.type.typeIdToChildIndex[W]), z = this._offsets.set(Q, K.length).buffer[Q];
    K === null || K === void 0 || K.set(z, J);
  }
}

// node_modules/apache-arrow/builder/utf8.mjs
class DH extends M4 {
  constructor(Q) {
    super(Q);
    this._values = new B$(new Uint8Array(0));
  }
  get byteLength() {
    let Q = this._pendingLength + this.length * 4;
    return this._offsets && (Q += this._offsets.byteLength), this._values && (Q += this._values.byteLength), this._nulls && (Q += this._nulls.byteLength), Q;
  }
  setValue(Q, J) {
    return super.setValue(Q, qJ(J));
  }
  _flushPending(Q, J) {}
}
DH.prototype._flushPending = vK.prototype._flushPending;

// node_modules/apache-arrow/visitor/builderctor.mjs
class ZD extends T0 {
  visitNull() {
    return zE;
  }
  visitBool() {
    return aN;
  }
  visitInt() {
    return KZ;
  }
  visitInt8() {
    return XE;
  }
  visitInt16() {
    return ZE;
  }
  visitInt32() {
    return JE;
  }
  visitInt64() {
    return $E;
  }
  visitUint8() {
    return YE;
  }
  visitUint16() {
    return qE;
  }
  visitUint32() {
    return WE;
  }
  visitUint64() {
    return KE;
  }
  visitFloat() {
    return Eq;
  }
  visitFloat16() {
    return tN;
  }
  visitFloat32() {
    return eN;
  }
  visitFloat64() {
    return QE;
  }
  visitUtf8() {
    return DH;
  }
  visitBinary() {
    return vK;
  }
  visitFixedSizeBinary() {
    return zH;
  }
  visitDate() {
    return Nq;
  }
  visitDateDay() {
    return KH;
  }
  visitDateMillisecond() {
    return HH;
  }
  visitTimestamp() {
    return _J;
  }
  visitTimestampSecond() {
    return FH;
  }
  visitTimestampMillisecond() {
    return PH;
  }
  visitTimestampMicrosecond() {
    return AH;
  }
  visitTimestampNanosecond() {
    return UH;
  }
  visitTime() {
    return TJ;
  }
  visitTimeSecond() {
    return LH;
  }
  visitTimeMillisecond() {
    return OH;
  }
  visitTimeMicrosecond() {
    return wH;
  }
  visitTimeNanosecond() {
    return MH;
  }
  visitDecimal() {
    return GH;
  }
  visitList() {
    return HE;
  }
  visitStruct() {
    return NE;
  }
  visitUnion() {
    return hK;
  }
  visitDenseUnion() {
    return FE;
  }
  visitSparseUnion() {
    return EE;
  }
  visitDictionary() {
    return rN;
  }
  visitInterval() {
    return Fq;
  }
  visitIntervalDayTime() {
    return NH;
  }
  visitIntervalYearMonth() {
    return EH;
  }
  visitFixedSizeList() {
    return iN;
  }
  visitMap() {
    return GE;
  }
}
var JD = new ZD;

// node_modules/apache-arrow/visitor/typecomparator.mjs
class n0 extends T0 {
  compareSchemas(Q, J) {
    return Q === J || J instanceof Q.constructor && this.compareManyFields(Q.fields, J.fields);
  }
  compareManyFields(Q, J) {
    return Q === J || Array.isArray(Q) && Array.isArray(J) && Q.length === J.length && Q.every((Y, W) => this.compareFields(Y, J[W]));
  }
  compareFields(Q, J) {
    return Q === J || J instanceof Q.constructor && Q.name === J.name && Q.nullable === J.nullable && this.visit(Q.type, J.type);
  }
}
function fQ(Q, J) {
  return J instanceof Q.constructor;
}
function yK(Q, J) {
  return Q === J || fQ(Q, J);
}
function j4(Q, J) {
  return Q === J || fQ(Q, J) && Q.bitWidth === J.bitWidth && Q.isSigned === J.isSigned;
}
function RH(Q, J) {
  return Q === J || fQ(Q, J) && Q.precision === J.precision;
}
function Vh(Q, J) {
  return Q === J || fQ(Q, J) && Q.byteWidth === J.byteWidth;
}
function PE(Q, J) {
  return Q === J || fQ(Q, J) && Q.unit === J.unit;
}
function fK(Q, J) {
  return Q === J || fQ(Q, J) && Q.unit === J.unit && Q.timezone === J.timezone;
}
function mK(Q, J) {
  return Q === J || fQ(Q, J) && Q.unit === J.unit && Q.bitWidth === J.bitWidth;
}
function Sh(Q, J) {
  return Q === J || fQ(Q, J) && Q.children.length === J.children.length && cZ.compareManyFields(Q.children, J.children);
}
function Ih(Q, J) {
  return Q === J || fQ(Q, J) && Q.children.length === J.children.length && cZ.compareManyFields(Q.children, J.children);
}
function AE(Q, J) {
  return Q === J || fQ(Q, J) && Q.mode === J.mode && Q.typeIds.every((Y, W) => Y === J.typeIds[W]) && cZ.compareManyFields(Q.children, J.children);
}
function _h(Q, J) {
  return Q === J || fQ(Q, J) && Q.id === J.id && Q.isOrdered === J.isOrdered && cZ.visit(Q.indices, J.indices) && cZ.visit(Q.dictionary, J.dictionary);
}
function UE(Q, J) {
  return Q === J || fQ(Q, J) && Q.unit === J.unit;
}
function Th(Q, J) {
  return Q === J || fQ(Q, J) && Q.listSize === J.listSize && Q.children.length === J.children.length && cZ.compareManyFields(Q.children, J.children);
}
function gh(Q, J) {
  return Q === J || fQ(Q, J) && Q.keysSorted === J.keysSorted && Q.children.length === J.children.length && cZ.compareManyFields(Q.children, J.children);
}
n0.prototype.visitNull = yK;
n0.prototype.visitBool = yK;
n0.prototype.visitInt = j4;
n0.prototype.visitInt8 = j4;
n0.prototype.visitInt16 = j4;
n0.prototype.visitInt32 = j4;
n0.prototype.visitInt64 = j4;
n0.prototype.visitUint8 = j4;
n0.prototype.visitUint16 = j4;
n0.prototype.visitUint32 = j4;
n0.prototype.visitUint64 = j4;
n0.prototype.visitFloat = RH;
n0.prototype.visitFloat16 = RH;
n0.prototype.visitFloat32 = RH;
n0.prototype.visitFloat64 = RH;
n0.prototype.visitUtf8 = yK;
n0.prototype.visitBinary = yK;
n0.prototype.visitFixedSizeBinary = Vh;
n0.prototype.visitDate = PE;
n0.prototype.visitDateDay = PE;
n0.prototype.visitDateMillisecond = PE;
n0.prototype.visitTimestamp = fK;
n0.prototype.visitTimestampSecond = fK;
n0.prototype.visitTimestampMillisecond = fK;
n0.prototype.visitTimestampMicrosecond = fK;
n0.prototype.visitTimestampNanosecond = fK;
n0.prototype.visitTime = mK;
n0.prototype.visitTimeSecond = mK;
n0.prototype.visitTimeMillisecond = mK;
n0.prototype.visitTimeMicrosecond = mK;
n0.prototype.visitTimeNanosecond = mK;
n0.prototype.visitDecimal = yK;
n0.prototype.visitList = Sh;
n0.prototype.visitStruct = Ih;
n0.prototype.visitUnion = AE;
n0.prototype.visitDenseUnion = AE;
n0.prototype.visitSparseUnion = AE;
n0.prototype.visitDictionary = _h;
n0.prototype.visitInterval = UE;
n0.prototype.visitIntervalDayTime = UE;
n0.prototype.visitIntervalYearMonth = UE;
n0.prototype.visitFixedSizeList = Th;
n0.prototype.visitMap = gh;
var cZ = new n0;
function I$(Q, J) {
  return cZ.compareSchemas(Q, J);
}
function $D(Q, J) {
  return cZ.compareFields(Q, J);
}
function YD(Q, J) {
  return cZ.visit(Q, J);
}

// node_modules/apache-arrow/factories.mjs
function S$(Q) {
  let J = Q.type, Y = new (JD.getVisitFn(J)())(Q);
  if (J.children && J.children.length > 0) {
    let W = Q.children || [], K = { nullValues: Q.nullValues }, z = Array.isArray(W) ? (N, F) => W[F] || K : ({ name: N }) => W[N] || K;
    for (let [N, F] of J.children.entries()) {
      let { type: L } = F, w = z(F, N);
      Y.children.push(S$(Object.assign(Object.assign({}, w), { type: L })));
    }
  }
  return Y;
}

// node_modules/apache-arrow/util/recordbatch.mjs
function kH(Q, J) {
  return xh(Q, J.map((Y) => Y.data.concat()));
}
function xh(Q, J) {
  let Y = [...Q.fields], W = [], K = { numBatches: J.reduce((k, I) => Math.max(k, I.length), 0) }, z = 0, N = 0, F = -1, L = J.length, w, D = [];
  while (K.numBatches-- > 0) {
    for (N = Number.POSITIVE_INFINITY, F = -1;++F < L; )
      D[F] = w = J[F].shift(), N = Math.min(N, w ? w.length : N);
    if (Number.isFinite(N)) {
      if (D = vh(Y, N, D, J, K), N > 0)
        W[z++] = a0({
          type: new J6(Y),
          length: N,
          nullCount: 0,
          children: D.slice()
        });
    }
  }
  return [
    Q = Q.assign(Y),
    W.map((k) => new Y6(Q, k))
  ];
}
function vh(Q, J, Y, W, K) {
  var z;
  let N = (J + 63 & -64) >> 3;
  for (let F = -1, L = W.length;++F < L; ) {
    let w = Y[F], D = w === null || w === void 0 ? void 0 : w.length;
    if (D >= J)
      if (D === J)
        Y[F] = w;
      else
        Y[F] = w.slice(0, J), K.numBatches = Math.max(K.numBatches, W[F].unshift(w.slice(J, D - J)));
    else {
      let k = Q[F];
      Q[F] = k.clone({ nullable: !0 }), Y[F] = (z = w === null || w === void 0 ? void 0 : w._changeLengthAndBackfillNullBitmap(J)) !== null && z !== void 0 ? z : a0({
        type: k.type,
        length: J,
        nullCount: J,
        nullBitmap: new Uint8Array(N)
      });
    }
  }
  return Y;
}

// node_modules/apache-arrow/table.mjs
var qD;

class X8 {
  constructor(...Q) {
    var J, Y;
    if (Q.length === 0)
      return this.batches = [], this.schema = new A1([]), this._offsets = [0], this;
    let W, K;
    if (Q[0] instanceof A1)
      W = Q.shift();
    if (Q[Q.length - 1] instanceof Uint32Array)
      K = Q.pop();
    let z = (F) => {
      if (F) {
        if (F instanceof Y6)
          return [F];
        else if (F instanceof X8)
          return F.batches;
        else if (F instanceof b1) {
          if (F.type instanceof J6)
            return [new Y6(new A1(F.type.children), F)];
        } else if (Array.isArray(F))
          return F.flatMap((L) => z(L));
        else if (typeof F[Symbol.iterator] === "function")
          return [...F].flatMap((L) => z(L));
        else if (typeof F === "object") {
          let L = Object.keys(F), w = L.map((I) => new t0([F[I]])), D = new A1(L.map((I, h) => new Z1(String(I), w[h].type))), [, k] = kH(D, w);
          return k.length === 0 ? [new Y6(F)] : k;
        }
      }
      return [];
    }, N = Q.flatMap((F) => z(F));
    if (W = (Y = W !== null && W !== void 0 ? W : (J = N[0]) === null || J === void 0 ? void 0 : J.schema) !== null && Y !== void 0 ? Y : new A1([]), !(W instanceof A1))
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (let F of N) {
      if (!(F instanceof Y6))
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!I$(W, F.schema))
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = W, this.batches = N, this._offsets = K !== null && K !== void 0 ? K : r5(this.data);
  }
  get data() {
    return this.batches.map(({ data: Q }) => Q);
  }
  get numCols() {
    return this.schema.fields.length;
  }
  get numRows() {
    return this.data.reduce((Q, J) => Q + J.length, 0);
  }
  get nullCount() {
    if (this._nullCount === -1)
      this._nullCount = a5(this.data);
    return this._nullCount;
  }
  isValid(Q) {
    return !1;
  }
  get(Q) {
    return null;
  }
  set(Q, J) {
    return;
  }
  indexOf(Q, J) {
    return -1;
  }
  getByteLength(Q) {
    return 0;
  }
  [Symbol.iterator]() {
    if (this.batches.length > 0)
      return qq.visit(new t0(this.data));
    return new Array(0)[Symbol.iterator]();
  }
  toArray() {
    return [...this];
  }
  toString() {
    return `[
  ${this.toArray().join(`,
  `)}
]`;
  }
  concat(...Q) {
    let J = this.schema, Y = this.data.concat(Q.flatMap(({ data: W }) => W));
    return new X8(J, Y.map((W) => new Y6(J, W)));
  }
  slice(Q, J) {
    let Y = this.schema;
    [Q, J] = DK({ length: this.numRows }, Q, J);
    let W = i5(this.data, this._offsets, Q, J);
    return new X8(Y, W.map((K) => new Y6(Y, K)));
  }
  getChild(Q) {
    return this.getChildAt(this.schema.fields.findIndex((J) => J.name === Q));
  }
  getChildAt(Q) {
    if (Q > -1 && Q < this.schema.fields.length) {
      let J = this.data.map((Y) => Y.children[Q]);
      if (J.length === 0) {
        let { type: Y } = this.schema.fields[Q], W = a0({ type: Y, length: 0, nullCount: 0 });
        J.push(W._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new t0(J);
    }
    return null;
  }
  setChild(Q, J) {
    var Y;
    return this.setChildAt((Y = this.schema.fields) === null || Y === void 0 ? void 0 : Y.findIndex((W) => W.name === Q), J);
  }
  setChildAt(Q, J) {
    let Y = this.schema, W = [...this.batches];
    if (Q > -1 && Q < this.numCols) {
      if (!J)
        J = new t0([a0({ type: new xQ, length: this.numRows })]);
      let K = Y.fields.slice(), z = K[Q].clone({ type: J.type }), N = this.schema.fields.map((F, L) => this.getChildAt(L));
      [K[Q], N[Q]] = [z, J], [Y, W] = kH(Y, N);
    }
    return new X8(Y, W);
  }
  select(Q) {
    let J = this.schema.fields.reduce((Y, W, K) => Y.set(W.name, K), /* @__PURE__ */ new Map);
    return this.selectAt(Q.map((Y) => J.get(Y)).filter((Y) => Y > -1));
  }
  selectAt(Q) {
    let J = this.schema.selectAt(Q), Y = this.batches.map((W) => W.selectAt(Q));
    return new X8(J, Y);
  }
  assign(Q) {
    let J = this.schema.fields, [Y, W] = Q.schema.fields.reduce((N, F, L) => {
      let [w, D] = N, k = J.findIndex((I) => I.name === F.name);
      return ~k ? D[k] = L : w.push(L), N;
    }, [[], []]), K = this.schema.assign(Q.schema), z = [
      ...J.map((N, F) => [F, W[F]]).map(([N, F]) => F === void 0 ? this.getChildAt(N) : Q.getChildAt(F)),
      ...Y.map((N) => Q.getChildAt(N))
    ].filter(Boolean);
    return new X8(...kH(K, z));
  }
}
qD = Symbol.toStringTag;
X8[qD] = ((Q) => {
  return Q.schema = null, Q.batches = [], Q._offsets = new Uint32Array([0]), Q._nullCount = -1, Q[Symbol.isConcatSpreadable] = !0, Q.isValid = LJ(jK), Q.get = LJ(b6.getVisitFn(S.Struct)), Q.set = t5(m8.getVisitFn(S.Struct)), Q.indexOf = e5(j$.getVisitFn(S.Struct)), Q.getByteLength = LJ(JX.getVisitFn(S.Struct)), "Table";
})(X8.prototype);

// node_modules/apache-arrow/recordbatch.mjs
var KD;

class Y6 {
  constructor(...Q) {
    switch (Q.length) {
      case 2: {
        if ([this.schema] = Q, !(this.schema instanceof A1))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = a0({
            nullCount: 0,
            type: new J6(this.schema.fields),
            children: this.schema.fields.map((J) => a0({ type: J.type, nullCount: 0 }))
          })
        ] = Q, !(this.data instanceof b1))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = WD(this.schema, this.data.children);
        break;
      }
      case 1: {
        let [J] = Q, { fields: Y, children: W, length: K } = Object.keys(J).reduce((F, L, w) => {
          return F.children[w] = J[L], F.length = Math.max(F.length, J[L].length), F.fields[w] = Z1.new({ name: L, type: J[L].type, nullable: !0 }), F;
        }, {
          length: 0,
          fields: new Array,
          children: new Array
        }), z = new A1(Y), N = a0({ type: new J6(Y), length: K, children: W, nullCount: 0 });
        [this.schema, this.data] = WD(z, N.children, K);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = HD(this.schema.fields, this.data.children));
  }
  get numCols() {
    return this.schema.fields.length;
  }
  get numRows() {
    return this.data.length;
  }
  get nullCount() {
    return this.data.nullCount;
  }
  isValid(Q) {
    return this.data.getValid(Q);
  }
  get(Q) {
    return b6.visit(this.data, Q);
  }
  set(Q, J) {
    return m8.visit(this.data, Q, J);
  }
  indexOf(Q, J) {
    return j$.visit(this.data, Q, J);
  }
  getByteLength(Q) {
    return JX.visit(this.data, Q);
  }
  [Symbol.iterator]() {
    return qq.visit(new t0([this.data]));
  }
  toArray() {
    return [...this];
  }
  concat(...Q) {
    return new X8(this.schema, [this, ...Q]);
  }
  slice(Q, J) {
    let [Y] = new t0([this.data]).slice(Q, J).data;
    return new Y6(this.schema, Y);
  }
  getChild(Q) {
    var J;
    return this.getChildAt((J = this.schema.fields) === null || J === void 0 ? void 0 : J.findIndex((Y) => Y.name === Q));
  }
  getChildAt(Q) {
    if (Q > -1 && Q < this.schema.fields.length)
      return new t0([this.data.children[Q]]);
    return null;
  }
  setChild(Q, J) {
    var Y;
    return this.setChildAt((Y = this.schema.fields) === null || Y === void 0 ? void 0 : Y.findIndex((W) => W.name === Q), J);
  }
  setChildAt(Q, J) {
    let Y = this.schema, W = this.data;
    if (Q > -1 && Q < this.numCols) {
      if (!J)
        J = new t0([a0({ type: new xQ, length: this.numRows })]);
      let K = Y.fields.slice(), z = W.children.slice(), N = K[Q].clone({ type: J.type });
      [K[Q], z[Q]] = [N, J.data[0]], Y = new A1(K, new Map(this.schema.metadata)), W = a0({ type: new J6(K), children: z });
    }
    return new Y6(Y, W);
  }
  select(Q) {
    let J = this.schema.select(Q), Y = new J6(J.fields), W = [];
    for (let K of Q) {
      let z = this.schema.fields.findIndex((N) => N.name === K);
      if (~z)
        W[z] = this.data.children[z];
    }
    return new Y6(J, a0({ type: Y, length: this.numRows, children: W }));
  }
  selectAt(Q) {
    let J = this.schema.selectAt(Q), Y = Q.map((K) => this.data.children[K]).filter(Boolean), W = a0({ type: new J6(J.fields), length: this.numRows, children: Y });
    return new Y6(J, W);
  }
}
KD = Symbol.toStringTag;
Y6[KD] = ((Q) => {
  return Q._nullCount = -1, Q[Symbol.isConcatSpreadable] = !0, "RecordBatch";
})(Y6.prototype);
function WD(Q, J, Y = J.reduce((W, K) => Math.max(W, K.length), 0)) {
  var W;
  let K = [...Q.fields], z = [...J], N = (Y + 63 & -64) >> 3;
  for (let [F, L] of Q.fields.entries()) {
    let w = J[F];
    if (!w || w.length !== Y)
      K[F] = L.clone({ nullable: !0 }), z[F] = (W = w === null || w === void 0 ? void 0 : w._changeLengthAndBackfillNullBitmap(Y)) !== null && W !== void 0 ? W : a0({
        type: L.type,
        length: Y,
        nullCount: Y,
        nullBitmap: new Uint8Array(N)
      });
  }
  return [
    Q.assign(K),
    a0({ type: new J6(K), length: Y, children: z })
  ];
}
function HD(Q, J, Y = /* @__PURE__ */ new Map) {
  for (let W = -1, K = Q.length;++W < K; ) {
    let N = Q[W].type, F = J[W];
    if (R0.isDictionary(N)) {
      if (!Y.has(N.id)) {
        if (F.dictionary)
          Y.set(N.id, F.dictionary);
      } else if (Y.get(N.id) !== F.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    if (N.children && N.children.length > 0)
      HD(N.children, F.children, Y);
  }
  return Y;
}

class Pq extends Y6 {
  constructor(Q) {
    let J = Q.fields.map((W) => a0({ type: W.type })), Y = a0({ type: new J6(Q.fields), nullCount: 0, children: J });
    super(Q, Y);
  }
}

// node_modules/apache-arrow/fb/body-compression-method.mjs
var bK;
(function(Q) {
  Q[Q.BUFFER = 0] = "BUFFER";
})(bK || (bK = {}));

// node_modules/apache-arrow/fb/compression-type.mjs
var uK;
(function(Q) {
  Q[Q.LZ4_FRAME = 0] = "LZ4_FRAME", Q[Q.ZSTD = 1] = "ZSTD";
})(uK || (uK = {}));

// node_modules/apache-arrow/fb/body-compression.mjs
class B4 {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsBodyCompression(Q, J) {
    return (J || new B4).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsBodyCompression(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new B4).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  codec() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt8(this.bb_pos + Q) : uK.LZ4_FRAME;
  }
  method() {
    let Q = this.bb.__offset(this.bb_pos, 6);
    return Q ? this.bb.readInt8(this.bb_pos + Q) : bK.BUFFER;
  }
  static startBodyCompression(Q) {
    Q.startObject(2);
  }
  static addCodec(Q, J) {
    Q.addFieldInt8(0, J, uK.LZ4_FRAME);
  }
  static addMethod(Q, J) {
    Q.addFieldInt8(1, J, bK.BUFFER);
  }
  static endBodyCompression(Q) {
    return Q.endObject();
  }
  static createBodyCompression(Q, J, Y) {
    return B4.startBodyCompression(Q), B4.addCodec(Q, J), B4.addMethod(Q, Y), B4.endBodyCompression(Q);
  }
}

// node_modules/apache-arrow/fb/buffer.mjs
class cK {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  length() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createBuffer(Q, J, Y) {
    return Q.prep(8, 16), Q.writeInt64(Y), Q.writeInt64(J), Q.offset();
  }
}

// node_modules/apache-arrow/fb/field-node.mjs
class pK {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  length() {
    return this.bb.readInt64(this.bb_pos);
  }
  nullCount() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createFieldNode(Q, J, Y) {
    return Q.prep(8, 16), Q.writeInt64(Y), Q.writeInt64(J), Q.offset();
  }
}

// node_modules/apache-arrow/fb/record-batch.mjs
class mQ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsRecordBatch(Q, J) {
    return (J || new mQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsRecordBatch(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new mQ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  length() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt64(this.bb_pos + Q) : this.bb.createLong(0, 0);
  }
  nodes(Q, J) {
    let Y = this.bb.__offset(this.bb_pos, 6);
    return Y ? (J || new pK).__init(this.bb.__vector(this.bb_pos + Y) + Q * 16, this.bb) : null;
  }
  nodesLength() {
    let Q = this.bb.__offset(this.bb_pos, 6);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  buffers(Q, J) {
    let Y = this.bb.__offset(this.bb_pos, 8);
    return Y ? (J || new cK).__init(this.bb.__vector(this.bb_pos + Y) + Q * 16, this.bb) : null;
  }
  buffersLength() {
    let Q = this.bb.__offset(this.bb_pos, 8);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  compression(Q) {
    let J = this.bb.__offset(this.bb_pos, 10);
    return J ? (Q || new B4).__init(this.bb.__indirect(this.bb_pos + J), this.bb) : null;
  }
  static startRecordBatch(Q) {
    Q.startObject(4);
  }
  static addLength(Q, J) {
    Q.addFieldInt64(0, J, Q.createLong(0, 0));
  }
  static addNodes(Q, J) {
    Q.addFieldOffset(1, J, 0);
  }
  static startNodesVector(Q, J) {
    Q.startVector(16, J, 8);
  }
  static addBuffers(Q, J) {
    Q.addFieldOffset(2, J, 0);
  }
  static startBuffersVector(Q, J) {
    Q.startVector(16, J, 8);
  }
  static addCompression(Q, J) {
    Q.addFieldOffset(3, J, 0);
  }
  static endRecordBatch(Q) {
    return Q.endObject();
  }
}

// node_modules/apache-arrow/fb/dictionary-batch.mjs
class pZ {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsDictionaryBatch(Q, J) {
    return (J || new pZ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsDictionaryBatch(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new pZ).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  id() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt64(this.bb_pos + Q) : this.bb.createLong(0, 0);
  }
  data(Q) {
    let J = this.bb.__offset(this.bb_pos, 6);
    return J ? (Q || new mQ).__init(this.bb.__indirect(this.bb_pos + J), this.bb) : null;
  }
  isDelta() {
    let Q = this.bb.__offset(this.bb_pos, 8);
    return Q ? !!this.bb.readInt8(this.bb_pos + Q) : !1;
  }
  static startDictionaryBatch(Q) {
    Q.startObject(3);
  }
  static addId(Q, J) {
    Q.addFieldInt64(0, J, Q.createLong(0, 0));
  }
  static addData(Q, J) {
    Q.addFieldOffset(1, J, 0);
  }
  static addIsDelta(Q, J) {
    Q.addFieldInt8(2, +J, 0);
  }
  static endDictionaryBatch(Q) {
    return Q.endObject();
  }
}

// node_modules/apache-arrow/fb/message-header.mjs
var Aq;
(function(Q) {
  Q[Q.NONE = 0] = "NONE", Q[Q.Schema = 1] = "Schema", Q[Q.DictionaryBatch = 2] = "DictionaryBatch", Q[Q.RecordBatch = 3] = "RecordBatch", Q[Q.Tensor = 4] = "Tensor", Q[Q.SparseTensor = 5] = "SparseTensor";
})(Aq || (Aq = {}));

// node_modules/apache-arrow/fb/message.mjs
class Z8 {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(Q, J) {
    return this.bb_pos = Q, this.bb = J, this;
  }
  static getRootAsMessage(Q, J) {
    return (J || new Z8).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  static getSizePrefixedRootAsMessage(Q, J) {
    return Q.setPosition(Q.position() + w0), (J || new Z8).__init(Q.readInt32(Q.position()) + Q.position(), Q);
  }
  version() {
    let Q = this.bb.__offset(this.bb_pos, 4);
    return Q ? this.bb.readInt16(this.bb_pos + Q) : wJ.V1;
  }
  headerType() {
    let Q = this.bb.__offset(this.bb_pos, 6);
    return Q ? this.bb.readUint8(this.bb_pos + Q) : Aq.NONE;
  }
  header(Q) {
    let J = this.bb.__offset(this.bb_pos, 8);
    return J ? this.bb.__union(Q, this.bb_pos + J) : null;
  }
  bodyLength() {
    let Q = this.bb.__offset(this.bb_pos, 10);
    return Q ? this.bb.readInt64(this.bb_pos + Q) : this.bb.createLong(0, 0);
  }
  customMetadata(Q, J) {
    let Y = this.bb.__offset(this.bb_pos, 12);
    return Y ? (J || new G6).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + Y) + Q * 4), this.bb) : null;
  }
  customMetadataLength() {
    let Q = this.bb.__offset(this.bb_pos, 12);
    return Q ? this.bb.__vector_len(this.bb_pos + Q) : 0;
  }
  static startMessage(Q) {
    Q.startObject(5);
  }
  static addVersion(Q, J) {
    Q.addFieldInt16(0, J, wJ.V1);
  }
  static addHeaderType(Q, J) {
    Q.addFieldInt8(1, J, Aq.NONE);
  }
  static addHeader(Q, J) {
    Q.addFieldOffset(2, J, 0);
  }
  static addBodyLength(Q, J) {
    Q.addFieldInt64(3, J, Q.createLong(0, 0));
  }
  static addCustomMetadata(Q, J) {
    Q.addFieldOffset(4, J, 0);
  }
  static createCustomMetadataVector(Q, J) {
    Q.startVector(4, J.length, 4);
    for (let Y = J.length - 1;Y >= 0; Y--)
      Q.addOffset(J[Y]);
    return Q.endVector();
  }
  static startCustomMetadataVector(Q, J) {
    Q.startVector(4, J, 4);
  }
  static endMessage(Q) {
    return Q.endObject();
  }
  static finishMessageBuffer(Q, J) {
    Q.finish(J);
  }
  static finishSizePrefixedMessageBuffer(Q, J) {
    Q.finish(J, void 0, !0);
  }
  static createMessage(Q, J, Y, W, K, z) {
    return Z8.startMessage(Q), Z8.addVersion(Q, J), Z8.addHeaderType(Q, Y), Z8.addHeader(Q, W), Z8.addBodyLength(Q, K), Z8.addCustomMetadata(Q, z), Z8.endMessage(Q);
  }
}

// node_modules/apache-arrow/visitor/typeassembler.mjs
var yh = U8;

class GD extends T0 {
  visit(Q, J) {
    return Q == null || J == null ? void 0 : super.visit(Q, J);
  }
  visitNull(Q, J) {
    return BJ.startNull(J), BJ.endNull(J);
  }
  visitInt(Q, J) {
    return QQ.startInt(J), QQ.addBitWidth(J, Q.bitWidth), QQ.addIsSigned(J, Q.isSigned), QQ.endInt(J);
  }
  visitFloat(Q, J) {
    return BX.startFloatingPoint(J), BX.addPrecision(J, Q.precision), BX.endFloatingPoint(J);
  }
  visitBinary(Q, J) {
    return DJ.startBinary(J), DJ.endBinary(J);
  }
  visitBool(Q, J) {
    return RJ.startBool(J), RJ.endBool(J);
  }
  visitUtf8(Q, J) {
    return VJ.startUtf8(J), VJ.endUtf8(J);
  }
  visitDecimal(Q, J) {
    return XQ.startDecimal(J), XQ.addScale(J, Q.scale), XQ.addPrecision(J, Q.precision), XQ.addBitWidth(J, Q.bitWidth), XQ.endDecimal(J);
  }
  visitDate(Q, J) {
    return RX.startDate(J), RX.addUnit(J, Q.unit), RX.endDate(J);
  }
  visitTime(Q, J) {
    return vQ.startTime(J), vQ.addUnit(J, Q.unit), vQ.addBitWidth(J, Q.bitWidth), vQ.endTime(J);
  }
  visitTimestamp(Q, J) {
    let Y = Q.timezone && J.createString(Q.timezone) || void 0;
    if (hQ.startTimestamp(J), hQ.addUnit(J, Q.unit), Y !== void 0)
      hQ.addTimezone(J, Y);
    return hQ.endTimestamp(J);
  }
  visitInterval(Q, J) {
    return CX.startInterval(J), CX.addUnit(J, Q.unit), CX.endInterval(J);
  }
  visitList(Q, J) {
    return jJ.startList(J), jJ.endList(J);
  }
  visitStruct(Q, J) {
    return CJ.startStruct_(J), CJ.endStruct_(J);
  }
  visitUnion(Q, J) {
    ZQ.startTypeIdsVector(J, Q.typeIds.length);
    let Y = ZQ.createTypeIdsVector(J, Q.typeIds);
    return ZQ.startUnion(J), ZQ.addMode(J, Q.mode), ZQ.addTypeIds(J, Y), ZQ.endUnion(J);
  }
  visitDictionary(Q, J) {
    let Y = this.visit(Q.indices, J);
    if (WZ.startDictionaryEncoding(J), WZ.addId(J, new yh(Q.id, 0)), WZ.addIsOrdered(J, Q.isOrdered), Y !== void 0)
      WZ.addIndexType(J, Y);
    return WZ.endDictionaryEncoding(J);
  }
  visitFixedSizeBinary(Q, J) {
    return kX.startFixedSizeBinary(J), kX.addByteWidth(J, Q.byteWidth), kX.endFixedSizeBinary(J);
  }
  visitFixedSizeList(Q, J) {
    return jX.startFixedSizeList(J), jX.addListSize(J, Q.listSize), jX.endFixedSizeList(J);
  }
  visitMap(Q, J) {
    return VX.startMap(J), VX.addKeysSorted(J, Q.keysSorted), VX.endMap(J);
  }
}
var jH = new GD;

// node_modules/apache-arrow/ipc/metadata/json.mjs
function FD(Q, J = /* @__PURE__ */ new Map) {
  return new A1(fh(Q, J), BH(Q.customMetadata), J);
}
function LE(Q) {
  return new $Q(Q.count, AD(Q.columns), UD(Q.columns));
}
function PD(Q) {
  return new WX(LE(Q.data), Q.id, Q.isDelta);
}
function fh(Q, J) {
  return (Q.fields || []).filter(Boolean).map((Y) => Z1.fromJSON(Y, J));
}
function zD(Q, J) {
  return (Q.children || []).filter(Boolean).map((Y) => Z1.fromJSON(Y, J));
}
function AD(Q) {
  return (Q || []).reduce((J, Y) => [
    ...J,
    new dZ(Y.count, mh(Y.VALIDITY)),
    ...AD(Y.children)
  ], []);
}
function UD(Q, J = []) {
  for (let Y = -1, W = (Q || []).length;++Y < W; ) {
    let K = Q[Y];
    K.VALIDITY && J.push(new qX(J.length, K.VALIDITY.length)), K.TYPE && J.push(new qX(J.length, K.TYPE.length)), K.OFFSET && J.push(new qX(J.length, K.OFFSET.length)), K.DATA && J.push(new qX(J.length, K.DATA.length)), J = UD(K.children, J);
  }
  return J;
}
function mh(Q) {
  return (Q || []).reduce((J, Y) => J + +(Y === 0), 0);
}
function LD(Q, J) {
  let Y, W, K, z, N, F;
  if (!J || !(z = Q.dictionary))
    N = ED(Q, zD(Q, J)), K = new Z1(Q.name, N, Q.nullable, BH(Q.customMetadata));
  else if (!J.has(Y = z.id))
    W = (W = z.indexType) ? ND(W) : new U4, J.set(Y, N = ED(Q, zD(Q, J))), F = new wX(N, W, Y, z.isOrdered), K = new Z1(Q.name, F, Q.nullable, BH(Q.customMetadata));
  else
    W = (W = z.indexType) ? ND(W) : new U4, F = new wX(J.get(Y), W, Y, z.isOrdered), K = new Z1(Q.name, F, Q.nullable, BH(Q.customMetadata));
  return K || null;
}
function BH(Q) {
  return new Map(Object.entries(Q || {}));
}
function ND(Q) {
  return new m6(Q.isSigned, Q.bitWidth);
}
function ED(Q, J) {
  let Y = Q.type.name;
  switch (Y) {
    case "NONE":
      return new xQ;
    case "null":
      return new xQ;
    case "binary":
      return new KJ;
    case "utf8":
      return new HJ;
    case "bool":
      return new GJ;
    case "list":
      return new yZ((J || [])[0]);
    case "struct":
      return new J6(J || []);
    case "struct_":
      return new J6(J || []);
  }
  switch (Y) {
    case "int": {
      let W = Q.type;
      return new m6(W.isSigned, W.bitWidth);
    }
    case "floatingpoint": {
      let W = Q.type;
      return new XX(Z6[W.precision]);
    }
    case "decimal": {
      let W = Q.type;
      return new zJ(W.scale, W.precision, W.bitWidth);
    }
    case "date": {
      let W = Q.type;
      return new NJ(f8[W.unit]);
    }
    case "time": {
      let W = Q.type;
      return new hZ(G1[W.unit], W.bitWidth);
    }
    case "timestamp": {
      let W = Q.type;
      return new EJ(G1[W.unit], W.timezone);
    }
    case "interval": {
      let W = Q.type;
      return new FJ(OQ[W.unit]);
    }
    case "union": {
      let W = Q.type;
      return new fZ(O6[W.mode], W.typeIds || [], J || []);
    }
    case "fixedsizebinary": {
      let W = Q.type;
      return new PJ(W.byteWidth);
    }
    case "fixedsizelist": {
      let W = Q.type;
      return new mZ(W.listSize, (J || [])[0]);
    }
    case "map": {
      let W = Q.type;
      return new bZ((J || [])[0], W.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${Y}"`);
}

// node_modules/apache-arrow/ipc/metadata/message.mjs
var _$ = U8, bh = C$, uh = YX;

class O8 {
  constructor(Q, J, Y, W) {
    this._version = J, this._headerType = Y, this.body = new Uint8Array(0), W && (this._createHeader = () => W), this._bodyLength = typeof Q === "number" ? Q : Q.low;
  }
  static fromJSON(Q, J) {
    let Y = new O8(0, A8.V4, J);
    return Y._createHeader = ch(Q, J), Y;
  }
  static decode(Q) {
    Q = new uh(c0(Q));
    let J = Z8.getRootAsMessage(Q), Y = J.bodyLength(), W = J.version(), K = J.headerType(), z = new O8(Y, W, K);
    return z._createHeader = ph(J, K), z;
  }
  static encode(Q) {
    let J = new bh, Y = -1;
    if (Q.isSchema())
      Y = A1.encode(J, Q.header());
    else if (Q.isRecordBatch())
      Y = $Q.encode(J, Q.header());
    else if (Q.isDictionaryBatch())
      Y = WX.encode(J, Q.header());
    return Z8.startMessage(J), Z8.addVersion(J, A8.V4), Z8.addHeader(J, Y), Z8.addHeaderType(J, Q.headerType), Z8.addBodyLength(J, new _$(Q.bodyLength, 0)), Z8.finishMessageBuffer(J, Z8.endMessage(J)), J.asUint8Array();
  }
  static from(Q, J = 0) {
    if (Q instanceof A1)
      return new O8(0, A8.V4, R1.Schema, Q);
    if (Q instanceof $Q)
      return new O8(J, A8.V4, R1.RecordBatch, Q);
    if (Q instanceof WX)
      return new O8(J, A8.V4, R1.DictionaryBatch, Q);
    throw new Error(`Unrecognized Message header: ${Q}`);
  }
  get type() {
    return this.headerType;
  }
  get version() {
    return this._version;
  }
  get headerType() {
    return this._headerType;
  }
  get bodyLength() {
    return this._bodyLength;
  }
  header() {
    return this._createHeader();
  }
  isSchema() {
    return this.headerType === R1.Schema;
  }
  isRecordBatch() {
    return this.headerType === R1.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === R1.DictionaryBatch;
  }
}

class $Q {
  constructor(Q, J, Y) {
    this._nodes = J, this._buffers = Y, this._length = typeof Q === "number" ? Q : Q.low;
  }
  get nodes() {
    return this._nodes;
  }
  get length() {
    return this._length;
  }
  get buffers() {
    return this._buffers;
  }
}

class WX {
  constructor(Q, J, Y = !1) {
    this._data = Q, this._isDelta = Y, this._id = typeof J === "number" ? J : J.low;
  }
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get isDelta() {
    return this._isDelta;
  }
  get length() {
    return this.data.length;
  }
  get nodes() {
    return this.data.nodes;
  }
  get buffers() {
    return this.data.buffers;
  }
}

class qX {
  constructor(Q, J) {
    this.offset = typeof Q === "number" ? Q : Q.low, this.length = typeof J === "number" ? J : J.low;
  }
}

class dZ {
  constructor(Q, J) {
    this.length = typeof Q === "number" ? Q : Q.low, this.nullCount = typeof J === "number" ? J : J.low;
  }
}
function ch(Q, J) {
  return () => {
    switch (J) {
      case R1.Schema:
        return A1.fromJSON(Q);
      case R1.RecordBatch:
        return $Q.fromJSON(Q);
      case R1.DictionaryBatch:
        return WX.fromJSON(Q);
    }
    throw new Error(`Unrecognized Message type: { name: ${R1[J]}, type: ${J} }`);
  };
}
function ph(Q, J) {
  return () => {
    switch (J) {
      case R1.Schema:
        return A1.decode(Q.header(new V6));
      case R1.RecordBatch:
        return $Q.decode(Q.header(new mQ), Q.version());
      case R1.DictionaryBatch:
        return WX.decode(Q.header(new pZ), Q.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${R1[J]}, type: ${J} }`);
  };
}
Z1.encode = Qy;
Z1.decode = th;
Z1.fromJSON = LD;
A1.encode = eh;
A1.decode = dh;
A1.fromJSON = FD;
$Q.encode = Xy;
$Q.decode = lh;
$Q.fromJSON = LE;
WX.encode = Zy;
WX.decode = nh;
WX.fromJSON = PD;
dZ.encode = Jy;
dZ.decode = oh;
qX.encode = $y;
qX.decode = sh;
function dh(Q, J = /* @__PURE__ */ new Map) {
  let Y = ih(Q, J);
  return new A1(Y, CH(Q), J);
}
function lh(Q, J = A8.V4) {
  if (Q.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new $Q(Q.length(), ah(Q), rh(Q, J));
}
function nh(Q, J = A8.V4) {
  return new WX($Q.decode(Q.data(), J), Q.id(), Q.isDelta());
}
function sh(Q) {
  return new qX(Q.offset(), Q.length());
}
function oh(Q) {
  return new dZ(Q.length(), Q.nullCount());
}
function ah(Q) {
  let J = [];
  for (let Y, W = -1, K = -1, z = Q.nodesLength();++W < z; )
    if (Y = Q.nodes(W))
      J[++K] = dZ.decode(Y);
  return J;
}
function rh(Q, J) {
  let Y = [];
  for (let W, K = -1, z = -1, N = Q.buffersLength();++K < N; )
    if (W = Q.buffers(K)) {
      if (J < A8.V4)
        W.bb_pos += 8 * (K + 1);
      Y[++z] = qX.decode(W);
    }
  return Y;
}
function ih(Q, J) {
  let Y = [];
  for (let W, K = -1, z = -1, N = Q.fieldsLength();++K < N; )
    if (W = Q.fields(K))
      Y[++z] = Z1.decode(W, J);
  return Y;
}
function OD(Q, J) {
  let Y = [];
  for (let W, K = -1, z = -1, N = Q.childrenLength();++K < N; )
    if (W = Q.children(K))
      Y[++z] = Z1.decode(W, J);
  return Y;
}
function th(Q, J) {
  let Y, W, K, z, N, F;
  if (!J || !(F = Q.dictionary()))
    K = MD(Q, OD(Q, J)), W = new Z1(Q.name(), K, Q.nullable(), CH(Q));
  else if (!J.has(Y = F.id().low))
    z = (z = F.indexType()) ? wD(z) : new U4, J.set(Y, K = MD(Q, OD(Q, J))), N = new wX(K, z, Y, F.isOrdered()), W = new Z1(Q.name(), N, Q.nullable(), CH(Q));
  else
    z = (z = F.indexType()) ? wD(z) : new U4, N = new wX(J.get(Y), z, Y, F.isOrdered()), W = new Z1(Q.name(), N, Q.nullable(), CH(Q));
  return W || null;
}
function CH(Q) {
  let J = /* @__PURE__ */ new Map;
  if (Q) {
    for (let Y, W, K = -1, z = Math.trunc(Q.customMetadataLength());++K < z; )
      if ((Y = Q.customMetadata(K)) && (W = Y.key()) != null)
        J.set(W, Y.value());
  }
  return J;
}
function wD(Q) {
  return new m6(Q.isSigned(), Q.bitWidth());
}
function MD(Q, J) {
  let Y = Q.typeType();
  switch (Y) {
    case $6.NONE:
      return new xQ;
    case $6.Null:
      return new xQ;
    case $6.Binary:
      return new KJ;
    case $6.Utf8:
      return new HJ;
    case $6.Bool:
      return new GJ;
    case $6.List:
      return new yZ((J || [])[0]);
    case $6.Struct_:
      return new J6(J || []);
  }
  switch (Y) {
    case $6.Int: {
      let W = Q.type(new QQ);
      return new m6(W.isSigned(), W.bitWidth());
    }
    case $6.FloatingPoint: {
      let W = Q.type(new BX);
      return new XX(W.precision());
    }
    case $6.Decimal: {
      let W = Q.type(new XQ);
      return new zJ(W.scale(), W.precision(), W.bitWidth());
    }
    case $6.Date: {
      let W = Q.type(new RX);
      return new NJ(W.unit());
    }
    case $6.Time: {
      let W = Q.type(new vQ);
      return new hZ(W.unit(), W.bitWidth());
    }
    case $6.Timestamp: {
      let W = Q.type(new hQ);
      return new EJ(W.unit(), W.timezone());
    }
    case $6.Interval: {
      let W = Q.type(new CX);
      return new FJ(W.unit());
    }
    case $6.Union: {
      let W = Q.type(new ZQ);
      return new fZ(W.mode(), W.typeIdsArray() || [], J || []);
    }
    case $6.FixedSizeBinary: {
      let W = Q.type(new kX);
      return new PJ(W.byteWidth());
    }
    case $6.FixedSizeList: {
      let W = Q.type(new jX);
      return new mZ(W.listSize(), (J || [])[0]);
    }
    case $6.Map: {
      let W = Q.type(new VX);
      return new bZ((J || [])[0], W.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${$6[Y]}" (${Y})`);
}
function eh(Q, J) {
  let Y = J.fields.map((z) => Z1.encode(Q, z));
  V6.startFieldsVector(Q, Y.length);
  let W = V6.createFieldsVector(Q, Y), K = !(J.metadata && J.metadata.size > 0) ? -1 : V6.createCustomMetadataVector(Q, [...J.metadata].map(([z, N]) => {
    let F = Q.createString(`${z}`), L = Q.createString(`${N}`);
    return G6.startKeyValue(Q), G6.addKey(Q, F), G6.addValue(Q, L), G6.endKeyValue(Q);
  }));
  if (V6.startSchema(Q), V6.addFields(Q, W), V6.addEndianness(Q, Yy ? MJ.Little : MJ.Big), K !== -1)
    V6.addCustomMetadata(Q, K);
  return V6.endSchema(Q);
}
function Qy(Q, J) {
  let Y = -1, W = -1, K = -1, z = J.type, N = J.typeId;
  if (!R0.isDictionary(z))
    W = jH.visit(z, Q);
  else
    N = z.dictionary.typeId, K = jH.visit(z, Q), W = jH.visit(z.dictionary, Q);
  let F = (z.children || []).map((D) => Z1.encode(Q, D)), L = L8.createChildrenVector(Q, F), w = !(J.metadata && J.metadata.size > 0) ? -1 : L8.createCustomMetadataVector(Q, [...J.metadata].map(([D, k]) => {
    let I = Q.createString(`${D}`), h = Q.createString(`${k}`);
    return G6.startKeyValue(Q), G6.addKey(Q, I), G6.addValue(Q, h), G6.endKeyValue(Q);
  }));
  if (J.name)
    Y = Q.createString(J.name);
  if (L8.startField(Q), L8.addType(Q, W), L8.addTypeType(Q, N), L8.addChildren(Q, L), L8.addNullable(Q, !!J.nullable), Y !== -1)
    L8.addName(Q, Y);
  if (K !== -1)
    L8.addDictionary(Q, K);
  if (w !== -1)
    L8.addCustomMetadata(Q, w);
  return L8.endField(Q);
}
function Xy(Q, J) {
  let Y = J.nodes || [], W = J.buffers || [];
  mQ.startNodesVector(Q, Y.length);
  for (let N of Y.slice().reverse())
    dZ.encode(Q, N);
  let K = Q.endVector();
  mQ.startBuffersVector(Q, W.length);
  for (let N of W.slice().reverse())
    qX.encode(Q, N);
  let z = Q.endVector();
  return mQ.startRecordBatch(Q), mQ.addLength(Q, new _$(J.length, 0)), mQ.addNodes(Q, K), mQ.addBuffers(Q, z), mQ.endRecordBatch(Q);
}
function Zy(Q, J) {
  let Y = $Q.encode(Q, J.data);
  return pZ.startDictionaryBatch(Q), pZ.addId(Q, new _$(J.id, 0)), pZ.addIsDelta(Q, J.isDelta), pZ.addData(Q, Y), pZ.endDictionaryBatch(Q);
}
function Jy(Q, J) {
  return pK.createFieldNode(Q, new _$(J.length, 0), new _$(J.nullCount, 0));
}
function $y(Q, J) {
  return cK.createBuffer(Q, new _$(J.offset, 0), new _$(J.length, 0));
}
var Yy = (() => {
  let Q = new ArrayBuffer(2);
  return new DataView(Q).setInt16(0, 256, !0), new Int16Array(Q)[0] === 256;
})();

// node_modules/apache-arrow/ipc/message.mjs
var wE = (Q) => `Expected ${R1[Q]} Message in stream, but was null or length 0.`, ME = (Q) => `Header pointer of flatbuffer-encoded ${R1[Q]} Message is null or length 0.`, DD = (Q, J) => `Expected to read ${Q} metadata bytes, but only read ${J}.`, RD = (Q, J) => `Expected to read ${Q} bytes for message body, but only read ${J}.`;

class dK {
  constructor(Q) {
    this.source = Q instanceof k4 ? Q : new k4(Q);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let Q;
    if ((Q = this.readMetadataLength()).done)
      return e1;
    if (Q.value === -1 && (Q = this.readMetadataLength()).done)
      return e1;
    if ((Q = this.readMetadata(Q.value)).done)
      return e1;
    return Q;
  }
  throw(Q) {
    return this.source.throw(Q);
  }
  return(Q) {
    return this.source.return(Q);
  }
  readMessage(Q) {
    let J;
    if ((J = this.next()).done)
      return null;
    if (Q != null && J.value.headerType !== Q)
      throw new Error(wE(Q));
    return J.value;
  }
  readMessageBody(Q) {
    if (Q <= 0)
      return new Uint8Array(0);
    let J = c0(this.source.read(Q));
    if (J.byteLength < Q)
      throw new Error(RD(Q, J.byteLength));
    return J.byteOffset % 8 === 0 && J.byteOffset + J.byteLength <= J.buffer.byteLength ? J : J.slice();
  }
  readSchema(Q = !1) {
    let J = R1.Schema, Y = this.readMessage(J), W = Y === null || Y === void 0 ? void 0 : Y.header();
    if (Q && !W)
      throw new Error(ME(J));
    return W;
  }
  readMetadataLength() {
    let Q = this.source.read(IH), J = Q && new YX(Q), Y = (J === null || J === void 0 ? void 0 : J.readInt32(0)) || 0;
    return { done: Y === 0, value: Y };
  }
  readMetadata(Q) {
    let J = this.source.read(Q);
    if (!J)
      return e1;
    if (J.byteLength < Q)
      throw new Error(DD(Q, J.byteLength));
    return { done: !1, value: O8.decode(J) };
  }
}

class VH {
  constructor(Q, J) {
    this.source = Q instanceof SX ? Q : B5(Q) ? new V$(Q, J) : new SX(Q);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return z0(this, void 0, void 0, function* () {
      let Q;
      if ((Q = yield this.readMetadataLength()).done)
        return e1;
      if (Q.value === -1 && (Q = yield this.readMetadataLength()).done)
        return e1;
      if ((Q = yield this.readMetadata(Q.value)).done)
        return e1;
      return Q;
    });
  }
  throw(Q) {
    return z0(this, void 0, void 0, function* () {
      return yield this.source.throw(Q);
    });
  }
  return(Q) {
    return z0(this, void 0, void 0, function* () {
      return yield this.source.return(Q);
    });
  }
  readMessage(Q) {
    return z0(this, void 0, void 0, function* () {
      let J;
      if ((J = yield this.next()).done)
        return null;
      if (Q != null && J.value.headerType !== Q)
        throw new Error(wE(Q));
      return J.value;
    });
  }
  readMessageBody(Q) {
    return z0(this, void 0, void 0, function* () {
      if (Q <= 0)
        return new Uint8Array(0);
      let J = c0(yield this.source.read(Q));
      if (J.byteLength < Q)
        throw new Error(RD(Q, J.byteLength));
      return J.byteOffset % 8 === 0 && J.byteOffset + J.byteLength <= J.buffer.byteLength ? J : J.slice();
    });
  }
  readSchema(Q = !1) {
    return z0(this, void 0, void 0, function* () {
      let J = R1.Schema, Y = yield this.readMessage(J), W = Y === null || Y === void 0 ? void 0 : Y.header();
      if (Q && !W)
        throw new Error(ME(J));
      return W;
    });
  }
  readMetadataLength() {
    return z0(this, void 0, void 0, function* () {
      let Q = yield this.source.read(IH), J = Q && new YX(Q), Y = (J === null || J === void 0 ? void 0 : J.readInt32(0)) || 0;
      return { done: Y === 0, value: Y };
    });
  }
  readMetadata(Q) {
    return z0(this, void 0, void 0, function* () {
      let J = yield this.source.read(Q);
      if (!J)
        return e1;
      if (J.byteLength < Q)
        throw new Error(DD(Q, J.byteLength));
      return { done: !1, value: O8.decode(J) };
    });
  }
}

class SH extends dK {
  constructor(Q) {
    super(new Uint8Array(0));
    this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = Q instanceof $H ? Q : new $H(Q);
  }
  next() {
    let { _json: Q } = this;
    if (!this._schema)
      return this._schema = !0, { done: !1, value: O8.fromJSON(Q.schema, R1.Schema) };
    if (this._dictionaryIndex < Q.dictionaries.length) {
      let J = Q.dictionaries[this._dictionaryIndex++];
      return this._body = J.data.columns, { done: !1, value: O8.fromJSON(J, R1.DictionaryBatch) };
    }
    if (this._batchIndex < Q.batches.length) {
      let J = Q.batches[this._batchIndex++];
      return this._body = J.columns, { done: !1, value: O8.fromJSON(J, R1.RecordBatch) };
    }
    return this._body = [], e1;
  }
  readMessageBody(Q) {
    return J(this._body);
    function J(Y) {
      return (Y || []).reduce((W, K) => [
        ...W,
        ...K.VALIDITY && [K.VALIDITY] || [],
        ...K.TYPE && [K.TYPE] || [],
        ...K.OFFSET && [K.OFFSET] || [],
        ...K.DATA && [K.DATA] || [],
        ...J(K.children)
      ], []);
    }
  }
  readMessage(Q) {
    let J;
    if ((J = this.next()).done)
      return null;
    if (Q != null && J.value.headerType !== Q)
      throw new Error(wE(Q));
    return J.value;
  }
  readSchema() {
    let Q = R1.Schema, J = this.readMessage(Q), Y = J === null || J === void 0 ? void 0 : J.header();
    if (!J || !Y)
      throw new Error(ME(Q));
    return Y;
  }
}
var IH = 4, OE = "ARROW1", Uq = new Uint8Array(OE.length);
for (let Q = 0;Q < OE.length; Q += 1)
  Uq[Q] = OE.codePointAt(Q);
function _H(Q, J = 0) {
  for (let Y = -1, W = Uq.length;++Y < W; )
    if (Uq[Y] !== Q[J + Y])
      return !1;
  return !0;
}
var Lq = Uq.length, DE = Lq + IH, kD = Lq * 2 + IH;

// node_modules/apache-arrow/ipc/reader.mjs
class wQ extends Hq {
  constructor(Q) {
    super();
    this._impl = Q;
  }
  get closed() {
    return this._impl.closed;
  }
  get schema() {
    return this._impl.schema;
  }
  get autoDestroy() {
    return this._impl.autoDestroy;
  }
  get dictionaries() {
    return this._impl.dictionaries;
  }
  get numDictionaries() {
    return this._impl.numDictionaries;
  }
  get numRecordBatches() {
    return this._impl.numRecordBatches;
  }
  get footer() {
    return this._impl.isFile() ? this._impl.footer : null;
  }
  isSync() {
    return this._impl.isSync();
  }
  isAsync() {
    return this._impl.isAsync();
  }
  isFile() {
    return this._impl.isFile();
  }
  isStream() {
    return this._impl.isStream();
  }
  next() {
    return this._impl.next();
  }
  throw(Q) {
    return this._impl.throw(Q);
  }
  return(Q) {
    return this._impl.return(Q);
  }
  cancel() {
    return this._impl.cancel();
  }
  reset(Q) {
    return this._impl.reset(Q), this._DOMStream = void 0, this._nodeStream = void 0, this;
  }
  open(Q) {
    let J = this._impl.open(Q);
    return eQ(J) ? J.then(() => this) : this;
  }
  readRecordBatch(Q) {
    return this._impl.isFile() ? this._impl.readRecordBatch(Q) : null;
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
  toDOMStream() {
    return y8.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return y8.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: !0 });
  }
  static throughNode(Q) {
    throw new Error('"throughNode" not available in this environment');
  }
  static throughDOM(Q, J) {
    throw new Error('"throughDOM" not available in this environment');
  }
  static from(Q) {
    if (Q instanceof wQ)
      return Q;
    else if (k5(Q))
      return Wy(Q);
    else if (B5(Q))
      return Gy(Q);
    else if (eQ(Q))
      return (() => z0(this, void 0, void 0, function* () {
        return yield wQ.from(yield Q);
      }))();
    else if (C5(Q) || UK(Q) || S5(Q) || LX(Q))
      return Hy(new SX(Q));
    return Ky(new k4(Q));
  }
  static readAll(Q) {
    if (Q instanceof wQ)
      return Q.isSync() ? jD(Q) : BD(Q);
    else if (k5(Q) || ArrayBuffer.isView(Q) || ZZ(Q) || j5(Q))
      return jD(Q);
    return BD(Q);
  }
}

class gJ extends wQ {
  constructor(Q) {
    super(Q);
    this._impl = Q;
  }
  readAll() {
    return [...this];
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return tQ(this, arguments, function* Q() {
      yield s0(yield* rY(XZ(this[Symbol.iterator]())));
    });
  }
}

class Oq extends wQ {
  constructor(Q) {
    super(Q);
    this._impl = Q;
  }
  readAll() {
    var Q, J;
    return z0(this, void 0, void 0, function* () {
      let Y = new Array;
      try {
        for (var W = XZ(this), K;K = yield W.next(), !K.done; ) {
          let z = K.value;
          Y.push(z);
        }
      } catch (z) {
        Q = { error: z };
      } finally {
        try {
          if (K && !K.done && (J = W.return))
            yield J.call(W);
        } finally {
          if (Q)
            throw Q.error;
        }
      }
      return Y;
    });
  }
  [Symbol.iterator]() {
    throw new Error("AsyncRecordBatchStreamReader is not Iterable");
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
}

class wq extends gJ {
  constructor(Q) {
    super(Q);
    this._impl = Q;
  }
}

class RE extends Oq {
  constructor(Q) {
    super(Q);
    this._impl = Q;
  }
}

class kE {
  constructor(Q = /* @__PURE__ */ new Map) {
    this.closed = !1, this.autoDestroy = !0, this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.dictionaries = Q;
  }
  get numDictionaries() {
    return this._dictionaryIndex;
  }
  get numRecordBatches() {
    return this._recordBatchIndex;
  }
  isSync() {
    return !1;
  }
  isAsync() {
    return !1;
  }
  isFile() {
    return !1;
  }
  isStream() {
    return !1;
  }
  reset(Q) {
    return this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.schema = Q, this.dictionaries = /* @__PURE__ */ new Map, this;
  }
  _loadRecordBatch(Q, J) {
    let Y = this._loadVectors(Q, J, this.schema.fields), W = a0({ type: new J6(this.schema.fields), length: Q.length, children: Y });
    return new Y6(this.schema, W);
  }
  _loadDictionaryBatch(Q, J) {
    let { id: Y, isDelta: W } = Q, { dictionaries: K, schema: z } = this, N = K.get(Y);
    if (W || !N) {
      let F = z.dictionaries.get(Y), L = this._loadVectors(Q.data, J, [F]);
      return (N && W ? N.concat(new t0(L)) : new t0(L)).memoize();
    }
    return N.memoize();
  }
  _loadVectors(Q, J, Y) {
    return new WH(J, Q.nodes, Q.buffers, this.dictionaries).visitMany(Y);
  }
}

class lK extends kE {
  constructor(Q, J) {
    super(J);
    this._reader = !k5(Q) ? new dK(this._handle = Q) : new SH(this._handle = Q);
  }
  isSync() {
    return !0;
  }
  isStream() {
    return !0;
  }
  [Symbol.iterator]() {
    return this;
  }
  cancel() {
    if (!this.closed && (this.closed = !0))
      this.reset()._reader.return(), this._reader = null, this.dictionaries = null;
  }
  open(Q) {
    if (!this.closed) {
      if (this.autoDestroy = SD(this, Q), !(this.schema || (this.schema = this._reader.readSchema())))
        this.cancel();
    }
    return this;
  }
  throw(Q) {
    if (!this.closed && this.autoDestroy && (this.closed = !0))
      return this.reset()._reader.throw(Q);
    return e1;
  }
  return(Q) {
    if (!this.closed && this.autoDestroy && (this.closed = !0))
      return this.reset()._reader.return(Q);
    return e1;
  }
  next() {
    if (this.closed)
      return e1;
    let Q, { _reader: J } = this;
    while (Q = this._readNextMessageAndValidate())
      if (Q.isSchema())
        this.reset(Q.header());
      else if (Q.isRecordBatch()) {
        this._recordBatchIndex++;
        let Y = Q.header(), W = J.readMessageBody(Q.bodyLength);
        return { done: !1, value: this._loadRecordBatch(Y, W) };
      } else if (Q.isDictionaryBatch()) {
        this._dictionaryIndex++;
        let Y = Q.header(), W = J.readMessageBody(Q.bodyLength), K = this._loadDictionaryBatch(Y, W);
        this.dictionaries.set(Y.id, K);
      }
    if (this.schema && this._recordBatchIndex === 0)
      return this._recordBatchIndex++, { done: !1, value: new Pq(this.schema) };
    return this.return();
  }
  _readNextMessageAndValidate(Q) {
    return this._reader.readMessage(Q);
  }
}

class nK extends kE {
  constructor(Q, J) {
    super(J);
    this._reader = new VH(this._handle = Q);
  }
  isAsync() {
    return !0;
  }
  isStream() {
    return !0;
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  cancel() {
    return z0(this, void 0, void 0, function* () {
      if (!this.closed && (this.closed = !0))
        yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null;
    });
  }
  open(Q) {
    return z0(this, void 0, void 0, function* () {
      if (!this.closed) {
        if (this.autoDestroy = SD(this, Q), !(this.schema || (this.schema = yield this._reader.readSchema())))
          yield this.cancel();
      }
      return this;
    });
  }
  throw(Q) {
    return z0(this, void 0, void 0, function* () {
      if (!this.closed && this.autoDestroy && (this.closed = !0))
        return yield this.reset()._reader.throw(Q);
      return e1;
    });
  }
  return(Q) {
    return z0(this, void 0, void 0, function* () {
      if (!this.closed && this.autoDestroy && (this.closed = !0))
        return yield this.reset()._reader.return(Q);
      return e1;
    });
  }
  next() {
    return z0(this, void 0, void 0, function* () {
      if (this.closed)
        return e1;
      let Q, { _reader: J } = this;
      while (Q = yield this._readNextMessageAndValidate())
        if (Q.isSchema())
          yield this.reset(Q.header());
        else if (Q.isRecordBatch()) {
          this._recordBatchIndex++;
          let Y = Q.header(), W = yield J.readMessageBody(Q.bodyLength);
          return { done: !1, value: this._loadRecordBatch(Y, W) };
        } else if (Q.isDictionaryBatch()) {
          this._dictionaryIndex++;
          let Y = Q.header(), W = yield J.readMessageBody(Q.bodyLength), K = this._loadDictionaryBatch(Y, W);
          this.dictionaries.set(Y.id, K);
        }
      if (this.schema && this._recordBatchIndex === 0)
        return this._recordBatchIndex++, { done: !1, value: new Pq(this.schema) };
      return yield this.return();
    });
  }
  _readNextMessageAndValidate(Q) {
    return z0(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(Q);
    });
  }
}

class jE extends lK {
  constructor(Q, J) {
    super(Q instanceof YH ? Q : new YH(Q), J);
  }
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  isSync() {
    return !0;
  }
  isFile() {
    return !0;
  }
  open(Q) {
    if (!this.closed && !this._footer) {
      this.schema = (this._footer = this._readFooter()).schema;
      for (let J of this._footer.dictionaryBatches())
        J && this._readDictionaryBatch(this._dictionaryIndex++);
    }
    return super.open(Q);
  }
  readRecordBatch(Q) {
    var J;
    if (this.closed)
      return null;
    if (!this._footer)
      this.open();
    let Y = (J = this._footer) === null || J === void 0 ? void 0 : J.getRecordBatch(Q);
    if (Y && this._handle.seek(Y.offset)) {
      let W = this._reader.readMessage(R1.RecordBatch);
      if (W === null || W === void 0 ? void 0 : W.isRecordBatch()) {
        let K = W.header(), z = this._reader.readMessageBody(W.bodyLength);
        return this._loadRecordBatch(K, z);
      }
    }
    return null;
  }
  _readDictionaryBatch(Q) {
    var J;
    let Y = (J = this._footer) === null || J === void 0 ? void 0 : J.getDictionaryBatch(Q);
    if (Y && this._handle.seek(Y.offset)) {
      let W = this._reader.readMessage(R1.DictionaryBatch);
      if (W === null || W === void 0 ? void 0 : W.isDictionaryBatch()) {
        let K = W.header(), z = this._reader.readMessageBody(W.bodyLength), N = this._loadDictionaryBatch(K, z);
        this.dictionaries.set(K.id, N);
      }
    }
  }
  _readFooter() {
    let { _handle: Q } = this, J = Q.size - DE, Y = Q.readInt32(J), W = Q.readAt(J - Y, Y);
    return SJ.decode(W);
  }
  _readNextMessageAndValidate(Q) {
    var J;
    if (!this._footer)
      this.open();
    if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
      let Y = (J = this._footer) === null || J === void 0 ? void 0 : J.getRecordBatch(this._recordBatchIndex);
      if (Y && this._handle.seek(Y.offset))
        return this._reader.readMessage(Q);
    }
    return null;
  }
}

class CD extends nK {
  constructor(Q, ...J) {
    let Y = typeof J[0] !== "number" ? J.shift() : void 0, W = J[0] instanceof Map ? J.shift() : void 0;
    super(Q instanceof V$ ? Q : new V$(Q, Y), W);
  }
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  isFile() {
    return !0;
  }
  isAsync() {
    return !0;
  }
  open(Q) {
    let J = Object.create(null, {
      open: { get: () => super.open }
    });
    return z0(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (let Y of this._footer.dictionaryBatches())
          Y && (yield this._readDictionaryBatch(this._dictionaryIndex++));
      }
      return yield J.open.call(this, Q);
    });
  }
  readRecordBatch(Q) {
    var J;
    return z0(this, void 0, void 0, function* () {
      if (this.closed)
        return null;
      if (!this._footer)
        yield this.open();
      let Y = (J = this._footer) === null || J === void 0 ? void 0 : J.getRecordBatch(Q);
      if (Y && (yield this._handle.seek(Y.offset))) {
        let W = yield this._reader.readMessage(R1.RecordBatch);
        if (W === null || W === void 0 ? void 0 : W.isRecordBatch()) {
          let K = W.header(), z = yield this._reader.readMessageBody(W.bodyLength);
          return this._loadRecordBatch(K, z);
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(Q) {
    var J;
    return z0(this, void 0, void 0, function* () {
      let Y = (J = this._footer) === null || J === void 0 ? void 0 : J.getDictionaryBatch(Q);
      if (Y && (yield this._handle.seek(Y.offset))) {
        let W = yield this._reader.readMessage(R1.DictionaryBatch);
        if (W === null || W === void 0 ? void 0 : W.isDictionaryBatch()) {
          let K = W.header(), z = yield this._reader.readMessageBody(W.bodyLength), N = this._loadDictionaryBatch(K, z);
          this.dictionaries.set(K.id, N);
        }
      }
    });
  }
  _readFooter() {
    return z0(this, void 0, void 0, function* () {
      let { _handle: Q } = this;
      Q._pending && (yield Q._pending);
      let J = Q.size - DE, Y = yield Q.readInt32(J), W = yield Q.readAt(J - Y, Y);
      return SJ.decode(W);
    });
  }
  _readNextMessageAndValidate(Q) {
    return z0(this, void 0, void 0, function* () {
      if (!this._footer)
        yield this.open();
      if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
        let J = this._footer.getRecordBatch(this._recordBatchIndex);
        if (J && (yield this._handle.seek(J.offset)))
          return yield this._reader.readMessage(Q);
      }
      return null;
    });
  }
}

class VD extends lK {
  constructor(Q, J) {
    super(Q, J);
  }
  _loadVectors(Q, J, Y) {
    return new oN(J, Q.nodes, Q.buffers, this.dictionaries).visitMany(Y);
  }
}
function SD(Q, J) {
  return J && typeof J.autoDestroy === "boolean" ? J.autoDestroy : Q.autoDestroy;
}
function* jD(Q) {
  let J = wQ.from(Q);
  try {
    if (!J.open({ autoDestroy: !1 }).closed)
      do
        yield J;
      while (!J.reset().open().closed);
  } finally {
    J.cancel();
  }
}
function BD(Q) {
  return tQ(this, arguments, function* J() {
    let Y = yield s0(wQ.from(Q));
    try {
      if (!(yield s0(Y.open({ autoDestroy: !1 }))).closed)
        do
          yield yield s0(Y);
        while (!(yield s0(Y.reset().open())).closed);
    } finally {
      yield s0(Y.cancel());
    }
  });
}
function Wy(Q) {
  return new gJ(new VD(Q));
}
function Ky(Q) {
  let J = Q.peek(Lq + 7 & -8);
  return J && J.byteLength >= 4 ? !_H(J) ? new gJ(new lK(Q)) : new wq(new jE(Q.read())) : new gJ(new lK(function* () {}()));
}
function Hy(Q) {
  return z0(this, void 0, void 0, function* () {
    let J = yield Q.peek(Lq + 7 & -8);
    return J && J.byteLength >= 4 ? !_H(J) ? new Oq(new nK(Q)) : new wq(new jE(yield Q.read())) : new Oq(new nK(function() {
      return tQ(this, arguments, function* () {});
    }()));
  });
}
function Gy(Q) {
  return z0(this, void 0, void 0, function* () {
    let { size: J } = yield Q.stat(), Y = new V$(Q, J);
    if (J >= kD && _H(yield Y.readAt(0, Lq + 7 & -8)))
      return new RE(new CD(Y));
    return new Oq(new nK(Y));
  });
}

// node_modules/apache-arrow/visitor/vectorassembler.mjs
class S6 extends T0 {
  constructor() {
    super();
    this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  static assemble(...Q) {
    let J = (W) => W.flatMap((K) => Array.isArray(K) ? J(K) : K instanceof Y6 ? K.data.children : K.data), Y = new S6;
    return Y.visitMany(J(Q)), Y;
  }
  visit(Q) {
    if (Q instanceof t0)
      return this.visitMany(Q.data), this;
    let { type: J } = Q;
    if (!R0.isDictionary(J)) {
      let { length: Y, nullCount: W } = Q;
      if (Y > 2147483647)
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      if (!R0.isNull(J))
        HZ.call(this, W <= 0 ? new Uint8Array(0) : $q(Q.offset, Y, Q.nullBitmap));
      this.nodes.push(new dZ(Y, W));
    }
    return super.visit(Q);
  }
  visitNull(Q) {
    return this;
  }
  visitDictionary(Q) {
    return this.visit(Q.clone(Q.type.indices));
  }
  get nodes() {
    return this._nodes;
  }
  get buffers() {
    return this._buffers;
  }
  get byteLength() {
    return this._byteLength;
  }
  get bufferRegions() {
    return this._bufferRegions;
  }
}
function HZ(Q) {
  let J = Q.byteLength + 7 & -8;
  return this.buffers.push(Q), this.bufferRegions.push(new qX(this._byteLength, J)), this._byteLength += J, this;
}
function zy(Q) {
  let { type: J, length: Y, typeIds: W, valueOffsets: K } = Q;
  if (HZ.call(this, W), J.mode === O6.Sparse)
    return BE.call(this, Q);
  else if (J.mode === O6.Dense)
    if (Q.offset <= 0)
      return HZ.call(this, K), BE.call(this, Q);
    else {
      let z = W.reduce((D, k) => Math.max(D, k), W[0]), N = new Int32Array(z + 1), F = new Int32Array(z + 1).fill(-1), L = new Int32Array(Y), w = LK(-K[0], Y, K);
      for (let D, k, I = -1;++I < Y; ) {
        if ((k = F[D = W[I]]) === -1)
          k = F[D] = w[D];
        L[I] = w[I] - k, ++N[D];
      }
      HZ.call(this, L);
      for (let D, k = -1, I = J.children.length;++k < I; )
        if (D = Q.children[k]) {
          let h = J.typeIds[k], o = Math.min(Y, N[h]);
          this.visit(D.slice(F[h], o));
        }
    }
  return this;
}
function Ny(Q) {
  let J;
  if (Q.nullCount >= Q.length)
    return HZ.call(this, new Uint8Array(0));
  else if ((J = Q.values) instanceof Uint8Array)
    return HZ.call(this, $q(Q.offset, Q.length, J));
  return HZ.call(this, k$(Q.values));
}
function xJ(Q) {
  return HZ.call(this, Q.values.subarray(0, Q.length * Q.stride));
}
function ID(Q) {
  let { length: J, values: Y, valueOffsets: W } = Q, K = W[0], z = W[J], N = Math.min(z - K, Y.byteLength - K);
  return HZ.call(this, LK(-W[0], J, W)), HZ.call(this, Y.subarray(K, K + N)), this;
}
function CE(Q) {
  let { length: J, valueOffsets: Y } = Q;
  if (Y)
    HZ.call(this, LK(Y[0], J, Y));
  return this.visit(Q.children[0]);
}
function BE(Q) {
  return this.visitMany(Q.type.children.map((J, Y) => Q.children[Y]).filter(Boolean))[0];
}
S6.prototype.visitBool = Ny;
S6.prototype.visitInt = xJ;
S6.prototype.visitFloat = xJ;
S6.prototype.visitUtf8 = ID;
S6.prototype.visitBinary = ID;
S6.prototype.visitFixedSizeBinary = xJ;
S6.prototype.visitDate = xJ;
S6.prototype.visitTimestamp = xJ;
S6.prototype.visitTime = xJ;
S6.prototype.visitDecimal = xJ;
S6.prototype.visitList = CE;
S6.prototype.visitStruct = BE;
S6.prototype.visitUnion = zy;
S6.prototype.visitInterval = xJ;
S6.prototype.visitFixedSizeList = CE;
S6.prototype.visitMap = CE;

// node_modules/apache-arrow/ipc/writer.mjs
class Mq extends Hq {
  constructor(Q) {
    super();
    this._position = 0, this._started = !1, this._sink = new R4, this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map, LQ(Q) || (Q = { autoDestroy: !0, writeLegacyIpcFormat: !1 }), this._autoDestroy = typeof Q.autoDestroy === "boolean" ? Q.autoDestroy : !0, this._writeLegacyIpcFormat = typeof Q.writeLegacyIpcFormat === "boolean" ? Q.writeLegacyIpcFormat : !1;
  }
  static throughNode(Q) {
    throw new Error('"throughNode" not available in this environment');
  }
  static throughDOM(Q, J) {
    throw new Error('"throughDOM" not available in this environment');
  }
  toString(Q = !1) {
    return this._sink.toString(Q);
  }
  toUint8Array(Q = !1) {
    return this._sink.toUint8Array(Q);
  }
  writeAll(Q) {
    if (eQ(Q))
      return Q.then((J) => this.writeAll(J));
    else if (LX(Q))
      return SE(this, Q);
    return VE(this, Q);
  }
  get closed() {
    return this._sink.closed;
  }
  [Symbol.asyncIterator]() {
    return this._sink[Symbol.asyncIterator]();
  }
  toDOMStream(Q) {
    return this._sink.toDOMStream(Q);
  }
  toNodeStream(Q) {
    return this._sink.toNodeStream(Q);
  }
  close() {
    return this.reset()._sink.close();
  }
  abort(Q) {
    return this.reset()._sink.abort(Q);
  }
  finish() {
    return this._autoDestroy ? this.close() : this.reset(this._sink, this._schema), this;
  }
  reset(Q = this._sink, J = null) {
    if (Q === this._sink || Q instanceof R4)
      this._sink = Q;
    else if (this._sink = new R4, Q && cw(Q))
      this.toDOMStream({ type: "bytes" }).pipeTo(Q);
    else if (Q && pw(Q))
      this.toNodeStream({ objectMode: !1 }).pipe(Q);
    if (this._started && this._schema)
      this._writeFooter(this._schema);
    if (this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map, !J || !I$(J, this._schema))
      if (J == null)
        this._position = 0, this._schema = null;
      else
        this._started = !0, this._schema = J, this._writeSchema(J);
    return this;
  }
  write(Q) {
    let J = null;
    if (!this._sink)
      throw new Error("RecordBatchWriter is closed");
    else if (Q == null)
      return this.finish() && void 0;
    else if (Q instanceof X8 && !(J = Q.schema))
      return this.finish() && void 0;
    else if (Q instanceof Y6 && !(J = Q.schema))
      return this.finish() && void 0;
    if (J && !I$(J, this._schema)) {
      if (this._started && this._autoDestroy)
        return this.close();
      this.reset(this._sink, J);
    }
    if (Q instanceof Y6) {
      if (!(Q instanceof Pq))
        this._writeRecordBatch(Q);
    } else if (Q instanceof X8)
      this.writeAll(Q.batches);
    else if (ZZ(Q))
      this.writeAll(Q);
  }
  _writeMessage(Q, J = 8) {
    let Y = J - 1, W = O8.encode(Q), K = W.byteLength, z = !this._writeLegacyIpcFormat ? 8 : 4, N = K + z + Y & ~Y, F = N - K - z;
    if (Q.headerType === R1.RecordBatch)
      this._recordBatchBlocks.push(new D4(N, Q.bodyLength, this._position));
    else if (Q.headerType === R1.DictionaryBatch)
      this._dictionaryBlocks.push(new D4(N, Q.bodyLength, this._position));
    if (!this._writeLegacyIpcFormat)
      this._write(Int32Array.of(-1));
    if (this._write(Int32Array.of(N - z)), K > 0)
      this._write(W);
    return this._writePadding(F);
  }
  _write(Q) {
    if (this._started) {
      let J = c0(Q);
      if (J && J.byteLength > 0)
        this._sink.write(J), this._position += J.byteLength;
    }
    return this;
  }
  _writeSchema(Q) {
    return this._writeMessage(O8.from(Q));
  }
  _writeFooter(Q) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(Uq);
  }
  _writePadding(Q) {
    return Q > 0 ? this._write(new Uint8Array(Q)) : this;
  }
  _writeRecordBatch(Q) {
    let { byteLength: J, nodes: Y, bufferRegions: W, buffers: K } = S6.assemble(Q), z = new $Q(Q.numRows, Y, W), N = O8.from(z, J);
    return this._writeDictionaries(Q)._writeMessage(N)._writeBodyBuffers(K);
  }
  _writeDictionaryBatch(Q, J, Y = !1) {
    this._dictionaryDeltaOffsets.set(J, Q.length + (this._dictionaryDeltaOffsets.get(J) || 0));
    let { byteLength: W, nodes: K, bufferRegions: z, buffers: N } = S6.assemble(new t0([Q])), F = new $Q(Q.length, K, z), L = new WX(F, J, Y), w = O8.from(L, W);
    return this._writeMessage(w)._writeBodyBuffers(N);
  }
  _writeBodyBuffers(Q) {
    let J, Y, W;
    for (let K = -1, z = Q.length;++K < z; )
      if ((J = Q[K]) && (Y = J.byteLength) > 0) {
        if (this._write(J), (W = (Y + 7 & -8) - Y) > 0)
          this._writePadding(W);
      }
    return this;
  }
  _writeDictionaries(Q) {
    for (let [J, Y] of Q.dictionaries) {
      let W = this._dictionaryDeltaOffsets.get(J) || 0;
      if (W === 0 || (Y = Y === null || Y === void 0 ? void 0 : Y.slice(W)).length > 0)
        for (let K of Y.data)
          this._writeDictionaryBatch(K, J, W > 0), W += K.length;
    }
    return this;
  }
}

class T$ extends Mq {
  static writeAll(Q, J) {
    let Y = new T$(J);
    if (eQ(Q))
      return Q.then((W) => Y.writeAll(W));
    else if (LX(Q))
      return SE(Y, Q);
    return VE(Y, Q);
  }
}

class g$ extends Mq {
  static writeAll(Q) {
    let J = new g$;
    if (eQ(Q))
      return Q.then((Y) => J.writeAll(Y));
    else if (LX(Q))
      return SE(J, Q);
    return VE(J, Q);
  }
  constructor() {
    super();
    this._autoDestroy = !0;
  }
  _writeSchema(Q) {
    return this._writeMagic()._writePadding(2);
  }
  _writeFooter(Q) {
    let J = SJ.encode(new SJ(Q, A8.V4, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(Q)._write(J)._write(Int32Array.of(J.byteLength))._writeMagic();
  }
}
function VE(Q, J) {
  let Y = J;
  if (J instanceof X8)
    Y = J.batches, Q.reset(void 0, J.schema);
  for (let W of Y)
    Q.write(W);
  return Q.finish();
}
function SE(Q, J) {
  var Y, W, K, z;
  return z0(this, void 0, void 0, function* () {
    try {
      for (Y = XZ(J);W = yield Y.next(), !W.done; ) {
        let N = W.value;
        Q.write(N);
      }
    } catch (N) {
      K = { error: N };
    } finally {
      try {
        if (W && !W.done && (z = Y.return))
          yield z.call(Y);
      } finally {
        if (K)
          throw K.error;
      }
    }
    return Q.finish();
  });
}

// node_modules/apache-arrow/io/whatwg/iterable.mjs
function _D(Q, J) {
  if (LX(Q))
    return Fy(Q, J);
  if (ZZ(Q))
    return Ey(Q, J);
  throw new Error("toDOMStream() must be called with an Iterable or AsyncIterable");
}
function Ey(Q, J) {
  let Y = null, W = (J === null || J === void 0 ? void 0 : J.type) === "bytes" || !1, K = (J === null || J === void 0 ? void 0 : J.highWaterMark) || Math.pow(2, 24);
  return new ReadableStream(Object.assign(Object.assign({}, J), {
    start(N) {
      z(N, Y || (Y = Q[Symbol.iterator]()));
    },
    pull(N) {
      Y ? z(N, Y) : N.close();
    },
    cancel() {
      ((Y === null || Y === void 0 ? void 0 : Y.return) && Y.return() || !0) && (Y = null);
    }
  }), Object.assign({ highWaterMark: W ? K : void 0 }, J));
  function z(N, F) {
    let L, w = null, D = N.desiredSize || null;
    while (!(w = F.next(W ? D : null)).done) {
      if (ArrayBuffer.isView(w.value) && (L = c0(w.value)))
        D != null && W && (D = D - L.byteLength + 1), w.value = L;
      if (N.enqueue(w.value), D != null && --D <= 0)
        return;
    }
    N.close();
  }
}
function Fy(Q, J) {
  let Y = null, W = (J === null || J === void 0 ? void 0 : J.type) === "bytes" || !1, K = (J === null || J === void 0 ? void 0 : J.highWaterMark) || Math.pow(2, 24);
  return new ReadableStream(Object.assign(Object.assign({}, J), {
    start(N) {
      return z0(this, void 0, void 0, function* () {
        yield z(N, Y || (Y = Q[Symbol.asyncIterator]()));
      });
    },
    pull(N) {
      return z0(this, void 0, void 0, function* () {
        Y ? yield z(N, Y) : N.close();
      });
    },
    cancel() {
      return z0(this, void 0, void 0, function* () {
        ((Y === null || Y === void 0 ? void 0 : Y.return) && (yield Y.return()) || !0) && (Y = null);
      });
    }
  }), Object.assign({ highWaterMark: W ? K : void 0 }, J));
  function z(N, F) {
    return z0(this, void 0, void 0, function* () {
      let L, w = null, D = N.desiredSize || null;
      while (!(w = yield F.next(W ? D : null)).done) {
        if (ArrayBuffer.isView(w.value) && (L = c0(w.value)))
          D != null && W && (D = D - L.byteLength + 1), w.value = L;
        if (N.enqueue(w.value), D != null && --D <= 0)
          return;
      }
      N.close();
    });
  }
}

// node_modules/apache-arrow/io/whatwg/builder.mjs
function xD(Q) {
  return new vD(Q);
}

class vD {
  constructor(Q) {
    this._numChunks = 0, this._finished = !1, this._bufferedSize = 0;
    let { ["readableStrategy"]: J, ["writableStrategy"]: Y, ["queueingStrategy"]: W = "count" } = Q, K = bw(Q, ["readableStrategy", "writableStrategy", "queueingStrategy"]);
    this._controller = null, this._builder = S$(K), this._getSize = W !== "bytes" ? TD : gD;
    let { ["highWaterMark"]: z = W === "bytes" ? Math.pow(2, 14) : 1000 } = Object.assign({}, J), { ["highWaterMark"]: N = W === "bytes" ? Math.pow(2, 14) : 1000 } = Object.assign({}, Y);
    this.readable = new ReadableStream({
      ["cancel"]: () => {
        this._builder.clear();
      },
      ["pull"]: (F) => {
        this._maybeFlush(this._builder, this._controller = F);
      },
      ["start"]: (F) => {
        this._maybeFlush(this._builder, this._controller = F);
      }
    }, {
      highWaterMark: z,
      size: W !== "bytes" ? TD : gD
    }), this.writable = new WritableStream({
      ["abort"]: () => {
        this._builder.clear();
      },
      ["write"]: () => {
        this._maybeFlush(this._builder, this._controller);
      },
      ["close"]: () => {
        this._maybeFlush(this._builder.finish(), this._controller);
      }
    }, {
      highWaterMark: N,
      size: (F) => this._writeValueAndReturnChunkSize(F)
    });
  }
  _writeValueAndReturnChunkSize(Q) {
    let J = this._bufferedSize;
    return this._bufferedSize = this._getSize(this._builder.append(Q)), this._bufferedSize - J;
  }
  _maybeFlush(Q, J) {
    if (J == null)
      return;
    if (this._bufferedSize >= J.desiredSize)
      ++this._numChunks && this._enqueue(J, Q.toVector());
    if (Q.finished) {
      if (Q.length > 0 || this._numChunks === 0)
        ++this._numChunks && this._enqueue(J, Q.toVector());
      if (!this._finished && (this._finished = !0))
        this._enqueue(J, null);
    }
  }
  _enqueue(Q, J) {
    this._bufferedSize = 0, this._controller = null, J == null ? Q.close() : Q.enqueue(J);
  }
}
var TD = (Q) => {
  var J;
  return (J = Q === null || Q === void 0 ? void 0 : Q.length) !== null && J !== void 0 ? J : 0;
}, gD = (Q) => {
  var J;
  return (J = Q === null || Q === void 0 ? void 0 : Q.byteLength) !== null && J !== void 0 ? J : 0;
};

// node_modules/apache-arrow/io/whatwg/reader.mjs
function TH(Q, J) {
  let Y = new R4, W = null, K = new ReadableStream({
    cancel() {
      return z0(this, void 0, void 0, function* () {
        yield Y.close();
      });
    },
    start(F) {
      return z0(this, void 0, void 0, function* () {
        yield N(F, W || (W = yield z()));
      });
    },
    pull(F) {
      return z0(this, void 0, void 0, function* () {
        W ? yield N(F, W) : F.close();
      });
    }
  });
  return { writable: new WritableStream(Y, Object.assign({ highWaterMark: Math.pow(2, 14) }, Q)), readable: K };
  function z() {
    return z0(this, void 0, void 0, function* () {
      return yield (yield wQ.from(Y)).open(J);
    });
  }
  function N(F, L) {
    return z0(this, void 0, void 0, function* () {
      let w = F.desiredSize, D = null;
      while (!(D = yield L.next()).done)
        if (F.enqueue(D.value), w != null && --w <= 0)
          return;
      F.close();
    });
  }
}

// node_modules/apache-arrow/io/whatwg/writer.mjs
function gH(Q, J) {
  let Y = new this(Q), W = new SX(Y), K = new ReadableStream({
    cancel() {
      return z0(this, void 0, void 0, function* () {
        yield W.cancel();
      });
    },
    pull(N) {
      return z0(this, void 0, void 0, function* () {
        yield z(N);
      });
    },
    start(N) {
      return z0(this, void 0, void 0, function* () {
        yield z(N);
      });
    }
  }, Object.assign({ highWaterMark: Math.pow(2, 14) }, J));
  return { writable: new WritableStream(Y, Q), readable: K };
  function z(N) {
    return z0(this, void 0, void 0, function* () {
      let F = null, L = N.desiredSize;
      while (F = yield W.read(L || null))
        if (N.enqueue(F), L != null && (L -= F.byteLength) <= 0)
          return;
      N.close();
    });
  }
}
// node_modules/apache-arrow/ipc/serialization.mjs
function vJ(Q) {
  let J = wQ.from(Q);
  if (eQ(J))
    return J.then((Y) => vJ(Y));
  if (J.isAsync())
    return J.readAll().then((Y) => new X8(Y));
  return new X8(J.readAll());
}
function Dq(Q, J = "stream") {
  return (J === "stream" ? T$ : g$).writeAll(Q).toUint8Array(!0);
}
// node_modules/apache-arrow/Arrow.mjs
var Py = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ON), sN), uN), IN), AN), bN), {
  compareSchemas: I$,
  compareFields: $D,
  compareTypes: YD
});
// node_modules/apache-arrow/Arrow.dom.mjs
y8.toDOMStream = _D;
H6.throughDOM = xD;
wQ.throughDOM = TH;
wq.throughDOM = TH;
gJ.throughDOM = TH;
Mq.throughDOM = gH;
g$.throughDOM = gH;
T$.throughDOM = gH;

// node_modules/streamlit-component-lib/dist/ArrowTable.js
var xH = function() {
  function Q(J, Y, W, K) {
    var z = this;
    this.getCell = function(N, F) {
      var L = N < z.headerRows && F < z.headerColumns, w = N >= z.headerRows && F < z.headerColumns, D = N < z.headerRows && F >= z.headerColumns;
      if (L) {
        var k = ["blank"];
        if (F > 0)
          k.push("level" + N);
        return {
          type: "blank",
          classNames: k.join(" "),
          content: ""
        };
      } else if (D) {
        var I = F - z.headerColumns, k = [
          "col_heading",
          "level" + N,
          "col" + I
        ];
        return {
          type: "columns",
          classNames: k.join(" "),
          content: z.getContent(z.columnsTable, I, N)
        };
      } else if (w) {
        var h = N - z.headerRows, k = [
          "row_heading",
          "level" + F,
          "row" + h
        ];
        return {
          type: "index",
          id: "T_".concat(z.uuid, "level").concat(F, "_row").concat(h),
          classNames: k.join(" "),
          content: z.getContent(z.indexTable, h, F)
        };
      } else {
        var h = N - z.headerRows, I = F - z.headerColumns, k = [
          "data",
          "row" + h,
          "col" + I
        ], o = z.styler ? z.getContent(z.styler.displayValuesTable, h, I) : z.getContent(z.dataTable, h, I);
        return {
          type: "data",
          id: "T_".concat(z.uuid, "row").concat(h, "_col").concat(I),
          classNames: k.join(" "),
          content: o
        };
      }
    }, this.getContent = function(N, F, L) {
      var w = N.getChildAt(L);
      if (w === null)
        return "";
      var D = z.getColumnTypeId(N, L);
      switch (D) {
        case S.Timestamp:
          return z.nanosToDate(w.get(F));
        default:
          return w.get(F);
      }
    }, this.dataTable = vJ(J), this.indexTable = vJ(Y), this.columnsTable = vJ(W), this.styler = K ? {
      caption: K.caption,
      displayValuesTable: vJ(K.displayValues),
      styles: K.styles,
      uuid: K.uuid
    } : void 0;
  }
  return Object.defineProperty(Q.prototype, "rows", {
    get: function() {
      return this.indexTable.numRows + this.columnsTable.numCols;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(Q.prototype, "columns", {
    get: function() {
      return this.indexTable.numCols + this.columnsTable.numRows;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(Q.prototype, "headerRows", {
    get: function() {
      return this.rows - this.dataRows;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(Q.prototype, "headerColumns", {
    get: function() {
      return this.columns - this.dataColumns;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(Q.prototype, "dataRows", {
    get: function() {
      return this.dataTable.numRows;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(Q.prototype, "dataColumns", {
    get: function() {
      return this.dataTable.numCols;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(Q.prototype, "uuid", {
    get: function() {
      return this.styler && this.styler.uuid;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(Q.prototype, "caption", {
    get: function() {
      return this.styler && this.styler.caption;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(Q.prototype, "styles", {
    get: function() {
      return this.styler && this.styler.styles;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(Q.prototype, "table", {
    get: function() {
      return this.dataTable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(Q.prototype, "index", {
    get: function() {
      return this.indexTable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(Q.prototype, "columnTable", {
    get: function() {
      return this.columnsTable;
    },
    enumerable: !1,
    configurable: !0
  }), Q.prototype.serialize = function() {
    return {
      data: Dq(this.dataTable),
      index: Dq(this.indexTable),
      columns: Dq(this.columnsTable)
    };
  }, Q.prototype.getColumnTypeId = function(J, Y) {
    return J.schema.fields[Y].type.typeId;
  }, Q.prototype.nanosToDate = function(J) {
    return new Date(J / 1e6);
  }, Q;
}();

// node_modules/streamlit-component-lib/dist/streamlit.js
var sK = function() {
  return sK = Object.assign || function(Q) {
    for (var J, Y = 1, W = arguments.length;Y < W; Y++) {
      J = arguments[Y];
      for (var K in J)
        if (Object.prototype.hasOwnProperty.call(J, K))
          Q[K] = J[K];
    }
    return Q;
  }, sK.apply(this, arguments);
}, oK;
(function(Q) {
  Q.COMPONENT_READY = "streamlit:componentReady", Q.SET_COMPONENT_VALUE = "streamlit:setComponentValue", Q.SET_FRAME_HEIGHT = "streamlit:setFrameHeight";
})(oK || (oK = {}));
var bQ = function() {
  function Q() {}
  return Q.API_VERSION = 1, Q.RENDER_EVENT = "streamlit:render", Q.events = new EventTarget, Q.registeredMessageListener = !1, Q.setComponentReady = function() {
    if (!Q.registeredMessageListener)
      window.addEventListener("message", Q.onMessageEvent), Q.registeredMessageListener = !0;
    Q.sendBackMsg(oK.COMPONENT_READY, {
      apiVersion: Q.API_VERSION
    });
  }, Q.setFrameHeight = function(J) {
    if (J === void 0)
      J = document.body.scrollHeight;
    if (J === Q.lastFrameHeight)
      return;
    Q.lastFrameHeight = J, Q.sendBackMsg(oK.SET_FRAME_HEIGHT, { height: J });
  }, Q.setComponentValue = function(J) {
    var Y;
    if (J instanceof xH)
      Y = "dataframe", J = J.serialize();
    else if (Uy(J))
      Y = "bytes", J = new Uint8Array(J.buffer);
    else if (J instanceof ArrayBuffer)
      Y = "bytes", J = new Uint8Array(J);
    else
      Y = "json";
    Q.sendBackMsg(oK.SET_COMPONENT_VALUE, {
      value: J,
      dataType: Y
    });
  }, Q.onMessageEvent = function(J) {
    var Y = J.data.type;
    switch (Y) {
      case Q.RENDER_EVENT:
        Q.onRenderMessage(J.data);
        break;
    }
  }, Q.onRenderMessage = function(J) {
    var Y = J.args;
    if (Y == null)
      console.error("Got null args in onRenderMessage. This should never happen"), Y = {};
    var W = J.dfs && J.dfs.length > 0 ? Q.argsDataframeToObject(J.dfs) : {};
    Y = sK(sK({}, Y), W);
    var K = Boolean(J.disabled), z = J.theme;
    if (z)
      Ay(z);
    var N = { disabled: K, args: Y, theme: z }, F = new CustomEvent(Q.RENDER_EVENT, {
      detail: N
    });
    Q.events.dispatchEvent(F);
  }, Q.argsDataframeToObject = function(J) {
    var Y = J.map(function(W) {
      var { key: K, value: z } = W;
      return [K, Q.toArrowTable(z)];
    });
    return Object.fromEntries(Y);
  }, Q.toArrowTable = function(J) {
    var Y, W = (Y = J.data, Y.data), K = Y.index, z = Y.columns, N = Y.styler;
    return new xH(W, K, z, N);
  }, Q.sendBackMsg = function(J, Y) {
    window.parent.postMessage(sK({ isStreamlitMessage: !0, type: J }, Y), "*");
  }, Q;
}(), Ay = function(Q) {
  var J = document.createElement("style");
  document.head.appendChild(J), J.innerHTML = `
    :root {
      --primary-color: `.concat(Q.primaryColor, `;
      --background-color: `).concat(Q.backgroundColor, `;
      --secondary-background-color: `).concat(Q.secondaryBackgroundColor, `;
      --text-color: `).concat(Q.textColor, `;
      --font: `).concat(Q.font, `;
    }

    body {
      background-color: var(--background-color);
      color: var(--text-color);
    }
  `);
};
function Uy(Q) {
  var J = !1;
  try {
    J = Q instanceof BigInt64Array || Q instanceof BigUint64Array;
  } catch (Y) {}
  return Q instanceof Int8Array || Q instanceof Uint8Array || Q instanceof Uint8ClampedArray || Q instanceof Int16Array || Q instanceof Uint16Array || Q instanceof Int32Array || Q instanceof Uint32Array || Q instanceof Float32Array || Q instanceof Float64Array || J;
}

// node_modules/streamlit-component-lib/dist/StreamlitReact.js
var hD = function() {
  var Q = function(J, Y) {
    return Q = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(W, K) {
      W.__proto__ = K;
    } || function(W, K) {
      for (var z in K)
        if (Object.prototype.hasOwnProperty.call(K, z))
          W[z] = K[z];
    }, Q(J, Y);
  };
  return function(J, Y) {
    if (typeof Y !== "function" && Y !== null)
      throw new TypeError("Class extends value " + String(Y) + " is not a constructor or null");
    Q(J, Y);
    function W() {
      this.constructor = J;
    }
    J.prototype = Y === null ? Object.create(Y) : (W.prototype = Y.prototype, new W);
  };
}(), IE = function(Q) {
  hD(J, Q);
  function J() {
    return Q !== null && Q.apply(this, arguments) || this;
  }
  return J.prototype.componentDidMount = function() {
    bQ.setFrameHeight();
  }, J.prototype.componentDidUpdate = function() {
    bQ.setFrameHeight();
  }, J;
}(x$.default.PureComponent);
function _E(Q) {
  var J = function(Y) {
    hD(W, Y);
    function W(K) {
      var z = Y.call(this, K) || this;
      return z.componentDidMount = function() {
        bQ.events.addEventListener(bQ.RENDER_EVENT, z.onRenderEvent), bQ.setComponentReady();
      }, z.componentDidUpdate = function() {
        if (z.state.componentError != null)
          bQ.setFrameHeight();
      }, z.componentWillUnmount = function() {
        bQ.events.removeEventListener(bQ.RENDER_EVENT, z.onRenderEvent);
      }, z.onRenderEvent = function(N) {
        z.setState({ renderData: N.detail });
      }, z.state = {
        renderData: void 0,
        componentError: void 0
      }, z;
    }
    return W.prototype.render = function() {
      if (this.state.componentError != null)
        return x$.default.createElement("div", null, x$.default.createElement("h1", null, "Component Error"), x$.default.createElement("span", null, this.state.componentError.message));
      if (this.state.renderData == null)
        return null;
      return x$.default.createElement(Q, { width: window.innerWidth, disabled: this.state.renderData.disabled, args: this.state.renderData.args, theme: this.state.renderData.theme });
    }, W.getDerivedStateFromError = function(K) {
      return { componentError: K };
    }, W;
  }(x$.default.PureComponent);
  return yD.default(J, Q);
}
// src/StreamlitWrapper.tsx
var dk = L6(UQ(), 1);

// src/ContigsOrganizer.tsx
var D8 = L6(UQ(), 1);

// src/components/SortableList/SortableList.tsx
var NZ = L6(UQ(), 1);

// node_modules/@dnd-kit/core/dist/core.esm.js
var u = L6(UQ(), 1), yJ = L6(qN(), 1);

// node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var I6 = L6(UQ(), 1);
function mD() {
  for (var Q = arguments.length, J = new Array(Q), Y = 0;Y < Q; Y++)
    J[Y] = arguments[Y];
  return I6.useMemo(() => (W) => {
    J.forEach((K) => K(W));
  }, J);
}
var aK = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function v$(Q) {
  let J = Object.prototype.toString.call(Q);
  return J === "[object Window]" || J === "[object global]";
}
function vH(Q) {
  return "nodeType" in Q;
}
function YQ(Q) {
  var J, Y;
  if (!Q)
    return window;
  if (v$(Q))
    return Q;
  if (!vH(Q))
    return window;
  return (J = (Y = Q.ownerDocument) == null ? void 0 : Y.defaultView) != null ? J : window;
}
function hH(Q) {
  let {
    Document: J
  } = YQ(Q);
  return Q instanceof J;
}
function Rq(Q) {
  if (v$(Q))
    return !1;
  return Q instanceof YQ(Q).HTMLElement;
}
function gE(Q) {
  return Q instanceof YQ(Q).SVGElement;
}
function h$(Q) {
  if (!Q)
    return document;
  if (v$(Q))
    return Q.document;
  if (!vH(Q))
    return document;
  if (hH(Q))
    return Q;
  if (Rq(Q) || gE(Q))
    return Q.ownerDocument;
  return document;
}
var uQ = aK ? I6.useLayoutEffect : I6.useEffect;
function rK(Q) {
  let J = I6.useRef(Q);
  return uQ(() => {
    J.current = Q;
  }), I6.useCallback(function() {
    for (var Y = arguments.length, W = new Array(Y), K = 0;K < Y; K++)
      W[K] = arguments[K];
    return J.current == null ? void 0 : J.current(...W);
  }, []);
}
function bD() {
  let Q = I6.useRef(null), J = I6.useCallback((W, K) => {
    Q.current = setInterval(W, K);
  }, []), Y = I6.useCallback(() => {
    if (Q.current !== null)
      clearInterval(Q.current), Q.current = null;
  }, []);
  return [J, Y];
}
function kq(Q, J) {
  if (J === void 0)
    J = [Q];
  let Y = I6.useRef(Q);
  return uQ(() => {
    if (Y.current !== Q)
      Y.current = Q;
  }, J), Y;
}
function jq(Q, J) {
  let Y = I6.useRef();
  return I6.useMemo(() => {
    let W = Q(Y.current);
    return Y.current = W, W;
  }, [...J]);
}
function iK(Q) {
  let J = rK(Q), Y = I6.useRef(null), W = I6.useCallback((K) => {
    if (K !== Y.current)
      J == null || J(K, Y.current);
    Y.current = K;
  }, []);
  return [Y, W];
}
function tK(Q) {
  let J = I6.useRef();
  return I6.useEffect(() => {
    J.current = Q;
  }, [Q]), J.current;
}
var TE = {};
function y$(Q, J) {
  return I6.useMemo(() => {
    if (J)
      return J;
    let Y = TE[Q] == null ? 0 : TE[Q] + 1;
    return TE[Q] = Y, Q + "-" + Y;
  }, [Q, J]);
}
function uD(Q) {
  return function(J) {
    for (var Y = arguments.length, W = new Array(Y > 1 ? Y - 1 : 0), K = 1;K < Y; K++)
      W[K - 1] = arguments[K];
    return W.reduce((z, N) => {
      let F = Object.entries(N);
      for (let [L, w] of F) {
        let D = z[L];
        if (D != null)
          z[L] = D + Q * w;
      }
      return z;
    }, {
      ...J
    });
  };
}
var f$ = /* @__PURE__ */ uD(1), m$ = /* @__PURE__ */ uD(-1);
function Ly(Q) {
  return "clientX" in Q && "clientY" in Q;
}
function Bq(Q) {
  if (!Q)
    return !1;
  let {
    KeyboardEvent: J
  } = YQ(Q.target);
  return J && Q instanceof J;
}
function Oy(Q) {
  if (!Q)
    return !1;
  let {
    TouchEvent: J
  } = YQ(Q.target);
  return J && Q instanceof J;
}
function eK(Q) {
  if (Oy(Q)) {
    if (Q.touches && Q.touches.length) {
      let {
        clientX: J,
        clientY: Y
      } = Q.touches[0];
      return {
        x: J,
        y: Y
      };
    } else if (Q.changedTouches && Q.changedTouches.length) {
      let {
        clientX: J,
        clientY: Y
      } = Q.changedTouches[0];
      return {
        x: J,
        y: Y
      };
    }
  }
  if (Ly(Q))
    return {
      x: Q.clientX,
      y: Q.clientY
    };
  return null;
}
var GZ = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(Q) {
      if (!Q)
        return;
      let {
        x: J,
        y: Y
      } = Q;
      return "translate3d(" + (J ? Math.round(J) : 0) + "px, " + (Y ? Math.round(Y) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(Q) {
      if (!Q)
        return;
      let {
        scaleX: J,
        scaleY: Y
      } = Q;
      return "scaleX(" + J + ") scaleY(" + Y + ")";
    }
  },
  Transform: {
    toString(Q) {
      if (!Q)
        return;
      return [GZ.Translate.toString(Q), GZ.Scale.toString(Q)].join(" ");
    }
  },
  Transition: {
    toString(Q) {
      let {
        property: J,
        duration: Y,
        easing: W
      } = Q;
      return J + " " + Y + "ms " + W;
    }
  }
}), fD = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function cD(Q) {
  if (Q.matches(fD))
    return Q;
  return Q.querySelector(fD);
}

// node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var b$ = L6(UQ(), 1), wy = {
  display: "none"
};
function pD(Q) {
  let {
    id: J,
    value: Y
  } = Q;
  return b$.default.createElement("div", {
    id: J,
    style: wy
  }, Y);
}
function dD(Q) {
  let {
    id: J,
    announcement: Y,
    ariaLiveType: W = "assertive"
  } = Q, K = {
    position: "fixed",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return b$.default.createElement("div", {
    id: J,
    style: K,
    role: "status",
    "aria-live": W,
    "aria-atomic": !0
  }, Y);
}
function lD() {
  let [Q, J] = b$.useState("");
  return {
    announce: b$.useCallback((W) => {
      if (W != null)
        J(W);
    }, []),
    announcement: Q
  };
}

// node_modules/@dnd-kit/core/dist/core.esm.js
var JR = /* @__PURE__ */ u.createContext(null);
function My(Q) {
  let J = u.useContext(JR);
  u.useEffect(() => {
    if (!J)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return J(Q);
  }, [Q, J]);
}
function Dy() {
  let [Q] = u.useState(() => /* @__PURE__ */ new Set), J = u.useCallback((W) => {
    return Q.add(W), () => Q.delete(W);
  }, [Q]);
  return [u.useCallback((W) => {
    let {
      type: K,
      event: z
    } = W;
    Q.forEach((N) => {
      var F;
      return (F = N[K]) == null ? void 0 : F.call(N, z);
    });
  }, [Q]), J];
}
var Ry = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, ky = {
  onDragStart(Q) {
    let {
      active: J
    } = Q;
    return "Picked up draggable item " + J.id + ".";
  },
  onDragOver(Q) {
    let {
      active: J,
      over: Y
    } = Q;
    if (Y)
      return "Draggable item " + J.id + " was moved over droppable area " + Y.id + ".";
    return "Draggable item " + J.id + " is no longer over a droppable area.";
  },
  onDragEnd(Q) {
    let {
      active: J,
      over: Y
    } = Q;
    if (Y)
      return "Draggable item " + J.id + " was dropped over droppable area " + Y.id;
    return "Draggable item " + J.id + " was dropped.";
  },
  onDragCancel(Q) {
    let {
      active: J
    } = Q;
    return "Dragging was cancelled. Draggable item " + J.id + " was dropped.";
  }
};
function jy(Q) {
  let {
    announcements: J = ky,
    container: Y,
    hiddenTextDescribedById: W,
    screenReaderInstructions: K = Ry
  } = Q, {
    announce: z,
    announcement: N
  } = lD(), F = y$("DndLiveRegion"), [L, w] = u.useState(!1);
  if (u.useEffect(() => {
    w(!0);
  }, []), My(u.useMemo(() => ({
    onDragStart(k) {
      let {
        active: I
      } = k;
      z(J.onDragStart({
        active: I
      }));
    },
    onDragMove(k) {
      let {
        active: I,
        over: h
      } = k;
      if (J.onDragMove)
        z(J.onDragMove({
          active: I,
          over: h
        }));
    },
    onDragOver(k) {
      let {
        active: I,
        over: h
      } = k;
      z(J.onDragOver({
        active: I,
        over: h
      }));
    },
    onDragEnd(k) {
      let {
        active: I,
        over: h
      } = k;
      z(J.onDragEnd({
        active: I,
        over: h
      }));
    },
    onDragCancel(k) {
      let {
        active: I,
        over: h
      } = k;
      z(J.onDragCancel({
        active: I,
        over: h
      }));
    }
  }), [z, J])), !L)
    return null;
  let D = u.default.createElement(u.default.Fragment, null, u.default.createElement(pD, {
    id: W,
    value: K.draggable
  }), u.default.createElement(dD, {
    id: F,
    announcement: N
  }));
  return Y ? yJ.createPortal(D, Y) : D;
}
var J8;
(function(Q) {
  Q.DragStart = "dragStart", Q.DragMove = "dragMove", Q.DragEnd = "dragEnd", Q.DragCancel = "dragCancel", Q.DragOver = "dragOver", Q.RegisterDroppable = "registerDroppable", Q.SetDroppableDisabled = "setDroppableDisabled", Q.UnregisterDroppable = "unregisterDroppable";
})(J8 || (J8 = {}));
function fH() {}
function uE(Q, J) {
  return u.useMemo(() => ({
    sensor: Q,
    options: J != null ? J : {}
  }), [Q, J]);
}
function $R() {
  for (var Q = arguments.length, J = new Array(Q), Y = 0;Y < Q; Y++)
    J[Y] = arguments[Y];
  return u.useMemo(() => [...J].filter((W) => W != null), [...J]);
}
var zZ = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function By(Q, J) {
  return Math.sqrt(Math.pow(Q.x - J.x, 2) + Math.pow(Q.y - J.y, 2));
}
function Cy(Q, J) {
  let Y = eK(Q);
  if (!Y)
    return "0 0";
  let W = {
    x: (Y.x - J.left) / J.width * 100,
    y: (Y.y - J.top) / J.height * 100
  };
  return W.x + "% " + W.y + "%";
}
function Vy(Q, J) {
  let {
    data: {
      value: Y
    }
  } = Q, {
    data: {
      value: W
    }
  } = J;
  return Y - W;
}
function Sy(Q, J) {
  let {
    data: {
      value: Y
    }
  } = Q, {
    data: {
      value: W
    }
  } = J;
  return W - Y;
}
function nD(Q) {
  let {
    left: J,
    top: Y,
    height: W,
    width: K
  } = Q;
  return [{
    x: J,
    y: Y
  }, {
    x: J + K,
    y: Y
  }, {
    x: J,
    y: Y + W
  }, {
    x: J + K,
    y: Y + W
  }];
}
function cE(Q, J) {
  if (!Q || Q.length === 0)
    return null;
  let [Y] = Q;
  return J ? Y[J] : Y;
}
var YR = (Q) => {
  let {
    collisionRect: J,
    droppableRects: Y,
    droppableContainers: W
  } = Q, K = nD(J), z = [];
  for (let N of W) {
    let {
      id: F
    } = N, L = Y.get(F);
    if (L) {
      let w = nD(L), D = K.reduce((I, h, o) => {
        return I + By(w[o], h);
      }, 0), k = Number((D / 4).toFixed(4));
      z.push({
        id: F,
        data: {
          droppableContainer: N,
          value: k
        }
      });
    }
  }
  return z.sort(Vy);
};
function Iy(Q, J) {
  let Y = Math.max(J.top, Q.top), W = Math.max(J.left, Q.left), K = Math.min(J.left + J.width, Q.left + Q.width), z = Math.min(J.top + J.height, Q.top + Q.height), N = K - W, F = z - Y;
  if (W < K && Y < z) {
    let L = J.width * J.height, w = Q.width * Q.height, D = N * F, k = D / (L + w - D);
    return Number(k.toFixed(4));
  }
  return 0;
}
var _y = (Q) => {
  let {
    collisionRect: J,
    droppableRects: Y,
    droppableContainers: W
  } = Q, K = [];
  for (let z of W) {
    let {
      id: N
    } = z, F = Y.get(N);
    if (F) {
      let L = Iy(F, J);
      if (L > 0)
        K.push({
          id: N,
          data: {
            droppableContainer: z,
            value: L
          }
        });
    }
  }
  return K.sort(Sy);
};
function Ty(Q, J, Y) {
  return {
    ...Q,
    scaleX: J && Y ? J.width / Y.width : 1,
    scaleY: J && Y ? J.height / Y.height : 1
  };
}
function qR(Q, J) {
  return Q && J ? {
    x: Q.left - J.left,
    y: Q.top - J.top
  } : zZ;
}
function gy(Q) {
  return function J(Y) {
    for (var W = arguments.length, K = new Array(W > 1 ? W - 1 : 0), z = 1;z < W; z++)
      K[z - 1] = arguments[z];
    return K.reduce((N, F) => ({
      ...N,
      top: N.top + Q * F.y,
      bottom: N.bottom + Q * F.y,
      left: N.left + Q * F.x,
      right: N.right + Q * F.x
    }), {
      ...Y
    });
  };
}
var xy = /* @__PURE__ */ gy(1);
function WR(Q) {
  if (Q.startsWith("matrix3d(")) {
    let J = Q.slice(9, -1).split(/, /);
    return {
      x: +J[12],
      y: +J[13],
      scaleX: +J[0],
      scaleY: +J[5]
    };
  } else if (Q.startsWith("matrix(")) {
    let J = Q.slice(7, -1).split(/, /);
    return {
      x: +J[4],
      y: +J[5],
      scaleX: +J[0],
      scaleY: +J[3]
    };
  }
  return null;
}
function vy(Q, J, Y) {
  let W = WR(J);
  if (!W)
    return Q;
  let {
    scaleX: K,
    scaleY: z,
    x: N,
    y: F
  } = W, L = Q.left - N - (1 - K) * parseFloat(Y), w = Q.top - F - (1 - z) * parseFloat(Y.slice(Y.indexOf(" ") + 1)), D = K ? Q.width / K : Q.width, k = z ? Q.height / z : Q.height;
  return {
    width: D,
    height: k,
    top: w,
    right: L + D,
    bottom: w + k,
    left: L
  };
}
var hy = {
  ignoreTransform: !1
};
function u$(Q, J) {
  if (J === void 0)
    J = hy;
  let Y = Q.getBoundingClientRect();
  if (J.ignoreTransform) {
    let {
      transform: w,
      transformOrigin: D
    } = YQ(Q).getComputedStyle(Q);
    if (w)
      Y = vy(Y, w, D);
  }
  let {
    top: W,
    left: K,
    width: z,
    height: N,
    bottom: F,
    right: L
  } = Y;
  return {
    top: W,
    left: K,
    width: z,
    height: N,
    bottom: F,
    right: L
  };
}
function sD(Q) {
  return u$(Q, {
    ignoreTransform: !0
  });
}
function yy(Q) {
  let { innerWidth: J, innerHeight: Y } = Q;
  return {
    top: 0,
    left: 0,
    right: J,
    bottom: Y,
    width: J,
    height: Y
  };
}
function fy(Q, J) {
  if (J === void 0)
    J = YQ(Q).getComputedStyle(Q);
  return J.position === "fixed";
}
function my(Q, J) {
  if (J === void 0)
    J = YQ(Q).getComputedStyle(Q);
  let Y = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((K) => {
    let z = J[K];
    return typeof z === "string" ? Y.test(z) : !1;
  });
}
function Z3(Q, J) {
  let Y = [];
  function W(K) {
    if (J != null && Y.length >= J)
      return Y;
    if (!K)
      return Y;
    if (hH(K) && K.scrollingElement != null && !Y.includes(K.scrollingElement))
      return Y.push(K.scrollingElement), Y;
    if (!Rq(K) || gE(K))
      return Y;
    if (Y.includes(K))
      return Y;
    let z = YQ(Q).getComputedStyle(K);
    if (K !== Q) {
      if (my(K, z))
        Y.push(K);
    }
    if (fy(K, z))
      return Y;
    return W(K.parentNode);
  }
  if (!Q)
    return Y;
  return W(Q);
}
function KR(Q) {
  let [J] = Z3(Q, 1);
  return J != null ? J : null;
}
function xE(Q) {
  if (!aK || !Q)
    return null;
  if (v$(Q))
    return Q;
  if (!vH(Q))
    return null;
  if (hH(Q) || Q === h$(Q).scrollingElement)
    return window;
  if (Rq(Q))
    return Q;
  return null;
}
function HR(Q) {
  if (v$(Q))
    return Q.scrollX;
  return Q.scrollLeft;
}
function GR(Q) {
  if (v$(Q))
    return Q.scrollY;
  return Q.scrollTop;
}
function fE(Q) {
  return {
    x: HR(Q),
    y: GR(Q)
  };
}
var w8;
(function(Q) {
  Q[Q.Forward = 1] = "Forward", Q[Q.Backward = -1] = "Backward";
})(w8 || (w8 = {}));
function zR(Q) {
  if (!aK || !Q)
    return !1;
  return Q === document.scrollingElement;
}
function NR(Q) {
  let J = {
    x: 0,
    y: 0
  }, Y = zR(Q) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: Q.clientHeight,
    width: Q.clientWidth
  }, W = {
    x: Q.scrollWidth - Y.width,
    y: Q.scrollHeight - Y.height
  }, K = Q.scrollTop <= J.y, z = Q.scrollLeft <= J.x, N = Q.scrollTop >= W.y, F = Q.scrollLeft >= W.x;
  return {
    isTop: K,
    isLeft: z,
    isBottom: N,
    isRight: F,
    maxScroll: W,
    minScroll: J
  };
}
var by = {
  x: 0.2,
  y: 0.2
};
function uy(Q, J, Y, W, K) {
  let {
    top: z,
    left: N,
    right: F,
    bottom: L
  } = Y;
  if (W === void 0)
    W = 10;
  if (K === void 0)
    K = by;
  let {
    isTop: w,
    isBottom: D,
    isLeft: k,
    isRight: I
  } = NR(Q), h = {
    x: 0,
    y: 0
  }, o = {
    x: 0,
    y: 0
  }, p = {
    height: J.height * K.y,
    width: J.width * K.x
  };
  if (!w && z <= J.top + p.height)
    h.y = w8.Backward, o.y = W * Math.abs((J.top + p.height - z) / p.height);
  else if (!D && L >= J.bottom - p.height)
    h.y = w8.Forward, o.y = W * Math.abs((J.bottom - p.height - L) / p.height);
  if (!I && F >= J.right - p.width)
    h.x = w8.Forward, o.x = W * Math.abs((J.right - p.width - F) / p.width);
  else if (!k && N <= J.left + p.width)
    h.x = w8.Backward, o.x = W * Math.abs((J.left + p.width - N) / p.width);
  return {
    direction: h,
    speed: o
  };
}
function cy(Q) {
  if (Q === document.scrollingElement) {
    let {
      innerWidth: z,
      innerHeight: N
    } = window;
    return {
      top: 0,
      left: 0,
      right: z,
      bottom: N,
      width: z,
      height: N
    };
  }
  let {
    top: J,
    left: Y,
    right: W,
    bottom: K
  } = Q.getBoundingClientRect();
  return {
    top: J,
    left: Y,
    right: W,
    bottom: K,
    width: Q.clientWidth,
    height: Q.clientHeight
  };
}
function ER(Q) {
  return Q.reduce((J, Y) => {
    return f$(J, fE(Y));
  }, zZ);
}
function py(Q) {
  return Q.reduce((J, Y) => {
    return J + HR(Y);
  }, 0);
}
function dy(Q) {
  return Q.reduce((J, Y) => {
    return J + GR(Y);
  }, 0);
}
function FR(Q, J) {
  if (J === void 0)
    J = u$;
  if (!Q)
    return;
  let {
    top: Y,
    left: W,
    bottom: K,
    right: z
  } = J(Q);
  if (!KR(Q))
    return;
  if (K <= 0 || z <= 0 || Y >= window.innerHeight || W >= window.innerWidth)
    Q.scrollIntoView({
      block: "center",
      inline: "center"
    });
}
var ly = [["x", ["left", "right"], py], ["y", ["top", "bottom"], dy]];

class bH {
  constructor(Q, J) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    let Y = Z3(J), W = ER(Y);
    this.rect = {
      ...Q
    }, this.width = Q.width, this.height = Q.height;
    for (let [K, z, N] of ly)
      for (let F of z)
        Object.defineProperty(this, F, {
          get: () => {
            let L = N(Y), w = W[K] - L;
            return this.rect[F] + w;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}

class Cq {
  constructor(Q) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((J) => {
        var Y;
        return (Y = this.target) == null ? void 0 : Y.removeEventListener(...J);
      });
    }, this.target = Q;
  }
  add(Q, J, Y) {
    var W;
    (W = this.target) == null || W.addEventListener(Q, J, Y), this.listeners.push([Q, J, Y]);
  }
}
function ny(Q) {
  let {
    EventTarget: J
  } = YQ(Q);
  return Q instanceof J ? Q : h$(Q);
}
function vE(Q, J) {
  let Y = Math.abs(Q.x), W = Math.abs(Q.y);
  if (typeof J === "number")
    return Math.sqrt(Y ** 2 + W ** 2) > J;
  if ("x" in J && "y" in J)
    return Y > J.x && W > J.y;
  if ("x" in J)
    return Y > J.x;
  if ("y" in J)
    return W > J.y;
  return !1;
}
var _X;
(function(Q) {
  Q.Click = "click", Q.DragStart = "dragstart", Q.Keydown = "keydown", Q.ContextMenu = "contextmenu", Q.Resize = "resize", Q.SelectionChange = "selectionchange", Q.VisibilityChange = "visibilitychange";
})(_X || (_X = {}));
function oD(Q) {
  Q.preventDefault();
}
function sy(Q) {
  Q.stopPropagation();
}
var L1;
(function(Q) {
  Q.Space = "Space", Q.Down = "ArrowDown", Q.Right = "ArrowRight", Q.Left = "ArrowLeft", Q.Up = "ArrowUp", Q.Esc = "Escape", Q.Enter = "Enter";
})(L1 || (L1 = {}));
var PR = {
  start: [L1.Space, L1.Enter],
  cancel: [L1.Esc],
  end: [L1.Space, L1.Enter]
}, oy = (Q, J) => {
  let {
    currentCoordinates: Y
  } = J;
  switch (Q.code) {
    case L1.Right:
      return {
        ...Y,
        x: Y.x + 25
      };
    case L1.Left:
      return {
        ...Y,
        x: Y.x - 25
      };
    case L1.Down:
      return {
        ...Y,
        y: Y.y + 25
      };
    case L1.Up:
      return {
        ...Y,
        y: Y.y - 25
      };
  }
  return;
};

class J3 {
  constructor(Q) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = Q;
    let {
      event: {
        target: J
      }
    } = Q;
    this.props = Q, this.listeners = new Cq(h$(J)), this.windowListeners = new Cq(YQ(J)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(_X.Resize, this.handleCancel), this.windowListeners.add(_X.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(_X.Keydown, this.handleKeyDown));
  }
  handleStart() {
    let {
      activeNode: Q,
      onStart: J
    } = this.props, Y = Q.node.current;
    if (Y)
      FR(Y);
    J(zZ);
  }
  handleKeyDown(Q) {
    if (Bq(Q)) {
      let {
        active: J,
        context: Y,
        options: W
      } = this.props, {
        keyboardCodes: K = PR,
        coordinateGetter: z = oy,
        scrollBehavior: N = "smooth"
      } = W, {
        code: F
      } = Q;
      if (K.end.includes(F)) {
        this.handleEnd(Q);
        return;
      }
      if (K.cancel.includes(F)) {
        this.handleCancel(Q);
        return;
      }
      let {
        collisionRect: L
      } = Y.current, w = L ? {
        x: L.left,
        y: L.top
      } : zZ;
      if (!this.referenceCoordinates)
        this.referenceCoordinates = w;
      let D = z(Q, {
        active: J,
        context: Y.current,
        currentCoordinates: w
      });
      if (D) {
        let k = m$(D, w), I = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: h
        } = Y.current;
        for (let o of h) {
          let p = Q.code, {
            isTop: X0,
            isRight: d,
            isLeft: Z0,
            isBottom: n,
            maxScroll: r,
            minScroll: i
          } = NR(o), t = cy(o), O0 = {
            x: Math.min(p === L1.Right ? t.right - t.width / 2 : t.right, Math.max(p === L1.Right ? t.left : t.left + t.width / 2, D.x)),
            y: Math.min(p === L1.Down ? t.bottom - t.height / 2 : t.bottom, Math.max(p === L1.Down ? t.top : t.top + t.height / 2, D.y))
          }, I0 = p === L1.Right && !d || p === L1.Left && !Z0, P0 = p === L1.Down && !n || p === L1.Up && !X0;
          if (I0 && O0.x !== D.x) {
            let A0 = o.scrollLeft + k.x, y0 = p === L1.Right && A0 <= r.x || p === L1.Left && A0 >= i.x;
            if (y0 && !k.y) {
              o.scrollTo({
                left: A0,
                behavior: N
              });
              return;
            }
            if (y0)
              I.x = o.scrollLeft - A0;
            else
              I.x = p === L1.Right ? o.scrollLeft - r.x : o.scrollLeft - i.x;
            if (I.x)
              o.scrollBy({
                left: -I.x,
                behavior: N
              });
            break;
          } else if (P0 && O0.y !== D.y) {
            let A0 = o.scrollTop + k.y, y0 = p === L1.Down && A0 <= r.y || p === L1.Up && A0 >= i.y;
            if (y0 && !k.x) {
              o.scrollTo({
                top: A0,
                behavior: N
              });
              return;
            }
            if (y0)
              I.y = o.scrollTop - A0;
            else
              I.y = p === L1.Down ? o.scrollTop - r.y : o.scrollTop - i.y;
            if (I.y)
              o.scrollBy({
                top: -I.y,
                behavior: N
              });
            break;
          }
        }
        this.handleMove(Q, f$(m$(D, this.referenceCoordinates), I));
      }
    }
  }
  handleMove(Q, J) {
    let {
      onMove: Y
    } = this.props;
    Q.preventDefault(), Y(J);
  }
  handleEnd(Q) {
    let {
      onEnd: J
    } = this.props;
    Q.preventDefault(), this.detach(), J();
  }
  handleCancel(Q) {
    let {
      onCancel: J
    } = this.props;
    Q.preventDefault(), this.detach(), J();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
J3.activators = [{
  eventName: "onKeyDown",
  handler: (Q, J, Y) => {
    let {
      keyboardCodes: W = PR,
      onActivation: K
    } = J, {
      active: z
    } = Y, {
      code: N
    } = Q.nativeEvent;
    if (W.start.includes(N)) {
      let F = z.activatorNode.current;
      if (F && Q.target !== F)
        return !1;
      return Q.preventDefault(), K == null || K({
        event: Q.nativeEvent
      }), !0;
    }
    return !1;
  }
}];
function aD(Q) {
  return Boolean(Q && "distance" in Q);
}
function rD(Q) {
  return Boolean(Q && "delay" in Q);
}

class uH {
  constructor(Q, J, Y) {
    var W;
    if (Y === void 0)
      Y = ny(Q.event.target);
    this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = Q, this.events = J;
    let {
      event: K
    } = Q, {
      target: z
    } = K;
    this.props = Q, this.events = J, this.document = h$(z), this.documentListeners = new Cq(this.document), this.listeners = new Cq(Y), this.windowListeners = new Cq(YQ(z)), this.initialCoordinates = (W = eK(K)) != null ? W : zZ, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    let {
      events: Q,
      props: {
        options: {
          activationConstraint: J,
          bypassActivationConstraint: Y
        }
      }
    } = this;
    if (this.listeners.add(Q.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(Q.end.name, this.handleEnd), this.windowListeners.add(_X.Resize, this.handleCancel), this.windowListeners.add(_X.DragStart, oD), this.windowListeners.add(_X.VisibilityChange, this.handleCancel), this.windowListeners.add(_X.ContextMenu, oD), this.documentListeners.add(_X.Keydown, this.handleKeydown), J) {
      if (Y != null && Y({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (rD(J)) {
        this.timeoutId = setTimeout(this.handleStart, J.delay);
        return;
      }
      if (aD(J))
        return;
    }
    this.handleStart();
  }
  detach() {
    if (this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null)
      clearTimeout(this.timeoutId), this.timeoutId = null;
  }
  handleStart() {
    let {
      initialCoordinates: Q
    } = this, {
      onStart: J
    } = this.props;
    if (Q)
      this.activated = !0, this.documentListeners.add(_X.Click, sy, {
        capture: !0
      }), this.removeTextSelection(), this.documentListeners.add(_X.SelectionChange, this.removeTextSelection), J(Q);
  }
  handleMove(Q) {
    var J;
    let {
      activated: Y,
      initialCoordinates: W,
      props: K
    } = this, {
      onMove: z,
      options: {
        activationConstraint: N
      }
    } = K;
    if (!W)
      return;
    let F = (J = eK(Q)) != null ? J : zZ, L = m$(W, F);
    if (!Y && N) {
      if (aD(N)) {
        if (N.tolerance != null && vE(L, N.tolerance))
          return this.handleCancel();
        if (vE(L, N.distance))
          return this.handleStart();
      }
      if (rD(N)) {
        if (vE(L, N.tolerance))
          return this.handleCancel();
      }
      return;
    }
    if (Q.cancelable)
      Q.preventDefault();
    z(F);
  }
  handleEnd() {
    let {
      onEnd: Q
    } = this.props;
    this.detach(), Q();
  }
  handleCancel() {
    let {
      onCancel: Q
    } = this.props;
    this.detach(), Q();
  }
  handleKeydown(Q) {
    if (Q.code === L1.Esc)
      this.handleCancel();
  }
  removeTextSelection() {
    var Q;
    (Q = this.document.getSelection()) == null || Q.removeAllRanges();
  }
}
var ay = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};

class $3 extends uH {
  constructor(Q) {
    let {
      event: J
    } = Q, Y = h$(J.target);
    super(Q, ay, Y);
  }
}
$3.activators = [{
  eventName: "onPointerDown",
  handler: (Q, J) => {
    let {
      nativeEvent: Y
    } = Q, {
      onActivation: W
    } = J;
    if (!Y.isPrimary || Y.button !== 0)
      return !1;
    return W == null || W({
      event: Y
    }), !0;
  }
}];
var ry = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
}, mE;
(function(Q) {
  Q[Q.RightClick = 2] = "RightClick";
})(mE || (mE = {}));

class AR extends uH {
  constructor(Q) {
    super(Q, ry, h$(Q.event.target));
  }
}
AR.activators = [{
  eventName: "onMouseDown",
  handler: (Q, J) => {
    let {
      nativeEvent: Y
    } = Q, {
      onActivation: W
    } = J;
    if (Y.button === mE.RightClick)
      return !1;
    return W == null || W({
      event: Y
    }), !0;
  }
}];
var hE = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};

class UR extends uH {
  constructor(Q) {
    super(Q, hE);
  }
  static setup() {
    return window.addEventListener(hE.move.name, Q, {
      capture: !1,
      passive: !1
    }), function J() {
      window.removeEventListener(hE.move.name, Q);
    };
    function Q() {}
  }
}
UR.activators = [{
  eventName: "onTouchStart",
  handler: (Q, J) => {
    let {
      nativeEvent: Y
    } = Q, {
      onActivation: W
    } = J, {
      touches: K
    } = Y;
    if (K.length > 1)
      return !1;
    return W == null || W({
      event: Y
    }), !0;
  }
}];
var Q3;
(function(Q) {
  Q[Q.Pointer = 0] = "Pointer", Q[Q.DraggableRect = 1] = "DraggableRect";
})(Q3 || (Q3 = {}));
var mH;
(function(Q) {
  Q[Q.TreeOrder = 0] = "TreeOrder", Q[Q.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(mH || (mH = {}));
function iy(Q) {
  let {
    acceleration: J,
    activator: Y = Q3.Pointer,
    canScroll: W,
    draggingRect: K,
    enabled: z,
    interval: N = 5,
    order: F = mH.TreeOrder,
    pointerCoordinates: L,
    scrollableAncestors: w,
    scrollableAncestorRects: D,
    delta: k,
    threshold: I
  } = Q, h = ey({
    delta: k,
    disabled: !z
  }), [o, p] = bD(), X0 = u.useRef({
    x: 0,
    y: 0
  }), d = u.useRef({
    x: 0,
    y: 0
  }), Z0 = u.useMemo(() => {
    switch (Y) {
      case Q3.Pointer:
        return L ? {
          top: L.y,
          bottom: L.y,
          left: L.x,
          right: L.x
        } : null;
      case Q3.DraggableRect:
        return K;
    }
  }, [Y, K, L]), n = u.useRef(null), r = u.useCallback(() => {
    let t = n.current;
    if (!t)
      return;
    let O0 = X0.current.x * d.current.x, I0 = X0.current.y * d.current.y;
    t.scrollBy(O0, I0);
  }, []), i = u.useMemo(() => F === mH.TreeOrder ? [...w].reverse() : w, [F, w]);
  u.useEffect(() => {
    if (!z || !w.length || !Z0) {
      p();
      return;
    }
    for (let t of i) {
      if ((W == null ? void 0 : W(t)) === !1)
        continue;
      let O0 = w.indexOf(t), I0 = D[O0];
      if (!I0)
        continue;
      let {
        direction: P0,
        speed: A0
      } = uy(t, I0, Z0, J, I);
      for (let y0 of ["x", "y"])
        if (!h[y0][P0[y0]])
          A0[y0] = 0, P0[y0] = 0;
      if (A0.x > 0 || A0.y > 0) {
        p(), n.current = t, o(r, N), X0.current = A0, d.current = P0;
        return;
      }
    }
    X0.current = {
      x: 0,
      y: 0
    }, d.current = {
      x: 0,
      y: 0
    }, p();
  }, [
    J,
    r,
    W,
    p,
    z,
    N,
    JSON.stringify(Z0),
    JSON.stringify(h),
    o,
    w,
    i,
    D,
    JSON.stringify(I)
  ]);
}
var ty = {
  x: {
    [w8.Backward]: !1,
    [w8.Forward]: !1
  },
  y: {
    [w8.Backward]: !1,
    [w8.Forward]: !1
  }
};
function ey(Q) {
  let {
    delta: J,
    disabled: Y
  } = Q, W = tK(J);
  return jq((K) => {
    if (Y || !W || !K)
      return ty;
    let z = {
      x: Math.sign(J.x - W.x),
      y: Math.sign(J.y - W.y)
    };
    return {
      x: {
        [w8.Backward]: K.x[w8.Backward] || z.x === -1,
        [w8.Forward]: K.x[w8.Forward] || z.x === 1
      },
      y: {
        [w8.Backward]: K.y[w8.Backward] || z.y === -1,
        [w8.Forward]: K.y[w8.Forward] || z.y === 1
      }
    };
  }, [Y, J, W]);
}
function Qf(Q, J) {
  let Y = J !== null ? Q.get(J) : void 0, W = Y ? Y.node.current : null;
  return jq((K) => {
    var z;
    if (J === null)
      return null;
    return (z = W != null ? W : K) != null ? z : null;
  }, [W, J]);
}
function Xf(Q, J) {
  return u.useMemo(() => Q.reduce((Y, W) => {
    let {
      sensor: K
    } = W, z = K.activators.map((N) => ({
      eventName: N.eventName,
      handler: J(N.handler, W)
    }));
    return [...Y, ...z];
  }, []), [Q, J]);
}
var X3;
(function(Q) {
  Q[Q.Always = 0] = "Always", Q[Q.BeforeDragging = 1] = "BeforeDragging", Q[Q.WhileDragging = 2] = "WhileDragging";
})(X3 || (X3 = {}));
var bE;
(function(Q) {
  Q.Optimized = "optimized";
})(bE || (bE = {}));
var iD = /* @__PURE__ */ new Map;
function Zf(Q, J) {
  let {
    dragging: Y,
    dependencies: W,
    config: K
  } = J, [z, N] = u.useState(null), {
    frequency: F,
    measure: L,
    strategy: w
  } = K, D = u.useRef(Q), k = X0(), I = kq(k), h = u.useCallback(function(d) {
    if (d === void 0)
      d = [];
    if (I.current)
      return;
    N((Z0) => {
      if (Z0 === null)
        return d;
      return Z0.concat(d.filter((n) => !Z0.includes(n)));
    });
  }, [I]), o = u.useRef(null), p = jq((d) => {
    if (k && !Y)
      return iD;
    if (!d || d === iD || D.current !== Q || z != null) {
      let Z0 = /* @__PURE__ */ new Map;
      for (let n of Q) {
        if (!n)
          continue;
        if (z && z.length > 0 && !z.includes(n.id) && n.rect.current) {
          Z0.set(n.id, n.rect.current);
          continue;
        }
        let r = n.node.current, i = r ? new bH(L(r), r) : null;
        if (n.rect.current = i, i)
          Z0.set(n.id, i);
      }
      return Z0;
    }
    return d;
  }, [Q, z, Y, k, L]);
  return u.useEffect(() => {
    D.current = Q;
  }, [Q]), u.useEffect(() => {
    if (k)
      return;
    h();
  }, [Y, k]), u.useEffect(() => {
    if (z && z.length > 0)
      N(null);
  }, [JSON.stringify(z)]), u.useEffect(() => {
    if (k || typeof F !== "number" || o.current !== null)
      return;
    o.current = setTimeout(() => {
      h(), o.current = null;
    }, F);
  }, [F, k, h, ...W]), {
    droppableRects: p,
    measureDroppableContainers: h,
    measuringScheduled: z != null
  };
  function X0() {
    switch (w) {
      case X3.Always:
        return !1;
      case X3.BeforeDragging:
        return Y;
      default:
        return !Y;
    }
  }
}
function pE(Q, J) {
  return jq((Y) => {
    if (!Q)
      return null;
    if (Y)
      return Y;
    return typeof J === "function" ? J(Q) : Q;
  }, [J, Q]);
}
function Jf(Q, J) {
  return pE(Q, J);
}
function $f(Q) {
  let {
    callback: J,
    disabled: Y
  } = Q, W = rK(J), K = u.useMemo(() => {
    if (Y || typeof window === "undefined" || typeof window.MutationObserver === "undefined")
      return;
    let {
      MutationObserver: z
    } = window;
    return new z(W);
  }, [W, Y]);
  return u.useEffect(() => {
    return () => K == null ? void 0 : K.disconnect();
  }, [K]), K;
}
function cH(Q) {
  let {
    callback: J,
    disabled: Y
  } = Q, W = rK(J), K = u.useMemo(() => {
    if (Y || typeof window === "undefined" || typeof window.ResizeObserver === "undefined")
      return;
    let {
      ResizeObserver: z
    } = window;
    return new z(W);
  }, [Y]);
  return u.useEffect(() => {
    return () => K == null ? void 0 : K.disconnect();
  }, [K]), K;
}
function Yf(Q) {
  return new bH(u$(Q), Q);
}
function tD(Q, J, Y) {
  if (J === void 0)
    J = Yf;
  let [W, K] = u.useReducer(F, null), z = $f({
    callback(L) {
      if (!Q)
        return;
      for (let w of L) {
        let {
          type: D,
          target: k
        } = w;
        if (D === "childList" && k instanceof HTMLElement && k.contains(Q)) {
          K();
          break;
        }
      }
    }
  }), N = cH({
    callback: K
  });
  return uQ(() => {
    if (K(), Q)
      N == null || N.observe(Q), z == null || z.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    else
      N == null || N.disconnect(), z == null || z.disconnect();
  }, [Q]), W;
  function F(L) {
    if (!Q)
      return null;
    if (Q.isConnected === !1) {
      var w;
      return (w = L != null ? L : Y) != null ? w : null;
    }
    let D = J(Q);
    if (JSON.stringify(L) === JSON.stringify(D))
      return L;
    return D;
  }
}
function qf(Q) {
  let J = pE(Q);
  return qR(Q, J);
}
var eD = [];
function Wf(Q) {
  let J = u.useRef(Q), Y = jq((W) => {
    if (!Q)
      return eD;
    if (W && W !== eD && Q && J.current && Q.parentNode === J.current.parentNode)
      return W;
    return Z3(Q);
  }, [Q]);
  return u.useEffect(() => {
    J.current = Q;
  }, [Q]), Y;
}
function Kf(Q) {
  let [J, Y] = u.useState(null), W = u.useRef(Q), K = u.useCallback((z) => {
    let N = xE(z.target);
    if (!N)
      return;
    Y((F) => {
      if (!F)
        return null;
      return F.set(N, fE(N)), new Map(F);
    });
  }, []);
  return u.useEffect(() => {
    let z = W.current;
    if (Q !== z) {
      N(z);
      let F = Q.map((L) => {
        let w = xE(L);
        if (w)
          return w.addEventListener("scroll", K, {
            passive: !0
          }), [w, fE(w)];
        return null;
      }).filter((L) => L != null);
      Y(F.length ? new Map(F) : null), W.current = Q;
    }
    return () => {
      N(Q), N(z);
    };
    function N(F) {
      F.forEach((L) => {
        let w = xE(L);
        w == null || w.removeEventListener("scroll", K);
      });
    }
  }, [K, Q]), u.useMemo(() => {
    if (Q.length)
      return J ? Array.from(J.values()).reduce((z, N) => f$(z, N), zZ) : ER(Q);
    return zZ;
  }, [Q, J]);
}
function QR(Q, J) {
  if (J === void 0)
    J = [];
  let Y = u.useRef(null);
  return u.useEffect(() => {
    Y.current = null;
  }, J), u.useEffect(() => {
    let W = Q !== zZ;
    if (W && !Y.current)
      Y.current = Q;
    if (!W && Y.current)
      Y.current = null;
  }, [Q]), Y.current ? m$(Q, Y.current) : zZ;
}
function Hf(Q) {
  u.useEffect(() => {
    if (!aK)
      return;
    let J = Q.map((Y) => {
      let {
        sensor: W
      } = Y;
      return W.setup == null ? void 0 : W.setup();
    });
    return () => {
      for (let Y of J)
        Y == null || Y();
    };
  }, Q.map((J) => {
    let {
      sensor: Y
    } = J;
    return Y;
  }));
}
function Gf(Q, J) {
  return u.useMemo(() => {
    return Q.reduce((Y, W) => {
      let {
        eventName: K,
        handler: z
      } = W;
      return Y[K] = (N) => {
        z(N, J);
      }, Y;
    }, {});
  }, [Q, J]);
}
function LR(Q) {
  return u.useMemo(() => Q ? yy(Q) : null, [Q]);
}
var yE = [];
function zf(Q, J) {
  if (J === void 0)
    J = u$;
  let [Y] = Q, W = LR(Y ? YQ(Y) : null), [K, z] = u.useReducer(F, yE), N = cH({
    callback: z
  });
  if (Q.length > 0 && K === yE)
    z();
  return uQ(() => {
    if (Q.length)
      Q.forEach((L) => N == null ? void 0 : N.observe(L));
    else
      N == null || N.disconnect(), z();
  }, [Q]), K;
  function F() {
    if (!Q.length)
      return yE;
    return Q.map((L) => zR(L) ? W : new bH(J(L), L));
  }
}
function OR(Q) {
  if (!Q)
    return null;
  if (Q.children.length > 1)
    return Q;
  let J = Q.children[0];
  return Rq(J) ? J : Q;
}
function Nf(Q) {
  let {
    measure: J
  } = Q, [Y, W] = u.useState(null), K = u.useCallback((w) => {
    for (let {
      target: D
    } of w)
      if (Rq(D)) {
        W((k) => {
          let I = J(D);
          return k ? {
            ...k,
            width: I.width,
            height: I.height
          } : I;
        });
        break;
      }
  }, [J]), z = cH({
    callback: K
  }), N = u.useCallback((w) => {
    let D = OR(w);
    if (z == null || z.disconnect(), D)
      z == null || z.observe(D);
    W(D ? J(D) : null);
  }, [J, z]), [F, L] = iK(N);
  return u.useMemo(() => ({
    nodeRef: F,
    rect: Y,
    setRef: L
  }), [Y, F, L]);
}
var Ef = [{
  sensor: $3,
  options: {}
}, {
  sensor: J3,
  options: {}
}], Ff = {
  current: {}
}, yH = {
  draggable: {
    measure: sD
  },
  droppable: {
    measure: sD,
    strategy: X3.WhileDragging,
    frequency: bE.Optimized
  },
  dragOverlay: {
    measure: u$
  }
};

class Vq extends Map {
  get(Q) {
    var J;
    return Q != null ? (J = super.get(Q)) != null ? J : void 0 : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((Q) => {
      let {
        disabled: J
      } = Q;
      return !J;
    });
  }
  getNodeFor(Q) {
    var J, Y;
    return (J = (Y = this.get(Q)) == null ? void 0 : Y.node.current) != null ? J : void 0;
  }
}
var Pf = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map,
  droppableRects: /* @__PURE__ */ new Map,
  droppableContainers: /* @__PURE__ */ new Vq,
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: fH
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: yH,
  measureDroppableContainers: fH,
  windowRect: null,
  measuringScheduled: !1
}, wR = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: fH,
  draggableNodes: /* @__PURE__ */ new Map,
  over: null,
  measureDroppableContainers: fH
}, Y3 = /* @__PURE__ */ u.createContext(wR), MR = /* @__PURE__ */ u.createContext(Pf);
function Af() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map,
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new Vq
    }
  };
}
function Uf(Q, J) {
  switch (J.type) {
    case J8.DragStart:
      return {
        ...Q,
        draggable: {
          ...Q.draggable,
          initialCoordinates: J.initialCoordinates,
          active: J.active
        }
      };
    case J8.DragMove:
      if (!Q.draggable.active)
        return Q;
      return {
        ...Q,
        draggable: {
          ...Q.draggable,
          translate: {
            x: J.coordinates.x - Q.draggable.initialCoordinates.x,
            y: J.coordinates.y - Q.draggable.initialCoordinates.y
          }
        }
      };
    case J8.DragEnd:
    case J8.DragCancel:
      return {
        ...Q,
        draggable: {
          ...Q.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case J8.RegisterDroppable: {
      let {
        element: Y
      } = J, {
        id: W
      } = Y, K = new Vq(Q.droppable.containers);
      return K.set(W, Y), {
        ...Q,
        droppable: {
          ...Q.droppable,
          containers: K
        }
      };
    }
    case J8.SetDroppableDisabled: {
      let {
        id: Y,
        key: W,
        disabled: K
      } = J, z = Q.droppable.containers.get(Y);
      if (!z || W !== z.key)
        return Q;
      let N = new Vq(Q.droppable.containers);
      return N.set(Y, {
        ...z,
        disabled: K
      }), {
        ...Q,
        droppable: {
          ...Q.droppable,
          containers: N
        }
      };
    }
    case J8.UnregisterDroppable: {
      let {
        id: Y,
        key: W
      } = J, K = Q.droppable.containers.get(Y);
      if (!K || W !== K.key)
        return Q;
      let z = new Vq(Q.droppable.containers);
      return z.delete(Y), {
        ...Q,
        droppable: {
          ...Q.droppable,
          containers: z
        }
      };
    }
    default:
      return Q;
  }
}
function Lf(Q) {
  let {
    disabled: J
  } = Q, {
    active: Y,
    activatorEvent: W,
    draggableNodes: K
  } = u.useContext(Y3), z = tK(W), N = tK(Y == null ? void 0 : Y.id);
  return u.useEffect(() => {
    if (J)
      return;
    if (!W && z && N != null) {
      if (!Bq(z))
        return;
      if (document.activeElement === z.target)
        return;
      let F = K.get(N);
      if (!F)
        return;
      let {
        activatorNode: L,
        node: w
      } = F;
      if (!L.current && !w.current)
        return;
      requestAnimationFrame(() => {
        for (let D of [L.current, w.current]) {
          if (!D)
            continue;
          let k = cD(D);
          if (k) {
            k.focus();
            break;
          }
        }
      });
    }
  }, [W, J, K, N, z]), null;
}
function DR(Q, J) {
  let {
    transform: Y,
    ...W
  } = J;
  return Q != null && Q.length ? Q.reduce((K, z) => {
    return z({
      transform: K,
      ...W
    });
  }, Y) : Y;
}
function Of(Q) {
  return u.useMemo(() => ({
    draggable: {
      ...yH.draggable,
      ...Q == null ? void 0 : Q.draggable
    },
    droppable: {
      ...yH.droppable,
      ...Q == null ? void 0 : Q.droppable
    },
    dragOverlay: {
      ...yH.dragOverlay,
      ...Q == null ? void 0 : Q.dragOverlay
    }
  }), [Q == null ? void 0 : Q.draggable, Q == null ? void 0 : Q.droppable, Q == null ? void 0 : Q.dragOverlay]);
}
function wf(Q) {
  let {
    activeNode: J,
    measure: Y,
    initialRect: W,
    config: K = !0
  } = Q, z = u.useRef(!1), {
    x: N,
    y: F
  } = typeof K === "boolean" ? {
    x: K,
    y: K
  } : K;
  uQ(() => {
    if (!N && !F || !J) {
      z.current = !1;
      return;
    }
    if (z.current || !W)
      return;
    let w = J == null ? void 0 : J.node.current;
    if (!w || w.isConnected === !1)
      return;
    let D = Y(w), k = qR(D, W);
    if (!N)
      k.x = 0;
    if (!F)
      k.y = 0;
    if (z.current = !0, Math.abs(k.x) > 0 || Math.abs(k.y) > 0) {
      let I = KR(w);
      if (I)
        I.scrollBy({
          top: k.y,
          left: k.x
        });
    }
  }, [J, N, F, W, Y]);
}
var pH = /* @__PURE__ */ u.createContext({
  ...zZ,
  scaleX: 1,
  scaleY: 1
}), hJ;
(function(Q) {
  Q[Q.Uninitialized = 0] = "Uninitialized", Q[Q.Initializing = 1] = "Initializing", Q[Q.Initialized = 2] = "Initialized";
})(hJ || (hJ = {}));
var RR = /* @__PURE__ */ u.memo(function Q(J) {
  var Y, W, K, z;
  let {
    id: N,
    accessibility: F,
    autoScroll: L = !0,
    children: w,
    sensors: D = Ef,
    collisionDetection: k = _y,
    measuring: I,
    modifiers: h,
    ...o
  } = J, p = u.useReducer(Uf, void 0, Af), [X0, d] = p, [Z0, n] = Dy(), [r, i] = u.useState(hJ.Uninitialized), t = r === hJ.Initialized, {
    draggable: {
      active: O0,
      nodes: I0,
      translate: P0
    },
    droppable: {
      containers: A0
    }
  } = X0, y0 = O0 ? I0.get(O0) : null, O1 = u.useRef({
    initial: null,
    translated: null
  }), r0 = u.useMemo(() => {
    var n1;
    return O0 != null ? {
      id: O0,
      data: (n1 = y0 == null ? void 0 : y0.data) != null ? n1 : Ff,
      rect: O1
    } : null;
  }, [O0, y0]), x1 = u.useRef(null), [k0, F1] = u.useState(null), [S1, w6] = u.useState(null), q6 = kq(o, Object.values(o)), z6 = y$("DndDescribedBy", N), M6 = u.useMemo(() => A0.getEnabled(), [A0]), U1 = Of(I), {
    droppableRects: f0,
    measureDroppableContainers: j6,
    measuringScheduled: $8
  } = Zf(M6, {
    dragging: t,
    dependencies: [P0.x, P0.y],
    config: U1.droppable
  }), l1 = Qf(I0, O0), N6 = u.useMemo(() => S1 ? eK(S1) : null, [S1]), W6 = g1(), I1 = Jf(l1, U1.draggable.measure);
  wf({
    activeNode: O0 ? I0.get(O0) : null,
    config: W6.layoutShiftCompensation,
    initialRect: I1,
    measure: U1.draggable.measure
  });
  let u0 = tD(l1, U1.draggable.measure, I1), d1 = tD(l1 ? l1.parentElement : null), J0 = u.useRef({
    activatorEvent: null,
    active: null,
    activeNode: l1,
    collisionRect: null,
    collisions: null,
    droppableRects: f0,
    draggableNodes: I0,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: A0,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), K6 = A0.getNodeFor((Y = J0.current.over) == null ? void 0 : Y.id), k1 = Nf({
    measure: U1.dragOverlay.measure
  }), _1 = (W = k1.nodeRef.current) != null ? W : l1, x6 = t ? (K = k1.rect) != null ? K : u0 : null, c8 = Boolean(k1.nodeRef.current && k1.rect), u6 = qf(c8 ? null : u0), R8 = LR(_1 ? YQ(_1) : null), Y8 = Wf(t ? K6 != null ? K6 : l1 : null), q8 = zf(Y8), c6 = DR(h, {
    transform: {
      x: P0.x - u6.x,
      y: P0.y - u6.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: S1,
    active: r0,
    activeNodeRect: u0,
    containerNodeRect: d1,
    draggingNodeRect: x6,
    over: J0.current.over,
    overlayNodeRect: k1.rect,
    scrollableAncestors: Y8,
    scrollableAncestorRects: q8,
    windowRect: R8
  }), E6 = N6 ? f$(N6, P0) : null, RQ = Kf(Y8), k8 = QR(RQ), qQ = QR(RQ, [u0]), p6 = f$(c6, k8), p8 = x6 ? xy(x6, c6) : null, d8 = r0 && p8 ? k({
    active: r0,
    collisionRect: p8,
    droppableRects: f0,
    droppableContainers: M6,
    pointerCoordinates: E6
  }) : null, kQ = cE(d8, "id"), [Q0, U0] = u.useState(null), g0 = c8 ? c6 : f$(c6, qQ), w1 = Ty(g0, (z = Q0 == null ? void 0 : Q0.rect) != null ? z : null, u0), T1 = u.useCallback((n1, r1) => {
    let {
      sensor: F6,
      options: n8
    } = r1;
    if (x1.current == null)
      return;
    let W8 = I0.get(x1.current);
    if (!W8)
      return;
    let K8 = n1.nativeEvent, j8 = new F6({
      active: x1.current,
      activeNode: W8,
      event: K8,
      options: n8,
      context: J0,
      onStart(v6) {
        let jQ = x1.current;
        if (jQ == null)
          return;
        let s8 = I0.get(jQ);
        if (!s8)
          return;
        let {
          onDragStart: o8
        } = q6.current, WQ = {
          active: {
            id: jQ,
            data: s8.data,
            rect: O1
          }
        };
        yJ.unstable_batchedUpdates(() => {
          o8 == null || o8(WQ), i(hJ.Initializing), d({
            type: J8.DragStart,
            initialCoordinates: v6,
            active: jQ
          }), Z0({
            type: "onDragStart",
            event: WQ
          });
        });
      },
      onMove(v6) {
        d({
          type: J8.DragMove,
          coordinates: v6
        });
      },
      onEnd: H8(J8.DragEnd),
      onCancel: H8(J8.DragCancel)
    });
    yJ.unstable_batchedUpdates(() => {
      F1(j8), w6(n1.nativeEvent);
    });
    function H8(v6) {
      return async function jQ() {
        let {
          active: s8,
          collisions: o8,
          over: WQ,
          scrollAdjustedTranslate: PZ
        } = J0.current, cQ = null;
        if (s8 && PZ) {
          let {
            cancelDrop: KQ
          } = q6.current;
          if (cQ = {
            activatorEvent: K8,
            active: s8,
            collisions: o8,
            delta: PZ,
            over: WQ
          }, v6 === J8.DragEnd && typeof KQ === "function") {
            if (await Promise.resolve(KQ(cQ)))
              v6 = J8.DragCancel;
          }
        }
        x1.current = null, yJ.unstable_batchedUpdates(() => {
          d({
            type: v6
          }), i(hJ.Uninitialized), U0(null), F1(null), w6(null);
          let KQ = v6 === J8.DragEnd ? "onDragEnd" : "onDragCancel";
          if (cQ) {
            let fX = q6.current[KQ];
            fX == null || fX(cQ), Z0({
              type: KQ,
              event: cQ
            });
          }
        });
      };
    }
  }, [I0]), B6 = u.useCallback((n1, r1) => {
    return (F6, n8) => {
      let W8 = F6.nativeEvent, K8 = I0.get(n8);
      if (x1.current !== null || !K8 || W8.dndKit || W8.defaultPrevented)
        return;
      let j8 = {
        active: K8
      };
      if (n1(F6, r1.options, j8) === !0)
        W8.dndKit = {
          capturedBy: r1.sensor
        }, x1.current = n8, T1(F6, r1);
    };
  }, [I0, T1]), c1 = Xf(D, B6);
  Hf(D), uQ(() => {
    if (u0 && r === hJ.Initializing)
      i(hJ.Initialized);
  }, [u0, r]), u.useEffect(() => {
    let {
      onDragMove: n1
    } = q6.current, {
      active: r1,
      activatorEvent: F6,
      collisions: n8,
      over: W8
    } = J0.current;
    if (!r1 || !F6)
      return;
    let K8 = {
      active: r1,
      activatorEvent: F6,
      collisions: n8,
      delta: {
        x: p6.x,
        y: p6.y
      },
      over: W8
    };
    yJ.unstable_batchedUpdates(() => {
      n1 == null || n1(K8), Z0({
        type: "onDragMove",
        event: K8
      });
    });
  }, [p6.x, p6.y]), u.useEffect(() => {
    let {
      active: n1,
      activatorEvent: r1,
      collisions: F6,
      droppableContainers: n8,
      scrollAdjustedTranslate: W8
    } = J0.current;
    if (!n1 || x1.current == null || !r1 || !W8)
      return;
    let {
      onDragOver: K8
    } = q6.current, j8 = n8.get(kQ), H8 = j8 && j8.rect.current ? {
      id: j8.id,
      rect: j8.rect.current,
      data: j8.data,
      disabled: j8.disabled
    } : null, v6 = {
      active: n1,
      activatorEvent: r1,
      collisions: F6,
      delta: {
        x: W8.x,
        y: W8.y
      },
      over: H8
    };
    yJ.unstable_batchedUpdates(() => {
      U0(H8), K8 == null || K8(v6), Z0({
        type: "onDragOver",
        event: v6
      });
    });
  }, [kQ]), uQ(() => {
    J0.current = {
      activatorEvent: S1,
      active: r0,
      activeNode: l1,
      collisionRect: p8,
      collisions: d8,
      droppableRects: f0,
      draggableNodes: I0,
      draggingNode: _1,
      draggingNodeRect: x6,
      droppableContainers: A0,
      over: Q0,
      scrollableAncestors: Y8,
      scrollAdjustedTranslate: p6
    }, O1.current = {
      initial: x6,
      translated: p8
    };
  }, [r0, l1, d8, p8, I0, _1, x6, f0, A0, Q0, Y8, p6]), iy({
    ...W6,
    delta: P0,
    draggingRect: p8,
    pointerCoordinates: E6,
    scrollableAncestors: Y8,
    scrollableAncestorRects: q8
  });
  let l8 = u.useMemo(() => {
    return {
      active: r0,
      activeNode: l1,
      activeNodeRect: u0,
      activatorEvent: S1,
      collisions: d8,
      containerNodeRect: d1,
      dragOverlay: k1,
      draggableNodes: I0,
      droppableContainers: A0,
      droppableRects: f0,
      over: Q0,
      measureDroppableContainers: j6,
      scrollableAncestors: Y8,
      scrollableAncestorRects: q8,
      measuringConfiguration: U1,
      measuringScheduled: $8,
      windowRect: R8
    };
  }, [r0, l1, u0, S1, d8, d1, k1, I0, A0, f0, Q0, j6, Y8, q8, U1, $8, R8]), J1 = u.useMemo(() => {
    return {
      activatorEvent: S1,
      activators: c1,
      active: r0,
      activeNodeRect: u0,
      ariaDescribedById: {
        draggable: z6
      },
      dispatch: d,
      draggableNodes: I0,
      over: Q0,
      measureDroppableContainers: j6
    };
  }, [S1, c1, r0, u0, d, z6, I0, Q0, j6]);
  return u.default.createElement(JR.Provider, {
    value: n
  }, u.default.createElement(Y3.Provider, {
    value: J1
  }, u.default.createElement(MR.Provider, {
    value: l8
  }, u.default.createElement(pH.Provider, {
    value: w1
  }, w)), u.default.createElement(Lf, {
    disabled: (F == null ? void 0 : F.restoreFocus) === !1
  })), u.default.createElement(jy, {
    ...F,
    hiddenTextDescribedById: z6
  }));
  function g1() {
    let n1 = (k0 == null ? void 0 : k0.autoScrollEnabled) === !1, r1 = typeof L === "object" ? L.enabled === !1 : L === !1, F6 = t && !n1 && !r1;
    if (typeof L === "object")
      return {
        ...L,
        enabled: F6
      };
    return {
      enabled: F6
    };
  }
}), Mf = /* @__PURE__ */ u.createContext(null), XR = "button", Df = "Droppable";
function kR(Q) {
  let {
    id: J,
    data: Y,
    disabled: W = !1,
    attributes: K
  } = Q, z = y$(Df), {
    activators: N,
    activatorEvent: F,
    active: L,
    activeNodeRect: w,
    ariaDescribedById: D,
    draggableNodes: k,
    over: I
  } = u.useContext(Y3), {
    role: h = XR,
    roleDescription: o = "draggable",
    tabIndex: p = 0
  } = K != null ? K : {}, X0 = (L == null ? void 0 : L.id) === J, d = u.useContext(X0 ? pH : Mf), [Z0, n] = iK(), [r, i] = iK(), t = Gf(N, J), O0 = kq(Y);
  uQ(() => {
    return k.set(J, {
      id: J,
      key: z,
      node: Z0,
      activatorNode: r,
      data: O0
    }), () => {
      let P0 = k.get(J);
      if (P0 && P0.key === z)
        k.delete(J);
    };
  }, [k, J]);
  let I0 = u.useMemo(() => ({
    role: h,
    tabIndex: p,
    "aria-disabled": W,
    "aria-pressed": X0 && h === XR ? !0 : void 0,
    "aria-roledescription": o,
    "aria-describedby": D.draggable
  }), [W, h, p, X0, o, D.draggable]);
  return {
    active: L,
    activatorEvent: F,
    activeNodeRect: w,
    attributes: I0,
    isDragging: X0,
    listeners: W ? void 0 : t,
    node: Z0,
    over: I,
    setNodeRef: n,
    setActivatorNodeRef: i,
    transform: d
  };
}
function dE() {
  return u.useContext(MR);
}
var Rf = "Droppable", kf = {
  timeout: 25
};
function jR(Q) {
  let {
    data: J,
    disabled: Y = !1,
    id: W,
    resizeObserverConfig: K
  } = Q, z = y$(Rf), {
    active: N,
    dispatch: F,
    over: L,
    measureDroppableContainers: w
  } = u.useContext(Y3), D = u.useRef({
    disabled: Y
  }), k = u.useRef(!1), I = u.useRef(null), h = u.useRef(null), {
    disabled: o,
    updateMeasurementsFor: p,
    timeout: X0
  } = {
    ...kf,
    ...K
  }, d = kq(p != null ? p : W), Z0 = u.useCallback(() => {
    if (!k.current) {
      k.current = !0;
      return;
    }
    if (h.current != null)
      clearTimeout(h.current);
    h.current = setTimeout(() => {
      w(Array.isArray(d.current) ? d.current : [d.current]), h.current = null;
    }, X0);
  }, [X0]), n = cH({
    callback: Z0,
    disabled: o || !N
  }), r = u.useCallback((I0, P0) => {
    if (!n)
      return;
    if (P0)
      n.unobserve(P0), k.current = !1;
    if (I0)
      n.observe(I0);
  }, [n]), [i, t] = iK(r), O0 = kq(J);
  return u.useEffect(() => {
    if (!n || !i.current)
      return;
    n.disconnect(), k.current = !1, n.observe(i.current);
  }, [i, n]), uQ(() => {
    return F({
      type: J8.RegisterDroppable,
      element: {
        id: W,
        key: z,
        disabled: Y,
        node: i,
        rect: I,
        data: O0
      }
    }), () => F({
      type: J8.UnregisterDroppable,
      key: z,
      id: W
    });
  }, [W]), u.useEffect(() => {
    if (Y !== D.current.disabled)
      F({
        type: J8.SetDroppableDisabled,
        id: W,
        key: z,
        disabled: Y
      }), D.current.disabled = Y;
  }, [W, z, Y, F]), {
    active: N,
    rect: I,
    isOver: (L == null ? void 0 : L.id) === W,
    node: i,
    over: L,
    setNodeRef: t
  };
}
function jf(Q) {
  let {
    animation: J,
    children: Y
  } = Q, [W, K] = u.useState(null), [z, N] = u.useState(null), F = tK(Y);
  if (!Y && !W && F)
    K(F);
  return uQ(() => {
    if (!z)
      return;
    let L = W == null ? void 0 : W.key, w = W == null ? void 0 : W.props.id;
    if (L == null || w == null) {
      K(null);
      return;
    }
    Promise.resolve(J(w, z)).then(() => {
      K(null);
    });
  }, [J, W, z]), u.default.createElement(u.default.Fragment, null, Y, W ? u.cloneElement(W, {
    ref: N
  }) : null);
}
var Bf = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Cf(Q) {
  let {
    children: J
  } = Q;
  return u.default.createElement(Y3.Provider, {
    value: wR
  }, u.default.createElement(pH.Provider, {
    value: Bf
  }, J));
}
var Vf = {
  position: "fixed",
  touchAction: "none"
}, Sf = (Q) => {
  return Bq(Q) ? "transform 250ms ease" : void 0;
}, If = /* @__PURE__ */ u.forwardRef((Q, J) => {
  let {
    as: Y,
    activatorEvent: W,
    adjustScale: K,
    children: z,
    className: N,
    rect: F,
    style: L,
    transform: w,
    transition: D = Sf
  } = Q;
  if (!F)
    return null;
  let k = K ? w : {
    ...w,
    scaleX: 1,
    scaleY: 1
  }, I = {
    ...Vf,
    width: F.width,
    height: F.height,
    top: F.top,
    left: F.left,
    transform: GZ.Transform.toString(k),
    transformOrigin: K && W ? Cy(W, F) : void 0,
    transition: typeof D === "function" ? D(W) : D,
    ...L
  };
  return u.default.createElement(Y, {
    className: N,
    style: I,
    ref: J
  }, z);
}), lE = (Q) => (J) => {
  let {
    active: Y,
    dragOverlay: W
  } = J, K = {}, {
    styles: z,
    className: N
  } = Q;
  if (z != null && z.active)
    for (let [F, L] of Object.entries(z.active)) {
      if (L === void 0)
        continue;
      K[F] = Y.node.style.getPropertyValue(F), Y.node.style.setProperty(F, L);
    }
  if (z != null && z.dragOverlay)
    for (let [F, L] of Object.entries(z.dragOverlay)) {
      if (L === void 0)
        continue;
      W.node.style.setProperty(F, L);
    }
  if (N != null && N.active)
    Y.node.classList.add(N.active);
  if (N != null && N.dragOverlay)
    W.node.classList.add(N.dragOverlay);
  return function F() {
    for (let [L, w] of Object.entries(K))
      Y.node.style.setProperty(L, w);
    if (N != null && N.active)
      Y.node.classList.remove(N.active);
  };
}, _f = (Q) => {
  let {
    transform: {
      initial: J,
      final: Y
    }
  } = Q;
  return [{
    transform: GZ.Transform.toString(J)
  }, {
    transform: GZ.Transform.toString(Y)
  }];
}, Tf = {
  duration: 250,
  easing: "ease",
  keyframes: _f,
  sideEffects: /* @__PURE__ */ lE({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function gf(Q) {
  let {
    config: J,
    draggableNodes: Y,
    droppableContainers: W,
    measuringConfiguration: K
  } = Q;
  return rK((z, N) => {
    if (J === null)
      return;
    let F = Y.get(z);
    if (!F)
      return;
    let L = F.node.current;
    if (!L)
      return;
    let w = OR(N);
    if (!w)
      return;
    let {
      transform: D
    } = YQ(N).getComputedStyle(N), k = WR(D);
    if (!k)
      return;
    let I = typeof J === "function" ? J : xf(J);
    return FR(L, K.draggable.measure), I({
      active: {
        id: z,
        data: F.data,
        node: L,
        rect: K.draggable.measure(L)
      },
      draggableNodes: Y,
      dragOverlay: {
        node: N,
        rect: K.dragOverlay.measure(w)
      },
      droppableContainers: W,
      measuringConfiguration: K,
      transform: k
    });
  });
}
function xf(Q) {
  let {
    duration: J,
    easing: Y,
    sideEffects: W,
    keyframes: K
  } = {
    ...Tf,
    ...Q
  };
  return (z) => {
    let {
      active: N,
      dragOverlay: F,
      transform: L,
      ...w
    } = z;
    if (!J)
      return;
    let D = {
      x: F.rect.left - N.rect.left,
      y: F.rect.top - N.rect.top
    }, k = {
      scaleX: L.scaleX !== 1 ? N.rect.width * L.scaleX / F.rect.width : 1,
      scaleY: L.scaleY !== 1 ? N.rect.height * L.scaleY / F.rect.height : 1
    }, I = {
      x: L.x - D.x,
      y: L.y - D.y,
      ...k
    }, h = K({
      ...w,
      active: N,
      dragOverlay: F,
      transform: {
        initial: L,
        final: I
      }
    }), [o] = h, p = h[h.length - 1];
    if (JSON.stringify(o) === JSON.stringify(p))
      return;
    let X0 = W == null ? void 0 : W({
      active: N,
      dragOverlay: F,
      ...w
    }), d = F.node.animate(h, {
      duration: J,
      easing: Y,
      fill: "forwards"
    });
    return new Promise((Z0) => {
      d.onfinish = () => {
        X0 == null || X0(), Z0();
      };
    });
  };
}
var ZR = 0;
function vf(Q) {
  return u.useMemo(() => {
    if (Q == null)
      return;
    return ZR++, ZR;
  }, [Q]);
}
var BR = /* @__PURE__ */ u.default.memo((Q) => {
  let {
    adjustScale: J = !1,
    children: Y,
    dropAnimation: W,
    style: K,
    transition: z,
    modifiers: N,
    wrapperElement: F = "div",
    className: L,
    zIndex: w = 999
  } = Q, {
    activatorEvent: D,
    active: k,
    activeNodeRect: I,
    containerNodeRect: h,
    draggableNodes: o,
    droppableContainers: p,
    dragOverlay: X0,
    over: d,
    measuringConfiguration: Z0,
    scrollableAncestors: n,
    scrollableAncestorRects: r,
    windowRect: i
  } = dE(), t = u.useContext(pH), O0 = vf(k == null ? void 0 : k.id), I0 = DR(N, {
    activatorEvent: D,
    active: k,
    activeNodeRect: I,
    containerNodeRect: h,
    draggingNodeRect: X0.rect,
    over: d,
    overlayNodeRect: X0.rect,
    scrollableAncestors: n,
    scrollableAncestorRects: r,
    transform: t,
    windowRect: i
  }), P0 = pE(I), A0 = gf({
    config: W,
    draggableNodes: o,
    droppableContainers: p,
    measuringConfiguration: Z0
  }), y0 = P0 ? X0.setRef : void 0;
  return u.default.createElement(Cf, null, u.default.createElement(jf, {
    animation: A0
  }, k && O0 ? u.default.createElement(If, {
    key: O0,
    id: k.id,
    ref: y0,
    as: F,
    activatorEvent: D,
    adjustScale: J,
    className: L,
    transition: z,
    rect: P0,
    style: {
      zIndex: w,
      ...K
    },
    transform: I0
  }, Y) : null));
});

// node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var _6 = L6(UQ(), 1);
function nH(Q, J, Y) {
  let W = Q.slice();
  return W.splice(Y < 0 ? W.length + Y : Y, 0, W.splice(J, 1)[0]), W;
}
function hf(Q, J) {
  return Q.reduce((Y, W, K) => {
    let z = J.get(W);
    if (z)
      Y[K] = z;
    return Y;
  }, Array(Q.length));
}
function dH(Q) {
  return Q !== null && Q >= 0;
}
function yf(Q, J) {
  if (Q === J)
    return !0;
  if (Q.length !== J.length)
    return !1;
  for (let Y = 0;Y < Q.length; Y++)
    if (Q[Y] !== J[Y])
      return !1;
  return !0;
}
function ff(Q) {
  if (typeof Q === "boolean")
    return {
      draggable: Q,
      droppable: Q
    };
  return Q;
}
var CR = (Q) => {
  let {
    rects: J,
    activeIndex: Y,
    overIndex: W,
    index: K
  } = Q, z = nH(J, W, Y), N = J[K], F = z[K];
  if (!F || !N)
    return null;
  return {
    x: F.left - N.left,
    y: F.top - N.top,
    scaleX: F.width / N.width,
    scaleY: F.height / N.height
  };
};
var VR = "Sortable", SR = /* @__PURE__ */ _6.default.createContext({
  activeIndex: -1,
  containerId: VR,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: CR,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function IR(Q) {
  let {
    children: J,
    id: Y,
    items: W,
    strategy: K = CR,
    disabled: z = !1
  } = Q, {
    active: N,
    dragOverlay: F,
    droppableRects: L,
    over: w,
    measureDroppableContainers: D
  } = dE(), k = y$(VR, Y), I = Boolean(F.rect !== null), h = _6.useMemo(() => W.map((t) => typeof t === "object" && ("id" in t) ? t.id : t), [W]), o = N != null, p = N ? h.indexOf(N.id) : -1, X0 = w ? h.indexOf(w.id) : -1, d = _6.useRef(h), Z0 = !yf(h, d.current), n = X0 !== -1 && p === -1 || Z0, r = ff(z);
  uQ(() => {
    if (Z0 && o)
      D(h);
  }, [Z0, h, o, D]), _6.useEffect(() => {
    d.current = h;
  }, [h]);
  let i = _6.useMemo(() => ({
    activeIndex: p,
    containerId: k,
    disabled: r,
    disableTransforms: n,
    items: h,
    overIndex: X0,
    useDragOverlay: I,
    sortedRects: hf(h, L),
    strategy: K
  }), [p, k, r.draggable, r.droppable, n, h, X0, L, I, K]);
  return _6.default.createElement(SR.Provider, {
    value: i
  }, J);
}
var mf = (Q) => {
  let {
    id: J,
    items: Y,
    activeIndex: W,
    overIndex: K
  } = Q;
  return nH(Y, W, K).indexOf(J);
}, bf = (Q) => {
  let {
    containerId: J,
    isSorting: Y,
    wasDragging: W,
    index: K,
    items: z,
    newIndex: N,
    previousItems: F,
    previousContainerId: L,
    transition: w
  } = Q;
  if (!w || !W)
    return !1;
  if (F !== z && K === N)
    return !1;
  if (Y)
    return !0;
  return N !== K && J === L;
}, uf = {
  duration: 200,
  easing: "ease"
}, _R = "transform", cf = /* @__PURE__ */ GZ.Transition.toString({
  property: _R,
  duration: 0,
  easing: "linear"
}), pf = {
  roleDescription: "sortable"
};
function df(Q) {
  let {
    disabled: J,
    index: Y,
    node: W,
    rect: K
  } = Q, [z, N] = _6.useState(null), F = _6.useRef(Y);
  return uQ(() => {
    if (!J && Y !== F.current && W.current) {
      let L = K.current;
      if (L) {
        let w = u$(W.current, {
          ignoreTransform: !0
        }), D = {
          x: L.left - w.left,
          y: L.top - w.top,
          scaleX: L.width / w.width,
          scaleY: L.height / w.height
        };
        if (D.x || D.y)
          N(D);
      }
    }
    if (Y !== F.current)
      F.current = Y;
  }, [J, Y, W, K]), _6.useEffect(() => {
    if (z)
      N(null);
  }, [z]), z;
}
function TR(Q) {
  let {
    animateLayoutChanges: J = bf,
    attributes: Y,
    disabled: W,
    data: K,
    getNewIndex: z = mf,
    id: N,
    strategy: F,
    resizeObserverConfig: L,
    transition: w = uf
  } = Q, {
    items: D,
    containerId: k,
    activeIndex: I,
    disabled: h,
    disableTransforms: o,
    sortedRects: p,
    overIndex: X0,
    useDragOverlay: d,
    strategy: Z0
  } = _6.useContext(SR), n = lf(W, h), r = D.indexOf(N), i = _6.useMemo(() => ({
    sortable: {
      containerId: k,
      index: r,
      items: D
    },
    ...K
  }), [k, K, r, D]), t = _6.useMemo(() => D.slice(D.indexOf(N)), [D, N]), {
    rect: O0,
    node: I0,
    isOver: P0,
    setNodeRef: A0
  } = jR({
    id: N,
    data: i,
    disabled: n.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: t,
      ...L
    }
  }), {
    active: y0,
    activatorEvent: O1,
    activeNodeRect: r0,
    attributes: x1,
    setNodeRef: k0,
    listeners: F1,
    isDragging: S1,
    over: w6,
    setActivatorNodeRef: q6,
    transform: z6
  } = kR({
    id: N,
    data: i,
    attributes: {
      ...pf,
      ...Y
    },
    disabled: n.draggable
  }), M6 = mD(A0, k0), U1 = Boolean(y0), f0 = U1 && !o && dH(I) && dH(X0), j6 = !d && S1, $8 = j6 && f0 ? z6 : null, l1 = F != null ? F : Z0, N6 = f0 ? $8 != null ? $8 : l1({
    rects: p,
    activeNodeRect: r0,
    activeIndex: I,
    overIndex: X0,
    index: r
  }) : null, W6 = dH(I) && dH(X0) ? z({
    id: N,
    items: D,
    activeIndex: I,
    overIndex: X0
  }) : r, I1 = y0 == null ? void 0 : y0.id, u0 = _6.useRef({
    activeId: I1,
    items: D,
    newIndex: W6,
    containerId: k
  }), d1 = D !== u0.current.items, J0 = J({
    active: y0,
    containerId: k,
    isDragging: S1,
    isSorting: U1,
    id: N,
    index: r,
    items: D,
    newIndex: u0.current.newIndex,
    previousItems: u0.current.items,
    previousContainerId: u0.current.containerId,
    transition: w,
    wasDragging: u0.current.activeId != null
  }), K6 = df({
    disabled: !J0,
    index: r,
    node: I0,
    rect: O0
  });
  return _6.useEffect(() => {
    if (U1 && u0.current.newIndex !== W6)
      u0.current.newIndex = W6;
    if (k !== u0.current.containerId)
      u0.current.containerId = k;
    if (D !== u0.current.items)
      u0.current.items = D;
  }, [U1, W6, k, D]), _6.useEffect(() => {
    if (I1 === u0.current.activeId)
      return;
    if (I1 && !u0.current.activeId) {
      u0.current.activeId = I1;
      return;
    }
    let _1 = setTimeout(() => {
      u0.current.activeId = I1;
    }, 50);
    return () => clearTimeout(_1);
  }, [I1]), {
    active: y0,
    activeIndex: I,
    attributes: x1,
    data: i,
    rect: O0,
    index: r,
    newIndex: W6,
    items: D,
    isOver: P0,
    isSorting: U1,
    isDragging: S1,
    listeners: F1,
    node: I0,
    overIndex: X0,
    over: w6,
    setNodeRef: M6,
    setActivatorNodeRef: q6,
    setDroppableNodeRef: A0,
    setDraggableNodeRef: k0,
    transform: K6 != null ? K6 : N6,
    transition: k1()
  };
  function k1() {
    if (K6 || d1 && u0.current.newIndex === r)
      return cf;
    if (j6 && !Bq(O1) || !w)
      return;
    if (U1 || J0)
      return GZ.Transition.toString({
        ...w,
        property: _R
      });
    return;
  }
}
function lf(Q, J) {
  var Y, W;
  if (typeof Q === "boolean")
    return {
      draggable: Q,
      droppable: !1
    };
  return {
    draggable: (Y = Q == null ? void 0 : Q.draggable) != null ? Y : J.draggable,
    droppable: (W = Q == null ? void 0 : Q.droppable) != null ? W : J.droppable
  };
}
function lH(Q) {
  if (!Q)
    return !1;
  let J = Q.data.current;
  if (J && "sortable" in J && typeof J.sortable === "object" && "containerId" in J.sortable && "items" in J.sortable && "index" in J.sortable)
    return !0;
  return !1;
}
var nf = [L1.Down, L1.Right, L1.Up, L1.Left], gR = (Q, J) => {
  let {
    context: {
      active: Y,
      collisionRect: W,
      droppableRects: K,
      droppableContainers: z,
      over: N,
      scrollableAncestors: F
    }
  } = J;
  if (nf.includes(Q.code)) {
    if (Q.preventDefault(), !Y || !W)
      return;
    let L = [];
    z.getEnabled().forEach((k) => {
      if (!k || k != null && k.disabled)
        return;
      let I = K.get(k.id);
      if (!I)
        return;
      switch (Q.code) {
        case L1.Down:
          if (W.top < I.top)
            L.push(k);
          break;
        case L1.Up:
          if (W.top > I.top)
            L.push(k);
          break;
        case L1.Left:
          if (W.left > I.left)
            L.push(k);
          break;
        case L1.Right:
          if (W.left < I.left)
            L.push(k);
          break;
      }
    });
    let w = YR({
      active: Y,
      collisionRect: W,
      droppableRects: K,
      droppableContainers: L,
      pointerCoordinates: null
    }), D = cE(w, "id");
    if (D === (N == null ? void 0 : N.id) && w.length > 1)
      D = w[1].id;
    if (D != null) {
      let k = z.get(Y.id), I = z.get(D), h = I ? K.get(I.id) : null, o = I == null ? void 0 : I.node.current;
      if (o && h && k && I) {
        let X0 = Z3(o).some((t, O0) => F[O0] !== t), d = xR(k, I), Z0 = sf(k, I), n = X0 || !d ? {
          x: 0,
          y: 0
        } : {
          x: Z0 ? W.width - h.width : 0,
          y: Z0 ? W.height - h.height : 0
        }, r = {
          x: h.left,
          y: h.top
        };
        return n.x && n.y ? r : m$(r, n);
      }
    }
  }
  return;
};
function xR(Q, J) {
  if (!lH(Q) || !lH(J))
    return !1;
  return Q.data.current.sortable.containerId === J.data.current.sortable.containerId;
}
function sf(Q, J) {
  if (!lH(Q) || !lH(J))
    return !1;
  if (!xR(Q, J))
    return !1;
  return Q.data.current.sortable.index < J.data.current.sortable.index;
}

// src/components/SortableList/components/SortableItem/SortableItem.tsx
var TX = L6(UQ(), 1);

// src/utils.ts
var hR = (Q, J = 1) => {
  if (Q = Q.replace(/^#/, ""), Q.length !== 6)
    throw new Error("Invalid hex color format. Use #RRGGBB format.");
  let Y = parseInt(Q.substring(0, 2), 16), W = parseInt(Q.substring(2, 4), 16), K = parseInt(Q.substring(4, 6), 16);
  return {
    r: Y,
    g: W,
    b: K,
    a: J
  };
};
var vR = (Q) => {
  if (Q.length === 0)
    return null;
  let J = Q.find((Y) => Y.atom === "CA");
  if (!J || !J.x || !J.y || !J.z)
    return null;
  return { x: J.x, y: J.y, z: J.z };
}, yR = (Q) => {
  let J = Q[0], Y = Q[Q.length - 1] - J + 1;
  return Array.from(new Array(Y), (K, z) => z + J);
}, fR = {
  ALA: "A",
  ARG: "R",
  ASN: "N",
  ASP: "D",
  CYS: "C",
  GLU: "E",
  GLN: "Q",
  GLY: "G",
  HIS: "H",
  ILE: "I",
  LEU: "L",
  LYS: "K",
  MET: "M",
  PHE: "F",
  PRO: "P",
  SER: "S",
  THR: "T",
  TRP: "W",
  TYR: "Y",
  VAL: "V",
  "?": "?"
}, c$ = (Q) => {
  if (Q === void 0)
    return !1;
  return Q.toLowerCase() === Q.toUpperCase();
}, Sq = (Q) => {
  let J = /^([A-Z]+)(\d+)(-\d+)?$/, Y = Q.match(J);
  if (!Y)
    return console.error("The regex cannot parse this segment: " + Q), null;
  let [, W, K, z] = Y, N = parseInt(K, 10), F = z ? parseInt(z.slice(1), 10) : N;
  if (N > F)
    return console.error("Invalid segment: " + Q), null;
  return {
    chainId: W,
    firstIndex: N,
    lastIndex: F
  };
}, nE = (Q, J) => {
  let Y = Q.filter((K) => !c$(K.content)), W = [];
  for (let K = 0;K < Y.length - 1; K++) {
    let z = Sq(Y[K].content), N = Sq(Y[K + 1].content);
    if (!z) {
      console.error("Failed parsing distances for this segment: " + Y[K].content);
      continue;
    }
    if (!N) {
      console.error("Failed parsing distances for this segment: " + Y[K + 1].content);
      continue;
    }
    let F = J.filter((I) => I.resSeq === z.lastIndex && I.chainID === z.chainId), L = J.filter((I) => I.resSeq === N.firstIndex && I.chainID === N.chainId), w = vR(F), D = vR(L);
    if (!w) {
      console.error("Failed parsing distances for this segment: " + Y[K].content);
      continue;
    }
    if (!D) {
      console.error("Failed parsing distances for this segment: " + Y[K + 1].content);
      continue;
    }
    let k = Math.sqrt((D.x - w.x) ** 2 + (D.y - w.y) ** 2 + (D.z - w.z) ** 2);
    W.push({ segment: `${z.chainId}${z.lastIndex}_${N.chainId}${N.firstIndex}`, result: k });
  }
  return W;
};

// src/components/SortableList/components/SortableItem/SortableItem.tsx
var mR = TX.createContext({
  attributes: {},
  listeners: void 0,
  ref() {}
});
function bR({ children: Q, id: J, color: Y }) {
  let {
    attributes: W,
    isDragging: K,
    listeners: z,
    setNodeRef: N,
    setActivatorNodeRef: F,
    transform: L,
    transition: w
  } = TR({ id: J }), D = TX.useMemo(() => ({
    attributes: W,
    listeners: z,
    ref: F
  }), [W, z, F]), k = hR(Y, 0.1), I = {
    opacity: K ? 0.4 : void 0,
    transform: GZ.Translate.toString(L),
    transition: w,
    color: Y,
    borderColor: Y,
    backgroundColor: `rgba(${k.r}, ${k.g}, ${k.b}, ${k.a})`
  };
  return /* @__PURE__ */ TX.default.createElement(mR.Provider, {
    value: D
  }, /* @__PURE__ */ TX.default.createElement("li", {
    className: "SortableItem",
    ref: N,
    style: I
  }, Q));
}
function uR() {
  let { attributes: Q, listeners: J, ref: Y } = TX.useContext(mR);
  return /* @__PURE__ */ TX.default.createElement("button", {
    className: "DragHandle",
    ...Q,
    ...J,
    ref: Y
  }, /* @__PURE__ */ TX.default.createElement("svg", {
    viewBox: "0 0 20 20",
    width: "12"
  }, /* @__PURE__ */ TX.default.createElement("path", {
    d: "M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"
  })));
}

// src/components/SortableList/components/SortableOverlay/SortableOverlay.tsx
var cR = L6(UQ(), 1), of = {
  sideEffects: lE({
    styles: {
      active: {
        opacity: "0.4"
      }
    }
  })
};
function pR({ children: Q }) {
  return /* @__PURE__ */ cR.default.createElement(BR, {
    dropAnimation: of
  }, Q);
}

// src/components/SortableList/SortableList.tsx
function p$({
  items: Q,
  onChange: J,
  renderItem: Y
}) {
  let [W, K] = NZ.useState(null), z = NZ.useMemo(() => Q.find((F) => F.id === W?.id), [W, Q]), N = $R(uE($3), uE(J3, {
    coordinateGetter: gR
  }));
  return /* @__PURE__ */ NZ.default.createElement(RR, {
    sensors: N,
    onDragStart: ({ active: F }) => {
      K(F);
    },
    onDragEnd: ({ active: F, over: L }) => {
      if (L && F.id !== L?.id) {
        let w = Q.findIndex(({ id: k }) => k === F.id), D = Q.findIndex(({ id: k }) => k === L.id);
        J(nH(Q, w, D));
      }
      K(null);
    },
    onDragCancel: () => {
      K(null);
    }
  }, /* @__PURE__ */ NZ.default.createElement(IR, {
    items: Q
  }, /* @__PURE__ */ NZ.default.createElement("ul", {
    className: "SortableList",
    role: "application"
  }, Q.map((F, L) => /* @__PURE__ */ NZ.default.createElement(NZ.default.Fragment, {
    key: F.id
  }, Y(F, L))))), /* @__PURE__ */ NZ.default.createElement(pR, null, z ? Y(z) : null));
}
p$.Item = bR;
p$.DragHandle = uR;

// src/ContigsOrganizer.tsx
var ck = L6(fk(), 1);

// src/ContigsOrganizerItem.tsx
var yX = L6(UQ(), 1);

// src/AddSegmentButton.tsx
var hX = L6(UQ(), 1);
function zb(Q) {
  let J = Q.index + 1 >= Q.contigParts.length ? "C-term generated segment" : Q.generatedSegmentConnection(Q.index, !0, ""), Y;
  if (typeof J === "string" && J.toLowerCase().includes("invalid"))
    Y = "red";
  else if (Q.index + 1 >= Q.contigParts.length)
    Y = "inherit";
  else
    Y = "orange";
  return /* @__PURE__ */ hX.default.createElement(hX.default.Fragment, null, Q.upperButton && !Q.isGeneratedSegment(Q.contigParts[Q.index]?.content) && /* @__PURE__ */ hX.default.createElement("div", {
    className: "contigRowContainer"
  }, /* @__PURE__ */ hX.default.createElement("div", {
    className: "contigRowColumn1"
  }, /* @__PURE__ */ hX.default.createElement("button", {
    onClick: () => Q.handleAddContigPart(0),
    className: "add-button"
  }, "+")), /* @__PURE__ */ hX.default.createElement("div", {
    className: "contigRowColumn2"
  }, "N-term generated segment")), !Q.upperButton && Q.index !== void 0 && Q.index < Q.contigParts.length && (!Q.isGeneratedSegment(Q.contigParts[Q.index]?.content) && !Q.isGeneratedSegment(Q.contigParts[Q.index + 1]?.content)) && /* @__PURE__ */ hX.default.createElement("div", {
    className: "contigRowContainer"
  }, /* @__PURE__ */ hX.default.createElement("div", {
    className: "contigRowColumn1"
  }, /* @__PURE__ */ hX.default.createElement("button", {
    onClick: () => Q.handleAddContigPart(Q.index + 1),
    className: "add-button"
  }, "+")), /* @__PURE__ */ hX.default.createElement("div", {
    className: "contigRowColumn2"
  }, /* @__PURE__ */ hX.default.createElement("span", {
    style: { color: Y }
  }, J))));
}
var JP = zb;

// src/ContigPart.tsx
var fJ = L6(UQ(), 1), Nb = (Q) => {
  let J = fJ.createRef(), [Y, W] = fJ.useState(Q.contigPart), K = (F) => {
    W(F.target.value);
  }, z = () => {
    Q.updateContigPart(Q.index, Y === "" ? null : Y);
  }, N = (F) => {
    if (F.key === "Enter")
      J.current?.blur();
  };
  return fJ.useEffect(() => {
    if (W(Q.contigPart), Q.contigPart === "")
      J.current?.focus();
  }, [Q.contigPart]), /* @__PURE__ */ fJ.default.createElement("input", {
    ref: J,
    type: "text",
    value: Y,
    placeholder: "10 or 10-20",
    onChange: K,
    onBlur: z,
    onKeyDown: N,
    className: "contigPart"
  });
}, mk = Nb;

// src/ContigsOrganizerItem.tsx
function Eb(Q) {
  let { idx: J, isGeneratedSegment: Y, contigParts: W, handleAddContigPart: K, generatedSegmentConnection: z, item: N, getFixedSegmentDescription: F, updateContigPart: L, getColor: w } = Q, D = Y(N.content) ? z(J, !1, N.content) : F(N.content), k = "inherit";
  if (typeof D === "string" && D.toLowerCase().includes("invalid"))
    k = "red";
  return /* @__PURE__ */ yX.default.createElement(yX.default.Fragment, null, Q.idx === 0 && /* @__PURE__ */ yX.default.createElement(JP, {
    index: Q.idx,
    handleAddContigPart: K,
    contigParts: W,
    isGeneratedSegment: Y,
    upperButton: !0,
    generatedSegmentConnection: z
  }), /* @__PURE__ */ yX.default.createElement("div", {
    className: "contigRowContainer"
  }, /* @__PURE__ */ yX.default.createElement("div", {
    className: "contigRowColumn1",
    style: { display: "block" }
  }, /* @__PURE__ */ yX.default.createElement(p$.Item, {
    id: N.id,
    color: w(N)
  }, /* @__PURE__ */ yX.default.createElement(mk, {
    contigPart: N.content,
    index: J,
    updateContigPart: L
  }), !Y(N.content) && /* @__PURE__ */ yX.default.createElement(p$.DragHandle, null))), J !== void 0 && /* @__PURE__ */ yX.default.createElement("div", {
    className: "contigRowColumn2"
  }, /* @__PURE__ */ yX.default.createElement("span", {
    style: { color: k }
  }, D))), J !== void 0 && J < W.length && /* @__PURE__ */ yX.default.createElement(JP, {
    index: J,
    handleAddContigPart: K,
    contigParts: W,
    isGeneratedSegment: Y,
    upperButton: !1,
    generatedSegmentConnection: z
  }));
}
var bk = Eb;

// node_modules/uuid/dist/esm-browser/stringify.js
var u8 = [];
for (let Q = 0;Q < 256; ++Q)
  u8.push((Q + 256).toString(16).slice(1));
function uk(Q, J = 0) {
  return (u8[Q[J + 0]] + u8[Q[J + 1]] + u8[Q[J + 2]] + u8[Q[J + 3]] + "-" + u8[Q[J + 4]] + u8[Q[J + 5]] + "-" + u8[Q[J + 6]] + u8[Q[J + 7]] + "-" + u8[Q[J + 8]] + u8[Q[J + 9]] + "-" + u8[Q[J + 10]] + u8[Q[J + 11]] + u8[Q[J + 12]] + u8[Q[J + 13]] + u8[Q[J + 14]] + u8[Q[J + 15]]).toLowerCase();
}

// node_modules/uuid/dist/esm-browser/rng.js
var $P, Fb = new Uint8Array(16);
function YP() {
  if (!$P) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    $P = crypto.getRandomValues.bind(crypto);
  }
  return $P(Fb);
}

// node_modules/uuid/dist/esm-browser/native.js
var Pb = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto), qP = { randomUUID: Pb };

// node_modules/uuid/dist/esm-browser/v4.js
function Ab(Q, J, Y) {
  if (qP.randomUUID && !J && !Q)
    return qP.randomUUID();
  Q = Q || {};
  let W = Q.random ?? Q.rng?.() ?? YP();
  if (W.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (W[6] = W[6] & 15 | 64, W[8] = W[8] & 63 | 128, J) {
    if (Y = Y || 0, Y < 0 || Y + 16 > J.length)
      throw new RangeError(`UUID byte range ${Y}:${Y + 15} is out of buffer bounds`);
    for (let K = 0;K < 16; ++K)
      J[Y + K] = W[K];
    return J;
  }
  return uk(W);
}
var tH = Ab;
// src/ContigsOrganizer.tsx
function Ub(Q) {
  let [J, Y] = D8.useState(), [W, K] = D8.useState([]), z = D8.useRef(null), N = D8.useRef(/* @__PURE__ */ new Map), F = D8.useRef(/* @__PURE__ */ new Map);
  D8.useEffect(() => {
    let p = Q.contigs.split("/").map((X0) => ({
      id: tH(),
      content: X0
    }));
    if (Y(p), W.length === 0) {
      let X0 = new ck.PdbParser;
      X0.collect(Q.pdb.split(`
`));
      let Z0 = X0.parse().coordinate.atoms.map((r) => r.data);
      K(Z0), nE(p, Z0).forEach((r) => N.current.set(r.segment, r.result));
    }
  }, [Q.contigs]);
  let L = (p, X0) => {
    let d = [...p];
    for (let n = 0;n < d.length - 1; n++)
      if (c$(d[n].content) && c$(d[n + 1].content))
        d.splice(n, 1), n--;
    return nE(p, X0).forEach((n) => N.current.set(n.segment, n.result)), d;
  }, w = (p) => {
    let X0 = { id: tH(), content: "" };
    Y((d) => {
      let Z0 = [...d || []];
      return Z0.splice(p, 0, X0), L(Z0, W);
    });
  }, D = (p, X0) => {
    Y((d) => {
      let Z0 = [...d || []];
      if (X0 === null)
        Z0.splice(p, 1);
      else
        Z0[p].content = X0;
      return L(Z0, W);
    });
  }, k = (p) => {
    if (Q.colors.has(p.content))
      return Q.colors.get(p.content);
    return "#6d6d6d";
  }, I = (p) => {
    Y(L(p, W));
  }, h = (p, X0, d) => {
    if (J === void 0)
      return "";
    if (!X0 && p === 0)
      return "N-term generated segment";
    if (!X0 && p === J.length - 1)
      return "C-term generated segment";
    let Z0 = p, n = p + 1;
    if (!X0)
      Z0 = p - 1;
    let r = J[Z0].content, i = J[n].content;
    if (c$(r) || c$(i))
      return "";
    let t = Sq(r), O0 = Sq(i);
    if (!t)
      return console.error("Failed parsing distances for this segment: " + J[Z0].content), `Invalid connected fixed segment ${J[Z0].content}. Please, change it.`;
    if (!O0)
      return console.error("Failed parsing distances for this segment: " + J[p + 1].content), `Invalid connected fixed segment ${J[p + 1].content}. Please, change it.`;
    let I0 = N.current.get(`${t.chainId}${t.lastIndex}_${O0.chainId}${O0.firstIndex}`)?.toFixed(1) ?? "?";
    if (X0 || !d)
      return `Please add a segment connecting ${t.chainId}${t.lastIndex} -> ${O0.chainId}${O0.firstIndex} (${I0} Å)`;
    let P0 = d.match(/^[A-Z]?([0-9]+)(-([0-9]+))?$/);
    if (P0) {
      if (parseInt(P0[1]) > parseInt(P0[3] || P0[1]))
        return "Invalid range (start > end)";
    } else
      return "Invalid format, expected: 10, 10-20, or A10-20";
    return /* @__PURE__ */ D8.default.createElement(D8.default.Fragment, null, "Generated segment of ", d, " residues", /* @__PURE__ */ D8.default.createElement("br", null), /* @__PURE__ */ D8.default.createElement("span", null, "Connecting ", t.chainId, t.lastIndex, " -> ", O0.chainId, O0.firstIndex, " (", I0, " Å)"));
  }, o = (p) => {
    if (F.current.has(p)) {
      let t = F.current.get(p);
      if (t.length >= 10)
        return `Fixed segment of ${t.length} residues: ${t.substring(0, 3)}...${t.substring(t.length - 3, t.length)}`;
      return `Fixed segment of ${t.length} residues: ${t}`;
    }
    let d = Sq(p);
    if (!d)
      return "Invalid segment. Please, change it.";
    let Z0 = yR([d.firstIndex, d.lastIndex]), i = W.filter((t) => t.chainID === d.chainId && Z0.indexOf(t.resSeq ?? -1) !== -1).reduce((t, O0) => {
      if (t.length === 0 || t[t.length - 1].resName !== O0.resName || t[t.length - 1].resSeq !== O0.resSeq)
        t.push(O0);
      return t;
    }, []).map((t) => fR[t.resName]).join("");
    if (F.current.set(p, i), i.length >= 10)
      return `Fixed segment of length ${i.length}: ${i.substring(0, 3)}...${i.substring(i.length - 3, i.length)}`;
    return `Fixed segment of length ${i.length}: ${i}`;
  };
  return D8.useEffect(() => {
    if (z.current)
      bQ.setFrameHeight(z.current.clientHeight);
    if (J !== void 0)
      Q.updateStreamlitComponentValue({
        contig: J.map((p) => p.content).join("/")
      });
  }, [z, J]), /* @__PURE__ */ D8.default.createElement("div", {
    ref: z
  }, J !== void 0 && /* @__PURE__ */ D8.default.createElement(p$, {
    items: J,
    onChange: I,
    renderItem: (p, X0) => /* @__PURE__ */ D8.default.createElement(bk, {
      idx: X0,
      handleAddContigPart: w,
      contigParts: J,
      isGeneratedSegment: c$,
      generatedSegmentConnection: h,
      item: p,
      getFixedSegmentDescription: o,
      getColor: k,
      updateContigPart: D
    })
  }));
}
var pk = Ub;

// src/StreamlitWrapper.tsx
class lk extends IE {
  constructor(Q) {
    super(Q);
    this.state = { currentComponentState: null }, this.updateStreamlitComponentValue = this.updateStreamlitComponentValue.bind(this);
  }
  updateStreamlitComponentValue = (Q) => {
    this.setState((J) => {
      if (J?.currentComponentState) {
        let Y = JSON.stringify(J.currentComponentState), W = JSON.stringify(Q);
        if (Y !== W)
          bQ.setComponentValue({
            previous: J.currentComponentState,
            current: Q
          });
      }
      return {
        ...J,
        currentComponentState: Q
      };
    });
  };
  render = () => {
    let Q = this.props.args.contigs, J = this.props.args.pdb, Y = new Map(Object.entries(JSON.parse(this.props.args.colors)));
    if (!Q || Q.trim() === "")
      return "No contigs provided.";
    return /* @__PURE__ */ dk.default.createElement(pk, {
      contigs: Q,
      pdb: J,
      colors: Y,
      updateStreamlitComponentValue: this.updateStreamlitComponentValue
    });
  };
}
var nk = _E(lk);

// src/index.tsx
var Lb = document.getElementById("root"), Ob = sk.createRoot(Lb);
Ob.render(/* @__PURE__ */ eH.default.createElement(eH.default.StrictMode, null, /* @__PURE__ */ eH.default.createElement(nk, null)));
