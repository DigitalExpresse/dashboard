import {handleChange, submitConnectionForm} from "../pages/connectionPage/ConnectionPageService.tsx";
import {CircularProgress, Link} from "@mui/material";
import {useState} from "react";

export function ConnectionForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
        invalidCredentials: false,
    });

    const [loaderIsActive, setLoaderIsActive] = useState(false);


    const hasInvalidCredentials = formErrors.invalidCredentials && !loaderIsActive;

    return (
        <>
            <form
                onSubmit={(e) => {
                    setLoaderIsActive(true);
                    submitConnectionForm(e, setFormErrors, formData)
                        .then((response) => {
                            if(response){
                                window.location.href = "/admin";
                            }

                            else {
                                setLoaderIsActive(false);
                                if (response === false) {
                                    setFormErrors({
                                        ...formErrors,
                                        invalidCredentials: true,
                                    });
                                }
                            }

                        })
                        .catch((error) => {
                            setLoaderIsActive(false);
                            console.log(error)
                        })

                }}
                noValidate
                className={"!mt-1 w-full"}
            >
                <div className={"flex justify-center flex-col"}>
                    <label htmlFor="email" className="mb-4 block text-sm font-medium leading-3 text-gray-900">Email</label>
                    <div>
                        <input
                            className={
                                "block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            }
                            required
                            id="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formData.email}
                            onChange={(e) => handleChange(e, setFormData, formData, setFormErrors, formErrors)}
                        />
                        <p className={"mb-6 ml-1 mt-1.5 text-xs text-alert"}>{formErrors.email}</p>
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-4 block text-sm font-medium leading-3 text-gray-900">Mot de passe</label>
                        <input
                            required
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formData.password}
                            onChange={(e) => handleChange(e, setFormData, formData, setFormErrors, formErrors)}
                            className={
                                "block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            }
                        />
                        <p className={"ml-1 mt-1.5 text-xs text-alert"}>{formErrors.password}</p>
                    </div>
                </div>

                <div className="mt-6 mb-3 block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="checkboxDefault"/>
                    <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="checkboxDefault">
                        Rester connecté
                    </label>
                </div>

                <button
                    type="submit"
                    className={hasInvalidCredentials ? "!bg-alert rounded text-white !mt-3 !mb-4 text-md w-full py-1.5" : "!bg-primary py-1.5 text-white w-full rounded !mt-3 !mb-4 !text-base"}
                >
                    {hasInvalidCredentials && "Identifiants incorrects"}
                    {!hasInvalidCredentials && "Se connecter"}
                    {loaderIsActive && <CircularProgress size={22} className={"!text-white ml-4"}

                    />}
                </button>

                <div className={"text-center"}>
                    <Link href="#" variant="body2" className={'!no-underline !text-primary !font-semibold'}>
                        Mot de passe oublié ?
                    </Link>
                </div>
            </form>
        </>
    );
}