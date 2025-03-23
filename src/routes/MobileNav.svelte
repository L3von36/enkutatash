<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { locale } from 'svelte-i18n';
  
  // Props for customization
  export let menuItems = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];
  
  export let logoText = 'Enkutatashi';
  export let logoHref = '/';
  export let primaryColor = 'yellow-400';
  export let textColor = 'gray-800';
  
  let mobileMenuOpen = false;
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  // Toggle between Amharic and English
  function toggleLanguage() {
    $locale = $locale === 'am' ? 'en' : 'am';
  }
  
  onMount(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
      
      if (mobileMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && 
          mobileMenuToggle && !mobileMenuToggle.contains(event.target)) {
        mobileMenuOpen = false;
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<!-- Mobile Navigation -->
<div class="mobile-nav">
  <!-- Mobile Hamburger Button -->
  <button 
    id="mobile-menu-toggle"
    class="mobile-hamburger" 
    on:click={toggleMobileMenu}
    aria-label="Toggle mobile menu"
  >
    <span class:rotate={mobileMenuOpen} class:top-bar={mobileMenuOpen}></span>
    <span class:hidden={mobileMenuOpen}></span>
    <span class:rotate={mobileMenuOpen} class:bottom-bar={mobileMenuOpen}></span>
  </button>
  
  <!-- Mobile Menu -->
  <div 
    id="mobile-menu"
    class="mobile-menu"
    class:open={mobileMenuOpen}
  >
    <div class="mobile-menu-header">
      <a href={logoHref} class="mobile-logo">{logoText}</a>
      <button 
        class="mobile-close" 
        on:click={() => mobileMenuOpen = false}
        aria-label="Close mobile menu"
      >×</button>
    </div>
    
    <nav class="mobile-nav-content">
      <ul>
        {#each menuItems as item}
          <li class="mobile-nav-item" class:active={$page.url.pathname === item.href || ($page.url.pathname !== '/' && $page.url.pathname.startsWith(item.href))}>
            <a 
              href={item.href} 
              aria-current={$page.url.pathname === item.href || ($page.url.pathname !== '/' && $page.url.pathname.startsWith(item.href)) ? 'page' : undefined}
            >{item.label}</a>
            
            {#if $page.url.pathname === item.href || ($page.url.pathname !== '/' && $page.url.pathname.startsWith(item.href))}
              <span class="active-indicator"></span>
            {/if}
          </li>
        {/each}
      </ul>
      
      <!-- Language Switcher integrated into mobile menu -->
      <div class="language-switcher-container">
        <button class="language-switcher-button" on:click={toggleLanguage}>
          {$locale === 'am' ? 'English' : 'አማርኛ'}
        </button>
      </div>
    </nav>
  </div>
</div>

<style>
  /* Mobile Navigation */
  .mobile-nav {
    display: block; /* Always display the container */
  }
  
  /* Mobile Hamburger Button */
  .mobile-hamburger {
    position: fixed;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 9999; /* Increased z-index to ensure visibility */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 2.5rem; /* Reduced size */
    height: 2.5rem; /* Reduced size */
    background-color: #FFD700;
    border-radius: 9999px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Reduced shadow */
    border: 1px solid #333; /* Thinner border */
    cursor: pointer;
    padding: 0;
  }
  
  .mobile-hamburger span {
    display: block;
    width: 1.25rem; /* Reduced width */
    height: 0.125rem; /* Reduced height */
    margin: 0.15rem 0; /* Reduced margin */
    background-color: #333333;
    border-radius: 0.125rem;
    transition: all 0.3s ease;
  }
  
  .mobile-hamburger span.rotate.top-bar {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .mobile-hamburger span.hidden {
    opacity: 0;
  }
  
  .mobile-hamburger span.rotate.bottom-bar {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  
  /* Mobile Menu */
  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 20rem;
    height: 100vh;
    background-color: white;
    z-index: 9998; /* Increased z-index */
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  
  .mobile-menu.open {
    right: 0;
  }
  
  /* Mobile Menu Header */
  .mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #eee;
  }
  
  .mobile-logo {
    font-size: 1.25rem;
    font-weight: bold;
    color: #FFD700;
    text-decoration: none;
  }
  
  .mobile-close {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #333333;
    padding: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Mobile Navigation Content */
  .mobile-nav-content {
    padding: 1rem;
  }
  
  .mobile-nav-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .mobile-nav-item {
    margin: 0.625rem 0;
    position: relative;
  }
  
  .mobile-nav-item.active {
    position: relative;
  }
  
  .active-indicator {
    position: absolute;
    left: -1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.25rem;
    height: 1.25rem;
    background-color: #FFD700;
    border-radius: 0.125rem;
  }
  
  .mobile-nav-item a {
    display: block;
    padding: 0.625rem 0;
    color: #333333;
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  
  .mobile-nav-item a:hover {
    color: #FFD700;
  }
  
  /* Language Switcher in Mobile Menu */
  .language-switcher-container {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #eee;
    text-align: center;
  }
  
  .language-switcher-button {
    background-color: #FF8C00;
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s;
    font-size: 1rem;
  }
  
  .language-switcher-button:hover {
    background-color: #e67e00;
  }
  
  /* Hide hamburger on desktop */
  @media (min-width: 769px) {
    .mobile-hamburger {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    /* Hide existing navigation on mobile */
    :global(header nav), 
    :global(.site-nav),
    :global(nav:not(.mobile-nav-content)) {
      display: none !important;
    }
    
    /* Hide the language switcher in the header on mobile */
    :global(header .language-toggle) {
      display: none !important;
    }
  }
</style>
