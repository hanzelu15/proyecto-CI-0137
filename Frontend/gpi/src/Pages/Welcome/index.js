import React from "react";
import logo from "../../Assets/Imagotipo.png";
import wave from "../../Assets/w-background.png";
import { ButtonLink } from "../../Components/ButtonLink/ButtonLink";

export const Welcome = () => {
  return (
    <div className="w-full flex h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${wave})` }}>
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <img src={logo} className="md:w-[350px] xl:w-[500px]" alt="Logo GPI" />
        <p className="md:w-[350px] xl:w-[500px] text-center py-8">
          Con esta aplicación usted podrá administrar un complejo inmobiliario,
          especificamente en el manejo de extras que un cliente puede solicitar
          para una vivienda
        </p>
      </div>
      <div className=" w-1/2 h-full flex flex-col justify-center items-center gap-36">

        <ButtonLink text="Registrarse" to="/register"></ButtonLink>
        <ButtonLink text="Iniciar Sesion" to="/login"></ButtonLink>
      </div>
    </div>
  );
};
