import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';
import NgoCase from './ngo-case';
import LeftUserColumn from './left-user-column';
import cookie from '../libs/cookie';
import LawyerCase from './lawyer-case';
import Immigration from '../resources/img/immigration.png';
import What from '../resources/img/dis.png';
import DomesticWorker from '../resources/img/domesticworker.png';
import cpbs from '../resources/img/cpbs.png';
import CaseList from './case-list';
import NgoCasesMenu from './NgoCasesMenu';
import CoordinatorCasesMenu from './CoordinatorCasesMenu';


const NgoCaseList = [
  {image: cpbs, title: 'Anti-Harassment Campaign', details: 'Support a lawyer who wants to set up a non-profit legal entity or social enterprise in Singapore focused on supporting employees of international organizations who have experienced sexual harassment,  discrimination and abuse with pro bono legal advice', practiceArea: ['employment', 'corporate'], legalSkill: ['advice', 'training'], jurisdictions: ['Singapore'], languages: ['English'], priority: 'flexible' },
  {image: cpbs, title: 'Domestic Caregiver', details: 'Assist a company that ethically sources foreign domestic workers by providing pro bono legal assistance on setting up a charitable legal entity in order to extend their services to low-income families in Hong Kong', practiceArea: ['corporate', 'employment'], legalSkill: ['advice', 'research'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'flexible' },
  {image: Immigration, title: 'Children’s Protection Network', details: 'Assist a local NGO deliver training to youth detained at immigration detention centers to understand their legal rights and obtain information relevant to reunification with their families or guardians.', practiceArea: ['immigration'], legalSkill: ['advocacy', 'training'], jurisdictions: ['United States of America'], languages: ['English'], priority: 'immediate' },
  {image: cpbs, title: 'Document authentication - Sri Lanka', details: 'We require a Sri Lankan expert to authenticate an extract from the Information Book of of a Police Station in Negombo.', practiceArea: ['corporate'], legalSkill: ['draft'], jurisdictions: ['Sri Lanka'], languages: ['English'], priority: 'immediate' },
  {image: Immigration, title: 'Help Undocumented Child', details: 'Advise a mother who’s visa has expired on whether she may grant guardianship of her child who was born in Hong Kong to a friend while she returns to her home country to seek renewal of her visa.', practiceArea: ['family'], legalSkill: ['advice'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'immediate' },
  {image: cpbs, title: 'Mender of Things', details: 'Help a young and passionate NGO increase youth awareness of the law and human rights through the arts by providing legal advice and assistance on setting up a legal entity in Hong Kong and applying for section 88 charitable status', practiceArea: ['corporate', 'tax'], legalSkill: ['advice', 'research'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'flexible' },
  {image: cpbs, title: 'OurConservatory', details: 'Assist an impact investing intermediary with a mission to bridge the gap between social &amp; commercial by establishing a long term legal partnership to support their Tech for Good incubator programme (NEW!)', practiceArea: ['technology'], legalSkill: ['advice'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'longTerm' },
  {image: cpbs, title: 'Serving Islam Team - Hong Kong', details: 'Assist a local NGO that helps educate the community on ethnic minorities and which also helps ethnic minorities integrate into the community by providing pro bono legal advice on the appropriate legal entity structure and possible application for section 88 charitable status', practiceArea: ['corporate', 'tax'], legalSkill: ['advocacy'], jurisdictions: ['Hong Kong'], languages: ['French'], priority: 'flexible' },
  {image: cpbs, title: 'StoryTaler', details: 'Assist a volunteer group focused on promoting mental health in Hong Kong by providing pro bono legal assistance on setting up a legal entity and applying for section 88 charitable status', practiceArea: ['corporate', 'healthcare'], legalSkill: ['draft'], jurisdictions: ['Hong Kong'], languages: ['French'], priority: 'flexible' },
  {image: cpbs, title: 'V Cycle', details: 'Support a social enterprise focused on environmental issues by providing pro bono legal advice on setting up a board and formalizing its shareholder arrangements', practiceArea: ['finance', 'environmental'], legalSkill: ['draft'], jurisdictions: ['Thailand'], languages: ['English'], priority: 'longTerm' },
]

const LawyerCaseList = [
  {image: cpbs, title: 'Anti-Harassment Campaign', details: 'Support a lawyer who wants to set up a non-profit legal entity or social enterprise in Singapore focused on supporting employees of international organizations who have experienced sexual harassment,  discrimination and abuse with pro bono legal advice', practiceArea: ['employment', 'corporate'], legalSkill: ['advice', 'training'], jurisdictions: ['Singapore'], languages: ['English'], priority: 'flexible' },
  {image: cpbs, title: 'Domestic Caregiver', details: 'Assist a company that ethically sources foreign domestic workers by providing pro bono legal assistance on setting up a charitable legal entity in order to extend their services to low-income families in Hong Kong', practiceArea: ['corporate', 'employment'], legalSkill: ['advice', 'research'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'flexible' },
  {image: Immigration, title: 'Children’s Protection Network', details: 'Assist a local NGO deliver training to youth detained at immigration detention centers to understand their legal rights and obtain information relevant to reunification with their families or guardians.', practiceArea: ['immigration'], legalSkill: ['advocacy', 'training'], jurisdictions: ['United States of America'], languages: ['English'], priority: 'immediate' },
  {image: cpbs, title: 'Document authentication - Sri Lanka', details: 'We require a Sri Lankan expert to authenticate an extract from the Information Book of of a Police Station in Negombo.', practiceArea: ['corporate'], legalSkill: ['draft'], jurisdictions: ['Sri Lanka'], languages: ['English'], priority: 'immediate' },
  {image: Immigration, title: 'Help Undocumented Child', details: 'Advise a mother who’s visa has expired on whether she may grant guardianship of her child who was born in Hong Kong to a friend while she returns to her home country to seek renewal of her visa.', practiceArea: ['family'], legalSkill: ['advice'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'immediate' },
  {image: cpbs, title: 'Mender of Things', details: 'Help a young and passionate NGO increase youth awareness of the law and human rights through the arts by providing legal advice and assistance on setting up a legal entity in Hong Kong and applying for section 88 charitable status', practiceArea: ['corporate', 'tax'], legalSkill: ['advice', 'research'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'flexible' },
  {image: cpbs, title: 'OurConservatory', details: 'Assist an impact investing intermediary with a mission to bridge the gap between social &amp; commercial by establishing a long term legal partnership to support their Tech for Good incubator programme (NEW!)', practiceArea: ['technology'], legalSkill: ['advice'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'longTerm' },
  {image: cpbs, title: 'Serving Islam Team - Hong Kong', details: 'Assist a local NGO that helps educate the community on ethnic minorities and which also helps ethnic minorities integrate into the community by providing pro bono legal advice on the appropriate legal entity structure and possible application for section 88 charitable status', practiceArea: ['corporate', 'tax'], legalSkill: ['advocacy'], jurisdictions: ['Hong Kong'], languages: ['French'], priority: 'flexible' },
  {image: cpbs, title: 'StoryTaler', details: 'Assist a volunteer group focused on promoting mental health in Hong Kong by providing pro bono legal assistance on setting up a legal entity and applying for section 88 charitable status', practiceArea: ['corporate', 'healthcare'], legalSkill: ['draft'], jurisdictions: ['Hong Kong'], languages: ['French'], priority: 'flexible' },
  {image: cpbs, title: 'V Cycle', details: 'Support a social enterprise focused on environmental issues by providing pro bono legal advice on setting up a board and formalizing its shareholder arrangements', practiceArea: ['finance', 'environmental'], legalSkill: ['draft'], jurisdictions: ['Thailand'], languages: ['English'], priority: 'longTerm' },
]

const CoordinatorCaseList = [
  {image: cpbs, lawyerName: 'Philip', title: 'Action Against Prohibited Conduct', details: 'Support a lawyer who wants to set up a non-profit legal entity or social enterprise in Singapore focused on supporting employees of international organizations who have experienced sexual harassment,  discrimination and abuse with pro bono legal advice', practiceArea: ['employment', 'corporate'], legalSkill: ['advice', 'training'], jurisdictions: ['Singapore'], languages: ['English'], priority: 'flexible' }, 
  {image: cpbs, lawyerName: 'Mary', title: 'Active Global Caregiver', details: 'Assist a company that ethically sources foreign domestic workers by providing pro bono legal assistance on setting up a charitable legal entity in order to extend their services to low-income families in Hong Kong', practiceArea: ['corporate', 'employment'], legalSkill: ['advice', 'research'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'flexible' }, 
  {image: Immigration, lawyerName: 'Veronica', title: 'Children’s Protection Network', details: 'Assist a local NGO deliver training to youth detained at immigration detention centers to understand their legal rights and obtain information relevant to reunification with their families or guardians.', practiceArea: ['immigration'], legalSkill: ['advocacy', 'training'], jurisdictions: ['United States of America'], languages: ['English'], priority: 'immediate' },
  {image: cpbs, lawyerName: 'Charlie', title: 'Document authentication - Sri Lanka', details: 'We require a Sri Lankan expert to authenticate an extract from the Information Book of of a Police Station in Negombo.', practiceArea: ['corporate'], legalSkill: ['draft'], jurisdictions: ['Sri Lanka'], languages: ['English'], priority: 'immediate' },
  {image: Immigration, lawyerName: 'Lesley', title: 'Help Undocumented Child', details: 'Advise a mother who’s visa has expired on whether she may grant guardianship of her child who was born in Hong Kong to a friend while she returns to her home country to seek renewal of her visa.', practiceArea: ['family'], legalSkill: ['advice'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'immediate' },
  {image: cpbs, lawyerName: 'Ajit', title: 'Mender of Things', details: 'Help a young and passionate NGO increase youth awareness of the law and human rights through the arts by providing legal advice and assistance on setting up a legal entity in Hong Kong and applying for section 88 charitable status', practiceArea: ['corporate', 'tax'], legalSkill: ['advice', 'research'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'flexible' }, 
  {image: cpbs, lawyerName: 'Johnny', title: 'OurConservatory', details: 'Assist an impact investing intermediary with a mission to bridge the gap between social &amp; commercial by establishing a long term legal partnership to support their Tech for Good incubator programme (NEW!)', practiceArea: ['technology'], legalSkill: ['advice'], jurisdictions: ['Hong Kong'], languages: ['English'], priority: 'longTerm' },
  {image: cpbs, lawyerName: 'Emma', title: 'Serving Islam Team - Hong Kong', details: 'Assist a local NGO that helps educate the community on ethnic minorities and which also helps ethnic minorities integrate into the community by providing pro bono legal advice on the appropriate legal entity structure and possible application for section 88 charitable status', practiceArea: ['corporate', 'tax'], legalSkill: ['advocacy'], jurisdictions: ['Hong Kong'], languages: ['French'], priority: 'flexible' }, 
  {image: cpbs, lawyerName: 'Connor', title: 'StoryTaler', details: 'Assist a volunteer group focused on promoting mental health in Hong Kong by providing pro bono legal assistance on setting up a legal entity and applying for section 88 charitable status', practiceArea: ['corporate', 'healthcare'], legalSkill: ['draft'], jurisdictions: ['Hong Kong'], languages: ['French'], priority: 'flexible' }, 
  {image: cpbs, lawyerName: 'Sophie', title: 'V Cycle', details: 'Support a social enterprise focused on environmental issues by providing pro bono legal advice on setting up a board and formalizing its shareholder arrangements', practiceArea: ['finance', 'environmental'], legalSkill: ['draft'], jurisdictions: ['Thailand'], languages: ['English'], priority: 'longTerm' }, 
]

export default class CaseHistory extends React.Component {
  constructor(props) {
    super(props);
    let caseList = [];
    if (cookie.getItem('userType') === 'ngo') {
      caseList = NgoCaseList;
    }
    if (cookie.getItem('userType') === 'lawyer') {
      caseList = LawyerCaseList;
    }
    if (cookie.getItem('userType') === 'coordinator') {
      caseList = CoordinatorCaseList;
    }
    this.state = {
      caseList,
      searchField: '',
      practiceAreas: [],
      legalSkills: [],
      jurisdictions: [],
      languages: [],
      priorities: [],
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  onPracticeAreaChange = (event) => {
    this.setState({ practiceAreas: event });
  }

  onLegalSkillChange = (event) => {
    this.setState({ legalSkills: event });
  }

  onJurisdictionChange = (event) => {
    this.setState({ jurisdictions: event });
  }

  onLanguageChange = (event) => {
    this.setState({ languages: event });
  }

  onPriorityChange = (event) => {
    this.setState({ priorities: event });
  }

  render() {
    const { caseList, searchField, practiceAreas, legalSkills, jurisdictions, languages, priorities } = this.state;
    let filteredCases = caseList.filter((cases) => {
      return cases.title.toLowerCase().includes(searchField.toLowerCase());
    });
    if (practiceAreas.length > 0) {
      filteredCases = filteredCases.filter((cases) => {
        for(let i=0; i<practiceAreas.length; i++) {
          return cases.practiceArea.includes(practiceAreas[i].value);
        }
      });
    }
    if (legalSkills.length > 0) {
      filteredCases = filteredCases.filter((cases) => {
        for(let i=0; i<legalSkills.length; i++) {
          return cases.legalSkill.includes(legalSkills[i].value);
        }
      });
    }
    if (jurisdictions.length > 0) {
      filteredCases = filteredCases.filter((cases) => {
        for(let i=0; i<jurisdictions.length; i++) {
          return cases.jurisdictions.includes(jurisdictions[i].value);
        }
      });
    }
    if (languages.length > 0) {
      filteredCases = filteredCases.filter((cases) => {
        for(let i=0; i<languages.length; i++) {
          return cases.languages.includes(languages[i].value);
        }
      });
    }
    if (priorities.length > 0) {
      filteredCases = filteredCases.filter((cases) => {
        for(let i=0; i<priorities.length; i++) {
          return cases.priority.includes(priorities[i].value);
        }
      });
    }
    if (cookie.getItem('userType') === 'ngo') {
      return (
      <GuestLayout>
        <div className=' p-b-md p-r-md p-l-md'>
          <div className='page-middle container row '>
            <div className='col-md-3 order-md-1 bordered'>
              <LeftUserColumn searchChange={this.onSearchChange} practiceAreaChange={this.onPracticeAreaChange} legalSkillChange={this.onLegalSkillChange} jurisdictionChange={this.onJurisdictionChange} languageChange={this.onLanguageChange} priorityChange={this.onPriorityChange} />
            </div>
            <div className='col-md-9 order-md-1 bordered'>
              <NgoCasesMenu />
              <CaseList allCases={filteredCases} />
            </div>
          </div>
        </div>
      </GuestLayout>
      );
    } else if (cookie.getItem('userType') === 'lawyer') {
      return (
        <GuestLayout>
          <div className=' p-b-md p-r-md p-l-md'>
            <div className='page-middle container row '>
              <div className='col-md-3 order-md-1 bordered'>
                <LeftUserColumn searchChange={this.onSearchChange} practiceAreaChange={this.onPracticeAreaChange} legalSkillChange={this.onLegalSkillChange} jurisdictionChange={this.onJurisdictionChange} languageChange={this.onLanguageChange} priorityChange={this.onPriorityChange} />
              </div>
              <div className='col-md-9 order-md-1 bordered'>
                <div className="pageHeading">
                  <h4 className='mb-3 pageHeadingText'>LAWYER: Search cases</h4>
                </div>
                <CaseList allCases={filteredCases} />
              </div>
            </div>
          </div>
        </GuestLayout>
      );
    } else if (cookie.getItem('userType') === 'coordinator') {
      return (
        <GuestLayout>
          <div className=' p-b-md p-r-md p-l-md'>
            <div className='page-middle container row '>
              <div className='col-md-3 order-md-1 bordered'>
                <LeftUserColumn searchChange={this.onSearchChange} practiceAreaChange={this.onPracticeAreaChange} legalSkillChange={this.onLegalSkillChange} jurisdictionChange={this.onJurisdictionChange} languageChange={this.onLanguageChange} priorityChange={this.onPriorityChange} />
              </div>
              <div className='col-md-9 order-md-1 bordered'>
                <CoordinatorCasesMenu />
                <CaseList allCases={filteredCases} />
              </div>
            </div>
          </div>
        </GuestLayout>
      );
    }
     else {
      return (
        <GuestLayout>
        </GuestLayout>
      );
     }
  }
}
