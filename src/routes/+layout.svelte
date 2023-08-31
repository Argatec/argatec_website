<script>
    import "../app.css";
    import Nav from "../components/nav.svelte";
    import Footer from "../components/footer.svelte";
    import Socials from "../components/socials.svelte";
    let logo = "./images/logo.png";
</script>

<Nav logo={logo} />


<slot></slot>

<Socials />
<Footer />
