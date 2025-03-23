<!-- // src/lib/components/GalleryFilter.svelte -->
<script>
  import { _ } from 'svelte-i18n';
  import { createEventDispatcher } from 'svelte';
  
  // Props
  export let categories = ['all'];
  export let selectedCategory = 'all';
  
  // Event dispatcher to notify parent component of category changes
  const dispatch = createEventDispatcher();
  
  // Handle category selection
  function selectCategory(category) {
    selectedCategory = category;
    dispatch('categoryChange', { category });
  }
</script>

<div class="gallery-filter">
  <div class="filter-buttons">
    {#each categories as category}
      <button 
        class="filter-button {selectedCategory === category ? 'active' : ''}" 
        on:click={() => selectCategory(category)}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    {/each}
  </div>
</div>

<style>
  .gallery-filter {
    margin-bottom: 2rem;
  }
  
  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .filter-button {
    background-color: #f0f0f0;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .filter-button:hover {
    background-color: #e0e0e0;
  }
  
  .filter-button.active {
    background-color: #FFD700;
    color: #333333;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    .filter-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .filter-button {
      width: 100%;
      max-width: 200px;
    }
  }
</style>
