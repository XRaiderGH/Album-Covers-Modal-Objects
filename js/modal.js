const modalView = {
    allContent: document.querySelectorAll('.modalContent'),
    allButtons: document.querySelectorAll('.modalButton'),
    createBackground() {
        let background = document.createElement('div');
        background.classList.add('modalBackground');
        return background;
    },
    createModal(){
        let modal = document.createElement('div');
        modal.className = 'modal';
        modal.addEventListener('click', (evt) => evt.stopPropagation());
        return modal;
    },
    createCloseButton(){
        let closeButton = document.createElement('div');
        closeButton.className = 'closeButton';
        closeButton.innerHTML = '&#x00D7';

        closeButton.addEventListener('click',() =>{
            this.close();
        });

        return closeButton;
    },
    open(elem) {
        //background
        this.background = this.createBackground();
        document.body.appendChild(this.background);
        //modal
        this.modal = this.createModal();
        document.body.appendChild(this.modal);
        //closeButton
        this.closeButton = this.createCloseButton();
        this.modal.appendChild(this.closeButton);
        //content
        this.modal.appendChild(elem);
    },
    close() {
        document.body.removeChild(this.background);
        document.body.removeChild(this.modal);
        this.modal.removeChild(this.closeButton);
    },
};
//Init, removing content and adding event to buttons
for (let i=0; i<modalView.allContent.length; i++){
    modalView.allContent[i].parentNode.removeChild(modalView.allContent[i]);
}

for (let i=0; i<modalView.allButtons.length; i++){
    modalView.allButtons[i].addEventListener('click', () => {
        let content = modalView.allContent[i];
        modalView.open(content);
        console.log('modal nr ' + [i]);
    })
}
