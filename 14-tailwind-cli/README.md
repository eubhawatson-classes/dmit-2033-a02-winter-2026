# Building with TailwindCSS v4

In this demo, we'll be compiling our own output with TailwindCSS v4. For a website or application 'in production' (or 'live' on the web), this is the preferred method, as the styles will be pre-compiled, not quickly assembled at runtime like with the Play CDN.

We will also add a plugin for forms, which will allow us to use a few additional styles. Documentation for this plugin can be found in its GitHub README: [https://github.com/tailwindlabs/tailwindcss-forms](https://github.com/tailwindlabs/tailwindcss-forms)

## Requirements:

* Node.js
* VS Code
* Live Server for VS Code


## Step 1: Install Node.js

First, we need to make sure that we have Node.js installed on our device.

**Note**: Node.js is a JavaScript runtime that allows us to run JavaScript code on the server-side, not just in the browser (client-side). You likely already have it installed on your device from your JavaScript course. In this case, check to see that the version number is up to date.

To install Node.js, we can go to the official Node.js website and download the installer for our operating system: [https://nodejs.org/en/download](https://nodejs.org/en/download)

### Check your Node.js version no.

```bash
node -v
```

This will let you confirm whether or not you have Node installed and/or if it's up to date.


## Step 2: Initialise our project

Once we have Node.js installed, we can navigate to our project directory (wherever that may be on our device) by using the `cd` command or by dragging and dropping the directory onto our CLI window.

**Note**: If you open the terminal in VS Code, the path begins in the root of your project directory.

Next, we can run the following command to initialise our project:

```bash
npm init -y
```

Once you get to this point, you'll be in a setup utility. Basically, hit 'Enter' or 'Return' until the utility finishes running through all of the settings.

This will create a `package.json` (project metadata) and a `package-lock.json` file that Node needs to work properly.


## Step 3: Install Tailwind CSS (and the forms plugin)

Next, we need to install Tailwind CSS by running the following command:

```bash
npm install -D tailwindcss @tailwindcss/cli @tailwindcss/forms
```

Because we’re going to use the **forms** plugin and the **command line interface**, we're making sure those are installed, too.

This will install Tailwind CSS and its plugin as development dependencies in our project directory.


## Step 4: Create a CSS file

Now we’ll create a CSS file and include Tailwind in the **v4 way**.

In the `src` folder, create a `tailwind.css` file and add the following code:

```css
/* This loads TailwindCSS v4 (no separate @tailwind base/components/utilities needed). */
@import "tailwindcss";

/*
    We need to tell Tailwind where to scan for classes so it can generate
    only what we actually use.

    If your HTML files are not in the project root, adjust the glob.
    For example, if they’re in ./dist, use:  @source "./dist/*.html";
*/
@source "./**/*.{html,php,md,js,ts,jsx,tsx}";

/*
    We can create some custom breakpoints; TailwindCSS v4 uses CSS variables via @theme.
    VS Code might grumble about the @-rules — that’s fine and expected.
*/
@theme {
  --breakpoint-sm: 666px;
  --breakpoint-md: 888px;
  --breakpoint-lg: 1000px;
  --breakpoint-xl: 1200px;
  --breakpoint-2xl: 1800px;
}

/* Finally, let's load the forms plugin (v4). */
@plugin "@tailwindcss/forms";
```

That’s it — nice and tidy. The old `@tailwind base; @tailwind components; @tailwind utilities;` directives from v3 are **not** needed in v4, because `@import "tailwindcss";` brings in the lot.


## Step 5: Build our CSS

To build our CSS, we need to run the following command (from the project root):

```bash
npx @tailwindcss/cli -i ./src/tailwind.css -o ./dist/css/styles.css --watch
```

This command will compile our CSS file and output it to `./dist/styles.css`, which we can link to in our HTML file. The `--watch` flag keeps it running so any time you save changes, it rebuilds. Lovely.


## Step 6: Include our CSS in our HTML file

Finally, we need to include our CSS file in our HTML file by adding the following code:

```html
<link rel="stylesheet" href="css/styles.css">
```

This code will link our generated CSS file to our HTML file and apply the styles to our website. 

If the styles don’t appear, double-check that this path matches where your HTML file lives (relative paths can be a bit particular), and make sure your `@source` pattern actually points to the folder where your HTML/JS files reside. A hard refresh (Ctrl/Cmd + Shift + R) also helps if the browser’s being stubborn.