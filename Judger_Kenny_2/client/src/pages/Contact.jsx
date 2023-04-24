const Contact = () => {
    const people = [
        {
            name: 'Tanuj Patel',
            email: 'tpatel50@student.gsu.edu',
            info: 'Senior at Georgia State University studying Computer Science. I have experience coding with Java, Python, and SQL. The software I use is visual studio code and PGAdmin.'
        },
        {
            name: 'Mahdyah Hassanyar',
            email: 'jane@example.com',
            info: 'Georgia State University senior student in Computer Science. The languages I frequently use are Java, Kotlin, Java Script, HTML, and CSS. The softwares which I use are Visual Studio Code, and Android Studio. I have done some projects using the listed skills that can be found on my GitHub. I am also a freelance English to Farsi interpreter.'
        },
        {
            name: 'Kenny Nguyen',
            email: 'bob@example.com',
            info: 'I am a student at Georgia State University pursuing a Bachelors in Computer Science. I enjoy talking about cybersecurity topics. The languages I have experience with are Java, Javascript, and Python. I frequently use visual studio.'
        },
        {
            name: 'Jean-Charles Adou',
            email: 'bob@example.com',
            info: 'Hello, I am a senior CSC student in my final semester of my Bachelors degree here at GSU. I am currently most experienced in using the Java language and have created various programs in C as well.'
        },
        {
            name: 'Hoan Ngo',
            email: 'bob@example.com',
            info: 'I am a senior student pursuing Computer Science at GSU. The languages that I use are Java, Java Script,  HTML, and CSS. I play badminton and do some DIY projects as my hobbies.'
        },
    ];

    return (
        <div className="contact">
            <h2>Contact</h2>
            <form>
                {people.map((person, index) => (
                    <li key={index}>
                        <h3>{person.name}</h3>
                        <p>Email: {person.email}</p>
                        <p>Info: {person.info}</p>
                    </li>
                ))}
            </form>
        </div>
    );
}

export default Contact;