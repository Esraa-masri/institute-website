<template>
  <!-- start hero section-->
  <section id="home" class="hero">
    <div class="overlay">
      <h1>{{ instituteName }}</h1>
      <p>{{ description }}</p>
      <!-- <button @click="register">Explore Now</button> -->
    </div>
  </section>
  <!--end hero section-->
  <!--end course section-->
  <section id="courses" class="courses">
    <h2>Our Courses</h2>
    <div class="courses-grid">
      <div
        class="courses-card"
        v-for="course in previewcourses"
        :key="course.id"
      >
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
      </div>
    </div>
    <router-link to="/courses" class="view-all-btn">All Courses</router-link>
  </section>
  <!--end course section-->
  <!--start events section-->
  <section class="home-events">
    <h2>Upcoming Events</h2>

    <div class="home-event-card" v-for="event in homeEvents" :key="event.id">
      <div class="event-info">
        <span class="tag">{{ event.type }}</span>
        <h3>{{ event.title }}</h3>
        <p class="date">{{ event.date }}</p>
        <p class="desc">{{ event.description }}</p>
      </div>

      <div class="event-actions">
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

    <router-link to="/events" class="view-all"> View All Events → </router-link>
  </section>

  <!--end events section-->
  <!--start contact section-->
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <!-- Info -->
      <div class="contact-info">
        <h2>Contact Us</h2>
        <p>
          Visit us at our institute or contact us directly for more information.
        </p>

        <p class="address">📍 Damascus – Al Mazzeh – Main Street</p>

        <div class="contact-actions">
          <a href="mailto:Futureskills@gmail.com" class="contact-btn email">
            Email Us
          </a>

          <a
            href="https://wa.me/0987654349"
            target="_blank"
            class="contact-btn whatsapp"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <!-- Map -->
      <div class="contact-map">
        <iframe
          src="https://www.google.com/maps?q=Damascus&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>

  <!--end contact section-->
</template>
<script>
export default {
  data() {
    return {
      instituteName: "Future Skills Institute",
      description:
        "Empowering learners with practical skills for a successful future",
      previewcourses: [
        {
          id: 1,
          title: "Web Development",
          // description: "Learn Html, CSS, JavaScript and framework ",
        },
        {
          id: 2,
          title: "Graphic Design",
          // description: "Photoshop, Illustrator and branding basics",
        },
        {
          id: 3,
          title: "English Language",
          // description: "Speaking, grammar and writing skills",
        },
      ],
      homeEvents: [
        {
          id: 1,
          type: "Workshop",
          title: "Web Development Workshop",
          date: "June 15, 2026",
          description: "Hands-on introduction to HTML & CSS",
        },
      ],
    };
  },
  methods: {
    register() {
      alert("Registration clicked");
    },
  },
};
</script>

<style scoped>
/*start hero section*/
.hero {
  min-height: 100vh;
  background-image: url("/src/assets/hero4.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay {
  background-color: rgba(175, 173, 173, 0.55);
  color: white;
  padding: 60px 40px;
  text-align: center;
  border-radius: 16px;
  max-width: 700;
}
.overlay h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 700;
  color: var(--primary);
}
.overlay p {
  font-size: 23px;
  margin-bottom: 30px;
  opacity: 0.7;
  color: black;
}
.overlay button {
  background-color: var(--accent);
  color: white;
  padding: 14px 30px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
}
@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 80px 20px;
  }

  .overlay {
    padding: 40px 20px;
    border-radius: 12px;
  }

  .overlay h1 {
    font-size: 32px;
    line-height: 1.3;
  }

  .overlay p {
    font-size: 16px;
  }

  .overlay button {
    width: 100%;
    padding: 14px;
  }
}
/*end hero section*/
/*start course section*/
.courses {
  padding: 50px 40px;
  background-color: #f9fafb;
  text-align: center;
}
.courses h2 {
  font-size: 32px;
  margin-bottom: 40px;
  color: var(--primary);
}
.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.courses-card {
  background-color: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}
.courses-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: var(--accent);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.courses-card:hover {
  transform: translateY(-3px);
}
.courses-card h3 {
  font-weight: 900;
  margin-bottom: 12px;
  font-size: 23px;
  color: var(--primary);
}
.courses-card p {
  font-size: 15px;
}
.view-all-btn {
  background-color: var(--accent);
  color: white;
  border: none;
  padding: 14px 42px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-top: 40px;
}
.view-all-btn:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }
}
/*end course section*/
/*start event section*/
.home-events {
  padding: 80px 30px;
  background-color: #f9fafb;
}
.home-events h2 {
  text-align: center;
  font-size: 32px;
  color: var(--primary);
  margin-bottom: 40px;
}
.home-event-card {
  max-width: 900px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.event-info {
  flex: 2;
}
.event-info h3 {
  font-size: 24px;
  color: var(--primary);
  margin: 12px 0;
}
.event-info .date {
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
}
.event-info .desc {
  font-size: 15px;
  color: #555;
}
.event-actions {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.event-actions .btn {
  text-align: center;
  padding: 12px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 600;
}
.event-actions .btn.email {
  background-color: var(--primary);
  color: #fff;
}
.event-actions .btn.whatsapp {
  background-color: #25d366;
  color: #fff;
}
.view-all {
  display: block;
  margin-top: 30px;
  text-align: center;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
}
.tag {
  display: inline-block;
  background-color: var(--accent);
  color: #fff;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
}
@media (max-width: 768px) {
  .home-event-card {
    flex-direction: column;
    text-align: center;
  }
  .event-actions {
    width: 100%;
  }
}
/*end event section*/
/*start contact section*/
.contact-section {
  padding: 80px 30px;
  background-color: #f9fafb;
}

.contact-container {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.contact-info h2 {
  font-size: 32px;
  color: var(--primary);
  margin-bottom: 16px;
}

.contact-info p {
  color: #555;
  margin-bottom: 14px;
}

.address {
  font-weight: 500;
}

.contact-actions {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.contact-btn {
  padding: 14px 28px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 600;
}

.contact-btn.email {
  background-color: var(--primary);
  color: white;
}

.contact-btn.whatsapp {
  background-color: #25d366;
  color: white;
}

.contact-map iframe {
  width: 100%;
  height: 320px;
  border: none;
  border-radius: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-actions {
    flex-direction: column;
  }
}

/*end contact section*/
</style>
