const questions = [
  {
    id: 1,
    question: 'De acordo com o LGPD, qual a regra que todos deveram seguir?',
    answer_a: 'Seguir um cenário de segurança jurídica valido para todo o país',
    answer_b:
      'Seguir um cenário de segurança jurídica valido somente para alguns estados',
    answer_c:
      'Seguir um cenário de segurança jurídica valido somente para algumas empresas',
    answer_d: 'Nenhuma das anteriores',
    correct_answer: 'a',
  },
  {
    id: 2,
    question: 'Até onde a abrangência da lei a respeito do LGPD vai?',
    answer_a:
      'Somente organizações ou centros de dados que estão situados dentro do Brasil devem seguir essa lei',
    answer_b:
      'Não importa se a organização ou o centros de dados estão dentro ou fora do Brasil, elas devem seguir o mesmo padrao de leis',
    answer_c:
      'Somente organizações ou centros de dados que estão situados fora do Brasil devem seguir essa lei',
    answer_d:
      'Nenhuma organização ou centros de dados situados dentro ou fora do Brasil devem seguir essa lei',
    correct_answer: 'b',
  },
  {
    id: 3,
    question: 'A transferência de dados pode ocorrer quando:',
    answer_a:
      'É permitido o compartilhamento de dados somente com países que nao tem proteção de dados',
    answer_b:
      'É permitido o compartilhamento de dados com qualquer país, independente se tem ou nao proteção de dados',
    answer_c:
      'É permitido o compartilhamento de dados com outros países que também protejam os dados',
    answer_d:
      'Nao é permitido em nenhuma hipótese o compartilhamento de dados com outros países',
    correct_answer: 'c',
  },
  {
    id: 4,
    question:
      'De acordo com a lei da LGPD Art. 7º O tratamento de dados pessoais somente poderá ser realizado nas seguintes hipóteses:',
    answer_a:
      'Para a proteção da vida ou da incolumidade física do titular sem se importar com terceiros',
    answer_b:
      'Para o cumprimento de obrigação legal e nao regulatória pelo controlador',
    answer_c:
      'Para a realização de estudos por órgão de pesquisa, garantida, mas nem sempre que possível, a anonimização dos dados pessoais',
    answer_d: 'Mediante o fornecimento de consentimento pelo titular',
    correct_answer: 'd',
  },
  {
    id: 5,
    question: 'Caso ocorra algum vazamento de dados, o que deve ser feito?',
    answer_a:
      'A ANPD (Autoridade Nacional de Proteção de Dados) e os individuos afetados devem ser avisados de imediato',
    answer_b:
      'Somente a ANPD (Autoridade Nacional de Proteção de Dados) deve ser avisada',
    answer_c: 'Somente os individuos afetados devem ser avisados',
    answer_d: 'Nao é necessário avisar a ninguem, somente tentar resolver',
    correct_answer: 'a',
  },
  {
    id: 6,
    question:
      'De acordo com a lei da LGPD Art. 2º A disciplina da proteção de dados pessoais tem como fundamentos:',
    answer_a:
      'A livre iniciativa, a livre concorrencia mas sem a defesa do consumidor',
    answer_b:
      'A não liberdade de expressão, de informação, de comunicação e de opinião',
    answer_c: 'A inviolabilidade da intimidade, da honra e da imagem',
    answer_d: 'O desrespeito a privacidade',
    correct_answer: 'c',
  },
  {
    id: 7,
    question:
      'De acordo com a lei da LGPD Art. 11. O tratamento de dados pessoais sensíveis, sem fornecimento de consentimento do titular, nas hipóteses em que for indispensável para:',
    answer_a:
      'Sem proteção da vida ou da incolumidade física do titular ou de terceiro',
    answer_b:
      'Cumprimento de obrigação legal mas não regulatória pelo controlador',
    answer_c:
      'Realização de estudos por órgão de pesquisa, garantida, sempre que possível, os dados pessoais sensíveis',
    answer_d:
      'Tratamento compartilhado de dados necessários à execução, pela administração pública, de políticas públicas previstas em leis ou regulamentos',
    correct_answer: 'd',
  },
];

export default questions;
