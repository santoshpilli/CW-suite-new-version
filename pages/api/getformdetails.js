
import axios from 'axios';
export default async function handler(req, res) {
    const { slug } = req.query;

    const finaldata = {
        database: 'cw_sites',
        collection: 'forms',
        dataSource: 'Cluster0',
        filter: {
            site_id: process.env.SITE_ID,
            //   slug1: slug
        }
    };

    try {
        const axiosResponse = await axios.post(`${process.env.MONGO_DB_URL}/find`, finaldata, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': `${process.env.MONGO_DB_APIKEY}`
            },
        });
        res.status(200).json(axiosResponse.data);
    } catch (error) {
        console.log('catch error', error);

        res.status(500).json({ error: 'Failed to submit data: ' + error.message });
    }
}