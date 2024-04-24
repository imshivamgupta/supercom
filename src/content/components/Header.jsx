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


const logo = (
    <div>
      <Link to="/">
        <h2>
          e<span>Shop</span>.
        </h2>
      </Link>
    </div>
  );

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setdisplayName] = useState("");
  const [scrollPage, setScrollPage] = useState(false);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, []);

//   const navigate = useNavigate();

  const dispatch = useDispatch();

  
  return (
    <div className='header-wrapper'>Header</div>
  )
}

export default Header