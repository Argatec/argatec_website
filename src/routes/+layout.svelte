<script>
    import "../app.css";
    let logo = "./images/logo.png";
</script>
<nav class="text-2xl flex justify-end bg-black text-white z-20 font-bold">  
  <div class="flex grow items-center justify-center">
    <img src={logo} alt='Argatec' class="w-48" />
  </div>
   <div class="space-x-12 pr-24 flex items-center py-16">
      <a class="" href="/">Inicio</a>
      <a href="/seguridad">Seguridad</a>
      <a href="/soluciones_tecnologicas">Soluciones Tecnológicas</a>
      <a href="/equipo_informatico">Equipo Informático</a>
    </div>
</nav>

<slot></slot>