export const blockOrUnblockScroll = (sidebarOpen: any) => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
};

export const focusSidebarForBlur = () => {
    // @ts-ignore
    document.getElementById("sidebar").focus();
}
