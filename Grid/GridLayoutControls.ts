/**
 * This File holds all the GridLayout Prop type definitions related to child elements alignment corresponding to their respective css properties.
 */

enum PlaceItems {
	Start = 'start',
    End = 'end',
    Center = 'center',
    Stretch = 'stretch',
}

enum PlaceContent {
	Start = 'start',
    End = 'end',
    Center = 'center',
    Stretch = 'stretch',
    SpaceAround = 'space-around',
    SpaceBetween = 'space-between',
    SpaceEvenly = 'space-evenly',
}

export { PlaceContent, PlaceItems };