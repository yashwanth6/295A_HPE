import React from 'react';
import type { Refs } from '../../types';
export declare type Props = {
    id: string;
    index: number;
    refs: Refs;
    className: string;
};
declare function Separator({ className, id, index, refs }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Separator>;
export default _default;
