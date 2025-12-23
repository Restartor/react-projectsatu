import React from "react";

function ErrNotFound() {
  const styleErrNotFound = {
    textAlign: "center",
    marginTop: "20vh",
    fontFamily: "Arial, sans-serif",
    color: "#ff0000",
  };
  const pstyle = {
    textAlign: "center",
    marginTop: "2vh",
    fontFamily: "Arial, sans-serif",
    color: "#ff0000",
  };
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
    // buat button center
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#ff0000ff",
    color: "white",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <div>
      <h1 style={styleErrNotFound}>404 NOT FOUND ❌</h1>
      <button style={buttonStyle} onClick={() => (window.location.href = "/")}>
        Go back home
      </button>
      <p style={pstyle}>Maaf, halaman yang Anda cari tidak ditemukan.</p>
    </div>
  );
}

export default ErrNotFound;
