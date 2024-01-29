import { PrrsmaClient } from '@prisma/client';

const prisma = new PrrsmaClient({
    //Log the query on console what SQL runs behind when every Prisma Function call
    log: ["query"]
})
export default prisma;