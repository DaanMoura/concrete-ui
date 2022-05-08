import { useEffect } from "react";

/** Execute a function on press esc key */
function useEsc (handler: () => void) {
    useEffect(() => {
        function handleEsc(event: KeyboardEvent) {
            if (event.key === "Escape") {
                handler();
            }
        }

        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        }
    }, [handler]);
}

export default useEsc;