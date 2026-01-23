# CSS Grid: Key Terms

Before we get into all of the core concepts of CSS Grid, we need to familiarise ourselves with the vocabulary and terms we'll be using. 

## Terminology

- Grid Container: The element where we define `display: grid;`. It's the direct parent of all the grid items. This element establishes a grid formatting context, and all of its direct children become grid items.

- Grid Item: The direct descendants (i.e., the children) of the grid container. Only direct descendants participate in the grid layout. Grandchildren are laid out normally (unless you explicitly make a grid or flex container inside of a grid item).

- Grid Line: The dividing lines that run horizontally and vertically through the grid. Grid lines form the boundaries of rows and coumns and are what you actually reference when you place items using `grid-column` or `grid-row`.

    Note: Grid lines are numbered starting at 1, from the start edge of the grid. Negative numbers count backwards from the end.

- Grid Track: The space between two adjacent grid lines (i.e., a column or a row). A column is a vertical grid track, and a row is a horizontal grid track. When you define `grid-template-columns` or `grid-template-rows`, you are defining the size of these tracks. 

- Grid Cell: A single unit of the grid, formed by the intersection of one row track and one column track. Think of this as the smallest addressable square or unit in the grid.

    Note: A grid item can occupy one cell or span across many cells.

- Grid Area: A rectangular region made up of one or more grid cells. Grid areas can be created implicitly by placing an item across multiple rows or columns, or explicitly using `grid-template-areas`. 

    Note: When you use `grid-template-areas`, you are naming grid areas and placing items by name rather than line numbers.