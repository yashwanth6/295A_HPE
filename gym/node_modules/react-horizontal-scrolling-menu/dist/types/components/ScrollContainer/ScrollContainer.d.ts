import React from 'react';
export declare type Props = {
    className?: string;
    children?: React.ReactNode;
    onScroll?: (event: React.UIEvent) => void;
    scrollRef: React.Ref<HTMLDivElement>;
};
declare function ScrollContainer({ className: _className, children, onScroll, scrollRef, }: Props): JSX.Element;
export default ScrollContainer;
