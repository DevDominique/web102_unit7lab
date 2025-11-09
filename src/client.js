import {createClient} from '@supabase/supabase-js'

const URL='https://dvdbzxkdyvtifalrwlzp.supabase.co'

const API_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZGJ6eGtkeXZ0aWZhbHJ3bHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2OTUwNDAsImV4cCI6MjA3ODI3MTA0MH0.3LJCdK49FkeEmOkJDaOB3jP-67-oFpqJZiKoEXB81jQ'

//create a new client instance that allow app to connect to sb proj + export it
export const supabase = createClient(URL, API_KEY)
