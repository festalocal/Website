import { BigQuery } from "@google-cloud/bigquery";

/**
 * @description This script connects the backend to the
 * Google Cloud Platform (GCP) BigQuery database.
 * @requires { JSON file } It uses a service account connection
 * JSON Key file, please specify the file path for the JSON connection
 * API key file.
 */

export const bigquery: BigQuery = new BigQuery({
  projectId: "festalocal", // Specify the projectId BigQuery database
  keyFilename: "../server/BigQueryCredentials.json",
});

export const datasetId: string = 'festa';
