function dataSubmit() {
    let name = document.getElementById('inputName').value;
    let email = document.getElementById('inputEmail').value;
    let phone = document.getElementById('inputNumber').value;
    let subject = document.getElementById('inputSubject').value;
    let message = document.getElementById('inputMessage').value;

    if (name == '') {
        return alert('Nama harus diisi')
    } else if (email == '') {
        return alert('Email harus diisi')
    } else if (phone == '') {
        return alert('Nomor harus diisi')
    } else if (subject == '') {
        return alert('Subject harus dipilih')
    } else if (message == '') {
        return alert('Pesan harus diisi')
    }

    let emailReceiver = 'encdamz@gmail.com'
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject${subject}&body=Hallo, Nama saya ${name}, ${message}. Silhkan kontak saya di nomor ${phone}, terima kasih`
    a.click()

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)

    let emailer = {
        name,
        email,
        phone,
        subject,
        message,
    }

    console.log(emailer)
}