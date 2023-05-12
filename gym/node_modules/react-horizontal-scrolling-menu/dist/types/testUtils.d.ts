declare type IntersectionObserverCB = (arg1: IntersectionObserverEntry[]) => void;
export type { IntersectionObserverCB };
export declare class MockedObserver {
    cb: IntersectionObserverCB;
    options: IntersectionObserverInit;
    elements: HTMLElement[];
    constructor(cb: IntersectionObserverCB, options: IntersectionObserverInit);
    unobserve(elem: HTMLElement): void;
    observe(elem: HTMLElement): void;
    disconnect(): void;
    fire(arr: IntersectionObserverEntry[]): void;
}
export declare function traceMethodCalls(obj: object | Function, calls?: any): object | Function;
