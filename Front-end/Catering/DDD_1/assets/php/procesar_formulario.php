<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Correo electrónico de destino
    $to = "taami.serrano@gmail.com";

    // Asunto del correo
    $subject = "Te contactó un cliente!";

    // Cuerpo del correo
    $body = "Nombre: $name\nCorreo electrónico: $email\nMensaje:\n$message";

    // Encabezados del correo
    $headers = "From: $email";

    // Enviar el correo
    mail($to, $subject, $body, $headers);

    // Puedes redirigir a una página de agradecimiento después de enviar el formulario
    header("Location: gracias.html");
}
?>
