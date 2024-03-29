function e(e, t) {
    return Object.keys(t).forEach((function (n) {
        "default" === n || "__esModule" === n || e.hasOwnProperty(n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: function () {
                return t[n]
            }
        })
    }
    )),
        e
}

function t(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}

const n = "click", r = "button";
let o = {}, a = {};
t(a, "clicks", (function () {
    return c
}
));

const c = {
    current: 0,
    total: 0
};

// Returns cursors in table
let s = {};
t(s, "cursor", (function () {
    return l
}
));

// Cursor upgrades
const l = {
    message: "Upgraded cursor.",
    owned: 1,
    cost: {
        base: 100,
        next: 100,
        rate: 1.12
    },
    output: {
        base: 15,
        next: 15,
        current: 15
    }
};

// Worker upgrades
let u = {};
t(u, "workers", (function () {
    return i
}
));

const i = {
    worker1: {
        label: "Worker 1",
        message: "Purchased Worker 1.",
        owned: 0,
        delay: 3,
        cost: {
            base: 30,
            next: 30,
            rate: 1.05
        },
        output: {
            base: 5,
            next: 5,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker2: {
        label: "Worker 2",
        message: "Purchased Worker 2.",
        owned: 0,
        delay: 8,
        cost: {
            base: 100,
            next: 100,
            rate: 1.03
        },
        output: {
            base: 10,
            next: 10,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker3: {
        label: "Worker 3",
        message: "Purchased Worker 3.",
        owned: 0,
        delay: 15,
        cost: {
            base: 1100,
            next: 1100,
            rate: 1.04
        },
        output: {
            base: 8,
            next: 8,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker4: {
        label: "Worker 4",
        message: "Purchased Worker 4.",
        owned: 0,
        delay: 20,
        cost: {
            base: 12e3,
            next: 12e3,
            rate: 1.04
        },
        output: {
            base: 47,
            next: 47,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker5: {
        label: "Worker 5",
        message: "Purchased Worker 5.",
        owned: 0,
        delay: 27,
        cost: {
            base: 13e4,
            next: 13e4,
            rate: 1.05
        },
        output: {
            base: 260,
            next: 260,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker6: {
        label: "Worker 6",
        message: "Purchased Worker 6.",
        owned: 0,
        delay: 33,
        cost: {
            base: 14e5,
            next: 14e5,
            rate: 1.05
        },
        output: {
            base: 1400,
            next: 1400,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker7: {
        label: "Worker 7",
        message: "Purchased Worker 7.",
        owned: 0,
        delay: 38,
        cost: {
            base: 2e7,
            next: 2e7,
            rate: 1.06
        },
        output: {
            base: 7800,
            next: 7800,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker8: {
        label: "Worker 8",
        message: "Purchased Worker 8.",
        owned: 0,
        delay: 45,
        cost: {
            base: 33e7,
            next: 33e7,
            rate: 1.08
        },
        output: {
            base: 44e3,
            next: 44e3,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker9: {
        label: "Worker 9",
        message: "Purchased Worker 9.",
        owned: 0,
        delay: 45,
        cost: {
            base: 51e8,
            next: 51e8,
            rate: 1.11
        },
        output: {
            base: 26e4,
            next: 26e4,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker10: {
        label: "Worker 10",
        message: "Purchased Worker 10.",
        owned: 0,
        delay: 50,
        cost: {
            base: 75e9,
            next: 75e9,
            rate: 1.12
        },
        output: {
            base: 16e5,
            next: 16e5,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker11: {
        label: "Worker 11",
        message: "Purchased Worker 11.",
        owned: 0,
        delay: 55,
        cost: {
            base: 1e12,
            next: 1e12,
            rate: 1.12
        },
        output: {
            base: 1e7,
            next: 1e7,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker12: {
        label: "Worker 12",
        message: "Purchased Worker 12.",
        owned: 0,
        delay: 60,
        cost: {
            base: 14e12,
            next: 14e12,
            rate: 1.13
        },
        output: {
            base: 65e6,
            next: 65e6,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker13: {
        label: "Worker 13",
        message: "Purchased Worker 13.",
        owned: 0,
        delay: 60,
        cost: {
            base: 17e13,
            next: 17e13,
            rate: 1.14
        },
        output: {
            base: 43e7,
            next: 43e7,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker14: {
        label: "Worker 14",
        message: "Purchased Worker 14.",
        owned: 0,
        delay: 70,
        cost: {
            base: 21e14,
            next: 21e14,
            rate: 1.15
        },
        output: {
            base: 29e8,
            next: 29e8,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker15: {
        label: "Worker 15",
        message: "Purchased Worker 15.",
        owned: 0,
        delay: 75,
        cost: {
            base: 26e15,
            next: 26e15,
            rate: 1.15
        },
        output: {
            base: 21e9,
            next: 21e9,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    },
    worker16: {
        label: "Worker 16",
        message: "Purchased Worker 16.",
        owned: 0,
        delay: 90,
        cost: {
            base: 31e16,
            next: 31e16,
            rate: 1.17
        },
        output: {
            base: 15e10,
            next: 15e10,
            current: 0
        },
        interval: {
            callback() { },
            set: !1
        }
    }
};

// Sends messages at the top of screen
let d = {};

t(d, "messages", (function () {
    return b
}
));

const b = {
    1: "The clicking has commenced...",
    10: "The button has been clicked ten times.",
    100: "The button has been clicked one hundred times.",
    1e3: "The button has been clicked one thousand times.",
    1e4: "The button has been clicked ten thousand times.",
    1e5: "The button has been clicked one hundred thousand times.",
    1e6: "The button has been clicked one million times.",
    1e7: "The button has been clicked ten million times.",
    1e8: "The button has been clicked one hundred million times.",
    1e9: "The button has been clicked one billion times.",
    1e10: "The button has been clicked ten billion times.",
    1e12: "The button has been clicked one hundred billion times.",
    1e13: "The button has been clicked one trillion times.",
    1e14: "The button has been clicked ten trillion times.",
    1e15: "The button has been clicked one hundred trillion times.",
    1e16: "The button has been clicked one quadrillion times.",
    1e17: "The button has been clicked ten quadrillion times.",
    1e18: "The button has been clicked one hundred quadrillion times.",
    1e19: "The button has been clicked one quitillion times.",
    1e20: "The button has been clicked ten quitillion times.",
    1e21: "The button has been clicked one hundred quitillion times.",
    1e22: "The button has been clicked one sextillion times."
};
//

// Vital to show all information
e(o, a),
    e(o, s),
    e(o, u),
    e(o, d);
//

// finds all elements by ID, and does math
const g = document.getElementById("cursor"), m = {
    button: document.getElementById("button"),
    counter: document.getElementById("counter"),
    cursor: g,
    cursorButton: g.querySelector(r),
    message: document.getElementById("message"),
    store: document.getElementById("store")
},

    x = (e, t, n) => Math.floor(e * Math.pow(t, n));

function k(e) {
    const t = m[e];
    return t || (m[e] = document.getElementById(e))
}
//

// Converts Sushi Roll > Sushi Rolls if more than 1 && converts second > seconds if more than 1
const y = (e, t) => `${e.toLocaleString()} ${1 === e ? "Sushi Roll" : "Sushi Rolls"} per ${t.toLocaleString()} ${1 === t ? "second" : "seconds"}`;
//

// Displays the Sushi Roll count
function p() {
    m.counter.innerText = c.current.toLocaleString()
}
//

// Shows information on table for (Amount Bought, Cost, Current output, Next output)
function T() {
    const e = m.cursor
        , { cursor: t } = o;
    e.querySelector(".owned").innerText = (t.owned - 1).toLocaleString(),
        e.querySelector(".cost").innerText = t.cost.next.toLocaleString(),
        e.querySelector(".output-current").innerText = `${t.output.current.toLocaleString()} Sushi Rolls per click`,
        e.querySelector(".output-next").innerText = `${t.output.next.toLocaleString()} Sushi Rolls per click`
}

function w(e) {
    const t = i[e]
        , n = k(e);
    n.querySelector(".owned").innerText = t.owned.toLocaleString(),
        n.querySelector(".cost").innerText = t.cost.next.toLocaleString(),
        n.querySelector(".output-current").innerText = y(t.output.current, t.delay),
        n.querySelector(".output-next").innerText = y(t.output.next, t.delay)
}
//

// Sends the message at the top of the screen
function f(e = "") {
    const { total: t } = c;
    let n;
    if (e)
        n = e;
    else if (b[t])
        n = b[t],
            delete b[t];
    else
        for (const e in b) {
            const r = Number(e);
            t >= r && (n = b[r],
                delete b[r]);
            break
        }
    n && (n = n.toLocaleString(),
        n !== m.message.innerText && (m.message.innerText = n))
}
//

// Deals with disabling/enabling button
function G(e, t = !1) {
    const { clicks: n } = o;
    n.current += e,
        t || (n.total += e,
            f()),
        p(),
        m.cursorButton.disabled = n.current < o.cursor.cost.next;
    const { workers: a } = o;
    Object.keys(a).forEach((e => {
        k(e).querySelector(r).disabled = n.current < a[e].cost.next
    }
    ))
}
//

// Handles buying upgrades
function v(e) {
    G(-e, !0)
}

// Displays all workers on the screen in table form
Object.keys(i).forEach((e => {
    const t = i[e]
        , n = m.cursor.cloneNode(!0);
    n.id = e;
    const o = n.querySelector(r);
    o.title = t.label,
        o.innerText = t.label,
        m.store.appendChild(n)
}
)),
    //
    p(),
    T(),
    Object.keys(i).forEach((e => {
        w(e)
    }
    )),

    // sets current output on cursor
    m.button.addEventListener(n, (() => {
        G(o.cursor.output.current)
    }
    )),
    //

    // sets cost next price 
    m.cursorButton.addEventListener(n, (() => {
        if (o.clicks.current >= o.cursor.cost.next) {
            const { cursor: e } = o;
            v(e.cost.next),
                function () {
                    const { cursor: e } = o
                        , { cost: t, output: n } = e
                        , r = ++e.owned;
                    t.next = x(t.base, t.rate, r - 1),
                        n.current = n.next,
                        n.next = Math.round(n.base * r),
                        T()
                }(),
                f(e.message)
        }
    }
    )),
    //

    // sets worker next cost
    Object.keys(o.workers).forEach((e => {
        const t = o.workers[e];
        k(e).querySelector(r).addEventListener(n, (() => {
            o.clicks.current >= t.cost.next && (v(t.cost.next),
                function (e) {
                    const t = o.workers[e]
                        , { cost: n, output: r } = t
                        , a = ++t.owned;
                    n.next = x(n.base, n.rate, a),
                        r.current = r.next,
                        r.next = Math.round(r.base * (a + 1)),
                        w(e)
                }(e),
                t.interval.set ? t.interval.callback = () => {
                    G(t.output.current)
                }
                    : (t.interval.set = !0,
                        t.interval.callback = () => {
                            G(t.output.current)
                        }
                        ,
                        setInterval(t.interval.callback, 1e3 * t.delay)),
                t.message && f(t.message))
        }
        ))
    }
    ));
//