export function CountryStringLong(country) {
  switch (country) {
    case 'eArgentina':
    case 'eLngArgentina':
      return 'Argentina'
    case 'eAustralia':
    case 'eLngAustralia':
      return 'Australia'
    case 'eNewZealand':
    case 'eLngNewZealand':
      return 'New Zealand'
    case 'ePoland':
    case 'eLngPoland':
      return 'Poland'
    case 'eSpain':
    case 'eLngSpain':
      return 'Spain'
    case 'eUsa':
    case 'eLngUsa':
      return 'USA'
    default:
      return '--'
  }
}

export function CountryStringShort(country) {
  switch (country) {
    case 'eArgentina':
    case 'eLngArgentina':
      return 'AR'
    case 'eAustralia':
    case 'eLngAustralia':
      return 'AU'
    case 'eNewZealand':
    case 'eLngNewZealand':
      return 'NZ'
    case 'ePoland':
    case 'eLngPoland':
      return 'PL'
    case 'eSpain':
    case 'eLngSpain':
      return 'ES'
    case 'eUsa':
    case 'eLngUsa':
      return 'US'
    default:
      return '--'
  }
}