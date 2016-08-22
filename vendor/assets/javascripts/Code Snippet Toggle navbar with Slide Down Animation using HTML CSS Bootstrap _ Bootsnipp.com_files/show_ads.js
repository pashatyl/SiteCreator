(function () {
    var m = this, aa = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ba = function (a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, r = function (a, b, c) {
        r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return r.apply(null, arguments)
    }, ca = Date.now ||
        function () {
            return +new Date
        };
    var u = (new Date).getTime();
    var y = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, da = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g, ea = function () {
    }, z = function (a, b, c) {
        switch (typeof b) {
            case "string":
                fa(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (null == b) {
                    c.push("null");
                    break
                }
                if (b instanceof Array || void 0 != b.length &&
                    b.splice) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", g = 0; g < d; g++)c.push(e), z(a, b[g], c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (e in b)b.hasOwnProperty(e) && (g = b[e], "function" != typeof g && (c.push(d), fa(e, c), c.push(":"), z(a, g, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }, fa = function (a, b) {
        b.push('"');
        b.push(a.replace(da, function (a) {
            if (a in y)return y[a];
            var b = a.charCodeAt(0), e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return y[a] = e + b.toString(16)
        }));
        b.push('"')
    };
    var A = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, ga = /&/g, ha = /</g, ia = />/g, ja = /"/g, ka = /'/g, la = /\x00/g, ma = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "<"
    }, B = {"'": "\\'"}, na = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var oa = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = "string" == typeof a ? a.split("") : a, g = 0; g < d; g++)g in e && b.call(c, e[g], g, a)
    };
    var C;
    a:{
        var pa = m.navigator;
        if (pa) {
            var qa = pa.userAgent;
            if (qa) {
                C = qa;
                break a
            }
        }
        C = ""
    }
    var D = function (a) {
        return -1 != C.indexOf(a)
    };
    var E = function (a) {
        E[" "](a);
        return a
    };
    E[" "] = function () {
    };
    var sa = function (a, b) {
        var c = ra;
        Object.prototype.hasOwnProperty.call(c, a) || (c[a] = b(a))
    };
    var ta = function (a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)a:{
                try {
                    E(a.foo);
                    b = !0;
                    break a
                } catch (c) {
                }
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }, ua = function (a) {
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }, va = function (a, b) {
        for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }, wa = function (a) {
        var b = a.length;
        if (0 == b)return 0;
        for (var c = 305419896, d = 0; d < b; d++)c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 +
        c
    };
    var xa = function (a, b) {
        this.j = a;
        this.l = b
    }, ya = function (a, b, c) {
        this.url = a;
        this.j = b;
        this.G = !!c;
        this.depth = null
    };
    var za = function (a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
    };
    var Aa = function (a, b, c, d, e) {
        this.w = c || 4E3;
        this.s = a || "&";
        this.A = b || ",$";
        this.u = void 0 !== d ? d : "trn";
        this.C = e || null;
        this.v = !1;
        this.l = {};
        this.B = 0;
        this.j = []
    }, Ba = function (a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }, F = function (a, b, c, d) {
        a.j.push(b);
        a.l[b] = Ba(c, d)
    }, Ea = function (a, b, c, d) {
        b = b + "//" + c + d;
        var e = Ca(a) - d.length - 0;
        if (0 > e)return "";
        a.j.sort(function (a, b) {
            return a - b
        });
        d = null;
        c = "";
        for (var g = 0; g < a.j.length; g++)for (var f = a.j[g], h = a.l[f], k = 0; k < h.length; k++) {
            if (!e) {
                d = null == d ? f : d;
                break
            }
            var l = Da(h[k], a.s, a.A);
            if (l) {
                l = c + l;
                if (e >= l.length) {
                    e -= l.length;
                    b += l;
                    c = a.s;
                    break
                } else a.v && (c = e, l[c - 1] == a.s && --c, b += l.substr(0, c), c = a.s, e = 0);
                d = null == d ? f : d
            }
        }
        g = "";
        a.u && null != d && (g = c + a.u + "=" + (a.C || d));
        return b + g + ""
    }, Ca = function (a) {
        if (!a.u)return a.w;
        var b = 1, c;
        for (c in a.l)b = c.length > b ? c.length : b;
        return a.w - a.u.length - b - a.s.length - 1
    }, Da = function (a, b, c, d, e) {
        var g = [];
        va(a, function (a, h) {
            var k = Fa(a, b, c, d, e);
            k && g.push(h + "=" + k)
        });
        return g.join(b)
    }, Fa = function (a, b, c, d, e) {
        if (null == a)return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var g = [], f = 0; f < a.length; f++)g.push(Fa(a[f], b, c, d + 1, e));
                return g.join(c[d])
            }
        } else if ("object" == typeof a)return e = e || 0, 2 > e ? encodeURIComponent(Da(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    var Ha = function (a, b, c, d, e) {
        try {
            var g;
            c instanceof Aa ? g = c : (g = new Aa, va(c, function (a, b) {
                var c = g, d = c.B++, e = Ba(b, a);
                c.j.push(d);
                c.l[d] = e
            }));
            if ((d ? a.v : Math.random()) < (e || a.j)) {
                var f = Ea(g, a.u, a.l, a.s + b + "&");
                Ga(f)
            }
        } catch (h) {
        }
    }, Ga = function (a) {
        m.google_image_requests || (m.google_image_requests = []);
        var b = m.document.createElement("img");
        b.src = a;
        m.google_image_requests.push(b)
    };
    var Ia = function (a, b, c) {
        this.u = a;
        this.w = b;
        this.s = c;
        this.l = null;
        this.v = this.j
    }, Ja = function (a, b, c) {
        this.s = a;
        this.j = b || "";
        this.l = c || -1
    }, La = function (a, b, c, d) {
        var e;
        try {
            e = c()
        } catch (h) {
            var g = a.s;
            try {
                var f = Ka(h), g = (d || a.v).call(a, b, f, void 0, void 0)
            } catch (k) {
                a.j("pAR", k)
            }
            if (!g)throw h;
        } finally {
        }
        return e
    }, Ma = function (a, b) {
        var c = G;
        return function () {
            for (var d = [], e = 0; e < arguments.length; ++e)d[e] = arguments[e];
            return La(c, a, function () {
                return b.apply(void 0, d)
            })
        }
    };
    Ia.prototype.j = function (a, b, c, d, e) {
        try {
            var g = e || this.w, f = new Aa;
            f.v = !0;
            F(f, 1, "context", a);
            b instanceof Ja || (b = Ka(b));
            F(f, 2, "msg", b.s.substring(0, 512));
            b.j && F(f, 3, "file", b.j);
            0 < b.l && F(f, 4, "line", b.l.toString());
            b = {};
            if (this.l)try {
                this.l(b)
            } catch (w) {
            }
            if (d)try {
                d(b)
            } catch (w) {
            }
            d = [b];
            f.j.push(5);
            f.l[5] = d;
            var h;
            e = m;
            d = [];
            var k, l = null;
            do {
                b = e;
                ta(b) ? (k = b.location.href, l = b.document && b.document.referrer || null) : (k = l, l = null);
                d.push(new ya(k || "", b));
                try {
                    e = b.parent
                } catch (w) {
                    e = null
                }
            } while (e && b != e);
            k = 0;
            for (var p = d.length -
                1; k <= p; ++k)d[k].depth = p - k;
            b = m;
            if (b.location && b.location.ancestorOrigins && b.location.ancestorOrigins.length == d.length - 1)for (k = 1; k < d.length; ++k) {
                var v = d[k];
                v.url || (v.url = b.location.ancestorOrigins[k - 1] || "", v.G = !0)
            }
            for (var t = new ya(m.location.href, m, !1), n = d.length - 1, p = n; 0 <= p; --p) {
                var q = d[p];
                if (q.url && !q.G) {
                    t = q;
                    break
                }
            }
            var q = null, x = d.length && d[n].url;
            0 != t.depth && x && (q = d[n]);
            h = new xa(t, q);
            h.l && F(f, 6, "top", h.l.url || "");
            F(f, 7, "url", h.j.url || "");
            Ha(this.u, g, f, !1, c)
        } catch (w) {
            try {
                Ha(this.u, g, {
                    context: "ecmserr",
                    rctx: a, msg: Na(w), url: h.j.url
                }, !1, c)
            } catch (M) {
            }
        }
        return this.s
    };
    var Ka = function (a) {
        return new Ja(Na(a), a.fileName, a.lineNumber)
    }, Na = function (a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;)d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };
    var Oa = document, H = window, Pa = null, I = Oa.getElementsByTagName("script");
    I && I.length && (Pa = I[I.length - 1]);
    var Qa = Pa;
    var J = function (a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    }, Ra = function (a, b) {
        var c = parseInt(a, 10);
        return isNaN(c) ? b : c
    }, Sa = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/, Ta = function (a, b) {
        if (!a)return b;
        var c = a.match(Sa);
        return c ? c[0] : b
    };
    var Ua = Ra("100", -1), Va = Ra("100", 0), Wa = J("0.05"), Xa = J("0.001"), Ya = J("0.01"), Za = J("");
    var $a = function () {
        return "r20160816"
    }, ab = /^true$/.test("false") ? !0 : !1, bb = /^true$/.test("false") ? !0 : !1, cb = /^true$/.test("false") ? !0 : !1, db = cb || !bb;
    var eb = D("Opera"), K = D("Trident") || D("MSIE"), fb = D("Edge"), L = D("Gecko") && !(-1 != C.toLowerCase().indexOf("webkit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"), gb = -1 != C.toLowerCase().indexOf("webkit") && !D("Edge"), hb = function () {
        var a = m.document;
        return a ? a.documentMode : void 0
    }, ib;
    a:{
        var jb = "", kb = function () {
            var a = C;
            if (L)return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (fb)return /Edge\/([\d\.]+)/.exec(a);
            if (K)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (gb)return /WebKit\/(\S+)/.exec(a);
            if (eb)return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        kb && (jb = kb ? kb[1] : "");
        if (K) {
            var lb = hb();
            if (null != lb && lb > parseFloat(jb)) {
                ib = String(lb);
                break a
            }
        }
        ib = jb
    }
    var mb = ib, ra = {}, nb = function (a) {
        sa(a, function () {
            for (var b = 0, c = A(String(mb)).split("."), d = A(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
                var f = c[g] || "", h = d[g] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == h[0].length)break;
                    b = na(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || na(0 == f[2].length, 0 == h[2].length) || na(f[2], h[2]);
                    f = f[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }, ob = m.document, pb = ob &&
    K ? hb() || ("CSS1Compat" == ob.compatMode ? parseInt(mb, 10) : 5) : void 0;
    var qb;
    if (!(qb = !L && !K)) {
        var rb;
        if (rb = K)rb = 9 <= Number(pb);
        qb = rb
    }
    qb || L && nb("1.9.1");
    K && nb("9");
    var sb = Object.prototype.hasOwnProperty, tb = function (a, b) {
        for (var c in a)sb.call(a, c) && b.call(void 0, a[c], c, a)
    }, N = function (a) {
        return !(!a || !a.call) && "function" === typeof a
    }, xb = function (a, b) {
        for (var c = 1, d = arguments.length; c < d; ++c)a.push(arguments[c])
    }, O = function (a, b) {
        if (a.indexOf) {
            var c = a.indexOf(b);
            return 0 < c || 0 === c
        }
        for (c = 0; c < a.length; c++)if (a[c] === b)return !0;
        return !1
    }, yb = function (a) {
        "google_onload_fired" in a || (a.google_onload_fired = !1, za(a, function () {
            a.google_onload_fired = !0
        }))
    }, zb = function (a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }, Ab = !!window.google_async_iframe_id;
    var Bb, G, P, Q = [], Cb = 1E-6 > Math.random(), Db = !(!H.performance || !H.performance.now);
    Bb = new function () {
        this.u = "http:" === H.location.protocol ? "http:" : "https:";
        this.l = "pagead2.googlesyndication.com";
        this.s = "/pagead/gen_204?id=";
        this.j = .01;
        this.v = Math.random()
    };
    G = new Ia(Bb, "jserror", !0);
    var Gb = function (a, b) {
        var c = Eb;
        if (Cb) {
            var d = Db ? H.performance.now() : ca();
            La(G, a, b, c);
            c = Math.round((Db ? H.performance.now() : ca()) - d);
            Q.push(a + "." + c);
            P || (P = H.setTimeout(Fb, 500))
        } else La(G, a, b, c)
    }, Eb = G.j, Fb = function () {
        Q.length && (Ha(Bb, "execution_time", {
            data: Q.join(","),
            nav_api: Db ? 1 : 0
        }, !0, Cb ? 1 : 0), Q = [], H.clearTimeout(P), P = void 0)
    }, Hb = function (a, b) {
        return Ma(a, b)
    };
    var Ib = D("Safari") && !((D("Chrome") || D("CriOS")) && !D("Edge") || D("Coast") || D("Opera") || D("Edge") || D("Silk") || D("Android")) && !(D("iPhone") && !D("iPod") && !D("iPad") || D("iPad") || D("iPod"));
    var R = null, Jb = L || gb && !Ib || eb || "function" == typeof m.btoa;
    var S = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_auto_format google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_delay_requests_count google_delay_requests_delay google_ed google_eids google_enable_content_recommendations google_enable_ose google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
        Kb = {
            google_ad_modifications: !0,
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0
        }, Lb = function (a) {
            return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
        }, Mb = function (a) {
            if (a = a.innerText || a.innerHTML)if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1]))return a[1];
            return null
        }, Pb = function (a) {
            var b;
            try {
                a:{
                    var c = a.document.getElementsByTagName("script"), d = a.navigator && a.navigator.userAgent || "", e;
                    if (!(e = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(d))) {
                        var g;
                        if (g = /i(phone|pad|pod)/i.test(d)) {
                            var f;
                            if (f = /applewebkit/i.test(d) && !/version|safari/i.test(d)) {
                                var h;
                                try {
                                    h = !(!H.navigator.j && !(ab && H.google_top_window || H.top).navigator.j)
                                } catch (t) {
                                    h = !1
                                }
                                f = !h
                            }
                            g = f
                        }
                        e = g
                    }
                    for (var d = e ? Lb : Mb, k = c.length - 1; 0 <= k; k--) {
                        var l = c[k];
                        if (!l.google_parsed_script) {
                            l.google_parsed_script = !0;
                            var p = d(l);
                            if (p) {
                                b = p;
                                break a
                            }
                        }
                    }
                    b = null
                }
            } catch (t) {
                return !1
            }
            if (!b)return !1;
            try {
                for (var c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm, k = {}, v; v = c.exec(b);)k[v[1]] = Nb(v[2]);
                Ob(k, a)
            } catch (t) {
                return !1
            }
            return !!a.google_ad_client
        }, Qb = function (a) {
            a.google_page_url && (a.google_page_url = String(a.google_page_url));
            var b = [];
            tb(a, function (a, d) {
                if (null != a) {
                    var e;
                    try {
                        var g = [];
                        z(new ea, a, g);
                        e = g.join("")
                    } catch (f) {
                    }
                    e &&
                    (e = e.replace(/\//g, "\\$&"), xb(b, d, "=", e, ";"))
                }
            });
            return b.join("")
        }, Rb = function (a) {
            for (var b = 0, c = S.length; b < c; b++) {
                var d = S[b];
                Kb[d] || (a[d] = null)
            }
        }, Nb = function (a) {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b)return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            var c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (d) {
                    }
            }
        }, Ob = function (a, b) {
            for (var c = 0; c < S.length; c++) {
                var d = S[c];
                null == b[d] && null !=
                a[d] && (b[d] = a[d])
            }
        };
    var Sb = function (a) {
        return (a = a.google_ad_modifications) ? a.eids || [] : []
    }, Tb = function (a) {
        return (a = a.google_ad_modifications) ? a.loeids || [] : []
    }, Ub = function (a, b, c) {
        if (!a)return null;
        for (var d = 0; d < a.length; ++d)if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c)return a[d];
        return null
    };
    var Vb = {
        client: "google_ad_client",
        format: "google_ad_format",
        slotname: "google_ad_slot",
        output: "google_ad_output",
        ad_type: "google_ad_type",
        pse: "google_pstate_expt"
    };
    G.s = !ab;
    var Wb = function (a, b) {
        this.l = a < b ? a : b;
        this.j = a < b ? b : a
    };
    var Xb = function (a) {
        var b;
        try {
            b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10)
        } catch (c) {
            return null
        }
        if (0 <= b && 1E3 > b)return b;
        b = Math.floor(1E3 * ua(a));
        try {
            return a.localStorage.setItem("google_experiment_mod", "" + b), b
        } catch (c) {
            return null
        }
    };
    var Yb = null, Zb = function () {
        if (!Yb) {
            for (var a = window, b = a, c = 0; a && a != a.parent;)if (a = a.parent, c++, ta(a))b = a; else break;
            Yb = b
        }
        return Yb
    };
    var $b = {m: "10573511", o: "10573512"}, ac = {m: "10573507", o: "10573508"}, bc = {
        m: "10583695",
        o: "10583696"
    }, T = {
        X: {},
        la: {m: "453848102", o: "453848103"},
        ga: {m: "24819308", o: "24819309", T: "24819320", Z: "24819321"},
        da: {m: "24819330", o: "24819331"},
        aa: {m: "86724438", o: "86724439"},
        M: {m: "10573597", o: "10573598"},
        N: {m: "10573581", o: "10573582"},
        Y: {m: "26835105", o: "26835106"},
        $: {m: "35923720", o: "35923721"},
        D: {m: "35923760", o: "35923761"},
        L: {m: "20040000", o: "20040001"},
        V: {m: "20040016", o: "20040017"},
        W: {P: "314159230", ca: "314159231"},
        ba: {
            ia: "27285692",
            ka: "27285712", ja: "27285713"
        },
        ha: {m: "27415010", o: "27415011"},
        S: {m: "618018082", R: "618018083", U: "618018084"},
        ea: {m: "184965423", o: "184965424"},
        fa: {m: "184965425", o: "184965426"}
    };
    var cc = new function () {
        this.j = new Wb(100, 199)
    };
    var U = function (a, b, c, d) {
        if (a.location && a.location.hash == "#google_plle_" + d)b = d; else a:{
            a = [c, d];
            if (!(1E-4 > Math.random()) && (c = Math.random(), c < b)) {
                c = ua(window);
                b = a[Math.floor(c * a.length)];
                break a
            }
            b = null
        }
        return b
    };
    var dc = function (a, b, c) {
        Gb("files::getSrc", function () {
            if ("https:" == H.location.protocol && "http" == c)throw c = "https", Error("Requested url " + a + b);
        });
        return [c, "://", a, b].join("")
    }, ec = function (a, b, c) {
        c || (c = db ? "https" : "http");
        return dc(a, b, c)
    };
    var V = function (a) {
        this.j = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {handlers: {}, upd: r(this.u, this)});
        this.s = a.google_iframe_oncopy
    }, fc = function (a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)"), d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
        return b
    };
    V.prototype.set = function (a, b) {
        this.s.handlers[a] = b;
        this.j.addEventListener && this.j.addEventListener("load", r(this.l, this, a), !1)
    };
    V.prototype.l = function (a) {
        a = this.j.document.getElementById(a);
        try {
            var b = a.contentWindow.document;
            if (a.onload && b && (!b.body || !b.body.firstChild))a.onload()
        } catch (c) {
        }
    };
    V.prototype.u = function (a, b) {
        var c = fc("rx", a), d;
        a:{
            if (a && (d = a.match("dt=([^&]+)")) && 2 == d.length) {
                d = d[1];
                break a
            }
            d = ""
        }
        d = (new Date).getTime() - d;
        c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= d ? "M" : 0 <= d ? d : "-M"));
        this.set(b, c);
        return c
    };
    var gc;
    var W = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
    /[\x00&<>"']/.test(W) && (-1 != W.indexOf("&") && (W = W.replace(ga, "&amp;")), -1 != W.indexOf("<") && (W = W.replace(ha, "&lt;")), -1 != W.indexOf(">") && (W = W.replace(ia, "&gt;")), -1 != W.indexOf('"') && (W = W.replace(ja, "&quot;")), -1 != W.indexOf("'") && (W = W.replace(ka, "&#39;")), -1 != W.indexOf("\x00") && (W = W.replace(la, "&#0;")));
    gc = W;
    var hc = function (a) {
        if (!a)return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    L || gb || K && nb(11);
    var ic = /MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i, jc = !1;
    var X = null;
    var kc = {"120x90": !0, "160x90": !0, "180x90": !0, "200x90": !0, "468x15": !0, "728x15": !0};
    var Y = function (a) {
        this.u = [];
        this.l = a || window;
        this.j = 0;
        this.s = null;
        this.B = 0
    }, Z, lc = function (a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }, mc = function (a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && lc(a) && N(a.nq) && N(a.nqa) && N(a.al) && N(a.rl)
    }, nc = function () {
        if (Z && lc(Z))return Z;
        var a = Zb(), b = a.google_jobrunner;
        return mc(b) ? Z = b : a.google_jobrunner = Z = new Y(a)
    }, oc = function (a, b) {
        nc().nq(a, b)
    }, pc = function (a, b) {
        nc().nqa(a, b)
    };
    Y.prototype.C = function (a, b) {
        0 != this.j || 0 != this.u.length || b && b != window ? this.v(a, b) : (this.j = 2, this.A(new qc(a, window)))
    };
    Y.prototype.v = function (a, b) {
        this.u.push(new qc(a, b || this.l));
        rc(this)
    };
    Y.prototype.I = function (a) {
        this.j = 1;
        if (a) {
            var b = Hb("sjr::timeout", r(this.w, this, !0));
            this.s = this.l.setTimeout(b, a)
        }
    };
    Y.prototype.w = function (a) {
        a && ++this.B;
        1 == this.j && (null != this.s && (this.l.clearTimeout(this.s), this.s = null), this.j = 0);
        rc(this)
    };
    Y.prototype.J = function () {
        return !(!window || !Array)
    };
    Y.prototype.H = function () {
        return this.B
    };
    var rc = function (a) {
        var b = Hb("sjr::tryrun", r(a.K, a));
        a.l.setTimeout(b, 0)
    };
    Y.prototype.K = function () {
        if (0 == this.j && this.u.length) {
            var a = this.u.shift();
            this.j = 2;
            var b = Hb("sjr::run", r(this.A, this, a));
            a.j.setTimeout(b, 0);
            rc(this)
        }
    };
    Y.prototype.A = function (a) {
        this.j = 0;
        a.l()
    };
    Y.prototype.nq = Y.prototype.C;
    Y.prototype.nqa = Y.prototype.v;
    Y.prototype.al = Y.prototype.I;
    Y.prototype.rl = Y.prototype.w;
    Y.prototype.sz = Y.prototype.J;
    Y.prototype.tc = Y.prototype.H;
    var qc = function (a, b) {
        this.l = a;
        this.j = b
    };
    var sc = Ab ? 1 == zb(H) : !zb(H), tc = function () {
        var a = cb ? "https" : "http", b = E("script"), c;
        a:{
            if (ab)try {
                var d = H.google_cafe_host || H.top.google_cafe_host;
                if (d) {
                    c = d;
                    break a
                }
            } catch (e) {
            }
            c = Ta("", "pagead2.googlesyndication.com")
        }
        return ["<", b, ' src="', ec(c, ["/pagead/js/", $a(), "/r20160727/show_ads_impl.js"].join(""), a), '"></', b, ">"].join("")
    }, uc = function (a, b,
                      c, d) {
        return function () {
            var e = !1;
            d && nc().al(3E4);
            try {
                var g = a.document.getElementById(b).contentWindow;
                if (ta(g)) {
                    var f = a.document.getElementById(b).contentWindow, h = f.document;
                    h.body && h.body.firstChild || (/Firefox/.test(navigator.userAgent) ? h.open("text/html", "replace") : h.open(), f.google_async_iframe_close = !0, h.write(c))
                } else {
                    for (var k = a.document.getElementById(b).contentWindow, g = c, g = String(g), f = ['"'], h = 0; h < g.length; h++) {
                        var l = g.charAt(h), p = l.charCodeAt(0), v = h + 1, t;
                        if (!(t = ma[l])) {
                            var n;
                            if (31 < p && 127 > p)n =
                                l; else {
                                var q = l;
                                if (q in B)n = B[q]; else if (q in ma)n = B[q] = ma[q]; else {
                                    var x = void 0, w = q.charCodeAt(0);
                                    if (31 < w && 127 > w)x = q; else {
                                        if (256 > w) {
                                            if (x = "\\x", 16 > w || 256 < w)x += "0"
                                        } else x = "\\u", 4096 > w && (x += "0");
                                        x += w.toString(16).toUpperCase()
                                    }
                                    n = B[q] = x
                                }
                            }
                            t = n
                        }
                        f[v] = t
                    }
                    f.push('"');
                    k.location.replace("javascript:" + f.join(""))
                }
                e = !0
            } catch (M) {
                k = Zb().google_jobrunner, mc(k) && k.rl()
            }
            e && (e = fc("google_async_rrc", c), (new V(a)).set(b, uc(a, b, e, !1)))
        }
    }, vc = function (a) {
        var b = ["<iframe"];
        tb(a, function (a, d) {
            null != a && b.push(" " + d + '="' + a + '"')
        });
        b.push("></iframe>");
        return b.join("")
    }, wc = function (a) {
        if (!X)a:{
            for (var b = [m.top], c = [], d = 0, e; e = b[d++];) {
                c.push(e);
                try {
                    if (e.frames)for (var g = e.frames.length, f = 0; f < g && 1024 > b.length; ++f)b.push(e.frames[f])
                } catch (k) {
                }
            }
            for (b = 0; b < c.length; b++)try {
                var h = c[b].frames.google_esf;
                if (h) {
                    X = h;
                    break a
                }
            } catch (k) {
            }
            X = null
        }
        if (!X) {
            c = {style: "display:none"};
            if (/[^a-z0-9-]/.test(a))return "";
            c["data-ad-client"] = hc(a);
            c.id = "google_esf";
            c.name = "google_esf";
            a = ec(Ta("", "googleads.g.doubleclick.net"),
                ["/pagead/html/", $a(), "/r20160727/zrt_lookup.html"].join(""));
            c.src = a;
            return vc(c)
        }
        return ""
    }, xc = function (a, b) {
        var c = b.google_ad_output, d = b.google_ad_format;
        d || "html" != c && null != c || (d = b.google_ad_width + "x" + b.google_ad_height);
        c = !b.google_ad_slot || b.google_override_format || !kc[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
        d && c ? d = d.toLowerCase() : d = "";
        b.google_ad_format = d;
        if ("number" != typeof b.google_reactive_sra_index || !b.google_ad_unit_key) {
            for (var d = [b.google_ad_slot, b.google_ad_format, b.google_ad_type, b.google_ad_width, b.google_ad_height], c = [], e = 0, g = Qa.parentElement; g && 25 > e; g = g.parentNode, ++e)c.push(9 !== g.nodeType && g.id || "");
            (c = c.join()) && d.push(c);
            b.google_ad_unit_key = wa(d.join(":")).toString();
            d = Qa;
            c = [];
            for (e = 0; d && 25 > e; ++e) {
                var g = (g = 9 !== d.nodeType && d.id) ? "/" + g : "", f;
                a:{
                    if (d && d.nodeName && d.parentElement) {
                        f = d.nodeName.toString().toLowerCase();
                        for (var h = d.parentElement.childNodes, k = 0, l = 0; l < h.length; ++l) {
                            var p =
                                h[l];
                            if (p.nodeName && p.nodeName.toString().toLowerCase() === f) {
                                if (d === p) {
                                    f = "." + k;
                                    break a
                                }
                                ++k
                            }
                        }
                    }
                    f = ""
                }
                c.push((d.nodeName && d.nodeName.toString().toLowerCase()) + g + f);
                d = d.parentElement
            }
            d = c.join() + ":";
            c = a;
            e = [];
            if (c)try {
                for (var v = c.parent, g = 0; v && v !== c && 25 > g; ++g) {
                    var t = v.frames;
                    for (f = 0; f < t.length; ++f)if (c === t[f]) {
                        e.push(f);
                        break
                    }
                    c = v;
                    v = c.parent
                }
            } catch (n) {
            }
            b.google_ad_dom_fingerprint = wa(d + e.join()).toString()
        }
    };
    (function (a) {
        G.l = function (b) {
            oa(a, function (a) {
                a(b)
            })
        }
    })([function (a) {
        a.shv = $a()
    }, function (a) {
        va(Vb, function (b, c) {
            try {
                null != m[b] && (a[c] = m[b])
            } catch (d) {
            }
        })
    }]);
    Gb("sa::main", function () {
        var a = window, b = a.google_ad_modifications = a.google_ad_modifications || {};
        if (!b.plle) {
            b.plle = !0;
            var c = b.eids = b.eids || [], b = b.loeids = b.loeids || [], d, e, g, f;
            d = T.M;
            e = d.o;
            if (!a.location || a.location.hash != "#google_plle_" + e) {
                e = [d.m, e];
                g = new Wb(Ua, Ua + Va - 1);
                var h;
                (h = 0 >= Va || Va % e.length) || (h = cc.j, h = !(h.l <= g.l && h.j >= g.j));
                h ? e = null : (h = Xb(a), e = null !== h && g.l <= h && g.j >= h ? e[(h - Ua) % e.length] : null)
            }
            (g = e) && b.push(g);
            e = ac;
            g == d.m ? f = e.m : g == d.o ? f = e.o : f = "";
            f && c.push(f);
            d = bc;
            (d = U(a, Wa, d.m, d.o)) && c.push(d);
            d = T.N;
            (g = U(a, Xa, d.m, d.o)) && b.push(g);
            e = $b;
            g == d.m ? f = e.m : g == d.o ? f = e.o : f = "";
            f && c.push(f);
            d = T.D;
            (c = U(a, Ya, d.m, d.o)) && b.push(c);
            Oa.body || (d = T.L, (c = U(a, Za, d.m, d.o)) && b.push(c))
        }
        f = a.google_ad_slot;
        b = a.google_ad_modifications;
        !b || Ub(b.ad_whitelist, f, void 0) ? b = null : (c = b.space_collapsing || "none", b = (f = Ub(b.ad_blacklist, f)) ? {
            F: !0,
            O: f.space_collapsing || c
        } : b.remove_ads_by_default ? {F: !0, O: c} : null);
        if (b && b.F)Rb(a); else if (yb(a), !1 === window.google_enable_async || ic.test(navigator.userAgent) || window.google_container_id ||
            window.google_ad_output && "html" != window.google_ad_output)a.google_loader_used = "sb", a.google_start_time = u, xc(a, a), document.write(wc(a.google_ad_client) + tc()); else {
            sc && (c = a.google_ad_client, b = navigator, a && c && b && (b = a.document, c = hc(c), /[^a-z0-9-]/.test(c) || ((f = A("r20160601")) && (f += "/"), f = ec("pagead2.googlesyndication.com", "/pub-config/" + f + c + ".js"), c = b.createElement("script"), c.src = f, (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(c, b))));
            a.google_unique_id ?
                ++a.google_unique_id : a.google_unique_id = 1;
            c = {};
            null == a.google_ad_client && Pb(a) && (c.google_loader_features_used = 2048);
            Ob(a, c);
            c.google_loader_used = "sa";
            Rb(a);
            b = E("script");
            f = {};
            d = c.google_ad_height;
            f.width = '"' + c.google_ad_width + '"';
            f.height = '"' + d + '"';
            f.frameborder = '"0"';
            f.marginwidth = '"0"';
            f.marginheight = '"0"';
            f.vspace = '"0"';
            f.hspace = '"0"';
            f.allowtransparency = '"true"';
            f.scrolling = '"no"';
            f.allowfullscreen = '"true"';
            f.onload = '"' + gc + '"';
            var k;
            d = a.document;
            e = f.id;
            for (g = 0; !e || d.getElementById(e);)e = "aswift_" +
                g++;
            f.id = e;
            f.name = e;
            e = c.google_ad_width;
            g = c.google_ad_height;
            h = T.D;
            var l = h.m, p = h.o, v = c.google_active_plles = c.google_active_plles || [];
            O(Tb(a), l) || O(Sb(a), l) ? v.push(l) : (O(Tb(a), p) || O(Sb(a), p)) && v.push(p);
            jc = O(Tb(a), h.o);
            h = ["<iframe"];
            for (k in f)f.hasOwnProperty(k) && xb(h, k + "=" + f[k]);
            k = "left:0;position:absolute;top:0;";
            jc && (k = k + "width:" + e + "px;height:" + g + "px;");
            h.push('style="' + k + '"');
            h.push("></iframe>");
            k = f.id;
            e = "border:none;height:" + g + "px;margin:0;padding:0;position:relative;visibility:visible;width:" +
                e + "px;background-color:transparent";
            d.write(['<ins id="', k + "_expand", '" style="display:inline-table;', e, '"><ins id="', k + "_anchor", '" style="display:block;', e, '">', h.join(" "), "</ins></ins>"].join(""));
            k = f.id;
            xc(a, c);
            f = Qb(c);
            var t;
            a:{
                try {
                    if (window.JSON && window.JSON.stringify && window.encodeURIComponent) {
                        var n = encodeURIComponent(window.JSON.stringify(c)), q;
                        if (Jb)q = m.btoa(n); else {
                            d = [];
                            for (g = e = 0; g < n.length; g++) {
                                for (var x = n.charCodeAt(g); 255 < x;)d[e++] = x & 255, x >>= 8;
                                d[e++] = x
                            }
                            if (!R)for (R = {}, n = 0; 65 > n; n++)R[n] =
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n);
                            n = R;
                            x = [];
                            for (e = 0; e < d.length; e += 3) {
                                var w = d[e], M = e + 1 < d.length, ub = M ? d[e + 1] : 0, vb = e + 2 < d.length, wb = vb ? d[e + 2] : 0;
                                g = w >> 2;
                                h = (w & 3) << 4 | ub >> 4;
                                l = (ub & 15) << 2 | wb >> 6;
                                p = wb & 63;
                                vb || (p = 64, M || (l = 64));
                                x.push(n[g], n[h], n[l], n[p])
                            }
                            q = x.join("")
                        }
                        t = q;
                        break a
                    }
                } catch (yc) {
                    G.j("sblob", yc, void 0, void 0)
                }
                t = ""
            }
            q = wc(c.google_ad_client);
            w = (new Date).getTime();
            t = ["<!doctype html><html><body>", q, "<", b, ">", f, "google_show_ads_impl=true;google_unique_id=", zb(a),
                ';google_async_iframe_id="', k, '";google_start_time=', u, ";", t ? 'google_pub_vars = "' + t + '";' : "", "google_bpp=", w > u ? w - u : 1, ";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</", b, ">", tc(), "</body></html>"].join("");
            (a.document.getElementById(k) ? oc : pc)(uc(a, k, t, !0))
        }
    });
}).call(this);
