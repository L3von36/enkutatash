<!-- // src/lib/components/EventCalendar.svelte -->
<script>
  import { _ } from 'svelte-i18n';
  import { onMount } from 'svelte';
  
  // Sample event data - in a real application, this would come from a database
  const events = [
    {
      id: 1,
      title: 'Spring Festival',
      date: '2025-04-15',
      description: 'A colorful celebration of spring with games, music, and fun activities.',
      location: 'Central Park, Addis Ababa'
    },
    {
      id: 2,
      title: 'Science Day',
      date: '2025-04-22',
      description: 'Interactive science experiments and educational activities for curious minds.',
      location: 'Science Museum, Addis Ababa'
    },
    {
      id: 3,
      title: 'Kids Sports Day',
      date: '2025-05-05',
      description: 'A day of sports, games, and friendly competition for children of all ages.',
      location: 'National Stadium, Addis Ababa'
    },
    {
      id: 4,
      title: 'Art Workshop',
      date: '2025-05-12',
      description: 'Creative art workshop where kids can explore different art techniques.',
      location: 'Art Center, Addis Ababa'
    }
  ];
  
  // Calendar state
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let calendarDays = [];
  let monthName = '';
  let selectedDate = null;
  let selectedEvents = [];
  
  // Generate calendar days for the current month
  function generateCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Update month name
    monthName = firstDay.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    
    // Generate array of calendar days
    calendarDays = [];
    
    // Add empty days for the start of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendarDays.push({ day: null, events: [], isCurrentMonth: false });
    }
    
    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const dateString = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      
      // Find events for this day
      const dayEvents = events.filter(event => event.date === dateString);
      
      calendarDays.push({
        day,
        date: dateString,
        events: dayEvents,
        isCurrentMonth: true,
        hasEvents: dayEvents.length > 0
      });
    }
    
    // Add empty days for the end of the month to complete the grid
    const totalDays = calendarDays.length;
    const remainingDays = 42 - totalDays; // 6 rows x 7 days = 42
    
    for (let i = 0; i < remainingDays; i++) {
      calendarDays.push({ day: null, events: [], isCurrentMonth: false });
    }
  }
  
  // Navigate to previous month
  function previousMonth() {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }
    generateCalendar();
  }
  
  // Navigate to next month
  function nextMonth() {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
    generateCalendar();
  }
  
  // Select a date and show its events
  function selectDate(day) {
    if (!day.isCurrentMonth || !day.day) return;
    
    selectedDate = day.date;
    selectedEvents = day.events;
  }
  
  // Format date for display
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
  
  // Initialize calendar on component mount
  onMount(() => {
    generateCalendar();
  });
</script>

<div class="calendar-container">
  <div class="calendar-header">
    <div class="month-selector">
      <button class="calendar-nav" on:click={previousMonth}>←</button>
      <h3>{monthName}</h3>
      <button class="calendar-nav" on:click={nextMonth}>→</button>
    </div>
  </div>
  
  <div class="calendar-grid">
    <!-- Day headers -->
    <div class="calendar-day-header">Sun</div>
    <div class="calendar-day-header">Mon</div>
    <div class="calendar-day-header">Tue</div>
    <div class="calendar-day-header">Wed</div>
    <div class="calendar-day-header">Thu</div>
    <div class="calendar-day-header">Fri</div>
    <div class="calendar-day-header">Sat</div>
    
    <!-- Calendar days -->
    {#each calendarDays as day}
      <div 
        class="calendar-day {!day.isCurrentMonth ? 'empty' : ''} {day.hasEvents ? 'has-event' : ''} {selectedDate === day.date ? 'selected' : ''}"
        on:click={() => selectDate(day)}
      >
        {day.day}
        {#if day.hasEvents}
          <div class="event-indicator"></div>
        {/if}
      </div>
    {/each}
  </div>
  
  <!-- Selected date events -->
  {#if selectedDate && selectedEvents.length > 0}
    <div class="selected-date-events">
      <h4>{formatDate(selectedDate)}</h4>
      <div class="events-list">
        {#each selectedEvents as event}
          <div class="event-item">
            <h5>{event.title}</h5>
            <p>{event.description}</p>
            <p class="event-location">📍 {event.location}</p>
          </div>
        {/each}
      </div>
    </div>
  {:else if selectedDate}
    <div class="selected-date-events">
      <h4>{formatDate(selectedDate)}</h4>
      <p class="no-events">No events scheduled for this day.</p>
    </div>
  {/if}
</div>

<style>
  .calendar-container {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 2rem;
  }
  
  .calendar-header {
    background-color: #FFD700;
    padding: 1rem;
  }
  
  .month-selector {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .month-selector h3 {
    margin: 0;
    color: #333333;
  }
  
  .calendar-nav {
    background: none;
    border: none;
    color: #333333;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem;
    transition: background-color 0.3s;
  }
  
  .calendar-nav:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
  }
  
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 1rem;
  }
  
  .calendar-day-header {
    text-align: center;
    font-weight: bold;
    padding: 0.5rem;
    color: #333333;
  }
  
  .calendar-day {
    text-align: center;
    padding: 1rem;
    border-radius: 50%;
    margin: 0.2rem;
    cursor: pointer;
    transition: background-color 0.3s;
    position: relative;
  }
  
  .calendar-day:hover:not(.empty) {
    background-color: #FFF8DC;
  }
  
  .calendar-day.empty {
    visibility: hidden;
    pointer-events: none;
  }
  
  .calendar-day.has-event {
    font-weight: bold;
  }
  
  .calendar-day.selected {
    background-color: #FFD700;
    color: #333333;
  }
  
  .event-indicator {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background-color: #FF8C00;
    border-radius: 50%;
  }
  
  .selected-date-events {
    padding: 1.5rem;
    border-top: 1px solid #eee;
  }
  
  .selected-date-events h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #333333;
  }
  
  .events-list {
    display: grid;
    gap: 1rem;
  }
  
  .event-item {
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 4px;
    border-left: 4px solid #FFD700;
  }
  
  .event-item h5 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #333333;
  }
  
  .event-location {
    color: #666666;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }
  
  .no-events {
    color: #666666;
    font-style: italic;
  }
</style>
