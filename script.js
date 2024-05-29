document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate login
    if (username === 'testuser' && password === 'testpassword') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('analyticsSection').style.display = 'block';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

document.getElementById('searchButton').addEventListener('click', function() {
    const hashtag = document.getElementById('hashtag').value;
    const resultsDiv = document.getElementById('results');
    
    // Simulate hashtag analytics results
    resultsDiv.innerHTML = `
        <h3>Results for #${hashtag}</h3>
        <p><strong>Number of Posts:</strong> 1234</p>
        <p><strong>Likes:</strong> 56789</p>
        <p><strong>Comments:</strong> 2345</p>
        <p><strong>Engagement:</strong> High</p>
    `;
});
