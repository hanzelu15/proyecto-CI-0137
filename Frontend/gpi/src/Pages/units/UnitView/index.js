//import React from 'react'
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../../../Components/Pagination/Index";
import { UnitCard } from "../../../Components/UnitCard";
import { getUnitsByPhase } from "../../../Services/UnitService";
import { UnitInfo } from "../UnitInfo/index";
import { useAuthStore } from "../../../hooks";


export const index = () => {
 /* const { User } = useAuthStore();
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const location = useLocation();
*/
  return (
    <div>index</div>
  )
}
