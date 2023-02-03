import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Search.css'
import { Link, useHistory, useParams, useLocation } from "react-router-dom";

function SearchNotFound() {

    return (
        <div className="serror-page-container">
             <img className="oops-cat" src="https://img.freepik.com/premium-vector/cute-cat-with-construction-worker_607277-192.jpg"></img>
             <h3 className="no-results-text">No results found</h3>
             <span>We can't find any results based on your search.</span>
             <span>Please try adjusting your search terms.</span>
        </div>
    )
}

export default SearchNotFound