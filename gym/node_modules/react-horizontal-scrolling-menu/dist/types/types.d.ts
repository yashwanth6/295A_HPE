/// <reference types="react" />
import type { CustomEasing } from 'smooth-scroll-into-view-if-needed';
import type { CustomScrollBehaviorCallback } from 'scroll-into-view-if-needed/typings/types';
export declare type visibleItems = string[];
export interface IOItem {
    index: string;
    key: string;
    entry: IntersectionObserverEntry;
    visible: boolean;
}
export declare type Item = [string, IOItem];
export interface Refs {
    [key: string]: React.MutableRefObject<HTMLElement | null>;
}
export declare type ItemType = React.ReactElement<{
    /**
      Required. id for every item, should be unique
     */
    itemId: string;
}>;
export declare type CustomScrollBehavior<T> = ScrollBehavior | CustomScrollBehaviorCallback<T>;
export interface scrollToItemOptions {
    boundary?: HTMLElement | null;
    duration?: number;
    ease?: CustomEasing;
}
export declare type ItemOrElement = IOItem | Element | undefined;
