import type { IOItem, Item, visibleItems as itemsArr } from './types';
declare class ItemsMap extends Map<Item[0], Item[1]> {
    toArr(): Item[];
    toItems(): itemsArr;
    toItemsWithoutSeparators(): itemsArr;
    toItemsKeys(): itemsArr;
    sort(arr: Item[]): Item[];
    set(key: Array<Item> | string, val?: IOItem): this;
    first(): IOItem | undefined;
    last(): IOItem | undefined;
    filter(predicate: (value: Item, index: number, array: Item[]) => boolean): Item[];
    find(predicate: (value: Item, index: number, obj: Item[]) => boolean): Item | undefined;
    findIndex(predicate: (value: Item, index: number, obj: Item[]) => unknown): number;
    prev(item: string | IOItem): IOItem | undefined;
    next(item: IOItem | string): IOItem | undefined;
    getVisible(): Item[];
}
export default ItemsMap;
