import type { ItemType, Refs } from '../../types';
export declare type Props = {
    children?: ItemType | ItemType[];
    refs: Refs;
    itemClassName?: string;
    separatorClassName?: string;
};
declare function MenuItems({ children, itemClassName: _itemClassName, refs, separatorClassName: _separatorClassName, }: Props): JSX.Element;
export default MenuItems;
