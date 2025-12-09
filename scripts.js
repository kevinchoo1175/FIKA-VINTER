// Validación general de formularios
document.addEventListener('DOMContentLoaded', () => {
    // Validación para formulario de contacto (INDEX_2.html)
    const contactoForm = document.querySelector('.form-contacto');
    if (contactoForm) {
        contactoForm.addEventListener('submit', (e) => {
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const comentario = document.getElementById('comentario').value.trim();
            if (!nombre || !email || !comentario || !/\S+@\S+\.\S+/.test(email)) {
                e.preventDefault();
                alert('Por favor, completa todos los campos correctamente. El email debe ser válido.');
            } else {
                alert('Mensaje enviado (simulado).');
            }
        });
    }

    // Validación para registro (INDEX_4.html)
    const registroForm = document.querySelector('.form-contacto'); // Mismo class, pero en INDEX_4
    if (registroForm && document.getElementById('contraseña')) {
        registroForm.addEventListener('submit', (e) => {
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const contraseña = document.getElementById('contraseña').value;
            const confirmar = document.getElementById('confirmar-contraseña').value;
            const telefono = document.getElementById('telefono').value.trim();
            if (!nombre || !email || !contraseña || !confirmar || !telefono || contraseña !== confirmar || !/\S+@\S+\.\S+/.test(email) || !/^\d{7,15}$/.test(telefono)) {
                e.preventDefault();
                alert('Completa todos los campos. Las contraseñas deben coincidir, email válido y teléfono numérico.');
            } else {
                alert('Registro completado (simulado).');
            }
        });
    }

    // Validación para comentarios (INDEX_1.html)
    const comentarioForm = document.querySelector('.form-comentario');
    if (comentarioForm) {
        comentarioForm.addEventListener('submit', (e) => {
            const nombre = document.getElementById('nombre').value.trim();
            const comentario = document.getElementById('comentario').value.trim();
            if (!nombre || !comentario) {
                e.preventDefault();
                alert('Por favor, completa nombre y comentario.');
            } else {
                alert('Comentario agregado (simulado).');
            }
        });
    }

    // Validación para carrito (INDEX_3.html) - Actualiza total dinámicamente
    const carritoForm = document.querySelector('.form-carrito');
    if (carritoForm) {
        const cantidadInputs = document.querySelectorAll('.cantidad');
        const totalCarrito = document.getElementById('totalCarrito');
        cantidadInputs.forEach(input => {
            input.addEventListener('input', updateTotal);
        });
        function updateTotal() {
            let total = 0;
            document.querySelectorAll('.producto').forEach(prod => {
                const precio = parseFloat(prod.querySelector('.precio').textContent.replace('Precio: $', '').replace(',', ''));
                const cantidad = parseInt(prod.querySelector('.cantidad').value) || 1;
                const subtotal = precio * cantidad;
                prod.querySelector('.total-producto').textContent = `Total: $${subtotal.toLocaleString()}`;
                total += subtotal;
            });
            totalCarrito.textContent = `$${total.toLocaleString()}`;
        }
        updateTotal(); // Inicial
        carritoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Compra finalizada (simulado).');
        });
    }
});






function openModal(modalId, title, message) {
            var modal = document.getElementById(modalId);
            var modalTitle = document.getElementById(modalId + '-title');
            var modalMessage = document.getElementById(modalId + '-message');

            if (modal && modalTitle && modalMessage) {
                modalTitle.innerText = title; // Modifica el título aquí
                modalMessage.innerText = message; // Modifica el mensaje aquí
                modal.style.display = 'flex';
            }
        }

        // Función para cerrar el modal
        function closeModal(modalId) {
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none';
            }
        }

        // Cerrar si se hace clic fuera
        window.onclick = function(event) {
            var modals = document.getElementsByClassName('modal');
            for (var i = 0; i < modals.length; i++) {
                if (event.target === modals[i]) {
                    modals[i].style.display = 'none';
                }
            }
        };