const URL = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
    const response = await fetch(URL);
    const users = await response.json();
    return users;
};

(async function users() {
    const users = await fetchUsers();

    const usersWrapper = document.createElement('div');
    usersWrapper.classList.add('users');
    document.body.append(usersWrapper);

    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user_item');

        const userInfo = document.createElement('button');
        const userClear = document.createElement('button');
        userInfo.innerHTML = 'Информация';
        userClear.innerHTML = 'Очистить';

        userInfo.onclick = function () {
            alert('geo: ' + 'lat: ' + user.address.geo.lat + ', lng: ' + user.address.geo.lng);
        };
        userClear.onclick = function () {
            userItem.remove();
        };

        const id = document.createElement('div');
        const name = document.createElement('div');
        name.classList.add('name');
        const userName = document.createElement('div');
        const email = document.createElement('a');
        const phone = document.createElement('a');
        const website = document.createElement('a');
        const adress = document.createElement('div');
        const street = document.createElement('div');
        const suite = document.createElement('div');
        const city = document.createElement('div');
        const zipcode = document.createElement('div');
        const company = document.createElement('div');
        const companyName = document.createElement('div');
        const catchPhrase = document.createElement('div');
        const bs = document.createElement('div');

        website.href = 'https://www.youtube.com/';
        email.href = 'mailto:https://mail.google.com/';
        phone.href = 'tel:+380664883944';

        id.innerHTML = '- id: ' + user.id + ' ,';
        name.innerHTML = user.name;
        userName.innerHTML = '- username: ' + user.username + ' ,';
        email.innerHTML = '- email: ' + user.email + ' ,';
        phone.innerHTML = '- phone: ' + user.phone + ' ,';
        website.innerHTML = '- website: ' + user.website + ' ,';
        adress.innerHTML = '- adress: ';
        street.innerHTML = '....-street: ' + user.address.street + ' ,';
        suite.innerHTML = '....-suite: ' + user.address.suite + ' ,';
        city.innerHTML = '....-city: ' + user.address.city + ' ,';
        zipcode.innerHTML = '....-zipcode: ' + user.address.zipcode + ' ,';
        company.innerHTML = '- company: ';
        companyName.innerHTML = '....-name: ' + user.company.name + ' ,';
        catchPhrase.innerHTML = '....-catchPhrase: ' + user.company.catchPhrase + ' ,';
        bs.innerHTML = '....-bs: ' + user.company.bs;

        userItem.append(name, id, userName, phone, email, website, adress, company, userInfo, userClear);
        adress.append(city, street, suite, zipcode);
        company.append(companyName, catchPhrase, bs)

        usersWrapper.append(userItem);
    });
})();
