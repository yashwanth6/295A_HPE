interface Props {
    cb: () => void;
    condition?: boolean;
}
declare function useOnInitCb({ cb, condition }: Props): boolean;
export default useOnInitCb;
