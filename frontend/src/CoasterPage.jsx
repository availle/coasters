import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class CoasterPage extends React.Component {
    componentDidMount() {
         this.props.coasterStore.get()
    }

    render() {
        const store = this.props.coasterStore;
        return (
            <div>
            { store.loading ? (
                <span>Loading...</span>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Waiting time</td>
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
            return <tr className='coaster' key={index}>
                <td>{coaster.name}</td>
                <td>{coaster.waitTime}</td>
            </tr>
        })
    }
}