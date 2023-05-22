class Author {
    private _avatarUrl: string;
    private _name: string;

    constructor(avatarUrl: string, name: string) {
        this._avatarUrl = avatarUrl;
        this._name = name;
    }

    avatarUrl(): string {
        return this._avatarUrl;
    }

    name(): string {
        return this._name;
    }

    formatName(): string {
        return 'avatarUrl: ' + this._avatarUrl + ', name: ' + this._name;
    } 
}

export default Author;