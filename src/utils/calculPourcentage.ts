function calculPourcentage(nombreACalculer: number, tva: number): number {
  // calcul
  let resultatCalculTva = nombreACalculer * tva;
  console.log(resultatCalculTva);
  return resultatCalculTva;
}

export default calculPourcentage;
