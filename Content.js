const palestineImages = [
    "https://i.guim.co.uk/img/media/5d9ea77d27c95d327caee787ddc6af484faaa567/0_0_8192_4918/master/8192.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=41d4b9214304f5c1e0d4a659f7111388",
    "https://www.aljazeera.com/wp-content/uploads/2023/10/33XX6EA-highres-1696932122.jpg?resize=770%2C513&quality=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8GS27pNaia0YUHvofjSg2JLE5aLTi41bO7Wl9HN3qA&s",
]

const imgs = document.getElementsByTagName('img')
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * palestineImages.length)
    imgs[i].src = palestineImages[randomImg]
}

