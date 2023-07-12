// Importing Types for HTTP Requets
import { Request, Response } from 'express';
// import the Evenement model
import Evenement from '../models/evenement.model';
// Importing BigQuery connection script
import { bigquery, datasetId } from '../connectBigQuery';
import { QueryRowsResponse } from '@google-cloud/bigquery';

'use-strict';

/**
 * Gets all the Evenements from the database
 * @param { Request } req GET Request
 * @param { Response } res Response of the GET Request
 * @send { JSON[] } Array of all JSON Evenement objects
 */
export const getAllEvenements = async (req: Request, res: Response) => {
    try {
        const queryStatement: string = `SELECT id, titre, ville, date_debut, date_fin, description FROM 
            ${bigquery.projectId}.${datasetId}.evenement`;
        const [evenements]: QueryRowsResponse = await bigquery.query(queryStatement);
        res.status(200).send(JSON.stringify(evenements));
    } catch (error) {
        res.status(500).send({error: 'Database error when querying'});
    }
};

/**
 * Gets the Evenement of the given Id from the database
 * @param { Request } req GET Request
 * @param { Response } API Response of the GET Request
 */
export const getEvenementOfId = async  (req: Request, res: Response) => {
    try {
        const queryStatement: string = `SELECT id, titre, ville, date_debut, date_fin, description FROM
            ${bigquery.projectId}.${datasetId}.evenement
            WHERE id = "${req.params.id}"`;
        const evenement: QueryRowsResponse = await bigquery.query(queryStatement);
        if(evenement[0].length > 0) {
            res.status(200).send(JSON.stringify(evenement[0][0])) 
        } else {
            res.status(400).send({error: `No Evenement found of id : ${req.params.id}}`});
        }
    } catch (error) {
        res.status(500).send({error: `Database error when trying to fetch for Evenement of Id:${req.params.id}, maybe couldn't found this Id`})
    }
}