import project1 from '../assets/png/project1.png'
import project2 from '../assets/png/project2.png'
import project3 from '../assets/png/project3.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Groco',
        projectDesc: 'This project is a shopping helper application which gives you the most optimized route possible for your grocery requirements based on your preference.',
        tags: ['React', 'Heroku' ,'PostgreSQL', 'Javascript'],
        code: 'https://github.com/arhands/groco',
        demo: 'https://groco-postgres.herokuapp.com/',
        image: project1
    },
    {
        id: 2,
        projectName: 'Amazon.com Clone',
        projectDesc: 'This is a clone of the e-commerce website Amazon.',
        tags: ['HTML/CSS', 'React','S3'],
        code: 'https://github.com/hozefatankiwala/amazon-clone',
        demo: 'https://amzhtw.web.app/',
        image: project2
    }, 
    {
        id: 2,
        projectName: 'Youtube Clone',
        projectDesc: 'This is a non functioning clone of the popular video streaming service youtube.',
        tags: ['HTML/CSS', 'React','S3'],
        code: 'https://github.com/hozefatankiwala/youtube-clone',
        demo: 'https://clone-3884a.web.app/',
        image: project3
    },    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/