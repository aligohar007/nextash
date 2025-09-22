<template>
  <section 
    class=" boxed flex justify-center items-center text-center 
           mt-10  lg:mt-[8%] mb-10 border-2 border-red-600 rounded-lg max-w-[90%] mx-auto"
  >
    <div class="card-body p-10 space-y-4">
      <h3 class="card-title text-[2rem] font-bold text-white">
        Share Your Thoughts!
      </h3>
      <p class="card-desc text-gray-300">
        Interested in working with us? Have any questions?
      </p>
        <router-link to="/contact" class="btn-contact">
          Get Started
        </router-link>
      <!-- <a href="/contact-us/" class="btn-contact">Get Started</a> -->
    </div>
  </section>
</template>

<style scoped>
.boxed {
  background-image: url(../assets/CTAbg.png);
  background-size: cover;
  background-position: center;
  object-fit: cover;
}

.btn-contact {
  background-color: red;
  color: #fff;
  cursor: pointer;
  padding: 10px 30px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  border-radius: 6px;
  border: 2px solid red;
  transition: all 0.3s ease-in-out;
}

.btn-contact:hover {
  background-color: transparent;
  color: white;
  border: 2px solid red;
}
</style>
