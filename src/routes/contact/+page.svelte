<!-- // src/routes/contact/+page.svelte -->
<script>
  import { _ } from 'svelte-i18n';
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
  <title>Contact - Enkutatashi</title>
</svelte:head>

<div class="contact-page">
  <section class="page-header">
    <h1>{$_('contact_us')}</h1>
    <p>Get in touch with us to plan your next unforgettable kids event.</p>
  </section>
  
  <section class="contact-content">
    <div class="contact-info">
      <h2>Contact Information</h2>
      <div class="info-item">
        <div class="info-icon">📍</div>
        <div class="info-text">
          <h3>Address</h3>
          <p>123 Main Street, Bole District</p>
          <p>Addis Ababa, Ethiopia</p>
        </div>
      </div>
      
      <div class="info-item">
        <div class="info-icon">📞</div>
        <div class="info-text">
          <h3>Phone</h3>
          <p>+251 123 456 789</p>
          <p>+251 987 654 321</p>
        </div>
      </div>
      
      <div class="info-item">
        <div class="info-icon">✉️</div>
        <div class="info-text">
          <h3>Email</h3>
          <p>info@enkutatashi.com</p>
          <p>events@enkutatashi.com</p>
        </div>
      </div>
      
      <div class="info-item">
        <div class="info-icon">🕒</div>
        <div class="info-text">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      
      <div class="social-media">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="#" class="social-icon">Facebook</a>
          <a href="#" class="social-icon">Instagram</a>
          <a href="#" class="social-icon">Twitter</a>
          <a href="#" class="social-icon">YouTube</a>
        </div>
      </div>
    </div>
    
    <div class="contact-form">
      <h2>Send Us a Message</h2>
      <ContactForm />
    </div>
  </section>
  
  <section class="map-section">
    <h2>Find Us</h2>
    <div class="map-container">
      <div class="map-placeholder">
        <p>Map of Enkutatashi location in Addis Ababa</p>
      </div>
    </div>
  </section>
  
  <section class="faq-section">
    <h2>Frequently Asked Questions</h2>
    
    <div class="faq-item">
      <h3>What types of events do you organize?</h3>
      <p>We specialize in organizing a wide range of kids events including birthday parties, school events, holiday celebrations, educational workshops, sports days, and more. We can customize any event to meet your specific needs and preferences.</p>
    </div>
    
    <div class="faq-item">
      <h3>How far in advance should I book an event?</h3>
      <p>We recommend booking at least 4-6 weeks in advance for most events to ensure availability and allow sufficient time for planning. For larger events or during peak seasons, booking 2-3 months ahead is advisable.</p>
    </div>
    
    <div class="faq-item">
      <h3>Do you provide all the equipment and supplies?</h3>
      <p>Yes, we provide all necessary equipment, decorations, and supplies for your event. Our comprehensive service includes setup, coordination during the event, and cleanup afterward.</p>
    </div>
    
    <div class="faq-item">
      <h3>Can you accommodate dietary restrictions?</h3>
      <p>Absolutely! We can accommodate various dietary restrictions and food allergies. Please inform us of any special requirements when booking your event, and we'll ensure appropriate food options are available.</p>
    </div>
  </section>
</div>

<style>
  .contact-page {
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
  
  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .contact-info {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .info-item {
    display: flex;
    margin-bottom: 1.5rem;
  }
  
  .info-icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: #FFD700;
  }
  
  .info-text h3 {
    margin: 0 0 0.5rem 0;
    color: #333333;
  }
  
  .info-text p {
    margin: 0;
    color: #666666;
  }
  
  .social-media {
    margin-top: 2rem;
  }
  
  .social-icons {
    display: flex;
    gap: 1rem;
  }
  
  .social-icon {
    color: #333333;
    transition: color 0.3s;
  }
  
  .social-icon:hover {
    color: #FFD700;
  }
  
  .map-section {
    margin-bottom: 3rem;
  }
  
  .map-section h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .map-container {
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .map-placeholder {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    text-align: center;
  }
  
  .faq-section {
    margin-bottom: 3rem;
  }
  
  .faq-section h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .faq-item {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }
  
  .faq-item h3 {
    color: #333333;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .faq-item p {
    margin: 0;
    color: #666666;
  }
  
  @media (max-width: 768px) {
    .contact-content {
      grid-template-columns: 1fr;
    }
    
    .contact-form {
      order: -1;
    }
  }
</style>
