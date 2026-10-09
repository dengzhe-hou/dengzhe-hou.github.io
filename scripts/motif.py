"""Generate the AI <-> Brain motif (wide + compact) as inline-SVG includes.

Run from the repository root:
      python3 scripts/motif.py   -> rewrites _includes/motif-wide.svg and
                                    _includes/motif-compact.svg
The homepage (_includes/research-themes.html) includes both; CSS shows the
wide one above 720px and the compact one below. Styling lives in
_includes/styles/home.css (.motif, .m-*).

Structure of each SVG
  outer <svg>  no viewBox, so 1 user unit = 1 CSS px. Holds the two direction
               labels as <text> placed with % coordinates, so they stay a
               constant 12px while the drawing scales.
  inner <svg>  viewBox geometry (network, arcs, EEG cap). Its aspect ratio is
               the same as the outer box (set in CSS), so % in the outer box
               map 1:1 onto viewBox fractions.
All colours come from CSS custom properties; nothing is hard-coded.
"""
import math
import pathlib

HERE = pathlib.Path(__file__).resolve().parent.parent


def f(v):
    return f"{v:.1f}".rstrip("0").rstrip(".")


def motif(name, W, H, net_x, counts, spacing, node_r, head_cx, head_r, el_r,
          bridge, arc_lift, arrow_len, hilite_path, label_gap, caps):
    cy = H / 2
    g = []
    a = g.append

    # ---- AI: a small feed-forward network ---------------------------------
    layers = []
    for x, n in zip(net_x, counts):
        layers.append([(x, cy + (i - (n - 1) / 2) * spacing) for i in range(n)])
    a('<g class="m-mesh">')
    for L1, L2 in zip(layers, layers[1:]):
        for (x1, y1) in L1:
            for (x2, y2) in L2:
                a(f'<line x1="{f(x1)}" y1="{f(y1)}" x2="{f(x2)}" y2="{f(y2)}"/>')
    a('</g>')
    pts = [layers[i][j] for i, j in enumerate(hilite_path)]
    a('<polyline class="m-path" points="' + " ".join(f"{f(x)},{f(y)}" for x, y in pts) + '"/>')
    a('<g class="m-nodes">')
    for li, L in enumerate(layers):
        for ni, (x, y) in enumerate(L):
            cls = ' class="on"' if hilite_path[li] == ni else ""
            a(f'<circle{cls} cx="{f(x)}" cy="{f(y)}" r="{f(node_r)}"/>')
    a('</g>')

    # ---- Brain: top view of a 10-20 EEG montage ----------------------------
    hx, R = head_cx, head_r
    re_ = R * 0.8
    a('<g class="m-head">')
    a(f'<circle cx="{f(hx)}" cy="{f(cy)}" r="{f(R)}"/>')
    nose = R * 0.11
    a(f'<path d="M{f(hx - nose)} {f(cy - R + 0.6)}L{f(hx)} {f(cy - R - nose * 1.25)}L{f(hx + nose)} {f(cy - R + 0.6)}"/>')
    ear_h, ear_w = R * 0.16, R * 0.07
    a(f'<path d="M{f(hx - R)} {f(cy - ear_h)}A{f(ear_w)} {f(ear_h)} 0 0 0 {f(hx - R)} {f(cy + ear_h)}"/>')
    a(f'<path d="M{f(hx + R)} {f(cy - ear_h)}A{f(ear_w)} {f(ear_h)} 0 0 1 {f(hx + R)} {f(cy + ear_h)}"/>')
    a('</g>')

    def ring(deg):
        t = math.radians(deg)
        return hx + re_ * math.sin(t), cy - re_ * math.cos(t)

    f7, f8, t5, t6 = ring(306), ring(54), ring(234), ring(126)
    fz_y, pz_y = cy - re_ * 0.5, cy + re_ * 0.5
    cfy = 2 * fz_y - (f7[1] + f8[1]) / 2
    cpy = 2 * pz_y - (t5[1] + t6[1]) / 2
    a('<g class="m-guides">')
    a(f'<circle cx="{f(hx)}" cy="{f(cy)}" r="{f(re_)}"/>')
    a(f'<line x1="{f(hx)}" y1="{f(cy - R)}" x2="{f(hx)}" y2="{f(cy + R)}"/>')
    a(f'<line x1="{f(hx - R)}" y1="{f(cy)}" x2="{f(hx + R)}" y2="{f(cy)}"/>')
    a(f'<path d="M{f(f7[0])} {f(f7[1])}Q{f(hx)} {f(cfy)} {f(f8[0])} {f(f8[1])}"/>')
    a(f'<path d="M{f(t5[0])} {f(t5[1])}Q{f(hx)} {f(cpy)} {f(t6[0])} {f(t6[1])}"/>')
    a('</g>')

    def qpt(p0, c, p2, t):
        return ((1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * c[0] + t * t * p2[0],
                (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * c[1] + t * t * p2[1])

    el = {k: ring(v) for k, v in {"Fp2": 18, "F8": 54, "T4": 90, "T6": 126, "O2": 162,
                                   "O1": 198, "T5": 234, "T3": 270, "F7": 306, "Fp1": 342}.items()}
    el["F3"] = qpt(f7, (hx, cfy), f8, 0.27)
    el["F4"] = qpt(f7, (hx, cfy), f8, 0.73)
    el["P3"] = qpt(t5, (hx, cpy), t6, 0.27)
    el["P4"] = qpt(t5, (hx, cpy), t6, 0.73)
    el.update({"Fz": (hx, fz_y), "Cz": (hx, cy), "Pz": (hx, pz_y),
               "C3": (hx - re_ * 0.5, cy), "C4": (hx + re_ * 0.5, cy)})
    a('<g class="m-el">')
    for k, (x, y) in el.items():
        cls = ' class="on"' if k == "Fz" else ""
        a(f'<circle{cls} cx="{f(x)}" cy="{f(y)}" r="{f(el_r)}"/>')
    a('</g>')

    # ---- The two directions: a loop of two arcs -----------------------------
    x0, x1, dy = bridge
    span = x1 - x0

    def cubic(p):
        return (f'M{f(p[0][0])} {f(p[0][1])}C{f(p[1][0])} {f(p[1][1])} '
                f'{f(p[2][0])} {f(p[2][1])} {f(p[3][0])} {f(p[3][1])}')

    top = [(x0, cy - dy), (x0 + span * .25, cy - dy - arc_lift), (x1 - span * .25, cy - dy - arc_lift), (x1, cy - dy)]
    bot = [(x1, cy + dy), (x1 - span * .25, cy + dy + arc_lift), (x0 + span * .25, cy + dy + arc_lift), (x0, cy + dy)]

    def head_at(p, c):
        ang = math.atan2(p[1] - c[1], p[0] - c[0])
        s = [(p[0] + arrow_len * math.cos(ang + d), p[1] + arrow_len * math.sin(ang + d))
             for d in (math.radians(150), math.radians(-150))]
        return f'M{f(s[0][0])} {f(s[0][1])}L{f(p[0])} {f(p[1])}L{f(s[1][0])} {f(s[1][1])}'

    a('<g class="m-arc">')
    a(f'<path d="{cubic(top)}"/><path d="{head_at(top[3], top[2])}"/>')
    a(f'<path d="{cubic(bot)}"/><path d="{head_at(bot[3], bot[2])}"/>')
    a('</g>')
    # signal dots: zero-length dashes with round caps, moved along the arcs by
    # CSS (only once the figure is in view, never under reduced motion)
    a('<g class="m-signal">')
    a(f'<path class="s1" pathLength="100" d="{cubic(top)}"/>')
    a(f'<path class="s2" pathLength="100" d="{cubic(bot)}"/>')
    a('</g>')

    apex_top = (cy - dy - 0.75 * arc_lift) / H * 100
    apex_bot = (cy + dy + 0.75 * arc_lift) / H * 100
    mid = (x0 + x1) / 2 / W * 100
    inner = (f'<svg class="m-draw" viewBox="0 0 {W} {H}" width="100%" height="100%" '
             f'preserveAspectRatio="xMidYMid meet">' + "".join(g) + '</svg>')
    labels = (
        f'<text class="m-lab" x="{mid:.2f}%" y="{apex_top:.2f}%" dy="-{label_gap}">AI4BRAIN →</text>'
        f'<text class="m-lab" x="{mid:.2f}%" y="{apex_bot:.2f}%" dy="{label_gap + 9}">← BRAIN4AI</text>'
    )
    # captions sit below the box (the outer svg has overflow:visible and the
    # figure reserves the band with margin-bottom)
    net_c, head_c = (net_x[0] + net_x[-1]) / 2 / W * 100, hx / W * 100
    if caps == "centre":
        spots = [(f"{net_c:.2f}%", "middle"), (f"{head_c:.2f}%", "middle")]
    else:  # flush to the content edges
        spots = [("0", "start"), ("100%", "end")]
    texts = [("AI", ["language &amp; vision-language models"]),
             ("BRAIN", ["EEG \u00b7 fMRI \u00b7 eye tracking"])]
    if caps != "centre":
        texts = [("AI", ["language &amp;", "vision-language models"]),
                 ("BRAIN", ["EEG \u00b7 fMRI \u00b7", "eye tracking"])]
    cap = []
    for (x, anchor), (head, lines) in zip(spots, texts):
        t = f'<text class="m-cap" x="{x}" y="100%" text-anchor="{anchor}"><tspan class="m-cap-h" x="{x}" dy="20">{head}</tspan>'
        for ln in lines:
            t += f'<tspan x="{x}" dy="18">{ln}</tspan>'
        cap.append(t + '</text>')
    svg = (f'<svg class="motif-svg" aria-hidden="true" focusable="false">'
           + inner + labels + "".join(cap) + '</svg>')
    geo = dict(net=(net_x[0] + net_x[-1]) / 2 / W * 100, head=hx / W * 100, mid=mid,
               clear_left=x0 - net_x[-1] - node_r, clear_right=(hx - R - ear_w * 0) - x1)
    return svg, geo


WIDE = dict(
    name="wide", W=1280, H=268, net_x=[150, 252, 354, 456], counts=[5, 8, 8, 5], spacing=27,
    node_r=4.5, head_cx=968, head_r=112, el_r=5.5, bridge=(486, 824, 24), arc_lift=46,
    arrow_len=9, hilite_path=[3, 4, 2, 1], label_gap=14, caps="centre",
)
COMPACT = dict(
    name="compact", W=360, H=176, net_x=[22, 54, 86, 118], counts=[3, 5, 5, 3], spacing=24,
    node_r=3.6, head_cx=284, head_r=58, el_r=3.6, bridge=(142, 202, 22), arc_lift=22,
    arrow_len=6, hilite_path=[1, 3, 1, 0], label_gap=10, caps="flush",
)

if __name__ == "__main__":
    for cfg in (WIDE, COMPACT):
        svg, geo = motif(**cfg)
        (HERE / f"_includes/motif-{cfg['name']}.svg").write_text(svg + "\n")
        print(cfg["name"], {k: round(v, 2) for k, v in geo.items()}, len(svg), "bytes")
