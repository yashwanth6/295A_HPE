import type { Refs, visibleItems } from '../types';
import { observerOptions } from '../settings';
import ItemsMap from '../ItemsMap';
interface Props {
    items: ItemsMap;
    itemsChanged: string;
    options: typeof observerOptions;
    refs: Refs;
}
declare function useIntersection({ items, itemsChanged, refs, options }: Props): {
    visibleItems: visibleItems;
};
export default useIntersection;
