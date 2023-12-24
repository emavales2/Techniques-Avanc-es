import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor(params){
        super(params)
        this.setTitle('National Park')
    }

    async getHtml() {

        async function getData(url) {
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/data/caParks.json');
        // This console.logs the array
        console.log(data.data);

        // For some reason, id picks the property "parkCode", which was what was set for the url slug       
        // const park_code = this.params.id;
        const parkData = data.data;
        console.log(parkData);
        

        // const park_code = this.params.parkCode;
        // console.log(park_code);

        // const park = data.find(item => item.id === park_code);
        const park = parkData.find(item => item.parkCode === this.params.parkCode);
        console.log(park);

        const activitiesList = park.activities.map(activity => activity.name).join(', ');
        console.log('Activities List:', activitiesList);

        // const imagesList = park.images.map(image => `<img src="${image.url}" alt="${image.altText}" />`).join(' ');
        // console.log('Image List:', imagesList);
        console.log(park.images);

        console.log(`Number of images: ${park.images.length}`);
        park.images.slice(1).forEach((image, index) => {
            console.log(`Processing image ${index + 2}: ${image.url}`);
        });
        
        return `   
            
                <section>                   
                    <picture  class="main_pic">
                        <img src="${park.images[0].url}" alt="${park.images[0].altText}" />
                    </picture>   
                    <h1 class="park_title">${park.fullName}Park</h1>                
                </section>

                <section>
                    <h4>${park.description}</h4>
                    <h4>Activities : ${activitiesList}</h4>

                </section>

                <section class="pics">                    
                    ${park.images.slice(1).map((image, index) => {
                        console.log(`Processing image ${index + 2}: ${image.url}`);
                        return `<picture class="pic_small"><img src="${image.url}"/></picture>`;
                    }).join('')}                    
                </section>
            
            `
    }
}


// for(let i in data.data) {
//     listParks +=`<li><a href="/park-view/${data.data[i]['id']}" data-link>${data.data[i]['fullName']}</a></li>`           
// }