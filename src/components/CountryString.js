export function CountryStringLong(country) {
  switch (country) {
    case 'eArgentina':
      return 'Argentina'
    case 'eAustralia':
      return 'Australia'
    case 'eNewZealand':
      return 'New Zealand'
    case 'ePoland':
      return 'Poland'
    case 'eSpain':
      return 'Spain'
    case 'eUsa':
      return 'USA'
    default:
      return '--'
  }
}

export function CountryStringShort(country) {
  switch (country) {
    case 'eArgentina':
      return 'AR'
    case 'eAustralia':
      return 'AU'
    case 'eNewZealand':
      return 'NZ'
    case 'ePoland':
      return 'PL'
    case 'eSpain':
      return 'ES'
    case 'eUsa':
      return 'US'
    default:
      return '--'
  }
}