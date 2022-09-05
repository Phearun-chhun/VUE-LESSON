<template>
  <section>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Help?</a></li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  props: {
    home: {
      type: String,
      require: true,
    },
    aboutUs: {
      type: String,
      require: true,
    },
    service: {
      type: String,
      require: true,
    },
    help: {
      type: String,
      require: true,
    }
  }
}
</script>

<style>
#app nav {
  background: var(--main-color);
}
#app nav ul {
  margin: 0;
  display: flex;
  list-style-type: none;
}
#app nav ul li {
  padding: 14px;
}
#app nav ul li a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}
</style>

