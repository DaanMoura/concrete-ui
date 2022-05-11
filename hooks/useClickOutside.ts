import { MutableRefObject, useEffect } from "react";

/** Execute a function when click outside of the passed ref */
function useClickOutside (ref: MutableRefObject<any>, handler: () => void) {
    useEffect(() => {
        function handleClickOutside (event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref, handler]);
}

export default useClickOutside;