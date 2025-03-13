import { createClient } from '@supabase/supabase-js';


const apiURL = 'https://wooefzhjkptlledfthqy.supabase.co'
const apiKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvb2Vmemhqa3B0bGxlZGZ0aHF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTY4MTEsImV4cCI6MjA1NzQ3MjgxMX0.rnJ2rfEVyBiXrbZgmfUENhMLrDXA3LcrfJkbybNimfo'


const supabase = createClient(
    apiURL,
    apiKEY
);

export default supabase;