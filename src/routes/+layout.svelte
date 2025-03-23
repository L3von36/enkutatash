<script>
  import { onMount } from 'svelte';
  import { _, locale } from 'svelte-i18n';
  import '../lib/i18n'; // Import the i18n configuration
  import MobileNav from './MobileNav.svelte';
  
  // Define the site theme colors with yellow as primary
  const siteColors = {
    primary: '#FFD700', // Yellow
    secondary: '#FFF8DC', // Light yellow/cream
    accent: '#FF8C00', // Dark orange as accent
    text: '#333333',
    background: '#FFFAF0' // Off-white background
  };
  
  // Initialize with Amharic as default immediately
  $locale = 'am';
  
  onMount(() => {
    // Additional onMount logic if needed
  });
</script>

<div class="app">
  <header>
   
    <div class="logo">
      <h1>Enkutatashi</h1>
    </div>
    <nav>
      <ul>
        <li><a href="/">{$_('home')}</a></li>
        <li><a href="/events">{$_('events')}</a></li>
        <li><a href="/gallery">{$_('gallery')}</a></li>
        <li><a href="/about">{$_('about')}</a></li>
        <li><a href="/contact">{$_('contact')}</a></li>
      </ul>
    </nav>
    <!-- Language switcher will be hidden on mobile and shown in the mobile menu instead -->
    <button class="language-toggle" on:click={() => $locale = $locale === 'am' ? 'en' : 'am'}>
      {$locale === 'am' ? 'English' : 'አማርኛ'}
    </button>
  </header>
  
  <main>
    <slot />
  </main>
  
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>Enkutatashi</h3>
        <p>Your trusted partner for unforgettable kids events in Ethiopia.</p>
      </div>
      
      <div class="footer-section">
        <h3>{$_('contact_us')}</h3>
        <p>📍 123 Main Street, Bole District, Addis Ababa</p>
        <p>📞 +251 123 456 789</p>
        <p>✉️ info@enkutatashi.com</p>
      </div>
      
      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-links">
          <a href="https://facebook.com" class="social-link">Facebook</a>
          <a href="https://instagram.com" class="social-link">Instagram</a>
          <a href="https://twitter.com" class="social-link">Twitter</a>
        </div>
      </div>
    </div>
    
    <div class="copyright">
      <p>&copy; {new Date().getFullYear()} Enkutatashi. All rights reserved.</p>
    </div>
  </footer>
</div>

<!-- Add the mobile navigation component -->
<MobileNav 
  menuItems={[
    { href: '/', label: $_('home') },
    { href: '/events', label: $_('events') },
    { href: '/gallery', label: $_('gallery') },
    { href: '/about', label: $_('about') },
    { href: '/contact', label: $_('contact') }
  ]}
  logoText="Enkutatashi"
  primaryColor="yellow-400"
  textColor="gray-800"
/>

<style>
  :global(body) {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #FFFAF0;
    color: #333333;
    line-height: 1.6;
  }
  
  :global(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: 1.3;
    margin-top: 0;
  }
  
  :global(a) {
    color: #FF8C00;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  :global(a:hover) {
    color: #FFD700;
  }
  
  :global(button) {
    cursor: pointer;
  }
  
  :global(img) {
    max-width: 100%;
    height: auto;
  }
  
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  header {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .logo h1 {
    margin: 0;
    color: #FFD700;
    font-size: 1.8rem;
  }
  
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }
  
  nav a {
    color: #333333;
    font-weight: 500;
    padding: 0.5rem 0;
    position: relative;
  }
  
  nav a:hover {
    color: #FFD700;
  }
  
  nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #FFD700;
    transition: width 0.3s;
  }
  
  nav a:hover::after {
    width: 100%;
  }
  
  .language-toggle {
    background-color: #FF8C00;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s;
  }
  
  .language-toggle:hover {
    background-color: #e67e00;
  }
  
  main {
    flex: 1;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
  
  footer {
    background-color: #333333;
    color: white;
    padding: 3rem 2rem 1rem;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section h3 {
    color: #FFD700;
    margin-bottom: 1rem;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
  }
  
  .social-link {
    color: white;
    transition: color 0.3s;
  }
  
  .social-link:hover {
    color: #FFD700;
  }
  
  .copyright {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    header {
      flex-direction: column;
      padding: 1rem;
    }
    
    nav {
      margin-top: 1rem;
      width: 100%;
    }
    
    nav ul {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }
    
    .language-toggle {
      margin-top: 1rem;
    }
  }
</style>
