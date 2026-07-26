document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">Emmy Zhang</a>
            <ul class="nav-links">
                <li><a href="work.html">Work</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </div>
    </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
