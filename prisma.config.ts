import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'prisma/config'

// Manually parse .env file
function loadEnvFile(filePath: string): boolean {
  try {
    if (!existsSync(filePath)) {
      return false
    }
    const content = readFileSync(filePath, 'utf-8')
    const lines = content.split(/\r?\n/) // Handle both \n and \r\n
    
    for (const line of lines) {
      const trimmed = line.trim()
      // Skip comments and empty lines
      if (!trimmed || trimmed.startsWith('#')) continue
      
      // Match KEY=VALUE pattern
      const equalIndex = trimmed.indexOf('=')
      if (equalIndex === -1) continue
      
      const key = trimmed.substring(0, equalIndex).trim()
      let value = trimmed.substring(equalIndex + 1).trim()
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      
      // Set the value
      process.env[key] = value
    }
    return true
  } catch (error) {
    return false
  }
}

// Try .env.local first, then .env
const cwd = process.cwd()
const envLocalPath = resolve(cwd, '.env.local')
const envPath = resolve(cwd, '.env')

loadEnvFile(envLocalPath)
if (!process.env.DATABASE_URL) {
  loadEnvFile(envPath)
}

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error(`DATABASE_URL environment variable is not set. Checked: ${envLocalPath} and ${envPath}`)
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: databaseUrl
  }
})
