<template>
  <section class="courses-page">
    <h1>All Courses</h1>
    <p class="subtitle">Choose the path that fits your future</p>
    <!--Filters-->
    <div class="filters">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>
    <!--Courses-->
    <div class="courses-grid">
      <div
        class="course-card"
        v-for="course in filteredCourses"
        :key="course.id"
      >
        <div class="card-header">
          <span class="badge">{{ course.category }}</span>
          <span class="level-badge">{{ course.level }}</span>
        </div>

        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>

        <div class="details">
          <span>📅 Starts: {{ course.start }}</span>
        </div>

        <button @click="openContact(course)">Register Now</button>
      </div>
    </div>
  </section>
  <!-- Register Modal -->
  <div class="modal" v-if="showContact">
    <div class="modal-content">
      <h2>Register for {{ selectedCourse.title }}</h2>
      <a class="contact-btn email" :href="emaillink">Register via Email</a>
      <a class="contact-btn whatsapp" :href="whatsapplink" target="_blank"
        >Register via WhatsApp</a
      >
      <button class="close" @click="showContact = false">Close</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //filter
      selectedCategory: "All",
      categories: ["All", "IT", "English", "Subjects", "Art"],
      //ترتيب
      // sortOption: "",
      showContact: false,
      selectedCourse: {},
      email: "esraa@gmail.com",
      whatsappNumber: "0987654456",

      //courses
      courses: [
        //IT
        {
          id: 1,
          title: "Front-End Development",
          description: "Html, CSS, Basic JavaScript",
          category: "IT",
          level: "Beginner",
          start: "January 2026",
        },
        {
          id: 2,
          title: "Front-End Development",
          description: "Html, CSS, JavaScript with framework vue.js",
          category: "IT",
          level: "middle",
          start: "March 2026",
        },
        {
          id: 3,
          title: "Programming Basics",
          description: "Logic, algorithms and coding fundamentals",
          category: "IT",
          level: "Beginner",
          start: "April 2026",
        },
        {
          id: 4,
          title: "Computer Skills &  Office Tools",
          description:
            "Microsoft Word, Excel, PowerPoint & basic computer skills",
          category: "IT",
          level: "Beginner",
          start: "March 2026",
        },
        //English
        {
          id: 5,
          title: "English - Beginner",
          description: "Basic grammar, vocabulary, and  simple conversations",
          category: "English",
          level: "Beginner",
          start: "March 2026",
        },
        {
          id: 6,
          title: "English - Elementary",
          description: "Daily conversations, reading and basic writing",
          category: "Elementary",
          level: "Advanced",
          start: "May 2026",
        },
        {
          id: 7,
          title: "English - Advanced",
          description: "Advanced grammar, presentation and discussions",
          category: "English",
          level: "Advanced",
          start: "April 2026",
        },
        {
          id: 8,
          title: "English - Conversation",
          description:
            "Improve speaking confidence through real-life conversation",
          category: "English",
          level: "All Levels",
          start: "Jun 2026",
        },
        {
          id: 9,
          title: "English - Kids",
          description: "Fun learning through games, songs and stories",
          category: "English",
          level: "Kids",
          start: "July 2026",
        },
        //Subject
        {
          id: 10,
          title: "Mathematics",
          description: "School mathematics for all levels",
          category: "Subjects",
          level: "School",
          start: "February 2025",
        },
        {
          id: 11,
          title: "Physics",
          description: "Understanding core physics concepts",
          category: "Subjects",
          level: "School",
          start: "March 2025",
        },
        // Art
        {
          id: 12,
          title: "Drawing & Sketching",
          description: "Creative drawing techniques",
          category: "Art",
          level: "Beginner",
          start: "April 2025",
        },
        {
          id: 13,
          title: "Graphic Art",
          description: "Visual creativity and design",
          category: "Art",
          level: "Intermediate",
          start: "May 2025",
        },
      ],
    };
  },
  methods: {
    openContact(course) {
      this.selectedCourse = course;
      this.showContact = true;
    },
  },

  computed: {
    filteredCourses() {
      let result =
        this.selectedCategory === "All"
          ? this.courses
          : this.courses.filter(
              (course) => course.category === this.selectedCategory
            );
      return result;
    },
    emailLink() {
      if (!this.selectedCourse.title) return "#";
      return `mailto:${this.email}?subject=Course Registration&body=I would like to register for the course: ${this.selectedCourse.title}`;
    },

    whatsappLink() {
      if (!this.selectedCourse.title) return "#";
      return `https://wa.me/${this.whatsappNumber}?text=I would like to register for the course: ${this.selectedCourse.title}`;
    },
  },
};
</script>
<style scoped>
.courses-page {
  padding: 80px 40px;
  background: #f9fafb;
  text-align: center;
}
.courses-page h1 {
  color: var(--primary);
}
.subtitle {
  color: #666;
  margin-bottom: 40px;
}

.filters {
  margin-bottom: 40px;
}

.filters button {
  margin: 6px;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: #e5e7eb;
}

.filters button.active {
  background: var(--accent);
  color: white;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.course-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  text-align: left;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.course-card h3 {
  text-align: center;
  color: var(--primary);
  margin-bottom: 10px;
}
.card-header {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
}

.badge {
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--primary);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.level-badge {
  background-color: rgba(16, 185, 129, 0.1);
  color: #047857;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
}

.details {
  font-size: 14px;
  color: #555;
  margin: 16px 0;
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 6px;
}

.course-card button {
  width: 100%;
  padding: 12px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.modal-content h2 {
  margin-bottom: 20px;
  color: var(--primary);
}
.contact-btn {
  display: block;
  margin-bottom: 14px;
  padding: 14px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  color: white;
}
.contact-btn.email {
  background-color: #2563eb;
  cursor: pointer;
}
.contact-btn.whatsapp {
  background-color: #16a34a;
  cursor: pointer;
}
.close {
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
}
</style>
