let ROUTE_PATH = window.location.hash.substr(1).toLowerCase();
let TOPBAR_HANDLE = document.querySelector('#TopBar');
let SIDEBAR_HANDLE = document.querySelector('#SideBar');
let CONTENT_HANDLE = document.querySelector('#Content');
let FOOTER_HANDLE = document.querySelector('footer');

// Populate with demo data.
let usersList = [
    { email: 'test@test.com', password: 'password', firstName: 'Test', lastName: 'User' }
];

let projectsList = [
    { projectId: 0, title: 'Design website.', users: ['test@test.com'], timeCreated: 1523283300, timeDue: 1523794000 },
    { projectId: 1, title: 'Blockchain design.', users: ['test@test.com'], timeCreated: 1523283800, timeDue: 1523798000 },
    { projectId: 2, title: 'Business cards.', users: ['test@test.com'], timeCreated: 152329000, timeDue: 1523850000 }
];

let tasksList = [
    { taskId: 0, parentProject: 0, parentTask: null, title: 'Create design.', users: ['test@test.com'], timeCreated: 1523283650, timeDue: 1523793750 },
    { taskId: 1, parentProject: 0, parentTask: null, title: 'Choose colours.', users: ['test@test.com'], timeCreated: 1523283748, timeDue: 1523793600 },
    { taskId: 2, parentProject: 0, parentTask: null, title: 'Pick images.', users: ['test@test.com'], timeCreated: 1523283790, timeDue: 15237936500 },
    { taskId: 3, parentProject: 1, parentTask: null, title: 'Database choice.', users: ['test@test.com'], timeCreated: 1523283848, timeDue: 1523797000 },
    { taskId: 4, parentProject: 1, parentTask: null, title: 'Proof of work.', users: ['test@test.com'], timeCreated: 1523283898, timeDue: 1523797900 },
    { taskId: 5, parentProject: 2, parentTask: null, title: 'Design cards.', users: ['test@test.com'], timeCreated: 152329050, timeDue: 152330000 }
];

let authenticationState = {
    user: '',
    authenticated: false,
};

function checkRoutes () {
    replaceHTML(TOPBAR_HANDLE, `
        ${TOPBAR_COMPONENT}
    `);

    document.querySelector('.menu-toggle').addEventListener('click', function (event) {
        event.preventDefault();

        if (hasClass(SIDEBAR_HANDLE, 'active')) {
            removeClass(SIDEBAR_HANDLE, 'active');
        } else {
            addClass(SIDEBAR_HANDLE, 'active');
        }
    });

    CONTENT_HANDLE.addEventListener('click', function (event) {
        if (hasClass(SIDEBAR_HANDLE, 'active')) {
            removeClass(SIDEBAR_HANDLE, 'active');
        }
    });

    let SIDEBAR_LINKS = authenticationState.authenticated ? [
        ROUTE_PATH === 'dashboard' || ROUTE_PATH === 'projects' || ROUTE_PATH === 'tasks' ? { link: '', title: '' } : { link: '#', title: 'Home' },
        ROUTE_PATH === 'dashboard' || ROUTE_PATH === 'projects' || ROUTE_PATH === 'tasks' ? { link: '', title: '' } : { link: '#about', title: 'About' },
        ROUTE_PATH === 'dashboard' || ROUTE_PATH === 'projects' || ROUTE_PATH === 'tasks' ? { link: '', title: '' } : { link: '#attributions', title: 'Attributions' },
        ROUTE_PATH === 'dashboard' || ROUTE_PATH === 'projects' || ROUTE_PATH === 'tasks' ? { link: '#dashboard', title: 'Overview' } : { link: '#dashboard', title: 'Dashboard' },
        ROUTE_PATH === 'dashboard' || ROUTE_PATH === 'projects' || ROUTE_PATH === 'tasks' ? { link: '#projects', title: 'Projects' }: { link: '', title: '' },
        ROUTE_PATH === 'dashboard' || ROUTE_PATH === 'projects' || ROUTE_PATH === 'tasks' ? { link: '#tasks', title: 'Tasks' } : { link: '', title: '' },
        { link: '#logout', title: 'Logout' },
    ] : [
        { link: '#', title: 'Home' },
        { link: '#about', title: 'About' },
        { link: '#attributions', title: 'Attributions' },
        { link: '#login', title: 'Login' },
        { link: '#register', title: 'Register' },
    ];

    replaceHTML(SIDEBAR_HANDLE, `
        ${SIDEBAR_TOP_COMPONENT}
        ${
            SIDEBAR_LINKS.map((item) => `
                <li><a href="${item.link}">${item.title}</a></li>
            `.trim()).join('')
        }
        ${SIDEBAR_BOTTOM_COMPONENT}
    `);

    let FOOTER_LINKS = authenticationState.authenticated ? [
        { link: '#', title: 'Home' },
        { link: '#about', title: 'About' },
        { link: '#attributions', title: 'Attributions' },
        { link: '#dashboard', title: 'Dashboard' },
        { link: '#logout', title: 'Logout' },
    ] : [
        { link: '#', title: 'Home' },
        { link: '#about', title: 'About' },
        { link: '#attributions', title: 'Attributions' },
        { link: '#login', title: 'Login' },
        { link: '#register', title: 'Register' },
    ];

    replaceHTML(FOOTER_HANDLE, `
        ${FOOTER_TOP_COMPONENT}
        ${
            FOOTER_LINKS.map((item) => `
                <li><a href="${item.link}">${item.title}</a></li>
            `.trim()).join('')
        }
        ${FOOTER_BOTTOM_COMPONENT}
    `);

    if (ROUTE_PATH === '') {
        replaceHTML(CONTENT_HANDLE, `
            ${HERO_COMPONENT}
            ${BLURB_COMPONENT}
            ${CALL_TO_ACTION_COMPONENT(authenticationState.authenticated)}
        `);
    } else if (ROUTE_PATH === 'about') {
        replaceHTML(CONTENT_HANDLE, `
            ${ABOUT_COMPONENT}
            ${CALL_TO_ACTION_COMPONENT(authenticationState.authenticated)}
        `);
    } else if (ROUTE_PATH === 'attributions') {
        replaceHTML(CONTENT_HANDLE, `
            ${ATTRIBUTIONS_COMPONENT}
            ${CALL_TO_ACTION_COMPONENT(authenticationState.authenticated)}
        `);
    } else if (ROUTE_PATH === 'dashboard') {
        if (authenticationState.authenticated) {
            let user = getUser(authenticationState.user, usersList);
            let projects = getProjects(user.email, projectsList);
            let tasks = getTasks(user.email, tasksList);

            replaceHTML(CONTENT_HANDLE, `
                ${DASHBOARD_PROJECTS_COMPONENT(projects, tasks)}
            `);
        } else {
            replaceHash('login');
        }
    } else if (ROUTE_PATH === 'projects') {
        if (authenticationState.authenticated) {
            let user = getUser(authenticationState.user, usersList);
            let projects = getProjects(user.email, projectsList);
            let tasks = getTasks(user.email, tasksList);

            replaceHTML(CONTENT_HANDLE, `
                ${PROJECTS_CARD_COMPONENT(projects)}
                ${ADD_PROJECT_COMPONENT}
            `);
        } else {
            replaceHash('login');
        }
    } else if (ROUTE_PATH === 'tasks') {
        if (authenticationState.authenticated) {
            let user = getUser(authenticationState.user, usersList);
            let projects = getProjects(user.email, projectsList);
            let tasks = getTasks(user.email, tasksList);

            replaceHTML(CONTENT_HANDLE, `
                ${TASKS_CARD_COMPONENT(tasks)}
                ${ADD_TASKS_COMPONENT}
            `);
        } else {
            replaceHash('login');
        }
    } else if (ROUTE_PATH === 'login') {
        replaceHTML(CONTENT_HANDLE, `
            ${LOGIN_COMPONENT}
        `);

        if (window.location.hash.substr(1) === 'login') {
            document.querySelector('#LoginButton').addEventListener('click', function (event) {
                event.preventDefault();

                document.querySelector('#LoginForm').reportValidity();

                let emailValue = document.querySelector('input[name="email"]').value.toLowerCase();
                let passwordValue = document.querySelector('input[name="password"]').value;

                if (authenticate(emailValue, passwordValue, usersList)) {
                    authenticationState = {
                        user: emailValue,
                        authenticated: true
                    };

                    replaceHash('dashboard');
                } else {
                    document.getElementById('AuthenticationError').style.opacity = 1;
                }
            });
        }
    } else if (ROUTE_PATH === 'register') {
        replaceHTML(CONTENT_HANDLE, `
            ${REGISTER_COMPONENT}
        `);

        if (window.location.hash.substr(1) === 'register') {
            document.querySelector('#RegisterButton').addEventListener('click', function (event) {
                event.preventDefault();

                document.querySelector('#RegisterForm').reportValidity();

                let emailValue = document.querySelector('input[name="email"]').value.toLowerCase();
                let passwordValue = document.querySelector('input[name="password"]').value;
                let firstNameValue = document.querySelector('input[name="firstName"]').value;
                let lastNameValue = document.querySelector('input[name="lastName"]').value;

                if (!checkEmailExists(emailValue, usersList) && document.querySelector('#RegisterForm').checkValidity()) {
                    usersList.push({
                        email: emailValue,
                        password: passwordValue,
                        firstName: firstNameValue,
                        lastName: lastNameValue
                    });

                    authenticationState = {
                        user: emailValue,
                        authenticated: true
                    }

                    replaceHash('registered');
                } else {
                    document.getElementById('UserExistsError').style.opacity = 1;
                }
            });
        }
    } else if (ROUTE_PATH === 'registered') {
        if (authenticationState.authenticated) {
            let user = getUser(authenticationState.user, usersList);

            replaceHTML(CONTENT_HANDLE, `
                ${REGISTERED_COMPONENT(user.firstName)}
            `);
        } else {
            replaceHash('register');
        }
    } else if (ROUTE_PATH === 'logout') {
        authenticationState = {
            user: '',
            authenticated: false
        };

        replaceHash('');
    } else {
        replaceHTML(CONTENT_HANDLE, `
            ${MISSING_COMPONENT}
        `);
    }
}

checkRoutes();

setInterval(function () {
    if (window.location.hash.substr(1).toLowerCase() !== ROUTE_PATH.toLowerCase()) {
        ROUTE_PATH = window.location.hash.substr(1).toLowerCase();
        checkRoutes();
    }
}, 100);