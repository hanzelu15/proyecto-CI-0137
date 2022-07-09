//import React from 'react'
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../../../Components/Pagination/Index";
import { UnitCard } from "../../../Components/UnitCard";
import { getUnitsByPhase } from "../../../Services/UnitService";
import { PhaseInfo } from "../PhaseInfo";

export const PhasesView = () => {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const location = useLocation();
  const phase = location.state;


  useEffect(() => {
    getUnitsByPhase(phase._id)
      .then((resp) => {
        setData(resp);
        setloading(false);
      })
  }, []);


  return (
    <div className="flex flex-col justify-items-center items-center responsive-width-component">
      <h2 className="text-4xl font-semibold pt-10 items-start">Unidades</h2>
      <PhaseInfo phase={phase}></PhaseInfo>
      <section className="w-full flex flex-col gap-5"> 
        <div className="flex w-full  justify-between">
          <h4 className="text-3xl"> </h4>
          <Link to={`/new-unit/${phase.name}`} state={phase} className="btn-green h-fit">Agregar una nueva unidad</Link>
          
        </div>
        {!loading ? (
            data.units.map((unit) => (
            <UnitCard key={unit._id} unit={unit}></UnitCard>
          ))
        ) : (
          <p>Cargando</p>
        )}
      </section>
      <section>
        <Pagination
          postsPerPage={5}
          totalPosts={data.count}
          setData={setData}
          query={getUnitsByPhase}
        ></Pagination>
      </section>
    </div>
  )
}