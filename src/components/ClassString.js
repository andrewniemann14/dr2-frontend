export default function ClassString(vehicle_class) {
  switch (vehicle_class) {
    case 'eRallyH1FwdCaps':
      return 'H1 FWD'
    case 'eRallyH2FwdCaps':
      return 'H2 FWD'
    case 'eRallyH2RwdCaps':
      return 'H2 RWD'
    case 'eRallyH3RwdCaps':
      return 'H3 RWD'
    case 'eRallyGrpB4wdCaps':
      return 'Grp B'
    case 'eRallyGrpACaps':
      return 'Grp A'
    case 'eRallyR2Caps':
      return 'R2'
    case 'eRallyNr4R4Caps':
      return 'NR4/R4'
    case 'eRallyR5Caps':
      return 'R5'
    case 'eRallyRGtCaps':
      return 'R-GT'
    default:
      return '--'
  }
}