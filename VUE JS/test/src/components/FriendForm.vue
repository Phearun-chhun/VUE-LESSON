<template>
  <section>
    <div class="container">
      <form>
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Comment" />
        <button>ADD</button>
      </form>
    </div>
  </section>
</template>

<style>
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  padding: 10px;
  border-radius: 10px;
}
#app input {
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
  width: 98%;
}

#app button {
  padding: 10px;
  margin: 1rem auto;
  width: 98%;
  font: inherit;
  cursor: pointer;
  border: 1px solid #b1a6ab;
  background-color: #b1a6ab;
  color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: var(--main-color);
  border-color: var(--main-color);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>

