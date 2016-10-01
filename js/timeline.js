class Evento {
  constructor(data, categoria, nome, icone) {
    this.nome = nome;
    this.categoria = categoria;
    this.data = data;
    this.icone = icone;
  }
}

let eventos = [
  new Evento(new Date('1985-02-01T00:00'), 'tecnico', 'Curso técnico em Informática Industrial', 'flag'),
  new Evento(new Date('1987-07-07T00:00'), 'pos-graduacao', 'Criação dos cursos de pós-graduação stricto sensu', 'flag'),
  new Evento(new Date('2004-06-14T00:00'), 'pos-graduacao', 'Projeto do curso de Mestrado em Modelagem Matemática e Computacional', 'book'),
  new Evento(new Date('2004-12-16T00:00'), 'pos-graduacao', 'Recomendação pela CAPES do curso de Mestrado em MMC', 'certificate'),
  new Evento(new Date('2005-08-01T00:00'), 'pos-graduacao', 'Início do curso de Mestrado em MMC', 'flag'),
  new Evento(new Date('2005-10-27T00:00'), 'graduacao', '1º PPC do curso de graduação em Engenharia de Computação', 'book'),
  new Evento(new Date('2006-03-01T00:00'), 'graduacao', 'Início da graduação em Engenharia de Computação', 'flag'),
  new Evento(new Date('2006-10-13T00:00'), 'decom', 'Criação do Departamento de Computação', 'building'),
  new Evento(new Date('2008-10-04T00:00'), 'graduacao', 'PPC de Engenharia de Computação revisado', 'book'),
  new Evento(new Date('2009-02-01T00:00'), 'tecnico', 'Última turma ingressou no técnico em Informática Industrial', 'refresh'),
  new Evento(new Date('2010-02-01T00:00'), 'tecnico', 'Início dos cursos técnicos em Informática e Redes de Computadores', 'flag'),
  new Evento(new Date('2011-01-01T00:00'), 'graduacao', 'Processo de reconhecimento do curso de Engenharia de Computação', 'check-circle'),
  new Evento(new Date('2012-08-02T00:00'), 'graduacao', 'Formatura da 1ª turma de Engenharia de Computação', 'graduation-cap')
];

let timelineEl = document.querySelector('.timeline');
let fonteTimeline = timelineEl.innerHTML;
let templateTimeline = Handlebars.compile(fonteTimeline);

timelineEl.innerHTML = templateTimeline({ eventos: eventos });
