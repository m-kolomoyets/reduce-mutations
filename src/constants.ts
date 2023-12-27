export const EMPTY_OBJECT = {};
export const EMPTY_ARRAY = [];

export const NESTED_EMPTY_OBJECT = {
  fizz: EMPTY_OBJECT,
  buzz: EMPTY_OBJECT,
};

export const NESTED_EMPTY_OBJECT_SPREAD = {
  fizz: { ...EMPTY_OBJECT },
  buzz: { ...EMPTY_OBJECT },
};

export const MODE_BUTTONS = {
  "with-objects": {
    label: "With Objects",
    value: "with-objects",
  },
  "with-objects-spread": {
    label: "With Objects Spread",
    value: "with-objects-spread",
  },
  "with-nested-object": {
    label: "With Nested Object",
    value: "with-nested-object",
  },
  "with-nested-object-spread-root": {
    label: "With Nested Object Spread Root",
    value: "with-nested-object-spread-root",
  },
  "with-nested-object-spread-root-n-nested": {
    label: "With Nested Object Spread Root & Nested",
    value: "with-nested-object-spread-root-n-nested",
  },
};
