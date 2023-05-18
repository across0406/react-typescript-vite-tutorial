class Name {
    private _first: string;
    private _last: string;

    constructor(first: string, last: string) {
        this._first = first;
        this._last = last;
    }

    formatName(): string {
        return this._first + ' ' + this._last;
    } 
}

export default Name;