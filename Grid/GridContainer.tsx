import * as React from 'react';
import * as GridLayoutControls from './GridLayoutControls';
import { GridItem } from './GridItem';
import styled from 'styled-components';

interface IGridContainerProps {
    // Columns in array each having it's own width. They would be rendered accordingly in grid-template-columns
    columns: string[];
    // Rows in array each having it's own width. They would be rendered accordingly in grid-template-rows
    rows: string[];
    // Gap in between the grid columns and rows. Default 1fr each
    gridGap?: string[];
    // Align grid items along the column and row axis. Default stretch
    alignItems?: GridLayoutControls.PlaceItems[];
    // Align grid content along the column and row axis. Default stretch
    alignContent?: GridLayoutControls.PlaceContent[];
    // Minimum height value in px if need flexible row heights.
    minHeight?: number;

}

export class GridContainer extends React.Component<IGridContainerProps, {}> {
    public static Grid = GridItem;

    public static defaultProps = {
        gridGap: ['10px', '10px'],
        alignItems: [GridLayoutControls.PlaceItems.Stretch, GridLayoutControls.PlaceItems.Stretch],
        alignContent: [GridLayoutControls.PlaceItems.Stretch, GridLayoutControls.PlaceItems.Stretch],
        minHeight: 100,
    };

    public render() {
        const {
            columns,
            rows,
            gridGap,
            alignItems,
            alignContent,
            minHeight,
         } = this.props;

         if(!columns || !rows) {
             return null;
         }

         const columnString = columns.join(' ');
         const rowString = rows.join(' ');
         const gridGapString = gridGap.length === 1 ? `${gridGap[0]} ${gridGap[0]}` : gridGap.join(' ');
         const placeItemsString = alignItems.length === 1 ? `${alignItems[0]} ${alignItems[0]}` : alignItems.join(' ');
         const placeContentString = alignContent.length === 1 ? `${alignContent[0]} ${alignContent[0]}` : alignContent.join(' ');
         const gridAutoRowsString = minHeight && `minmax(${minHeight}px, auto)`;
        
        const StyledGridContainer = styled.div`
            display: grid;
            grid-template-columns: ${columnString};
            grid-template-rows: ${rowString};
            grid-gap: ${gridGapString};
            place-items: ${placeItemsString};
            place-content: ${placeContentString};
            grid-auto-rows: ${gridAutoRowsString};
        `;

        return (
            <StyledGridContainer {...this.props} />
        )
    }
}
