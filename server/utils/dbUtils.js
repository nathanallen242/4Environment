import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import GJV from 'geojson-validation';
import geojsonVt from 'geojson-vt';

dotenv.config();

const url = process.env.MONGODB_URL;
const dbName = 'environment';
const collectionName = 'points';
const client = new MongoClient(url);

export const fetchDocuments = async () => {
    await client.connect();
    try {
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const cursor = collection.find({});

        let features = await cursor.toArray(); // Get all documents as an array

        // Transform documents into GeoJSON features if necessary
        const geoJsonFeatures = features.map(doc => ({
            type: 'Feature',
            properties: doc.properties, // Adjust according to your document structure
            geometry: doc.geometry // Adjust according to your document structure
        }));

        const geoJson = {
            type: 'FeatureCollection',
            features: geoJsonFeatures,
        };

        // Validate the GeoJSON structure
        if (GJV.valid(geoJson)) {
            return geoJson;
        } else {
            console.error("Invalid GeoJSON object");
            throw new Error("Generated GeoJSON is not valid.");
        }
    } catch (err) {
        console.error("Error fetching documents:", err);
        throw err;
    } finally {
        await client.close();
    }
};
