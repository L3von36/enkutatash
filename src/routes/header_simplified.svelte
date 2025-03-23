<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { onMount } from 'svelte';

	let mobileMenuOpen = false;
	
	function toggleMobileMenu(): void {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// Close mobile menu when clicking outside
	onMount(() => {
		const handleClickOutside = (event: MouseEvent): void => {
			const nav = document.querySelector('nav');
			const hamburger = document.querySelector('.hamburger');
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

<header>
	<div class="corner">
		<a href="https://svelte.dev/docs/kit">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class:open={mobileMenuOpen}>
		<svg viewBox="0 0 2 3" aria-hidden="true" class="nav-background left">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true" class="nav-background right">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<!-- Hamburger menu button - always visible on mobile -->
	<div class="hamburger-container">
		<button class="hamburger" aria-label="Toggle menu" on:click={toggleMobileMenu}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	/* Base styles */
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		width: 100%;
		padding: 0.5rem 0;
		box-sizing: border-box;
	}

	.corner {
		width: 3em;
		height: 3em;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	/* Navigation styles */
	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	.nav-background {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	/* Hamburger menu container - always visible on mobile */
	.hamburger-container {
		display: none; /* Hidden on desktop */
	}

	/* Hamburger menu button */
	.hamburger {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		z-index: 100;
		width: 40px;
		height: 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.9);
		border-radius: 4px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	}

	.hamburger span {
		display: block;
		width: 25px;
		height: 3px;
		margin: 3px 0;
		background-color: var(--color-text, #444);
		transition: all 0.3s ease;
	}

	/* Mobile styles */
	@media (max-width: 768px) {
		.corner {
			width: 2.5em;
			height: 2.5em;
			z-index: 5;
		}

		.corner img {
			width: 1.8em;
			height: 1.8em;
		}

		/* Show hamburger menu container */
		.hamburger-container {
			display: block;
			position: absolute;
			top: 0.5rem;
			right: 1rem;
			z-index: 100;
		}

		/* Hide desktop navigation */
		nav {
			position: fixed;
			top: 0;
			right: -100%;
			width: 70%;
			height: 100vh;
			background-color: var(--background);
			flex-direction: column;
			justify-content: flex-start;
			padding-top: 4rem;
			transition: right 0.3s ease;
			z-index: 10;
			box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
		}

		/* Show navigation when open */
		nav.open {
			right: 0;
		}

		/* Hide SVG backgrounds on mobile */
		.nav-background {
			display: none;
		}

		/* Stack menu items vertically */
		ul {
			flex-direction: column;
			height: auto;
			width: 100%;
		}

		li {
			width: 100%;
			height: auto;
			margin: 0.5rem 0;
		}

		/* Adjust current page indicator */
		li[aria-current='page']::before {
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			border: var(--size) solid transparent;
			border-left: var(--size) solid var(--color-theme-1);
		}

		nav a {
			width: 100%;
			padding: 1rem 1.5rem;
			font-size: 1rem;
			justify-content: flex-start;
		}
	}

	/* Small mobile devices */
	@media (max-width: 480px) {
		.corner {
			width: 2em;
			height: 2em;
		}

		.corner img {
			width: 1.5em;
			height: 1.5em;
		}

		nav {
			width: 85%;
		}

		nav a {
			font-size: 0.95rem;
			padding: 0.8rem 1.2rem;
		}
	}

	/* Hamburger animation when menu is open */
	.open ~ .hamburger-container .hamburger span:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.open ~ .hamburger-container .hamburger span:nth-child(2) {
		opacity: 0;
	}

	.open ~ .hamburger-container .hamburger span:nth-child(3) {
		transform: rotate(-45deg) translate(7px, -7px);
	}
</style>

<!-- Add this to your HTML head section -->
<!-- <meta name="viewport" content="width=device-width, initial-scale=1" /> -->
