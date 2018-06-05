import React from 'react'
import { observer } from 'mobx-react'

import Coaster from './Coaster'

@observer
export default class CoasterPage extends React.Component {
    componentDidMount() {
        this.props.coasterStore.get()
    }

    render() {
        const store = this.props.coasterStore;
        return (
            <div>
                {store.loading ? (
                    <span>Loading...</span>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Waiting time</td>
                            <td>Thrill</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderCoasterRows(store)}
                        </tbody>
                    </table>
                )}
            </div>)
    }

    renderCoasterRows(coasterStore) {
        return coasterStore.coasters.map((coaster, index) => {
            return <Coaster name={coaster.name}
                            waitTime={coaster.waitTime}
                            key={index}
            />
        })
    }
}