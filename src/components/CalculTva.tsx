import React, { useEffect, useState, useContext } from "react";
import calculPourcentage from "../utils/calculPourcentage";
// importer ICalculTva.ts
import ICalculTva from "../interfaces/ICalculTva";
import ComponentInput from "./form/ComponentInput";
import { UserContext } from "./context/ThemeUserProvider";

const CalculTva: React.FC<any> = () => {
  const calculTvaObject: ICalculTva = {
    nombreACalculer: 0,
    tva: 0,
    description: "Calcul de la TVA",
    information: "Information importante",
    // dateCalcul: 0,
  };
  const [calculTvaState, setCalculTvaState] = useState(calculTvaObject);
  const handleChange = (attribut: string, value: number) => {
    setCalculTvaState({ ...calculTvaState, [attribut]: value });
  };
  // variables :
  // nombreACalculer
  // tva
  // const [nombreACalculer] = useState(0);
  // const [tva, setTva] = useState(0);
  const [result, setResult] = useState(0);

  // calculer la tva en envoyant les deux valeurs nombreACalculer et tva
  // ensuite appeler calculPourcentage
  useEffect(() => {
    function calculTvaEffect() {
      let result = calculPourcentage(
        calculTvaState.nombreACalculer,
        calculTvaState.tva
      );
      setResult(result);
    }

    calculTvaEffect();
  }, [calculTvaState.nombreACalculer, calculTvaState.tva]);

  // function handleChangeGen<T>(attribut: string, value: T) {
  //   setCalculTvaState({ ...calculTvaState, [attribut]: value });
  // }

  function handleChangeGen2<T>(attribut: string, value: string) {
    setCalculTvaState({ ...calculTvaState, [attribut]: value });
  }
  function calculTva() {
    setResult(
      calculPourcentage(calculTvaState.nombreACalculer, calculTvaState.tva)
    );
  }

  // pour la partie affichage :
  // deux input fields
  // bouton de validation avec un intitulé "calculer"
  // afficher le "résultat"
  let type = "text";
  let placeholder = "information";

  //récupérer avec le hook useContext le contenu de UserContext
  //qui est de type IUserContextProps
  const useContextValue = useContext(UserContext);
  if (!useContextValue) {
    throw new Error("useContext must be used within a UserProvider");
  }
  function userName(value: string) {
    useContextValue?.setUser(value);
  }

  return (
    <>
      <h2> Calculateur de TVA à 10% </h2>
      <input
        type="number"
        onChange={(e) =>
          handleChange("nombreACalculer", parseFloat(e.target.value))
        }
        value={calculTvaState.nombreACalculer}
        placeholder="Nombre à calculer"
      ></input>
      {useContextValue?.user}
      <input
        type="number"
        onChange={(e) => handleChange("tva", parseFloat(e.target.value))}
        value={calculTvaState.tva}
        placeholder="TVA"
      ></input>
      {useContextValue?.user}
      <input
        type="text"
        onChange={(e) => handleChangeGen2("description", toString())}
        value={calculTvaState.description}
        placeholder="Description"
      ></input>
      {/* <input
        type="Date"
        onChange={(e) =>
          handleChangeGen("dateCalcul", Date.parse(e.target.value))
        }
        value={new Date(calculTvaState.dateCalcul).toDateString()}
        placeholder="Date"
      ></input> */}
      <button onClick={() => userName("Johnny")}>Change Name 1</button>
      <button onClick={() => userName("Bob")}>Change Name 2</button>
      <button onClick={() => calculTva()}>Calculer</button>
      <p>Résultat : {result}</p>
      <ComponentInput
        type={"text"}
        value={calculTvaState.information}
        placeholder={placeholder}
        onChangeInput={(valueOfInput: any) =>
          handleChangeGen2("information", valueOfInput)
        }
      />
      <ComponentInput
        type={"number"}
        value={calculTvaState.tva}
        placeholder={"tva"}
        onChangeInput={(valueOfInput: any) =>
          handleChangeGen2("tva", valueOfInput)
        }
      />
    </>
  );
};

export default CalculTva;
