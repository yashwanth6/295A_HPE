/// <reference types="react" />
import ItemsMap from './ItemsMap';
import type { CustomScrollBehavior, ItemOrElement, scrollToItemOptions, visibleItems } from './types';
export default function createApi(items: ItemsMap, visibleItems?: visibleItems, boundaryElement?: React.MutableRefObject<HTMLElement | null>, transitionOptions?: {
    duration?: number;
    ease?: (t: number) => number;
    behavior: string | Function;
}): {
    getItemById: (id: string) => import("./types").IOItem | undefined;
    getItemElementById: (id: string | number) => Element | null;
    getItemByIndex: (index: number | string) => import("./types").IOItem | undefined;
    getItemElementByIndex: (id: string | number) => Element | null;
    getNextItem: () => import("./types").IOItem | undefined;
    getPrevItem: () => import("./types").IOItem | undefined;
    isFirstItemVisible: boolean;
    isItemVisible: (id: string) => boolean;
    isLastItem: (id: string) => boolean;
    isLastItemVisible: boolean;
    scrollNext: <T>(behavior?: CustomScrollBehavior<T> | undefined, inline?: ScrollLogicalPosition | undefined, block?: ScrollLogicalPosition | undefined, { duration, ease, boundary, }?: scrollToItemOptions) => unknown;
    scrollPrev: <T_1>(behavior?: CustomScrollBehavior<T_1> | undefined, inline?: ScrollLogicalPosition | undefined, block?: ScrollLogicalPosition | undefined, { duration, ease, boundary, }?: scrollToItemOptions) => unknown;
    scrollToItem: <T_2>(target?: ItemOrElement, behavior?: CustomScrollBehavior<T_2> | undefined, inline?: ScrollLogicalPosition | undefined, block?: ScrollLogicalPosition | undefined, options?: scrollToItemOptions | undefined) => unknown;
    visibleItems: visibleItems;
    visibleItemsWithoutSeparators: visibleItems;
};
export interface publicApiType extends ReturnType<typeof createApi> {
    initComplete: boolean;
    items: ItemsMap;
    scrollContainer: React.RefObject<HTMLElement | null>;
    visibleItems: visibleItems;
}
