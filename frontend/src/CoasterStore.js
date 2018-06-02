import { observable, action } from 'mobx'

export default class CoasterStore {
    @observable
    loading = true
    @observable
    coasters = []

    @action
    async get() {
        this.loading = true
        const coasters = await fetch(`/coasters`).then(res => res.json())
        this.coasters = coasters
        this.loading = false
    }
}