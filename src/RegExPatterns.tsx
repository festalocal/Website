export const CITY_TITLE_REGEX: string =
  "^s*[a-zA-Z]{1}[0-9a-zA-Z][0-9a-zA-Z '-.=#/]*$";

// Format DD-MM-YYYY
export const DATE_REGEX: string =
  "^(0[1-9]|1\\d|2[0-8]|29(?=-\\d\\d-(?!1[01345789]00|2[1235679]00)\\d\\d(?:[02468][048]|[13579][26]))|30(?!-02)|31(?=-0[13578]|-1[02]))-(0[1-9]|1[0-2])-([12]\\d{3})$";

export default CITY_TITLE_REGEX;
