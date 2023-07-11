import html from '../assets/images/skills/html.svg';
import css from '../assets/images/skills/css.svg';
import javascript from '../assets/images/skills/javascript.svg';
import react from '../assets/images/skills/react.svg';
import vuejs from '../assets/images/skills/vuejs.svg';
import typescript from '../assets/images/skills/typescript.svg';
import git from '../assets/images/skills/git.svg';
import redux from '../assets/images/skills/redux.svg';
import testingLibrary from '../assets/images/skills/testing-library.png';
import docker from '../assets/images/skills/docker.svg';
import mysql from '../assets/images/skills/mysql.png';
import java from '../assets/images/skills/java.svg';
import jest from '../assets/images/skills/jest.png';
import linux from '../assets/images/skills/linux.svg';
import mongodb from '../assets/images/skills/mongodb.png';
import golang from '../assets/images/skills/golang.png';
import nodejs from '../assets/images/skills/nodejs.png';
import python from '../assets/images/skills/python.png';

const skillIcons = [
  {
    id: 1,
    src: git,
    alt: 'Git',
    summary:
      'Sistema de controle de versão distribuído amplamente utilizado. Permite o gerenciamento de projetos de forma colaborativa.',
    doc: 'https://git-scm.com/doc',
  },
  {
    id: 2,
    src: html,
    alt: 'HTML',
    summary:
      'Linguagem de marcação usada para estruturar e apresentar conteúdo. É a base de qualquer página da web.',
    doc: 'https://developer.mozilla.org/docs/Web/HTML',
  },
  {
    id: 3,
    src: css,
    alt: 'CSS',
    summary:
      'Linguagem de estilo usada para definir a aparência e o layout dos elementos em uma página da web.',
    doc: 'https://developer.mozilla.org/docs/Web/CSS',
  },
  {
    id: 4,
    src: javascript,
    alt: 'JavaScript',
    summary:
      'Linguagem de programação usada para adicionar interatividade e comportamentos à páginas da web. Também é amplamente utilizado no desenvolvimento de aplicativos web.',
    doc: 'https://developer.mozilla.org/docs/Web/JavaScript',
  },
  {
    id: 5,
    src: react,
    alt: 'ReactJS',
    summary:
      'Biblioteca JavaScript de código aberto para criar interfaces de usuário. É amplamente utilizado para desenvolvimento de aplicativos web de página única (SPA).',
    doc: 'https://reactjs.org/docs',
  },
  {
    id: 6,
    src: vuejs,
    alt: 'VueJS',
    summary:
      'Framework JavaScript progressivo para construir interfaces de usuário. É flexível e eficiente para a criação de aplicativos web interativos.',
    doc: 'https://vuejs.org/v2/guide/',
  },
  {
    id: 7,
    src: redux,
    alt: 'Redux',
    summary:
      'Biblioteca de gerenciamento de estado para aplicativos JavaScript. É comumente usado com bibliotecas e frameworks como React ou Angular.',
    doc: 'https://redux.js.org/introduction/getting-started',
  },
  {
    id: 8,
    src: jest,
    alt: 'Jest',
    summary:
      'Framework de teste de JavaScript com foco na simplicidade. É usado para testar aplicativos e bibliotecas JavaScript.',
    doc: 'https://jestjs.io/docs/en/getting-started',
  },
  {
    id: 9,
    src: testingLibrary,
    alt: 'Testing Library',
    summary:
      'Conjunto de bibliotecas para escrever testes de JavaScript mais legíveis e sustentáveis. Ela promove uma abordagem centrada no usuário para testes.',
    doc: 'https://testing-library.com/docs/',
  },
  {
    id: 10,
    src: typescript,
    alt: 'TypeScript',
    summary:
      'Linguagem de programação de código aberto que é um superconjunto de JavaScript. Adiciona tipagem estática opcional e outros recursos ao JavaScript.',
    doc: 'https://www.typescriptlang.org/docs/',
  },
  {
    id: 11,
    src: docker,
    alt: 'Docker',
    summary:
      'Plataforma de contêiner que permite criar, implantar e executar aplicativos de forma isolada. Facilita a implantação de aplicativos em diferentes ambientes.',
    doc: 'https://docs.docker.com/',
  },
  {
    id: 12,
    src: nodejs,
    alt: 'Node.js',
    summary:
      'Ambiente de tempo de execução JavaScript que permite executar JavaScript fora do navegador. É usado para criar aplicativos de servidor e ferramentas de linha de comando.',
    doc: 'https://nodejs.org/en/docs/',
  },
  {
    id: 13,
    src: golang,
    alt: 'Go',
    summary:
      'Linguagem de programação de código aberto criada pelo Google. É conhecida por sua simplicidade, eficiência e desempenho.',
    doc: 'https://golang.org/doc/',
  },
  {
    id: 14,
    src: java,
    alt: 'Java',
    summary:
      'Linguagem de programação de propósito geral amplamente usada. É conhecida por sua portabilidade, segurança e robustez.',
    doc: 'https://docs.oracle.com/en/java/',
  },
  {
    id: 15,
    src: python,
    alt: 'Python',
    summary:
      'Linguagem de programação de alto nível com uma sintaxe simples e legível. É usada em vários domínios, desde desenvolvimento web até ciência de dados.',
    doc: 'https://docs.python.org/3/',
  },
  {
    id: 16,
    src: mysql,
    alt: 'MySQL',
    summary:
      'Sistema de gerenciamento de banco de dados relacional amplamente utilizado. É conhecido por sua confiabilidade, escalabilidade e facilidade de uso.',
    doc: 'https://dev.mysql.com/doc/',
  },
  {
    id: 17,
    src: mongodb,
    alt: 'MongoDB',
    summary:
      'Banco de dados NoSQL orientado a documentos. É escalável, flexível e permite o armazenamento de dados sem a necessidade de um esquema fixo.',
    doc: 'https://docs.mongodb.com/',
  },
  {
    id: 18,
    src: linux,
    alt: 'Linux',
    summary:
      'Sistema operacional de código aberto conhecido por sua estabilidade, segurança e flexibilidade, sendo usado em servidores, dispositivos embarcados e muito mais.',
    doc: 'https://www.linux.org/docs/',
  },
];

export default skillIcons;
