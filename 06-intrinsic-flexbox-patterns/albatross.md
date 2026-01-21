# The “Holy Albatross”

The “Holy Albatross” layout is a flexbox trick for making columns that behave like this:

1. When the container is wide enough, items sit next to each other and share the row.

2. When the container gets too narrow (below a chosen “threshold”), the items stop trying to be columns and instead stack as full-width rows.

The crux of it all is this line:

```CSS
flex-basis: calc((600px - 100%) * 999);
```

... which looks as weird as all get out. So, let's break it down.

---

## Breaking Down the Code

```CSS
.albatross-container {
    display: flex;
    flex-wrap: wrap;

    .item {
        flex-basis: calc((600px - 100%) * 999);
        flex-grow: 1;
        min-inline-size: min(100%, 300px);
        max-inline-size: 100%;
    }
}
```

### `flex-basis` Revisited

First, what does flex-basis actually do again?

In a flex row, each item has a 'starting size' before `flex-grow` distributes leftover space. That starting size is `flex-basis`. After that, `flex-grow: 1` says 'if there's any remaining space, share it out equally'.

So the whole plan is: give flexbox a starting size that makes items either behave like columns or behave like stacked rows depending on container width.

### The Albatross Formula

Now, `calc()` in plain terms.

The `calc()` function lets you do maths with CSS values (usually lengths). Inside `calc()`, you can mix units as long as the result makes sense. The browser will always convert everything to pixels so that there is a common unit (much like we do when solving a physics equation).

So, what's our formula? 

> `flex-bais: calc( (thresholdWidth − containerWidth) * exaggerationFactor);`

---

### Mapping the Variables

Let’s plug in some real values as an example.

```css
flex-basis: calc((600px - 100%) * 999);
```

• `thresholdWidth` → `600px`: This is the point at which you want the layout to change behaviour. Above this width, items should behave like columns. Below this width, items should stack.

• `containerWidth` → `100%`: In this context, `100%` means “the full width of the flex container”. So, this value changes dynamically as the container resizes.

• `exaggerationFactor` → `999`: This is just a deliberately large number. Its job is not precision, but force. It pushes the result far enough in one direction that flexbox cannot “half-decide”.

So what we are really saying is:

> “Take the difference between my threshold and the current container width, then blow it up so the browser is forced into one clear behaviour.”

---

### What the Maths Is Actually Testing

At runtime, the browser effectively evaluates this:

```TXT
600px − current container width
```

That subtraction flips sign depending on container size.

If the container is **wider** than 600px
→ the result is **negative**

If the container is **narrower** than 600px
→ the result is **positive**

That sign change is the entire trick.

The multiplication by `999` just makes the result *extreme*.

---

### What Flexbox Does With the Result

#### Case 1: Container wider than 600px

Example: container = 800px

```text
(600 − 800) × 999 = −199,800px
```

That is a huge negative flex-basis.

Browsers do not allow negative sizes in layout, so this gets clamped toward zero. The items effectively start at “tiny”.

Then `flex-grow: 1` kicks in and distributes the available space evenly across the row.

Result:
Items sit side by side and behave like columns.

---

#### Case 2: Container narrower than 600px

Example: container = 500px

```text
(600 − 500) × 999 = 99,900px
```

Now each item’s starting size is absurdly large.

Flexbox cannot fit multiple items of that size on one row, so because `flex-wrap: wrap` is enabled, each item is forced onto its own line.

Result:
Items stack vertically and appear full-width.

---

### Why This Is Not Really About Sizes

Despite appearances, this layout is not about calculating a “correct” width.

**This layout trick is about abusing maths to smuggle a conditional into CSS.**

You can think of it like this:

- If container > threshold → pretend items are tiny

- If container < threshold → pretend items are enormous

Flexbox then does the rest automatically.

The multiplier (`999`) just ensures the browser cannot land in an awkward middle state.

---

### The Role of the Constraints

```css
min-inline-size: min(100%, 300px);
max-inline-size: 100%;
```

These are guard rails. They prevent columns from becoming unusably narrow when many items share a wide row, and prevent stacked items from overflowing the container.

They are not part of the “switch”; they simply keep the layout humane after the switch happens.

---

## tl;dr

The Holy Albatross works by lying to flexbox about item sizes so aggressively that it has no choice but to either form columns or stack items, depending on container width.

This is a boolean test (is this a positive or negative value?), disguised as arithmetic.

---

## Sources

1. https://heydonworks.com/article/the-flexbox-holy-albatross/