// Imports the Google Cloud client library
// THIS IMPORT CAUSES TROUBLES FOR SOME REASON
// import { Storage, Bucket, GetFilesResponse, File } from "@google-cloud/storage";

const PUBLIC_BUCKET_NAME: string = "importation_images_drive";
const CLOUD_STORAGE_API: string = "https://storage.googleapis.com";

// Enumeration fo the possible Evenement categories form the DB.
export const enum Categories_DB {
  FESTIVAL = "festival",
  GUINGUETTE = "guinguette",
  BAL_POPULAIRE = "bal_populaire",
  FETE_DE_VILLAGE = "fete_de_village",
  FOIRE_ARTISANALE = "foire_artisanale",
  FERIA = "feria",
  FEST_NOZ = "fest-noz",
  CARNAVAL = "carnaval",
  FETE_GASTRONOMIQUE = "fete_gastronomique",
  FETE_MEDIEVALE = "fete_medievale",
  AUTRES = "autres",
}

// Gives the Google cloud storage directory prefix from the given Evenement categorie
export const getDirectoryPrefix: Function = (
  categorie: Categories_DB
): string => {
  switch (categorie) {
    case Categories_DB.FESTIVAL:
      return "Festival";

    case Categories_DB.GUINGUETTE:
      return "Guinguette";

    case Categories_DB.BAL_POPULAIRE:
      return "Bal populaire";

    case Categories_DB.FETE_DE_VILLAGE:
      return "Fete du village";

    case Categories_DB.FOIRE_ARTISANALE:
      return "Foire artisanale";

    case Categories_DB.FERIA:
      return "Feria";

    case Categories_DB.FEST_NOZ:
      return "Fest-noz";

    case Categories_DB.CARNAVAL:
      return "carnaval";

    case Categories_DB.AUTRES:
      return "Autres fetes populaires";

    default:
      return "Autres fetes populaires";
  }
};

const storage_public_files: Map<Categories_DB, string[]> = new Map();
storage_public_files.set(getDirectoryPrefix(Categories_DB.FESTIVAL), [
  "5.jpg",
  "6.jpg",
]);
storage_public_files.set(getDirectoryPrefix(Categories_DB.GUINGUETTE), [
  "1.jpg",
  "2.jpg",
]);
storage_public_files.set(getDirectoryPrefix(Categories_DB.BAL_POPULAIRE), [
  "17.jpg",
  "18.jpg",
]);
storage_public_files.set(getDirectoryPrefix(Categories_DB.FETE_DE_VILLAGE), [
  "13.jpg",
  "14.jpg",
]);
storage_public_files.set(getDirectoryPrefix(Categories_DB.FOIRE_ARTISANALE), [
  "3.jpg",
  "4.jpg",
]);
storage_public_files.set(getDirectoryPrefix(Categories_DB.FERIA), [
  "7.jpg",
  "8.jpg",
]);
storage_public_files.set(getDirectoryPrefix(Categories_DB.FEST_NOZ), [
  "10.jpg",
  "9.jpg",
]);
storage_public_files.set(getDirectoryPrefix(Categories_DB.CARNAVAL), [
  "11.jpg",
  "12.jpg",
]);
storage_public_files.set(getDirectoryPrefix(Categories_DB.AUTRES), [
  "15.jpg",
  "16.jpg",
]);

export function getAllImagesOfCategory(
  categorie: Categories_DB
): string[] | undefined {
  try {
    const categorieFileNames: string[] | undefined = storage_public_files.get(
      getDirectoryPrefix(categorie)
    );

    if (categorieFileNames !== undefined) {
      let fullPathFileNames: string[] = [];
      categorieFileNames.map((fileName: string, _: number) =>
        fullPathFileNames.push(
          `${CLOUD_STORAGE_API}/${PUBLIC_BUCKET_NAME}/${encodeURI(
            getDirectoryPrefix(categorie)
          )}/${fileName}`
        )
      );
      return fullPathFileNames;
    }
  } catch (error) {
    console.log(error);
  }
}

export function getRandomImageOfCategory(categorie: Categories_DB): string {
  try {
    // Creates a client for cloud storage of the public bucket
    // const storage = new Storage({});
    // // Getting access to cloud storage bucket
    // const bucket: Bucket = storage.bucket(PUBLIC_BUCKET_NAME);
    // const [files]: GetFilesResponse = await bucket.getFiles({
    //   prefix: getDirectoryPrefix(categorie),
    // });
    const categorieFileNames: string[] | undefined = storage_public_files.get(
      getDirectoryPrefix(categorie)
    );
    if (categorieFileNames !== undefined) {
      const chosenImage: string =
        categorieFileNames[
          Math.floor(Math.random() * categorieFileNames.length)
        ];
      return `${CLOUD_STORAGE_API}/${PUBLIC_BUCKET_NAME}/${encodeURI(
        getDirectoryPrefix(categorie)
      )}/${chosenImage}`;
    }
    return "";
  } catch (error) {
    return String(error);
  }
}
