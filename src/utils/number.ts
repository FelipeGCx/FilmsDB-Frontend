const price = (value: number, fractionDigits = 2) => {
  return numberFormat("es-CO", "COP", fractionDigits).format(value);
};

const numberFormat = (lang = "es-CO", currency = "COP", fractionDigits = 2) => {
  return new Intl.NumberFormat(lang, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: fractionDigits,
  });
};

export const currency = (value: number, showFraction = false) => {
  const regex = /,0\d*/;
  return regex.test(price(value))
    ? price(value, 0)
    : price(value, !showFraction ? 2 : 0);
};

export const uid = () => {
  return (Date.now() + Math.random()).toString(36).replace(".", "");
};

export const normalizeNote = (note: number) => {
  return note % 1 == 0 && note != 10 ? `${note}.0` : note;
};
