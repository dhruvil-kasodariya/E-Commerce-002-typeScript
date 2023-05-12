const urlExchange: string = "https://api.exchangerate.host/latest?base=USD";

export const usdRate: () => Promise<{
  data: { rates: { INR: number } };
}> = async () => {
  const response = await fetch(urlExchange);
  const data = await response.json();
  return { data: { rates: { INR: data.rates.INR } } };
};
