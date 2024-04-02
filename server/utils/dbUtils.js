import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

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

        // Create and return a GeoJSON FeatureCollection object
        return {
            type: 'FeatureCollection',
            features: geoJsonFeatures,
        };
    } catch (err) {
        console.error("Error fetching documents:", err);
        throw err; // Rethrow the error to be handled by the caller
    } finally {
        await client.close();
    }
};
