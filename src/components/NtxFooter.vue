<template>
  <footer class="footer">
    <section class="footer-top">
      <div class="boxed">
        <div class="row-footer">
          <div class="col">
            <a href="/" class="logo" role="img" aria-label="NexTash">
              <div class="logo-square"></div>
              <img src="../assets/logo.png" width="70" height="70" class="image" alt="NexTash" />
            </a>
            <p class="description" style="width: 85%;">
              Empower your business for the digital era with our tailored strategies.
            </p>
          </div>


          <div class="col">
            <h3 class="heading" role="heading" aria-level="3">Information</h3>
            <ul type="none" class="footer-list">
              <li v-for="(link, index) in footerInfoLinks" :key="index" class="list-item">
                <a :href="link.href" class="list-link">{{ link.label }}</a>
              </li>
            </ul>
          </div>


          <div class="col">
            <h3 class="heading" role="heading" aria-level="3">Subscribe</h3>
            <p class="description">
              Subscribe to our new feeds & stay tuned with NexTash updates.
            </p>
            <form action="" class="input-group subscribe-form" id="newsletter_form">
              <input type="email" id="newsletter_email" placeholder="Email Address..." class="field" />
              <button class="bx bx-send action-btn btn-send"></button>
            </form>
            <p id="newsletter_feedback"></p>
          </div>
        </div>
      </div>
    </section>
    <section class="footer-bottom">
      <div class="boxed" style="align-items: center;">
        <p class="copyright">
          &copy; 2024, All Right Reserved
          <a href="/" class="link text-red-800">NexTash</a>
        </p>
        <div class="social-links">
          <a v-for="(item, index) in socialLinks" :key="index" :href="item.href" target="_blank" :class="item.class"
            v-html="item.icon">
          </a>
        </div>

        <ul class="inline-list" type="none">
          <li v-for="(item, index) in policyLinks" :key="index" class="list-item">
            <a :href="item.href" class="list-link">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </section>
  </footer>

</template>



<script setup>

const footerInfoLinks = [
  { label: "About us", href: "/about-us/" },
  { label: "Contact us", href: "/contact-us/" },
  { label: "Services", href: "/services/" },
  { label: "Team", href: "/team/" },
  { label: "Blogs", href: "/blogs/" },
  { label: "Projects", href: "/projects/" },
  { label: "Careers", href: "/careers/" },
  { label: "Faqs", href: "/faqs/" },
  { label: "Partners", href: "/partners/" },
];


const socialLinks = [
  { href: "https://www.facebook.com/nextash", class: "bx bxl-facebook-square social-icon" },
  { href: "https://www.pinterest.com/nextashinc", class: "bx bxl-pinterest social-icon" },
  {
    href: "https://x.com/nextash1/",
    class: "social-icon social-icon-svg",
    icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z"><animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"/></path><path d="M3 2h5v0h-5zM16 22h5v0h-5z"><animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"/></path><path d="M18.5 2h3.5L22 2h-3.5z"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"/></path></g></svg>
          `
  },
  { href: "https://www.linkedin.com/company/nextash/", class: "bx bxl-linkedin social-icon" },
  { href: "https://www.instagram.com/nextashinc/", class: "bx bxl-instagram social-icon" },
  { href: "https://www.youtube.com/@nextash_inc/", class: "bx bxl-youtube social-icon" },
]

const policyLinks = [
  { href: "/terms-and-conditions/", label: "Terms" },
  { href: "/privacy-policy/", label: "Privacy" },
  { href: "/cookies-policy/", label: "Cookies" }
]
</script>

<style scoped>
.footer .footer-top {
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: var(--muted);
}

.footer .footer-top .logo {
  position: relative;
  margin-bottom: 15px;
  display: inline-block;
  left: -8px;
}

.footer .footer-top .logo .logo-square {
  left: 15px;
  bottom: 22px;
  width: 40px;
  height: 40px;
  position: absolute;
  transform: rotate(45deg);
  box-shadow: rgba(255, 30, 0, 0.24) 0px 8px 24px, rgba(255, 38, 0, 0.158) 0px 16px 56px, rgba(235, 6, 25, 0.233) 0px 24px 80px;
}

.footer .footer-top .heading {
  color: var(--text);
  font-weight: bold;
  font-size: var(--footer-heading);
  margin-bottom: 1rem;
}

.footer .footer-top .description {
  color: var(--muted);
  margin-bottom: 1rem;
  line-height: 1.5rem;
}

.footer .footer-top .footer-list {
  padding: 0;
  margin: 0;
}

.footer .footer-top .footer-list .list-item {
  width: 50%;
  display: block;
  float: right;
  margin-bottom: 5px;
}

.footer .footer-top .footer-list .list-item .list-link {
  display: inline-block;
  color: var(--muted);
  text-decoration: none;
}

.footer .footer-top .footer-list .list-item .list-link:hover {
  color: var(--primary);
}

.footer .footer-top .subscribe-form {
  border-radius: 50px;
  box-shadow: var(--shadow);
  padding: 5px 0;
}

.footer .footer-top .subscribe-form .btn-send {
  background-color: var(--primary);
  cursor: pointer;
  color: var(--text);
}

.footer .footer-top .subscribe-form .btn-send:hover {
  background-color: var(--primary-hover);
}

.footer .footer-bottom {
  border-top: 1px solid var(--border);
  color: var(--muted);
  padding-top: 20px;
  padding-bottom: 20px;
}

.footer .footer-bottom .boxed {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer .footer-bottom .boxed .copyright {
  font-size: 1rem;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark);
  border-radius: 5px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.input-group .input-icon {
  margin-left: 10px;
}

.input-group .field {
  background-color: inherit;
  width: 100%;
  border: none;
  outline: none;
  padding: 14px 20px;
  color: var(--text);
  margin-right: 10px;
  resize: none;
  font-family: inherit;
  font-size: 1rem;
  border-radius: inherit;
}

.input-group .field:-webkit-autofill,
.input-group .field:-webkit-autofill:hover,
.input-group .field:-webkit-autofill:focus,
.input-group .field:-webkit-autofill:active {
  -webkit-background-clip: text;
  -webkit-text-fill-color: #ffffff;
}

.input-group .action-btn {
  background-color: transparent;
  border: none;
  outline: none;
  background-color: var(--dark);
  padding: 10px;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 50px;
  color: var(--text);
  cursor: pointer;
}

.social-links {
  display: inline-flex;
  align-items: center;
  border-radius: 50px;
  padding: 5px 8px;
  box-shadow: var(--shadow);
  -webkit-backdrop-filter: var(--blur);
  backdrop-filter: var(--blur);
  border: 1px solid var(--border);
}


.social-links .social-icon {
  text-decoration: none;
  padding: 10px;
  border-radius: 50px;
  color: var(--muted);
  font-size: 18px;
  background-color: var(--dark);
  margin: 0 1px;
  border: none;
  outline: none;
  cursor: pointer;
}

.social-links .social-icon:hover {
  background-color: var(--primary);
  color: white;
}

.social-links .social-icon.social-icon-svg {
  padding: 8.5px 10px;
}

.social-links .social-icon.social-icon-svg svg {
  width: 18px;
  height: 17px;
}

.input-group .action-btn:hover {
  background-color: var(--primary);
}


@media (max-width: 576px) {
  .footer .footer-bottom .boxed .copyright {
    margin-bottom: 20px;
  }
}

.footer .footer-bottom .boxed .inline-list .list-item .list-link {
  font-size: 0.9rem;
}

.row-footer {
  display: grid;
  grid-template-columns: 30% auto 30%;
  gap: 20px;
}

@media (max-width: 768px) {
  .row-footer {
    grid-template-columns: 100%;
  }
}

.inline-list {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
}

.inline-list .list-item {
  padding: 0 5px;
  font-weight: 400;
  font-size: clamp(16px, 80vw, 18px);
  line-height: clamp(22px, 80vw, 28px);
  color: var(--muted);
}

.inline-list .list-item .list-link {
  text-decoration: none;
  color: var(--muted);
}

.inline-list .list-item .list-link:hover {
  text-decoration: underline;
}
</style>