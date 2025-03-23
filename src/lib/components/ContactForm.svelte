
<script>
  import { _ } from 'svelte-i18n';
  import { onMount } from 'svelte';
  
  // Form data
  let name = '';
  let email = '';
  let phone = '';
  let eventType = '';
  let date = '';
  let message = '';
  
  // Form state
  let isSubmitting = false;
  let isSuccess = false;
  let errors = {};
  
  // Event type options
  const eventTypes = [
    { value: '', label: 'Select Event Type' },
    { value: 'birthday', label: 'Birthday Party' },
    { value: 'school', label: 'School Event' },
    { value: 'holiday', label: 'Holiday Celebration' },
    { value: 'other', label: 'Other' }
  ];
  
  // Validate form
  function validateForm() {
    errors = {};
    
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!message.trim()) {
      errors.message = 'Message is required';
    }
    
    return Object.keys(errors).length === 0;
  }
  
  // Handle form submission
  async function handleSubmit() {
    if (!validateForm()) {
      return;
    }
    
    isSubmitting = true;
    
    // Simulate API call
    setTimeout(() => {
      isSubmitting = false;
      isSuccess = true;
      
      // Reset form
      name = '';
      email = '';
      phone = '';
      eventType = '';
      date = '';
      message = '';
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        isSuccess = false;
      }, 5000);
    }, 1500);
  }
</script>

<div class="contact-form-container">
  {#if isSuccess}
    <div class="success-message">
      <p>Thank you for your message! We'll get back to you soon.</p>
    </div>
  {:else}
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-group">
        <label for="name">{$_('name')}</label>
        <input 
          type="text" 
          id="name" 
          bind:value={name} 
          class:error={errors.name}
          disabled={isSubmitting}
        >
        {#if errors.name}
          <span class="error-message">{errors.name}</span>
        {/if}
      </div>
      
      <div class="form-group">
        <label for="email">{$_('email')}</label>
        <input 
          type="email" 
          id="email" 
          bind:value={email} 
          class:error={errors.email}
          disabled={isSubmitting}
        >
        {#if errors.email}
          <span class="error-message">{errors.email}</span>
        {/if}
      </div>
      
      <div class="form-group">
        <label for="phone">{$_('phone')}</label>
        <input 
          type="tel" 
          id="phone" 
          bind:value={phone}
          disabled={isSubmitting}
        >
      </div>
      
      <div class="form-group">
        <label for="event-type">{$_('event_type')}</label>
        <select 
          id="event-type" 
          bind:value={eventType}
          disabled={isSubmitting}
        >
          {#each eventTypes as type}
            <option value={type.value}>{type.label}</option>
          {/each}
        </select>
      </div>
      
      <div class="form-group">
        <label for="date">{$_('date')}</label>
        <input 
          type="date" 
          id="date" 
          bind:value={date}
          disabled={isSubmitting}
        >
      </div>
      
      <div class="form-group">
        <label for="message">{$_('message')}</label>
        <textarea 
          id="message" 
          rows="5" 
          bind:value={message} 
          class:error={errors.message}
          disabled={isSubmitting}
        ></textarea>
        {#if errors.message}
          <span class="error-message">{errors.message}</span>
        {/if}
      </div>
      
      <button 
        type="submit" 
        class="submit-button" 
        disabled={isSubmitting}
      >
        {#if isSubmitting}
          Sending...
        {:else}
          {$_('send_message')}
        {/if}
      </button>
    </form>
  {/if}
</div>

<style>
  .contact-form-container {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333333;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
  }
  
  input.error, textarea.error {
    border-color: #ff3e3e;
  }
  
  .error-message {
    color: #ff3e3e;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: block;
  }
  
  .submit-button {
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
  
  .submit-button:hover {
    background-color: #e6c200;
  }
  
  .submit-button:disabled {
    background-color: #f0f0f0;
    color: #999;
    cursor: not-allowed;
  }
  
  .success-message {
    background-color: #e6f7e6;
    color: #2e7d32;
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
  }
</style>
