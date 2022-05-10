export function CountryStringLong(country) {
  switch (country) {
    case 'eLngArgentina':
      return 'Argentina'
    case 'eLngAustralia':
      return 'Australia'
    case 'eLngNewZealand':
      return 'New Zealand'
    case 'eLngPoland':
      return 'Poland'
    case 'eLngSpain':
      return 'Spain'
    case 'eLngUsa':
      return 'USA'
    default:
      return '--'
  }
}

export function CountryStringShort(country) {
  switch (country) {
    case 'eLngArgentina':
      return 'AR'
    case 'eLngAustralia':
      return 'AU'
    case 'eLngNewZealand':
      return 'NZ'
    case 'eLngPoland':
      return 'PL'
    case 'eLngSpain':
      return 'ES'
    case 'eLngUsa':
      return 'US'
    default:
      return '--'
  }
}