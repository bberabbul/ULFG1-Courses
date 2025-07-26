document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll('.nav-item').forEach(item => {
                if (item.classList.contains('no-dropdown')) return;

                const link = item.querySelector('.nav-link');
                const dropdown = item.querySelector('.dropdown');

                link.addEventListener('click', function (e) {
                    e.stopPropagation();

                    // Toggle this dropdown
                    const isVisible = dropdown.classList.contains('show');

                    // Hide all dropdowns first
                    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));

                    // Show the clicked one if it was hidden
                    if (!isVisible) {
                        dropdown.classList.add('show');
                    }
                });
            });

            // Close dropdowns when clicking outside
            window.addEventListener('click', function () {
                document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
            });
        });