type Key = string | number | symbol;

export function entryObject<T extends { [key: Key]: unknown }>(obj: T): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}

export function mapValues<T extends { [key: Key]: unknown }, K>(
  obj: T,
  callback: (prop: [keyof T, T[keyof T]]) => [keyof T, K]
): Record<keyof T, K> {
  const res = {};

  entryObject(obj)
    .map(callback)
    .forEach(([key, val]) => {
      // @ts-ignore
      res[key] = val;
    });

  return res as Record<keyof T, K>;
}
