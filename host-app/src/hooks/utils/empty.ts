const useEmpty = (value: undefined) => {
    return value !== undefined ? value : "";
};

export default useEmpty;