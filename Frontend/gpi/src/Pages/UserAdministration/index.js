
import React, { useEffect, useState } from "react";
import Pagination from "../../Components/Pagination/Index";
import { getAllUsers } from "../../Services/UserService";
import { UserCard } from "../../Components/UserCard";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../hooks";

export const UserAdministration = () => {
  const { user } = useAuthStore();
  const [loading, setloading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUsers(user.uid).then((resp) => {
      setData(resp);
      setloading(false);
    });
  }, []);

  return (
    <div className="flex flex-col items-center responsive-width-component">
      <h4 className="text-2xl md:text-3xl  pt-8">Listado de usuarios</h4>
      <section className="w-full flex flex-col gap-1 pt-2">
        {!loading ? (
          data.users.map((usr) => (
            <UserCard key={usr._id} user={usr}></UserCard>
          ))
        ) : (
          <p>Cargando</p>
        )}
      </section>
      <section>
        <Pagination
          postsPerPage={5}
          totalPosts={data.count-1}
          setData={setData}
          query={getAllUsers}
        ></Pagination>
      </section>
    </div>
  );
};
