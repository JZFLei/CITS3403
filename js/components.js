const MISSING_COMPONENT = `
    <div class="container container-padded">
        <div class="row text-align-center">
            <div class="column">
                <h1>404.</h1>
                <img alt="helm" src="./assets/svg/helm.svg" style="max-width: 192px;" />
                <p>I don't think you should be steering this ship.</p>
                <a class="button button-primary" href="#">Click to go home</a>
            </div>
        </div>
    </div>
`;

function CALL_TO_ACTION_COMPONENT (display) {
    if (!display) {
        return `
            <hr />
            <div class="container">
                <div class="row text-align-center">
                    <div class="column">
                        <h4>Ready to begin?</h4>
                        <a class="button button-primary" href="#register">Register Now</a>
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <hr />
        <div class="container">
            <div class="row text-align-center">
                <div class="column">
                    <h4>Let's go!</h4>
                    <a class="button button-primary" href="#dashboard">Dashboard</a>
                </div>
            </div>
        </div>
    `;
}

const TOPBAR_COMPONENT = `
    <div class="container">
        <div class="row text-align-left">
            <div class="column">
                <span class="menu-toggle">&#9776;</span>
                <span class="logo-text"><a href="#">novus</a></span>
            </div>
        </div>
    </div>
`;

const SIDEBAR_TOP_COMPONENT = `
    <div class="container">
        <div class="row">
            <div class"column">
                <ul>
`;

const SIDEBAR_BOTTOM_COMPONENT = `
                </ul>
            </div>
        </div>
    </div>
`;

const FOOTER_TOP_COMPONENT = `
    <hr />
    <div class="container">
        <div class="row text-align-center">
            <div class="column">
                <ul>
`;

const FOOTER_BOTTOM_COMPONENT = `
                </ul>
            </div>
        </div>
    </div>
`;

const HERO_COMPONENT = `
    <div class="hero">
        <div class="hero-content">
            <h1>Simple. Collaborate.</h1>
        </div>
    </div>
`;

const BLURB_COMPONENT = `
    <div class="container container-padded">
        <div class="row text-align-center">
            <div class="column column-padded">
                <h4>Hit your goals.</h4>
                <img alt="target" src="./assets/svg/target.svg" style="max-width: 128px" />
                <p>Maintain success with every project. Plan out each project with tasks and sub-tasks.</p>
            </div>

            <div class="column column-padded">
                <h4>Work together.</h4>
                <img alt="target" src="./assets/svg/team.svg" style="max-width: 128px" />
                <p>Assign multiple team members to projects, tasks, and sub-tasks.</p>
            </div>

            <div class="column column-padded">
                <h4>Communication is key.</h4>
                <img alt="target" src="./assets/svg/chat.svg" style="max-width: 128px" />
                <p>Working remotely? Easily keep up-to-date with your team using the integrated real-time chat.</p>
            </div>
        </div>
    </div>
`;

const ABOUT_COMPONENT = `
    <div class="container container-padded">
        <div class="row text-align-center">
            <div class="column">
                <h1>About.</h1>
                <img alt="idea" src="./assets/svg/idea.svg" style="max-width: 192px" />
                <p>
                    This page will briefly go over what the novus application is and what it aims to solve.
                </p>
            </div>
        </div>

        <div class="row text-align-center">
            <div class="column">
                <h4>Usage.</h4>
                <p>
                    <ol style="list-style-position: inside;">
                        <li>Open <strong>index.html</strong> in a browser or your choice.</li>
                        <li>For the login section of the website, use <strong>test@test.com</strong> as the username and password as the <strong>password</strong>.</li>
                        <li>The register form is functional and will register a user for that session (until a page refresh or navigated away from).</li>
                        <li>The site is only persistant when not refreshed or navigated away from.</li>
                        <li>The dashboard portion of the site is non-functional.</li>
                    </ol>
                <p>
            </div>
        </div>

        <div class="row text-align-center">
            <div class="column">
                <h4>Theme.</h4>
                <p>
                    novus is a simple project management platform. It allows users to form groups and encourages collaboration.
                    It's made up of four important components.
                    <ol style="list-style-position: inside;">
                        <li>Users</li>
                        <li>Projects</li>
                        <li>Tasks</li>
                        <li>Communication</li>
                    </ol>
                    With these components, you can now easily track what projects and tasks are outstanding and communicate with your team to ensure high level of productivity.
                </p>
            </div>
        </div>

        <div class="row text-align-center">
            <div class="column">
                <h4>Algorithm.</h4>
                <p>
                    The algorithm is a basic one. It priorities projects over tasks. When the user enters their dashboard, they will be present with all of their projects ordered by due date. Within those projects, all the tasks are ordered by their due date. When the task or project is coming close to the due date, the user will be promted upon login with notifications. All users attached to the project or task will also be prompted concurrently.
                </p>

                <p>
                    The users who are involved with the project or task can set a notification schedule for the projects and tasks.
                </p>
            </div>
        </div>
    </div>
`

const ATTRIBUTIONS_COMPONENT = `
    <div class="container container-padded">
        <div class="row text-align-center">
            <div class="column">
                <h1>Attributions.</h1>
                <img alt="idea" src="./assets/svg/idea.svg" style="max-width: 192px" />
            </div>
        </div>

        <div class="row text-align-center">
            <div class="column">
                <h4>HTML/CSS/JS.</h4>
                <p>
                    <h5>The following were external resources.</h5>
                    <ul style="list-style-position: inside;">
                        <li>All vector images provided by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> via <a href="https://www.flaticon.com/">Flaticon</a>, however attribution is not needed due do the licensing I pay for but for the sake of attribution, it is here.</li>
                        <li><a href="https://github.com/necolas/normalize.css/">normalize.css</a> by Nicolas Gallagher and Jonathan Neal. <a href="https://github.com/necolas/normalize.css/blob/master/LICENSE.md">The MIT License (MIT)</a>.</li>
                        <li>The font <a href="https://fonts.google.com/specimen/Lato">Lato</a> is provided by Google. <a href="http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web">The Open Font License</a>.</li>
                    </ul>
                </p>

                <p>
                    <h5>The following were internal resources (created by me).</h5>
                    <ul style="list-style-position: inside;">
                        <li><a href="https://github.com/JZFLei/PaperFramework/">PaperFramework</a> by Jason Zi Feng Lei.</li>
                    </ul>
                </p>
            </div>
        </div>

        <div class="row text-align-center">
            <div class="column">
                <h4>About me.</h4>
                <p>
                    <ul style="list-style-position: inside;">
                        <li><strong>Student Name:</strong> Jason Zi Feng Lei</li>
                        <li><strong>Student Number:</strong> 21905258</li>
                        <li><strong>Student Email:</strong> 21905258@student.uwa.edu.au</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
`

const LOGIN_COMPONENT = `
    <div class= "container container-padded">
        <form id="LoginForm">
            <div class="row text-align-center">
                <div class="column">
                    <h1>Login.</h1>
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <input type="email" name="email" placeholder="Email" required />
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <input type="password" name="password" placeholder="Password" required />
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <button id="LoginButton" class="button button-primary">Login</button>
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <p id="AuthenticationError" class="text-small">The <strong>email</strong> and/or <strong>password</strong> is incorrect.</p>
                </div>
            </div>
        </form>
    </div>
`;

const REGISTER_COMPONENT = `
    <div class= "container container-padded">
        <form id="RegisterForm">
            <div class="row text-align-center">
                <div class="column">
                    <h1>Register.</h1>
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <input type="email" name="email" placeholder="Email" required />
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <input type="password" name="password" placeholder="Password" required />
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <input type="text" name="firstName" placeholder="First Name" required />
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <input type="text" name="lastName" placeholder="Last Name" required />
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <button id="RegisterButton" class="button button-primary">Register</button>
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <p id="UserExistsError" class="text-small">The <strong>email</strong> has already been registered.</p>
                </div>
            </div>
        </form>
    </div>
`;

function REGISTERED_COMPONENT (firstName) {
    return `
        <div class="container container-padded">
            <div class="row text-align-center">
                <div class="column">
                    <h1>Thanks for registering ${firstName}!</h1>
                    <p>Click the button below to continue to your dashboard.</p>
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <img alt="helm" src="./assets/svg/trophy.svg" style="max-width: 192px;" />
                </div>
            </div>

            <div class="row text-align-center">
                <div class="column">
                    <a class="button button-primary" href="#dashboard">Dashboard</a>
                </div>
            </div>
        </div>
    `;
};

function DASHBOARD_PROJECTS_COMPONENT (projects, tasks) {
    let _header = `
        <div class="container container-padded">
            <div class="row text-align-center">
                <div class="column">
                    <h4>Your overview.</h4>
                </div>
            </div>

            <div class="row">
    `;

    let _body = '';

    let _footer = `
            </div>
        </div>
    `;

    if (projects.length > 0) {
        for (let i = 0; i < projects.length; i++) {
            let _taskCount = 0;
            let _tasks = [];

            for (let j = 0; j < tasks.length; j++) {
                if (tasks[j].parentProject === projects[i].projectId) {
                    if (_taskCount <= 3) {
                        _tasks.push(tasks[j]);
                    }
                }
            }

            _tasks.sort(function (a, b) {
                return a.timeDue - b.timeDue;
            });

            _body += `
                <div class="column column-padded">
                    <div class="card">
                        <div class="card-content">
                            <h5><strong>${projects[i].title}</strong></h5>
                            <p><strong>Upcoming Tasks</strong></p>
                            <ul>
                                ${_tasks.map((task) => `
                                    <li>${task.title}</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `
        }
    }

    return `
        ${_header}
        ${_body}
        ${_footer}
    `;
}

function PROJECTS_CARD_COMPONENT (projects) {
    let _header = `
        <div class="container container-padded">
            <div class="row text-align-center">
                <div class="column">
                    <h4>Your projects.</h4>
                </div>
            </div>

            <div class="row">
    `;

    let _body = ``;

    for (let i = 0; i < projects.length; i++) {
        _body += `
            <div class="column column-padded">
                <div class="card">
                    <div class="card-content">
                        <h5><strong>${projects[i].title}</strong></h5>
                        <a>Edit</a> | <a>Users</a> | <a style="font-weight: 900;">Delete</a>
                    </div>
                </div>
            </div>
        `
    }


    let _footer = `
            </div>
        </div>
    `;

    return `
        ${_header}
        ${_body}
        ${_footer}
    `;
}

const ADD_PROJECT_COMPONENT = `
    <div class="addProject">
        <div class= "container container-padded">
            <form id="ProjectForm">
                <div class="row text-align-center">
                    <div class="column">
                        <h4>Add Project.</h4>
                    </div>
                </div>

                <div class="row text-align-center">
                    <div class="column">
                        <input type="text" name="projectName" placeholder="Project Name" required />
                    </div>
                </div>

                <div class="row text-align-center">
                    <div class="column">
                        <input type="date" name="projectDue" placeholder="Project Due Date" required />
                    </div>
                </div>

                <div class="row text-align-center">
                    <div class="column">
                        <button id="projectButton" class="button button-primary">Add Project</button>
                    </div>
                </div>

                <div class="row text-align-center">
                    <div class="column">
                        <p style="margin-top: 1rem; color: var(--accentColour);" class="text-small">This page is <strong>non-functional.</strong></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
`;

function TASKS_CARD_COMPONENT (tasks) {
    let _header = `
        <div class="container container-padded">
            <div class="row text-align-center">
                <div class="column">
                    <h4>Your tasks.</h4>
                </div>
            </div>

            <div class="row">
    `;

    let _body = ``;

    for (let i = 0; i < tasks.length; i++) {
        _body += `
            <div class="column column-padded">
                <div class="card">
                    <div class="card-content">
                        <h5><strong>${tasks[i].title}</strong></h5>
                        <p><strong>Due: ${new Date(tasks[i].timeDue).toISOString().slice(0, 10)}</strong></p>
                        <a>Edit</a> | <a>Users</a> | <a style="font-weight: 900;">Delete</a>
                    </div>
                </div>
            </div>
        `
    }


    let _footer = `
            </div>
        </div>
    `;

    return `
        ${_header}
        ${_body}
        ${_footer}
    `;
}

const ADD_TASKS_COMPONENT = `
    <div class="addTasks">
        <div class= "container container-padded">
            <form id="TasksForm">
                <div class="row text-align-center">
                    <div class="column">
                        <h4>Add Tasks.</h4>
                    </div>
                </div>

                <div class="row text-align-center">
                    <div class="column">
                        <input type="text" name="tasksName" placeholder="Task Name" required />
                    </div>
                </div>

                <div class="row text-align-center">
                    <div class="column">
                        <input type="date" name="taskDue" placeholder="Task Due Date" required />
                    </div>
                </div>

                <div class="row text-align-center">
                    <div class="column">
                        <button id="taskButton" class="button button-primary">Add Task</button>
                    </div>
                </div>

                <div class="row text-align-center">
                    <div class="column">
                        <p style="margin-top: 1rem; color: var(--accentColour);" class="text-small">This page is <strong>non-functional.</strong></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
`;