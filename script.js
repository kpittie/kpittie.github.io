$(function() {
    var help = $(`
        <dl>
            <dt>about</dt><dd>Get to know me</dd>
            <dt>education</dt><dd>Learn more about my academic qualifications</dd>
            <dt>experience</dt><dd>My experience in Tech industry so far</dd>
            <dt>contact</dt><dd>How to get in touch</dd>
            <dt>resume</dt><dd>Download my resume in PDF format</dd>
            <dt>skills</dt><dd>Technologies I have dabbled with</dd>
        </dl>

    `)

    var about = $(`<p>Hello World, my name is Karan.
    I am a Senior Software Engineer with 7 years of experience
    in developing and managing innovative software applications.
    Skilled in software development, debugging, testing, and troubleshooting
    in various programming languages. I possess proven ability
    to lead technical teams, mentor junior engineers, and drive projects
    to successful completion.</p>`)

    var education = $(`<p>I graduated from Vellore Institute of Techology
    with a CGPA of 9.3</p>`)

    var contact = $(`
        <dl>
            <dt>Name</dt><dd>Karan Pittie</dd>
            <dt>DOB</dt><dd>5th Oct 1995</dd>
            <dt>Mobile</dt><dd>+91-9787122878</dd>
            <dt>Email</dt><dd>karan.pittie@yahoo.com</dd>
            <dt>LinkedIn</dt><dd>https://www.linkedin.com/in/karan-pittie</dd>
            <dt>Location</dt><dd>Hyderabad, Telangana</dd>
        </dl>
    `)

    var skills = $(`
        <dl>
            <dt>Languages</dt><dd>Python, Kotlin, SQL</dd>
            <dt>Databases</dt><dd>MongoDB, PostgreSQL, Redis</dd>
            <dt>Technologies</dt><dd>Kafka, Docker, AWS, Azure, Jenkins, Github</dd>
        </dl>
    `)

    var companyOptions = $(`
        <p>I have had the opportunity to work with the following companies:</p>
        <ul>
            <li>Netskope Software India Private Limited</li>
            <li>Arcesium India Private Limited</li>
            <li>Doers Guild Software India Private Limited</li>
        </ul>
        <p>Please type the name of the company:</p>
    `)

    var netskopeExperience = $(`
        <section>
        <h4>Netskope Software India Private Limited</h4>
        <p>I had 2 gigs at Netskope spanning across 5 years, where I worked with teams like IaaS and Malware
        teams as a Senior Software / Software Engineer.</p>
        <ul>
            <li>Designed and developed the framework responsible for
            the detection of compromised credentials which can identify if the
            same user credentials are being used by multiple distinct users.</li>
            <li>Built the CI/CD development pipeline from the ground
            up for the existing product for the team which would be
            responsible for automatic build generation and version
            control using Github actions.</li>
            <li>Worked on improving the unit test coverage of the
            legacy code modules by approximately 400%.</li>
            <li>Implemented a web application capable of detecting
            sensitive content present in data uploaded on cloud-based service
            providers like AWS, Azure, OneDrive, and Sharepoint using
            near-real-time user-defined policy enforcement.</li>
            <li>Worked on redesigning the existing monolith architecture
            to a distributed and modular architecture which helped in
            scaling the system to be able to scan data in the order of petabytes
            from terabytes.</li>
            <li>Built and designed a feature from scratch capable of
            scanning and analyzing the security posture of cloud-based accounts
            in IaaS applications like AWS, Azure, and GCP with the capacity
            to analyze up to 1M cloud resources.</li>
            <li>Contributed notably to the development of a tracer capable
            of determining the activities performed by cloud application
            users thereby providing a birds-eye view of the events ensuing
            in the cloud application.</li>
            <li>Awarded the most valuable contributor award for outstanding
            contributions to the companys efforts in the year 2019.</li>
        </ul>
        </section>
    `)

    var arcesiumExperience = $(`
        <section>
        <h4>Arcesium India Private Limited</h4>
        <p>I worked as an Engineering Lead at Arcesium for close to 2.5 years</p>
        <ul>
            <li>Developed a web-based SaaS application from the ground up
            capable of generating on-demand summary reports denoting
            performance fees, management fees, and dividend metrics
            for top-level management determining the profit and loss
            incurred on various hedge fund entities.</li>
            <li>The application significantly reduced the invaluable
            man-hours spent in generating these reports.</li>
            <li>Designed the business logic and technical approach
            to solve critical computational metrics of performance fees which
            determines the capital investors would receive based on the
            capital invested and capital allocation which outlines the split
            of capital among different business units responsible for trading.</li>
            <li>Ranked among the top 10%ile performers
            among all the peers working in my business unit.</li>
        </ul>
        </section>
    `)

    var doersExperience = $(`
        <section>
        <h4>Doers Guild Software India Private Limited</h4>
        <p>I worked as an Intern at Doers Guild for close to 3 months</p>
        <ul>
            <li>Assisted in the development of a command-line-based
            framework capable of generating code required to build a complete
            e-commerce web application.</li>
            <li>The framework is capable of generating the code
            required to run an end-to-end website in the span of a
            couple of minutes using a templating engine.</li>
        </ul>
        </section>
    `)

    $('#terminal').terminal({
        help: function() {
            this.echo(help)
        },
        about: function() {
            this.echo(about)
        },
        education: function() {
            this.echo(education)
        },
        experience: function() {
            this.read(() => {
                this.echo(companyOptions)
            }, company => {
                if (RegExp("netskope", "i").test(company)) {
                    this.echo(netskopeExperience)
                } else if (RegExp("arcesium", "i").test(company)) {
                    this.echo(arcesiumExperience)
                } else if (RegExp("doers", "i").test(company)) {
                    this.echo(doersExperience)
                } else {
                    this.echo(netskopeExperience)
                    this.echo(arcesiumExperience)
                    this.echo(doersExperience)
                }
            })
        },
        contact: function() {
            this.echo(contact)
        },
        resume: function() {
            link = document.createElement("a")
            link.setAttribute("href", "KaranPittie.pdf")
            link.setAttribute("download", "KaranPittie.pdf")
            link.setAttribute("target", "_blank")
            link.setAttribute("rel", "noopener noreferrer")
            link.click()
        },
        skills: function() {
            this.echo(skills)
        },
    }, {
        greetings: greetings.innerHTML,
        prompt: "[[;#ff9e64;]kpittie [[;#a9b1d6;]:: [[;#bb9af7;]~ [[;#2ac3de;]>>> ]",
    });
});