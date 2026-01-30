# Multi-Day Grid Build

For this build, we are going to use Sass, or SCSS. This is a CSS pre-processor that takes a few additional steps to get set up. 

## What is Sass (SCSS)?

Sass (Syntactically Awesome Stylesheets) is a preprocessor scripting language that extends CSS, allowing for more efficient and manageable stylesheets. It offers features like variables, nesting, mixins, and inheritance, making your CSS more powerful and easier to maintain. SCSS is one of Sass's syntaxes that is fully compatible with CSS, so you can use standard CSS along with Sass's enhanced features.

### Steps to Set Up Live Sass Compiler in VS Code

To get started, you need to have either a task-runner or a VS Code Extension to transpile your SCSS into native CSS for your browser. We will use 'Live Sass Compiler' by Glenn Marks together in class. 

Link: https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass

1. **Install Live Sass Compiler Extension**:
   - Open VS Code.
   - Go to the **Extensions** tab.
   - In the search bar, type **Live Sass Compiler** and press Enter.
   - Click **Install** next to the extension developed by **Glenn Marks**.

2. **Open Your SCSS Project**:
   - Open the folder or project where you have your SCSS files.

3. **Create an SCSS File**:
   - In the project, create an `.scss` file (e.g., `styles.scss`) in an `.scss` subdirectory.
   - Add your SCSS code to this file.

4. **Run Live Sass Compiler**:
   - At the bottom of VS Code, you’ll see a new button that says “**Watch Sass**” (alternatively, right-click on the SCSS file and choose “**Watch Sass**”).
   - Click the button, and it will automatically compile your `.scss` files into `.css` files in real time.


### Customize Output Path

If you want to change the output location for your compiled CSS, you can configure the extension by editing the `settings.json` file in VS Code.

#### Windows

     - Go to **File** > **Preferences** > **Settings**.
     - Search for `liveSassCompile.settings.formats`.
     - Update the configuration to customize where the CSS file is generated (see below).

#### macOS

1. click on the **Code** menu at the top-left of your screen (next to the Apple logo).

2. Select **Preferences** > **Settings**.

3. In the Settings window, click on the small icon at the top-right that looks like a piece of paper with a pencil (or three dots and select **Open Settings (JSON)**). This will open the `settings.json` file.

Alternatively, you can press the shortcut:
- **Cmd + Shift + P** to open the Command Palette.
- Type `Preferences: Open Settings (JSON)` and select it.

Once open, you can modify or add your custom settings directly in the `settings.json` file.

```JSON
"liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/css/",
        }
    ]
```

Note that the paths will be incorrect if you are not working from the **root** of your framework folder.

That's it! Your SCSS will now automatically compile into CSS as you save your files, making it easier to test and deploy.