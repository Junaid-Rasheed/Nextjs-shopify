import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div class="ui secondary pointing menu">
        <Link href='/'>
          <a class="item">Home</a>
        </Link>
        <Link href='/about'>
          <a class="item">About</a>
        </Link>
       
      </div>
     
    </div>
  );
}

export default Navbar;
