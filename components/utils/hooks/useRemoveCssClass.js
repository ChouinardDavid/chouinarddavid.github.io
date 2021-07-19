

const useRemoveCssClass = (cssClass) => {
    return (
        input => {
            if (input)
                input.classList.remove(cssClass);
        }
    );
};

export default useRemoveCssClass;
