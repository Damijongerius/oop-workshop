class Huis {
    constructor(inwoners, straatNaam, nummer, postcode, waarde, oppervlakte, bouwjaar) {
      this.inwoners = inwoners;
      this.straatNaam = straatNaam;
      this.nummer = nummer;
      this.postcode = postcode;
      this.waarde = waarde;
      this.oppervlakte = oppervlakte;
      this.bouwjaar = bouwjaar;
    }
  
    concatenateDetails() {
      return `${this.postcode} ${this.nummer} ${this.straatNaam}`;
    }
  
    calculateHouseValue() {
      return this.bouwjaar * this.oppervlakte;
    }
  }
  
  const huisArray = [];
  
  function createHuis() {
    const inwoners = document.getElementById('inwoners').value;
    const straatNaam = document.getElementById('straatNaam').value;
    const nummer = document.getElementById('nummer').value;
    const postcode = document.getElementById('postcode').value;
    const waarde = document.getElementById('waarde').value;
    const oppervlakte = document.getElementById('oppervlakte').value;
    const bouwjaar = document.getElementById('bouwjaar').value;
  
    const newHuis = new Huis(inwoners, straatNaam, nummer, postcode, waarde, oppervlakte, bouwjaar);
    huisArray.push(newHuis);
  
    updateHuisList();
  
    document.getElementById('huisForm').reset();
  }
  
  function updateHuisList() {
    const huisList = document.getElementById('huisList');
    huisList.innerHTML = '';
  
    huisArray.forEach((huis, index) => {
      const listItem = document.createElement('li');
  
      // Display Huis details with the small class
      listItem.innerHTML = `Inwoners: <span class="small">${huis.inwoners}</span>, Straat: <span class="small">${huis.straatNaam}</span>, Nummer: <span class="small">${huis.nummer}</span>, Postcode: <span class="small">${huis.postcode}</span>, Waarde: <span class="small">${huis.waarde}</span>, Oppervlakte: <span class="small">${huis.oppervlakte}</span>, Bouwjaar: <span class="small">${huis.bouwjaar}</span>`;
  
      const concatButton = document.createElement('button');
      concatButton.textContent = 'Volledige string';
      concatButton.onclick = () => alert(`volledige string: ${huis.concatenateDetails()}`);
  
      const calculateValueButton = document.createElement('button');
      calculateValueButton.textContent = 'Huis waarde';
      calculateValueButton.onclick = () => alert(`Berekende huis waarde: ${huis.calculateHouseValue()}`);
  
      listItem.appendChild(concatButton);
      listItem.appendChild(calculateValueButton);
  
      huisList.appendChild(listItem);
    });
  }