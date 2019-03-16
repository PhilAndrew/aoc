import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';
import NgoCase from './ngo-case';
import LeftUserColumn from './left-user-column';
import Immigration from '../resources/img/immigration.png';
import DogCat from '../resources/img/dis.png';
import What from '../resources/img/domesticworker.png';
import cookie from '../libs/cookie';
import LawyerCase from './lawyer-case';

const myTags = ["hi", "there"];

export default class CaseHistory extends React.Component {

  render() {
    if (cookie.getItem('userType') === 'ngo')
    return (
    <GuestLayout>
      <div className=" p-b-md p-r-md p-l-md">
        <div className="page-middle container row ">
          <div className="col-md-3 order-md-1 bordered">
            <LeftUserColumn />
          </div>
          <div className="col-md-9 order-md-1 bordered">
            <h4 className="mb-3 page-heading">NGO: Available cases</h4>
            <NgoCase image={Immigration} title="Document authentication - Sri Lanka" details="We require a Sri Lankan expert to authenticate an extract from the Information Book of of a Police Station in Negombo." />
            <NgoCase image={DogCat} title="Action Against Prohibited Conduct" details="Support a lawyer who wants to set up a non-profit legal entity or social enterprise in Singapore focused on supporting employees of international organizations who have experienced sexual harassment, discrimination and abuse with pro bono legal advice" />
            <NgoCase image={What} title="Active Global Caregiver" details="Assist a company that ethically sources foreign domestic workers by providing pro bono legal assistance on setting up a charitable legal entity in order to extend their services to low-income families in Hong Kong" />
            <NgoCase image={Immigration} title="Mender of Things" details="Help a young and passionate NGO increase youth awareness of the law and human rights through the arts by providing legal advice and assistance on setting up a legal entity in Hong Kong and applying for section 88 charitable status" />
            <NgoCase image={Immigration} title="Serving Islam Team - Hong Kong" details="Assist a local NGO that helps educate the community on ethnic minorities and which also helps ethnic minorities integrate into the community by providing pro bono legal advice on the appropriate legal entity structure and possible application for section 88 charitable status" />
            <NgoCase image={Immigration} title="StoryTaler" details="Assist a volunteer group focused on promoting mental health in Hong Kong by providing pro bono legal assistance on setting up a legal entity and applying for section 88 charitable status" />
            <NgoCase image={Immigration} title="V Cycle" details="Support a social enterprise focused on environmental issues by providing pro bono legal advice on setting up a board and formalizing its shareholder arrangements" />
            <NgoCase image={Immigration} title="OurConservatory" details="Assist an impact investing intermediary with a mission to bridge the gap between social &amp; commercial by establishing a long term legal partnership to support their Tech for Good incubator programme (NEW!)" />
          </div>
        </div>
      </div>
    </GuestLayout>)
    else if (cookie.getItem('userType') === 'lawyer')
    return (
      <GuestLayout>
        <div className=" p-b-md p-r-md p-l-md">
          <div className="page-middle container row ">
            <div className="col-md-3 order-md-1 bordered">
              <LeftUserColumn />
            </div>
            <div className="col-md-9 order-md-1 bordered">
              <h4 className="mb-3 page-heading">LAWYER: Search cases</h4>
              <LawyerCase tags={myTags} image={Immigration} title="Document authentication - Sri Lanka" details="We require a Sri Lankan expert to authenticate an extract from the Information Book of of a Police Station in Negombo." />
              <LawyerCase tags={myTags} image={DogCat} title="Action Against Prohibited Conduct" details="Support a lawyer who wants to set up a non-profit legal entity or social enterprise in Singapore focused on supporting employees of international organizations who have experienced sexual harassment, discrimination and abuse with pro bono legal advice" />
              <LawyerCase tags={myTags} image={What} title="Active Global Caregiver" details="Assist a company that ethically sources foreign domestic workers by providing pro bono legal assistance on setting up a charitable legal entity in order to extend their services to low-income families in Hong Kong" />
              <LawyerCase tags={myTags} image={Immigration} title="Mender of Things" details="Help a young and passionate NGO increase youth awareness of the law and human rights through the arts by providing legal advice and assistance on setting up a legal entity in Hong Kong and applying for section 88 charitable status" />
              <LawyerCase tags={myTags} image={Immigration} title="Serving Islam Team - Hong Kong" details="Assist a local NGO that helps educate the community on ethnic minorities and which also helps ethnic minorities integrate into the community by providing pro bono legal advice on the appropriate legal entity structure and possible application for section 88 charitable status" />
              <LawyerCase tags={myTags} image={Immigration} title="StoryTaler" details="Assist a volunteer group focused on promoting mental health in Hong Kong by providing pro bono legal assistance on setting up a legal entity and applying for section 88 charitable status" />
              <LawyerCase tags={myTags} image={Immigration} title="V Cycle" details="Support a social enterprise focused on environmental issues by providing pro bono legal advice on setting up a board and formalizing its shareholder arrangements" />
              <LawyerCase tags={myTags} image={Immigration} title="OurConservatory" details="Assist an impact investing intermediary with a mission to bridge the gap between social &amp; commercial by establishing a long term legal partnership to support their Tech for Good incubator programme (NEW!)" />
            </div>
          </div>
        </div>
      </GuestLayout>)
    else if (cookie.getItem('userType') === 'coordinator')
    return (
      <GuestLayout>
        <div className=" p-b-md p-r-md p-l-md">
          <div className="page-middle container row ">
            <div className="col-md-3 order-md-1 bordered">
              <LeftUserColumn />
            </div>
            <div className="col-md-9 order-md-1 bordered">
              <h4 className="mb-3 page-heading">LAW FIRM COORDINATOR: Available cases</h4>
              <LawyerCase image={Immigration} title="Document authentication - Sri Lanka" details="We require a Sri Lankan expert to authenticate an extract from the Information Book of of a Police Station in Negombo." />
              <LawyerCase image={DogCat} title="Action Against Prohibited Conduct" details="Support a lawyer who wants to set up a non-profit legal entity or social enterprise in Singapore focused on supporting employees of international organizations who have experienced sexual harassment, discrimination and abuse with pro bono legal advice" />
              <LawyerCase image={What} title="Active Global Caregiver" details="Assist a company that ethically sources foreign domestic workers by providing pro bono legal assistance on setting up a charitable legal entity in order to extend their services to low-income families in Hong Kong" />
              <LawyerCase image={Immigration} title="Mender of Things" details="Help a young and passionate NGO increase youth awareness of the law and human rights through the arts by providing legal advice and assistance on setting up a legal entity in Hong Kong and applying for section 88 charitable status" />
              <LawyerCase image={Immigration} title="Serving Islam Team - Hong Kong" details="Assist a local NGO that helps educate the community on ethnic minorities and which also helps ethnic minorities integrate into the community by providing pro bono legal advice on the appropriate legal entity structure and possible application for section 88 charitable status" />
              <LawyerCase image={Immigration} title="StoryTaler" details="Assist a volunteer group focused on promoting mental health in Hong Kong by providing pro bono legal assistance on setting up a legal entity and applying for section 88 charitable status" />
              <LawyerCase image={Immigration} title="V Cycle" details="Support a social enterprise focused on environmental issues by providing pro bono legal advice on setting up a board and formalizing its shareholder arrangements" />
              <LawyerCase image={Immigration} title="OurConservatory" details="Assist an impact investing intermediary with a mission to bridge the gap between social &amp; commercial by establishing a long term legal partnership to support their Tech for Good incubator programme (NEW!)" />
            </div>
          </div>
        </div>
      </GuestLayout>)
     else   
     return (
      <GuestLayout>
      </GuestLayout>)
          }
}
