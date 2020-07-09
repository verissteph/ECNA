$(document).ready(function ($) {
    const $formulario = $("#formulario");
    
    $formulario.submit(e => {
      e.preventDefault();
      const $action = $formulario.attr('action');
      const $data = $formulario.serialize();
      $.post($action, $data).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Mensagem Enviada!',
            text: 'Muito obrigado!',
            footer: '<a href="/index.html">Voltar para home</a>'
        });
      });
    });

  });

  
$(document).ready(function ($) {
    const $formulario = $("#contato");
    
    $formulario.submit(e => {
      e.preventDefault();
      const $action = $formulario.attr('action');
      const $data = $formulario.serialize();
      $.post($action, $data).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Mensagem Enviada!',
            text: 'Muito obrigado!',
            footer: '<a href="/index.html">Voltar para home</a>'
        });
      });
    });

  });