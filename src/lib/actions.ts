'use server'
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';


// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = Number(process.env.NEXT_PUBLIC_SHEET_ID);
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY =
  (process.env.GOOGLE_SERVICE_PRIVATE_KEY as string).replace(/\\n/g, '\n');

const serviceAccountAuth = new JWT({
  email: GOOGLE_CLIENT_EMAIL,
  key: GOOGLE_SERVICE_PRIVATE_KEY,
  scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
  ],
});

const doc = new GoogleSpreadsheet(SPREADSHEET_ID as string, serviceAccountAuth);

// Append Function
export const saveToSpreadsheet = async (row: string[] | Record<string, string>) => {
  console.log('saveToSpreadsheet')
  try {
    // loads document properties and worksheets
    await doc.loadInfo();
    console.log(doc.title);

    const sheet = doc.sheetsByIndex[SHEET_ID];
    console.log(sheet.title);
    console.log(sheet.rowCount);
    const r = await sheet.addRow(row);
    console.log('result', r)
  } catch (e) {
    console.error('Error: ', e);
  }
};
