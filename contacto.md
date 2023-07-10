---
layout: null
title: Contacto
---

{% include head.html %}
{% include header.html %}
<main>
    <!-- Bootstrap 5 Contact Form Snippet -->

<div class="container-fluid px-5 my-5">
  <div class="row justify-content-center">
    <div class="col-xl-10">
      <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
        <div class="card-body p-0">
          <div class="row g-0">
            <div class="col-sm-6 d-none d-sm-block bg-image"></div>
            <div class="col-sm-6 p-4">
              <div class="text-center">
                <div class="h3 fw-light"><b>EcoGleam</b></div>
                <p class="mb-4 text-muted">Envíanos un mensaje</p>
              </div>
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <!-- Name Input -->
                <div class="form-floating mb-3">
                  <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" autocomplete="off" />
                  <label for="name">Nombre</label>
                  <div class="invalid-feedback" data-sb-feedback="name:required"></div>
                </div>
                <!-- Email Input -->
                <div class="form-floating mb-3">
                  <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" autocomplete="off"/>
                  <label for="emailAddress">Correo electrónico</label>
                  <div class="invalid-feedback" data-sb-feedback="emailAddress:required"></div>
                  <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Correo electrónico no válido.</div>
                </div>
                <!-- Message Input -->
                <div class="form-floating mb-3">
                  <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;" data-sb-validations="required" autocomplete="off"></textarea>
                  <label for="message">Mensaje</label>
                  <div class="invalid-feedback" data-sb-feedback="message:required"></div>
                </div>
                <!-- Submit success message -->
                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Mensaje enviado exitosamente.</div>
                  </div>
                </div>
                <!-- Submit error message -->
                <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3">Error al enviar el mensaje.</div>
                </div>
                <!-- Submit button -->
                <div class="d-grid">
                  <button class="btn btn-primary btn-lg" id="submitButton" type="submit" onclick="onClickFormulary(event)">Enviar</button>
                </div>
              </form>
              <!-- End of contact form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
{% include footer.html %}