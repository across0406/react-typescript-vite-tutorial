class Url {
    private _urlString: string;

    constructor(urlString: string) {
        this._urlString = urlString;
    }

    formatUrl(): string {
        return this._urlString;
    } 
}

export default Url;