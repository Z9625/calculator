let button = document.querySelector('button')

button.addEventListener('click', () => {
    let firstName = document.querySelector('.first-name').value
    let lastName = document.querySelector('.last-name').value
    let email = document.querySelector('.email').value
    let tgUsername = document.querySelector('.username').value
    let textarea = document.querySelector('#textarea').value
    const hasNumber = /\d/.test(firstName) || /\d/.test(lastName);
    const badWords = [
        // English
        'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'dick', 'pussy',
        'nigger', 'nigga', 'faggot', 'cunt', 'slut', 'whore', 'damn',
        'cock', 'retard', 'motherfucker', 'bullshit', 'tit', 'tits',

        // Russian
        'блять', 'сука', 'хуй', 'пизда', 'ебать', 'гандон', 'чмо',
        'мразь', 'шлюха', 'долбоеб', 'нахуй', 'ебаный', 'жопа', 'пидор',
        'уебок', 'тварь', 'ебло', 'мудак', 'гавно', 'даун',

        // Uzbek
        'ahmoq', 'tentak', 'kal', 'qo\'toq', 'skun', 'it', 'hayvon',
        'eb', 'o\'lib ket', 'urib tashlayman', 'bola emassan', 'yaramas',
        'axmoq', 'jinni', 'dangasa', 'kaltafahm', 'sharmanda', 'iflos',
        'harom', 'haramzada', 'siktir', 'quta', 'jallab', 'siyib qo\'y',
        'pachak', 'shitir', 'musofir emas'
    ];

    let hasBadWord = badWords.some(word => textarea.toLowerCase().includes(word));
    if (firstName != '' && lastName != '') {
        if (!hasNumber) {
            if (email != '' && email.includes('@gmail.com')) {
                if (tgUsername != '' && tgUsername.length >= 5) {
                    if (tgUsername.includes('@')) {
                        if (textarea.length > 15 || textarea.length < 250) {
                            if (!hasBadWord) {
                                const message = `🟢 Новое сообщение прислан от:\n 👤 Имя: ${firstName}\n 👤Фамилия: ${lastName} \n \n ✍️Cообщение: ${textarea}\n \n Email: ${email} \n Telegram username: ${tgUsername}`;
                                fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        chat_id: CHAT_ID,
                                        text: message
                                    })
                                })
                                    .then(res => {
                                        if (!res.ok) {
                                            throw new Error('We cann\'t to sent this message to Telegram');
                                        }
                                        alert("The message was successfuly sent!");
                                    })
                                    .catch(err => {
                                        console.error('Error:', err);
                                        alert("Error: " + err.message);
                                    });
                            }
                        } else {
                            alert('The message is too short. (Min 15, Max 250)')
                        }
                    } else {
                        alert('You\'re forgot \'@\' in your username')
                    }
                } else {
                    alert('Username is too short')
                }
            } else {
                alert('Email is invalid')
            }
        } else {
            alert('Your name or surname have a number')
        }
    } else {
        alert('You\'re not wrote your First or Last name')
    }
})


document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        let firstName = document.querySelector('.first-name').value
        let lastName = document.querySelector('.last-name').value
        let email = document.querySelector('.email').value
        let tgUsername = document.querySelector('.username').value
        let textarea = document.querySelector('#textarea').value
        const hasNumber = /\d/.test(firstName) || /\d/.test(lastName);
        const badWords = [
            // English
            'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'dick', 'pussy',
            'nigger', 'nigga', 'faggot', 'cunt', 'slut', 'whore', 'damn',
            'cock', 'retard', 'motherfucker', 'bullshit', 'tit', 'tits',

            // Russian
            'блять', 'сука', 'хуй', 'пизда', 'ебать', 'гандон', 'чмо',
            'мразь', 'шлюха', 'долбоеб', 'нахуй', 'ебаный', 'жопа', 'пидор',
            'уебок', 'тварь', 'ебло', 'мудак', 'гавно', 'даун',

            // Uzbek
            'ahmoq', 'tentak', 'kal', 'qo\'toq', 'skun', 'it', 'hayvon',
            'eb', 'o\'lib ket', 'urib tashlayman', 'bola emassan', 'yaramas',
            'axmoq', 'jinni', 'dangasa', 'kaltafahm', 'sharmanda', 'iflos',
            'harom', 'haramzada', 'siktir', 'quta', 'jallab', 'siyib qo\'y',
            'pachak', 'shitir', 'musofir emas'
        ];

        let hasBadWord = badWords.some(word => textarea.toLowerCase().includes(word));
        if (firstName != '' && lastName != '') {
            if (!hasNumber) {
                if (email != '' && email.includes('@gmail.com')) {
                    if (tgUsername != '' && tgUsername.length >= 5) {
                        if (tgUsername.includes('@')) {
                            if (textarea.length > 15 || textarea.length < 250) {
                                if (!hasBadWord) {
                                    const message = `🟢 Новое сообщение прислан от:\n 👤 Имя: ${firstName}\n 👤Фамилия: ${lastName} \n \n ✍️Cообщение: ${textarea}\n \n Email: ${email} \n Telegram username: ${tgUsername}`;
                                    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            chat_id: CHAT_ID,
                                            text: message
                                        })
                                    })
                                        .then(res => {
                                            if (!res.ok) {
                                                throw new Error('We cann\'t to sent this message to Telegram');
                                            }
                                            alert("The message was successfuly sent!");
                                        })
                                        .catch(err => {
                                            console.error('Error:', err);
                                            alert("Error: " + err.message);
                                        });
                                }
                            } else {
                                alert('The message is too short. (Min 15, Max 250)')
                            }
                        } else {
                            alert('You\'re forgot \'@\' in your username')
                        }
                    } else {
                        alert('Username is too short')
                    }
                } else {
                    alert('Email is invalid')
                }
            } else {
                alert('Your name or surname have a number')
            }
        } else {
            alert('You\'re not wrote your First or Last name')
        }
    }
})