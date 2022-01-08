<script>
  let emailIsValid = true

  const validateEmail = (e) => {
    let email = e.target.email.value
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    emailIsValid = re.test(email)
  }
</script>

<main>
  <div class="font-libre-franklin text-center p-5 md:max-w-2xl md:mx-auto">
    <h1 class="text-2xl md:text-5xl md:text-cstm-neutral-gray font-light">
      We are launching <span class="font-bold md:text-black">soon!</span>
    </h1>
    <p class="text-base md:text-lg mt-2 md:mt-6 mb-8">
      Subscribe and get notified
    </p>
    <form on:submit|preventDefault={validateEmail}>
      <div class="flex flex-col md:flex-row md:gap-5">
        <input
          type="text"
          name="email"
          placeholder="Your email address..."
          class={`border-2 border-cstm-secondary-pale-blue focus:outline-cstm-primary-blue ${
            !emailIsValid ? 'border-red-500' : ''
          } rounded-full px-8 py-3 md:w-3/5`}
        />
        <p
          class={`${
            emailIsValid ? 'hidden' : 'block'
          } md:hidden mt-2 text-red-500`}
        >
          Please provide a valid email address
        </p>
        <button
          type="submit"
          class="bg-cstm-primary-blue hover:brightness-125 text-white rounded-full mt-4 md:mt-0 py-3 font-semibold md:w-2/5"
          >Notify Me</button
        >
      </div>
      <p
        class={`${
          emailIsValid ? 'hidden' : 'hidden md:block'
        } md:text-left md:ml-8 mt-2 text-red-500`}
      >
        Please provide a valid email address
      </p>
    </form>
    <div class="my-20">
      <img src="/assets/illustration-dashboard.png" alt="dashboard" />
    </div>
    <div class="flex justify-center items-center gap-5">
      <img
        src="/assets/icon-facebook.svg"
        alt="facebook icon"
        class="w-8 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      />
      <img
        src="/assets/icon-twitter.svg"
        alt="twitter icon"
        class="w-8 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      />
      <img
        src="/assets/icon-instagram.svg"
        alt="instagram icon"
        class="w-8 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      />
    </div>
  </div>
  <!-- 
    Notify Me

  &copy; Copyright Ping. All rights reserved. -->
</main>
