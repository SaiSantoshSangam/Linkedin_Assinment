document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const openSidebar = document.getElementById("openSidebar");
    const closeSidebar = document.getElementById("closeSidebar");

    // Toggle Sidebar
    function toggleSidebar() {
        sidebar.classList.toggle("open");
        sidebar.classList.toggle("closed");

        // Hide the open button when the sidebar is open
        openSidebar.style.display = sidebar.classList.contains("open") ? "none" : "block";
    }

    // Event Listeners
    openSidebar.addEventListener("click", toggleSidebar);
    closeSidebar.addEventListener("click", toggleSidebar);
});
