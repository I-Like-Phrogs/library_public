import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface MovieProps {
  posterUrl: string;
  title: string;
  releaseYear: number;
  rating: number;
}

class MovieClass {
  posterUrl: string;
  title: string;
  releaseYear: number;
  rating: number;

  constructor(posterUrl: string, title: string, releaseYear: number, rating: number) {
    this.posterUrl = posterUrl;
    this.title = title;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
}

const movies: MovieClass[] = [
  new MovieClass(
    "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    "The Matrix",
    1999,
    0.7
  ),
  new MovieClass(
    "https://fwcdn.pl/fpo/56/29/375629/7670122_2.8.webp",
    "Interstellar",
    2014,
    0.8
  ),
  new MovieClass(
    "https://upload.wikimedia.org/wikipedia/en/3/3d/Backrooms_%28film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
    "Backrooms",
    2026,
    0.9
  ),
  new MovieClass(
    "https://upload.wikimedia.org/wikipedia/en/6/61/I_saw_the_tv_glow_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "I Saw the TV Glow",
    2024,
    0.9
  ),
  new MovieClass(
    "https://upload.wikimedia.org/wikipedia/en/6/61/Lady_Bird_poster.jpeg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
    "Lady Bird",
    2017,
    0.7
  ),
];

movies.sort((a, b) => a.title.localeCompare(b.title, "pl"));

function Movie(props: MovieProps) {
  const handleCardClick = () => {
    console.log(`Wybrano film: ${props.title}`);
  };

  const handleDetailsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log(`Pokaż szczegóły dla ${props.title}`);
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div
        className="card h-100"
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        <img
          className="card-img-top"
          style={{ height: 375, objectFit: "cover" }}
          src={props.posterUrl}
          alt={props.title}
        />
        <div className="card-body">
          <h2 className="card-title h5">{props.title}</h2>
          <span className="card-text">{props.releaseYear}</span>
          {props.rating >= 0.8 && (
            <span className="badge text-bg-warning ms-2">Polecany</span>
          )}
          <div className="mt-2">
            <button className="btn btn-primary btn-sm" onClick={handleDetailsClick}>
              Pokaż szczegóły
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



interface BookProps {
  coverUrl: string;
  title: string;
  releaseYear: number;
  numPages: number;
}

class BookClass {
  coverUrl: string;
  title: string;
  releaseYear: number;
  numPages: number;

  constructor(coverUrl: string, title: string, releaseYear: number, numPages: number) {
    this.coverUrl = coverUrl;
    this.title = title;
    this.releaseYear = releaseYear;
    this.numPages = numPages;
  }
}

const books: BookClass[] = [
  new BookClass(
    "https://files.legimi.com/images/44263fa8e9e4caa1720c7efd30d695e6/w512_u90.jpg",
    "Atomowe nawyki",
    2019,
    272
  ),
  new BookClass(
    "https://static.profinfo.pl/storage/image/core_products/2026/8/23/196950ec8988246ea07ed9965506dcb3/admin/preview/6999907590569.webp",
    "Pułapki myślenia. O myśleniu szybkim i wolnym",
    2012,
    667
  ),
  new BookClass(
    "https://m.media-amazon.com/images/I/61rUfWyyfoL._AC_UF1000,1000_QL80_.jpg",
    "Tiny experiments",
    2025,
    304
  ),
  new BookClass(
    "https://static01.helion.com.pl/global/okladki/vbig/prag2v.jpg",
    "Pragmatyczny programista",
    1999,
    352
  ),
];

function Book(props: BookProps) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div className="card h-100">
        <img
          className="card-img-top"
          style={{ height: 375, objectFit: "cover" }}
          src={props.coverUrl}
          alt={props.title}
        />
        <div className="card-body">
          <h2 className="card-title h5">{props.title}</h2>
          <span className="card-text">
            {props.releaseYear} &bull; {props.numPages ?? 0} stron
          </span>
          {props.releaseYear < 2000 && (
            <span className="badge text-bg-warning ms-2">Klasyka</span>
          )}
        </div>
      </div>
    </div>
  );
}



interface TrackProps {
  index: number;
  title: string;
  length: string;
  onClick: () => void;
}


interface AlbumProps {
  coverUrl: string;
  title: string;
  band: string;
  genre: string;
  releaseYear: number;
  tracks: TrackClass[];
}

class TrackClass {
  index: number;
  title: string;
  length: string;

  constructor(index: number, title: string, length: string) {
    this.index = index;
    this.title = title;
    this.length = length;
  }
}

class AlbumClass {
  coverUrl: string;
  title: string;
  band: string;
  genre: string;
  releaseYear: number;
  tracks: TrackClass[];

  constructor(
    coverUrl: string,
    title: string,
    band: string,
    genre: string,
    releaseYear: number,
    tracks: TrackClass[]
  ) {
    this.coverUrl = coverUrl;
    this.title = title;
    this.band = band;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.tracks = tracks;
  }
}

const albums: AlbumClass[] = [
  new AlbumClass(
    "https://muzikercdn.com/uploads/products/11924/1192412/main_70a2a6cc.jpg",
    "Hold Your Colour",
    "Pendulum",
    "drum'n'bass",
    2005,
    [
      new TrackClass(1, "Prelude", "0:52"),
      new TrackClass(2, "Slam", "5:44"),
      new TrackClass(3, "Plasticworld", "6:21"),
      new TrackClass(4, "Fasten Your Seatbelt", "6:38"),
      new TrackClass(5, "Through the Loop", "6:13"),
      new TrackClass(6, "Sounds of Life", "5:21"),
      new TrackClass(7, "Girl in the Fire", "4:53"),
      new TrackClass(8, "Tarantula", "5:31"),
      new TrackClass(9, "Out Here", "6:07"),
      new TrackClass(10, "Hold Your Colour", "5:28"),
      new TrackClass(11, "The Terminal", "5:42"),
      new TrackClass(12, "Streamline", "5:23"),
      new TrackClass(13, "Another Planet", "7:38"),
      new TrackClass(14, "Still Grey", "7:51"),
    ]
  ),
  new AlbumClass(
    "https://upload.wikimedia.org/wikipedia/en/8/84/Overseer_-_Wreckage.jpg",
    "Wreckage",
    "Overseer",
    "big beat",
    2003,
    [
      new TrackClass(1, "Slayed", "4:47"),
      new TrackClass(2, "Stompbox", "3:53"),
      new TrackClass(3, "Supermoves", "4:47"),
      new TrackClass(4, "Velocity Shift", "2:08"),
      new TrackClass(5, "Horndog", "3:31"),
      new TrackClass(6, "Meteorology", "5:32"),
      new TrackClass(7, "Aquaplane", "5:14"),
      new TrackClass(8, "Doomsday", "3:14"),
      new TrackClass(9, "Basstrap", "4:03"),
      new TrackClass(10, "Sparks", "6:02"),
      new TrackClass(11, "Never", "6:36"),
      new TrackClass(12, "Heligoland", "26:56"),
    ]
  ),
  new AlbumClass(
    "https://ecsmedia.pl/c/discovery-b-iext197156812.jpg",
    "Discovery",
    "Daft Punk",
    "disco house",
    2001,
    [
      new TrackClass(1, "One More Time", "5:20"),
      new TrackClass(2, "Aerodynamic", "3:27"),
      new TrackClass(3, "Digital Love", "4:58"),
      new TrackClass(4, "Harder, Better, Faster, Stronger", "3:45"),
      new TrackClass(5, "Crescendolls", "3:31"),
      new TrackClass(6, "Nightvision", "1:44"),
      new TrackClass(7, "Superheroes", "3:57"),
      new TrackClass(8, "High Life", "3:22"),
      new TrackClass(9, "Something About Us", "3:51"),
      new TrackClass(10, "Voyager", "3:47"),
      new TrackClass(11, "Veridis Quo", "5:44"),
      new TrackClass(12, "Short Circuit", "3:26"),
      new TrackClass(13, "Face to Face", "3:58"),
      new TrackClass(14, "Too Long", "10:00"),
    ]
  ),
  new AlbumClass(
    "https://upload.wikimedia.org/wikipedia/en/0/01/U_album_cover_by_Underscores.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
    "U",
    "underscores",
    "hyperpop",
    2026,
    [
      new TrackClass(1, "Tell Me (U Want It)", "3:33"),
      new TrackClass(2, "Music", "3:27"),
      new TrackClass(3, "Hollywood Forever", "4:54"),
      new TrackClass(4, "The Peace", "2:49"),
      new TrackClass(5, "Innuendo (I Get U)", "3:28"),
      new TrackClass(6, "Lovefield", "3:52"),
      new TrackClass(7, "Do It", "3:33"),
      new TrackClass(8, "Bodyfeeling", "4:08"),
      new TrackClass(9, "Wish U Well", "4:21"),
    ]
  ),
];

albums.sort((a, b) => a.title.localeCompare(b.title, "pl"));


function Track(props: TrackProps) {
  return (
    <tr onClick={props.onClick} style={{ cursor: "pointer" }}>
      <td>{props.index}</td>
      <td>{props.title}</td>
      <td className="text-end">{props.length}</td>
    </tr>
  );
}

function Album(props: AlbumProps) {
  // Funkcja strzałkowa jest różna od zdefiniowanej przez "function" tym, że nie ma swojego "this", tu jednak to nie ma znaczenia
  const handleSongClick = (songTitle: string) => {
    console.log(`Wybrano utwór: ${songTitle} z ${props.title}`);
  };

  return (
    <div className="col-12 col-lg-6 col-xl-4">
      <div className="card h-100">
        <img
          className="card-img-top"
          style={{ height: 375, objectFit: "cover" }}
          src={props.coverUrl}
          alt={props.title}
        />

        <div className="card-body">
          <h2 className="card-title h5">{props.title}</h2>
          <p className="card-text">
            {props.band} &bull; {props.releaseYear} &bull; {props.genre}
          </p>

          {props.tracks.length === 0 ? (
            <div className="alert alert-warning mb-0" role="alert">
              Brak utworów
            </div>
          ) : (
            <table className="table table-striped table-hover mb-0">
              <thead>
                <tr>
                  <th>L.p.</th>
                  <th>Tytuł</th>
                  <th className="text-end">Czas trwania</th>
                </tr>
              </thead>
              <tbody>
                {props.tracks.map((track) => (
                  <Track
                    key={track.index}
                    index={track.index}
                    title={track.title}
                    length={track.length}
                    onClick={() => handleSongClick(track.title)}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section(props: SectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  function handleHeaderClick() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div className="mb-4">
      <h1
        className="mt-4"
        onClick={handleHeaderClick}
        style={{ cursor: "pointer" }}
      >
        {isOpen ? "▾" : "▸"} {props.title}
      </h1>
      {isOpen && <div className="row g-3">{props.children}</div>}
    </div>
  );
}

const recentMovies = movies.filter((movie) => movie.releaseYear > 2010);

// slice() robi kopię tablicy, żeby sort nie zmienił oryginału
const booksNewestFirst = books.slice().sort((a, b) => b.releaseYear - a.releaseYear);

// album z największą liczbą utworów
let albumWithMostTracks = albums[0];
for (let i = 1; i < albums.length; i++) {
  if (albums[i].tracks.length > albumWithMostTracks.tracks.length) {
    albumWithMostTracks = albums[i];
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////  APP  /////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [recentMovieSearch, setRecentMovieSearch] = useState("");
  const [bookSearch, setBookSearch] = useState("");
  const [newestBookSearch, setNewestBookSearch] = useState("");
  const [albumSearch, setAlbumSearch] = useState("");
  const [topAlbumSearch, setTopAlbumSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieSearch.toLowerCase())
  );

  // elementy z filmami albo komunikat, gdy nic nie znaleziono
  let moviesContent;
  if (filteredMovies.length === 0) {
    moviesContent = (
      <div className="col-12">
        <div className="alert alert-warning mb-0" role="alert">
          Nie znaleziono filmów
        </div>
      </div>
    );
  } else {
    moviesContent = filteredMovies.map((movie) => (
      <Movie
        key={movie.title}
        posterUrl={movie.posterUrl}
        title={movie.title}
        releaseYear={movie.releaseYear}
        rating={movie.rating}
      />
    ));
  }

  return (
    <div className="container">
      <Section title="Filmy">
        <div className="col-12">
          <input
            id="movie-search"
            type="text"
            className="form-control"
            placeholder="Wpisz tytuł"
            value={movieSearch}
            onChange={(e) => {
              console.log(e.target.value);
              setMovieSearch(e.target.value);
            }}
          />
          <small className="form-text text-muted">Wpisano: {movieSearch}</small>
        </div>

        {moviesContent}
      </Section>

      <Section title="Filmy wydane po 2010 roku">
        <div className="col-12">
          <input
            id="recent-movie-search"
            type="text"
            className="form-control"
            placeholder="Wpisz tytuł"
            value={recentMovieSearch}
            onChange={(e) => {
              console.log(e.target.value);
              setRecentMovieSearch(e.target.value);
            }}
          />
          <small className="form-text text-muted">Wpisano: {recentMovieSearch}</small>
        </div>
        {recentMovies.map((movie) => (
          <Movie
            key={movie.title}
            posterUrl={movie.posterUrl}
            title={movie.title}
            releaseYear={movie.releaseYear}
            rating={movie.rating}
          />
        ))}
      </Section>

      <Section title="Książki">
        <div className="col-12">
          <input
            id="book-search"
            type="text"
            className="form-control"
            placeholder="Wpisz tytuł"
            value={bookSearch}
            onChange={(e) => {
              console.log(e.target.value);
              setBookSearch(e.target.value);
            }}
          />
          <small className="form-text text-muted">Wpisano: {bookSearch}</small>
        </div>
        {books.map((book) => (
          <Book
            key={book.title}
            coverUrl={book.coverUrl}
            title={book.title}
            releaseYear={book.releaseYear}
            numPages={book.numPages}
          />
        ))}
      </Section>

      <Section title="Książki od najnowszej">
        <div className="col-12">
          <input
            id="newest-book-search"
            type="text"
            className="form-control"
            placeholder="Wpisz tytuł"
            value={newestBookSearch}
            onChange={(e) => {
              console.log(e.target.value);
              setNewestBookSearch(e.target.value);
            }}
          />
          <small className="form-text text-muted">Wpisano: {newestBookSearch}</small>
        </div>
        {booksNewestFirst.map((book) => (
          <Book
            key={book.title}
            coverUrl={book.coverUrl}
            title={book.title}
            releaseYear={book.releaseYear}
            numPages={book.numPages}
          />
        ))}
      </Section>

      <Section title="Albumy">
        <div className="col-12">
          <input
            id="album-search"
            type="text"
            className="form-control"
            placeholder="Wpisz tytuł"
            value={albumSearch}
            onChange={(e) => {
              console.log(e.target.value);
              setAlbumSearch(e.target.value);
            }}
          />
          <small className="form-text text-muted">Wpisano: {albumSearch}</small>
        </div>
        {albums.map((album) => (
          <Album
            key={album.title}
            coverUrl={album.coverUrl}
            title={album.title}
            band={album.band}
            genre={album.genre}
            releaseYear={album.releaseYear}
            tracks={album.tracks}
          />
        ))}
      </Section>

      <Section title="Album z największą liczbą utworów">
        <div className="col-12">
          <input
            id="top-album-search"
            type="text"
            className="form-control"
            placeholder="Wpisz tytuł"
            value={topAlbumSearch}
            onChange={(e) => {
              console.log(e.target.value);
              setTopAlbumSearch(e.target.value);
            }}
          />
          <small className="form-text text-muted">Wpisano: {topAlbumSearch}</small>
        </div>
        <Album
          coverUrl={albumWithMostTracks.coverUrl}
          title={albumWithMostTracks.title}
          band={albumWithMostTracks.band}
          genre={albumWithMostTracks.genre}
          releaseYear={albumWithMostTracks.releaseYear}
          tracks={albumWithMostTracks.tracks}
        />
      </Section>
    </div>
  );
}

export default App;