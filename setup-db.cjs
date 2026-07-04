const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const connectionString = 'postgresql://postgres:akucintaTuhanYesus@db.drmyvhurahwlqifnybcn.supabase.co:5432/postgres';

async function setup() {
  const client = new Client({
    connectionString,
  });

  try {
    await client.connect();
    console.log('Connected to Supabase PostgreSQL!');

    const sql = fs.readFileSync(path.join(__dirname, 'supabase-schema.sql'), 'utf8');
    
    console.log('Executing schema...');
    await client.query(sql);
    console.log('Schema executed successfully!');
    
  } catch (err) {
    console.error('Error executing schema:', err);
  } finally {
    await client.end();
  }
}

setup();
