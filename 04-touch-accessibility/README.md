# 1) Use the right semantics (no “app-style” ARIA menus)

* A top-level site nav that expands/collapses is best built as a **button** that **shows/hides a list of links**.
* **Do not** use `role="menu"` / `role="menuitem"` for ordinary site navigation; use `<nav>` + list of links, and a button that toggles it (disclosure pattern). ([W3C][1])

**Minimum ARIA for the toggle button**

```html
<button class="nav-toggle"
        aria-controls="primary-nav"
        aria-expanded="false">
  <span class="visually-hidden">Menu</span>
  <!-- icon svg here, aria-hidden="true" -->
</button>

<nav id="primary-nav" hidden> … links … </nav>
```

* `aria-expanded="true|false"` reflects state; `aria-controls` points at the menu container. The container can be toggled with `hidden`. ([W3C][1])

# 2) Target size & spacing (touch accuracy)

* **WCAG 2.2 – Target Size (Minimum)**: Each actionable target is **at least 24×24 CSS px**, or—if smaller—has enough **spacing** around it to avoid accidental taps (with specific exceptions for inline text, etc.). For comfort, go larger than the minimum. ([W3C][2])

# 3) Single-pointer and “no down-event” activation (touch safety)

* **Pointer Gestures (2.5.1)**: any feature that works with path-based or multi-touch gestures must also work with a simple **single tap**. Don’t require swipes to open the menu. ([W3C][3])
* **Pointer Cancellation (2.5.2)**: avoid triggering actions on **touchstart/mousedown**. Activate on **click/up-event**, and allow users to abort before completing the action. ([W3C][4])
* **Dragging Movements (2.5.7)**: if a drawer can be dragged, also provide a **tap/click** control to open/close. ([W3C][5])

# 4) Keyboard operability, focus & escape hatches

* **Keyboard (2.1.1)**: the button and all menu links must be operable with the keyboard (Tab, Enter/Space). ([W3C][6])
* **Focus not obscured (2.4.11 AA)**: when the menu opens, ensure the focused item isn’t hidden behind overlays/headers; if it would be, adjust scrolling/layout. ([W3C][7])
* **Focus appearance (2.4.13 AAA, but good practice)**: provide a clearly visible focus indicator with sufficient size/contrast. ([W3C][8])
* Add **Esc to close** and return focus to the toggle button; this is a recommended pattern in the WAI APG disclosure examples. ([W3C][1])

# 5) Labelling & voice control

* **Label in Name (2.5.3)**: the button’s *accessible name* should include the visible label (e.g., “Menu”). If you use only an icon, add a visually-hidden “Menu” so voice users can say “activate Menu”. ([W3C][9])

# 6) Contrast & affordance

* **Non-text contrast (1.4.11)**: the button boundary/icon and its **focused/active** states need **≥3:1** contrast against adjacent colours. ([W3C][10])

# 7) Zoom & reflow (mobile usability)

* **Resize Text (1.4.4)**: content must remain usable at **200%** zoom; don’t disable zoom with `user-scalable=no` or restrictive `maximum-scale`. ([W3C][11])

---

## Tiny implementation notes

* **Hit area:** make the toggle at least `min-width/min-height: 40–48px` and add spacing from adjacent controls. (WCAG min is 24×24; larger is friendlier.) ([W3C][2])
* **Activation:** listen to **`click`** (fires on release) rather than `touchstart`. This aligns with Pointer Cancellation. ([W3C][4])
* **Structure:** keep menu links as plain `<a>` elements inside a list; don’t recast them as ARIA menu items unless you truly implement desktop-style menus. ([W3C][1])

---

## Quick checklist for a hamburger menu

* [ ] Button uses `<button>` with **`aria-expanded`** + **`aria-controls`**; visible label or hidden “Menu”. ([W3C][1])
* [ ] Target size **≥ 24×24 CSS px** (prefer bigger) and spaced from neighbours. ([W3C][2])
* [ ] Works with **tap, click, and keyboard** (Enter/Space); **Esc** closes and returns focus. ([W3C][6])
* [ ] Activation on **up/click**, not on **down**; easy to cancel. ([W3C][4])
* [ ] Focused elements are **visible** and the focus indicator is **clearly seen**. ([W3C][7])
* [ ] **Zoom** isn’t disabled; layout holds at enlarged text. ([W3C][11])


[1]: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/ " Example Disclosure Navigation Menu | APG | WAI | W3C"
[2]: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum?utm_source=chatgpt.com "Understanding SC 2.5.8: Target Size (Minimum) (Level AA)"
[3]: https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html?utm_source=chatgpt.com "Understanding Success Criterion 2.5.1: Pointer Gestures"
[4]: https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html?utm_source=chatgpt.com "Understanding Success Criterion 2.5.2: Pointer Cancellation"
[5]: https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements?utm_source=chatgpt.com "Understanding Success Criterion 2.5.7: Dragging Movements"
[6]: https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html?utm_source=chatgpt.com "Understanding Success Criterion 2.1.1: Keyboard | WAI"
[7]: https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html?utm_source=chatgpt.com "Understanding SC 2.4.11: Focus Not Obscured (Minimum) ..."
[8]: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance?utm_source=chatgpt.com "Understanding Success Criterion 2.4.13: Focus Appearance"
[9]: https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html?utm_source=chatgpt.com "Understanding Success Criterion 2.5.3: Label in Name | WAI"
[10]: https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html?utm_source=chatgpt.com "Understanding Success Criterion 1.4.11: Non-text Contrast - W3C"
[11]: https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html?utm_source=chatgpt.com "Understanding Success Criterion 1.4.4: Resize Text | WAI"
