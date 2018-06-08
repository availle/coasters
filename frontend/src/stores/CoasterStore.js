import { observable, action } from 'mobx'

export default class CoasterStore {
    @observable
    loading = true

    @observable
    coasters = [ ]

    @action
    async get() {
        this.loading = true

        const coasterResponse = await fetch(`http://localhost:3000/coasters`)

        const coasters = await coasterResponse.json()
        this.coasters = coasters.sort((a,b) => (b.thrill - a.thrill))
        this.loading = false
    }
}