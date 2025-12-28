<template>
  <header class="navbar">
    <div class="logo">Future Skills Institute</div>

    <div class="menu-icon" @click="toggleMenu">☰</div>

    <nav class="nav-links" :class="{ open: isOpen }">
      <router-link to="/" @click="closeMenu">Home</router-link>
      <router-link to="/courses" @click="closeMenu">Courses</router-link>
      <router-link to="/events" @click="closeMenu">Events</router-link>
      <a href="#" @click.prevent="goToContact">Contact</a>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    goToContact() {
      this.closeMenu();

      if (this.$route.path !== "/") {
        this.$router.push("/").then(() => {
          setTimeout(() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 300);
        });
      } else {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
/* ===== Navbar الأساسي ===== */
.navbar {
  background-color: var(--primary);
  color: white;
  padding: 24px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo {
  font-weight: 700;
  font-size: 18px;
  white-space: nowrap; /* يمنع النزول لسطر */
  overflow: hidden;
  text-overflow: ellipsis;
}
.nav-links {
  display: flex;
}
.nav-links a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-size: 18px;
}
.nav-links a:hover {
  opacity: 0.8;
}
.menu-icon {
  display: none;
  font-size: 26px;
  cursor: pointer;
}

/* ===== موبايل ===== */
@media (max-width: 768px) {
  .menu-icon {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 58px;
    left: 0;
    right: 0;
    background-color: var(--primary);
    flex-direction: column;
    align-items: center;
    display: none;
    padding: 10px 0;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    margin: 12px 0;
    font-size: 18px;
  }
}
</style>
