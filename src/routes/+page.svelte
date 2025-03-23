<!-- // src/routes/+page.svelte -->
<script>
  import { _ } from 'svelte-i18n';
  
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Abebe Kebede',
      role: 'Parent',
      content: 'Enkutatashi organized the most amazing birthday party for my son. The kids had so much fun with all the activities and games. Highly recommended!',
      image: '/images/testimonial1.jpg'
    },
    {
      id: 2,
      name: 'Sara Haile',
      role: 'School Principal',
      content: 'We hired Enkutatashi for our school\'s annual event and they exceeded our expectations. Their team was professional, creative, and the children loved every moment.',
      image: '/images/testimonial2.jpg'
    },
    {
      id: 3,
      name: 'Dawit Mekonnen',
      role: 'Parent',
      content: 'The holiday celebration Enkutatashi organized was spectacular! The decorations, activities, and entertainment were perfect. We will definitely use their services again.',
      image: '/images/testimonial3.jpg'
    }
  ];
  
  // Sample services data
  const services = [
    {
      id: 1,
      title: 'Birthday Parties',
      description: 'Unforgettable birthday celebrations with themes, games, entertainment, and more.',
      icon: '🎂'
    },
    {
      id: 2,
      title: 'School Events',
      description: 'Educational and fun events for schools including sports days, graduations, and special celebrations.',
      icon: '🏫'
    },
    {
      id: 3,
      title: 'Holiday Celebrations',
      description: 'Festive holiday events with themed decorations, activities, and entertainment.',
      icon: '🎉'
    },
    {
      id: 4,
      title: 'Educational Workshops',
      description: 'Interactive workshops that combine learning and fun for children of all ages.',
      icon: '📚'
    }
  ];
  
  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Spring Festival',
      date: 'April 15, 2025',
      location: 'Central Park, Addis Ababa',
      image: '/images/event1.jpg'
    },
    {
      id: 2,
      title: 'Science Day',
      date: 'April 22, 2025',
      location: 'Science Museum, Addis Ababa',
      image: '/images/event2.jpg'
    },
    {
      id: 3,
      title: 'Kids Sports Day',
      date: 'May 5, 2025',
      location: 'National Stadium, Addis Ababa',
      image: '/images/event3.jpg'
    }
  ];
</script>

<svelte:head>
  <title>Enkutatashi - Kids Event Organizer</title>
</svelte:head>

<div class="home-page">
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>Enkutatashi</h1>
      <p class="tagline">Creating Unforgettable Experiences for Children</p>
      <p class="description">We specialize in organizing fun, educational, and memorable events for kids of all ages.</p>
      <div class="hero-buttons">
        <a href="/contact" class="primary-button">Contact Us</a>
        <a href="/events" class="secondary-button">View Events</a>
      </div>
    </div>
  </section>
  
  <!-- Services Section -->
  <section class="services">
    <h2>{$_('our_services')}</h2>
    <div class="services-grid">
      {#each services as service}
        <div class="service-card">
          <div class="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      {/each}
    </div>
  </section>
  
  <!-- Upcoming Events Section -->
  <section class="upcoming-events">
    <h2>{$_('upcoming_events')}</h2>
    <div class="events-grid">
      {#each upcomingEvents as event}
        <div class="event-card">
          <div class="event-image">
            <div class="event-placeholder"></div>
          </div>
          <div class="event-details">
            <h3>{event.title}</h3>
            <p class="event-date">📅 {event.date}</p>
            <p class="event-location">📍 {event.location}</p>
            <a href="/events" class="event-link">{$_('read_more')}</a>
          </div>
        </div>
      {/each}
    </div>
    <div class="view-all">
      <a href="/events" class="view-all-link">{$_('view_all')}</a>
    </div>
  </section>
  
  <!-- Testimonials Section -->
  <section class="testimonials">
    <h2>{$_('testimonials')}</h2>
    <div class="testimonials-grid">
      {#each testimonials as testimonial}
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"{testimonial.content}"</p>
          </div>
          <div class="testimonial-author">
            <div class="testimonial-image">
              <div class="author-placeholder"></div>
            </div>
            <div class="author-details">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  <!-- Call to Action Section -->
  <section class="cta">
    <div class="cta-content">
      <h2>Ready to Plan Your Next Event?</h2>
      <p>Contact us today to discuss how we can create an unforgettable experience for your children.</p>
      <a href="/contact" class="primary-button">Get in Touch</a>
    </div>
  </section>
</div>

<style>
  /* Hero Section */
  .hero {
    background-color: #FFD700;
    color: #333333;
    padding: 4rem 2rem;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 3rem;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .tagline {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .description {
    max-width: 600px;
    margin: 0 auto 2rem;
  }
  
  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .primary-button {
    background-color: #333333;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s;
  }
  
  .primary-button:hover {
    background-color: #555555;
  }
  
  .secondary-button {
    background-color: white;
    color: #333333;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s;
  }
  
  .secondary-button:hover {
    background-color: #f0f0f0;
  }
  
  /* Services Section */
  .services {
    margin-bottom: 3rem;
  }
  
  .services h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .service-card {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
  }
  
  .service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .service-card h3 {
    margin-bottom: 1rem;
    color: #333333;
  }
  
  /* Upcoming Events Section */
  .upcoming-events {
    margin-bottom: 3rem;
  }
  
  .upcoming-events h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .event-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .event-card:hover {
    transform: translateY(-5px);
  }
  
  .event-image {
    height: 200px;
    overflow: hidden;
  }
  
  .event-placeholder {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
  }
  
  .event-details {
    padding: 1.5rem;
  }
  
  .event-details h3 {
    margin-bottom: 0.5rem;
    color: #333333;
  }
  
  .event-date, .event-location {
    color: #666666;
    margin-bottom: 0.5rem;
  }
  
  .event-link {
    display: inline-block;
    margin-top: 1rem;
    font-weight: 600;
  }
  
  .view-all {
    text-align: center;
    margin-top: 2rem;
  }
  
  .view-all-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #f0f0f0;
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s;
  }
  
  .view-all-link:hover {
    background-color: #e0e0e0;
  }
  
  /* Testimonials Section */
  .testimonials {
    margin-bottom: 3rem;
  }
  
  .testimonials h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .testimonial-card {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .testimonial-content {
    margin-bottom: 1.5rem;
    font-style: italic;
    color: #555555;
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
  }
  
  .testimonial-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
  }
  
  .author-placeholder {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
  }
  
  .author-details h4 {
    margin: 0;
    color: #333333;
  }
  
  .author-details p {
    margin: 0;
    color: #666666;
    font-size: 0.875rem;
  }
  
  /* Call to Action Section */
  .cta {
    background-color: #FFD700;
    color: #333333;
    padding: 3rem 2rem;
    text-align: center;
    border-radius: 8px;
  }
  
  .cta-content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .cta h2 {
    margin-bottom: 1rem;
  }
  
  .cta p {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.5rem;
    }
    
    .tagline {
      font-size: 1.25rem;
    }
    
    .hero-buttons {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .services-grid, .events-grid, .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
