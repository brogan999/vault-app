const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

const regions = [
  'us-east-1', 'us-west-1', 'us-west-2', 
  'eu-west-1', 'eu-central-1', 
  'ap-southeast-1', 'ap-northeast-1', 'ap-south-1',
  'sa-east-1', 'ca-central-1', 'eu-north-1'
];

const password = 'gpw6crn.xbm3mgm8XRA';
const projectRef = 'gdlffurqselelbftqhfo';

async function testConnection(name, dbUrl) {
  try {
    const { stdout, stderr } = await execAsync('npm run db:push', {
      env: { ...process.env, DATABASE_URL: dbUrl },
      timeout: 15000,
      cwd: process.cwd()
    });
    
    const output = stdout + stderr;
    if (output.includes('Pushing') || output.includes('Your database is now in sync')) {
      return { success: true, name, dbUrl, output };
    }
    return { success: false, name, error: output.includes('Tenant') ? 'Tenant error' : output.includes('Can\'t reach') ? 'Hostname not resolving' : 'Other' };
  } catch (error) {
    const output = (error.stdout || '') + (error.stderr || '');
    if (output.includes('Pushing') || output.includes('Your database is now in sync')) {
      return { success: true, name, dbUrl, output };
    }
    return { success: false, name, error: output.includes('Tenant') ? 'Tenant error' : output.includes('Can\'t reach') ? 'Hostname not resolving' : 'Connection failed' };
  }
}

async function findAllConnections() {
  const tests = [];
  
  // Test direct connection
  tests.push({ name: 'Direct (5432)', url: `postgresql://postgres:${password}@db.${projectRef}.supabase.co:5432/postgres?sslmode=require` });
  
  // Test session pooler on db hostname
  tests.push({ name: 'Session Pooler (db hostname)', url: `postgresql://postgres:${password}@db.${projectRef}.supabase.co:6543/postgres?sslmode=require` });
  
  // Test transaction pooler for each region
  for (const region of regions) {
    tests.push({ 
      name: `Transaction Pooler (${region})`, 
      url: `postgresql://postgres.${projectRef}:${password}@aws-0-${region}.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require` 
    });
    tests.push({ 
      name: `Session Pooler (${region})`, 
      url: `postgresql://postgres.${projectRef}:${password}@aws-0-${region}.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require` 
    });
  }
  
  console.log(`Testing ${tests.length} connection methods...\n`);
  
  for (const test of tests) {
    process.stdout.write(`Testing ${test.name}... `);
    const result = await testConnection(test.name, test.url);
    if (result.success) {
      console.log(`✓ SUCCESS!\n`);
      console.log('='.repeat(60));
      console.log('WORKING CONNECTION STRING:');
      console.log('='.repeat(60));
      console.log(`DATABASE_URL=${test.url}`);
      console.log('='.repeat(60));
      return test.url;
    } else {
      console.log(`✗ ${result.error}`);
    }
  }
  
  console.log('\n❌ No working connection found.');
  console.log('\nThe database appears to be paused. Please:');
  console.log('1. Go to https://supabase.com/dashboard');
  console.log('2. Open your project');
  console.log('3. Wake/unpause the database');
  console.log('4. Wait 1-2 minutes for DNS propagation');
  console.log('5. Run this script again');
  
  return null;
}

findAllConnections().then(url => {
  if (url) {
    console.log('\nUpdating .env.local...');
    const fs = require('fs');
    const envPath = '.env.local';
    let content = fs.readFileSync(envPath, 'utf-8');
    content = content.replace(
      /DATABASE_URL=.*/,
      `DATABASE_URL=${url}`
    );
    fs.writeFileSync(envPath, content);
    console.log('✓ .env.local updated!');
    console.log('\nTry running: npm run db:push');
    process.exit(0);
  } else {
    process.exit(1);
  }
});
