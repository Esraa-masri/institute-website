<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- About -->
      <div class="footer-col">
        <h3>Future Skills Institute</h3>
        <p>
          Empowering students with modern skills in IT, languages, and arts.
        </p>
      </div>

      <!-- Links -->
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/courses">Courses</router-link></li>
          <li><router-link to="/events">Events</router-link></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="mailto:Futureskills@gmail.com">📧 Futureskills@gmail.com</a>
        <a href="https://wa.me/0987654349" target="_blank">📱 0987654349</a>
      </div>
    </div>

    <div class="footer-bottom">
      © 2025 Future Skills Institute. All rights reserved.
    </div>
  </footer>
</template>
<style>
.footer {
  background-color: var(--primary);
  color: white;
  padding: 30px 30px 20px;
}

.footer-container {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer-col h3,
.footer-col h4 {
  margin-bottom: 14px;
  font-size: 20px;
}

.footer-col p {
  font-size: 14px;
  opacity: 0.9;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col a {
  color: white;
  text-decoration: none;
  font-size: 14px;
  display: block;
  margin-bottom: 10px;
  opacity: 0.9;
}

.footer-col a:hover {
  opacity: 1;
}

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  font-size: 13px;
  opacity: 0.7;
}

/* Mobile */
@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
