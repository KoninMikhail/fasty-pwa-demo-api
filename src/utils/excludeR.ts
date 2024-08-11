/**
 * Exclude keys from object
 * @param obj
 * @param keys
 * @returns
 */
const excludeR = <Type, Key extends keyof Type>(obj: Type, keys: Key[]): Omit<Type, Key> => {
  return Object.keys(obj).reduce((acc, key) => {
    if (!keys.includes(key as Key)) {
      acc[key] =
        typeof obj[key] === 'object' && obj[key] !== null ? excludeR(obj[key], keys) : obj[key];
    }
    return acc;
  }, {} as Type);
};

export default excludeR;
