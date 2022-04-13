import "../DarkMode.css";
import React from "react";
const setDark = () => {
	localStorage.setItem("theme", "dark"); //Guarda en el localStorage la ultima preferencia del usuario
	document.documentElement.setAttribute("data-theme", "dark");

	/* Establecemos el valor dark o light en el elemento <html> 
  Cuando se agrega este atributo, el selector [data-theme="dark"] 
  de nuestro CSS se activa y se establecen las variables de color oscuro */
};

const setLight = () => {
	localStorage.setItem("theme", "light"); //Guarda en el localStorage la ultima preferencia del usuario
	document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");
//Toma el valor de theme desde el localStorage si es que este existe

const prefersDark =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches;
/* Consulta la mediaquery de preferencia del navegador del usuario en prefers-color-scheme 
    https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme  */

const defaultDark =
	storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
	setDark();
}

/* Consulta si usar el darkmode de manera predeterminada, si da true se configura la app en darkmode 
    antes de que se muestre el componente*/

const toggleTheme = (e) => {
	if (e.target.checked) {
		setDark();
	} else {
		setLight();
	}
};
const DarkMode = () => {
	return (
		<div className="toggle-theme-wrapper">
			<span>☀️</span>
			<label className="toggle-theme" htmlFor="checkbox">
				<input type="checkbox" id="checkbox" onChange={toggleTheme} />
				<div className="slider round"></div>
			</label>
			<span>🌒</span>
		</div>
	);
};

export default DarkMode;
