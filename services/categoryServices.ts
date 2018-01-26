import { range} from 'lodash'
const faker = require('faker')

export interface Category {
    id: number
    name: string
}

class CategoryService {
    generate(): Category[]{
     return range(10).map((): Category => ({
        id: faker.random.number(),
        name: faker.commerce.product()
     }))
    }
}

const catelogyService = new CategoryService()
export default catelogyService
