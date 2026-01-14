## SVG Minification, `<title>`, and `<use>`

### SVG minification

SVG files are text files, which means they often contain a lot of unnecessary information when exported from design tools (Figma, Illustrator, etc.): metadata, comments, editor-specific attributes, and excessive precision in numbers. SVG minification removes that excess while preserving the visual result.

Minifying SVGs reduces file size, improves load performance, and makes inline SVGs cheaper to include directly in HTML. This is especially important when SVGs are used repeatedly for interface icons, where even small savings add up across a page.

In practice, SVGs should always be run through an optimiser (such as SVGO) before being committed to a project. The goal is not readability for humans, but efficiency for the browser.

---

### `<title>` inside SVGs (Accessibility)

SVGs do not use the `alt` attribute in the same way raster images do. When an SVG is inline (embedded directly in the HTML), accessibility is handled using SVG elements instead.

The `<title>` element provides an accessible name for the SVG. Screen readers can announce this text, and browsers may expose it as a tooltip in some contexts. This makes `<title>` the correct place to describe what an SVG represents, particularly when the SVG conveys meaning rather than decoration.

---

### `<use>` and SVG symbols

The `<use>` element allows you to reference an SVG symbol defined elsewhere, rather than duplicating SVG markup repeatedly.

By defining icons as `<symbol>` elements and referencing them with `<use>`, we gain several benefits: smaller HTML output, consistent icons everywhere, and easier maintenance. Updating the icon in one place updates it everywhere it is used.

```html
<svg style="display:none">
  <symbol id="icon-camera" viewBox="0 0 24 24">
    <title>Camera</title>
    <path d="..."></path>
  </symbol>
</svg>

<svg role="img">
  <title>Camera</title>
  <use href="#icon-camera"></use>
</svg>
```

This pattern works particularly well for UI icons, where the same shapes appear repeatedly across navigation, buttons, and controls.

---

## AVIF Images: What and Why

### What AVIF is

AVIF is a modern image format based on the AV1 video codec. It supports high-quality compression, transparency, and wide colour gamuts, making it suitable for both photographs and complex imagery.

Compared to older formats, AVIF can achieve the same visual quality at significantly smaller file sizes.

---

### Why we prioritise AVIF over WebP

WebP was a major improvement over JPEG and PNG, and it is still widely supported. AVIF goes further. For the same perceived quality, AVIF files are usually smaller than WebP files, sometimes dramatically so.

This matters for performance. Smaller images load faster, consume less bandwidth, and improve perceived responsiveness, especially on mobile connections. Browser support for AVIF is now good enough that it can be used as the preferred format, with WebP or JPEG as fallbacks where needed.

In practice, this means AVIF first, WebP second, and a traditional format last.

---

### Target file sizes 

Images should be no larger than they need to be *at the largest size they will actually display*. Oversized images that are “scaled down in CSS” are considered a performance error.

For typical web layouts, we aim for images that are “as small as possible without visible degradation.” As a rough guide:

#### Hero / Large Background Images

* **AVIF**: ~150–300 KB (desktop), smaller for mobile variants
* **WebP fallback**: ~250–500 KB
* **JPEG fallback**: only if necessary

#### Content Images (Cards, Articles, Thumbnails)

* **AVIF**: ~40–120 KB
* **WebP**: ~60–180 KB

#### Icons & UI Graphics

* **SVG**: ideally **under 5 KB per icon** after minification

---

### tl;dr

SVGs and modern image formats are not just about visual quality; they are about efficiency, accessibility, and maintainability. Minified SVGs with proper titles and reusable symbols keep interfaces lightweight and accessible, while AVIF allows us to ship high-quality imagery without paying an unnecessary performance cost.