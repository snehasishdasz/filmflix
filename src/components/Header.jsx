import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="sticky  z-50 header text-3xl flex justify-between items-center font-bold p-3 border-b-2 ">
     <Link to={"/"}> <span>
        <span className="text-red-500">F</span>ilm
        <span className="text-red-500">F</span>lix
      </span>
      </Link>
      <Link to={'/addmovie'}>
      <h1 className="text-lg text-white flex items-center cursor-pointer">
        <Button>
          <AddBoxIcon className="mr-1" color="error" />
          <span className="text-white">Add New</span>
        </Button>
      </h1>
      </Link>
    </div>
  );
};

export default Header;
