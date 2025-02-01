export function pangram(word: string | number): boolean {
  const str = String(word);
  if (!isNaN(Number(word))) {
    return new Set(str).size === 10; 
  }
  const alphabetSet = new Set<string>();
  for (const char of str.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      alphabetSet.add(char);
    }
  }
  return alphabetSet.size === 26;
}
