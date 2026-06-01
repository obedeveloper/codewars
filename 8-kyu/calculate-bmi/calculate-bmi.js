function bmi(weight, height) {
  const result = weight / (height ** 2);
  
  if (result <= 18.5) return "Underweight";
  if (result <= 25) return "Normal";
  if (result <= 30) return "Overweight";
  
  return "Obese";
}