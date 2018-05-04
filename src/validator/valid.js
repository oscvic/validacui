var patt = new RegExp("[0-9]{13}");

function HasValidFormat(cui){
  var res = false
  if(cui != null)
  {
    res = patt.test(cui);
  }
  return res
}

function IsValid(cui){
  if (HasValidFormat(cui))
  {
    // Se separan los dígitos en grupos
    let cuiNumber = cui.substr(0, 8)
    let cheker = cui.substr(8, 1)
    let stateCodeString = cui.substr(9, 2) //Departamento
    let cityCodeString = cui.substr(11, 2) //Municipio

    // Se obtiene el valor numérico del código de departamento y del código de municipio.
    let stateCode = parseInt(stateCodeString)
    let cityCode = parseInt(cityCodeString)
    let checkerCode = parseInt(cheker)

    let stateCityCounts = [
      /* 01 - Guatemala:      */ 17 /* municipios. */,
      /* 02 - El Progreso:    */  8 /* municipios. */,
      /* 03 - Sacatepéquez:   */ 16 /* municipios. */,
      /* 04 - Chimaltenango:  */ 16 /* municipios. */,
      /* 05 - Escuintla:      */ 13 /* municipios. */,
      /* 06 - Santa Rosa:     */ 14 /* municipios. */,
      /* 07 - Sololá:         */ 19 /* municipios. */,
      /* 08 - Totonicapán:    */  8 /* municipios. */,
      /* 09 - Quetzaltenango: */ 24 /* municipios. */,
      /* 10 - Suchitepéquez:  */ 21 /* municipios. */,
      /* 11 - Retalhuleu:     */  9 /* municipios. */,
      /* 12 - San Marcos:     */ 30 /* municipios. */,
      /* 13 - Huehuetenango:  */ 32 /* municipios. */,
      /* 14 - Quiché:         */ 21 /* municipios. */,
      /* 15 - Baja Verapaz:   */  8 /* municipios. */,
      /* 16 - Alta Verapaz:   */ 17 /* municipios. */,
      /* 17 - Petén:          */ 14 /* municipios. */,
      /* 18 - Izabal:         */  5 /* municipios. */,
      /* 19 - Zacapa:         */ 11 /* municipios. */,
      /* 20 - Chiquimula:     */ 11 /* municipios. */,
      /* 21 - Jalapa:         */  7 /* municipios. */,
      /* 22 - Jutiapa:        */ 17 /* municipios. */
    ]

    if (stateCode == 0 || cityCode == 0) {
      console.log("Departamento o Municipio invalidos.")
      return false
    }

    if (stateCode > stateCityCounts.length || cityCode > Math.max.apply(null,stateCityCounts))
    {
      console.log("Departamento invalido.")
      return false
    }

    if (cityCode > stateCityCounts[stateCode - 1])
    {
      console.log("Municipio Invalido.")
      return false
    }

    var total = 0

    for (var i = 0; i < cuiNumber.length; i++) {
      total += cuiNumber[i] * (i + 2)
    }

    var modulus = (total % 11)

    var valid = checkerCode == modulus

    if(!valid)
    {
      console.log("CUI invalido.")
      return false
    }

    return true

  }
  else {
    console.log("Formato invalido.")
    return false
  }
}


module.exports = {
    IsValid
}
