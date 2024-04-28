import { useState, useEffect } from "react"; 
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "@/redux/slice/authSlice";
import {
  CALCULATE_TOTAL_QUANTITY,
  selectCartTotalQuantity,
} from "@/redux/slice/cartSlice";
import {AdminOnlyLink} from '@/content/components/AdminOnlyRoutes'
import ShowOnLogin, {ShowOnLogout} from "@/content/components/HiddenLinks";
import { selectIsLoggedIn } from "/src/redux/slice/authSlice.js";

const logo = (
    <div>
      <Link to="/">
        <h2>
          Supercom
        </h2>
      </Link>
    </div>
);



const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setdisplayName] = useState("");
  const [scrollPage, setScrollPage] = useState(false);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const isLogged = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, []);

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        if (user.displayName == null) {
          const u1 = user.email.slice(0, -10);
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setdisplayName(uName);
        } else {
          setdisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  })

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const dispatch = useDispatch();

  const activeLink = ({isActive}) =>{
    return isActive ? 'link-active' : ''
  }
  
  return (
    <div className='header-wrapper'>
       {logo}

       <div className="menu">
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Products</li>
            <li>
              <AdminOnlyLink>
                <Link to="/admin/home">
                  <button className="--btn --btn-primary">Admin</button>
                </Link>
              </AdminOnlyLink>
            </li>
        </ul>
       </div>

       <div className="action">
        <ul>
            <li>
            <ShowOnLogout>
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
            </ShowOnLogout>
            </li>
            { isLogged &&
            <li>
            <ShowOnLogin>
                  <a href="#home" style={{ color: "#ff7722" }}>
                    <FaUserCircle size={16} />
                    Hi, {displayName}
                  </a>
                </ShowOnLogin>
            </li>
            &&
            <li>
                <ShowOnLogin>
                  <NavLink to="/order-history" className={activeLink}>
                    My Orders
                  </NavLink>
                </ShowOnLogin>
            </li>
            &&
            <li>
                <ShowOnLogin>
                  <NavLink to="/" onClick={logoutUser}>
                    Logout
                  </NavLink>
                </ShowOnLogin>
            </li>
          }
        </ul>
       </div>
    </div>
  )
}

export default Header