import { Client } from 'pg'
 
const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})


async function insertData(username: string, password: string, email: string) {
    
    await client.connect(); // Ensure client connection is established
    const query = 'INSERT INTO users2 (username, password, email) VALUES ($1, $2, $3)';
    const values = [username, password, email];
    const result = await client.query(query, values);
    
    console.log(result);
}


insertData('user5@example.com', "user5pass", "user5@someone.com");

  
