-- Hapus tabel lama jika ada agar tidak bentrok
DROP TABLE IF EXISTS public.channels CASCADE;
DROP TABLE IF EXISTS public.movies CASCADE;

-- Buat tabel channels
CREATE TABLE public.channels (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT DEFAULT 'Lainnya',
    logo TEXT,
    url TEXT NOT NULL,
    type TEXT DEFAULT 'hls',
    country TEXT DEFAULT 'ID',
    drm JSONB DEFAULT NULL,
    headers JSONB DEFAULT NULL,
    "tvgId" TEXT DEFAULT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Buat tabel movies
CREATE TABLE public.movies (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    poster TEXT,
    backdrop TEXT,
    type TEXT DEFAULT 'hls',
    genre TEXT[] DEFAULT '{}',
    year INTEGER,
    duration TEXT,
    quality TEXT DEFAULT 'HD',
    rating NUMERIC DEFAULT 0,
    description TEXT,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Atur Row Level Security (RLS)
-- Untuk publik: Izinkan semua orang membaca (SELECT)
ALTER TABLE public.channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.movies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access for channels" ON public.channels FOR SELECT USING (true);
CREATE POLICY "Allow public read access for movies" ON public.movies FOR SELECT USING (true);

-- Untuk Admin (karena tidak pakai sistem user, kita izinkan insert/update/delete sementara dari anon key jika dipanggil dari frontend admin)
-- Perhatian: Di sistem production sejati, Anda harus membatasi ini pakai Supabase Auth.
CREATE POLICY "Allow anon insert channels" ON public.channels FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon update channels" ON public.channels FOR UPDATE USING (true);
CREATE POLICY "Allow anon delete channels" ON public.channels FOR DELETE USING (true);

CREATE POLICY "Allow anon insert movies" ON public.movies FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon update movies" ON public.movies FOR UPDATE USING (true);
CREATE POLICY "Allow anon delete movies" ON public.movies FOR DELETE USING (true);
