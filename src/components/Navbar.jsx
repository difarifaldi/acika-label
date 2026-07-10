import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavLink({to, children}){
  const loc = useLocation()
  const active = loc.pathname === to
  return (
    <Link
      to={to}
      className={`relative py-1 px-0 text-sm transition-colors duration-200 ${active ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'}`}
    >
      <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">{children}</span>
    </Link>
  )
}

export default function Navbar(){
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-serif text-2xl tracking-widest">AIRETA</div>
        <nav>
          <ul className="flex gap-8 items-center">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/our-services">OUR SERVICES</NavLink></li>
            <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
            <li><NavLink to="/location">LOCATION</NavLink></li>
            <li><NavLink to="/contact">CONTACT US</NavLink></li>
            <li>
              <button className="ml-4 border px-4 py-2 text-sm hover:bg-black hover:text-white transition">REQUEST A QUOTE</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
              <Link to="/portfolio" className="hover:underline">
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to="/location" className="hover:underline">
                LOCATION
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
