async function updateLanyard() {
    const request = await fetch('https://c.veth1.cc/at.hiven.tools:3001/status/848302151402520576'),
          data = await request.json();

    $('#status').text(data.status)
    $('#name').text(data.username)

    if (!data.is_listening) {
        $('.spotify').attr('style', 'display: none;')
        $('.discord').attr('style', 'margin-top: 20px;')
    } else {
        $('#song').text(`${data.song}`)
        $('.spotify').attr('style', 'display: visible;')
        $('.discord').attr('style', '')
    }
}

updateLanyard();
setInterval(updateLanyard, 5000)
