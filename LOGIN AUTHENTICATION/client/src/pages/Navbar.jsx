import { Link } from "react-router-dom"


export const Navbar = () => {
  return (
   <nav style={{display:'flex', gap:'20px', alignItems:'center' }}>
    {/* <Link to='/home'>Home</Link> */}
    <Link to='/login'>Login</Link>
    <Link to='/register'>Register</Link>
   </nav>
  )
}
