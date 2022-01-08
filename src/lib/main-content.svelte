<script>
  let emailIsValid = true

  const validateEmail = (e) => {
    let email = e.target.email.value
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    emailIsValid = re.test(email)
  }
</script>

<main>
  <div class="font-libre-franklin text-center p-5">
    <h1 class="text-2xl font-light">
      We are launching <span class="font-bold">soon!</span>
    </h1>
    <p class="text-base mt-2 mb-8">Subscribe and get notified</p>
    <form on:submit|preventDefault={validateEmail} class="flex flex-col">
      <input
        type="text"
        name="email"
        placeholder="Your email address..."
        class={`border-2 border-cstm-secondary-pale-blue focus:outline-cstm-primary-blue ${
          !emailIsValid ? 'border-red-500' : ''
        } rounded-full px-8 py-3`}
      />
      <p class={`${emailIsValid ? 'hidden' : 'block'} mt-2 text-red-500`}>
        Please provide a valid email address
      </p>
      <button
        type="submit"
        class="bg-cstm-primary-blue hover:brightness-125 text-white rounded-full mt-4 py-3 font-semibold"
        >Notify Me</button
      >
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
