'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-subtitle">UNFORGETTABLE TRAVEL AWAITS THE</h2>
        <h1 className="hero-title">ADVENTURE</h1>
        <p className="hero-description">Experience the thrill of exploring the world's most fascinating destinations with our expertly curated travel packages.</p>

        {/* 搜索表单 */}
        <div className="search-form">
          <div className="form-group">
            <label className="form-label">Destination</label>
            <select className="form-dropdown" defaultValue="Yogyakarta, Indonesia">
              <option>Yogyakarta, Indonesia</option>
              <option>Bali, Indonesia</option>
              <option>Tokyo, Japan</option>
              <option>Paris, France</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Date</label>
            <select className="form-dropdown" defaultValue="March 29, 2023">
              <option>March 29, 2023</option>
              <option>April 5, 2023</option>
              <option>April 12, 2023</option>
              <option>April 19, 2023</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Price</label>
            <select className="form-dropdown" defaultValue="$1,000 - $2,000">
              <option>$1,000 - $2,000</option>
              <option>$2,000 - $3,000</option>
              <option>$3,000 - $4,000</option>
              <option>$4,000+</option>
            </select>
          </div>
          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  )
} 