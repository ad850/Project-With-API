const scenter = document.getElementById("scenter");

const butt = document.getElementById("butt");

const grabjoke = async () => {

    try {
        const Header = {

            headers: {


                Accept: "application/json"
            }


        }



        const resp = await fetch('https://icanhazdadjoke.com?', Header)

        const data = await resp.json()

        scenter.innerHTML = data.joke;
    } catch (err) {

        console.log(err);
    }

}

butt.addEventListener('click', grabjoke)





























// const request = new XMLHttpRequest();


// request.open('GET', "https://restcountries.eu/rest/v2/name/nepal");

// request.send();


// request.addEventListener('load', function () {



//     const [data] = JSON.parse(this.responseText);



//     const htmlData =

//         <img src="${data.flag}" />





// })






