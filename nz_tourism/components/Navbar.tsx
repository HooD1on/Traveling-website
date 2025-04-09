'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../app/style/Navbar.css';

interface NavbarProps {
  transparent?: boolean;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function Navbar({ transparent }: NavbarProps = {}) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // 在客户端渲染时检查用户是否已登录
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsLoggedIn(true);
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  // 处理登出
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setShowDropdown(false);
    router.push('/');
  };

  // 切换下拉菜单
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjAgMTBjNS41IDAgMTAgNC41IDEwIDEwcy00LjUgMTAtMTAgMTBoLTVsNSA1di01YzUuNSAwIDEwLTQuNSAxMC0xMFMyNS41IDEwIDIwIDEweiIvPjx0ZXh0IHg9IjM1IiB5PSIyNSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPlNLWTwvdGV4dD48L3N2Zz4=" alt="WandSky Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/destinations">Destinations</Link></li>
        <li><Link href="/tours">Tours</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      
      {isLoggedIn && user ? (
        <div className="user-menu">
          <div className="user-profile" onClick={toggleDropdown}>
            <div className="user-avatar">
              {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
            </div>
            <span className="user-name">{user.firstName}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`dropdown-arrow ${showDropdown ? 'up' : 'down'}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          
          {showDropdown && (
            <div className="dropdown-menu">
              <Link href="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                My Profile
              </Link>
              <Link href="/bookings" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                My Bookings
              </Link>
              <Link href="/wishlist" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                Wishlist
              </Link>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item logout" onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link href="/auth" className="sign-in-btn">
          Sign in
        </Link>
      )}
    </nav>
  );
}