<!-- // src/routes/gallery/+page.svelte -->
<script>
  import { _ } from 'svelte-i18n';
  import GalleryFilter from '$lib/components/GalleryFilter.svelte';
  
  // Sample gallery data - in a real application, this would come from a database
  const galleryItems = [
    {
      id: 1,
      title: 'Birthday Party',
      description: 'Colorful birthday celebration with games and activities',
      image: '/images/gallery1.jpg',
      category: 'birthday',
      date: '2025-02-15'
    },
    {
      id: 2,
      title: 'School Event',
      description: 'Educational activities and performances at a local school',
      image: '/images/gallery2.jpg',
      category: 'school',
      date: '2025-01-22'
    },
    {
      id: 3,
      title: 'Holiday Celebration',
      description: 'Special themed event for cultural holiday',
      image: '/images/gallery3.jpg',
      category: 'holiday',
      date: '2024-12-25'
    },
    {
      id: 4,
      title: 'Sports Day',
      description: 'Fun sports activities and competitions for kids',
      image: '/images/gallery4.jpg',
      category: 'sports',
      date: '2025-02-05'
    },
    {
      id: 5,
      title: 'Art Workshop',
      description: 'Creative art session with painting and crafts',
      image: '/images/gallery5.jpg',
      category: 'workshop',
      date: '2025-01-18'
    },
    {
      id: 6,
      title: 'Music Festival',
      description: 'Kids enjoying musical performances and instrument exploration',
      image: '/images/gallery6.jpg',
      category: 'music',
      date: '2025-03-01'
    },
    {
      id: 7,
      title: 'Science Day',
      description: 'Interactive science experiments and educational activities',
      image: '/images/gallery7.jpg',
      category: 'science',
      date: '2025-02-22'
    },
    {
      id: 8,
      title: 'Carnival',
      description: 'Fun-filled carnival with games, food, and entertainment',
      image: '/images/gallery8.jpg',
      category: 'carnival',
      date: '2025-01-10'
    },
    {
      id: 9,
      title: 'Outdoor Adventure',
      description: 'Nature exploration and outdoor activities for kids',
      image: '/images/gallery9.jpg',
      category: 'outdoor',
      date: '2025-03-15'
    }
  ];
  
  // Filter categories
  const categories = ['all', 'birthday', 'school', 'holiday', 'sports', 'workshop', 'music', 'science', 'carnival', 'outdoor'];
  
  // Reactive state
  let selectedCategory = 'all';
  let filteredGallery = [...galleryItems];
  
  // Filter gallery items based on selected category
  function handleCategoryChange(event) {
    const category = event.detail.category;
    selectedCategory = category;
    if (category === 'all') {
      filteredGallery = [...galleryItems];
    } else {
      filteredGallery = galleryItems.filter(item => item.category === category);
    }
  }
  
  // Format date for display
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
</script>

<svelte:head>
  <title>Gallery - Enkutatashi</title>
</svelte:head>

<div class="gallery-page">
  <section class="page-header">
    <h1>{$_('gallery')}</h1>
    <p>Explore photos from our past events and activities.</p>
  </section>
  
  <section>
    <GalleryFilter 
      categories={categories} 
      selectedCategory={selectedCategory} 
      on:categoryChange={handleCategoryChange} 
    />
  </section>
  
  <section class="gallery-grid">
    {#each filteredGallery as item}
      <div class="gallery-item">
        <div class="gallery-image">
          <div class="image-placeholder"></div>
          <div class="gallery-category">{item.category}</div>
        </div>
        <div class="gallery-details">
          <h3>{item.title}</h3>
          <p class="gallery-date">{formatDate(item.date)}</p>
          <p class="gallery-description">{item.description}</p>
        </div>
      </div>
    {/each}
  </section>
</div>

<style>
  .gallery-page {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .page-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .page-header h1 {
    color: #333333;
    margin-bottom: 0.5rem;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .gallery-item {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .gallery-item:hover {
    transform: translateY(-5px);
  }
  
  .gallery-image {
    height: 200px;
    position: relative;
    overflow: hidden;
  }
  
  .image-placeholder {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
  }
  
  .gallery-category {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: #FFD700;
    color: #333333;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  
  .gallery-details {
    padding: 1.5rem;
  }
  
  .gallery-details h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #333333;
  }
  
  .gallery-date {
    color: #666666;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
  
  .gallery-description {
    color: #333333;
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
