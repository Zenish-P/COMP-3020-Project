let TOTAL_SONGS = 1;

function saveSong()
{
    var song =  {
        attributes: {
            title: "Animals",
            artist: "Maroon 5",
            genre: "Rock"
        },
        outcomes: {
            views: 200,
            rating: 5,
            likes: 100,
            comments: {
                u1: "Nice song",
                u2: "Great music"
            }
        }
    }
    var obj = JSON.stringify(song);
    localStorage.setItem("song_1", obj);    
}

function searchSong(searchString)
{
    var i = 0;
    for(i = 1; i <= TOTAL_SONGS; i++)
    {
        var songName = "song_" + i;
        var song = localStorage.getItem(songName);
        var obj = JSON.parse(song);
        console.log(obj.attributes.title);
    }
}

function displaySong()
{
    document.getElementById('txt_name').value;
}