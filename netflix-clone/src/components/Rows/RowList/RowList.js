import React from "react";
import Row from "../Row/Row";
import Request from "../../../Utils/Request";
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Request.fetchNetflixOriginal}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={Request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchUrl={Request.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentary} />
    </>
  );
};

export default RowList;
