function send_email()
{
	window.open("mailto:cordobaelectricos@gmail.com?subject=Cotizacion&body=Nombre: "+$('#nombre').val()+ " Correo: "+$('#email').val()+" Telefono: "+$('#telefono').val()+" Mensaje: "+$('#mensaje').val());
}