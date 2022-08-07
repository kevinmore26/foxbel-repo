import React, { Component } from "react";
import Header from "../components/widgtes/header";
import * as actions from "../services/index";
import { Link } from "react-router-dom";
import Search from "../components/widgtes/searchbar";
import "../home.css";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faInfoCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import DetailSong from "../views/detailsSong";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../index.css";
class PortadaView extends Component {
  state = {
    albums: [],
    tracks: [],
  };

  componentDidMount() {
    actions.getAlbums().then((item) =>
      this.setState({
        albums: item,
        tracks: item,
      })
    );
    actions.getAlbum(this.props.match.params.id).then((album) => {
      this.setState({
        album,
      });
    });
    actions.getCancionesf(this.props.match.params.id).then((song) => {
      this.setState({
        song,
      });
    });
  }
  searchAlbums = (term) => {
    console.log(term);
    actions.getAlbums(term).then((item) =>
      this.setState({
        albums: item,
      })
    );
  };

  addToFavorites = (album) => {
    let oldFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (this.checkAlbum(oldFavorites, album)) {
      swal({
        title: "Album ya existe",
        text: "Hola de nuevo",
        icon: "warning",
      });
      return false;
    }
    oldFavorites.push(album);
    let favorites = oldFavorites;
    localStorage.setItem("favorites", JSON.stringify(favorites));
    swal({
      title: "Album añadido",
      text: "Hola de nuevo funciona",
      icon: "success",
    });
  };
  checkAlbum = (albums, album) => {
    let found = albums.some(function (item) {
      return item.album.id === album.album.id;
    });
    return found;
  };

  renderAlbums = () => {
    const { albums } = this.state;

    return albums && albums.length
      ? albums.map((item, index) => (
          <div
            key={index}
            className="col-12 col-lg-4 col-md-6 col-xl-3"
            style={{ width: "19%", marginLeft: "10px", border: "none" }}
          >
            <div
              className="card border-danger"
              style={{ width: "95%", border: "none" }}
            >
              <img src={item.album.cover_big} alt="" className="card-img-top" />
              <div className="card-body">
                <div
                  className="card-title"
                  style={{ color: "#555555", fontSize: "14px" }}
                >
                  {item.title_short}
                </div>
                <div
                  className="text"
                  style={{ color: "#828282", fontSize: "12px" }}
                >
                  {item.artist.name}
                </div>

                <div
                  className="card-footer"
                  style={{
                    width: "10px",
                    zIndex: "1",
                    height: "0.1px",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <div className="links">
                    <Link
                      to={`/details/${item.album.id}`}
                      className="link"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <FontAwesomeIcon
                        className="info"
                        icon={faInfoCircle}
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                          border: "none",
                          position: "relative",
                          bottom: "130px",
                          right: "30px",
                        }}
                      />
                    </Link>
                    <Link
                      to={`/track/${item.album.id}`}
                      className="link"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <FontAwesomeIcon
                        className="play"
                        icon={faPlay}
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                          position: "relative",
                          bottom: "200px",
                          fontSize: "30px",
                        }}
                      />
                    </Link>

                    <Link>
                      <a
                        style={{ backgroundColor: "transparent" }}
                        onClick={() => this.addToFavorites(item)}
                        href="."
                        className="link"
                      >
                        <FontAwesomeIcon
                          className="hearth"
                          icon={faHeart}
                          style={{
                            backgroundColor: "white",
                            background: "transparent",
                            color: "#E86060",
                            position: "relative",
                            bottom: "130px",
                            left: "30px",
                          }}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      : null;
  };

  render() {
    console.log(this.setState);
    return (
      <div className="container">
        <div
          class="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-md-12 " style={{ display: "flex" }}>
            <div>
              <Header />
            </div>

            <div className="row md-4">
              <Search searchAlbums={this.searchAlbums} />
              <h3
                style={{
                  fontFamily: "b",
                  color: "#E86060",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
              >
                Resultados
              </h3>
              {this.renderAlbums()}
            </div>
          </div>
          <div style={{ paddingTop: "90px" }}>
            <section
              style={{
                position: "relative",
                bottom: "1340px",
                height: "100px",
                width: "99%",
                right: "12px",
              }}
            >
              <Navbar
                bg="dark"
                variant="dark"
                style={{ width: "100vw", height: "80px" }}
              >
                <Container style={{ backgroundColor: "rgb(255, 96, 96)" }}>
                  <div style={{ display: "flex" }}>
                    <div>
                      <img
                        src={"https://api.deezer.com/artist/75798/image"}
                        alt=""
                        className="card-img-top"
                        style={{
                          width: "80px",
                          position: "relative",
                          right: "24px",
                        }}
                      />
                    </div>
                    <div style={{ zIndex: "3000" }}>
                      <p
                        style={{
                          fontFamily: "Quicksand",
                          color: "white",
                          fontWeight: "400",
                          fontSize: "14px",
                          marginTop: "10px",
                        }}
                      >
                        Rolling in the Deep
                      </p>
                      <p
                        style={{
                          fontFamily: "Quicksand",
                          color: "white",
                          fontWeight: "200",
                          fontSize: "12px",
                          position: "relative",
                          bottom: "5px",
                        }}
                      >
                        Adele - 21
                      </p>
                    </div>
                  </div>
                </Container>
              </Navbar>
            </section>
            <footer
              style={{
                position: "relative",
                width: "50vw",
                bottom: "1437px",
                zIndex: "10000",
                border: "none",
                left: "275px",
                heigth: "60px",
              }}
            >
              <figure class="figure">
                <audio
                  controls
                  src={
                    "https://cdns-preview-e.dzcdn.net/stream/c-e78000f07a5cafb99b58e0c24cebbc80-3.mp3"
                  }
                  style={{ zIndex: "1000", border: "none" }}
                >
                  Preview
                  <code>audio</code>
                </audio>
              </figure>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default PortadaView;
