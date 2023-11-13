const huizen = [];

function maakHuis() {
    const inwoners = document.getElementById('inwoners').value;
    const straatNaam = document.getElementById('straatNaam').value;
    const nummer = document.getElementById('nummer').value;
    const postcode = document.getElementById('postcode').value;
    const waarde = document.getElementById('waarde').value;
    const oppervlakte = document.getElementById('oppervlakte').value;
    const bouwjaar = document.getElementById('bouwjaar').value;

    const nieuwHuis = new Huis(inwoners, straatNaam, nummer, postcode, waarde, oppervlakte, bouwjaar);
    huizen.push(nieuwHuis);
    console.log(nieuwHuis); // Hier kun je bijvoorbeeld het nieuwe 'Huis'-object gebruiken.
}