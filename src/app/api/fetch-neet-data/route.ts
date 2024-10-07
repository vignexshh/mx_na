// app/api/fetch-neet-data/route.ts

import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";

export async function GET() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database("neet_2024.db", sqlite3.OPEN_READONLY, (err) => {
      if (err) {
        reject(err);
      }
    });

    const query = "SELECT * FROM NTR_UNIVERSITY_AP_ROUND_01"; // Modify this as necessary
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(NextResponse.json(rows));
      }
    });

    db.close();
  });
}
