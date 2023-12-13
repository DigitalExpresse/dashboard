import { CircularProgress, Link } from "@mui/material";
import { useConnectionForm } from "./connectionFormService.tsx";
import {FormManager} from "../../utils/class/FormManager.tsx";

export function ConnectionForm() {

    const {
        formData,
        setFormData,
        formErrors,
        setFormErrors,
        loaderIsActive,
        hasInvalidCredentials,
        handleSubmitFormConnection,
    } = useConnectionForm();

    return (
        <div className={"bg-white !p-6 rounded-xl shadow-2xl w-[95%] !max-w-xl mb-24 mx-auto"}>
            <div className={"flex flex-col items-center"}>
                <div className={"self-start"}>
                    <h2 className={"!font-semibold text-2xl mb-5"}>Connexion</h2>
                </div>
                <form onSubmit={handleSubmitFormConnection} className={"w-full"}>
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
                                onChange={(e) => FormManager.handleChange(e, setFormData, formData, setFormErrors, formErrors)}
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
                                onChange={(e) => FormManager.handleChange(e, setFormData, formData, setFormErrors, formErrors)}
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
                        className={hasInvalidCredentials || formErrors.errorServeur ? "!bg-alert rounded text-white !mt-3 !mb-4 text-md w-full py-1.5 flex justify-center items-center !gap-6" : "!bg-primary py-1.5 text-white w-full rounded !mt-3 !mb-4 !text-base flex justify-center items-center !gap-6"}
                    >
                        {hasInvalidCredentials && "Identifiants incorrects"}
                        {formErrors.errorServeur && "Erreur serveur"}
                        {!hasInvalidCredentials && !formErrors.errorServeur && !loaderIsActive && "Se connecter"}
                        {loaderIsActive && <CircularProgress size={18} className={"!text-white"}

                        />}
                    </button>

                    <div className={"text-center"}>
                        <Link href="#" variant="body2" className={'!no-underline !text-primary !font-semibold'}>
                            Mot de passe oublié ?
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
}
