# React-Gridbox
Uses CSSGrid to render GridContainer and GridItems with desired props. Coupled with styled-components and typescript.

## GridContainer
 <ol>
 <li>Import GridContainer into your project</li>
 <li>Provide it with below props to divide into columns and rows.</li>
 </ol>

<strong>import { GridContainer } from 'react-gridbox';</strong><br/>
<strong>import * as GridLayoutControls from 'react-gridbox/Grid/GridLayoutControls';</strong>

props - 

```
// Column-widths which would be rendered accordingly in grid-columns. --- ['2fr', '140px', '1fr', '25%', 'auto']
columns: string[];

// Rows-heights which would be rendered accordingly in grid-rows. --- ['2fr', '140px', '1fr', '25%', 'auto']
rows: string[];

// Gap in between the grid columns and rows. Default 1fr each. --- ['20px', '10px'] --- ['10px']
gridGap?: string[];

// Align grid items along the column and row axis. Default stretch. --- ['start', 'end'] --- ['end']
alignItems?: GridLayoutControls.PlaceItems[];

// Align grid content along the column and row axis. Default stretch. --- ['start', 'end'] --- ['end']
alignContent?: GridLayoutControls.PlaceContent[];

// Minimum height value in px if need flexible row heights. --- 20
minHeight?: number;
```

## GridItem
 <ol>
 <li>You can use GridContainer.Grid. No imports needed</li>
 <li>Provide it with below props to render cells. You can thereafter render content inside those cells</li>
 </ol>
 
props - 

```
// provided cell values viz.
cell: IGridCell;

// place the items within the Gridcell. Default value is stretch --- ['start', 'end'] --- ['stretch']
alignSelf?: GridLayoutControls.PlaceItems[];

// padding value to be applied within item. --- 10px
padding?: string;
```

IGridCell contains following properties-

```
// column start line where the item begins along column axis
colStart: number;
// column start line where the item ends along column axis. Alternatively can use colSpan to define span column will take.
colEnd?: number;
// column start line where the item begins along the row axis.
rowStart: number;
// column start line where the item ends along the row axis. Alternatively can use rowSpan to define span row will take.
rowEnd?: number;
// column span value to end the column after provided span (if colEnd value is not provided)
colSpan?: number;
// row span value to end the row after provided span (if rowEnd value is not provided)
rowSpan?: number;
```

# License

react-gridbox is available under the MIT license. See the LICENSE file for more info.
