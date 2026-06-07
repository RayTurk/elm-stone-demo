export interface Service {
  id: string
  name: string
  unit: string
  unitPrice: number
}

export const services: Service[] = [
  { id: 'shrub-trim',      name: 'Shrub Trimming',          unit: 'per shrub',     unitPrice: 35  },
  { id: 'tree-trim-sm',    name: 'Tree Trimming (Small)',    unit: 'per tree',      unitPrice: 120 },
  { id: 'tree-trim-md',    name: 'Tree Trimming (Medium)',   unit: 'per tree',      unitPrice: 250 },
  { id: 'tree-trim-lg',    name: 'Tree Trimming (Large)',    unit: 'per tree',      unitPrice: 450 },
  { id: 'tree-removal-sm', name: 'Tree Removal (Small)',     unit: 'per tree',      unitPrice: 300 },
  { id: 'tree-removal-lg', name: 'Tree Removal (Large)',     unit: 'per tree',      unitPrice: 800 },
  { id: 'mulch',           name: 'Mulch Installation',       unit: 'per cu. yd',    unitPrice: 65  },
  { id: 'sod',             name: 'Sod Installation',         unit: 'per 100 sq ft', unitPrice: 85  },
  { id: 'cleanup',         name: 'Spring / Fall Cleanup',    unit: 'flat rate',     unitPrice: 175 },
  { id: 'maintenance',     name: 'Ongoing Maintenance',      unit: 'per month',     unitPrice: 150 },
]
