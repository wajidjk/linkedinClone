import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/header.scss";

export default function Header(props) {
  return (
    <div className="header">
      <div className="logo">logo</div>
      <div className="search-bar">Search </div>
      <div className="home">Home </div>
      <div className="my-network">My Network </div>
      <div className="jobs">Jobs </div>
      <div className="messaging">Messaging </div>
      <div className="notification">Notifications </div>
      <div className="me">Me </div>
      <div className="try">Try premium for free </div>
    </div>
  );
}
