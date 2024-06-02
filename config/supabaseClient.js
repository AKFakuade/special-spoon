import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aohmcnotmqelwkfeuwbt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvaG1jbm90bXFlbHdrZmV1d2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMjM1MTksImV4cCI6MjAzMjU5OTUxOX0.OtO4aotas2QbjCh_7m8OnBILganIv84gqinfXbu6n0c';

const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase

