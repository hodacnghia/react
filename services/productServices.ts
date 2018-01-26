import { range} from 'lodash'
const faker = require('faker')
import categoryService from './categoryServices'
import vendorService from './vendorServices'

export interface Product {
    id: number,
    name: string,
    unitcost: number,
    category: string,
    vendor: string,
}
const categories = categoryService.generate()
const vendors = vendorService.generate()
class ProductService {
     generate(): Product[] {
    //  return range(9).map((): Product => ({
    //     id: faker.random.number(),
    //     name: faker.company.companyName(),
    //     unitcost: faker.commerce.price(),
    //     category: categories[0].name,
    //     vendor: vendors[0].name,
    //  }))
    // }
    return [
        {id: 1,
            name: 'Xe',
            unitcost: 450,
            category: 'ABC',
            vendor: 'ABC'
        },
        {id: 2,
            name: 'Điện Thoại',
            unitcost: 450,
            category: 'ABC',
            vendor: 'ABC'
        },
        {id: 3,
            name: 'Ao Quan',
            unitcost: 450,
            category: 'ABC',
            vendor: 'ABC'
        },
        {id: 4,
            name: 'Nha',
            unitcost: 450,
            category: 'ABC',
            vendor: 'ABC'
        }
    ]
}
}

const productService = new ProductService()
export default productService
