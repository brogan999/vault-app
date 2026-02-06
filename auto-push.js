const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

let attempt = 0;
const maxAttempts = Infinity; // Keep trying indefinitely
const delay = 10000; // 10 seconds between attempts

async function tryPush() {
  attempt++;
  const timestamp = new Date().toLocaleTimeString();
  process.stdout.write(`[${timestamp}] Attempt ${attempt}: `);
  
  try {
    const { stdout, stderr } = await execAsync('npm run db:push', {
      cwd: process.cwd(),
      timeout: 30000
    });
    
    const output = stdout + stderr;
    
    if (output.includes('Pushing') || output.includes('Your database is now in sync')) {
      console.log('✓ SUCCESS! Database schema pushed.');
      console.log('\n' + '='.repeat(60));
      console.log(output);
      console.log('='.repeat(60));
      process.exit(0);
    }
    
    if (output.includes("Can't reach") || output.includes('P1001')) {
      console.log('Database still paused, retrying in 10 seconds...');
      console.log('💡 Tip: Wake your database at https://supabase.com/dashboard');
    } else {
      console.log('Other error, retrying...');
      console.log(output.substring(0, 200));
    }
    
  } catch (error) {
    const output = (error.stdout || '') + (error.stderr || '');
    
    if (output.includes('Pushing') || output.includes('Your database is now in sync')) {
      console.log('✓ SUCCESS! Database schema pushed.');
      console.log('\n' + '='.repeat(60));
      console.log(output);
      console.log('='.repeat(60));
      process.exit(0);
    }
    
    if (output.includes("Can't reach") || output.includes('P1001')) {
      console.log('Database still paused, retrying in 10 seconds...');
      console.log('💡 Tip: Wake your database at https://supabase.com/dashboard');
    } else {
      console.log('Error occurred, retrying...');
      console.log(output.substring(0, 200));
    }
  }
  
  // Wait before next attempt
  await new Promise(resolve => setTimeout(resolve, delay));
  return tryPush();
}

console.log('🔄 Starting automatic database push retry...');
console.log('This will keep trying until the database is awake and connected.');
console.log('Wake your database at: https://supabase.com/dashboard\n');
tryPush();
