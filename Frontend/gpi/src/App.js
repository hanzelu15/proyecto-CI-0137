import { useReducer } from "react";
import { AppRouter } from "./Routes/AppRouter/index.js";
import { AuthContext } from "./auth/authContext.js";
import { authReducer } from "./auth/authReducer.js";
import "./App.css";

const init = () => { 
  return {
    logged: true,
    name: "Hansel",
  };
};
function App() {
  //  consultar el localstorage para ver user
  // bool logeado = false


  const [user, dispatch] = useReducer(authReducer, {}, init);


  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          dispatch,
        }}
      >
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
