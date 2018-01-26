import { range} from 'lodash'
const faker = require('faker')

export interface Vendor {
    id: number;
    name: string;

}

class VendorService {
    generate(): Vendor[]{
     return range(10).map((): Vendor => ({
        id: faker.random.number(),
        name: faker.company.companyName(),

     }));
    }
}

const vendorService = new VendorService()
export default vendorService
