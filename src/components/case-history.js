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


const NgoCaseList = [
  {"image":Immigration,"title":"Document authentication - Sri Lanka","details":"We require a Sri Lankan expert to authenticate an extract from the Information Book of of a Police Station in Negombo."},
  {"image":What,"title":"Action Against Prohibited Conduct","details":"Support a lawyer who wants to set up a non-profit legal entity or social enterprise in Singapore focused on supporting employees of international organizations who have experienced sexual harassment, discrimination and abuse with pro bono legal advice"},
  {"image":DomesticWorker,"title":"Active Global Caregiver","details":"Assist a company that ethically sources foreign domestic workers by providing pro bono legal assistance on setting up a charitable legal entity in order to extend their services to low-income families in Hong Kong"},
  {"image":Immigration,"title":"Mender of Things","details":"Help a young and passionate NGO increase youth awareness of the law and human rights through the arts by providing legal advice and assistance on setting up a legal entity in Hong Kong and applying for section 88 charitable status"},
  {"image":Immigration,"title":"Serving Islam Team - Hong Kong","details":"Assist a local NGO that helps educate the community on ethnic minorities and which also helps ethnic minorities integrate into the community by providing pro bono legal advice on the appropriate legal entity structure and possible application for section 88 charitable status"},
  {"image":Immigration,"title":"StoryTaler","details":"Assist a volunteer group focused on promoting mental health in Hong Kong by providing pro bono legal assistance on setting up a legal entity and applying for section 88 charitable status"},
  {"image":Immigration,"title":"V Cycle","details":"Support a social enterprise focused on environmental issues by providing pro bono legal advice on setting up a board and formalizing its shareholder arrangements"},
  {"image":Immigration,"title":"OurConservatory","details":"Assist an impact investing intermediary with a mission to bridge the gap between social &amp; commercial by establishing a long term legal partnership to support their Tech for Good incubator programme (NEW!)"}
]

const LawyerCaseList = [
  {"image":Immigration,"title":"Document authentication - Sri Lanka","details":"We require a Sri Lankan expert to authenticate an extract from the Information Book of of a Police Station in Negombo."},
  {"image":What,"title":"Action Against Prohibited Conduct","details":"Support a lawyer who wants to set up a non-profit legal entity or social enterprise in Singapore focused on supporting employees of international organizations who have experienced sexual harassment, discrimination and abuse with pro bono legal advice"},
  {"image":DomesticWorker,"title":"Active Global Caregiver","details":"Assist a company that ethically sources foreign domestic workers by providing pro bono legal assistance on setting up a charitable legal entity in order to extend their services to low-income families in Hong Kong"},
  {"image":Immigration,"title":"Mender of Things","details":"Help a young and passionate NGO increase youth awareness of the law and human rights through the arts by providing legal advice and assistance on setting up a legal entity in Hong Kong and applying for section 88 charitable status"},
  {"image":Immigration,"title":"Serving Islam Team - Hong Kong","details":"Assist a local NGO that helps educate the community on ethnic minorities and which also helps ethnic minorities integrate into the community by providing pro bono legal advice on the appropriate legal entity structure and possible application for section 88 charitable status"},
  {"image":Immigration,"title":"StoryTaler","details":"Assist a volunteer group focused on promoting mental health in Hong Kong by providing pro bono legal assistance on setting up a legal entity and applying for section 88 charitable status"},
  {"image":Immigration,"title":"V Cycle","details":"Support a social enterprise focused on environmental issues by providing pro bono legal advice on setting up a board and formalizing its shareholder arrangements"},
  {"image":Immigration,"title":"OurConservatory","details":"Assist an impact investing intermediary with a mission to bridge the gap between social &amp; commercial by establishing a long term legal partnership to support their Tech for Good incubator programme (NEW!)"}
]


const myTags = ["hi", "there"];

export default class CaseHistory extends React.Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    let caseList = [];
    if (cookie.getItem('userType') === 'ngo') {
      loggedIn = true;
      caseList = NgoCaseList;
    }
    if (cookie.getItem('userType') === 'lawyer') {
      loggedIn = true;
      caseList = LawyerCaseList;
    }
    if (cookie.getItem('userType') === 'coordinator') {
      loggedIn = true;
      caseList = LawyerCaseList;
    }
    this.state = {
      loggedIn,
      caseList,
      searchField: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { caseList, searchField } = this.state;
    const filteredCases = caseList.filter((cases) => {
      return cases.title.toLowerCase().includes(searchField.toLowerCase())
    });
    if (cookie.getItem('userType') === 'ngo') {
      return (
      <GuestLayout>
        <div className=" p-b-md p-r-md p-l-md">
          <div className="page-middle container row ">
            <div className="col-md-3 order-md-1 bordered">
              <LeftUserColumn searchChange={this.onSearchChange} />
            </div>
            <div className="col-md-9 order-md-1 bordered">
              <h4 className="mb-3 page-heading">Available cases</h4>
              {
                filteredCases.map((element, i) => <NgoCase key={i} image={element.image} title={element.title} details={element.details} />)
              }
            </div>
          </div>
        </div>
      </GuestLayout>
      )
    }
    else if (cookie.getItem('userType') === 'lawyer') {
      return (
        <GuestLayout>
          <div className=" p-b-md p-r-md p-l-md">
            <div className="page-middle container row ">
              <div className="col-md-3 order-md-1 bordered">
                <LeftUserColumn searchChange={this.onSearchChange} />
              </div>
              <div className="col-md-9 order-md-1 bordered">
                <h4 className="mb-3 page-heading">LAWYER: Search cases</h4>
                {
                  filteredCases.map((element,i) => <LawyerCase key={i} tags={myTags} image={element.image} title={element.title} details={element.details} />)
                }
              </div>
            </div>
          </div>
        </GuestLayout>
      )
    }
    else if (cookie.getItem('userType') === 'coordinator') {
      return (
        <GuestLayout>
          <div className=" p-b-md p-r-md p-l-md">
            <div className="page-middle container row ">
              <div className="col-md-3 order-md-1 bordered">
                <LeftUserColumn searchChange={this.onSearchChange} />
              </div>
              <div className="col-md-9 order-md-1 bordered">
                <h4 className="mb-3 page-heading">LAW FIRM COORDINATOR: Available cases</h4>
                {
                  filteredCases.map((element,i) => <LawyerCase key={i} tags={myTags} image={element.image} title={element.title} details={element.details} />)
                }
              </div>
            </div>
          </div>
        </GuestLayout>
      )
    }
     else {  
      return (
        <GuestLayout>
        </GuestLayout>
      )
     }
  }
}
