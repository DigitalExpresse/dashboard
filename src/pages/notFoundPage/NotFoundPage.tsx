import './notFoundPage.css'
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useUrlContext} from "../../contexts/UrlContext.tsx";
import {UrlPath} from "../../utils/UrlPath.tsx";

 const NotFoundPage = () => {

     const navigate = useNavigate();
     const {setCurrentUrl} = useUrlContext();

     useEffect(() => {
            setTimeout(() => {
                navigate(UrlPath.Dashboard);
                setCurrentUrl(UrlPath.Dashboard);
            }, 2000);
     }, []);

    return (
            <div className="bg-purple">

            <div className="stars">
                <div className="central-body">
                    <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt={"chiffre 404 écrit en grand"}/>
                    <Link to="/" className="btn-go-home block px-6 py-3">Retour à l'acceuil</Link>
                    <p className={"text-not-found"}>La page que vous cherchez n'existe pas ou a été déplacée !</p>
                </div>
                <div className="objects">
                    <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt={"fusée qui bouge en arrière plan"}/>
                        <div className="earth-moon">
                            <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt={"La planète terre"}/>
                                <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt={"La lune"}/>
                        </div>
                        <div className="box_astronaut">
                            <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt={"Une astronaute qui flotte dans l'espace"}/>
                        </div>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>

            </div>

            </div>
    );
};

export default NotFoundPage;