interface Size {
  sm: string;
}

const size: Size = {
  sm: "768px", // for now, just big and small
};

export const device = {
  sm: `(min-width: ${size.sm})`,
};
