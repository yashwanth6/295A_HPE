interface Props {
    cb: Function;
    condition: boolean;
    hash: string;
}
declare function useOnUpdate({ cb, condition, hash }: Props): void;
export default useOnUpdate;
