const isTextMatch = (text: string, keywords: string) =>
  text.trim().toLowerCase().includes(keywords.trim().toLowerCase());

export default isTextMatch;
