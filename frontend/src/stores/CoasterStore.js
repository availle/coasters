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

        this.coasters = await coasterResponse.json()

        this.loading = false
    }
}