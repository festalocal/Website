// Importing BigQuery attribute types
import { BigQueryDate, BigQueryInt, BigQueryTimestamp } from "@google-cloud/bigquery"

/**
 * Evenement model definition that matches exactly the BigQuery
 * database table/entity.
 */
export default interface Evenement {
	// PK Primary Key of the Evenement Model
	id: {
		type: string,
		required: true
	},
	titre: {
		type: string,
		required: true,
	},
	ville: {
		type: string,
		required: true,
	},
	latitude: {
		type: number,
		required: false,
	},
	longitude: {
		type: number,
		required: false,
	},
	date_debut: {
		type: BigQueryDate,
		required: true,
	}
	date_fin: {
		type: BigQueryDate,
		required: true,
	},
	description: {
		type: string,
		required: false,
	},
	type: {
		type: BigQueryInt,
		required: false,
	},
	score: {
		type: BigQueryInt,
		required: false,
	},
	ts_entree: {
		type: BigQueryTimestamp,
		required: false,
	}
}