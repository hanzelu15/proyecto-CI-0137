//import React from 'react'
import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PhaseInfo } from "../PhaseInfo";






export const PhasesView = () => {
  const [extras, setExtras] = useState([]);
  const location = useLocation();
  const phase = location.state;
  console.log(phase);
  return (
    <div className="flex flex-col justify-items-center items-center responsive-width-component">
      <PhaseInfo phase={phase}></PhaseInfo>
    </div>
  )
}