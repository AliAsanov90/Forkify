import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    
    async getResults() {
        const key = 'ac2d6ec0289731d4a9ea96a4cd55f976';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(res.data);
        }
        catch(error) {
            alert(error);
        }
    }
}


