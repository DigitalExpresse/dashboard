import SpinnerPageLoad from "./SpinnerPageLoad.tsx";

export const renderSpinnerPageLoader = (_isLoading: boolean) => {

    return (
        <>
            { _isLoading ? <SpinnerPageLoad/> : null }
        </>
    )
}