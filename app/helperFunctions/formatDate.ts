export const formatDate = (dateString: string | null) => {
  if (dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const };
    return date.toLocaleDateString("en-US", options);
  }
  return "Unknown date";
};
