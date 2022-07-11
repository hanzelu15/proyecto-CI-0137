//import React from 'react'
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../../../Components/Pagination/Index";
import { ExtraCard } from "../../../Components/ExtraCard";
import { getExtrasByUnit } from "../../../Services/ExtraService";
import { UnitInfo } from "../UnitInfo";
import { useAuthStore } from "../../../hooks";



export const UnitView = () => {

  const { user } = useAuthStore();
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const location = useLocation();
  const unit = location.state;

  useEffect(() => {
    getExtrasByUnit(unit._id)
      .then((resp) => {
        setData(resp);
        setloading(false);
      })
  }, []);

  return (
    <div className="flex flex-col justify-items-center items-center responsive-width-component">
      <h2 className="text-4xl font-semibold pt-10 items-start">{unit.number}: <ni className="font-normal">Extras</ni></h2>
      <UnitInfo unit={unit}></UnitInfo>
      <section className="w-full flex flex-col gap-5"> 
        <div className="flex w-full  justify-between">
          <h4 className="text-3xl"> </h4>
          <Link to={`/new-unit/${unit.number}`} state={unit} className={`${user.role!=="ADMIN" ? "hidden" : ""} btn-green rounded-lg h-fit"`}>Agregar Extra</Link>
          
        </div>
        {!loading ? (
            data.extras.map((extra) => (
            <ExtraCard key={extra._id} extra={extra}></ExtraCard>
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
          query={getExtrasByUnit}
        ></Pagination>
      </section>
    </div>
  )
}
