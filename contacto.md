---
layout: null
title: Contacto
---

{% include head.html %}
{% include header.html %}
<main>
    <h1 class="titulo-1"> Envíanos un mensaje </h1>
    <form class="formulario">
        <section class="formulario-elemento">
            <label for="" class="formulario-label">Nombre: </label>
            <input type="text" autocomplete="off" id="nombreUsuario" class="formulario-input-text validar-input"/>
        </section>
        <section class="formulario-elemento">
            <label for="" class="formulario-label">Apellido: </label>
            <input type="text" autocomplete="off" id="apellidoUsuario" class="formulario-input-text validar-input"/>
        </section>
        <section class="formulario-elemento">
            <label for="" class="formulario-label">Correo electrónico: </label>
            <input type="email" autocomplete="off" id="correoUsuario" class="formulario-input-text validar-input"/>
        </section>
        <section class="formulario-elemento">
            <label for="" class="formulario-label">Motivo: </label>
            <input type="text" autocomplete="off" id="motivoUsuario" class="formulario-input-text validar-input"/>
        </section>
        <section class="formulario-elemento" style="flex-direction:column">
            <label for="" class="formulario-label" style="margin-bottom:-20px">Mensaje: </label><br/>
            <input type="textarea" autocomplete="off" id="mensajeUsuario" class="formulario-input-textarea validar-input"/>
        </section>
        <section class="formulario-elemento">
            <button autocomplete="off" class="formulario-boton" onclick="onClickFormulary(event)"> Enviar </button>
        </section>
    </form>
</main>
{% include footer.html %}