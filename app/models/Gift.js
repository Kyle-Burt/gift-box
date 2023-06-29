export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = data.id
    }

    get GTemplate() {
        return /*HTML*/ `
        <div div class="col-4" >
            <div class="card">
                <img class="card-img-top" src="${this.url}">
                <div class="card-body">
                    <p class="card-text">${this.tag}</p>
                </div>
            </div>
        </div>
    `
    }
}
