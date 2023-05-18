<template>
  <footer class="footer">
    <base-wrapper>
      <div class="footer-inner">
        <div class="nav-container">
          <nav class="nav">
            <RouterLink to="/">Vue<div class="logo-white">.js</div></RouterLink>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/login">Login</RouterLink>
          </nav>
          <div class="social-media">
            <a
              class="link"
              href="https://www.linkedin.com/in/mateusz-pocwiardowski/"
              target="_blank"
            >
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
            <a class="link" href="https://github.com/MateuszPocwiardowski" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
            <a class="link" href="https://mp-myownpage.netlify.app/" target="_blank">
              <font-awesome-icon icon="fa-solid fa-laptop-code" />
            </a>
          </div>
        </div>
        <hr class="divier" />
        <div class="right-container">
          <span class="right">
            Copyright
            <strong class="small-logo">Vue<div class="logo-white">.js</div></strong>
            {{ currentYear }}
            All right reserved
          </span>
          <RouterLink to="/" class="logo"><h2>Vue<div class="logo-white">.js</div></h2></RouterLink>
        </div>
      </div>
    </base-wrapper>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  line-height: 1.8;
  background-color: var(--colour-lighter-green);
  padding: 1rem;

  @media (min-width: 769px) {
    padding: 2rem 1rem;
  }
}

.footer-inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-container {
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  @media (min-width: 769px) {
    flex-direction: row;
    gap: 1rem;
  }
}

.nav a {
  font-weight: 600;
  border-bottom: 1px solid transparent;
}

.nav a:hover {
  border-bottom: 1px solid var(--colour-light-green);
}

.social-media {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;

  @media (min-width: 769px) {
    gap: 1rem;
  }
}

.social-media a {
  font-size: 1.3rem;
}

.divier {
  width: 100%;
  height: 1px;
  border: none;
  background-color: var(--colour-grey);
}

.right-container {
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.small-logo {
  font-weight: 600;
}

.logo {
  align-self: center;
  font-weight: 600;
}

.logo h2 {
  font-size: inherit;
}

.logo-white {
  display: inline;
  font-weight: inherit;
  color: var(--colour-green);
}
</style>
