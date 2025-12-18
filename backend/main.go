package main

import (
	"encoding/json"
	"net/http"
	"strings"

	"backend/data"
)

func dapatkanSemuaFilms(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data.Films)
}

func dapatkanFilmDariID(w http.ResponseWriter, r *http.Request) {

	id := strings.TrimPrefix(r.URL.Path, "/api/films/")

	for _, film := range data.Films {
		if film.ID == id {
			json.NewEncoder(w).Encode(film)
			return
		}
	}

	w.WriteHeader(http.StatusNotFound)
	json.NewEncoder(w).Encode(map[string]string{
		"error": "ERROR FILM NOT FOUND",
	})

}

func enableCORS(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		// IZINKAN FRONTEND VITE
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// HANDLE PREFLIGHT
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		h.ServeHTTP(w, r)
	})
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/api/films", dapatkanSemuaFilms)
	mux.HandleFunc("/api/films/", dapatkanFilmDariID)

	http.ListenAndServe(":8080", enableCORS(mux))
}
