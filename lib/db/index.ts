import {neon, neonConfig} from "@neondatabase/serverless"
import {drizzle} from "drizzle-orm/neon-http"

neonConfig.fetchConnectionCache=true;

if(!process.env.NEXT_CONNECT_WITH_NEONDB)
{
    throw new Error("data base is not connected ");
}

const sql=neon(process.env.NEXT_CONNECT_WITH_NEONDB);

export const db= drizzle(sql); 
