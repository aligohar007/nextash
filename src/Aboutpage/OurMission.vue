<template>
  <section>
    <div class="w-full px-5 lg:px-15 relative z-10 lg:mb-30 mb-15 lg:-mt-10 -mt-20">
      <!-- add data-aos here -->
      <div
        class="card card-hoverable card-about "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
      >
        <div class="card-body space-y-5">
          <!-- badge -->
          <span class="section-badge flex items-center">
            <span class="text-[var(--primary)] font-bold text-2xl">{</span>
            <span class="px-1">About</span>
            <span class="text-[var(--primary)] font-bold text-2xl">}</span>
          </span>

          <h2 class="card-title text-[3rem] font-semibold mt-2">Our Mission</h2>
          <p class="text-[1.1rem] mb-5 text-[#ACB6C0] font-semibold px-5">
            Our mission is to strive to simplify and automate the lives of small
            businesses and pave the way for their growth and success. Every
            small business deserves access to powerful technological solutions
            that streamline operations, enhance efficiency, and unlock new
            expansion opportunities.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card .card-body {
  padding: var(--card-body-p);
  width: var(--card-body-w, auto);
}

  .card-hoverable {
  position: relative;
  transition: all 0.6s ease;
}

.card.card-hoverable:after,
.card.card-hoverable:before {
  content: "";
  width: 3px;
  height: 60%;
  position: absolute;
  transition: top 0.6s ease, bottom 0.6s ease, opacity 0.6s ease;
  background: linear-gradient(transparent, var(--primary), transparent);
  opacity: 0;
}

.card.card-hoverable:before {
  left: -2px;
  top: 10%;
}

.card.card-hoverable:hover:before {
  top: 70%;
  opacity: 1;
}

.card.card-hoverable:after {
  right: -2px;
  bottom: 10%;
}

.card.card-hoverable:hover:after {
  bottom: 70%;
  opacity: 1;
}

.card.card-hoverable:hover {
  --card-bc: var(--primary);
  --card-bw: 1px;
  box-shadow: #ff1e003d 0 8px 24px, #ff260028 0 16px 56px, #eb06193b 0 24px 80px;
}

.card-about {
  --card-body-p: 3rem 1rem;
  --card-title-fs: clamp(30px, 80vw, 40px);
  text-align: center;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  font-size: 0.9rem;
}
</style>
