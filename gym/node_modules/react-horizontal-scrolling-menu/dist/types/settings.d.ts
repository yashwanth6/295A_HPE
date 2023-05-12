declare type IntersectionObserverEntryVisibilityRatio = number;
declare type throttleInterval = number;
interface IntersectionObserverOptions extends IntersectionObserverInit {
    ratio: IntersectionObserverEntryVisibilityRatio;
    throttle: throttleInterval;
}
export declare const observerOptions: IntersectionObserverOptions;
export {};
