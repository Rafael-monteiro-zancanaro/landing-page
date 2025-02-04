import { Component } from '@angular/core';

export interface Experience {
  date: string; // Data ou período (ex: "2020 - 2021")
  title: string; // Título da experiência (ex: "Desenvolvedor Front-end")
  description: string; // Descrição da experiência
  icon?: string; // Ícone opcional (ex: "work", "school")
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  // Lista de experiências
  experiences: Experience[] = [
    {
      date: '2020 - 2021',
      title: 'Desenvolvedor Front-end',
      description: 'Trabalhei no desenvolvimento de interfaces responsivas e interativas usando Angular e TypeScript.',
      icon: 'work'
    },
    {
      date: '2019 - 2020',
      title: 'Estudante de Ciência da Computação',
      description: 'Completei cursos avançados em algoritmos, estruturas de dados e desenvolvimento web.',
      icon: 'school'
    },
    {
      date: '2018 - 2019',
      title: 'Estágio em Desenvolvimento Web',
      description: 'Participei de projetos de desenvolvimento de sites e aplicações web usando HTML, CSS e JavaScript.',
      icon: 'work'
    },
    {
      date: '2017 - 2018',
      title: 'Curso de Programação Básica',
      description: 'Aprendi os fundamentos da programação com Python e lógica de programação.',
      icon: 'school'
    }
  ];
}