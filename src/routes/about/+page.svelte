<!-- // src/routes/about/+page.svelte -->
<script>
  import { _ } from 'svelte-i18n';
  
  // Sample team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Kidist Abebe',
      role: 'Founder & CEO',
      bio: 'With over 15 years of experience in event planning and a passion for children\'s education, Kidist founded Enkutatashi to create memorable experiences for kids across Ethiopia.',
      image: '/images/team1.jpg'
    },
    {
      id: 2,
      name: 'Yonas Tadesse',
      role: 'Creative Director',
      bio: 'Yonas brings his artistic vision and creative expertise to every event, ensuring unique and engaging experiences that children will remember for years to come.',
      image: '/images/team2.jpg'
    },
    {
      id: 3,
      name: 'Hiwot Girma',
      role: 'Event Coordinator',
      bio: 'With meticulous attention to detail and exceptional organizational skills, Hiwot ensures that every event runs smoothly from planning to execution.',
      image: '/images/team3.jpg'
    },
    {
      id: 4,
      name: 'Dawit Bekele',
      role: 'Educational Specialist',
      bio: 'As a former teacher, Dawit designs educational components for our events that make learning fun and engaging for children of all ages.',
      image: '/images/team4.jpg'
    }
  ];
  
  // Company milestones
  const milestones = [
    {
      year: 2018,
      title: 'Company Founded',
      description: 'Enkutatashi was established with a mission to create memorable and educational events for children.'
    },
    {
      year: 2019,
      title: 'First Major Event',
      description: 'Successfully organized our first large-scale event, a holiday celebration with over 500 children in attendance.'
    },
    {
      year: 2020,
      title: 'Educational Programs',
      description: 'Launched our educational workshop series, combining learning with fun activities for children.'
    },
    {
      year: 2022,
      title: 'Expansion',
      description: 'Expanded our services to include school events and specialized educational programs.'
    },
    {
      year: 2024,
      title: 'Community Recognition',
      description: 'Received community recognition award for our contribution to children\'s education and entertainment.'
    }
  ];
</script>

<svelte:head>
  <title>About - Enkutatashi</title>
</svelte:head>

<div class="about-page">
  <section class="page-header">
    <h1>{$_('about_us')}</h1>
    <p>Learn more about Enkutatashi and our mission to create unforgettable experiences for children.</p>
  </section>
  
  <section class="about-content">
    <div class="about-image">
      <div class="image-placeholder">
        <p>Enkutatashi team in action</p>
      </div>
    </div>
    
    <div class="about-text">
      <h2>Our Story</h2>
      <p>Enkutatashi was founded in 2018 with a simple mission: to create memorable, educational, and fun experiences for children across Ethiopia. Our name, which means "growth" in Amharic, reflects our commitment to helping children grow through engaging and enriching events.</p>
      
      <p>What began as a small operation organizing birthday parties has grown into a comprehensive event planning company specializing in a wide range of children's events, from educational workshops to holiday celebrations and school events.</p>
      
      <h2>Our Mission</h2>
      <p>At Enkutatashi, we believe that childhood is a time of wonder, discovery, and joy. Our mission is to create events that not only entertain but also educate and inspire children, fostering their creativity, curiosity, and social skills.</p>
      
      <p>We are committed to providing safe, inclusive, and engaging environments where children can learn, play, and create lasting memories. Every event we organize is designed with careful attention to detail, ensuring a positive experience for children and peace of mind for parents.</p>
      
      <h2>Our Values</h2>
      <ul class="values-list">
        <li>
          <strong>Safety First:</strong> The safety and well-being of children is our top priority in every event we organize.
        </li>
        <li>
          <strong>Educational Excellence:</strong> We incorporate educational elements into our events to make learning fun and engaging.
        </li>
        <li>
          <strong>Creativity:</strong> We bring imagination and innovation to every event, creating unique experiences that inspire wonder.
        </li>
        <li>
          <strong>Inclusivity:</strong> We design our events to be accessible and enjoyable for children of all backgrounds and abilities.
        </li>
        <li>
          <strong>Cultural Awareness:</strong> We celebrate Ethiopia's rich cultural heritage and incorporate traditional elements into our events.
        </li>
      </ul>
    </div>
  </section>
  
  <section class="milestones">
    <h2>Our Journey</h2>
    <div class="timeline">
      {#each milestones as milestone}
        <div class="timeline-item">
          <div class="timeline-year">{milestone.year}</div>
          <div class="timeline-content">
            <h3>{milestone.title}</h3>
            <p>{milestone.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  <section class="team">
    <h2>{$_('our_team')}</h2>
    <div class="team-grid">
      {#each teamMembers as member}
        <div class="team-member">
          <div class="member-image">
            <div class="image-placeholder"></div>
          </div>
          <div class="member-details">
            <h3>{member.name}</h3>
            <p class="member-role">{member.role}</p>
            <p class="member-bio">{member.bio}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  <section class="cta">
    <div class="cta-content">
      <h2>Ready to Create Unforgettable Memories?</h2>
      <p>Contact us today to discuss how we can make your next children's event special.</p>
      <a href="/contact" class="primary-button">Get in Touch</a>
    </div>
  </section>
</div>

<style>
  .about-page {
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
  
  .about-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .about-image {
    height: 400px;
    border-radius: 8px;
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
    text-align: center;
  }
  
  .about-text h2 {
    color: #333333;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  .about-text p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .values-list {
    padding-left: 1.5rem;
  }
  
  .values-list li {
    margin-bottom: 0.75rem;
  }
  
  .milestones {
    margin-bottom: 3rem;
  }
  
  .milestones h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 120px;
    width: 2px;
    background-color: #FFD700;
  }
  
  .timeline-item {
    position: relative;
    display: flex;
    margin-bottom: 2rem;
  }
  
  .timeline-year {
    width: 100px;
    font-weight: bold;
    color: #333333;
    text-align: right;
    padding-right: 2rem;
  }
  
  .timeline-content {
    flex: 1;
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-left: 2rem;
  }
  
  .timeline-content h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #333333;
  }
  
  .timeline-content p {
    margin: 0;
    color: #666666;
  }
  
  .team {
    margin-bottom: 3rem;
  }
  
  .team h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .team-member {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .team-member:hover {
    transform: translateY(-5px);
  }
  
  .member-image {
    height: 250px;
    overflow: hidden;
  }
  
  .member-details {
    padding: 1.5rem;
  }
  
  .member-details h3 {
    margin-top: 0;
    margin-bottom: 0.25rem;
    color: #333333;
  }
  
  .member-role {
    color: #FFD700;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .member-bio {
    color: #666666;
    margin: 0;
  }
  
  .cta {
    background-color: #FFD700;
    color: #333333;
    padding: 3rem 2rem;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 3rem;
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
  
  .primary-button {
    background-color: #333333;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s;
    display: inline-block;
  }
  
  .primary-button:hover {
    background-color: #555555;
  }
  
  @media (max-width: 768px) {
    .about-content {
      grid-template-columns: 1fr;
    }
    
    .timeline::before {
      left: 30px;
    }
    
    .timeline-year {
      width: 60px;
      padding-right: 1rem;
    }
    
    .timeline-content {
      margin-left: 1rem;
    }
    
    .team-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
