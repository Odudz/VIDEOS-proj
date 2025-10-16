import { randomUUID } from "crypto";
import { sql } from "./sql";
import bcrypt from "bcrypt";

export class DatabePostgres{
    async list(){
        try{
            const result = await sql` SELECT * FROM users;`
            return result;
        }catch(err){
            console.log("Erro ao listar usuários: ", err);
            return[];
        }
    }

    async create(user){
        const userId = randomUUID();
        const{name, email, password} = user;
        const hashedPassword = await bcrypt.hash(password, 10);

        await sql`
            INSERT INTO users(id,name,email,password) VALUES ($(userId), $(name), $(email), $(hashedPassword));
        `;
    }

    async findByEmail(email){
        const result = await sql `
        SELECT * FROM 
        `
    }
}
