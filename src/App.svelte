<script>
  import Footer from './lib/footer.svelte'
  import Header from './lib/header.svelte'
  import MainContent from './lib/main-content.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Header />
<MainContent />
<Footer />
