export const REQUEST = <T extends string>(type: T) => `${type}_REQUEST` as const;
export const SUCCESS = <T extends string>(type: T) => `${type}_SUCCESS` as const;
export const FAIL = <T extends string>(type: T) => `${type}_FAIL` as const;
