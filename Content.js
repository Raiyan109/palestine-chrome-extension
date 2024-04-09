// const palestineImages = [
//     "https://i.guim.co.uk/img/media/5d9ea77d27c95d327caee787ddc6af484faaa567/0_0_8192_4918/master/8192.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=41d4b9214304f5c1e0d4a659f7111388",
//     "https://www.aljazeera.com/wp-content/uploads/2023/10/33XX6EA-highres-1696932122.jpg?resize=770%2C513&quality=80",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8GS27pNaia0YUHvofjSg2JLE5aLTi41bO7Wl9HN3qA&s",
// ]

// const imgs = document.getElementsByTagName('img')
// for (let i = 0; i < imgs.length; i++) {
//     const randomImg = Math.floor(Math.random() * palestineImages.length)
//     imgs[i].src = palestineImages[randomImg]
// }

// window.open("http://www.google.com", "_self");
// window.onload = function () {
//     document.body.style.backgroundImage = 'url("chrome-extension://@' + chrome.runtime.id + 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8GS27pNaia0YUHvofjSg2JLE5aLTi41bO7Wl9HN3qA&s")';
// };


// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed.');
});

// Function to fetch a random picture URL
async function fetchRandomPicture() {
    // Replace this URL with the endpoint that provides random pictures
    const endpoint = 'https://picsum.photos/200/300';

    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.url;
    } catch (error) {
        console.error('Error fetching random picture:', error);
        return null;
    }
}

// Listen for new tab events
chrome.tabs.onCreated.addListener(async (tab) => {
    // Fetch a random picture URL
    const imageUrl = await fetchRandomPicture();

    // Set the background image of the new tab
    if (imageUrl) {
        chrome.tabs.update(tab.id, { 'url': 'http://www.google.com' });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: setBackgroundImage,
            args: [imageUrl]
        });
    }
});

// Function to set the background image of the page
function setBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = `url("${imageUrl}")`;
}
