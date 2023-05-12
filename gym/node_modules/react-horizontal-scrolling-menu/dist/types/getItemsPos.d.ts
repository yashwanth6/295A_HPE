import { visibleItems as itemsArr } from './types';
export declare const omitEdgeSeparators: (items: itemsArr) => string[];
declare const getItemsPos: (items: itemsArr) => {
    first: string;
    center: string;
    last: string;
};
export default getItemsPos;
