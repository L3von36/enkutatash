<!-- // src/routes/events/+page.svelte -->
<script>
  import { _ } from 'svelte-i18n';
  import EventCalendar from '$lib/components/EventCalendar.svelte';
  
  // Sample event data - in a real application, this would come from a database
  const upcomingEvents = [
    {
      id: 1,
      title: 'Spring Festival',
      date: 'April 15, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Central Park, Addis Ababa',
      description: 'A colorful celebration of spring with games, music, and fun activities for children of all ages.',
      image: '/images/event1.jpg',
      category: 'holiday'
    },
    {
      id: 2,
      title: 'Science Day',
      date: 'April 22, 2025',
      time: '9:00 AM - 3:00 PM',
      location: 'Science Museum, Addis Ababa',
      description: 'Interactive science experiments and educational activities for curious minds. Learn while having fun!',
      image: '/images/event2.jpg',
      category: 'educational'
    },
    {
      id: 3,
      title: 'Kids Sports Day',
      date: 'May 5, 2025',
      time: '10:00 AM - 5:00 PM',
      location: 'National Stadium, Addis Ababa',
      description: 'A day of sports, games, and friendly competition for children of all ages. Prizes to be won!',
      image: '/images/event3.jpg',
      category: 'sports'
    },
    {
      id: 4,
      title: 'Art Workshop',
      date: 'May 12, 2025',
      time: '1:00 PM - 4:00 PM',
      location: 'Art Center, Addis Ababa',
      description: 'Creative art workshop where kids can explore different art techniques and create their own masterpieces.',
      image: '/images/event4.jpg',
      category: 'workshop'
    }
  ];
  
  // Sample past events
  const pastEvents = [
    {
      id: 1,
      title: 'Winter Wonderland',
      date: 'December 20, 2024',
      location: 'City Hall, Addis Ababa',
      description: 'A magical winter-themed celebration with snow activities, games, and festive fun.',
      image: '/images/past1.jpg',
      category: 'holiday'
    },
    {
      id: 2,
      title: 'Reading Festival',
      date: 'February 5, 2025',
      location: 'Public Library, Addis Ababa',
      description: 'A celebration of books and reading with storytelling sessions, book exchanges, and literary activities.',
      image: '/images/past2.jpg',
      category: 'educational'
    },
    {
      id: 3,
      title: 'Music Day',
      date: 'March 10, 2025',
      location: 'Music Hall, Addis Ababa',
      description: 'A day of musical exploration with instrument demonstrations, sing-alongs, and performances.',
      image: '/images/past3.jpg',
      category: 'workshop'
    }
  ];
</script>

<svelte:head>
  <title>Events - Enkutatashi</title>
</svelte:head>

<div class="events-page">
  <section class="page-header">
    <h1>{$_('events')}</h1>
    <p>Discover our upcoming and past events for children of all ages.</p>
  </section>
  
  <section class="event-calendar">
    <h2>{$_('upcoming_events')}</h2>
    
    <EventCalendar />
  </section>
  
  <section class="upcoming-events-list">
    <h2>{$_('upcoming_events')}</h2>
    
    <div class="events-grid">
      {#each upcomingEvents as event}
        <div class="event-card">
          <div class="event-image">
            <div class="event-placeholder"></div>
            <div class="event-category">{event.category}</div>
          </div>
          <div class="event-details">
            <h3>{event.title}</h3>
            <p class="event-date">📅 {event.date}</p>
            <p class="event-time">🕒 {event.time}</p>
            <p class="event-location">📍 {event.location}</p>
            <p class="event-description">{event.description}</p>
            <button class="register-button">Register Now</button>
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  <section class="past-events">
    <h2>{$_('past_events')}</h2>
    
    <div class="events-grid">
      {#each pastEvents as event}
        <div class="event-card past">
          <div class="event-image">
            <div class="event-placeholder"></div>
            <div class="event-category">{event.category}</div>
          </div>
          <div class="event-details">
            <h3>{event.title}</h3>
            <p class="event-date">📅 {event.date}</p>
            <p class="event-location">📍 {event.location}</p>
            <p class="event-description">{event.description}</p>
            <div class="past-event-label">Event Completed</div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  .events-page {
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
  
  .event-calendar {
    margin-bottom: 3rem;
  }
  
  .event-calendar h2, .upcoming-events-list h2, .past-events h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
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
    position: relative;
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
  
  .event-category {
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
  
  .event-details {
    padding: 1.5rem;
  }
  
  .event-details h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #333333;
  }
  
  .event-date, .event-time, .event-location {
    color: #666666;
    margin-bottom: 0.5rem;
  }
  
  .event-description {
    margin-bottom: 1.5rem;
  }
  
  .register-button {
    background-color: #FFD700;
    color: #333333;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
  }
  
  .register-button:hover {
    background-color: #e6c200;
  }
  
  .event-card.past {
    opacity: 0.8;
  }
  
  .past-event-label {
    display: inline-block;
    background-color: #f0f0f0;
    color: #666666;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
  }
  
  @media (max-width: 768px) {
    .events-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
