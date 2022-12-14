export function currencyFormatter(amount: number): string {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function KFormatter(amount: number): string {
  return Math.abs(amount) > 999
    ? Math.sign(amount) * Number((Math.abs(amount) / 1000).toFixed(1)) + "k"
    : (Math.sign(amount) * Math.abs(amount)).toString();
}
