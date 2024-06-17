// Function to truncate wallet address
export const truncateAddress = (address: string, length: number) => {
  const visibleChars = length * 2; // 2 hex characters per byte
  const start = address.slice(0, visibleChars / 2);
  const end = address.slice(-visibleChars / 2);
  return `${start}...${end}`;
};
