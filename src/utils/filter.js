export function filter(condition, data) {
  if (!condition) return data;
  return (data = data.filter(m => m.genre._id === condition));
}
