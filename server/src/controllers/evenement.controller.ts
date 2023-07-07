// Importing Types for HTTP Requets
import { Request, Response } from 'express';
// import the Evenement model
import Evenement from '../models/evenement.model';
// Importing BigQuery connection script
import { bigquery, datasetId } from '../connectBigQuery';

'use-strict';

/**
 * Gets all the Evenements from the database
 * @param { Request } API GET Request
 * @param { Response } API Response of the GET Request
 * @returns { JSON[] } Array of all JSON Evenement objects
 */
export const getAllEvenements = async (req: Request, res: Response) => {
    try {
        const queryStatement: string = `SELECT * FROM 
            ${bigquery.projectId}.${datasetId}.evenement`;
        const [evenements] = await bigquery.query(queryStatement);
        res.status(200).send(JSON.stringify(evenements));
    } catch (error) {
        res.status(500).send({error: 'Database error when querying'});
    }
};