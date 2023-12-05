
export const handleMouseEnter = (setHoveredDropdown: (arg0: any) => void, label: any) => {
    setHoveredDropdown(label);
};

export const handleMouseLeave = (e: any, setHoveredDropdown: (arg0: any) => void) => {
    if (e.relatedTarget && e.relatedTarget.id === "flyoutMenu" || e.relatedTarget && e.relatedTarget.id.includes("flyoutMenu")) {
        return;
    }
    setHoveredDropdown(null);
};