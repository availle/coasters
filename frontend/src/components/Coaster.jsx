import React from 'react'

export default class Coaster extends React.Component {
    render() {
        const { name, waitTime, thrill } = this.props

        return (
            <tr className='coaster'>
                <td className='coaster-name'>{name}</td>
                <td className='coaster-time'>{waitTime}</td>
                <td className='coaster-thrill'>{thrill}</td>
            </tr>
        )
    }
}