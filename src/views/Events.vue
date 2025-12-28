<template>
  <section class="events-hero">
    <h1>Events & Trips</h1>
    <p>Workshops, educational trips, and special activities</p>
  </section>
  <!-- Upcoming Events -->
  <h2 class="section-title">Upcoming Events</h2>

  <div class="events-grid">
    <div class="event-card" v-for="event in upcomingEvents" :key="event.id">
      <div class="event-header">
        <span class="tag">{{ event.type }}</span>
        <span class="date">{{ event.date }}</span>
      </div>

      <h3>{{ event.title }}</h3>
      <p class="desc">{{ event.description }}</p>

      <div class="actions">
        <a
          class="btn email"
          :href="`mailto:your_email@gmail.com?subject=Event Registration&body=I would like to register for: ${event.title}`"
        >
          Email
        </a>

        <a
          class="btn whatsapp"
          :href="`https://wa.me/9639XXXXXXX?text=I would like to register for ${event.title}`"
          target="_blank"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </div>

  <!-- Past Events -->
  <h2 class="section-title past">Past Events</h2>

  <div class="events-grid">
    <div
      class="event-card past-card"
      v-for="event in pastEvents"
      :key="event.id"
    >
      <span class="tag gray">{{ event.type }}</span>
      <h3>{{ event.title }}</h3>
      <p class="date">{{ event.date }}</p>
      <p class="desc">{{ event.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Events",
  data() {
    return {
      upcomingEvents: [
        {
          id: 1,
          type: "Workshop",
          title: "Web Development Workshop",
          date: "June 15, 2026",
          description: "Introduction to HTML & CSS for beginners",
        },
        {
          id: 2,
          type: "Trip",
          title: "Educational Trip to Science Center",
          date: "June 22, 2026",
          description: "Interactive learning experience outside the classroom",
        },
      ],
      pastEvents: [
        {
          id: 3,
          type: "Event",
          title: "English Speaking Club",
          date: "May 10, 2025",
          description: "Students practiced conversation skills",
        },
        {
          id: 4,
          type: "Trip",
          title: "Art Museum Visit",
          date: "April 18, 2025",
          description: "Exploring art styles and live sketching",
        },
      ],
    };
  },
};
</script>
<style scoped>
.events-hero {
  text-align: center;
  margin-bottom: 60px;
}
.events-hero h1 {
  font-size: 42px;
  color: var(--primary);
}
.events-hero p {
  color: #555;
  font-size: 18px;
}
/*Events grid*/
.section-title {
  margin: 60px 0 30px;
  font-size: 28px;
  color: var(--primary);
}
.section-title.past {
  color: #777;
}
.past-card {
  opacity: 0.6;
}
/* .tag.gray {
  background-color: #999;
} */

.event-grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.event-card {
  background: linear-gradient(145deg, #ffffff, #f2f4f7);
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  /* text-align: left;
  transition: transform 0.2s ease; */
}
.event-card:hover {
  transform: translateY(-4px);
}
.event-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
}
.actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}
.btn {
  flex: 1;
  text-align: center;
  padding: 12px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
}
.btn.email {
  background-color: var(--primary);
  color: white;
}
.btn.whatsapp {
  background-color: #25d366;
  color: white;
}
.tag {
  display: inline-block;
  background-color: var(--accent);
  color: white;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  margin-bottom: 10px;
}
.date {
  font-size: 14px;
  color: #777;
  margin: 10px 0;
}
.desc {
  font-size: 15px;
  margin-bottom: 20px;
}
.register-btn {
  display: block;
  text-align: center;
  background-color: var(--accent);
  color: white;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
}
@media (max-width: 768px) {
  .event-grid {
    grid-template-columns: 1fr;
  }
}
</style>
