import type { Project } from '../domain/entities/Project'

export const getProjects = (): Project[] => [{
    id: '01',
    title: 'Fixed Asset Inventory',
    version: 'v1.0',
    architecture: 'MVVM',
    tech: ['Kotlin', 'Jet Compose', 'Room'],
    star: {
        s: 'Manual Inventory take time to manage asset records',
        t: 'Manage Assets in mobile handling',
        a: 'Implemented asset',
        r: 'Able to record the asset accurately and easier to navigate'
    }
}]