/**
 * Default Channels
 * 
 * URL di sini menggunakan stream demo publik yang benar-benar bisa diputar.
 * 
 * Untuk menambah channel TV Indonesia Anda:
 *  1. Buka Admin Panel → Kelola Channel → Tambah Channel
 *  2. ATAU Admin Panel → Import Playlist → Paste teks M3U Anda
 *  3. ATAU masukkan URL M3U di input sidebar kiri bawah
 */

export const channels = [
  {
    id: 1,
    name: "Demo Stream (HLS)",
    category: "Demo",
    logo: "",
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    type: "hls",
    country: "US",
    drm: null,
  },
  {
    id: 2,
    name: "Demo Stream (DASH)",
    category: "Demo",
    logo: "",
    url: "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd",
    type: "dash",
    country: "US",
    drm: null,
  },
  {
    id: 3,
    name: "Tears of Steel (HLS)",
    category: "Demo",
    logo: "",
    url: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    type: "hls",
    country: "US",
    drm: null,
  },
];

// ---------------------------------------------------------------
// Tambahkan channel TV Indonesia Anda via:
//  - Admin Panel → Kelola Channel → Tambah Channel
//  - Admin Panel → Import Playlist → Paste teks M3U
//  - Input URL M3U di sidebar kiri bawah
// ---------------------------------------------------------------

export const channelCategories = ["Semua", "Demo", "Berita", "Hiburan", "Olahraga", "Anak-anak", "Dokumenter", "Lainnya"];

export default channels;
