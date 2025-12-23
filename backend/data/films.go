package data

// Film holds movie metadata and video links.
type Film struct {
	ID        string   `json:"id"`
	Judul     string   `json:"judul"`
	Tahun     string   `json:"tahun"`
	Deskripsi string   `json:"deskripsi"`
	Gambar    string   `json:"gambar"`
	VideoLink string   `json:"videoLink"`
	Genre     []string `json:"genre"`
}

// Films is the shared in-memory catalog.
var Films = []Film{
	{
		ID:        "tulsa-king",
		Judul:     "Tulsa King",
		Tahun:     "2025",
		Deskripsi: "Tulsa King adalah serial drama kriminal di Paramount+ yang dibintangi Sylvester Stallone sebagai Dwight 'The General' Manfredi, seorang capo mafia New York yang baru bebas setelah 25 tahun penjara dan diasingkan ke Tulsa, Oklahoma untuk membangun kerajaan kriminal baru, menghadapi tantangan membangun keluarga baru, konflik dengan mafia lokal, hingga menjalin hubungan rumit dengan putri kandungnya, menampilkan perpaduan humor gelap, aksi mafia klasik, dan latar lokasi yang tidak biasa",
		Gambar:    "https://image.tmdb.org/t/p/original/hD4UoR4ZUXYBoKhKRwrJiTFLqCo.jpg",
		VideoLink: "https://www.youtube.com/embed/aaQSScwZPbA",
		Genre:     []string{"Action", "Crime", "Drama"},
	},
	{
		ID:        "john-wick-4",
		Judul:     "John Wick 4",
		Tahun:     "2023",
		Deskripsi: "John Wick kembali beraksi melawan musuh-musuh lamanya dalam pertempuran epik yang menegangkan.",
		Gambar:    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
		VideoLink: "https://www.youtube.com/embed/qEVUtrk8_B4",
		Genre:     []string{"Action", "Thriller"},
	},
	{
		ID:        "black-panther-wakanda-forever",
		Judul:     "Black Panther: Wakanda Forever",
		Tahun:     "2022",
		Deskripsi: "Setelah kematian Raja T'Challa, Wakanda menghadapi ancaman baru dari musuh-musuh lama dan baru.",
		Gambar:    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
		VideoLink: "https://www.youtube.com/embed/_Z3QKkl1WyM",
		Genre:     []string{"Action", "Adventure"},
	},
	{
		ID:        "avengers-endgame",
		Judul:     "Avengers: Endgame",
		Tahun:     "2019",
		Deskripsi: "Para pahlawan super bersatu untuk mengalahkan Thanos dan mengembalikan keseimbangan alam semesta.",
		Gambar:    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
		VideoLink: "https://www.youtube.com/embed/TcMBFSGVi1c",
		Genre:     []string{"Action", "Adventure", "Sci-Fi"},
	},
	{
		ID:        "doctor-strange-multiverse",
		Judul:     "Doctor Strange in the Multiverse of Madness",
		Tahun:     "2022",
		Deskripsi: "Doctor Strange menjelajahi multiverse yang berbahaya untuk melindungi realitas dari ancaman baru.",
		Gambar:    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
		VideoLink: "https://www.youtube.com/embed/aWzlQ2N6qqg",
		Genre:     []string{"Action", "Adventure", "Fantasy"},
	},
	{
		ID:        "spiderman-no-way-home",
		Judul:     "Spiderman: No Way Home",
		Tahun:     "2021",
		Deskripsi: "Peter Parker menghadapi konsekuensi dari identitasnya yang terungkap dan berhadapan dengan musuh-musuh dari dimensi lain.",
		Gambar:    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
		VideoLink: "https://www.youtube.com/embed/JfVOs4VSpmA",
		Genre:     []string{"Action", "Adventure", "Sci-Fi"},
	},
}

// GetFilmByID returns the film with the given id or nil if not found.
func GetFilmByID(id string) *Film {
	for i := range Films {
		if Films[i].ID == id {
			return &Films[i]
		}
	}
	return nil
}
