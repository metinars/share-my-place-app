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
        navigator.geolocation.getCurrentPosition(
            succesResult => {
                const cordinates = {
                    lat: succesResult.coords.latitude,
                    lng: succesResult.coords.longitude
                };
                console.log(cordinates);
            }, error => {
                alert(
                    'Could not locate you unfortunately. Please enter an address manually!'
                );
            });
    };

    findAddressHandler() { };
};

const placeFinder = new PlaceFinder();