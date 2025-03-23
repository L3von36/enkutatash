<script lang="ts">
	import { onMount } from 'svelte';

	// Props
	export let menuItems = [
		{ href: '/', label: 'Home', current: false },
		{ href: '/events', label: 'Events', current: false },
		{ href: '/gallery', label: 'Gallery', current: false },
		{ href: '/about', label: 'About', current: false },
		{ href: '/contact', label: 'Contact', current: false }
	];
	
	export let currentPath = '/';
	export let logoText = 'Enkutatashi';
	export let logoHref = '/';
	export let primaryColor = '#ffcc00';
	export let textColor = '#333333';
	
	let mobileMenuOpen = false;
	
	function toggleMobileMenu(): void {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// Close mobile menu when clicking outside
	onMount(() => {
		const handleClickOutside = (event: MouseEvent): void => {
			const nav = document.querySelector('.mobile-nav-menu');
			const hamburger = document.querySelector('.mobile-hamburger');
			if (mobileMenuOpen && nav && !nav.contains(event.target as Node) && 
				hamburger && !hamburger.contains(event.target as Node)) {
				mobileMenuOpen = false;
			}
		};
		
		document.addEventListener('click', handleClickOutside);
		
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<!-- Mobile Navigation Component - Separate from existing navigation -->
<div class="mobile-nav-wrapper">
	<!-- Mobile Hamburger Button - Fixed Position -->
	<button 
		class="mobile-hamburger" 
		aria-label="Toggle mobile menu" 
		on:click={toggleMobileMenu}
		style="--primary-color: {primaryColor}; --text-color: {textColor};"
	>
		<span></span>
		<span></span>
		<span></span>
	</button>

	<!-- Mobile Navigation Menu -->
	<div class="mobile-nav-menu" class:open={mobileMenuOpen} style="--primary-color: {primaryColor}; --text-color: {textColor};">
		<div class="mobile-nav-header">
			<a href={logoHref} class="mobile-logo">{logoText}</a>
			<button class="mobile-close" on:click={toggleMobileMenu}>×</button>
		</div>
		
		<nav class="mobile-nav">
			<ul>
				{#each menuItems as item}
					<li class:active={currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))}>
						<a href={item.href}>{item.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</div>

<style>
	/* Mobile Navigation Wrapper */
	.mobile-nav-wrapper {
		display: none; /* Hidden by default, shown only on mobile */
	}

	/* Mobile Hamburger Button */
	.mobile-hamburger {
		position: fixed;
		top: 15px;
		right: 15px;
		z-index: 1000;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background-color: var(--primary-color, #ffcc00);
		border: none;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		padding: 0;
	}

	.mobile-hamburger span {
		display: block;
		width: 24px;
		height: 3px;
		margin: 3px 0;
		background-color: var(--text-color, #333);
		transition: all 0.3s ease;
		border-radius: 2px;
	}

	/* Mobile Navigation Menu */
	.mobile-nav-menu {
		position: fixed;
		top: 0;
		right: -100%;
		width: 80%;
		max-width: 320px;
		height: 100vh;
		background-color: white;
		z-index: 999;
		box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
		transition: right 0.3s ease;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	.mobile-nav-menu.open {
		right: 0;
	}

	/* Mobile Navigation Header */
	.mobile-nav-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px;
		border-bottom: 1px solid #eee;
	}

	.mobile-logo {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--primary-color, #ffcc00);
		text-decoration: none;
	}

	.mobile-close {
		background: none;
		border: none;
		font-size: 2rem;
		cursor: pointer;
		color: var(--text-color, #333);
		padding: 0;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Mobile Navigation */
	.mobile-nav {
		padding: 15px;
	}

	.mobile-nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.mobile-nav li {
		margin: 10px 0;
	}

	.mobile-nav li.active {
		position: relative;
	}

	.mobile-nav li.active::before {
		content: '';
		position: absolute;
		left: -15px;
		top: 50%;
		transform: translateY(-50%);
		width: 5px;
		height: 20px;
		background-color: var(--primary-color, #ffcc00);
		border-radius: 2px;
	}

	.mobile-nav a {
		display: block;
		padding: 10px 0;
		color: var(--text-color, #333);
		text-decoration: none;
		font-size: 1.1rem;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.mobile-nav a:hover {
		color: var(--primary-color, #ffcc00);
	}

	/* Hamburger Animation */
	.mobile-nav-menu.open ~ .mobile-hamburger span:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.mobile-nav-menu.open ~ .mobile-hamburger span:nth-child(2) {
		opacity: 0;
	}

	.mobile-nav-menu.open ~ .mobile-hamburger span:nth-child(3) {
		transform: rotate(-45deg) translate(7px, -7px);
	}

	/* Media Queries */
	@media (max-width: 768px) {
		.mobile-nav-wrapper {
			display: block;
		}
	}
</style>
