import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import Panel from '../../../components/panel/Panel'
import Categories, {Category} from '../../../services/categoryServices'
import Vendors, {Vendor} from '../../../services/vendorServices'
import Feature from './Features'
import Unicost from './Unitcost'
const categories = Categories.generate()
const vendors = Vendors.generate()
const Section = styled.div`

    width:20%;
    float:left;

`
interface IState {
    categories: Category[],
    vendors: Vendor[],
}
class Sidebar extends React.Component<{}, IState> {
    state = {
        categories: categories,
        vendors: vendors
    }
    render() {
        const {categories, vendors } = this.state
        return (
                <Section>
                    <Panel title='Category' data={this.state.categories}/>
                    <Panel title='Vendor' data={this.state.vendors}/>
                    <Unicost/>
                    <Feature/>
                </Section>
        )
    }
}
export default Sidebar
