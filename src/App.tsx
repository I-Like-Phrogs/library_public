import React from "react";

interface MovieProps {
  posterUrl: string;
  title: string;
  releaseYear: number;
}

class MovieClass {
  posterUrl: string;
  title: string;
  releaseYear: number;

  constructor(posterUrl: string, title: string, releaseYear: number) {
    this.posterUrl = posterUrl;
    this.title = title;
    this.releaseYear = releaseYear;
  }
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

const movies: MovieClass[] = [
  new MovieClass(
    "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    "The Matrix",
    1999
  ),
  new MovieClass(
    "https://fwcdn.pl/fpo/56/29/375629/7670122_2.8.webp",
    "Interstellar",
    2014
  ),
  new MovieClass(
    "https://upload.wikimedia.org/wikipedia/en/d/df/Taxi_3_film.jpg",
    "Taxi 3",
    2003
  ),
  new MovieClass(
    "https://upload.wikimedia.org/wikipedia/en/6/61/I_saw_the_tv_glow_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "I Saw the TV Glow",
    2024
  ),
  new MovieClass(
    "https://upload.wikimedia.org/wikipedia/en/6/61/Lady_Bird_poster.jpeg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
    "Lady Bird",
    2017
  ),
];

const books: BookClass[] = [
  new BookClass("https://files.legimi.com/images/44263fa8e9e4caa1720c7efd30d695e6/w512_u90.jpg", "Atomowe nawyki", 2019, 272),
  new BookClass("https://static.profinfo.pl/storage/image/core_products/2026/8/23/196950ec8988246ea07ed9965506dcb3/admin/preview/6999907590569.webp", "Pułapki myślenia. O myśleniu szybkim i wolnym", 2012, 667),
  new BookClass("https://m.media-amazon.com/images/I/61rUfWyyfoL._AC_UF1000,1000_QL80_.jpg", "Tiny experiments", 2025, 304),
  new BookClass("https://static01.helion.com.pl/global/okladki/vbig/prag2v.jpg", "Pragmatyczny programista", 1999, 352),
];

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

function Movie(props: MovieProps) {
  return (
    <div>
      <img style={{ height: 375 }} src={props.posterUrl} />
      <h2>{props.title}</h2>
      <span>{props.releaseYear}</span>
    </div>
  );
}

interface BookProps {
  coverUrl: string;
  title: string;
  releaseYear: number;
  numPages: number;
}

function Book(props: BookProps) {
  return (
    <div>
      <img style={{ height: 375 }} src={props.coverUrl} />
      <h2>{props.title}</h2>
      <span>{props.releaseYear} </span>
      &bull;
      <span> {props.numPages ?? 0} stron</span>
    </div>
  );
}

interface TrackProps {
  index: number;
  title: string;
  length: string;
}

function Track(props: TrackProps) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.title}</td>
      <td>{props.length}</td>
    </tr>
  );
}

interface AlbumProps {
  coverUrl: string;
  title: string;
  band: string;
  genre: string;
  releaseYear: number;
  children: React.ReactNode;
}

function Album(props: AlbumProps) {
  return (
    <div>
      <img style={{ height: 375 }} src={props.coverUrl} />
      <h2>{props.title}</h2>
      <span>{props.band} </span> &bull;
      <span>{props.releaseYear} </span> &bull;
      <span>{props.genre}</span>

      <table style={{ width: "100%" }}>
        <thead>
          <th>L.p.</th>
          <th>Tytuł</th>
          <th>Czas trwania</th>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Filmy</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
        {movies.map((movie) => (
          <Movie
            key={movie.title}
            posterUrl={movie.posterUrl}
            title={movie.title}
            releaseYear={movie.releaseYear}
          />
        ))}
      </div>

      <h1>Książki</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
        {books.map((book) => (
          <Book 
            key={book.title}
            coverUrl={book.coverUrl}
            title={book.title}
            releaseYear={book.releaseYear}
            numPages={book.numPages}
          />
        ))}
      </div>

      <h1>Albumy</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
        {albums.map((album) => (
          <Album
            key={album.title}
            coverUrl={album.coverUrl}
            title={album.title}
            band={album.band}
            genre={album.genre}
            releaseYear={album.releaseYear}
          >
            {album.tracks.map((track) => (
              <Track key={track.index} {...track} />
            ))}
          </Album>
        ))}
      </div>
    </div>
  );
}

export default App
