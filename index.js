const unitConversionValues = {
  meterToFeet: 3.281,
  literToGallon: 0.264,
  kilogramToPound: 2.204
}
const converterInput = document.querySelector(".converter-input")
const convertBtn = document.querySelector(".convert-btn")
const resetBtn = document.querySelector(".reset-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const converterMessage = document.querySelector(".converter-message")

convertBtn.addEventListener("click", function(){
  const value = Number(converterInput.value)
  if(value > 0){
    setValues(value)
    converterMessage.textContent = "Conversion completed successfully!"
  } else {
    converterMessage.textContent = "You entered a negative value or zero, try again"
  }
})

resetBtn.addEventListener("click", function(){
  reset()
  converterMessage.textContent = "Values reset successfully"
})

function getTemplate(value, unit) {
  let template = null
  if (unit === unitConversionValues.meterToFeet) {
    const feets = (value * unitConversionValues.meterToFeet).toFixed(3)
    const meters = (value / unitConversionValues.meterToFeet).toFixed(3)
    template = `${value} meters = ${feets} feet | ${value} feet = ${meters} meters`
  } else if(unit === unitConversionValues.literToGallon) {
    const gallons = (value * unitConversionValues.literToGallon).toFixed(3)
    const liters = (value / unitConversionValues.literToGallon).toFixed(3)
    template = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`
  } else {
    const pounds = (value * unitConversionValues.kilogramToPound).toFixed(3)
    const kilos = (value / unitConversionValues.kilogramToPound).toFixed(3)
    template = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`
  }
  return template
}

function setValues(value){
    const templateLength = getTemplate(value, unitConversionValues.meterToFeet)
    lengthEl.textContent = templateLength
    const templateVolume = getTemplate(value, unitConversionValues.literToGallon)
    volumeEl.textContent = templateVolume
    const templateMass = getTemplate(value, unitConversionValues.kilogramToPound)
    massEl.textContent = templateMass
}

function reset(){
  converterInput.value = 0;
  setValues(Number(converterInput.value))
}