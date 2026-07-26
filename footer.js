document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear(); 

    const footerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <p>© ${currentYear} Emmy Zhang. All rights reserved.</p>
            <ul class="footer-links">
                <li><a href="mailto:emmy@lucythemews.com" target="_blank" rel="noopener noreferrer">Email</a></li>
                <li><a href="https://www.instagram.com/emmy.j.zhang" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
        </div>
    </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
