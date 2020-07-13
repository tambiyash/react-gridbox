import * as React from 'react';
import * as GridLayoutControls from './GridLayoutControls';
import styled from 'styled-components';

export interface IGridCell {
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
}

interface IGridItemProps {
    // provided item props passed as an object.
    cell: IGridCell;
    // place the items within the Gridcell. Default value is stretch
    alignSelf?: GridLayoutControls.PlaceItems[];
    // padding value to be applied within item.
    padding?: string;
}

export class GridItem extends React.Component<IGridItemProps, {}> {
    public static displayName = 'GridContainer.Item';

    public static defaultProps = {
        alignSelf: [GridLayoutControls.PlaceItems.Stretch, GridLayoutControls.PlaceItems.Stretch],
    };

    public render() {
        const { cell, alignSelf, padding } = this.props;
        const { colStart, colEnd, colSpan, rowStart, rowEnd, rowSpan } = cell;

         if(!colStart || !rowStart) {
             return null;
         }

         const colEndString = colEnd || (colSpan && `span ${colSpan}`);
         const rowEndString = rowEnd || (rowSpan && `span ${rowSpan}`);

         const colString = colEndString ? `${colStart} / ${colEndString}` : `${colStart}`
         const rowString = rowEndString ? `${rowStart} / ${rowEndString}` : `${rowStart}`
         const placeSelfString = alignSelf.length === 1 ? `${alignSelf[0]} ${alignSelf[0]}` : alignSelf.join(' ');
         
         const StyledGridItem = styled.div`
         grid-column: ${colString};
         grid-row: ${rowString};
         place-self: ${placeSelfString};
         padding: ${padding};
        `;

        return (
            <StyledGridItem {...this.props}/>
        );
    }
}
