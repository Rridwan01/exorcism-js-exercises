export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * 8));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const hoursPerDay = 8;
  const monthlyRate = hoursPerDay * ratePerHour * 22;

  const fullMonth = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;

  const discountedMonthCost = fullMonth * monthlyRate * (1 - discount);
  const remainingDaysCost = remainingDays * ratePerHour * hoursPerDay;
  
  return Math.ceil(discountedMonthCost + remainingDaysCost)
}
