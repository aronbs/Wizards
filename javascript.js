const wizards = {
    harry: {
        firstName:'Harry',
        lastName: 'Potter',
        hairColor: 'black',
    },
    hermione: {
        firstName: 'Hermione',
        lastName: 'Granger',
        hairColor: 'brown',
    },
    ron: {
        firstName: 'Ron',
        lastName: 'Weasley',
        hairColor: 'red',
    },
}







const activateWizards = () => {
    const harry = document.getElementById('harry');
    harry.style.color = wizards.harry.hairColor;
    harry.innerHTML = (wizards.harry.firstName +  " " + wizards.harry.lastName);

    const hermione = document.getElementById('hermione');
    hermione.style.color = wizards.hermione.hairColor;
    hermione.innerHTML = (wizards.hermione.firstName +  " " + wizards.hermione.lastName);

    const ron = document.getElementById('ron');
    ron.style.color = wizards.ron.hairColor;
    ron.innerHTML = (wizards.ron.firstName +  " " + wizards.ron.lastName);
    
    }



    const harrybtn = () => {
        const harry = document.getElementById('harry');
        harry.style.color = wizards.harry.hairColor;
        harry.innerHTML = (wizards.harry.firstName +  " " + wizards.harry.lastName);
        
      }

    const hermionebtn = () => {
        const hermione = document.getElementById('hermione');
        hermione.style.color = wizards.hermione.hairColor;
        hermione.innerHTML = (wizards.hermione.firstName +  " " + wizards.hermione.lastName);
    }

    const ronbtn = () => {
        const ron = document.getElementById('ron');
        ron.style.color = wizards.ron.hairColor;
        ron.innerHTML = (wizards.ron.firstName +  " " + wizards.ron.lastName);
    }