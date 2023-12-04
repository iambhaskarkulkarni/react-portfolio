import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Bhaskar',
  lastName: 'Kulkarni',
  initials: 'Kulkarni', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: 'IN',
      text: 'based in the Bengaluru, India',
    },
    {
      emoji: '💻',
      text: 'Full Stack Developer at outcomes',
    },
    {
      emoji: '📧',
      text: 'write2bhaskarkulkarni@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://bhaskar-kulkarni.vercel.app/resume.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    // {
    //   link: 'https://instagram.com/andy_lgc?igshid=YmMyMTA2M2Y=',
    //   icon: 'fa fa-instagram',
    //   label: 'instagram',
    // },
    {
      link: 'https://github.com/iambhaskarkulkarni',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://linkedin.com/in/bhaskar-kulkarni-2a1b23103',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    // {
    //   link: 'https://twitter.com/Andy8647L',
    //   icon: 'fa fa-twitter',
    //   label: 'twitter',
    // },
  ],
  bio: "Hello! I'm Bhaskar Kulkarni. I'm a Full Stack Developer. I enjoy building web applications and learning new technologies. I'm currently working at outcomes as a Full Stack Developer. I'm also a freelance photographer. I'm currently based in Bengaluru, India.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['TypeScript', 'JavaScript', 'Java', 'PHP', 'Python', 'HTML/CSS'],
    frameworks: [
      'Spring',
      'Spring Boot',
      'React',
      'Redux',
      'Material UI',
      'Express',
      'Bootstrap/jQuery',
    ],
    databases: ['MySQl', 'MongoDB', 'PostgreSQL', 'Mybatis', 'TypeORM'],
    cloudServices: ['AWS S3', 'AWS EC2', 'AWS SNS', 'Google Analytics', 'Heroku', 'Netlify'],
    tools: [
      'Git',
      'Postman',
      'Docker',
      'Swagger',
      'Elasticsearch',
      'npm',
      'yarn',
      'Maven',
      'Jenkins',
      'Jira',
      'Confluence',
      'Bitbucket',
    ],
  },
  hobbies: [
    {
      label: 'Photography',
      emoji: '📷',
    },
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Guitar',
      emoji: '🎸',
    },
    {
      label: 'Anime',
      emoji: '🎞',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    },
    {
      label: 'Fishing',
      emoji: '🎣',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'CryptoGoGo - Online Cryptocurrency Community and Trading platform',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/Andy8647/CryptoGoGo', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.ibb.co/6BsWs6f/01.jpg',
    },
    {
      title: 'Dynrank.js - High-performance dynamic bar chart visualization library',
      live: null,
      source: 'https://github.com/Andy8647/dynrank',
      image: 'https://i.ibb.co/HFkMKtH/02.jpg',
    },
  ],
};
