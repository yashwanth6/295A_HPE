import React from 'react';
import type { Refs } from '../../types';
export declare type Props = {
    id: string;
    index: number;
    refs: Refs;
    children?: React.ReactNode;
    className: string;
};
declare function Item({ children, className, id, index, refs }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Item>;
export default _default;
