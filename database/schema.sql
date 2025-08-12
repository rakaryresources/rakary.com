-- Create contact_us table
CREATE TABLE IF NOT EXISTS contact_us (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  preferred_contact_method VARCHAR(20) DEFAULT 'email',
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create book_service table
CREATE TABLE IF NOT EXISTS book_service (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company_name VARCHAR(255),
  service_type VARCHAR(100) NOT NULL,
  budget_range VARCHAR(50),
  project_timeline VARCHAR(50),
  preferred_contact_method VARCHAR(20) DEFAULT 'email',
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_us ENABLE ROW LEVEL SECURITY;
ALTER TABLE book_service ENABLE ROW LEVEL SECURITY;

-- Create policies for inserting data (allow anyone to insert)
CREATE POLICY "Allow insert for contact_us" ON contact_us
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow insert for book_service" ON book_service
  FOR INSERT WITH CHECK (true);

-- Create policies for reading data (only authenticated users can read)
CREATE POLICY "Allow read for authenticated users" ON contact_us
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow read for authenticated users on book_service" ON book_service
  FOR SELECT USING (auth.role() = 'authenticated');
