//API KEY
const myKey = "831aec4081bca1449d2087b72f029de4";
        
       //Access to html elements
        const input = document.querySelector('input');
        const button = document.querySelector('button');
        const name = document.querySelector('.name');
        const degree = document.querySelector('.degree');
        const desc = document.querySelector('.description');
        const min = document.querySelector('.min');
        const max = document.querySelector('.max');

//click event to fetch and display the data fro the api
        button.onclick = function () {
            let myItem = input.value;
            input.value = '';
       // connection to the api
             fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myItem}&units=metric&appid=${myKey}`)
                 .then(response => response.json())
                 .then(data => {
                 
                 //fetching the data from the api
                     var nameValue = data['name'];
                     var tempValue = data['main']['temp'];
                     var descValue = data['weather'][0]['description'];
                     var min_temp = data['main']['temp_min'];
                     var max_temp = data['main']['temp_max'];
                 //Displaying the data from the api
                     name.innerHTML = nameValue;
                     degree.innerHTML = tempValue;
                     desc.innerHTML = descValue;
                     min.innerHTML = min_temp;
                     max.innerHTML = max_temp;
                     console.log(data);
                 });

            
        }