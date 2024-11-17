
                function mostraralgo()
                {
                    var contenido = document.getElementById("contenido")
                    if (contenido.style.display === "none")
                    {
                    contenido.style.display = "block";
                    }
                    else
                    {
                    contenido.style.display = "none";
                    }
                }

                function mostrarcate()
                {
                    var contenido = document.getElementById("contenido2")
                    if (contenido.style.display === "none")
                    {
                    contenido.style.display = "block";
                    }
                    else
                    {
                    contenido.style.display = "none";
                    }
                }

                function validar()
                {
                    var correo = document.getElementById("correo").value;
                    if (correo.includes ("@") && correo.includes ("."))
                {
                    alert("Formulario Validada");
                }
                else
                {
                    alert("Formulario Inválidado");
                }
                
                }