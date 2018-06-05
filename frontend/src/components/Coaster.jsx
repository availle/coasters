import React from 'React'

export default class Coaster extends React.Component {
    render() {
        const { name, waitTime } = this.props

        return (
            <tr className='coaster'>
                <td className='coaster-name'>{name}</td>
                <td className='coaster-time'>{waitTime}</td>
            </tr>
        )
    }
}