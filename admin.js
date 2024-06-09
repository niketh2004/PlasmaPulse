// JavaScript code for handling popups and logout

function showPopup(popupId) {
    var popupContent = document.getElementById(popupId + '-popup').querySelector('.popup-content');
    switch (popupId) {
        case 'user-management':
            popupContent.innerHTML = `
                <span class="close-button" onclick="closePopup('${popupId}-popup')">&times;</span>
                <h2>User Management</h2>
                <p>Manage user accounts including creation, modification, and deletion of user records.</p>
                <form>
                    <label for="search-user">Search User:</label>
                    <input type="text" id="search-user" name="search-user"><br>
                    <button type="button">Search</button>
                </form>
                <div>
                    <button onclick="showAddUserForm()">Add New User</button>
                    <button onclick="showEditUserForm()">Edit User</button>
                    <button onclick="showDeleteUserForm()">Delete User</button>
                </div>
                <div id="user-action-form">
                    <!-- Additional form content will be loaded here based on action -->
                </div>
            `;
            break;
        case 'inventory-management':
            popupContent.innerHTML = `
                <span class="close-button" onclick="closePopup('${popupId}-popup')">&times;</span>
                <h2>Inventory Management</h2>
                <p>Monitor and manage blood inventory levels. Update stock status and manage storage details.</p>
                <form>
                    <label for="blood-type">Blood Type:</label>
                    <input type="text" id="blood-type" name="blood-type" required><br>
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" required><br>
                    <button type="button" onclick="updateInventory('${popupId}')">Update Inventory</button>
                </form>
            `;
            break;
        case 'donor-management':
            popupContent.innerHTML = `
                <span class="close-button" onclick="closePopup('${popupId}-popup')">&times;</span>
                <h2>Donor Management</h2>
                <p>Register, update, and manage donor information. Track donor history and eligibility.</p>
                <form>
                    <label for="full-name">Full Name:</label>
                    <input type="text" id="full-name" name="full-name" required><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br>
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required><br>
                    <label for="blood-type">Blood Type:</label>
                    <input type="text" id="blood-type" name="blood-type" required><br>
                    <button type="button">Register Donor</button>
                </form>
            `;
            break;
        // Add more cases for other popups as needed
    }
    document.getElementById(popupId + '-popup').classList.add('active');
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove('active');
}

function logout() {
    // Redirect to index.html
    window.location.href = 'index.html';
}

function updateInventory(bloodType) {
    alert(`Updating inventory for blood type: ${bloodType}`);
    // Additional logic to dynamically update inventory details
}
