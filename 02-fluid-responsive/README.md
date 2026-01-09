# Fluid & Responsive Web Layouts

**DMIT2033 - Web Design & Usability II, Lesson 02**

This demo introduces several ideas that we will rely on throughout this course. Some of them may feel subtle at first, especially if you are used to writing CSS “as you go” rather than as a system.


## What Is a Fluid Layout?

A **fluid layout** is a layout that adapts smoothly as the viewport size changes, rather than jumping between a few fixed widths.

In a fluid layout:

* widths are often based on percentages or flexible units
* content grows and shrinks continuously with the viewport
* the layout responds to available space, not specific devices


## What Is a Baseline Typographic System?

A **baseline typographic system** is a way of organising text and spacing around a shared underlying rhythm.

It starts with:

* a base unit (often 8px or 4px)
* spacing and sizing values derived from that unit
* consistent use of those values across the design

In practice, this means:

* margins and padding are chosen from a small set of spacing values
* typography scales in predictable steps
* the layout feels visually consistent, even when elements differ in size

But with fluid layouts, the baseline acts as a **guide**, not a strict grid. Text rendering, font metrics, and accessibility settings mean that perfect alignment is neither realistic nor desirable.

> **In a fluid layout, the baseline grid is a guide, not a ruler.**

Today, we'll be shifting away from the mathematical perfection of DMIT1529 - Web Design & Usability I and focus on a variable-based typographic system that relies on tokens.

---

## What Is a 'Token'?

A **token** is a named value (i.e., a variable) that represents a design decision.

Instead of writing:

```css
padding: 24px;
margin-bottom: 16px;
```

We write:

```css
padding: var(--s-3);
margin-bottom: var(--s-2);
```

Tokens make spacing consistent across the site and make global changes easier. This means that if we decide later that our spacing feels too tight or too loose, we can adjust the token definitions instead of hunting through dozens of rules and hundreds of lines of code.

---

## Baseline Tokens

In this demo, spacing tokens are based on an **8px baseline**:

```css
--base: 0.5rem;
--s-1: calc(var(--base) * 1);
--s-2: calc(var(--base) * 2);
--s-3: calc(var(--base) * 3);
```

These tokens are *multiples* of the baseline. They give us a shared rhythm and visual consistency, even when we aren't following a precise vertical grid.

---

## Nested CSS

Nested CSS is an alternative syntax, now broadly supported by all major modern browsers. It groups related rules together, makes it clearer where styles apply, and reduces repetition.

```css
.layout {
  display: flex;

  h3 {
    font-size: 1.15rem;
  }
}
```

This is functionally equivalent to (and has the same level of calculated specificity as):

```css
.layout {
    display: flex;
}

.layout h3 {
  font-size: 1.15rem;
}
```

However, nested CSS is easier to read and maintain, especially in larger projects.