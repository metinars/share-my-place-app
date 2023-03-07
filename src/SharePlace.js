import { Modal } from './UI/Modal';

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler);
        addressForm.addEventListener('submit', this.findAdressHandler);
    }

    locateUserHandler() {
        if (!navigator.geolocation) {
            alert(
                'Location feature is not avaliable in your browser - please use a more modern browser or manueally enter an address.'
            );
            return;
        }
        const modal = new Modal('loading-modal-content', 'Lodaing location - please wait!');
        modal.show();
        navigator.geolocation.getCurrentPosition(
            succesResult => {
                modal.hide();
                const cordinates = {
                    lat: succesResult.coords.latitude,
                    lng: succesResult.coords.longitude
                };
                console.log(cordinates);
            }, error => {
                modal.hide();
                alert(
                    'Could not locate you unfortunately. Please enter an address manually!'
                );
            });
    };

    findAddressHandler() { };
};

const placeFinder = new PlaceFinder();