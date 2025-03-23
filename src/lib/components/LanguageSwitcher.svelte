
<script>
  import { locale } from 'svelte-i18n';
  
  // Toggle between Amharic and English
  function toggleLanguage() {
    $locale = $locale === 'am' ? 'en' : 'am';
  }
</script>

<button class="language-toggle" on:click={toggleLanguage}>
  {$locale === 'am' ? 'English' : 'አማርኛ'}
</button>

<style>
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
</style>
