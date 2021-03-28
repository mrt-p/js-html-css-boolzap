var app = new Vue ({
    el: '#app',
    data: {
        search: '',
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luca',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        contactActive: 0,        
    },
    
    methods: {
        
        getMessageClass(index) {
            let thisContact = this.contacts[this.contactActive];
            let messageClass = 'messaggio ' + thisContact.messages[index].status;
            return messageClass;
        },
        
        sendMessage() {
            // prendo messaggio
            let thisContact = this.contacts[this.contactActive];

            thisContact.messages.push({
                text: this.newMessage,
                date: dayjs().format('DD MM YYYY hh:mm:ss'),
                status: 'sent'
            });

            // svuoto input
            this.newMessage = '';

            // mando messaggio dopo 1 secondo
            setTimeout(() => {
                thisContact.messages.push({
                    text: 'ok',
                    date: dayjs().format('DD MM YYYY hh:mm:ss'),
                    status: 'received'
                });
            }, 1000);
        },
        setActiveConversation(index) {
            // rendiamo visibili i messaggi di un contatto
            this.contactActive = index;
        },
    },

    computed: {
        filteredList() {
            return this.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }

},
)

console.log(app.contacts[0].messages);