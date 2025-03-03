export const manuList = (
<>
  <li>
    <a href="/">Home</a>
  </li>
  <li>
    <a href="/product">Product</a>
  </li>
  <li>
    <a href="/dashboard">Dashboard</a>
  </li>
</>
);
const NavBar = () => {
  return (
    <div className="navbar bg-base-100 px-10">
      <div className="navbar-start">
      <a className="btn btn-ghost text-xl">Amazon</a>
      </div>
      <div className="dropdown navbar-end text-right">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {manuList}
          </ul>
        </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{manuList}</ul>
      </div>
      {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
    </div>
  );
};

export default NavBar;
