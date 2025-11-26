 RatingSystem = {
    // Submit rating
    submitRating: function (packageName, state, rating) {
        return fetch('submit_rating.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                package_name: packageName,
                state: state,
                rating: rating
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    return data;
                } else {
                    throw new Error(data.message);
                }
            });