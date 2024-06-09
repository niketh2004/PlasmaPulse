document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", () => {
        // Logout logic here
        alert("Logged out successfully!");
    });

    const addInventoryForm = document.getElementById("add-inventory-form");
    addInventoryForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const bloodGroup = document.getElementById("blood-group").value;
        const inventoryType = document.getElementById("inventory-type").value;
        const quantity = document.getElementById("quantity").value;
        const donorEmail = document.getElementById("donor-email").value;
        const timeDate = document.getElementById("time-date").value;

        addInventoryItem(bloodGroup, inventoryType, quantity, donorEmail, timeDate);

        addInventoryForm.reset();
    });
});

function addInventoryItem(bloodGroup, inventoryType, quantity, donorEmail, timeDate) {
    const inventoryTable = document.getElementById("inventory-table");

    const newRow = inventoryTable.insertRow();

    const bloodGroupCell = newRow.insertCell(0);
    const inventoryTypeCell = newRow.insertCell(1);
    const quantityCell = newRow.insertCell(2);
    const donorEmailCell = newRow.insertCell(3);
    const timeDateCell = newRow.insertCell(4);

    bloodGroupCell.textContent = bloodGroup;
    inventoryTypeCell.textContent = inventoryType;
    quantityCell.textContent = quantity;
    donorEmailCell.textContent = donorEmail;
    timeDateCell.textContent = new Date(timeDate).toLocaleString();
}

function showPopup(section) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    popup.style.display = "flex";

    switch(section) {
        case 'registration':
            popupContent.innerHTML = `
                <h2>Online Donor Registration</h2>
                <p>Register as a donor to help save lives. Please provide your contact details and blood type.</p>
                <form>
                    <label for="full-name">Full Name:</label>
                    <input type="text" id="full-name" name="full-name" required><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br>
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required><br>
                    <label for="blood-type">Blood Type:</label>
                    <input type="text" id="blood-type" name="blood-type" required><br>
                    <button type="submit">Register</button>
                </form>
            `;
            break;
        case 'scheduling':
            popupContent.innerHTML = `
                <h2>Appointment Scheduling</h2>
                <p>Schedule an appointment for blood donation at your convenience.</p>
                <form>
                    <label for="appointment-date">Appointment Date:</label>
                    <input type="date" id="appointment-date" name="appointment-date" required><br>
                    <label for="appointment-time">Appointment Time:</label>
                    <input type="time" id="appointment-time" name="appointment-time" required><br>
                    <button type="submit">Schedule</button>
                </form>
            `;
            break;
        case 'criteria':
            popupContent.innerHTML = `
                <h2>Donor Eligibility Criteria</h2>
                <p>To donate blood, you must meet the following criteria:</p>
                <ul>
                    <li>Be in good general health and feeling well.</li>
                    <li>Be at least 17 years old.</li>
                    <li>Weigh at least 110 lbs.</li>
                    <li>Have not donated blood in the last 56 days.</li>
                </ul>
            `;
            break;
        case 'faq':
            popupContent.innerHTML = `
                <h2>FAQ Section</h2>
                <p>Find answers to the most frequently asked questions about blood donation.</p>
                <ul>
                    <li>How often can I donate blood?</li>
                    <li>What should I do before donating blood?</li>
                    <li>Are there any risks in donating blood?</li>
                </ul>
            `;
            break;
        case 'calendar':
            popupContent.innerHTML = `
                <h2>Donation Events Calendar</h2>
                <p>Check out the upcoming blood donation events in your area.</p>
                <ul>
                    <li>June 15: Community Blood Drive</li>
                    <li>July 10: Corporate Blood Donation Camp</li>
                    <li>August 5: University Blood Donation Day</li>
                </ul>
            `;
            break;
        case 'rewards':
            popupContent.innerHTML = `
                <h2>Donor Rewards Program</h2>
                <p>Join our donor rewards program and earn points for every donation. Redeem points for gifts and vouchers.</p>
            `;
            break;
        case 'sharing':
            popupContent.innerHTML = `
                <h2>Social Sharing Buttons</h2>
                <p>Help spread the word about blood donation. Share your donation story on social media.</p>
                <button onclick="shareOnFacebook()">Share on Facebook</button>
                <button onclick="shareOnTwitter()">Share on Twitter</button>
            `;
            break;
        case 'testimonials':
            popupContent.innerHTML = `
                <h2>Testimonials and Success Stories</h2>
                <p>Read the inspiring stories of those who have donated blood and the lives they've saved.</p>
                <ul>
                    <li>"Donating blood was a fulfilling experience. I know I made a difference." - John Doe</li>
                    <li>"I encourage everyone to donate blood. It doesn't take much time, but it can save a life." - Jane Smith</li>
                </ul>
            `;
            break;
        case 'tips':
            popupContent.innerHTML = `
                <h2>Blood Donation Tips</h2>
                <p>Here are some tips to ensure a smooth and successful blood donation experience:</p>
                <ul>
                    <li>Stay hydrated and drink plenty of water before donating.</li>
                    <li>Eat a healthy meal before your donation.</li>
                    <li>Avoid heavy exercise before and after donating.</li>
                </ul>
            `;
            break;
        case 'privacy':
            popupContent.innerHTML = `
                <h2>Privacy Policy and Consent</h2>
                <p>We value your privacy. Read our privacy policy and provide your consent to participate in blood donation activities.</p>
                <form>
                    <label for="consent">I agree to the privacy policy:</label>
                    <input type="checkbox" id="consent" name="consent" required><br>
                    <button type="submit">Submit</button>
                </form>
            `;
            break;
        case 'emergency':
            popupContent.innerHTML = `
                <h2>Emergency Contact Information</h2>
                <p>In case of an emergency, please contact:</p>
                <ul>
                    <li>Emergency Hotline: 123-456-7890</li>
                    <li>Local Hospital: 098-765-4321</li>
                </ul>
            `;
            break;
        case 'language':
            popupContent.innerHTML = `
                <h2>Language Options</h2>
                <p>Select your preferred language for the dashboard:</p>
                <select>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                </select>
            `;
            break;
        default:
            popupContent.innerHTML = "<h2>Section</h2><p>Details...</p>";
    }
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

function shareOnFacebook() {
    alert("Shared on Facebook!");
}

function shareOnTwitter() {
    alert("Shared on Twitter!");
}
document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", () => {
        window.location.href = 'index.html';
    });

    const addInventoryForm = document.getElementById("add-inventory-form");
    addInventoryForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const bloodGroup = document.getElementById("blood-group").value;
        const inventoryType = document.getElementById("inventory-type").value;
        const quantity = document.getElementById("quantity").value;
        const donorEmail = document.getElementById("donor-email").value;
        const timeDate = document.getElementById("time-date").value;

        addInventoryItem(bloodGroup, inventoryType, quantity, donorEmail, timeDate);

        addInventoryForm.reset();
    });
});

function addInventoryItem(bloodGroup, inventoryType, quantity, donorEmail, timeDate) {
    const inventoryTable = document.getElementById("inventory-table");

    const newRow = inventoryTable.insertRow();

    const bloodGroupCell = newRow.insertCell(0);
    const inventoryTypeCell = newRow.insertCell(1);
    const quantityCell = newRow.insertCell(2);
    const donorEmailCell = newRow.insertCell(3);
    const timeDateCell = newRow.insertCell(4);

    bloodGroupCell.textContent = bloodGroup;
    inventoryTypeCell.textContent = inventoryType;
    quantityCell.textContent = quantity;
    donorEmailCell.textContent = donorEmail;
    timeDateCell.textContent = new Date(timeDate).toLocaleString();
}

function showPopup(section) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    popup.style.display = "flex";

    switch(section) {
        case 'registration':
            popupContent.innerHTML = `
                <h2>Online Donor Registration</h2>
                <p>Register as a donor to help save lives. Please provide your contact details and blood type.</p>
                <form>
                    <label for="full-name">Full Name:</label>
                    <input type="text" id="full-name" name="full-name" required><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br>
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required><br>
                    <label for="blood-type">Blood Type:</label>
                    <input type="text" id="blood-type" name="blood-type" required><br>
                    <button type="submit">Register</button>
                </form>
            `;
            break;
        case 'scheduling':
            popupContent.innerHTML = `
                <h2>Appointment Scheduling</h2>
                <p>Schedule an appointment for blood donation at your convenience.</p>
                <form>
                    <label for="appointment-date">Appointment Date:</label>
                    <input type="date" id="appointment-date" name="appointment-date" required><br>
                    <label for="appointment-time">Appointment Time:</label>
                    <input type="time" id="appointment-time" name="appointment-time" required><br>
                    <button type="submit">Schedule</button>
                </form>
            `;
            break;
        case 'criteria':
            popupContent.innerHTML = `
                <h2>Donor Eligibility Criteria</h2>
                <p>To donate blood, you must meet the following criteria:</p>
                <ul>
                    <li>Be in good general health and feeling well.</li>
                    <li>Be at least 17 years old.</li>
                    <li>Weigh at least 110 lbs.</li>
                    <li>Have not donated blood in the last 56 days.</li>
                </ul>
            `;
            break;
        case 'faq':
            popupContent.innerHTML = `
                <h2>FAQ Section</h2>
                <p>Find answers to the most frequently asked questions about blood donation.</p>
                <ul>
                    <li>How often can I donate blood?</li>
                    <li>What should I do before donating blood?</li>
                    <li>Are there any risks in donating blood?</li>
                </ul>
            `;
            break;
        case 'calendar':
            popupContent.innerHTML = `
                <h2>Donation Events Calendar</h2>
                <p>Check out the upcoming blood donation events in your area.</p>
                <ul>
                    <li>June 15: Community Blood Drive</li>
                    <li>July 10: Corporate Blood Donation Camp</li>
                    <li>August 5: University Blood Donation Day</li>
                </ul>
            `;
            break;
        case 'rewards':
            popupContent.innerHTML = `
                <h2>Donor Rewards Program</h2>
                <p>Join our donor rewards program and earn points for every donation. Redeem points for gifts and vouchers.</p>
            `;
            break;
        case 'sharing':
            popupContent.innerHTML = `
                <h2>Social Sharing Buttons</h2>
                <p>Help spread the word about blood donation. Share your donation story on social media.</p>
                <button onclick="shareOnFacebook()">Share on Facebook</button>
                <button onclick="shareOnTwitter()">Share on Twitter</button>
            `;
            break;
        case 'testimonials':
            popupContent.innerHTML = `
                <h2>Testimonials and Success Stories</h2>
                <p>Read the inspiring stories of those who have donated blood and the lives they've saved.</p>
                <ul>
                    <li>"Donating blood was a fulfilling experience. I know I made a difference." - John Doe</li>
                    <li>"I encourage everyone to donate blood. It doesn't take much time, but it can save a life." - Jane Smith</li>
                </ul>
            `;
            break;
        case 'tips':
            popupContent.innerHTML = `
                <h2>Blood Donation Tips</h2>
                <p>Here are some tips to ensure a smooth and successful blood donation experience:</p>
                <ul>
                    <li>Stay hydrated and drink plenty of water before donating.</li>
                    <li>Eat a healthy meal before your donation.</li>
                    <li>Avoid heavy exercise before and after donating.</li>
                </ul>
            `;
            break;
        case 'privacy':
            popupContent.innerHTML = `
                <h2>Privacy Policy and Consent</h2>
                <p>We value your privacy. Read our privacy policy and provide your consent to participate in blood donation activities.</p>
                <form>
                    <label for="consent">I agree to the privacy policy:</label>
                    <input type="checkbox" id="consent" name="consent" required><br>
                    <button type="submit">Submit</button>
                </form>
            `;
            break;
        case 'emergency':
            popupContent.innerHTML = `
                <h2>Emergency Contact Information</h2>
                <p>In case of an emergency, please contact:</p>
                <ul>
                    <li>Emergency Hotline: 123-456-7890</li>
                    <li>Local Hospital: 098-765-4321</li>
                </ul>
            `;
            break;
        case 'language':
            popupContent.innerHTML = `
                <h2>Language Options</h2>
                <p>Select your preferred language for the dashboard:</p>
                <select>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                </select>
            `;
            break;
        default:
            popupContent.innerHTML = "<h2>Section</h2><p>Details...</p>";
    }
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

function shareOnFacebook() {
    alert("Shared on Facebook!");
}

function shareOnTwitter() {
    alert("Shared on Twitter!");
}
