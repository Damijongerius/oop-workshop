class Huis {

    constructor(inwoners, straatNaam, nummer, postcode, Waarde, Oppervlakte, bouwjaar) {
        this._inwoners = inwoners
        this._straatNaam = straatNaam;
        this._nummer = nummer;
        this._postcode = postcode;
        this._Waarde = Waarde;
        this._Oppervlakte = Oppervlakte;
        this._bouwjaar = bouwjaar;
    }

    get inwoners() {
        return this._inwoners;
    }

    get straatNaam() {
        return this._straatNaam;
    }

    get nummer() {
        return this._nummer;
    }

    get postcode() {
        return this._postcode;
    }

    get Waarde() {
        return this._Waarde;
    }

    get Oppervlakte() {
        return this._Oppervlakte;
    }

    get bouwjaar() {
        return this._bouwjaar;
    }
}