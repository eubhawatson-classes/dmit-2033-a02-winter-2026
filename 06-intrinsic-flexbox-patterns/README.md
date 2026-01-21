# Intrinsic Web Design

Intrinsic web design shifts us away from page-first layouts and towards component-first thinking.

Instead of designing a full page at a few fixed breakpoints and forcing everything to fit those decisions, we design individual components that understand how to behave based on the space they are given. Each part of the interface is responsible for itself, and the page becomes a composition of these self-managing pieces.

This does not replace responsive design, but complements it.

---

## The Core Concepts

### Let elements size themselves.

Rather than hard-coding widths and heights, we favour sizing methods that allow the browser to make intelligent decisions. Units and functions like `auto`, `%`, `fr`, `min()`, `max()`, and `minmax()` let layouts stretch and shrink naturally instead of snapping between rigid values.

The goal is not precision; it is flexibility.


### Components respond to their container, not the viewport.

Traditional responsive design often asks: *“How wide is the screen?”*

Intrinsic design instead asks: *“How much space does this component have right now?”*

This makes components more reusable and predictable. The same card, navigation, or content block can live in a sidebar, a main column, or a full-width layout without needing special-case rules for each context. Container queries support this idea directly, but even with flexbox alone, we can already design components that adapt locally rather than globally.


### Typography and spacing should scale smoothly.

Rather than jumping between sizes at breakpoints, intrinsic layouts favour fluid changes. Text and spacing grow and shrink gradually as space changes.

The `clamp()` function is a common tool for this. It lets us define a minimum size, a fluid middle value, and a maximum size, all in one line.

This gives us layouts that feel more continuous and less “stepped” as screen size changes.


### Breakpoints still exist, but they earn their place.

Intrinsic design does not eliminate media queries. It reduces their importance.

Page-wide breakpoints are still useful when a layout truly needs to change structure. However, instead of relying on many rigid breakpoints to manage everything, we introduce them deliberately and sparingly, only when a component or section cannot reasonably adapt on its own.


## A Helpful Mental Shift

If responsive design is about adapting *pages* to screens, intrinsic design is about telling *components* how to behave, wherever they end up (and whatever they have inside of them).