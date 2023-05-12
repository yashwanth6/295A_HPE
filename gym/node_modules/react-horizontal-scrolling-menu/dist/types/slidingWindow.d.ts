import { visibleItems as itemsArr } from './types';
export declare function prevGroup(allItems: itemsArr, visibleItems: itemsArr): itemsArr;
export declare function nextGroup(allItems: itemsArr, visibleItems: itemsArr): itemsArr;
declare function slidingWindow(allItems: itemsArr, visibleItems: itemsArr): {
    prev: () => itemsArr;
    next: () => itemsArr;
};
export default slidingWindow;
